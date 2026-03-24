"""Commentary-augmented translation experiment.

Usage:
    uv run python -u experiment/experiment.py [--passages experiment/passages.json]
    uv run python -u experiment/experiment.py --passage-id 1   # dry run on one passage

Requires:
    - ANTHROPIC_API_KEY env var (for Claude judge)
    - 32B model running on HPC (OpenAI-compatible at HPC_MODEL_URL)
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

from prompts import (
    build_cot,
    build_direct,
    build_pipeline,
    build_pipeline_round2,
    build_pipeline_round3,
)

# ── Config ──────────────────────────────────────────────
SMALL_MODEL = "deepseek-r1-70b"
SMALL_BASE_URL = os.environ.get("HPC_MODEL_URL", "http://192.168.172.113:8000/v1")
SMALL_API_KEY = "unused"  # vLLM doesn't require a key

JUDGE_MODEL = "claude-sonnet-4-6"
RESULTS_DIR = Path(__file__).parent / "results"


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


def call_small_model(messages: list[dict], client: OpenAI, retries: int = 3) -> str:
    """Call the model and return the stripped response, with retries."""
    for attempt in range(retries):
        try:
            resp = client.chat.completions.create(
                model=SMALL_MODEL,
                messages=messages,
                temperature=0,
                max_tokens=4096,
            )
            raw = resp.choices[0].message.content
            return strip_think(raw)
        except Exception as e:
            if attempt < retries - 1:
                wait = 10 * (attempt + 1)
                print(f"\n    [retry {attempt+1}/{retries}] {e}, waiting {wait}s...", flush=True)
                time.sleep(wait)
            else:
                raise


def call_judge(
    source_text: str,
    source_info: str,
    translations: dict[str, str],
    label_map: dict[str, str],
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

Output ONLY valid JSON, no other text:
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
        "label_map": label_map,
    }


# ── Condition runners ───────────────────────────────────

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
    """Condition C: 3-round pipeline."""
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


# ── Summary generator ──────────────────────────────────

def generate_summary(translations: list, judgments: list):
    """Parse judge responses and produce a summary table."""
    lines = ["# Translation Experiment Results\n"]
    lines.append(f"Date: {time.strftime('%Y-%m-%d %H:%M')}\n")
    lines.append(f"Model: {SMALL_MODEL}\n")
    lines.append(f"Judge: {JUDGE_MODEL}\n\n")

    scores = {"A": [], "B": [], "C": []}
    win_counts = {"A": 0, "B": 0, "C": 0}

    for j in judgments:
        pid = j["passage_id"]
        label_map = j["label_map"]
        raw = j["raw_response"]

        lines.append(f"## Passage {pid}\n")

        try:
            json_match = re.search(r"\{[\s\S]*\}", raw)
            if json_match:
                parsed = json.loads(json_match.group())
                for blind_label in ["X", "Y", "Z"]:
                    real_label = label_map[blind_label]
                    if blind_label in parsed and isinstance(parsed[blind_label], dict):
                        s = parsed[blind_label]
                        total = sum(
                            s.get(k, 0)
                            for k in ["accuracy", "completeness", "register", "fluency"]
                        )
                        scores[real_label].append(total / 4)
                        lines.append(
                            f"- Condition {real_label}: "
                            f"acc={s.get('accuracy', '?')} "
                            f"comp={s.get('completeness', '?')} "
                            f"reg={s.get('register', '?')} "
                            f"flu={s.get('fluency', '?')} "
                            f"(avg={total / 4:.1f})\n"
                        )
                if "ranking" in parsed:
                    real_ranking = [label_map.get(x, x) for x in parsed["ranking"]]
                    lines.append(f"- Ranking: {' > '.join(real_ranking)}\n")
                    if real_ranking:
                        win_counts[real_ranking[0]] += 1
                if "reasoning" in parsed:
                    lines.append(f"- Reasoning: {parsed['reasoning']}\n")
        except (json.JSONDecodeError, KeyError) as e:
            lines.append(f"- (Could not parse judge response: {e})\n")
            lines.append(f"- Raw: {raw[:300]}...\n")

        lines.append("\n")

    # Aggregate
    lines.append("## Aggregate Scores\n\n")
    lines.append("| Condition | Avg Score | Wins | N |\n")
    lines.append("|-----------|-----------|------|---|\n")
    cond_names = {"A": "Direct", "B": "CoT", "C": "Pipeline"}
    for cond in ["A", "B", "C"]:
        if scores[cond]:
            avg = sum(scores[cond]) / len(scores[cond])
            lines.append(
                f"| {cond} ({cond_names[cond]}) "
                f"| {avg:.2f} | {win_counts[cond]} | {len(scores[cond])} |\n"
            )

    lines.append(
        "\n**Hypothesis: C > B > A** "
        "(structured pipeline > free CoT > direct)\n"
    )

    with open(RESULTS_DIR / "summary.md", "w") as f:
        f.writelines(lines)


# ── Main ────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Commentary translation experiment")
    parser.add_argument(
        "--passages",
        default=str(Path(__file__).parent / "passages.json"),
        help="Path to passages JSON file",
    )
    parser.add_argument(
        "--passage-id",
        type=int,
        default=None,
        help="Run only one passage (by id) for testing",
    )
    args = parser.parse_args()

    with open(args.passages) as f:
        passages = json.load(f)

    if args.passage_id is not None:
        passages = [p for p in passages if p["id"] == args.passage_id]
        if not passages:
            print(f"No passage with id={args.passage_id}")
            sys.exit(1)

    # Init client
    small_client = OpenAI(base_url=SMALL_BASE_URL, api_key=SMALL_API_KEY)

    RESULTS_DIR.mkdir(parents=True, exist_ok=True)

    # Resume from existing results if available
    trans_file = RESULTS_DIR / "translations.json"
    if trans_file.exists():
        with open(trans_file) as f:
            all_translations = json.load(f)
        done_ids = {t["passage_id"] for t in all_translations}
        passages = [p for p in passages if p["id"] not in done_ids]
        if done_ids:
            print(f"Resuming — already have passages {sorted(done_ids)}, {len(passages)} remaining")
    else:
        all_translations = []

    for passage in passages:
        pid = passage["id"]
        lang = passage["language"]
        print(f"\n{'=' * 60}")
        print(f"Passage {pid}: {passage['source']} ({lang})")
        print(f"{'=' * 60}")

        # ── Run 3 conditions ──
        print("  [A] Direct translation...", end=" ", flush=True)
        t0 = time.time()
        trans_a = run_condition_a(passage, small_client)
        print(f"done ({time.time() - t0:.1f}s)")

        print("  [B] CoT translation...", end=" ", flush=True)
        t0 = time.time()
        trans_b = run_condition_b(passage, small_client)
        print(f"done ({time.time() - t0:.1f}s)")

        print("  [C] Pipeline translation (3 rounds)...", end=" ", flush=True)
        t0 = time.time()
        result_c = run_condition_c(passage, small_client)
        trans_c = result_c["round3_translation"]
        print(f"done ({time.time() - t0:.1f}s)")

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

        # ── Prepare blinded translations for manual judge ──
        conditions = {"A": trans_a, "B": trans_b, "C": trans_c}
        labels = list(conditions.keys())
        random.shuffle(labels)
        blind_labels = ["X", "Y", "Z"]
        label_map = {bl: cl for bl, cl in zip(blind_labels, labels)}
        translations_blind = {
            bl: conditions[cl] for bl, cl in zip(blind_labels, labels)
        }
        entry["blind_map"] = label_map
        entry["blind_translations"] = translations_blind

        # Incremental save
        with open(RESULTS_DIR / "translations.json", "w") as f:
            json.dump(all_translations, f, indent=2, ensure_ascii=False)

    print(f"\n{'=' * 60}")
    print(f"All translations saved to {RESULTS_DIR}/translations.json")
    print("Ready for manual judging.")


if __name__ == "__main__":
    main()
