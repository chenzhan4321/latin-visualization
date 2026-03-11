# Prompt Template: Commentary Generation (Stage 4)

## System Prompt

You are a scholarly commentator on classical texts. You produce structured analysis across multiple analytical dimensions. Your commentary is for an educational audience and should be both rigorous and accessible.

## User Prompt Template

```
Generate commentary for the following section of {{WORK_TITLE}}.

Section {{SECTION_ID}}: {{SECTION_TITLE}}

Original text:
{{SECTION_TEXT}}

Word annotations already completed:
{{WORD_ANNOTATIONS_JSON}}

Target audience: {{AUDIENCE}}
Genre: {{GENRE}}

Generate commentary for each of the following tabs: {{TAB_LIST}}

Output a JSON object with one key per tab. Each value should be an HTML string.
Allowed HTML: <p>, <b>, <i>, <ul>, <ol>, <li>, <table>, <tr>, <td>, <th>, <blockquote>

Tab specifications:

### grammar
Analyze 2-4 key grammatical structures. Format:
<p><b>quoted Chinese text</b> — grammatical explanation</p>
Focus on structures that are non-obvious or pedagogically important.
Name the pattern (e.g., "以 A 為 B construction").

### context
1-3 paragraphs of historical/cultural background.
Cite primary sources. Connect to broader themes of the work.
Do NOT repeat information already in the word annotations.

### rhetoric
Analyze persuasive strategies and literary devices.
Identify specific devices: parallelism, antithesis, allusion, hyperbole.
Explain WHY the rhetoric is effective, not just what it is.

### notes
Scholarly notes: textual variants, commentator opinions, disputed readings.
Reference specific commentators by name (e.g., Wang Liqi, Zheng Xuan).
Can be null if no significant notes exist.

### translation
Translation choices and rationale. Format:
<p><b>"English phrase"</b> for Chinese text — explanation of the choice</p>
Address: register, connotation, cultural adaptation, difficult passages.

### medicine (TCM genre only)
Medical analysis: symptoms, pulse qualities, pathology.

### formula (TCM genre only)
Herbal formula breakdown with 君臣佐使 analysis. Can be null.

### clinical (TCM genre only)
Modern clinical relevance and applications.

### meaning (German poetry only)
Content interpretation: what the stanza says and means.

### interpretation (German poetry only)
Literary analysis: themes, imagery, philosophical depth.

Output format:
{
  "grammar": "<html>...",
  "context": "<html>...",
  "rhetoric": "<html>...",
  "notes": "<html>..." or null,
  "translation": "<html>..."
}
```

## Variables

| Variable | Description | Example |
|---|---|---|
| `{{WORK_TITLE}}` | Title of the work | `Yantie Lun 鹽鐵論, Chapter 29: 散不足` |
| `{{SECTION_ID}}` | Section number | `14` |
| `{{SECTION_TITLE}}` | English title | `Vessels: From Gourds to Gold` |
| `{{SECTION_TEXT}}` | Full Chinese text | `古者，汙尊抔飲……` |
| `{{WORD_ANNOTATIONS_JSON}}` | JSON array of completed WordAnnotation objects | `[{"form":"箕子",...}, ...]` |
| `{{AUDIENCE}}` | Target audience | `American sinology students` |
| `{{GENRE}}` | Genre identifier | `classical-chinese-political` |
| `{{TAB_LIST}}` | Comma-separated tab names | `grammar, context, rhetoric, notes, translation` |

## Quality Criteria

### Grammar tab
- Does it explain structures that a student would actually find confusing?
- Does it name the pattern type (not just translate)?
- Does it connect to broader classical Chinese grammar principles?

### Context tab
- Does it provide information the reader NEEDS to understand the passage?
- Does it avoid repeating what's already in the word annotations?
- Are historical claims accurate and sourced?

### Rhetoric tab
- Does it explain WHY the rhetoric works, not just label devices?
- Does it consider the original audience and debate context?
- Does it connect rhetorical choices to the author's argumentative strategy?

### Notes tab
- Are commentators correctly identified?
- Are textual variants accurately described?
- Is this tab genuinely useful, or should it be null?

### Translation tab
- Does it address the hardest translation decisions?
- Does it explain register and connotation choices?
- Does it acknowledge genuine ambiguity where it exists?
