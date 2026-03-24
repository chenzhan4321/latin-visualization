# Translation Experiment Results

**Date:** 2026-03-24
**Model:** DeepSeek-R1-Distill-Qwen-70B (4×4090, vLLM)
**Judge:** Claude Opus 4.6 (manual blind evaluation)
**Passages:** 6 (2 Classical Chinese, 2 Baroque German, 2 Latin)
**Conditions:** A = Direct, B = CoT, C = Pipeline (3-round structured annotation)

---

## Passage 1: 《國語·越語下》(Classical Chinese — political counsel)

**Source text:** 天時不作，弗為人客；人事不起，弗為之始。今君王未盈而溢，未勝而驕……王姑待之。

| Dimension | A (Direct) | B (CoT) | C (Pipeline) |
|-----------|-----------|---------|-------------|
| Accuracy  | 7 | 7 | 8 |
| Completeness | 8 | 8 | 8 |
| Register  | 6 | 7 | 8 |
| Fluency   | 7 | 7 | 8 |
| **Avg**   | **7.0** | **7.3** | **8.0** |

**Ranking: C > B > A**

**Reasoning:**
- **C wins** because it preserves the rhetorical parallelism ("not yet full, but already overflowing; not yet victorious, but already arrogant") and uses appropriate register ("your majesty"). "The king should wait for now" is a clean rendering of 王姑待之.
- **A** adds "the right moment" to 王姑待之, which over-interprets the original. Translates 為人客 as "take the initiative" — acceptable but less precise than C's "act as a guest" (客 literally = guest/visitor, metaphor for aggressor entering another's territory).
- **B** produces similar quality to A. The vocabulary analysis is correct but doesn't significantly improve the final translation.

---

## Passage 2: 《論衡·自紀篇》(Classical Chinese — philosophical autobiography)

**Source text:** 充既疾俗情，作《譏俗》之書；又閔人君之政……夫養實者不育華，調行者不飾辭。

| Dimension | A (Direct) | B (CoT) | C (Pipeline) |
|-----------|-----------|---------|-------------|
| Accuracy  | 7 | 8 | 4 |
| Completeness | 8 | 8 | 7 |
| Register  | 7 | 8 | 7 |
| Fluency   | 7 | 8 | 7 |
| **Avg**   | **7.3** | **8.0** | **6.3** |

**Ranking: B > A > C**

**Reasoning:**
- **B wins** with the most accurate translation. Book titles are well-rendered (*Book of Discourse Weighing*). The closing aphorism "those who nurture substance do not cultivate showy appearances, and those who cultivate conduct do not embellish their words" is the most faithful rendering of 養實者不育華，調行者不飾辭.
- **A** is solid — correct author identification, clear prose.
- **C is worst** due to a **critical factual error**: identifies the author as "Cai Yong" (蔡邕) instead of Wang Chong (王充). The opening character 充 clearly refers to Wang Chong's given name. This error likely originated in the Pipeline's annotation stage and propagated through all subsequent rounds. Otherwise the translation quality is comparable.

---

## Passage 3: Lohenstein, *Agrippina* I (Baroque German — tragedy)

**Source text:** Paris. Di Noth hat mich in's Schloß/ die Treu' in's Zimmer bracht. / Nero. Wie beb'stu? …

| Dimension | A (Direct) | B (CoT) | C (Pipeline) |
|-----------|-----------|---------|-------------|
| Accuracy  | 7 | 5 | 9 |
| Completeness | 8 | 7 | 9 |
| Register  | 7 | 6 | 9 |
| Fluency   | 8 | 7 | 7 |
| **Avg**   | **7.5** | **6.3** | **8.5** |

**Ranking: C > A > B**

