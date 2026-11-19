/* ============================================================
   theme.js — 主题切换与持久化
   初始主题由 <head> 内联脚本设置，避免首屏闪烁。
   ============================================================ */
(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.theme-toggle');
  if (!btn) return;

  function sync(t) {
    var dark = t === 'dark';
    btn.setAttribute('aria-pressed', String(dark));
    btn.setAttribute('aria-label', dark ? '切换浅色主题' : '切换深色主题');
    btn.setAttribute('title', dark ? '切换浅色主题' : '切换深色主题');
  }

  function apply(t, persist) {
    root.dataset.theme = t;
    sync(t);
    if (persist) {
      try { localStorage.setItem('xipu.theme', t); } catch (e) {}
    }
  }

  sync(root.dataset.theme || 'light');

  btn.addEventListener('click', function () {
    apply(root.dataset.theme === 'dark' ? 'light' : 'dark', true);
  });
})();
