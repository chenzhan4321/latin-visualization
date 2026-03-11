# Commentary Annotation Pipeline

## Overview

This document specifies the annotation pipeline for generating structured commentary on classical texts. The pipeline is designed as a sequence of independent stages, each with a defined input/output schema, so that **any LLM** (or human annotator) can participate at any stage.

```
Raw Text ──► [Stage 1] ──► [Stage 2] ──► [Stage 3] ──► [Stage 4] ──► [Stage 5] ──► Final JS
             Segmentation   Word         Word          Commentary     Assembly
                            Selection    Annotation
```

Each stage is a **pure function**: given a defined input, produce a defined output. Stages can be run by different models, different people, or in parallel.

---

## Stage 1: Text Segmentation

**Goal:** Split raw text into numbered sections with titles.

| | Schema |
|---|---|
| **Input** | `{ text: string, metadata: { title, author, source } }` |
| **Output** | `Section[]` — see `schema.js :: SectionShell` |

The segmenter receives the full raw text and must:
1. Identify natural section boundaries (paragraph breaks, speaker changes, topic shifts)
2. Assign an `id` (integer, sequential)
3. Assign a descriptive `title` (English, 3-8 words)
4. Split each section's text into `lines[{zh}]`

**Interface contract:** The output is a *shell* — it has structure but no annotations yet.

```json
{
  "id": 1,
  "title": "The Official's Warning",
  "lines": [
    { "zh": "大夫曰：「吾以賢良為少愈，乃反其幽明……」" }
  ]
}
```

**Who can do this:** Human (preferred for literary judgment), or any model with Chinese text understanding.

---

## Stage 2: Word Selection

**Goal:** Given a section's text, decide which words/characters need annotation.

| | Schema |
|---|---|
| **Input** | `{ section_id: number, text: string, audience: string, genre: string }` |
| **Output** | `WordCandidate[]` — see `schema.js :: WordCandidate` |

This is the most **judgment-heavy** stage. The selector must consider:

1. **Audience** — what does the target reader already know?
   - `"american-sinology"` → annotate all classical grammar particles, archaic usages, historical proper nouns
   - `"american-tcm"` → annotate medical terms, herb names, pulse qualities
   - `"chinese-native"` → annotate only rare/archaic characters and allusions
2. **Coverage** — aim for 4-8 words per section (not every word, not too few)
3. **Priority** — prefer words that are:
   - Structurally important (grammar particles that change meaning)
   - Culturally loaded (proper nouns, allusions, technical terms)
   - Easily misread (false friends, archaic meanings)

**Output format:**

```json
[
  {
    "form": "賢良",
    "reason": "Technical term for the Confucian scholars in the debate; without this, the reader cannot follow the argument",
    "priority": "high"
  },
  {
    "form": "螇",
    "reason": "Rare character, variant of 蟬; the seasonal metaphor depends on identifying this as 'cicada'",
    "priority": "high"
  }
]
```

**Key design choice:** Word selection is separated from word annotation so that:
- One model can select (requires literary judgment)
- Another model can annotate (requires lexicographic precision)
- A human can override selections before annotation begins
- Multiple annotators can review the selection list independently

---

## Stage 3: Word Annotation

**Goal:** For each selected word, produce a structured annotation entry.

| | Schema |
|---|---|
| **Input** | `{ form: string, context: string, section_title: string, audience: string }` |
| **Output** | `WordAnnotation` — see `schema.js :: WordAnnotation` |

Each word annotation is **self-contained** — it can be generated independently, in parallel, even by different models for cross-validation.

**Output format:**

```json
{
  "form": "箕子",
  "pinyin": "Jīzǐ",
  "pos": "proper",
  "cls": "w-proper",
  "info": "Jizi — uncle of the last Shang king. When the king began using ivory chopsticks, Jizi foresaw that this small luxury would escalate...",
  "gloss": "Jizi (Shang prince who warned against luxury)"
}
```

**Field specifications:**

| Field | Type | Rules |
|---|---|---|
| `form` | string | Exact characters as they appear in the text |
| `pinyin` | string | Standard pinyin with tone marks (not numbers). Proper nouns capitalized |
| `pos` | enum | One of: `noun`, `verb`, `adj`, `adv`, `prep`, `part`, `proper`, `medical` |
| `cls` | enum | CSS class: `w-noun`, `w-verb`, `w-adj`, `w-adv`, `w-prep`, `w-part`, `w-proper`, `w-medical` |
| `info` | string | 1-3 sentences. Must include: (1) literal meaning, (2) function in this context, (3) cultural/historical significance if any |
| `gloss` | string | Short translation, ≤ 8 words. Used in tooltip display |

**Validation rules:**
- `cls` must match `pos` (e.g., `pos: "verb"` → `cls: "w-verb"`)
- `pinyin` must be valid pinyin syllables with tone marks
- `info` must not be empty
- `gloss` must not exceed 60 characters

---

## Stage 4: Commentary Generation

