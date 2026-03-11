# Prompt Template: Word Annotation (Stage 3)

## System Prompt

You are a lexicographer specializing in classical Chinese. You produce structured dictionary entries for words in their specific textual context.

## User Prompt Template

### Single-word mode (one word at a time)

```
Annotate the following word as it appears in context.

Word: {{FORM}}
Context: {{SECTION_TEXT}}
Section: {{SECTION_TITLE}}
Target audience: {{AUDIENCE}}

Output a JSON object with exactly these fields:

{
  "form": "<exact characters from the text>",
  "pinyin": "<standard pinyin with tone marks (ā á ǎ à), capitalize proper nouns>",
  "pos": "<one of: noun, verb, adj, adv, prep, part, proper, medical>",
  "cls": "<CSS class matching pos: w-noun, w-verb, w-adj, w-adv, w-prep, w-part, w-proper, w-medical>",
  "info": "<1-3 sentences: (1) literal meaning, (2) function in this specific context, (3) cultural/historical significance>",
  "gloss": "<shortest useful translation, max 60 characters>"
}

Rules:
- pos and cls must be consistent (noun→w-noun, verb→w-verb, etc.)
- info must explain what this word means HERE, not just its dictionary definition
- For proper nouns: info should identify the person/place and their relevance
- For allusions: info should source the allusion and explain its function
- gloss is for tooltip display — keep it as short as possible while being useful
```

### Batch mode (multiple words at once)

```
Annotate each of the following words as they appear in the given context.

Words to annotate: {{WORD_LIST}}
Context: {{SECTION_TEXT}}
Section: {{SECTION_TITLE}}
Target audience: {{AUDIENCE}}

For each word, output a JSON object with these fields:
  form, pinyin, pos, cls, info, gloss

(See field specifications above.)

Output a JSON array of annotation objects, one per word, in the same order as the input list.
```

## Variables

| Variable | Description | Example |
|---|---|---|
| `{{FORM}}` | The word to annotate | `箕子` |
| `{{WORD_LIST}}` | Comma-separated list of words | `箕子, 金罍, 瑚璉, 野王` |
| `{{SECTION_TEXT}}` | Full Chinese text of the section | `古者，汙尊抔飲……` |
| `{{SECTION_TITLE}}` | English section title | `Vessels: From Gourds to Gold` |
| `{{AUDIENCE}}` | Target audience | `American sinology students` |

## Validation Checklist

After receiving output, validate:

- [ ] `form` matches the exact characters in the source text
- [ ] `pinyin` uses tone marks (not numbers), proper nouns capitalized
- [ ] `pos` is one of the 8 allowed values
- [ ] `cls` matches `pos` (e.g., `pos: "verb"` → `cls: "w-verb"`)
- [ ] `info` is not empty and contains context-specific information
- [ ] `gloss` is ≤ 60 characters
- [ ] No hallucinated information in `info` (cross-check historical claims)

## Common Failure Modes

| Problem | Example | Fix |
|---|---|---|
| Generic info | "箕子 means Jizi" | Must include: who Jizi was, what he did, why he matters here |
| Wrong pinyin tone | "Jīzi" (should be "Jīzǐ") | Verify against standard dictionaries |
| pos/cls mismatch | `pos: "noun", cls: "w-proper"` | Proper nouns should have `pos: "proper"` |
| Overly long gloss | "the uncle of the last Shang dynasty king who warned against luxury" | Shorten to "Jizi (Shang prince who warned against luxury)" |
| Context-free info | Dictionary definition only | Must explain function in THIS passage |
