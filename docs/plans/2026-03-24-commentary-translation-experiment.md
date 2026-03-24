# Commentary-Augmented Translation Experiment

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Test whether structured commentary improves a small LLM's translation quality on difficult classical texts, comparing direct translation vs. free-form CoT vs. full pipeline annotation.

**Architecture:** A single Python script (`scripts/experiment.py`) reads test passages from `experiment/passages.json`, calls the 32B model (OpenAI-compatible API on HPC) under three conditions, then sends blinded translation triples to Claude for judging. All results are saved to `experiment/results/`.

**Tech Stack:** Python 3.13, `openai` SDK (for vLLM), `anthropic` SDK (for judge), `uv` for deps

---

## File Structure

```
experiment/
  passages.json         — 6 test passages with metadata
  prompts.py            — prompt builders for conditions A/B/C
  experiment.py         — main orchestrator: run all conditions, call judge
  results/              — output directory (gitignored except summary)
    translations.json   — 18 raw translations (6 passages × 3 conditions)
    judgments.json      — 6 judge evaluations
    summary.md          — human-readable results table
```

---

### Task 1: Add dependencies

**Files:**
- Modify: `pyproject.toml`

- [ ] **Step 1: Add openai and anthropic SDKs**

```bash
cd /Users/zhanchen/Library/CloudStorage/Dropbox/Projects/on.commentary && uv add openai anthropic
```

- [ ] **Step 2: Verify installation**

```bash
uv run python -c "import openai; import anthropic; print('OK')"
```
Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add pyproject.toml uv.lock && git commit -m "Add openai and anthropic SDKs for translation experiment"
```

---

### Task 2: Curate 6 test passages

**Files:**
- Create: `experiment/passages.json`

Select 6 passages that are difficult enough to challenge a 32B model. Each passage should be 3-6 sentences.

- [ ] **Step 1: Research and select passages**

Use web search and project knowledge to find 6 obscure, difficult passages:

| # | Language | Source | Why difficult |
|---|---|---|---|
| 1 | Classical Chinese | 《國語·越語》or 《新序·善謀》 | Rare vocabulary, political rhetoric, not in common training data |
| 2 | Classical Chinese | 《風俗通義》or 《論衡》 | Argumentative prose, double meanings, archaic particles |
| 3 | Baroque German | Lohenstein or Hofmannswaldau | 17th-c spelling, extreme Latinate syntax |
| 4 | Baroque German | Gryphius (NOT Papinianus I,1) | Alexandriner with dense imagery |
| 5 | Latin | Tacitus *Germania* or *Annales* (obscure section) | Compressed syntax, political innuendo |
| 6 | Latin | Seneca *Epistulae* or Sallust *Bellum Catilinae* | Philosophical terminology, archaism |

- [ ] **Step 2: Write passages.json**

```json
[
  {
    "id": 1,
    "language": "classical-chinese",
    "source": "Title, Chapter, Section",
    "text": "原文...",
    "difficulty_notes": "Why this is hard",
    "genre": "political/philosophical/etc",
    "audience": "Sinology graduate students"
  }
]
```

Each passage needs: `id`, `language`, `source`, `text`, `difficulty_notes`, `genre`, `audience`.

- [ ] **Step 3: Validate — each passage is 3-6 sentences, each is genuinely difficult**

Read through each passage and confirm it would challenge a 32B model. Replace any that are too easy or too well-known.

- [ ] **Step 4: Commit**

```bash
git add experiment/passages.json && git commit -m "Add 6 test passages for translation experiment"
```

---

### Task 3: Build prompt templates

**Files:**
- Create: `experiment/prompts.py`

Three prompt builder functions, one per condition. All return a list of `{"role": ..., "content": ...}` messages.

- [ ] **Step 1: Write prompts.py**

```python
"""Prompt builders for three experimental conditions."""

import json


