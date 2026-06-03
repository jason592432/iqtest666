// Cloudflare Worker - Handle clean URLs for test pages
// This ensures /wais, /wisc, /binet, /raven serve correctly
// without the edge-level 308 redirect loops.

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Handle clean URLs for SEO test pages → serve from subdirectory
    const cleanUrls = ['/wais', '/wisc', '/binet', '/raven'];
    if (cleanUrls.includes(path)) {
      url.pathname = path + '/index.html';
      return env.ASSETS.fetch(url);
    }

    // Everything else → serve from static assets directly
    return env.ASSETS.fetch(request);
  }
};
