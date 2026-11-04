// Cloudflare Pages Function - 答题分数记录 API
// POST: 记录一次答题分数（含用时、来源，便于做完成率/渠道分析）
// GET:  查询分数列表（需后台 token：Authorization: Bearer <token>）
// 使用 KV namespace: MESSAGES_KV (与留言板共用)

import { isAdmin, clientIp, rateLimit, jsonHeaders } from '../_lib/auth.js';

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
      // 单 IP 每小时最多 60 条，防止刷数据；超限静默丢弃（不打扰真实用户）
      const limited = await rateLimit(env, 'score:' + ip, 60, 60 * 60);
      if (!limited.ok) {
        return new Response(JSON.stringify({ success: true, skipped: 'rate' }), { headers });
      }

      const body = await request.json();
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

      // 存入 KV（按中国日期分片存储，避免单 key 超限）
      const dateKey = getChinaDate();
      const kvKey = 'scores:' + dateKey;
      const existing = await env.MESSAGES_KV.get(kvKey, 'json') || [];
      existing.push(record);
      // 每天最多存 2000 条，超出则覆盖最早的
      if (existing.length > 2000) existing.splice(0, existing.length - 2000);
      await env.MESSAGES_KV.put(kvKey, JSON.stringify(existing));

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

      const today = getChinaDate();
      const dateList = [];
      for (let i = days - 1; i >= 0; i--) {
        dateList.push(addDays(today, -i));
      }

      // 并发读取，避免 365 天窗口串行 365 次 KV 读取导致超时
      const raw = await Promise.all(dateList.map(d => env.MESSAGES_KV.get('scores:' + d, 'json')));

      const allScores = [];
      const dailyStats = [];
      const byDayCount = {};
      for (let i = 0; i < dateList.length; i++) {
        const arr = Array.isArray(raw[i]) ? raw[i] : [];
        byDayCount[dateList[i]] = arr.length;
        dailyStats.push({ date: dateList[i], count: arr.length });
        for (let k = 0; k < arr.length; k++) allScores.push(arr[k]);
      }

      allScores.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

      const yesterdayKey = addDays(today, -1);
      const todayCount = byDayCount[today] || 0;
      const yesterdayCount = byDayCount[yesterdayKey] || 0;

      let sum = 0, max = 0, min = 0, durSum = 0, durN = 0;
      const byTest = {};
      const bySource = {};
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
      }

      const stats = {
        total: allScores.length,
        yesterday: yesterdayCount,
        today: todayCount,
        avgScore: allScores.length ? Math.round(sum / allScores.length) : 0,
        maxScore: max,
        minScore: min,
        avgDur: durN ? Math.round(durSum / durN) : 0,
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

function addDays(dateStr, n) {
  const parts = dateStr.split('-');
  const d = new Date(Date.UTC(+parts[0], +parts[1] - 1, +parts[2]));
  d.setUTCDate(d.getUTCDate() + n);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(d.getUTCDate()).padStart(2, '0');
  return y + '-' + m + '-' + dd;
}
