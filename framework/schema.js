/**
 * Schema definitions for the commentary annotation pipeline.
 *
 * These schemas serve three purposes:
 * 1. Documentation — define exactly what each stage produces
 * 2. Validation — validate LLM output before assembly
 * 3. Prompt engineering — include in LLM prompts as output format spec
 *
 * Usage:
 *   const { schemas, validate } = require('./schema.js');
 *   const result = validate('WordAnnotation', myData);
 *   // result.valid === true/false, result.errors === [...]
 */

// ============================================================
// Enums
// ============================================================

const POS_TYPES = ['noun', 'verb', 'adj', 'adv', 'prep', 'part', 'proper', 'medical'];

const CSS_CLASSES = ['w-noun', 'w-verb', 'w-adj', 'w-adv', 'w-prep', 'w-part', 'w-proper', 'w-medical'];

// pos → cls mapping (must be consistent)
const POS_TO_CLS = {
  noun: 'w-noun', verb: 'w-verb', adj: 'w-adj', adv: 'w-adv',
  prep: 'w-prep', part: 'w-part', proper: 'w-proper', medical: 'w-medical',
};

const GENRES = [
  'classical-chinese-political',
  'classical-chinese-history',
  'classical-chinese-tcm',
  'classical-chinese-philosophy',
  'classical-chinese-literary',
  'classical-chinese-military',
  'german-poetry',
  'latin-poetry',
  'other',
];

const TABS_BY_GENRE = {
  'classical-chinese-political':  ['grammar', 'context', 'rhetoric', 'notes', 'translation'],
  'classical-chinese-history':    ['grammar', 'context', 'commentary', 'narrative', 'springAutumn'],
  'classical-chinese-tcm':        ['grammar', 'medicine', 'commentary', 'formula', 'clinical'],
  'classical-chinese-philosophy': ['grammar', 'context', 'interpretation', 'commentary', 'translation'],
  'classical-chinese-literary':   ['grammar', 'context', 'rhetoric', 'imagery', 'translation'],
  'classical-chinese-military':   ['grammar', 'context', 'strategy', 'commentary', 'translation'],
  'german-poetry':                ['grammar', 'meaning', 'interpretation', 'translationNote', 'altTranslation', 'meter'],
  'latin-poetry':                 ['grammar', 'context', 'rhetoric'],
  'other':                        ['grammar', 'context', 'notes', 'translation'],
};

// ============================================================
// Schema: Stage 1 — Text Segmentation
// ============================================================

/**
 * Input to Stage 1: raw text with metadata.
 *
 * @typedef {Object} SegmentationInput
 * @property {string} text - The full raw text
 * @property {Object} metadata
 * @property {string} metadata.title - Title of the work
 * @property {string} metadata.author - Author name
 * @property {string} metadata.source - Source/edition
 */

/**
 * Output of Stage 1: section shell (no annotations yet).
 *
 * @typedef {Object} SectionShell
 * @property {number} id - Sequential section number (1-based)
 * @property {string} title - English descriptive title (3-8 words)
 * @property {Array<{zh: string, indent?: boolean}>} lines - Original text lines
 */

// ============================================================
// Schema: Stage 2 — Word Selection
// ============================================================

/**
 * Input to Stage 2: a section's text with audience context.
 *
 * @typedef {Object} WordSelectionInput
 * @property {number} section_id
 * @property {string} text - The full text of this section (all lines joined)
 * @property {string} audience - Target audience identifier
 * @property {string} genre - Genre identifier
 */

/**
 * Output of Stage 2: list of words selected for annotation.
 *
 * @typedef {Object} WordCandidate
 * @property {string} form - The exact characters to annotate
 * @property {string} reason - Why this word needs annotation (1-2 sentences)
 * @property {'high'|'medium'|'low'} priority - Annotation priority
 */

// ============================================================
// Schema: Stage 3 — Word Annotation
// ============================================================

/**
 * Input to Stage 3: a single word in context.
 *
 * @typedef {Object} WordAnnotationInput
 * @property {string} form - The word to annotate
 * @property {string} context - The full section text (for disambiguation)
 * @property {string} section_title - Section title (for context)
 * @property {string} audience - Target audience identifier
 */

/**
 * Output of Stage 3: a structured word annotation.
 *
 * @typedef {Object} WordAnnotation
 * @property {string} form - Exact characters as in text
 * @property {string} pinyin - Standard pinyin with tone marks
 * @property {string} pos - Part of speech (see POS_TYPES)
 * @property {string} cls - CSS class (see CSS_CLASSES)
 * @property {string} info - 1-3 sentence explanation
 * @property {string} gloss - Short translation (≤60 chars)
 */

// ============================================================
// Schema: Stage 4 — Commentary
// ============================================================

