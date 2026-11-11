// Cloudflare Pages Function - 答题分数记录 API
// POST: 记录一次答题分数（含用时、来源，便于做完成率/渠道分析）
// GET:  查询分数列表（需后台 token：Authorization: Bearer <token>）
// 使用 KV namespace: MESSAGES_KV (与留言板共用)

import { isAdmin, clientIp, jsonHeaders } from '../_lib/auth.js';
import { insertScore, countRecentByIp, bumpStart, scoreReport } from '../_lib/d1.js';

const TESTS = new Set(['wais', 'wisc', 'binet', 'raven', 'raven-spm']);

export async function onRequest(context) {
  const { request, env } = context;
  const headers = jsonHeaders();

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  // ========== POST: 记录分数 ==========
  if (request.method === 'POST') {
    try {
      const ip = clientIp(request);
      const body = await request.json();

      // 开始答题事件：单独计数，用来算完成率（完成数 / 开始数）
      if (body.event === 'start') {
        const t = TESTS.has(body.test) ? body.test : 'unknown';
        if (env.DB) {
          await bumpStart(env.DB, getChinaDate(), t);
        } else {
          const day = getChinaDate();
          const key = 'starts:' + day;
          const cur = (await env.MESSAGES_KV.get(key, 'json')) || { total: 0 };
          cur.total = (cur.total || 0) + 1;
          cur[t] = (cur[t] || 0) + 1;
          await env.MESSAGES_KV.put(key, JSON.stringify(cur), { expirationTtl: 400 * 24 * 3600 });
        }
        return new Response(JSON.stringify({ success: true }), { headers });
      }

      const test = TESTS.has(body.test) ? body.test : 'unknown';
      const score = Math.max(0, Math.min(160, parseInt(body.score, 10) || 0));
      const label = String(body.label || '').slice(0, 20);
      const dur = Math.max(0, Math.min(7200, parseInt(body.dur, 10) || 0));
      const ref = String(body.ref || '').slice(0, 120);

      const country = request.cf?.country || '';
      const city = request.cf?.city || '';
      const location = [city, country].filter(Boolean).join(', ') || '未知';

      const record = {
        id: Date.now(),
        test: test,
        score: score,
        label: label,
        ip: ip,
        location: location,
        time: getChinaTime(),
        timestamp: Date.now()
      };
      if (dur) record.dur = dur;
      if (ref) record.ref = ref;
      // 原始正确率 + 评分版本：以后调整评分曲线时，可以按版本区分，不用反推
      const pct = Number(body.pct);
      if (pct > 0 && pct <= 1) record.pct = Math.round(pct * 10000) / 10000;
      if (body.dimp && typeof body.dimp === 'object') {
        const keys = Object.keys(body.dimp).slice(0, 8);
        const dimp = {};
        for (const k of keys) {
          if (!/^[A-Za-z]{2,6}$/.test(k)) continue;
          const v = Number(body.dimp[k]);
          if (v >= 0 && v <= 1) dimp[k] = Math.round(v * 1000) / 1000;
        }
        if (Object.keys(dimp).length) record.dimp = dimp;
      }
      const ver = parseInt(body.ver, 10);
      if (ver > 0 && ver < 100) record.ver = ver;

      if (env.DB) {
        const recent = await countRecentByIp(env.DB, 'scores', ip, Date.now() - 3600 * 1000);
        if (recent >= 60) {
          return new Response(JSON.stringify({ success: true, skipped: 'rate' }), { headers });
        }
        await insertScore(env.DB, {
          ts: record.timestamp, date: getChinaDate(), test: test, score: score,
          label: label, dur: dur || 0, pct: record.pct || 0, ver: record.ver || 0,
          src: ref, ip: ip, location: location,
          dimp: record.dimp || null, wrong: Array.isArray(body.wrong) ? body.wrong : null,
        });
        return new Response(JSON.stringify({ success: true }), { headers });
      }

      // 存入 KV（按中国日期分片存储，避免单 key 超限）
      const dateKey = getChinaDate();
      const kvKey = 'scores:' + dateKey;
      const existing = await env.MESSAGES_KV.get(kvKey, 'json') || [];

      // 同一 IP 每小时最多 60 条：直接数已有的当天记录，不再额外读写 KV
      const hourAgo = Date.now() - 3600 * 1000;
      let sameIp = 0;
      for (let i = existing.length - 1; i >= 0 && existing[i].timestamp > hourAgo; i--) {
        if (existing[i].ip === ip) sameIp++;
      }
      if (sameIp >= 60) {
        return new Response(JSON.stringify({ success: true, skipped: 'rate' }), { headers });
      }

      existing.push(record);
      // 每天最多存 2000 条，超出则覆盖最早的
      if (existing.length > 2000) existing.splice(0, existing.length - 2000);
      await env.MESSAGES_KV.put(kvKey, JSON.stringify(existing), { expirationTtl: 400 * 24 * 3600 });

      // 题目质量：累计每道题的答错次数，用来发现「答案可能是错的」或「太简单」的题
      if (Array.isArray(body.wrong) && body.n > 0 && test !== 'unknown' && Math.random() < 0.34) {
        try {
          const qKey = 'qstat:' + test;
          const qs = (await env.MESSAGES_KV.get(qKey, 'json')) || { n: 0, w: {} };
          qs.n = (qs.n || 0) + 1;
          qs.w = qs.w || {};
          const n = Math.min(120, parseInt(body.n, 10) || 0);
          for (const i of body.wrong.slice(0, n)) {
            const idx = parseInt(i, 10);
            if (idx >= 0 && idx < n) qs.w[idx] = (qs.w[idx] || 0) + 1;
          }
          await env.MESSAGES_KV.put(qKey, JSON.stringify(qs));
        } catch (e) { /* 统计失败不影响主流程 */ }
      }

      return new Response(JSON.stringify({ success: true }), { headers });
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), { status: 500, headers });
    }
  }

  // ========== GET: 查询分数 ==========
  if (request.method === 'GET') {
    const url = new URL(request.url);
    if (!(await isAdmin(request, env, url))) {
      return new Response(JSON.stringify({ error: '无权限' }), { status: 403, headers });
    }

    try {
      // 支持 ?days=N 查询窗口（默认30，最大365）
      let days = parseInt(url.searchParams.get('days'), 10);
      if (!days || days < 1) days = 30;
      if (days > 365) days = 365;

      if (env.DB) {
        return new Response(JSON.stringify(await scoreReport(env.DB, days)), { headers });
      }

      const today = getChinaDate();
      const dateList = [];
      for (let i = days - 1; i >= 0; i--) {
        dateList.push(addDays(today, -i));
      }

      // 并发读取，避免 365 天窗口串行 365 次 KV 读取导致超时
      const raw = await Promise.all(dateList.map(d => env.MESSAGES_KV.get('scores:' + d, 'json', { cacheTtl: 60 })));
      const [startRaw, qstatRaw] = await Promise.all([
        Promise.all(dateList.map(d => env.MESSAGES_KV.get('starts:' + d, 'json', { cacheTtl: 60 }))),
        Promise.all([...TESTS].map(t => env.MESSAGES_KV.get('qstat:' + t, 'json', { cacheTtl: 300 })))
      ]);

      const allScores = [];
      const dailyStats = [];
      const byDayCount = {};
      let startTotal = 0;
      for (let i = 0; i < dateList.length; i++) {
        const sd = startRaw[i];
        startTotal += (sd && sd.total) ? sd.total : 0;
        const arr = Array.isArray(raw[i]) ? raw[i] : [];
        byDayCount[dateList[i]] = arr.length;
        dailyStats.push({ date: dateList[i], count: arr.length });
        for (let k = 0; k < arr.length; k++) allScores.push(arr[k]);
      }

      allScores.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

      const yesterdayKey = addDays(today, -1);
      const todayCount = byDayCount[today] || 0;
      const yesterdayCount = byDayCount[yesterdayKey] || 0;

      let sum = 0, max = 0, min = 0, durSum = 0, durN = 0, pctSum = 0, pctN = 0;
      const byTest = {};
      const bySource = {};
      const hist = {};   // 分数直方图，用于校准，不含任何个人信息
      for (const r of allScores) {
        const s = r.score || 0;
        sum += s;
        if (s > max) max = s;
        if (min === 0 || s < min) min = s;
        const t = r.test || 'unknown';
        if (!byTest[t]) byTest[t] = { count: 0, total: 0 };
        byTest[t].count++;
        byTest[t].total += s;
        if (r.dur > 0) { durSum += r.dur; durN++; }
        if (r.ref) bySource[r.ref] = (bySource[r.ref] || 0) + 1;
        const b = Math.round(s);
        hist[b] = (hist[b] || 0) + 1;
        if (typeof r.pct === 'number') { pctSum += r.pct; pctN++; }
      }

      const stats = {
        total: allScores.length,
        yesterday: yesterdayCount,
        today: todayCount,
        avgScore: allScores.length ? Math.round(sum / allScores.length) : 0,
        maxScore: max,
        minScore: min,
        avgDur: durN ? Math.round(durSum / durN) : 0,
        avgPct: pctN ? +(pctSum / pctN).toFixed(3) : 0,
        starts: startTotal,
        completion: startTotal ? Math.min(100, Math.round(allScores.length / startTotal * 1000) / 10) : 0,
      };

      const sourceList = Object.keys(bySource)
        .map(k => ({ name: k, count: bySource[k] }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);

      return new Response(JSON.stringify({
        success: true,
        stats: stats,
        byTest: byTest,
        bySource: sourceList,
        hist: hist,
        qstats: buildQstats(qstatRaw),
        dailyStats: dailyStats,
        scores: allScores.slice(0, 200)
      }), { headers });
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), { status: 500, headers });
    }
  }

  return new Response('Method not allowed', { status: 405, headers });
}