def build_direct(passage: dict) -> list[dict]:
    """Condition A: direct translation, no guidance."""
    lang_name = {
        "classical-chinese": "Classical Chinese",
        "baroque-german": "Baroque German (17th century)",
        "latin": "Latin",
    }[passage["language"]]
    return [
        {"role": "system", "content": "You are a scholarly translator."},
        {"role": "user", "content": (
            f"Translate the following {lang_name} text into English. "
            f"Provide only the translation, no commentary.\n\n"
            f"{passage['text']}"
        )},
    ]


def build_cot(passage: dict) -> list[dict]:
    """Condition B: free-form chain-of-thought then translate."""
    lang_name = {
        "classical-chinese": "Classical Chinese",
        "baroque-german": "Baroque German (17th century)",
        "latin": "Latin",
    }[passage["language"]]
    return [
        {"role": "system", "content": "You are a scholarly translator and commentator."},
        {"role": "user", "content": (
            f"The following is a passage in {lang_name}.\n\n"
            f"{passage['text']}\n\n"
            f"First, analyze this text thoroughly:\n"
            f"1. Identify and explain all difficult vocabulary\n"
            f"2. Analyze the grammatical structures\n"
            f"3. Note any cultural, historical, or literary context essential for understanding\n\n"
            f"Then, based on your analysis, provide a scholarly English translation.\n"
            f"Clearly separate your analysis from your final translation. "
            f"Mark the translation section with '=== TRANSLATION ===' on its own line."
        )},
    ]


def build_pipeline(passage: dict) -> list[dict]:
    """Condition C: structured pipeline — 3 rounds accumulating context.

    Returns the FULL conversation (all 3 rounds) to be sent as a single
    multi-turn request, OR to be executed round-by-round.

    Since we need the model's output from each round to build the next,
    this function returns only Round 1. Rounds 2 and 3 are built by
    build_pipeline_round2() and build_pipeline_round3().
    """
    lang_name = {
        "classical-chinese": "Classical Chinese",
        "baroque-german": "Baroque German (17th century)",
        "latin": "Latin",
    }[passage["language"]]
    audience = passage.get("audience", "Graduate students in classical languages")
    genre = passage.get("genre", "classical")

    # Round 1: word selection + annotation (stages 2-3 combined)
    return [
        {"role": "system", "content": (
            "You are a classical language specialist producing structured annotations. "
            "Always output valid JSON."
        )},
        {"role": "user", "content": (
            f"Text ({lang_name}):\n{passage['text']}\n\n"
            f"Genre: {genre}\n"
            f"Target audience: {audience}\n\n"
            f"Step 1 — Word Selection & Annotation:\n"
            f"Select 4-8 words/phrases that need annotation for this audience. "
            f"For each word, provide:\n"
            f"- form: exact characters from the text\n"
            f"- meaning: what it means in THIS context (not just dictionary definition)\n"
            f"- significance: why it matters for understanding the passage\n\n"
            f"Output a JSON array:\n"
            f'[{{"form": "...", "meaning": "...", "significance": "..."}}]'
        )},
    ]


def build_pipeline_round2(passage: dict, round1_response: str) -> list[dict]:
    """Round 2: commentary generation (stage 4) given round 1 annotations."""
    lang_name = {
        "classical-chinese": "Classical Chinese",
        "baroque-german": "Baroque German (17th century)",
        "latin": "Latin",
    }[passage["language"]]
    genre = passage.get("genre", "classical")

    return [
        {"role": "system", "content": (
            "You are a scholarly commentator on classical texts."
        )},
        {"role": "user", "content": (
            f"Text ({lang_name}):\n{passage['text']}\n\n"
            f"Word annotations from previous analysis:\n{round1_response}\n\n"
            f"Now generate scholarly commentary covering:\n"
            f"1. Grammar: analyze 2-3 key grammatical structures that are non-obvious\n"
            f"2. Context: historical/cultural background essential for understanding\n"
            f"3. Rhetoric: persuasive strategies, literary devices, and their effects\n\n"
            f"Be specific and cite the text. This commentary will guide a subsequent translation."
        )},
    ]


