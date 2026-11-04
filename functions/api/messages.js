// Cloudflare Pages Function - 留言板 API
// 需要绑定 KV namespace: MESSAGES_KV
// 在 Cloudflare Dashboard → Workers & Pages → 你的项目 → Settings → Functions → KV namespace bindings
// Variable name: MESSAGES_KV, 创建一个 KV namespace (如: iq-messages)

import { clientIp, rateLimit, jsonHeaders } from '../_lib/auth.js';

export async function onRequest(context) {
  const { request, env } = context;
  const headers = jsonHeaders();

  // CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  // GET: 获取所有留言
  if (request.method === 'GET') {
    try {
      const data = await env.MESSAGES_KV.get('messages', 'json');
      const list = Array.isArray(data) ? data : [];
      // 用 timestamp 重算北京时间，自动修正历史留言因 UTC 时区导致的 8 小时偏差
      const fixed = list.map(function(m) {
        if (m && m.timestamp) {
          return Object.assign({}, m, { time: formatChinaTime(m.timestamp) });
        }
        return m;
      });
      return new Response(JSON.stringify(fixed), { headers });
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), { status: 500, headers });
    }
  }

  // POST: 添加留言
  if (request.method === 'POST') {
    try {
      const ip = clientIp(request);
      // 同一 IP 10 分钟内最多 5 条留言，挡掉批量灌水
      const limited = await rateLimit(env, 'msg:' + ip, 5, 10 * 60);
      if (!limited.ok) {
        return new Response(JSON.stringify({ error: '发送太频繁，请稍后再试' }), { status: 429, headers });
      }

      const body = await request.json();
      // 去掉控制字符，保留中文与常规标点
      const text = String(body.text || '').replace(/[\u0000-\u001f\u007f]/g, '').trim();
      if (!text) {
        return new Response(JSON.stringify({ error: '留言不能为空' }), { status: 400, headers });
      }
      if (text.length > 500) {
        return new Response(JSON.stringify({ error: '留言太长，最多500字' }), { status: 400, headers });
      }
      // 简单的链接刷屏拦截
      if ((text.match(/https?:\/\//g) || []).length > 2) {
        return new Response(JSON.stringify({ error: '请勿发布大量链接' }), { status: 400, headers });
      }

      const msgs = await env.MESSAGES_KV.get('messages', 'json') || [];
      msgs.push({
        id: Date.now(),
        text: text,
        time: formatChinaTime(Date.now()),
        timestamp: Date.now()
      });
      // 最多保留200条
      if (msgs.length > 200) msgs.splice(0, msgs.length - 200);
      await env.MESSAGES_KV.put('messages', JSON.stringify(msgs));

      return new Response(JSON.stringify({ success: true }), { headers });
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), { status: 500, headers });
    }
  }

  return new Response('Method not allowed', { status: 405, headers });
}

// ---- 中国时间工具函数 ----
// Cloudflare Workers 运行在 UTC 时区。早期留言用 new Date().toLocaleString('zh-CN')
// 生成 time，只做了格式本地化、时区仍按 UTC（比北京时间慢 8 小时）。
// 这里统一用绝对时间戳 +8h 换算成北京时间，格式与前端显示一致（斜杠分隔）。
function formatChinaTime(ts) {
  var china = new Date((ts || Date.now()) + 8 * 60 * 60 * 1000);
  var y = china.getUTCFullYear();
  var m = String(china.getUTCMonth() + 1).padStart(2, '0');
  var d = String(china.getUTCDate()).padStart(2, '0');
  var h = String(china.getUTCHours()).padStart(2, '0');
  var min = String(china.getUTCMinutes()).padStart(2, '0');
  var s = String(china.getUTCSeconds()).padStart(2, '0');
  return y + '/' + m + '/' + d + ' ' + h + ':' + min + ':' + s;
}
