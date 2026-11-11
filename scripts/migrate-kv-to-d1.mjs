#!/usr/bin/env node
/**
 * 把 KV 里的历史数据迁移到 D1。
 *
 * 用法：
 *   CF_TOKEN=xxx CF_ACCOUNT_ID=yyy CF_NAMESPACE_ID=zzz D1_DATABASE_ID=www \
 *     node scripts/migrate-kv-to-d1.mjs [--dry-run]
 *
 * 需要的 token 权限：
 *   Account → Workers KV Storage → Edit（读历史）
 *   Account → D1 → Edit（写入）
 */
const CF_TOKEN = process.env.CF_TOKEN;
const ACCOUNT = process.env.CF_ACCOUNT_ID;
const NS = process.env.CF_NAMESPACE_ID;
const DB = process.env.D1_DATABASE_ID;
const DRY = process.argv.includes('--dry-run');
const SINCE = (process.argv.find(a => a.startsWith('--since=')) || '').split('=')[1] || '';

if (!CF_TOKEN || !ACCOUNT || !NS || !DB) {
  console.error('缺少环境变量：CF_TOKEN / CF_ACCOUNT_ID / CF_NAMESPACE_ID / D1_DATABASE_ID');
  process.exit(1);
}

const API = 'https://api.cloudflare.com/client/v4';
const H = { Authorization: `Bearer ${CF_TOKEN}` };

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function kvKeys(prefix) {
  const out = [];
  let cursor = '';
  for (;;) {
    const url = `${API}/accounts/${ACCOUNT}/storage/kv/namespaces/${NS}/keys?prefix=${encodeURIComponent(prefix)}&limit=1000${cursor ? `&cursor=${encodeURIComponent(cursor)}` : ''}`;
    const r = await fetch(url, { headers: H });
    const j = await r.json();
    if (!j.success) throw new Error('列举 KV 失败: ' + JSON.stringify(j.errors));
    out.push(...j.result.map(k => k.name));
    if (!j.result_info || !j.result_info.cursor) break;
    cursor = j.result_info.cursor;
  }
  return out;
}

async function kvGet(key) {
  const r = await fetch(`${API}/accounts/${ACCOUNT}/storage/kv/namespaces/${NS}/values/${encodeURIComponent(key)}`, { headers: H });
  if (!r.ok) return null;
  const text = await r.text();
  try { return JSON.parse(text); } catch (e) { return text; }
}

async function d1(sql, params = []) {
  if (DRY) return { success: true, result: [{ results: [] }] };
  const r = await fetch(`${API}/accounts/${ACCOUNT}/d1/database/${DB}/query`, {
    method: 'POST',
    headers: { ...H, 'Content-Type': 'application/json' },
    body: JSON.stringify({ sql, params }),
  });
  const j = await r.json();
  if (!j.success) throw new Error('D1 失败: ' + JSON.stringify(j.errors) + ' | ' + sql.slice(0, 80));
  return j;
}

function chinaDateOf(ts) {
  const d = new Date(ts + 8 * 3600 * 1000);
  return d.toISOString().slice(0, 10);
}

