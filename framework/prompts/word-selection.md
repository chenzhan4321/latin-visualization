# Prompt Template: Word Selection (Stage 2)

## System Prompt

You are a classical Chinese language specialist selecting vocabulary for annotation. Your task is to identify which words in a given text passage need explanation for the target audience.

## User Prompt Template

```
Text: {{SECTION_TEXT}}

Section title: {{SECTION_TITLE}}
Genre: {{GENRE}}
Target audience: {{AUDIENCE}}

From this passage, select 4-8 words or short phrases that need annotation for the target audience. For each word, explain why it needs annotation and assign a priority.

Selection criteria:
1. Words whose meaning in this context differs from their common/modern meaning
2. Proper nouns (people, places, texts) that require identification
3. Technical terms specific to the genre (medical, legal, ritual, etc.)
4. Grammar particles whose function is non-obvious
5. Allusions or quotations that need sourcing
6. Characters that are rare, archaic, or used as loan characters

Do NOT select:
- Common characters that any reader of classical Chinese would know (之、也、者、而, etc.) unless they have an unusual function here
- Words already explained in a previous section of this text
- More than 8 words (be selective, not exhaustive)

Output format (JSON array):

[
  {
    "form": "<exact characters>",
    "reason": "<1-2 sentences: why this word needs annotation for this audience>",
    "priority": "high|medium|low"
  }
]
```

## Variables

| Variable | Description | Example |
|---|---|---|
| `{{SECTION_TEXT}}` | Full Chinese text of the section | `大夫曰：「吾以賢良為少愈……」` |
| `{{SECTION_TITLE}}` | English section title | `The Official's Warning` |
| `{{GENRE}}` | Genre identifier | `classical-chinese-political` |
| `{{AUDIENCE}}` | Target audience | `American sinology students with 2+ years of classical Chinese` |

## Expected Output

```json
[
  {
    "form": "賢良",
    "reason": "Technical term for the Confucian scholars in the Salt and Iron Debate. Without knowing this refers to a specific political faction, the passage is unintelligible.",
    "priority": "high"
  },
  {
    "form": "螇",
    "reason": "Rare character, variant of 蟬 (cicada). The seasonal metaphor that follows depends on correctly identifying this insect.",
    "priority": "high"
  },
  {
    "form": "幽明",
    "reason": "Used metaphorically here for 'clarity and confusion' rather than its literal meaning of 'dark and light.' Easy to misread.",
    "priority": "medium"
  }
]
```

## Notes for Implementers

- The output of this stage feeds directly into Stage 3 (Word Annotation)
- If using multiple models for cross-validation: have each model select independently, then union the results, using priority to resolve conflicts
- Human review after this stage is highly recommended — word selection is the most judgment-dependent step
