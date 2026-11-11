/* Renders a project page from window.PROJECTS (see projects.js). */
(function () {
  var id = new URLSearchParams(window.location.search).get('id');
  var all = window.PROJECTS || {};
  var p = id && Object.prototype.hasOwnProperty.call(all, id) ? all[id] : null;
  var $ = function (x) { return document.getElementById(x); };

  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  if (!p) {
    document.title = 'Project not found · Afonso Cardoso';
    $('p-title').textContent = 'Project not found';
    $('p-subtitle').textContent = "The project you're looking for doesn't exist.";
    return;
  }

  /* Head */
  var title = p.title + ' · Afonso Cardoso';
  var url = 'https://afonsogcardoso.com/project.html?id=' + encodeURIComponent(id);
  document.title = title;
  [['m-desc', p.subtitle], ['og-title', title], ['og-desc', p.subtitle], ['og-url', url]].forEach(function (m) {
    var el = $(m[0]);
    if (el) el.setAttribute('content', m[1] || '');
  });

  /* Hero */
  $('p-title').textContent = p.title;
  $('p-subtitle').textContent = p.subtitle;
  var meta = [{ label: 'Type', text: p.kind }].concat(p.meta || []).map(function (m) {
    var value = m.href
      ? '<a href="' + esc(m.href) + '" target="_blank" rel="noopener">' + esc(m.text) + '</a>'
      : esc(m.text);
    return '<dl><dt>' + esc(m.label) + '</dt><dd>' + value + '</dd></dl>';
  }).join('');
  if (p.cta) {
    meta += '<a class="btn solid" href="' + esc(p.cta.href) + '" target="_blank" rel="noopener">' +
      esc(p.cta.label) + ' ↗</a>';
  }
  $('p-meta').innerHTML = meta;

  /* Sections */
  function head(s) {
    return '<div class="p-head"><p class="label">' + esc(s.label) + '</p><div>' +
      '<h2>' + esc(s.title) + '</h2>' + (s.desc ? '<p>' + esc(s.desc) + '</p>' : '') + '</div></div>';
  }
  function points(cards, cols) {
    return '<div class="points cols-' + (cols === 4 ? 4 : 3) + '">' + cards.map(function (c) {
      return '<div><h3>' + esc(c.title) + '</h3><p>' + esc(c.desc) + '</p></div>';
    }).join('') + '</div>';
  }
  var render = {
    'overview': function (s) {
      return '<div class="stage"><a href="' + esc(s.image) + '" target="_blank" rel="noopener">' +
        '<img src="' + esc(s.image) + '" alt="' + esc(s.alt) + '"></a></div>';
    },
    'screenshot-grid': function (s) {
      return '<div class="grid-shots cols-' + (s.cols === 3 ? 3 : 2) + '">' + s.items.map(function (it) {
        return '<figure><a href="' + esc(it.img) + '" target="_blank" rel="noopener">' +
          '<img src="' + esc(it.img) + '" alt="' + esc(it.caption) + '" loading="lazy"></a>' +
          '<figcaption>' + esc(it.caption) + '</figcaption></figure>';
      }).join('') + '</div>';
    },
    'ios-gallery': function (s) {
      return '<div class="phones">' + s.items.map(function (it) {
        return '<figure><img src="' + esc(it.src) + '" alt="' + esc(it.alt) + '" loading="lazy">' +
          '<figcaption>' + esc(it.caption) + '</figcaption></figure>';
      }).join('') + '</div>';
    },
    'features': function (s) { return points(s.cards, s.cols); },
    'use-cases': function (s) { return points(s.cards, 4); },
    'flow': function (s) {
      return '<ol class="p-steps">' + s.steps.map(function (st) {
        return '<li><b>' + esc(st.title) + '</b>' + esc(st.desc) + '</li>';
      }).join('') + '</ol>';
    },
    'stack': function (s) {
      return '<p class="stack-line">' + s.tags.map(esc).join(', ') + '</p>';
    }
  };
  $('p-sections').innerHTML = p.sections.map(function (s) {
    if (!render[s.type]) return '';
    return '<section class="p-section"><div class="wrap">' + head(s) + render[s.type](s) + '</div></section>';
  }).join('');

  /* Next project */
  var keys = Object.keys(all);
  var nextId = keys[(keys.indexOf(id) + 1) % keys.length];
  $('p-next').innerHTML = '<div class="wrap"><a href="project.html?id=' + encodeURIComponent(nextId) + '">' +
    '<p class="label">Next project</p><h2>' + esc(all[nextId].title) + ' →</h2></a></div>';
})();