async function main() {
  // ---------- 答题 ----------
  const scoreKeys = (await kvKeys('scores:')).filter(k => /^scores:\d{4}-\d{2}-\d{2}$/.test(k));
  console.log('答题分片:', scoreKeys.length);

  let scoreRows = 0;
  const BATCH = 7;   // D1 单条 SQL 最多 100 个绑定变量，scores 13 列 → 7 行
  for (const key of scoreKeys) {
    const arr = await kvGet(key);
    if (!Array.isArray(arr) || !arr.length) continue;
    const day = key.slice(7);
    if (SINCE && day < SINCE) continue;
    await d1('DELETE FROM scores WHERE date = ?', [day]);

    // 用 json_each 一次插入多行：1 个绑定变量，不受 D1 的 100 变量上限约束
    for (let i = 0; i < arr.length; i += 200) {
      const chunk = arr.slice(i, i + 200).map(r => ({
        ts: r.timestamp || r.id || Date.now(),
        date: day,
        test: r.test || 'unknown',
        score: r.score || 0,
        label: r.label || '',
        dur: r.dur || 0,
        pct: typeof r.pct === 'number' ? r.pct : 0,
        ver: r.ver || 0,
        src: r.ref || '',
        ip: r.ip || '',
        location: r.location || '',
        dimp: r.dimp ? JSON.stringify(r.dimp) : null,
        wrong: Array.isArray(r.wrong) ? r.wrong.join(',') : (r.wrong === '' ? '' : null),
      }));
      await d1(
        `INSERT INTO scores (ts,date,test,score,label,dur,pct,ver,src,ip,location,dimp,wrong)
         SELECT json_extract(value,'$.ts'), json_extract(value,'$.date'), json_extract(value,'$.test'),
                json_extract(value,'$.score'), json_extract(value,'$.label'), json_extract(value,'$.dur'),
                json_extract(value,'$.pct'), json_extract(value,'$.ver'), json_extract(value,'$.src'),
                json_extract(value,'$.ip'), json_extract(value,'$.location'), json_extract(value,'$.dimp'),
                json_extract(value,'$.wrong')
         FROM json_each(?)`,
        [JSON.stringify(chunk)]
      );
      scoreRows += chunk.length;
    }
  }
  console.log('答题记录:', scoreRows);

  // ---------- 开始答题 ----------
  const startKeys = (await kvKeys('starts:')).filter(k => /^starts:\d{4}-\d{2}-\d{2}$/.test(k));
  let startRows = 0;
  for (const key of startKeys) {
    const obj = await kvGet(key);
    if (!obj || typeof obj !== 'object') continue;
    for (const [t, n] of Object.entries(obj)) {
      if (t === 'total' || !n) continue;
      await d1(`INSERT INTO starts (date,test,n) VALUES (?,?,?) ON CONFLICT(date,test) DO UPDATE SET n = excluded.n`,
        [key.slice(7), t, n]);
      startRows++;
    }
  }
  console.log('开始答题计数:', startRows);

  // ---------- 访问 ----------
  const visitKeys = (await kvKeys('visits:')).filter(k => /^visits:\d{4}-\d{2}-\d{2}$/.test(k));
  let visitRows = 0;
  for (const key of visitKeys) {
    const arr = await kvGet(key);
    if (!Array.isArray(arr) || !arr.length) continue;
    const vday = key.slice(7);
    if (SINCE && vday < SINCE) continue;
    await d1('DELETE FROM visits WHERE date = ?', [vday]);
    for (let i = 0; i < arr.length; i += 200) {
      const chunk = arr.slice(i, i + 200).map(r => ({
        ts: r.t || Date.now(), date: vday, path: r.p || '/', src: r.r || '',
        country: r.c || '', device: r.d || 'desktop', vhash: r.h || '', isnew: r.n ? 1 : 0,
      }));
      await d1(
        `INSERT INTO visits (ts,date,path,src,country,device,vhash,isnew)
         SELECT json_extract(value,'$.ts'), json_extract(value,'$.date'), json_extract(value,'$.path'),
                json_extract(value,'$.src'), json_extract(value,'$.country'), json_extract(value,'$.device'),
                json_extract(value,'$.vhash'), json_extract(value,'$.isnew')
         FROM json_each(?)`,
        [JSON.stringify(chunk)]
      );
      visitRows += chunk.length;
    }
  }
  console.log('访问记录:', visitRows);

  // ---------- 留言 ----------
  const msgs = await kvGet('messages');
  let msgRows = 0;
  if (Array.isArray(msgs)) {
    for (const m of msgs) {
      if (!m || !m.text) continue;
      await d1(`INSERT OR REPLACE INTO messages (id,text,time,ts) VALUES (?,?,?,?)`,
        [m.id || Date.now(), String(m.text), m.time || '', m.timestamp || m.id || Date.now()]);
      msgRows++;
    }
  }
  console.log('留言:', msgRows);

  console.log(DRY ? '（dry-run，未实际写入）' : '迁移完成');
}

main().catch(e => { console.error(e); process.exit(1); });