def build_pipeline_round3(
    passage: dict, round1_response: str, round2_response: str
) -> list[dict]:
    """Round 3: translation with full pipeline context."""
    lang_name = {
        "classical-chinese": "Classical Chinese",
        "baroque-german": "Baroque German (17th century)",
        "latin": "Latin",
    }[passage["language"]]

    return [
        {"role": "system", "content": "You are a scholarly translator."},
        {"role": "user", "content": (
            f"Text ({lang_name}):\n{passage['text']}\n\n"
            f"=== Word Annotations ===\n{round1_response}\n\n"
            f"=== Scholarly Commentary ===\n{round2_response}\n\n"
            f"Based on the annotations and commentary above, provide a scholarly "
            f"English translation of the original text.\n\n"
            f"Translation principles:\n"
            f"- Accuracy over fluency (this is a scholarly tool)\n"
            f"- Preserve rhetorical structure (parallelism, antithesis, etc.)\n"
            f"- Proper nouns: transliterate with brief identification on first occurrence\n"
            f"- Technical terms: translate with original in parentheses on first occurrence\n\n"
            f"Provide only the translation, no additional commentary.\n"
            f"Mark the translation with '=== TRANSLATION ===' on its own line."
        )},
    ]
```

- [ ] **Step 2: Verify it loads**

```bash
uv run python -c "from experiment.prompts import build_direct, build_cot, build_pipeline; print('OK')"
```

- [ ] **Step 3: Commit**

```bash
git add experiment/prompts.py && git commit -m "Add prompt builders for 3 experimental conditions"
```

---

### Task 4: Write the experiment orchestrator

**Files:**
- Create: `experiment/experiment.py`
- Create: `experiment/__init__.py` (empty)

- [ ] **Step 1: Create `experiment/__init__.py`**

Empty file to make experiment a package.

- [ ] **Step 2: Write `experiment/experiment.py`**

```python
"""Commentary-augmented translation experiment.

Usage:
    uv run python -u experiment/experiment.py [--passages experiment/passages.json]

Requires:
    - ANTHROPIC_API_KEY env var (for Claude judge)
    - 32B model running on HPC (OpenAI-compatible at http://192.168.172.113:8000/v1)
"""

import argparse
import json
import os
import random
import re
import sys
import time
from pathlib import Path

from anthropic import Anthropic
from openai import OpenAI

from experiment.prompts import (
    build_cot,
    build_direct,
    build_pipeline,
    build_pipeline_round2,
    build_pipeline_round3,
)

# ── Config ──────────────────────────────────────────────
SMALL_MODEL = "deepseek-r1-32b"
SMALL_BASE_URL = "http://192.168.172.113:8000/v1"
SMALL_API_KEY = "unused"  # vLLM doesn't require a key

JUDGE_MODEL = "claude-sonnet-4-6"  # fast + capable enough for judging
RESULTS_DIR = Path("experiment/results")

# ── Helpers ─────────────────────────────────────────────

def strip_think(text: str) -> str:
    """Remove <think>...</think> blocks from R1 model output."""
    return re.sub(r"<think>.*?</think>\s*", "", text, flags=re.DOTALL).strip()


def extract_translation(text: str) -> str:
    """Extract text after '=== TRANSLATION ===' marker, if present."""
    marker = "=== TRANSLATION ==="
    if marker in text:
        return text.split(marker, 1)[1].strip()
    return text.strip()


def call_small_model(messages: list[dict], client: OpenAI) -> str:
    """Call the 32B model and return the stripped response."""
    resp = client.chat.completions.create(
        model=SMALL_MODEL,
        messages=messages,
        temperature=0,
        max_tokens=4096,
    )
    raw = resp.choices[0].message.content
    return strip_think(raw)


