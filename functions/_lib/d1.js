// D1 数据层：把「每天一个大 JSON」改成真正的关系表
// 只在 env.DB 存在时启用；不存在时调用方回退到原来的 KV 实现，可随时回滚。

const T = 24 * 3600 * 1000;

export function chinaDate(ts) {
  const d = new Date((ts || Date.now()) + 8 * 3600 * 1000);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, '0');
  const da = String(d.getUTCDate()).padStart(2, '0');
  return y + '-' + m + '-' + da;
}

export function chinaTime(ts) {
  const d = new Date((ts || Date.now()) + 8 * 3600 * 1000);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, '0');
  const da = String(d.getUTCDate()).padStart(2, '0');
  const h = String(d.getUTCHours()).padStart(2, '0');
  const mi = String(d.getUTCMinutes()).padStart(2, '0');
  const s = String(d.getUTCSeconds()).padStart(2, '0');
  return `${y}-${m}-${da} ${h}:${mi}:${s}`;
}

export function dateList(days) {
  const out = [];
  const now = Date.now();
  for (let i = days - 1; i >= 0; i--) out.push(chinaDate(now - i * T));
  return out;
}

// ---------- 写入 ----------

export async function insertScore(db, r) {
  await db.prepare(
    `INSERT INTO scores (ts,date,test,score,label,dur,pct,ver,src,ip,location,dimp,wrong)
     VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`
  ).bind(
    r.ts, r.date, r.test, r.score, r.label, r.dur, r.pct, r.ver,
    r.src, r.ip, r.location,
    r.dimp ? JSON.stringify(r.dimp) : null,
    r.wrong ? r.wrong.join(',') : ''
  ).run();
}

export async function countRecentByIp(db, table, ip, sinceTs) {
  const row = await db.prepare(
    `SELECT COUNT(*) AS n FROM ${table} WHERE ip = ? AND ts > ?`
  ).bind(ip, sinceTs).first();
  return row ? row.n : 0;
}

export async function bumpStart(db, date, test) {
  await db.prepare(
    `INSERT INTO starts (date,test,n) VALUES (?,?,1)
     ON CONFLICT(date,test) DO UPDATE SET n = n + 1`
  ).bind(date, test).run();
}

export async function insertVisit(db, v) {
  await db.prepare(
    `INSERT INTO visits (ts,date,path,src,country,device,vhash,isnew,vfirst) VALUES (?,?,?,?,?,?,?,?,?)`
  ).bind(v.ts, v.date, v.path, v.src, v.country, v.device, v.vhash, v.isnew, v.vfirst || 0).run();
}

// 从 cookie 里的 v1.<base36秒>.<rand> 解析访客首次出现时间
export function vidFirst(vid) {
  const m = /^v1\.([0-9a-z]{5,10})\./.exec(vid || '');
  if (!m) return 0;
  const n = parseInt(m[1], 36);
  return n ? n * 1000 : 0;
}

export async function countRecentVisits(db, vhash, sinceTs) {
  const row = await db.prepare(
    `SELECT COUNT(*) AS n FROM visits WHERE vhash = ? AND ts > ?`
  ).bind(vhash, sinceTs).first();
  return row ? row.n : 0;
}

// ---------- 读取：答题 ----------

export async function scoreReport(db, days) {
  const dates = dateList(days);
  const from = dates[0];
  const today = dates[dates.length - 1];
  const yesterday = dates[dates.length - 2] || today;

  const [dailyRes, aggRes, byTestRes, histRes, recentRes, wrongRes, startRes] = await db.batch([
    db.prepare(`SELECT date, COUNT(*) c FROM scores WHERE date>=? GROUP BY date`).bind(from),
    db.prepare(`SELECT COUNT(*) n, AVG(score) a, MAX(score) mx, MIN(score) mn,
                       AVG(CASE WHEN dur>0 THEN dur END) ad,
                       AVG(CASE WHEN pct>0 THEN pct END) ap
                FROM scores WHERE date>=?`).bind(from),
    db.prepare(`SELECT test, COUNT(*) c, SUM(score) s FROM scores WHERE date>=? GROUP BY test`).bind(from),
    db.prepare(`SELECT score, COUNT(*) c FROM scores WHERE date>=? GROUP BY score`).bind(from),
    db.prepare(`SELECT ts,test,score,label,ip,location FROM scores WHERE date>=? ORDER BY ts DESC LIMIT 200`).bind(from),
    db.prepare(`SELECT test, wrong FROM scores WHERE date>=? AND wrong IS NOT NULL ORDER BY ts DESC LIMIT 2000`).bind(from),
    db.prepare(`SELECT date, SUM(n) n FROM starts WHERE date>=? GROUP BY date`).bind(from),
  ]);

  const dayCount = {};
  for (const r of dailyRes.results || []) dayCount[r.date] = r.c;
  const dailyStats = dates.map(d => ({ date: d, count: dayCount[d] || 0 }));
  const startCount = {};
  for (const r of startRes.results || []) startCount[r.date] = r.n;
  let startTotal = 0;
  for (const d of dates) startTotal += startCount[d] || 0;

  const agg = (aggRes.results && aggRes.results[0]) || {};
  const total = agg.n || 0;

  const byTest = {};
  for (const r of byTestRes.results || []) byTest[r.test] = { count: r.c, total: r.s };

  const hist = {};
  for (const r of histRes.results || []) hist[r.score] = r.c;

  // 题目质量：直接按测试聚合抽样记录里的 wrong 字段
  const qmap = {};
  for (const r of wrongRes.results || []) {
    if (r.wrong === null || r.wrong === undefined) continue;
    const t = r.test || 'unknown';
    if (!qmap[t]) qmap[t] = { n: 0, w: {} };
    qmap[t].n++;
    if (r.wrong) {
      for (const part of String(r.wrong).split(',')) {
        const i = parseInt(part, 10);
        if (!Number.isFinite(i) || i < 0 || i > 120) continue;
        qmap[t].w[i] = (qmap[t].w[i] || 0) + 1;
      }
    }
  }

  return {
    success: true,
    stats: {
      total,
      yesterday: dayCount[yesterday] || 0,
      today: dayCount[today] || 0,
      avgScore: total ? Math.round(agg.a) : 0,
      maxScore: agg.mx || 0,
      minScore: agg.mn || 0,
      avgDur: agg.ad ? Math.round(agg.ad) : 0,
      avgPct: agg.ap ? +(+agg.ap).toFixed(3) : 0,
      starts: startTotal,
      completion: startTotal >= total * 0.5 ? Math.min(100, Math.round(total / startTotal * 1000) / 10) : 0,
    },
    byTest,
    hist,
    dailyStats,
    scores: (recentRes.results || []).map(r => ({
      id: r.ts, test: r.test, score: r.score, label: r.label,
      ip: r.ip, location: r.location, time: chinaTime(r.ts), timestamp: r.ts
    })),
    qstats: qmap,
  };
}