// ---- 中国时间工具函数 ----
// Cloudflare Workers 运行在 UTC 时区，需要手动转北京时间 (UTC+8)

function getChinaTime() {
  var now = new Date();
  var china = new Date(now.getTime() + 8 * 60 * 60 * 1000);
  var y = china.getUTCFullYear();
  var m = String(china.getUTCMonth() + 1).padStart(2, '0');
  var d = String(china.getUTCDate()).padStart(2, '0');
  var h = String(china.getUTCHours()).padStart(2, '0');
  var min = String(china.getUTCMinutes()).padStart(2, '0');
  var s = String(china.getUTCSeconds()).padStart(2, '0');
  return y + '-' + m + '-' + d + ' ' + h + ':' + min + ':' + s;
}

function getChinaDate() {
  var now = new Date();
  var china = new Date(now.getTime() + 8 * 60 * 60 * 1000);
  var y = china.getUTCFullYear();
  var m = String(china.getUTCMonth() + 1).padStart(2, '0');
  var d = String(china.getUTCDate()).padStart(2, '0');
  return y + '-' + m + '-' + d;
}

function buildQstats(arr) {
  const out = {};
  const tests = [...TESTS];
  for (let i = 0; i < tests.length; i++) {
    const q = arr[i];
    if (q && q.n) out[tests[i]] = { n: q.n, w: q.w || {} };
  }
  return out;
}

function addDays(dateStr, n) {
  const parts = dateStr.split('-');
  const d = new Date(Date.UTC(+parts[0], +parts[1] - 1, +parts[2]));
  d.setUTCDate(d.getUTCDate() + n);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(d.getUTCDate()).padStart(2, '0');
  return y + '-' + m + '-' + dd;
}
