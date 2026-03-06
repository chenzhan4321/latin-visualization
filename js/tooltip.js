/**
 * tooltip.js - Word tooltip module
 *
 * Shows a floating card with morphological info when a word is clicked.
 * Only one tooltip visible at a time; closes on Esc or outside click.
 */

let morphData = {};
let tooltipEl = null;
let currentWordEl = null;

/**
 * Initialize the tooltip system.
 * @param {Object} morphologyData - keyed by word_id, each value has
 *   { lemma, pos, features, gloss }
 */
export function initTooltip(morphologyData) {
  morphData = morphologyData;
  tooltipEl = document.getElementById('tooltip');

  // Click on a word -> show tooltip
  document.addEventListener('click', (e) => {
    const wordEl = e.target.closest('.word');

    if (wordEl) {
      e.stopPropagation();
      showTooltip(wordEl);
      return;
    }

    // Click elsewhere -> close
    hideTooltip();
  });

  // Esc -> close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideTooltip();
    }
  });
}

/**
 * Build tooltip HTML from morphology entry.
 */
function buildTooltipHTML(entry) {
  const lemma = entry.lemma || '?';
  const pos = entry.pos || 'unknown';
  const gloss = entry.short_gloss || entry.gloss || '';

  // Features: string "k=v|k=v", object {k:v}, or array
  let featuresHTML = '';
  if (entry.features) {
    let feats;
    if (typeof entry.features === 'string') {
      feats = entry.features.split('|').map(s => s.trim()).filter(Boolean);
    } else if (typeof entry.features === 'object' && !Array.isArray(entry.features)) {
      feats = Object.entries(entry.features).map(([k, v]) => `${k}: ${v}`);
    } else {
      feats = entry.features;
    }
    if (Array.isArray(feats) && feats.length > 0) {
      featuresHTML = `<div class="tooltip-features">${feats.map(f => `<span>${f}</span>`).join('')}</div>`;
    }
  }

  return `
    <div class="tooltip-lemma">${lemma}</div>
    <span class="tooltip-pos">${pos}</span>
    ${featuresHTML}
    ${gloss ? `<div class="tooltip-gloss">${gloss}</div>` : ''}
  `;
}

/**
 * Show the tooltip near the given word element.
 */
function showTooltip(wordEl) {
  const wordId = wordEl.dataset.wordId;
  if (!wordId) return;

  const entry = morphData[wordId];
  if (!entry) {
    // No morphology data for this word; skip
    return;
  }

  // Deselect previous
  if (currentWordEl) {
    currentWordEl.classList.remove('selected');
  }
  currentWordEl = wordEl;
  wordEl.classList.add('selected');

  // Build content
  tooltipEl.innerHTML = buildTooltipHTML(entry);

  // Position the tooltip
  positionTooltip(wordEl);

  // Show
  tooltipEl.classList.add('visible');
  tooltipEl.setAttribute('aria-hidden', 'false');
}

/**
 * Position tooltip below or above the word, depending on space.
 */
function positionTooltip(wordEl) {
  const rect = wordEl.getBoundingClientRect();
  const tooltipRect = tooltipEl.getBoundingClientRect();

  // Temporarily make visible to measure
  tooltipEl.style.visibility = 'hidden';
  tooltipEl.classList.add('visible');

  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  const gap = 8;

  // Prefer below the word
  let top = rect.bottom + scrollY + gap;
  let left = rect.left + scrollX;

  // If tooltip would go below viewport, place above
  const tooltipHeight = tooltipEl.offsetHeight || 120;
  if (rect.bottom + tooltipHeight + gap > window.innerHeight) {
    top = rect.top + scrollY - tooltipHeight - gap;
  }

  // Keep within horizontal bounds
  const tooltipWidth = tooltipEl.offsetWidth || 240;
  if (left + tooltipWidth > window.innerWidth + scrollX - 16) {
    left = window.innerWidth + scrollX - tooltipWidth - 16;
  }
  if (left < scrollX + 8) {
    left = scrollX + 8;
  }

  tooltipEl.style.top = `${top}px`;
  tooltipEl.style.left = `${left}px`;
  tooltipEl.style.visibility = '';
}

/**
 * Hide the tooltip.
 */
function hideTooltip() {
  if (currentWordEl) {
    currentWordEl.classList.remove('selected');
    currentWordEl = null;
  }
  if (tooltipEl) {
    tooltipEl.classList.remove('visible');
    tooltipEl.setAttribute('aria-hidden', 'true');
  }
}