def call_judge(
    source_text: str, source_info: str,
    translations: dict[str, str],  # {"X": ..., "Y": ..., "Z": ...}
    label_map: dict[str, str],     # {"X": "A", "Y": "C", "Z": "B"} (hidden)
    client: Anthropic,
) -> dict:
    """Call Claude to judge three translations blindly."""
    prompt = f"""You are an expert in classical language translation and philology.

Below is a source text and three translations (labeled X, Y, Z) produced by different methods. You do not know which method produced which translation.

## Source
{source_info}

```
{source_text}
```

## Translation X
{translations['X']}

## Translation Y
{translations['Y']}

## Translation Z
{translations['Z']}

## Your Task

Rate each translation on these 4 dimensions (1-10 scale):

1. **Accuracy** — faithfulness to the original meaning; no misreadings of grammar or vocabulary
2. **Completeness** — no omissions, no hallucinated additions
3. **Register** — appropriate scholarly tone, correct terminology, proper noun handling
4. **Fluency** — natural, readable English that doesn't feel like "translationese"

Then rank the three translations from best to worst.

Output as JSON:
{{
  "X": {{"accuracy": N, "completeness": N, "register": N, "fluency": N}},
  "Y": {{"accuracy": N, "completeness": N, "register": N, "fluency": N}},
  "Z": {{"accuracy": N, "completeness": N, "register": N, "fluency": N}},
  "ranking": ["best_label", "middle_label", "worst_label"],
  "reasoning": "2-3 sentences explaining the key differences"
}}"""

    resp = client.messages.create(
        model=JUDGE_MODEL,
        max_tokens=2048,
        messages=[{"role": "user", "content": prompt}],
    )
    return {
        "raw_response": resp.content[0].text,
        "label_map": label_map,  # for de-blinding later
    }


# ── Main ────────────────────────────────────────────────

def run_condition_a(passage: dict, client: OpenAI) -> str:
    """Condition A: direct translation."""
    msgs = build_direct(passage)
    raw = call_small_model(msgs, client)
    return extract_translation(raw)


def run_condition_b(passage: dict, client: OpenAI) -> str:
    """Condition B: CoT then translate."""
    msgs = build_cot(passage)
    raw = call_small_model(msgs, client)
    return extract_translation(raw)


def run_condition_c(passage: dict, client: OpenAI) -> dict:
    """Condition C: 3-round pipeline.

    Returns dict with round1, round2, round3 (annotations, commentary, translation).
    """
    # Round 1: word selection + annotation
    msgs_r1 = build_pipeline(passage)
    r1 = call_small_model(msgs_r1, client)

    # Round 2: commentary
    msgs_r2 = build_pipeline_round2(passage, r1)
    r2 = call_small_model(msgs_r2, client)

    # Round 3: translation
    msgs_r3 = build_pipeline_round3(passage, r1, r2)
    r3 = call_small_model(msgs_r3, client)

    return {
        "round1_annotations": r1,
        "round2_commentary": r2,
        "round3_translation": extract_translation(r3),
    }