**Goal:** For each section, generate structured commentary across multiple analytical dimensions.

| | Schema |
|---|---|
| **Input** | `{ section: SectionShell, words: WordAnnotation[], genre: string, tabs: string[] }` |
| **Output** | `Commentary` — see `schema.js :: Commentary` |

The commentary generator receives the section text and completed word annotations, and produces HTML-formatted analysis for each tab.

**Tab configurations by genre:**

| Genre | Tabs |
|---|---|
| `german-poetry` | `grammar`, `meaning`, `interpretation`, `translationNote`, `altTranslation`, `meter` |
| `classical-chinese-history` | `grammar`, `context`, `commentary`, `narrative`, `springAutumn` |
| `classical-chinese-tcm` | `grammar`, `medicine`, `commentary`, `formula`, `clinical` |
| `classical-chinese-political` | `grammar`, `context`, `rhetoric`, `notes`, `translation` |

Each tab field is a **string of HTML** (not Markdown, not plain text). Allowed HTML elements:

```
<p>, <b>, <i>, <ul>, <ol>, <li>, <table>, <tr>, <td>, <th>, <blockquote>
```

**Commentary guidelines by tab:**

### `grammar`
- Analyze 2-4 key grammatical structures in the section
- Format: `<p><b>quoted text</b> — explanation</p>` for each structure
- Focus on structures that are non-obvious or pedagogically important
- Name the grammatical pattern (e.g., "以 A 為 B construction", "double-negative conditional")

### `context`
- Historical and cultural background needed to understand the passage
- 1-3 paragraphs of HTML
- Cite primary sources where relevant (texts, archaeological evidence)
- Connect to broader themes of the work

### `rhetoric`
- Analyze the persuasive strategies used
- Identify specific rhetorical devices (parallelism, antithesis, allusion, hyperbole)
- Explain why the rhetoric is effective in its original context

### `notes`
- Scholarly commentary and textual notes
- Reference established commentators (e.g., Wang Liqi for Yantie Lun)
- Note textual variants, disputed readings, emendation proposals
- Can be `null` if no significant notes exist

### `translation`
- Translation choices and rationale
- Format: `<p><b>"English phrase"</b> for Chinese — explanation of the choice</p>`
- Address key decisions: register, connotation, cultural adaptation

---

## Stage 5: Translation

**Goal:** Produce an English translation of the section.

| | Schema |
|---|---|
| **Input** | `{ lines: [{zh}], words: WordAnnotation[], commentary: Commentary }` |
| **Output** | `Translation[]` — array of `{text: string, indent: boolean}` |

**Translation principles:**
- Accuracy to the original over readability (this is a scholarly tool, not a trade publication)
- Preserve the rhetorical structure (if the Chinese uses parallelism, the English should too)
- Proper nouns: transliterate with brief identification on first occurrence
- Technical terms: translate with original in parentheses on first occurrence
- Do NOT use existing published translations (produce original work)

---

## Stage 6: Assembly

**Goal:** Combine all stage outputs into the final JS data file.

This is a mechanical step (no LLM needed). The assembler:
1. Takes the outputs from stages 1-5
2. Merges them into the `Section` schema
3. Writes the JS file with `const SECTIONS_X_Y = [...]`

See `validate.js` for the assembler and validation logic.

---

## Multi-Model Collaboration Patterns

### Pattern A: Sequential Pipeline
```
Model A (segmentation) → Model B (word selection) → Model C (annotation) → Model D (commentary)
```
Each model specializes in one stage. Good for quality but slow.

### Pattern B: Parallel Annotation
```
                        ┌─ Model A (words 1-3)
Section text ──► Word ──┤
                 List   ├─ Model B (words 4-6)
                        └─ Model C (words 7-8)
```
Multiple models annotate different words simultaneously. Good for speed.

### Pattern C: Cross-Validation
```
Section text ──► Model A (full annotation) ──┐
                                             ├─ Human reviewer ──► Final
Section text ──► Model B (full annotation) ──┘
```
Two models produce independent annotations; a human merges the best of each.

### Pattern D: Specialist Routing
```
                    ┌─ Model A (grammar, rhetoric)     ──┐
Section + Words ──┤                                      ├─ Merge ──► Final
                    └─ Model B (history, context, notes) ──┘
```
Different models handle different tabs based on their strengths.

---

## Adding a New Text

To add a new classical text to the site:

1. **Define the genre** — choose or create a tab configuration
2. **Define the audience** — this drives word selection criteria
3. **Run Stage 1** — segment the text (usually done by human)
4. **Run Stage 2** — select words for each section
5. **Run Stage 3** — annotate each selected word
6. **Run Stage 4** — generate commentary for each section
7. **Run Stage 5** — translate each section
8. **Run Stage 6** — assemble into JS data file
9. **Validate** — run `node framework/validate.js data/newtext_s1_10.js`
10. **Create HTML page** — copy closest existing template and adapt

Each stage can be done incrementally: annotate section 1, review, adjust parameters, then batch the rest.
