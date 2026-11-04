// POST /api/auth  —— 后台登录，用密码换取短期签名 token
// body: { "password": "..." }
// 返回: { ok: true, token, expiresIn }
// 失败: 401 密码错误 / 429 尝试过于频繁

import { adminPassword, issueToken, safeEqual, clientIp, rateLimit, jsonHeaders } from '../_lib/auth.js';

export async function onRequest(context) {
  const { request, env } = context;
  const headers = jsonHeaders();

  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers });
  }

  const ip = clientIp(request);
  // 15 分钟内最多 10 次尝试，超过直接 429
  const limited = await rateLimit(env, 'auth:' + ip, 10, 15 * 60);
  if (!limited.ok) {
    return new Response(JSON.stringify({
      error: '尝试次数过多，请 15 分钟后再试',
      retryAfter: limited.retryAfter
    }), { status: 429, headers: jsonHeaders({ 'Retry-After': String(limited.retryAfter || 900) }) });
  }

  let password = '';
  try {
    const body = await request.json();
    password = String(body.password || '').slice(0, 200);
  } catch (e) {
    return new Response(JSON.stringify({ error: '请求格式错误' }), { status: 400, headers });
  }

  if (!password) {
    return new Response(JSON.stringify({ error: '请输入密码' }), { status: 400, headers });
  }

  const ok = await safeEqual(password, adminPassword(env));
  if (!ok) {
    // 轻微延迟，削弱自动化爆破
    await new Promise(r => setTimeout(r, 350));
    return new Response(JSON.stringify({ error: '密码错误', remaining: limited.remaining }), { status: 401, headers });
  }

  const { token, expiresIn } = await issueToken(env);
  return new Response(JSON.stringify({ ok: true, token, expiresIn }), { headers });
}