def main():
    parser = argparse.ArgumentParser(description="Commentary translation experiment")
    parser.add_argument(
        "--passages", default="experiment/passages.json",
        help="Path to passages JSON file",
    )
    parser.add_argument(
        "--passage-id", type=int, default=None,
        help="Run only one passage (by id) for testing",
    )
    args = parser.parse_args()

    # Load passages
    with open(args.passages) as f:
        passages = json.load(f)

    if args.passage_id is not None:
        passages = [p for p in passages if p["id"] == args.passage_id]
        if not passages:
            print(f"No passage with id={args.passage_id}")
            sys.exit(1)

    # Init clients
    small_client = OpenAI(base_url=SMALL_BASE_URL, api_key=SMALL_API_KEY)
    judge_client = Anthropic()  # uses ANTHROPIC_API_KEY env var

    # Prepare output
    RESULTS_DIR.mkdir(parents=True, exist_ok=True)
    all_translations = []
    all_judgments = []

    for passage in passages:
        pid = passage["id"]
        lang = passage["language"]
        print(f"\n{'='*60}")
        print(f"Passage {pid}: {passage['source']} ({lang})")
        print(f"{'='*60}")

        # ── Run 3 conditions ──
        print(f"  [A] Direct translation...", end=" ", flush=True)
        t0 = time.time()
        trans_a = run_condition_a(passage, small_client)
        print(f"done ({time.time()-t0:.1f}s)")

        print(f"  [B] CoT translation...", end=" ", flush=True)
        t0 = time.time()
        trans_b = run_condition_b(passage, small_client)
        print(f"done ({time.time()-t0:.1f}s)")

        print(f"  [C] Pipeline translation (3 rounds)...", end=" ", flush=True)
        t0 = time.time()
        result_c = run_condition_c(passage, small_client)
        trans_c = result_c["round3_translation"]
        print(f"done ({time.time()-t0:.1f}s)")

        # Save translations
        entry = {
            "passage_id": pid,
            "source": passage["source"],
            "language": lang,
            "condition_A_direct": trans_a,
            "condition_B_cot": trans_b,
            "condition_C_pipeline": trans_c,
            "condition_C_annotations": result_c["round1_annotations"],
            "condition_C_commentary": result_c["round2_commentary"],
        }
        all_translations.append(entry)

        # ── Blind judge ──
        print(f"  [Judge] Sending to Claude...", end=" ", flush=True)
        t0 = time.time()

        # Random shuffle for blinding
        conditions = {"A": trans_a, "B": trans_b, "C": trans_c}
        labels = list(conditions.keys())
        random.shuffle(labels)
        blind_labels = ["X", "Y", "Z"]
        label_map = {bl: cl for bl, cl in zip(blind_labels, labels)}
        translations_blind = {bl: conditions[cl] for bl, cl in zip(blind_labels, labels)}

        source_info = f"{passage['source']} ({lang})"
        judgment = call_judge(
            passage["text"], source_info,
            translations_blind, label_map, judge_client,
        )
        judgment["passage_id"] = pid
        all_judgments.append(judgment)
        print(f"done ({time.time()-t0:.1f}s)")

        # Incremental save after each passage
        with open(RESULTS_DIR / "translations.json", "w") as f:
            json.dump(all_translations, f, indent=2, ensure_ascii=False)
        with open(RESULTS_DIR / "judgments.json", "w") as f:
            json.dump(all_judgments, f, indent=2, ensure_ascii=False)

    # ── Generate summary ──
    print(f"\n{'='*60}")
    print("Generating summary...")
    generate_summary(all_translations, all_judgments)
    print(f"Results saved to {RESULTS_DIR}/")


def generate_summary(translations: list, judgments: list):
    """Parse judge responses and produce a summary table."""
    summary_lines = ["# Translation Experiment Results\n"]
    summary_lines.append(f"Date: {time.strftime('%Y-%m-%d %H:%M')}\n")
    summary_lines.append(f"Model: {SMALL_MODEL}\n")
    summary_lines.append(f"Judge: {JUDGE_MODEL}\n\n")

    # Aggregate scores
    scores = {"A": [], "B": [], "C": []}

    for j in judgments:
        pid = j["passage_id"]
        label_map = j["label_map"]  # {"X": "A", "Y": "C", "Z": "B"}
        raw = j["raw_response"]

        summary_lines.append(f"## Passage {pid}\n")

        # Try to parse JSON from judge response
        try:
            # Find JSON block in response
            json_match = re.search(r'\{[\s\S]*\}', raw)
            if json_match:
                parsed = json.loads(json_match.group())
                for blind_label in ["X", "Y", "Z"]:
                    real_label = label_map[blind_label]
                    if blind_label in parsed and isinstance(parsed[blind_label], dict):
                        s = parsed[blind_label]
                        total = sum(s.get(k, 0) for k in ["accuracy", "completeness", "register", "fluency"])
                        scores[real_label].append(total / 4)
                        summary_lines.append(
                            f"- Condition {real_label}: "
                            f"acc={s.get('accuracy','?')} "
                            f"comp={s.get('completeness','?')} "
                            f"reg={s.get('register','?')} "
                            f"flu={s.get('fluency','?')} "
                            f"(avg={total/4:.1f})\n"
                        )
                if "ranking" in parsed:
                    real_ranking = [label_map.get(x, x) for x in parsed["ranking"]]
                    summary_lines.append(f"- Ranking: {' > '.join(real_ranking)}\n")
                if "reasoning" in parsed:
                    summary_lines.append(f"- Reasoning: {parsed['reasoning']}\n")
        except (json.JSONDecodeError, KeyError) as e:
            summary_lines.append(f"- (Could not parse judge response: {e})\n")
            summary_lines.append(f"- Raw: {raw[:200]}...\n")

        summary_lines.append("\n")

    # Aggregate
    summary_lines.append("## Aggregate Scores\n\n")
    summary_lines.append("| Condition | Avg Score | N |\n")
    summary_lines.append("|-----------|-----------|---|\n")
    for cond in ["A", "B", "C"]:
        if scores[cond]:
            avg = sum(scores[cond]) / len(scores[cond])
            summary_lines.append(f"| {cond} ({'Direct' if cond=='A' else 'CoT' if cond=='B' else 'Pipeline'}) | {avg:.2f} | {len(scores[cond])} |\n")

    summary_lines.append("\n**Hypothesis: C > B > A** (structured pipeline > free CoT > direct)\n")

    with open(RESULTS_DIR / "summary.md", "w") as f:
        f.writelines(summary_lines)


