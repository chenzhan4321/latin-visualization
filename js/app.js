/**
 * app.js - Main application entry point
 *
 * Loads 3 JSON files:
 *   - data/text.json        : { metadata, lines[], sentences[] }
 *   - data/morphology.json  : { word_id: { form, lemma, pos, features, short_gloss } }
 *   - data/commentary.json  : { sentence_id: { grammar, vocabulary, context } }
 */

import { initTooltip } from './tooltip.js';
import { initCommentary } from './commentary.js';
import { initNavigation } from './navigation.js';

// POS -> CSS class
const POS_CLASS = {
  noun: 'word-noun', verb: 'word-verb', adj: 'word-adj', adv: 'word-adv',
  prep: 'word-prep', conj: 'word-conj', pron: 'word-pron', part: 'word-part',
  intj: 'word-intj', num: 'word-num',
  adjective: 'word-adj', adverb: 'word-adv', pronoun: 'word-pron',
  preposition: 'word-prep', conjunction: 'word-conj', participle: 'word-part',
  interjection: 'word-intj', numeral: 'word-num',
  proper_noun: 'word-noun',
};

async function main() {
  const loadingEl = document.getElementById('loading-overlay');

  try {
    const [textData, morphData, annotationsData] = await Promise.all([
      fetchJSON('data/text.json'),
      fetchJSON('data/morphology.json'),
      fetchJSON('data/annotations.json'),
    ]);

    const lines = textData.lines || [];

    renderLines(lines, morphData);

    initTooltip(morphData);
    initCommentary(annotationsData);
    initNavigation();

    loadingEl.classList.add('hidden');
    setTimeout(() => loadingEl.remove(), 500);

  } catch (err) {
    console.error('Failed to load data:', err);
    loadingEl.querySelector('.loading-text').textContent =
      'Error loading data. Check that JSON files exist in data/.';
    loadingEl.querySelector('.spinner').style.display = 'none';
  }
}

async function fetchJSON(path) {
  const resp = await fetch(path);
  if (!resp.ok) throw new Error(`HTTP ${resp.status} for ${path}`);
  return resp.json();
}

/**
 * Render paired Latin + Chinese lines into the main grid.
 * Each line occupies one grid row with two cells (Latin left, Chinese right).
 */
function renderLines(lines, morphData) {
  const container = document.getElementById('main-content');
  const frag = document.createDocumentFragment();

  for (const line of lines) {
    // Latin cell
    const latinDiv = document.createElement('div');
    latinDiv.className = 'line column-latin';
    latinDiv.dataset.line = line.line_num;

    const latinNum = document.createElement('span');
    latinNum.className = 'line-num';
    latinNum.textContent = line.line_num;
    latinDiv.appendChild(latinNum);

    const latinText = document.createElement('span');
    latinText.className = 'line-text';

    if (line.words && line.words.length > 0) {
      line.words.forEach((w, i) => {
        const morph = morphData[w.word_id];
        const isPunct = /^[^A-Za-zÀ-ÿ]+$/.test(w.form);

        if (isPunct) {
          latinText.appendChild(document.createTextNode(w.form));
        } else {
          if (i > 0 && !/^[^A-Za-zÀ-ÿ]+$/.test(line.words[i - 1].form)) {
            latinText.appendChild(document.createTextNode(' '));
          }
          const span = document.createElement('span');
          span.className = 'word';
          span.textContent = w.form;
          if (w.word_id) span.dataset.wordId = w.word_id;
          span.dataset.sentenceId = line.sentence_id || '';

          if (morph && morph.pos) {
            const cls = POS_CLASS[morph.pos.toLowerCase()];
            if (cls) span.classList.add(cls);
          }

          latinText.appendChild(span);
        }

        if (isPunct && i < line.words.length - 1) {
          const nextForm = line.words[i + 1].form;
          if (/[A-Za-zÀ-ÿ]/.test(nextForm)) {
            latinText.appendChild(document.createTextNode(' '));
          }
        }
      });
    } else {
      latinText.textContent = line.latin || '';
    }

    latinDiv.appendChild(latinText);
    frag.appendChild(latinDiv);

    // Chinese cell
    const cnDiv = document.createElement('div');
    cnDiv.className = 'line column-english';
    cnDiv.dataset.line = line.line_num;

    const cnNum = document.createElement('span');
    cnNum.className = 'line-num';
    cnNum.textContent = line.line_num;
    cnDiv.appendChild(cnNum);

    const cnText = document.createElement('span');
    cnText.className = 'line-text';
    cnText.textContent = line.english || '';
    cnDiv.appendChild(cnText);

    frag.appendChild(cnDiv);
  }

  container.appendChild(frag);
}

document.addEventListener('DOMContentLoaded', main);
