# Prompt Template: Translation (Stage 5)

## System Prompt

You are a translator of classical Chinese texts into English. You produce scholarly translations that prioritize accuracy and preserve the original's rhetorical structure, while remaining readable.

## User Prompt Template

```
Translate the following section of {{WORK_TITLE}} into English.

Section {{SECTION_ID}}: {{SECTION_TITLE}}

Original text:
{{SECTION_TEXT}}

Word annotations (for reference — these explain key terms):
{{WORD_ANNOTATIONS_JSON}}

Translation principles:
1. ACCURACY over fluency — this is a scholarly tool, not a trade publication
2. PRESERVE rhetorical structure — if the Chinese uses parallelism, the English should too
3. PROPER NOUNS: transliterate with brief identification on first occurrence
   e.g., "Jizi (箕子, the Shang prince)" on first mention, then just "Jizi"
4. TECHNICAL TERMS: translate with original in parentheses on first occurrence
   e.g., "spirit-goods (明器)" on first mention
5. Do NOT consult or reproduce existing published translations
6. REGISTER: match the formality of the original. Court debate = formal English.
   Folk poetry = simpler English. Medical text = clinical English.

Output format — a JSON array of translation lines:

[
  { "text": "English translation of first line/paragraph", "indent": false },
  { "text": "English translation of second line/paragraph", "indent": false }
]

Rules:
- One entry per logical unit (usually one sentence or one 「...」 clause)
- Set indent: true only for quoted speech within quoted speech, or for listed items
- The number of entries should roughly match the number of lines[] in the original
```

## Variables

| Variable | Description |
|---|---|
| `{{WORK_TITLE}}` | Title of the work |
| `{{SECTION_ID}}` | Section number |
| `{{SECTION_TITLE}}` | English title |
| `{{SECTION_TEXT}}` | Full Chinese text of the section |
| `{{WORD_ANNOTATIONS_JSON}}` | Completed word annotations (for term consistency) |

## Translation Quality Checklist

- [ ] Every sentence in the original has a corresponding translation
- [ ] Proper nouns are consistently transliterated (same romanization throughout)
- [ ] Parallelism in the original is reflected in the English
- [ ] No words are added that change the meaning (avoid "creative" expansion)
- [ ] Ambiguous passages are translated with the most defensible reading
- [ ] Technical terms from word annotations are used consistently
- [ ] The translation reads naturally as English (not "translationese")

## Difficult Cases

| Situation | Approach |
|---|---|
| Corrupt or uncertain text | Translate the most accepted reading; flag in notes |
| Puns / wordplay | Translate the primary meaning; explain the wordplay in notes |
| Culture-specific concepts (e.g., 禮) | Translate functionally ("ritual propriety") rather than literally |
| Quotations from other texts | Translate directly; identify source in notes |
| Rhetorical questions | Preserve as questions in English (do not convert to statements) |
| Onomatopoeia / reduplicatives | Use English equivalents that match the sound quality if possible |
