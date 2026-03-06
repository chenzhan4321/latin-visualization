/**
 * navigation.js - Navigation module
 *
 * Handles line-number jump and URL hash sync.
 * Scroll sync is no longer needed since Latin and Chinese
 * are paired rows in the same grid.
 */

export function initNavigation() {
  setupLineJump();
  setupHashNavigation();
}

function setupLineJump() {
  const input = document.getElementById('line-jump');
  if (!input) return;

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const lineNum = parseInt(input.value, 10);
      if (!isNaN(lineNum) && lineNum > 0) {
        scrollToLine(lineNum);
        history.replaceState(null, '', `#line-${lineNum}`);
      }
      input.blur();
    }
  });
}

function setupHashNavigation() {
  const hash = window.location.hash;
  if (hash) {
    const match = hash.match(/^#line-(\d+)$/);
    if (match) {
      requestAnimationFrame(() => {
        scrollToLine(parseInt(match[1], 10));
      });
    }
  }

  window.addEventListener('hashchange', () => {
    const m = window.location.hash.match(/^#line-(\d+)$/);
    if (m) scrollToLine(parseInt(m[1], 10));
  });
}

function scrollToLine(lineNum) {
  const lineEl = document.querySelector(`.column-latin.line[data-line="${lineNum}"]`);
  if (lineEl) {
    lineEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    lineEl.classList.add('active');
    setTimeout(() => lineEl.classList.remove('active'), 1500);
  }
}