/**
 * Input to Stage 4: section with completed word annotations.
 *
 * @typedef {Object} CommentaryInput
 * @property {SectionShell} section
 * @property {WordAnnotation[]} words
 * @property {string} genre
 * @property {string[]} tabs - Which commentary tabs to generate
 */

/**
 * Output of Stage 4: HTML strings keyed by tab name.
 * Each value is a string of valid HTML using only allowed elements.
 * Value can be null if no content for that tab.
 *
 * @typedef {Object<string, string|null>} Commentary
 */

// ============================================================
// Schema: Stage 5 — Translation
// ============================================================

/**
 * @typedef {Object} TranslationLine
 * @property {string} text - English translation of this line/paragraph
 * @property {boolean} [indent=false] - Whether to indent this line
 */

// ============================================================
// Schema: Final assembled section
// ============================================================

/**
 * The final section object as stored in data/*.js files.
 *
 * @typedef {Object} Section
 * @property {number} id
 * @property {string} title
 * @property {Array<{zh: string, indent?: boolean}>} lines
 * @property {Array<{text: string, indent?: boolean}>} en
 * @property {WordAnnotation[]} words
 * @property {string|null} grammar
 * @property {string|null} context
 * @property {string|null} rhetoric
 * @property {string|null} notes
 * @property {string|null} translation
 * // ... additional genre-specific tabs
 */

// ============================================================
// Validation
// ============================================================

/**
 * German poetry uses a different word schema:
 * - `pronunciation` instead of `pinyin`
 * - Detailed POS tags like "N.m.", "V.ptcp", "Adj." instead of simple enum
 * - `cls` values without "w-" prefix in some files (legacy)
 *
 * The validator auto-detects the schema variant by genre.
 */

// Map German POS tags to our standard POS types
const GERMAN_POS_MAP = {
  'N': 'noun', 'N.': 'noun', 'N.m.': 'noun', 'N.f.': 'noun', 'N.n.': 'noun',
  'N.pl.': 'noun', 'N.prop': 'proper', 'N.prop.': 'proper',
  'V': 'verb', 'V.': 'verb', 'V.ptcp': 'verb', 'V.Part.': 'verb',
  'V.refl.': 'verb', 'V.aux.': 'verb',
  'Adj': 'adj', 'Adj.': 'adj', 'Adv': 'adv', 'Adv.': 'adv',
  'Prep': 'prep', 'Prep.': 'prep',
  'Art.': 'part', 'Conj.': 'part', 'Pron.': 'part',
};

function validateWordAnnotation(word, genre) {
  const errors = [];
  const isGerman = genre && genre.startsWith('german');

  if (!word.form || typeof word.form !== 'string') {
    errors.push(`form: must be a non-empty string`);
  }

  // Pinyin required for Chinese texts; pronunciation or pinyin for German
  if (isGerman) {
    if (!word.pinyin && !word.pronunciation && typeof word.pinyin !== 'string' && typeof word.pronunciation !== 'string') {
      errors.push(`pinyin/pronunciation: must provide either pinyin or pronunciation`);
    }
  } else {
    if (!word.pinyin || typeof word.pinyin !== 'string') {
      errors.push(`pinyin: must be a non-empty string`);
    }
  }

  // POS validation: strict for Chinese, lenient for German (accept detailed tags)
  if (isGerman) {
    // Accept both standard types and German-specific detailed tags
    if (!POS_TYPES.includes(word.pos) && !GERMAN_POS_MAP[word.pos]) {
      errors.push(`pos: "${word.pos}" is not a recognized POS type`);
    }
  } else {
    if (!POS_TYPES.includes(word.pos)) {
      errors.push(`pos: "${word.pos}" is not a valid POS type. Valid: ${POS_TYPES.join(', ')}`);
    }
  }

  // CSS class validation: accept both "w-verb" and "verb" (legacy)
  const normalizedCls = word.cls && word.cls.startsWith('w-') ? word.cls : `w-${word.cls}`;
  if (!CSS_CLASSES.includes(normalizedCls) && !CSS_CLASSES.includes(word.cls)) {
    if (!isGerman) {
      errors.push(`cls: "${word.cls}" is not a valid CSS class. Valid: ${CSS_CLASSES.join(', ')}`);
    }
    // German files with legacy cls values get a warning, not an error
  }

  // pos/cls consistency check (only for standard POS types)
  // Exception: w-medical can override any pos (medical terms may be nouns, verbs, etc.)
  if (!isGerman && word.pos && word.cls && POS_TO_CLS[word.pos] !== word.cls) {
    if (word.cls !== 'w-medical') {
      errors.push(`cls mismatch: pos="${word.pos}" should have cls="${POS_TO_CLS[word.pos]}", got "${word.cls}"`);
    }
  }

  if (!word.info || typeof word.info !== 'string') {
    errors.push(`info: must be a non-empty string`);
  }

  if (!word.gloss || typeof word.gloss !== 'string') {
    errors.push(`gloss: must be a non-empty string`);
  } else if (word.gloss.length > 60) {
    errors.push(`gloss: "${word.gloss}" exceeds 60 characters (${word.gloss.length})`);
  }

  return { valid: errors.length === 0, errors, word: word.form };
}

