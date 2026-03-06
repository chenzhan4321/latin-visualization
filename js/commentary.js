/**
 * commentary.js - Rich annotation panel
 *
 * Displays sentence-level annotations: interlinear gloss,
 * syntax analysis, reordered reading, and grammar notes.
 */

let annotData = {};
let panelEl = null;
let currentSentenceId = null;

/**
 * Initialize the commentary panel.
 * @param {Object} annotationsData - keyed by sentence_id
 */
export function initCommentary(annotationsData) {
  annotData = annotationsData;
  panelEl = document.getElementById('commentary-panel');

  // Tab switching
  panelEl.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Close button
  document.getElementById('commentary-close').addEventListener('click', closePanel);

  // Clicking line numbers opens commentary
  document.addEventListener('click', (e) => {
    const lineNum = e.target.closest('.line-num');
    if (!lineNum) return;
    const lineEl = lineNum.closest('.line');
    if (!lineEl) return;

    // Try finding sentence_id from Latin column word spans
    let firstWord = lineEl.querySelector('.word[data-sentence-id]');
    if (!firstWord) {
      // Clicked from English column — find matching Latin line by line number
      const num = lineEl.dataset.line;
      const latinLine = document.querySelector(`.column-latin.line[data-line="${num}"]`);
      if (latinLine) firstWord = latinLine.querySelector('.word[data-sentence-id]');
    }
    if (!firstWord) return;
    openCommentary(firstWord.dataset.sentenceId);
  });
}

function openCommentary(sentenceId) {
  if (!sentenceId) return;
  clearHighlights();
  currentSentenceId = sentenceId;

  // Highlight lines belonging to this sentence
  document.querySelectorAll(`.word[data-sentence-id="${sentenceId}"]`).forEach(w => {
    const line = w.closest('.line');
    if (line) {
      line.classList.add('active');
      const num = line.dataset.line;
      const eng = document.querySelector(`.column-english.line[data-line="${num}"]`);
      if (eng) eng.classList.add('active');
    }
  });

  const ann = annotData[sentenceId];
  if (!ann) {
    populateEmpty();
  } else {
    populateInterlinear(ann);
    populateSyntax(ann);
    populateGrammar(ann);
  }

  panelEl.classList.add('open');
  panelEl.setAttribute('aria-hidden', 'false');
  switchTab('interlinear');
}

/**
 * Interlinear tab: word-by-word gloss + reordered reading
 */
function populateInterlinear(ann) {
  const el = document.getElementById('tab-interlinear');
  let html = '';

  // Interlinear gloss table
  if (ann.interlinear && ann.interlinear.length > 0) {
    html += '<div class="interlinear-container">';
    for (const item of ann.interlinear) {
      html += `<div class="interlinear-pair">
        <span class="il-latin">${esc(item.latin)}</span>
        <span class="il-gloss">${esc(item.gloss)}</span>
      </div>`;
    }
    html += '</div>';
  }

  // Reordered reading
  if (ann.reordered) {
    html += '<div class="reorder-section">';
    html += '<div class="section-label">语序重排</div>';
    html += `<div class="reorder-latin">${esc(ann.reordered)}</div>`;
    if (ann.reordered_gloss) {
      html += `<div class="reorder-gloss">${esc(ann.reordered_gloss)}</div>`;
    }
    html += '</div>';
  }

  el.innerHTML = html || '<p class="empty-note">暂无逐词对照数据</p>';
}

/**
 * Syntax tab: sentence structure breakdown
 */
function populateSyntax(ann) {
  const el = document.getElementById('tab-syntax');
  let html = '';

  if (ann.syntax) {
    html += `<div class="syntax-breakdown">${formatSyntax(ann.syntax)}</div>`;
  }

  // Rhetoric notes
  if (ann.rhetoric && ann.rhetoric.length > 0) {
    html += '<div class="section-label" style="margin-top:12px;">修辞技巧</div>';
    html += '<ul class="notes-list">';
    for (const note of ann.rhetoric) {
      html += `<li>${esc(note)}</li>`;
    }
    html += '</ul>';
  }

  el.innerHTML = html || '<p class="empty-note">暂无句法分析数据</p>';
}

/**
 * Grammar tab: grammar notes
 */
function populateGrammar(ann) {
  const el = document.getElementById('tab-grammar');
  let html = '';

  if (ann.grammar_notes && ann.grammar_notes.length > 0) {
    html += '<ul class="notes-list">';
    for (const note of ann.grammar_notes) {
      html += `<li>${esc(note)}</li>`;
    }
    html += '</ul>';
  }

  el.innerHTML = html || '<p class="empty-note">暂无语法注释</p>';
}

function populateEmpty() {
  document.getElementById('tab-interlinear').innerHTML = '<p class="empty-note">暂无注释数据</p>';
  document.getElementById('tab-syntax').innerHTML = '<p class="empty-note">暂无注释数据</p>';
  document.getElementById('tab-grammar').innerHTML = '<p class="empty-note">暂无注释数据</p>';
}

/**
 * Format syntax string: split on | and highlight labels
 */
function formatSyntax(syntax) {
  const parts = syntax.split('|').map(s => s.trim()).filter(Boolean);
  if (parts.length <= 1) return `<p>${esc(syntax)}</p>`;

  return '<div class="syntax-parts">' +
    parts.map(part => {
      const m = part.match(/^(.+?)[:：]\s*(.+)$/);
      if (m) {
        return `<div class="syntax-part"><span class="syntax-role">${esc(m[1])}</span> ${esc(m[2])}</div>`;
      }
      return `<div class="syntax-part">${esc(part)}</div>`;
    }).join('') +
    '</div>';
}

function switchTab(tabName) {
  panelEl.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  panelEl.querySelectorAll('.tab-content').forEach(tc => {
    tc.classList.toggle('active', tc.id === `tab-${tabName}`);
  });
}

function closePanel() {
  panelEl.classList.remove('open');
  panelEl.setAttribute('aria-hidden', 'true');
  clearHighlights();
  currentSentenceId = null;
}

function clearHighlights() {
  document.querySelectorAll('.line.active').forEach(el => el.classList.remove('active'));
}

function esc(str) {
  const d = document.createElement('div');
  d.textContent = str || '';
  return d.innerHTML;
}