// ---------- 读取：访问 ----------

export async function visitReport(db, days) {
  const dates = dateList(days);
  const from = dates[0];

  const [dailyRes, aggRes, srcRes, pageRes, devRes, newRes] = await db.batch([
    db.prepare(`SELECT date, COUNT(*) pv, COUNT(DISTINCT vhash) uv FROM visits WHERE date>=? GROUP BY date`).bind(from),
    db.prepare(`SELECT COUNT(*) pv, COUNT(DISTINCT vhash) uv FROM visits WHERE date>=?`).bind(from),
    db.prepare(`SELECT src, COUNT(*) c FROM visits WHERE date>=? GROUP BY src ORDER BY c DESC LIMIT 10`).bind(from),
    db.prepare(`SELECT path, COUNT(*) c FROM visits WHERE date>=? GROUP BY path ORDER BY c DESC LIMIT 10`).bind(from),
    db.prepare(`SELECT device, COUNT(*) c FROM visits WHERE date>=? GROUP BY device`).bind(from),
    db.prepare(`SELECT COUNT(DISTINCT CASE WHEN vfirst > 0 AND vfirst < ? THEN vhash END) ret,
                       COUNT(DISTINCT CASE WHEN vfirst >= ? THEN vhash END) fresh
                FROM visits WHERE date>=?`).bind(Date.parse(from + 'T00:00:00+08:00'), Date.parse(from + 'T00:00:00+08:00'), from),
  ]);

  const byDay = {};
  for (const r of dailyRes.results || []) byDay[r.date] = r;
  const daily = dates.map(d => ({ date: d, pv: (byDay[d] || {}).pv || 0, uv: (byDay[d] || {}).uv || 0 }));
  const today = daily[daily.length - 1];
  const yesterday = daily[daily.length - 2] || { date: '', pv: 0, uv: 0 };

  const agg = (aggRes.results && aggRes.results[0]) || { pv: 0, uv: 0 };
  const nr = (newRes.results && newRes.results[0]) || { ret: 0, fresh: 0 };
  const dev = { mobile: 0, desktop: 0 };
  for (const r of devRes.results || []) {
    if (r.device === 'mobile') dev.mobile = r.c; else dev.desktop = r.c;
  }

  return {
    success: true,
    days,
    today: { date: today.date, pv: today.pv, uv: today.uv },
    yesterday,
    summary: {
      pv: agg.pv || 0,
      uv: agg.uv || 0,
      newVisits: nr.fresh || 0,
      returnVisits: nr.ret || 0,
      vidCoverage: 100,
    },
    daily,
    bySource: (srcRes.results || []).map(r => ({ name: r.src || '直接访问', count: r.c })),
    byPage: (pageRes.results || []).map(r => ({ path: r.path || '/', count: r.c })),
    byDevice: dev,
  };
}

// ---------- 留言 ----------

export async function listMessages(db) {
  const res = await db.prepare(`SELECT id, text, time FROM messages ORDER BY ts ASC LIMIT 200`).all();
  return res.results || [];
}

export async function addMessage(db, m) {
  await db.prepare(`INSERT OR REPLACE INTO messages (id,text,time,ts) VALUES (?,?,?,?)`)
    .bind(m.id, m.text, m.time, m.ts).run();
}

export async function removeMessage(db, id) {
  const res = await db.prepare(`DELETE FROM messages WHERE id = ?`).bind(id).run();
  return (res.meta && res.meta.changes) || 0;
}