function validateSection(section, genre) {
  const errors = [];
  const isGerman = genre && genre.startsWith('german');

  // Basic structure
  if (typeof section.id !== 'number') errors.push('id: must be a number');
  // German poetry sections use `stanza` as title field; Chinese use `title`
  if (!section.title && !section.stanza) {
    if (typeof section.title !== 'string') errors.push('title: must be a non-empty string');
  }

  // Lines — German uses `de` field, Chinese uses `zh`
  const lineField = isGerman ? 'de' : 'zh';
  if (!Array.isArray(section.lines) || section.lines.length === 0) {
    errors.push('lines: must be a non-empty array');
  } else {
    section.lines.forEach((line, i) => {
      if (!line[lineField] && !line.zh && !line.de) {
        errors.push(`lines[${i}]: must have a '${lineField}' (or 'zh'/'de') field`);
      }
    });
  }

  // Translation — German uses `cn` array, Chinese uses `en` array
  const transField = isGerman ? 'cn' : 'en';
  const transArray = section[transField] || section.en || section.cn;
  if (!Array.isArray(transArray) || transArray.length === 0) {
    errors.push(`${transField}: must be a non-empty array`);
  } else {
    transArray.forEach((line, i) => {
      if (!line.text) errors.push(`${transField}[${i}].text: must be a non-empty string`);
    });
  }

  // Words
  if (!Array.isArray(section.words)) {
    errors.push('words: must be an array');
  } else {
    section.words.forEach((w, i) => {
      const r = validateWordAnnotation(w, genre);
      if (!r.valid) {
        r.errors.forEach(e => errors.push(`words[${i}] (${w.form || '?'}): ${e}`));
      }
    });
  }

  // Commentary tabs — check expected tabs, but allow objects (e.g., meter can be an object in German poetry)
  const expectedTabs = genre ? (TABS_BY_GENRE[genre] || []) : [];
  expectedTabs.forEach(tab => {
    const val = section[tab];
    if (val !== undefined && val !== null && typeof val !== 'string' && typeof val !== 'object') {
      errors.push(`${tab}: must be a string, object, or null, got ${typeof val}`);
    }
  });

  return { valid: errors.length === 0, errors, section_id: section.id };
}

// ============================================================
// Prompt-ready schema description (for including in LLM prompts)
// ============================================================

const WORD_ANNOTATION_PROMPT_SCHEMA = `
You must output a JSON object with exactly these fields:

{
  "form": "<exact characters from the text>",
  "pinyin": "<standard pinyin with tone marks, e.g. 'xiánliáng'. Capitalize proper nouns>",
  "pos": "<one of: noun, verb, adj, adv, prep, part, proper, medical>",
  "cls": "<CSS class matching pos: w-noun, w-verb, w-adj, w-adv, w-prep, w-part, w-proper, w-medical>",
  "info": "<1-3 sentences: (1) literal meaning, (2) function in this specific context, (3) cultural significance if any>",
  "gloss": "<short translation, max 60 characters, used for tooltip display>"
}

Rules:
- pos and cls must be consistent (e.g., pos="verb" requires cls="w-verb")
- pinyin must use tone marks (ā á ǎ à), not tone numbers
- info should be helpful to the target audience, not just a dictionary definition
- gloss should be the shortest useful translation
`.trim();

const SECTION_COMMENTARY_PROMPT_SCHEMA = `
You must output a JSON object with one key per commentary tab. Each value is an HTML string or null.

Allowed HTML elements: <p>, <b>, <i>, <ul>, <ol>, <li>, <table>, <tr>, <td>, <th>, <blockquote>

Example for genre "classical-chinese-political":

{
  "grammar": "<p><b>quoted Chinese</b> — grammatical explanation</p>...",
  "context": "<p>Historical background...</p>...",
  "rhetoric": "<p>Analysis of persuasive strategies...</p>...",
  "notes": "<p>Scholarly notes...</p>..." or null,
  "translation": "<p><b>\"English phrase\"</b> for Chinese — rationale</p>..."
}
`.trim();

// ============================================================
// Exports
// ============================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    POS_TYPES,
    CSS_CLASSES,
    POS_TO_CLS,
    GENRES,
    TABS_BY_GENRE,
    validateWordAnnotation,
    validateSection,
    WORD_ANNOTATION_PROMPT_SCHEMA,
    SECTION_COMMENTARY_PROMPT_SCHEMA,
  };
}
