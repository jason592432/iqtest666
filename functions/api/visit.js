// Cloudflare Pages Function - 全站访问统计 API
// POST: 记录一次页面访问（path / referrer / 国家 / 设备），IP 仅做哈希去重不存原值
// GET:  查询访问统计（需 admin token），返回 PV / UV / 来源 / 热门页面 / 设备
// 使用 KV namespace: MESSAGES_KV（与留言、分数共用）

export async function onRequest(context) {
  const { request, env } = context;
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  // ========== POST: 记录访问 ==========
  if (request.method === 'POST') {
    try {
      let body = {};
      try { body = await request.json(); } catch (e) { body = {}; }
      const path = String(body.path || '/').slice(0, 200);
      const ref = String(body.ref || '').slice(0, 300);
      const ua = request.headers.get('User-Agent') || '';

      // 过滤明显爬虫 / 自动化工具
      if (/bot|crawl|spider|slurp|bingpreview|facebookexternalhit|headless|phantom|python-requests|curl|wget/i.test(ua)) {
        return new Response(JSON.stringify({ success: true, skipped: 'bot' }), { headers });
      }

      const ip = request.headers.get('CF-Connecting-IP') || request.headers.get('X-Forwarded-For') || 'unknown';
      const ipHash = hashStr(ip);
      const country = (request.cf && request.cf.country) ? request.cf.country : '';
      const device = /mobile|android|iphone|ipad|ipod/i.test(ua) ? 'mobile' : 'desktop';

      const record = { t: Date.now(), p: path, r: ref, c: country, d: device, h: ipHash };

      const kvKey = 'visits:' + getChinaDate();
      const existing = (await env.MESSAGES_KV.get(kvKey, 'json')) || [];
      existing.push(record);
      // 每天最多 3000 条，超出则丢弃最早的
      if (existing.length > 3000) existing.splice(0, existing.length - 3000);
      await env.MESSAGES_KV.put(kvKey, JSON.stringify(existing));

      return new Response(JSON.stringify({ success: true }), { headers });
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), { status: 500, headers });
    }
  }

  // ========== GET: 查询统计 ==========
  if (request.method === 'GET') {
    const url = new URL(request.url);
    if (url.searchParams.get('token') !== 'admin123') {
      return new Response(JSON.stringify({ error: '无权限' }), { status: 403, headers });
    }
    try {
      let days = parseInt(url.searchParams.get('days'), 10);
      if (!days || days < 1) days = 30;
      if (days > 365) days = 365;

      const daily = [];
      const allRecords = [];
      for (let i = days - 1; i >= 0; i--) {
        const d = new Date(Date.now() + 8 * 3600 * 1000);
        d.setUTCDate(d.getUTCDate() - i);
        const y = d.getUTCFullYear();
        const mo = String(d.getUTCMonth() + 1).padStart(2, '0');
        const da = String(d.getUTCDate()).padStart(2, '0');
        const dateStr = y + '-' + mo + '-' + da;
        let arr = await env.MESSAGES_KV.get('visits:' + dateStr, 'json');
        arr = Array.isArray(arr) ? arr : [];
        const uvSet = {};
        for (let k = 0; k < arr.length; k++) { if (arr[k].h) uvSet[arr[k].h] = 1; }
        daily.push({ date: dateStr, pv: arr.length, uv: Object.keys(uvSet).length });
        for (let k = 0; k < arr.length; k++) allRecords.push(arr[k]);
      }

      // 窗口汇总：PV = 记录总数，UV = 窗口内去重设备指纹
      const totalPv = allRecords.length;
      const uvAll = {};
      const srcMap = {}, pageMap = {};
      const devMap = { mobile: 0, desktop: 0 };
      for (let k = 0; k < allRecords.length; k++) {
        const r = allRecords[k];
        if (r.h) uvAll[r.h] = 1;
        const sname = parseSource(r.r);
        srcMap[sname] = (srcMap[sname] || 0) + 1;
        const pg = r.p || '/';
        pageMap[pg] = (pageMap[pg] || 0) + 1;
        if (r.d === 'mobile') devMap.mobile++; else devMap.desktop++;
      }
      const totalUv = Object.keys(uvAll).length;

      const today = daily[daily.length - 1] || { date: '', pv: 0, uv: 0 };
      const yesterday = daily[daily.length - 2] || { date: '', pv: 0, uv: 0 };

      const bySource = Object.keys(srcMap)
        .map(function (k) { return { name: k, count: srcMap[k] }; })
        .sort(function (a, b) { return b.count - a.count; })
        .slice(0, 10);
      const byPage = Object.keys(pageMap)
        .map(function (k) { return { path: k, count: pageMap[k] }; })
        .sort(function (a, b) { return b.count - a.count; })
        .slice(0, 10);

      return new Response(JSON.stringify({
        success: true,
        days: days,
        today: today,
        yesterday: yesterday,
        summary: { pv: totalPv, uv: totalUv },
        daily: daily,
        bySource: bySource,
        byPage: byPage,
        byDevice: devMap
      }), { headers });
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), { status: 500, headers });
    }
  }

  return new Response('Method not allowed', { status: 405, headers });
}

// ---- 工具函数 ----

function getChinaDate() {
  const d = new Date(Date.now() + 8 * 3600 * 1000);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, '0');
  const da = String(d.getUTCDate()).padStart(2, '0');
  return y + '-' + m + '-' + da;
}

// 解析来源域名 → 友好名称
function parseSource(ref) {
  if (!ref) return '直接访问';
  try {
    const u = new URL(ref);
    const host = u.hostname.replace(/^www\./, '');
    if (/iq-test\.com\.cn|iqtest-hub\.com|iq-test\.com/.test(host)) return '站内跳转';
    if (/baidu\.com/.test(host)) return '百度';
    if (/google\./.test(host)) return 'Google';
    if (/weixin|wechat|qq\.com/.test(host)) return '微信/QQ';
    if (/weibo/.test(host)) return '微博';
    if (/xiaohongshu|xhslink/.test(host)) return '小红书';
    if (/douyin|tiktok/.test(host)) return '抖音';
    if (/bing\.com/.test(host)) return 'Bing';
    if (/sogou/.test(host)) return '搜狗';
    if (/so\.com$/.test(host)) return '360搜索';
    return host;
  } catch (e) {
    return '直接访问';
  }
}

// 简单字符串哈希（用于 IP 去重，不存原始 IP）
function hashStr(s) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) + h) + s.charCodeAt(i);
    h = h & 0xffffffff;
  }
  return (h >>> 0).toString(36);
}
