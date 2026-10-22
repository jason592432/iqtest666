// 全站访问统计埋点（轻量，不影响页面）
// 通过 /api/visit 上报一次页面访问：路径 + 来源。
// 不使用 cookie、不采集个人身份信息；服务端仅对 IP 做哈希去重。
(function () {
  try {
    // 后台 / admin 页面自身不计入统计
    if (location.pathname.indexOf('/admin') === 0) return;

    var payload = JSON.stringify({
      path: location.pathname,
      ref: document.referrer || ''
    });

    if (navigator.sendBeacon) {
      var blob = new Blob([payload], { type: 'application/json' });
      navigator.sendBeacon('/api/visit', blob);
    } else {
      fetch('/api/visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        keepalive: true
      }).catch(function () {});
    }
  } catch (e) {}
})();
