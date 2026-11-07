// 共享鉴权工具（不被路由）
// 后台登录：POST /api/auth {password} → 换取短期签名 token（默认 12 小时）
// 其他接口：请求头 Authorization: Bearer <token>
//
// 说明：
// - 密码可通过环境变量 ADMIN_PASSWORD 覆盖，避免改代码才能换密码。
// - token 用 HMAC-SHA256 签名，密钥由密码派生；不落库、可无状态校验。
// - 旧版 ?token=admin123 的做法已废弃：接口只接受签名 token。

const DEFAULT_ADMIN_PASSWORD = 'admin2311';
const TOKEN_TTL_SEC = 12 * 60 * 60;
const enc = new TextEncoder();

export function adminPassword(env) {
  const p = env && env.ADMIN_PASSWORD;
  return (typeof p === 'string' && p.length >= 8) ? p : DEFAULT_ADMIN_PASSWORD;
}

function b64url(bytes) {
  let s = '';
  const arr = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  for (let i = 0; i < arr.length; i++) s += String.fromCharCode(arr[i]);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function b64urlDecode(str) {
  const s = str.replace(/-/g, '+').replace(/_/g, '/');
  const pad = s.length % 4 ? '='.repeat(4 - (s.length % 4)) : '';
  const bin = atob(s + pad);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function hmacKey(env) {
  return crypto.subtle.importKey(
    'raw', enc.encode(adminPassword(env) + '|iq-admin-token-v1'),
    { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']
  );
}

export async function issueToken(env, ttlSec) {
  const ttl = ttlSec || TOKEN_TTL_SEC;
  const exp = Math.floor(Date.now() / 1000) + ttl;
  const nonce = b64url(crypto.getRandomValues(new Uint8Array(9)));
  const payload = exp + '.' + nonce;
  const sig = await crypto.subtle.sign('HMAC', await hmacKey(env), enc.encode(payload));
  return { token: payload + '.' + b64url(sig), expiresIn: ttl };
}

export async function verifyToken(env, token) {
  if (!token || typeof token !== 'string' || token.length > 200) return false;
  const parts = token.split('.');
  if (parts.length !== 3) return false;
  const payload = parts[0] + '.' + parts[1];
  const exp = parseInt(parts[0], 10);
  if (!exp || exp * 1000 < Date.now()) return false;
  try {
    return await crypto.subtle.verify('HMAC', await hmacKey(env), b64urlDecode(parts[2]), enc.encode(payload));
  } catch (e) {
    return false;
  }
}

// 常量时间比较，避免逐字符提前返回
export async function safeEqual(a, b) {
  const da = await crypto.subtle.digest('SHA-256', enc.encode(String(a)));
  const db = await crypto.subtle.digest('SHA-256', enc.encode(String(b)));
  const ua = new Uint8Array(da), ub = new Uint8Array(db);
  let diff = 0;
  for (let i = 0; i < ua.length; i++) diff |= ua[i] ^ ub[i];
  return diff === 0;
}

export function clientIp(request) {
  return request.headers.get('CF-Connecting-IP')
    || (request.headers.get('X-Forwarded-For') || '').split(',')[0].trim()
    || 'unknown';
}

// 固定窗口限流：同一个 key 在 windowSec 内最多 limit 次
export async function rateLimit(env, key, limit, windowSec) {
  if (!env || !env.MESSAGES_KV) return { ok: true, remaining: limit };
  const bucket = Math.floor(Date.now() / 1000 / windowSec);
  const kvKey = 'rl:' + key + ':' + bucket;
  let cur = 0;
  try {
    cur = parseInt(await env.MESSAGES_KV.get(kvKey), 10) || 0;
  } catch (e) { return { ok: true, remaining: limit }; }
  if (cur >= limit) return { ok: false, remaining: 0, retryAfter: windowSec - (Math.floor(Date.now() / 1000) % windowSec) };
  try {
    await env.MESSAGES_KV.put(kvKey, String(cur + 1), { expirationTtl: windowSec + 60 });
  } catch (e) { /* 限流失败不阻断业务 */ }
  return { ok: true, remaining: limit - cur - 1 };
}

export async function isAdmin(request, env, url) {
  const auth = request.headers.get('Authorization') || '';
  let token = auth.toLowerCase().startsWith('bearer ') ? auth.slice(7).trim() : '';
  if (!token) token = url.searchParams.get('token') || '';
  if (!token) return false;
  return verifyToken(env, token);
}

export function jsonHeaders(extra) {
  return Object.assign({
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Robots-Tag': 'noindex, nofollow',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  }, extra || {});
}
