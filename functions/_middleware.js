// 全站中间件：www → 裸域 301（_redirects 不支持绝对地址，只能在这里处理）
// 其他请求直接放行给静态资源 / Functions
export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.slice(4);
    return Response.redirect(url.toString(), 301);
  }

  return next();
}
