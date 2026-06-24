// Cloudflare Pages Function - 答题分数记录 API
// POST: 记录一次答题分数
// GET:  查询分数列表（需 admin token）
// 使用 KV namespace: MESSAGES_KV (与留言板共用)

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

  // ========== POST: 记录分数 ==========
  if (request.method === 'POST') {
    try {
      const body = await request.json();
      const test = body.test || 'unknown';
      const score = parseInt(body.score) || 0;
      const label = body.label || '';

      // 获取访客 IP
      const ip = request.headers.get('CF-Connecting-IP') || 
                 request.headers.get('X-Forwarded-For') || 
                 'unknown';

      // 获取国家/城市（Cloudflare 提供的）
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

      // 存入 KV（按中国日期分片存储，避免单 key 超限）
      const dateKey = getChinaDate();
      const kvKey = 'scores:' + dateKey;
      const existing = await env.MESSAGES_KV.get(kvKey, 'json') || [];
      existing.push(record);
      // 每天最多存 500 条，超出则覆盖最早的
      if (existing.length > 500) existing.splice(0, existing.length - 500);
      await env.MESSAGES_KV.put(kvKey, JSON.stringify(existing));

      return new Response(JSON.stringify({ success: true }), { headers });
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), { status: 500, headers });
    }
  }

  // ========== GET: 查询分数 ==========
  if (request.method === 'GET') {
    // 简单权限校验：URL 参数 token=admin123
    const url = new URL(request.url);
    const token = url.searchParams.get('token');
    if (token !== 'admin123') {
      return new Response(JSON.stringify({ error: '无权限' }), { status: 403, headers });
    }

    try {
      // 获取近 30 天的分数数据（使用中国日期）
      const allScores = [];
      const dailyStats = [];
      const todayChina = new Date(Date.now() + 8 * 60 * 60 * 1000); // 北京时间
      for (let i = 0; i < 30; i++) {
        var d = new Date(todayChina);
        d.setDate(d.getDate() - i);
        var y = d.getUTCFullYear();
        var m = String(d.getUTCMonth() + 1).padStart(2, '0');
        var dd = String(d.getUTCDate()).padStart(2, '0');
        const dateStr = y + '-' + m + '-' + dd;
        const key = 'scores:' + dateStr;
        const dayScores = await env.MESSAGES_KV.get(key, 'json');
        var count = (dayScores && Array.isArray(dayScores)) ? dayScores.length : 0;
        if (dayScores && Array.isArray(dayScores)) {
          allScores.push(...dayScores);
        }
        dailyStats.push({ date: dateStr, count: count });
      }
      // dailyStats 按日期升序排列（最早在前）
      dailyStats.reverse();
      // 按时间倒序排列
      allScores.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

      // 获取昨日答题次数
      var yesterdayChina = new Date(todayChina);
      yesterdayChina.setDate(yesterdayChina.getDate() - 1);
      var yy = yesterdayChina.getUTCFullYear();
      var ym = String(yesterdayChina.getUTCMonth() + 1).padStart(2, '0');
      var yd = String(yesterdayChina.getUTCDate()).padStart(2, '0');
      var yesterdayKey = 'scores:' + yy + '-' + ym + '-' + yd;
      var yesterdayData = await env.MESSAGES_KV.get(yesterdayKey, 'json') || [];
      var yesterdayCount = Array.isArray(yesterdayData) ? yesterdayData.length : 0;

      // 统计信息
      const stats = {
        total: allScores.length,
        yesterday: yesterdayCount,
        avgScore: allScores.length > 0 ? Math.round(allScores.reduce((s, r) => s + r.score, 0) / allScores.length) : 0,
        maxScore: allScores.length > 0 ? Math.max(...allScores.map(r => r.score)) : 0,
        minScore: allScores.length > 0 ? Math.min(...allScores.map(r => r.score)) : 0,
      };

      // 按测试类型分组
      const byTest = {};
      allScores.forEach(r => {
        const t = r.test || 'unknown';
        if (!byTest[t]) byTest[t] = { count: 0, total: 0 };
        byTest[t].count++;
        byTest[t].total += r.score;
      });

      return new Response(JSON.stringify({
        success: true,
        stats: stats,
        byTest: byTest,
        dailyStats: dailyStats,
        scores: allScores.slice(0, 200) // 最多返回 200 条
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
  // 加上 8 小时得到北京时间
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
