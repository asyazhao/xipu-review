/* ============================================================
   copy.js — 复制图示提示词
   ============================================================ */
(function () {
  var buttons = document.querySelectorAll('[data-copy]');
  if (!buttons.length) return;

  function fallback(text, done) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      done();
    } catch (e) {}
    document.body.removeChild(ta);
  }

  Array.prototype.forEach.call(buttons, function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy') || '';
      var old = btn.textContent;
      var done = function () {
        btn.textContent = '已复制';
        setTimeout(function () { btn.textContent = old; }, 1200);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () {
          fallback(text, done);
        });
      } else {
        fallback(text, done);
      }
    });
  });
})();