**Reasoning:**
- **C wins decisively.** "How you tremble!" correctly translates the archaic *beb'stu* (= bebst du = "you tremble"). "Strike thunder!" for *Schlag Donner!* captures the baroque exclamatory force. Glosses in brackets ([Noth], [Treu'], [Gemüth], [Käyserthumb]) serve the scholarly register without disrupting readability. "Imperial dignity" for *Käyserthumb* is excellent.
- **A** is clean and readable but misses nuance. "Good heavens!" is too mild for *Schlag Donner!* (literally "Strike thunder!"). "Why do you tremble?" is acceptable but less precise than C's rendering.
- **B has a critical error:** translates *Wie beb'stu?* as "How are you?" — completely wrong. *Beb'stu* is archaic for *bebst du* ("you tremble"), not a greeting. This misreading changes the entire dramatic tone. Also renders *Schlag Donner!* as "Good grief!" — far too colloquial.

---

## Passage 4: Hoffmannswaldau, "Die Welt" (Baroque German — vanitas poem)

**Source text:** WAs ist die Welt / und ihr berühmtes gläntzen? … Ein faules Grab / so Alabaster deckt.

| Dimension | A (Direct) | B (CoT) | C (Pipeline) |
|-----------|-----------|---------|-------------|
| Accuracy  | 6 | 8 | 6 |
| Completeness | 8 | 8 | 8 |
| Register  | 7 | 8 | 6 |
| Fluency   | 7 | 8 | 6 |
| **Avg**   | **7.0** | **8.0** | **6.5** |

**Ranking: B > A > C**

**Reasoning:**
- **B wins** with the most polished rendering. "A vile illusion in fleeting confines" for *Ein schnöder Schein in kurtzgefasten Gräntzen* is superior — captures both *Schein* (illusion/appearance) and *kurtzgefast* (briefly contained). "A field of thistles where sorrows grow green" captures the bitter irony of *Kummerdisteln grünen*. "Concealed by alabaster" is more evocative than "covered with."
- **A and C** both mistranslate *bundtes Feld* as "bound field" — it means "colorful/variegated field" (*bunt* = colorful), a key part of the vanitas imagery (the field *looks* colorful but grows only sorrow-thistles).
- **C** retains caesura marks (/) which is a formatting choice, but "short-fenced boundaries" for *kurtzgefasten Gräntzen* is awkward and inaccurate.

---

## Passage 5: Tacitus, *Agricola* 30 (Latin — Calgacus's speech)

**Source text:** Quotiens causas belli et necessitatem nostram intueor, magnus mihi animus est … eadem etiam ignavis tutissima sunt.

| Dimension | A (Direct) | B (CoT) | C (Pipeline) |
|-----------|-----------|---------|-------------|
| Accuracy  | 7 | 6 | 4 |
| Completeness | 8 | 5 | 7 |
| Register  | 7 | 5 | 6 |
| Fluency   | 8 | 4 | 6 |
| **Avg**   | **7.5** | **5.0** | **5.8** |

**Ranking: A > C > B**

