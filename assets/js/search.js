/* ============================================================
   search.js — 全站搜索 + 术语表过滤
   无依赖；搜索索引由构建脚本生成到 data/search-index.js。
   ============================================================ */
(function () {
  'use strict';

  function norm(s) {
    return String(s || '')
      .toLowerCase()
      .replace(/[\u3000\s]+/g, ' ')
      .replace(/[，。；：！？、“”‘’（）【】《》·]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escapeReg(s) {
    return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function highlight(text, tokens) {
    var out = escapeHtml(text);
    if (!tokens.length) return out;
    var re = new RegExp('(' + tokens.map(function (t) {
      return escapeReg(escapeHtml(t));
    }).join('|') + ')', 'gi');
    return out.replace(re, '<mark>$1</mark>');
  }

  function makeSnippet(text, tokens) {
    var raw = String(text || '');
    if (!raw) return '';
    var low = raw.toLowerCase();
    var pos = -1;
    for (var i = 0; i < tokens.length; i++) {
      var p = low.indexOf(tokens[i].toLowerCase());
      if (p >= 0 && (pos < 0 || p < pos)) pos = p;
    }
    if (pos < 0) return raw.slice(0, 140) + (raw.length > 140 ? '…' : '');
    var start = Math.max(0, pos - 60);
    var end = Math.min(raw.length, pos + 80);
    return (start > 0 ? '…' : '') + raw.slice(start, end) + (end < raw.length ? '…' : '');
  }

  /* ---------------- 搜索页 ---------------- */
  var resultsEl = document.getElementById('searchResults');
  if (resultsEl && window.SEARCH_INDEX) {
    var input = document.getElementById('q');
    var meta = document.getElementById('searchMeta');
    var empty = document.getElementById('searchEmpty');
    var chipsWrap = document.getElementById('subjectFilters');
    var activeSubject = '';
    var timer = null;

    var kindLabel = { chapter: '章节', term: '术语', compare: '对比' };

    function currentQuery() {
      return input ? input.value : '';
    }

    function render() {
      var q = norm(currentQuery());
      var tokens = q ? q.split(' ').filter(Boolean) : [];
      resultsEl.innerHTML = '';

      if (!tokens.length) {
        meta.textContent = '输入关键词开始搜索；支持中文与英文术语。';
        empty.hidden = true;
        return;
      }

      var hits = [];
      for (var i = 0; i < window.SEARCH_INDEX.length; i++) {
        var r = window.SEARCH_INDEX[i];
        if (activeSubject && r.s !== activeSubject) continue;
        var hay = norm((r.title || '') + ' ' + (r.text || '') + ' ' + (r.k || ''));
        var ok = true;
        for (var t = 0; t < tokens.length; t++) {
          if (hay.indexOf(tokens[t]) < 0) { ok = false; break; }
        }
        if (!ok) continue;

        var score = 0;
        var title = norm(r.title || '');
        var keys = norm(r.k || '');
        for (var u = 0; u < tokens.length; u++) {
          if (title.indexOf(tokens[u]) >= 0) score += 8;
          if (keys.indexOf(tokens[u]) >= 0) score += 4;
          score += 1;
        }
        if (title.indexOf(q) >= 0) score += 6;
        hits.push({ r: r, score: score });
      }

      hits.sort(function (a, b) {
        if (b.score !== a.score) return b.score - a.score;
        if (a.r.s !== b.r.s) return a.r.s < b.r.s ? -1 : 1;
        return String(a.r.c || '').localeCompare(String(b.r.c || ''));
      });
      hits = hits.slice(0, 30);

      if (!hits.length) {
        meta.textContent = '0 条结果';
        empty.hidden = false;
        return;
      }
      empty.hidden = true;
      meta.textContent = '找到 ' + hits.length + ' 条结果' + (hits.length === 30 ? '（最多显示 30 条）' : '');

      var frag = document.createDocumentFragment();
      hits.forEach(function (h) {
        var r = h.r;
        var metaLine = (kindLabel[r.t] || '内容') + ' · ' + (r.s || '');
        if (r.t === 'chapter' && r.c) {
          metaLine += ' · 第 ' + parseInt(r.c, 10) + ' 章';
          if (r.ct) metaLine += ' · ' + r.ct;
        }

        var item = document.createElement('article');
        item.className = 'search-result';

        var m = document.createElement('p');
        m.className = 'search-result__meta';
        m.textContent = metaLine;

        var title = document.createElement('h2');
        title.className = 'search-result__title';
        var a = document.createElement('a');
        a.href = r.u;
        a.innerHTML = highlight(r.title || '', tokens);
        title.appendChild(a);

        var text = document.createElement('p');
        text.className = 'search-result__text';
        text.innerHTML = highlight(makeSnippet(r.text || '', tokens), tokens);

        item.appendChild(m);
        item.appendChild(title);
        item.appendChild(text);
        frag.appendChild(item);
      });
      resultsEl.appendChild(frag);
    }

    if (chipsWrap) {
      chipsWrap.addEventListener('click', function (e) {
        var b = e.target.closest('.chip');
        if (!b) return;
        activeSubject = b.getAttribute('data-subject') || '';
        Array.prototype.forEach.call(chipsWrap.querySelectorAll('.chip'), function (c) {
          c.classList.toggle('is-active', c === b);
        });
        render();
      });
    }

    if (input) {
      input.addEventListener('input', function () {
        clearTimeout(timer);
        timer = setTimeout(render, 120);
      });
    }

    var initial = '';
    try {
      initial = new URLSearchParams(window.location.search).get('q') || '';
    } catch (e) {}
    if (input && initial) input.value = initial;
    render();
  }

  /* ---------------- 术语表过滤 ---------------- */
  var filter = document.getElementById('termFilter');
  if (filter) {
    var table = document.querySelector('.glossary-table');
    var body = table ? table.querySelector('tbody') : null;
    var emptyEl = document.getElementById('glossaryEmpty');
    var subject = '';
    var chips = document.getElementById('glossarySubjects');

    function filterRows() {
      if (!body) return;
      var q = norm(filter.value);
      var tokens = q ? q.split(' ').filter(Boolean) : [];
      var rows = body.querySelectorAll('tr');
      var shown = 0;

      Array.prototype.forEach.call(rows, function (row) {
        if (row.classList.contains('glossary-empty-row')) return;
        var hay = norm(row.getAttribute('data-search') || row.textContent || '');
        var okSubject = !subject || row.getAttribute('data-subject') === subject;
        var okText = true;
        for (var i = 0; i < tokens.length; i++) {
          if (hay.indexOf(tokens[i]) < 0) { okText = false; break; }
        }
        var show = okSubject && okText;
        row.classList.toggle('is-hidden', !show);
        if (show) shown++;
      });

      if (emptyEl) emptyEl.hidden = shown > 0;
    }

    filter.addEventListener('input', filterRows);

    if (chips) {
      chips.addEventListener('click', function (e) {
        var b = e.target.closest('.chip');
        if (!b) return;
        subject = b.getAttribute('data-subject') || '';
        Array.prototype.forEach.call(chips.querySelectorAll('.chip'), function (c) {
          c.classList.toggle('is-active', c === b);
        });
        filterRows();
      });
    }

    filterRows();
  }
})();