if __name__ == "__main__":
    main()
```

- [ ] **Step 3: Create `experiment/__init__.py`**

```bash
touch experiment/__init__.py
```

- [ ] **Step 4: Verify script loads (no syntax errors)**

```bash
uv run python -c "import experiment.experiment; print('OK')"
```

- [ ] **Step 5: Commit**

```bash
git add experiment/ && git commit -m "Add experiment orchestrator with 3 conditions and blind judge"
```

---

### Task 5: Curate test passages and do a single-passage dry run

**Files:**
- Create/populate: `experiment/passages.json`

- [ ] **Step 1: Research and write 6 passages**

Use web search to find specific passages. Criteria:
- Obscure enough that 32B unlikely memorized them
- 3-6 sentences each
- Genuinely difficult (archaic grammar, rare vocabulary, cultural knowledge needed)

Save to `experiment/passages.json`.

- [ ] **Step 2: Dry run on passage 1 only**

```bash
uv run python -u experiment/experiment.py --passage-id 1
```

Verify:
- 32B model is reachable (check HPC is still running)
- All 3 conditions produce output
- `<think>` blocks are stripped
- Judge returns parseable JSON
- Files written to `experiment/results/`

- [ ] **Step 3: Review dry run output**

Read `experiment/results/translations.json` and `experiment/results/summary.md`. Check:
- Translations are plausible (not garbage)
- Judge scores are reasonable (not all 10s or all 1s)
- The 3 conditions actually produced different translations

Fix any issues before running the full experiment.

- [ ] **Step 4: Commit passages**

```bash
git add experiment/passages.json && git commit -m "Add curated test passages for experiment"
```

---

### Task 6: Run full experiment

- [ ] **Step 1: Confirm HPC model is still running**

```bash
ssh zhanchen@100.113.238.32 'curl -s http://192.168.172.113:8000/v1/models | python3 -c "import sys,json; d=json.load(sys.stdin); print([m[\"id\"] for m in d[\"data\"]])"'
```

Expected: `['deepseek-r1-32b']`

- [ ] **Step 2: Run full experiment**

```bash
ANTHROPIC_API_KEY=<key> uv run python -u experiment/experiment.py 2>&1 | tee experiment/results/run.log
```

This will process all 6 passages × 3 conditions = 18 translations + 6 judge calls. Expected runtime: ~10-15 minutes.

- [ ] **Step 3: Review results**

Read `experiment/results/summary.md`. Check aggregate scores and per-passage rankings.

- [ ] **Step 4: Commit results**

```bash
git add experiment/results/ && git commit -m "Add translation experiment results"
```