**Reasoning:**
- **A wins** with a clean, fluent translation. "You are all united and free from servitude" correctly reads *universi coistis et servitutis expertes*. "Fear of enemies held the state together in virtuous practices" is not in this passage (that's Sallust), but the Calgacus passage is rendered well overall. "Battle and arms, which are honorable for the brave, are also the safest for the cowardly" is an excellent rendering of the paradox.
- **C has a critical error:** translates *servitutis expertes* as "experienced in slavery" — the exact **opposite** of the correct meaning. *Expers* + genitive = "without experience of, free from." Calgacus is saying "you have never known servitude," not "you are experienced in slavery." The parenthetical glosses (fortibus, ignavis, classe Romana) also clutter the scholarly register.
- **B** failed to produce a clean translation — the output is mostly vocabulary analysis. The extraction heuristic didn't find a final translation block.

---

## Passage 6: Sallust, *Bellum Iugurthinum* 41 (Latin — moral digression)

**Source text:** Ceterum mos partium et factionum … lascivia atque superbia incessere.

| Dimension | A (Direct) | B (CoT) | C (Pipeline) |
|-----------|-----------|---------|-------------|
| Accuracy  | 8 | 7 | 8 |
| Completeness | 8 | 8 | 8 |
| Register  | 8 | 7 | 8 |
| Fluency   | 8 | 8 | 8 |
| **Avg**   | **8.0** | **7.5** | **8.0** |

**Ranking: A = C > B**

**Reasoning:**
- **A and C are both excellent** and nearly identical in quality. Both correctly handle the compressed Sallustian syntax. A's "fear of enemies held the state together in virtuous practices" and C's "fear of enemies kept the city engaged in virtuous pursuits" are equally good renderings of *metus hostilis in bonis artibus civitatem retinebat*.
- **A** edges slightly ahead with "began to assail" for *incessere* (capturing the aggressive connotation), while C's "began to prevail" is acceptable but blander.
- **B** is also good but says "a few years ago" for *paucis ante annis* — should be "a few years before" (relative to the narrative timeframe, not the present). Minor but reveals a temporal reasoning error.

---

## Aggregate Results

| Condition | Avg Score | Wins | 2nd Place | 3rd Place |
|-----------|-----------|------|-----------|-----------|
| **A (Direct)** | **7.38** | **2** | 2 | 2 |
| **B (CoT)** | **7.02** | **2** | 1 | 3 |
| **C (Pipeline)** | **7.18** | **2** | 2 | 2 |

### Win distribution by passage:

| Passage | Best | Middle | Worst |
|---------|------|--------|-------|
| 1 (Chinese — Guoyu) | C | B | A |
| 2 (Chinese — Lunheng) | B | A | C |
| 3 (German — Lohenstein) | C | A | B |
| 4 (German — Hoffmannswaldau) | B | A | C |
| 5 (Latin — Tacitus) | A | C | B |
| 6 (Latin — Sallust) | A=C | — | B |

---

## Key Findings

### 1. Hypothesis partially supported, with caveats

The hypothesis **C > B > A** holds for passages where the Pipeline's annotation stage produces **correct** information (Passages 1, 3). In these cases, structured commentary genuinely improves translation quality — Passage 3 (Lohenstein) shows the most dramatic improvement, where Pipeline correctly decoded the archaic *beb'stu* that both Direct and CoT missed.

### 2. Pipeline amplifies errors (double-edged sword)

When the Pipeline's annotation stage introduces **incorrect** information, the error propagates and gets reinforced through subsequent rounds:
- **Passage 2:** Misidentified Wang Chong as Cai Yong → carried through to final translation
- **Passage 5:** Mistranslated *servitutis expertes* as "experienced in slavery" (opposite meaning) → annotation stage locked in the error, commentary reinforced it, translation inherited it

This is the most important finding: **structured pipelines are error amplifiers as much as quality amplifiers.**

### 3. CoT (B) is inconsistent

Condition B performed well on some passages (best on 2, 4) but poorly on others (worst on 3, 5, 6). The main issue: the R1 model's thinking sometimes produces analysis that doesn't improve—or even degrades—the final translation. The *beb'stu* → "How are you?" error in Passage 3 occurred despite explicit analysis.

### 4. Direct translation (A) is a strong baseline

Condition A was surprisingly competitive, winning or tying on 2 passages and never catastrophically wrong. For well-known text types (Sallust, Tacitus), the model's pre-training knowledge is sufficient, and additional prompting adds noise.

### 5. Language-specific patterns

- **Classical Chinese:** Pipeline helps with register and parallelism (P1), but risks hallucinating facts (P2)
- **Baroque German:** Pipeline excels at decoding archaic forms (P3 *beb'stu*, P4 *Käyserthumb*), but CoT produces better literary translations (P4)
- **Latin:** Direct translation is strongest; the model's Latin training data is apparently robust, and Pipeline/CoT add more noise than signal

---

## Phase 2: Condition D — Pipeline + Fact-Check

Based on Finding #2 (error amplification), we added a **fact-check round** between annotation (Round 1) and commentary (Round 2). The fact-checker receives:
- The source metadata (author, work, chapter)
- The original text
- The annotations to verify

It checks: proper noun accuracy, lexical polarity (negation errors), case/prefix analysis, and internal consistency. Corrected annotations are passed to subsequent rounds.

### C vs D Comparison

| Passage | C (Pipeline) | D (Pipeline + FC) | Fact-check impact |
|---------|-------------|-------------------|-------------------|
| 1 (Guoyu) | 8.0 | 8.0 | No change — annotations were already correct |
| 2 (Lunheng) | 6.3 | **8.5** | **Fixed critical error:** Cai Yong → Wang Chong. Book titles now include original Chinese (譏俗, 政務, 論衡). |
| 3 (Lohenstein) | 8.5 | 8.0 | Slight regression — removed helpful inline glosses [Noth], [Käyserthumb] that C had. Translation still correct. |
| 4 (Hoffmannswaldau) | 6.5 | 7.0 | Minor improvement — "contemptible" better than "vile" for *schnöder*. Still mistranslates *bundtes* as "bound" (= colorful). |
| 5 (Tacitus) | 5.8 | **7.0** | **Partially fixed:** No longer says "experienced in slavery" (opposite meaning). Now says "tested by necessity and servitude" — better but still not ideal (*expertes* = "free from", not "tested by"). |
| 6 (Sallust) | 8.0 | 8.5 | Minor improvement — "a few years before" (correct temporal framing) vs. "a few years ago". Better rendering of *incessere*. |

### D Scores

| Dimension | P1 | P2 | P3 | P4 | P5 | P6 | **Avg** |
|-----------|----|----|----|----|----|----|---------|
| Accuracy  | 8  | 9  | 8  | 6  | 6  | 8  | 7.5 |
| Completeness | 8 | 9 | 8 | 8 | 7 | 8 | 8.0 |
| Register  | 8  | 9  | 7  | 7  | 7  | 8  | 7.7 |
| Fluency   | 8  | 8  | 8  | 7  | 7  | 9  | 7.8 |
| **Avg**   | **8.0** | **8.8** | **7.8** | **7.0** | **6.8** | **8.3** | **7.8** |

### Updated Aggregate (All 4 Conditions)

| Condition | Avg Score | Best Count |
|-----------|-----------|------------|
| A (Direct) | 7.38 | 2 |
| B (CoT) | 7.02 | 2 |
| C (Pipeline) | 7.18 | 2 |
| **D (Pipeline + FC)** | **7.78** | — |

**Fact-checking raised the pipeline average from 7.18 to 7.78** — a 0.6 point improvement. More importantly:

- **Eliminated the catastrophic failure** on Passage 2 (6.3 → 8.8)
- **Partially fixed** the polarity error on Passage 5 (5.8 → 7.0)
- **Never made things worse** by more than 0.5 points (Passage 3: bracket glosses removed)

---

## Final Conclusions

### The case for structured commentary

1. **Pipeline + fact-check (D) is the best overall strategy**, beating all other conditions in average score
2. The fact-check stage costs one additional LLM call (~20s) but prevents the error amplification that was C's fatal weakness
3. **Greatest value is for archaic/obscure texts** where the model's pre-training is insufficient (Baroque German, rare Classical Chinese)

### When to use what

| Text type | Recommended | Why |
|-----------|-------------|-----|
| Archaic orthography (Baroque German) | **D (Pipeline + FC)** | Decoding is a genuine bottleneck; structured annotation helps |
| Rare Classical Chinese | **D (Pipeline + FC)** | Proper noun identification and context matter; fact-check prevents hallucination |
| Well-attested Latin prose | **A (Direct)** | Model's training data is strong enough; extra stages add noise |
| Poetry with complex rhetoric | **B or D** | CoT captures literary nuance; Pipeline preserves structural parallelism |

### Key design principle

**Structured annotation is a force multiplier — but force multipliers amplify errors too.** The fact-check stage is not optional; it's the difference between a pipeline that's reliably better and one that's unpredictably worse.
