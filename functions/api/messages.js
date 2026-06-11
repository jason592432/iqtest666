// Cloudflare Pages Function - 留言板 API
// 需要绑定 KV namespace: MESSAGES_KV
// 在 Cloudflare Dashboard → Workers & Pages → 你的项目 → Settings → Functions → KV namespace bindings
// Variable name: MESSAGES_KV, 创建一个 KV namespace (如: iq-messages)

export async function onRequest(context) {
  const { request, env } = context;
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  // GET: 获取所有留言
  if (request.method === 'GET') {
    try {
      const data = await env.MESSAGES_KV.get('messages', 'json');
      return new Response(JSON.stringify(data || []), { headers });
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), { status: 500, headers });
    }
  }

  // POST: 添加留言
  if (request.method === 'POST') {
    try {
      const body = await request.json();
      const text = (body.text || '').trim();
      if (!text) {
        return new Response(JSON.stringify({ error: '留言不能为空' }), { status: 400, headers });
      }
      if (text.length > 500) {
        return new Response(JSON.stringify({ error: '留言太长，最多500字' }), { status: 400, headers });
      }

      const msgs = await env.MESSAGES_KV.get('messages', 'json') || [];
      msgs.push({
        id: Date.now(),
        text: text,
        time: new Date().toLocaleString('zh-CN'),
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
