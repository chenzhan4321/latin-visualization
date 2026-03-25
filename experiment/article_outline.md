# Does Structured Commentary Enhance LLM Understanding of Obscure Texts?

## Yes — but only with careful fact-checking.

---

## 1. Motivation

Classical text translation is a hard test for LLMs: archaic orthography, dead grammar, metaphors that require cultural knowledge to decode. The structure of traditional scholarly commentary — **word selection → annotation → grammatical/cultural analysis → translation** — is essentially a structured chain-of-thought.

**Core question:** If we formalize this scholarly annotation workflow as a prompt pipeline, can it improve a small model's translation quality?

## 2. Experimental Design

- **Model:** DeepSeek-R1-70B (open-source thinking model, 4×4090)
- **Test material:** 6 difficult passages (2 Classical Chinese + 2 Baroque German + 2 Latin), all translated into English
- **Four conditions:**

| Condition | Strategy | API Rounds |
|-----------|----------|------------|
| A. Direct | Translate directly | 1 |
| B. CoT | Free-form analysis, then translate | 1 |
| C. Pipeline | Word selection → Annotation → Commentary → Translation | 3 |
| D. Pipeline + FC | Word selection → **Fact-check** → Commentary → Translation | 4 |

- **Judge:** Claude Opus, blind evaluation, 4 dimensions (Accuracy / Completeness / Register / Fluency, each 1-10)
- **Controls:** `temperature=0`, blinded label shuffling (X/Y/Z)

## 3. Phase 1 Results: A vs B vs C

| Condition | Avg Score | Character |
|-----------|-----------|-----------|
| A (Direct) | 7.38 | Stable baseline, never catastrophically wrong |
| B (CoT) | 7.02 | Inconsistent — correct analysis ≠ better translation |
| C (Pipeline) | 7.18 | **Double-edged sword**: best when right, worst when wrong |

### The highlight

Passage 3 (Lohenstein, *Agrippina*): Pipeline correctly decoded the archaic *beb'stu* (= *bebst du*, "you tremble") while both Direct and CoT failed — CoT even produced "How are you?" despite explicit analysis.

### The disaster

Passage 2 (Wang Chong, *Lunheng*): Pipeline misidentified the author as Cai Yong (蔡邕) instead of Wang Chong (王充). The error propagated through all subsequent rounds — commentary reinforced it, translation inherited it. Score: 6.3 (worst of all conditions).

Passage 5 (Tacitus, *Agricola*): Pipeline translated *servitutis expertes* ("free from servitude") as "experienced in slavery" — the **exact opposite**.

## 3.5 Uncontrolled Commentary is Harmful: The Polarization Effect

The most counterintuitive finding from Phase 1 is not that Pipeline "sometimes works and sometimes doesn't" — it's that **Pipeline transforms the score distribution from unimodal to bimodal**.

Direct (A) scores across 6 passages: 7.0, 7.3, 7.5, 7.0, 7.5, 8.0 — **low variance, clustered around 7.3**

Pipeline (C) scores across 6 passages: 8.0, 6.3, 8.5, 6.5, 5.8, 8.0 — **polarized: either >8 or <6.5**

```
A (Direct):     ·  ·  ·  ·  ·  ·        ← stable around 7
C (Pipeline):   ·     ·     ·  ·  ·  ·   ← bimodal clustering
                5  6  7  8  9
```

This is not random noise. The pipeline's structure dictates only two modes:

- **Virtuous cycle:** Correct annotations → deeper commentary → precise translation (P1, P3, P6)
- **Vicious cycle:** Wrong annotations → reasoning from false premises → error inheritance and reinforcement (P2, P5)

The middle ground is nearly absent — because each round builds on the previous round's output, both correctness and error are **compounded**.

This is structurally isomorphic to a well-known trap in the human commentary tradition: an authoritative annotator's slip becomes cited, elaborated, and institutionalized by subsequent commentators until it becomes "consensus" — as when the forged *Old Text Documents* (古文尚书) were annotated for over a millennium before Yan Ruoqu (阎若璩) exposed them.

**The question is therefore not "whether to use commentary" but "unaudited commentary is more dangerous than no commentary."** The failure of CoT (B) confirms this from another angle: free-form thinking is not structured analysis; unconstrained "think before translating" performs worse than just translating.

## 4. Phase 2: The Fact-Check Stage

A fact-check round was inserted between annotation (Round 1) and commentary (Round 2). The fact-checker receives:
- Source metadata (author, work, chapter)
- Original text
- Annotations to verify

It checks: proper noun accuracy against source attribution, lexical polarity (negation/privative errors), case/prefix analysis, and internal consistency.

### Results: C vs D

| Passage | C (Pipeline) | D (Pipeline + FC) | What fact-check fixed |
|---------|-------------|-------------------|----------------------|
| 1 (Guoyu) | 8.0 | 8.0 | Nothing — annotations were already correct |
| 2 (Lunheng) | 6.3 | **8.8** | Fixed author misidentification (Cai Yong → Wang Chong) |
| 3 (Lohenstein) | 8.5 | 8.0 | Minor regression (removed helpful inline glosses) |
| 4 (Hoffmannswaldau) | 6.5 | 7.0 | Minor lexical improvements |
| 5 (Tacitus) | 5.8 | **7.0** | Partially fixed polarity error (*expertes*) |
| 6 (Sallust) | 8.0 | 8.5 | Fixed temporal framing |

### Updated Aggregate

| Condition | Avg Score |
|-----------|-----------|
| A (Direct) | 7.38 |
| B (CoT) | 7.02 |
| C (Pipeline) | 7.18 |
| **D (Pipeline + FC)** | **7.78** |

**Fact-checking raised the pipeline average from 7.18 to 7.78** (+0.6). More importantly, it compressed the bimodal distribution back to unimodal — the floor rose from 5.8 to 6.8, eliminating catastrophic failures.

## 5. Core Argument

> **Structured annotation is a force multiplier — and force multipliers amplify errors too.**

Three levels of insight:

1. **Commentary structure works** — not because "more thinking = better" (CoT is actually worst), but because **structured decomposition** breaks a hard problem into sub-tasks the model can handle
2. **Error propagation is the intrinsic risk of pipelines** — each stage can inject errors that subsequent stages inherit and reinforce. This is isomorphic to the "authority bias" in human scholarly commentary
3. **Fact-checking is what makes the pipeline usable** — one extra API call (~20s) reduces catastrophic failure rate to zero

## 6. Large-Scale Experiment: 129 Passages, Blind Evaluation

### 6.1 Scale

The experiment was scaled from 6 to 144 passages (129 valid after filtering):
- **61 Classical Chinese** — from 20+ sources (Guanzi, Hanfeizi, Wenxin Diaolong, Yanshi Jiaxun, Lüshi Chunqiu, Huainanzi, Zuozhuan, Zhuangzi, Xunzi, Shangjunshu, Baopuzi, Shanghan Lun, Nanjing, Guiguzi, Gongsun Longzi, Chunqiu Fanlu, Shishuo Xinyu, Shanhaijing, etc.)
- **68 Latin** — from 20+ authors (Tacitus, Sallust, Seneca, Cicero, Horace, Juvenal, Augustine, Ovid, Lucan, Martial, Lucretius, Pliny, Petronius, Apuleius, Boethius, Vitruvius, Celsus, Quintilian, Aulus Gellius, Ammianus, etc.)
- **6 Baroque German** (60% model collapse rate on 17th-century German — see §6.4)
- Only conditions A (Direct) and D (Pipeline + Fact-check) were run, based on Phase 1 findings that B and C are dominated by A and D respectively.

### 6.2 Blind Evaluation Protocol

To eliminate judge bias, a **blinded evaluation** was conducted:
1. 30 passages randomly sampled (stratified: 15 Chinese + 15 Latin)
2. Each passage's A and D translations randomly assigned labels X and Y
3. Judge (Claude Opus 4.6) scored X and Y on 4 dimensions (1-10) **without knowing which was A or D**
4. Secret key revealed only after all 30 scores were finalized

### 6.3 Results

**Win rate:**

| | D (Pipeline+FC) | A (Direct) | Tie |
|---|---|---|---|
| **Count** | **22** | 3 | 5 |
| **Percentage** | **73%** | 10% | 17% |

**Mean scores:**

| | A (Direct) | D (Pipeline+FC) | Delta |
|---|---|---|---|
| **Overall** | 7.18 | **7.69** | **+0.51** |
| Classical Chinese | 7.15 | **7.77** | **+0.62** |
| Latin | 7.22 | **7.62** | **+0.40** |

**Per-dimension breakdown:**

| Dimension | A | D | Delta | Interpretation |
|---|---|---|---|---|
| **Accuracy** | 6.97 | **7.70** | **+0.73** | Fewer misreadings of grammar and vocabulary |
| **Completeness** | 7.83 | 7.90 | +0.07 | Both conditions produce complete translations |
| **Register** | 6.97 | **7.73** | **+0.77** | More scholarly terminology, proper noun handling |
| **Fluency** | 6.97 | 7.43 | +0.47 | Moderate improvement in naturalness |

The largest gains are in **Accuracy** and **Register** — exactly the two dimensions that structured annotation is designed to improve. Completeness shows no difference (both models produce complete translations), and Fluency improves moderately.

### 6.4 What D Does Better: Three Patterns

**Pattern 1: Technical terminology with inline glosses**

D embeds original terms in parentheses, transforming a generic translation into a scholarly tool:

> **A:** "managing affairs through non-action and teaching through silence"
> **D:** "engaging in non-action (無為之事, *wu wei zhi shi*), and implementing wordless instruction (不言之教, *bu yan zhi jiao*)"

This pattern appears in ~21% of D translations and accounts for the Register improvement.

**Pattern 2: Proper noun disambiguation**

> **A:** "Caesar was considered great… Cato was renowned"
> **D:** "**Julius Caesar** was regarded as great… **Cato the Younger** through integrity of life"

The annotation stage forces the model to identify who is being discussed, preventing ambiguity.

**Pattern 3: Medical/technical precision**

The most dramatic D victory: Passage #11 (難經). A translates 動脈 as "arteries" (a modern anatomical term, completely wrong in the context of pulse diagnosis). D correctly renders it as "pulses" — the annotation stage caught that 動脈 in classical medical texts means "pulsating vessels at the pulse-taking position," not anatomical arteries.

### 6.5 What D Does Worse: The 10%

D lost on 3 out of 30 passages. Common pattern: **when the source text is semantically transparent and requires no contextual knowledge**, D's extra annotations add noise without benefit.

- Apuleius's Isis initiation (#2): vivid, concrete imagery that translates directly
- Cicero's Somnium Scipionis (#4): well-known cosmological description, model's pre-training sufficient
- Zhuangzi's 在宥 (#28): D over-interpreted a passage whose power lies in its ambiguity

### 6.6 Baroque German: Model Collapse

9 out of 15 baroque German passages (60%) produced degenerate "Identity" token repetition in **both** A and D conditions. This is not a pipeline failure but a **model-level failure**: the 70B model's tokenizer fragments 17th-century German compound neologisms (e.g., *Kummerdisteln*, *schwartzgewölckter*) into meaningless subword sequences, causing generation collapse. Pipeline cannot fix a tokenizer-level problem.

## 7. Language-Specific Findings

| Text type | Best strategy | Win rate | Why |
|-----------|--------------|----------|-----|
| Classical Chinese | **D (Pipeline + FC)** | **80%** (12/15 in blind eval) | Polysemous characters, proper nouns, technical terminology all benefit from structured annotation |
| Latin | **D (Pipeline + FC)** | **67%** (10/15 in blind eval) | Proper noun disambiguation, philosophical register; model's Latin is stronger so baseline is higher |
| Baroque German | Inconclusive | — | 60% model collapse; insufficient valid data |

## 8. Core Argument

> **Structured annotation is a force multiplier — and force multipliers amplify errors too.**

Three levels of insight:

1. **Commentary structure works** — not because "more thinking = better" (CoT is actually worst), but because **structured decomposition** breaks a hard problem into sub-tasks the model can handle
2. **Error propagation is the intrinsic risk of pipelines** — each stage can inject errors that subsequent stages inherit and reinforce. This is isomorphic to the "authority bias" in human scholarly commentary traditions (cf. the millennium-long acceptance of the forged Old Text Documents)
3. **Fact-checking is what makes the pipeline usable** — one extra API call (~20s) reduces catastrophic failure rate to zero and compresses the bimodal score distribution back to unimodal

The experiment trajectory itself tells the story:

| Phase | Condition | Avg Score | Failure mode |
|-------|-----------|-----------|-------------|
| 1 | A (Direct) | 7.38 | Stable but mediocre |
| 1 | B (CoT) | 7.02 | Unstable; analysis ≠ improvement |
| 1 | C (Pipeline) | 7.18 | **Bimodal**: great or terrible |
| 2 | D (Pipeline + FC) | **7.69** | Stable and superior |

## 9. Discussion

### What this means for LLM-assisted scholarship

The commentary pipeline is not a silver bullet. It is a **conditional improvement** that requires:
1. Source metadata injected into the pipeline (not just raw text)
2. A fact-check stage that catches annotation errors before they propagate
3. Awareness that for well-represented text types, the pipeline adds cost without benefit

The 4× API cost of Pipeline+FC (4 rounds vs 1) is justified when:
- The text contains archaic orthography or rare vocabulary
- Proper nouns need identification for the target audience
- Technical terminology (medical, legal, philosophical) needs disambiguation
- The scholarly register matters (academic publications, teaching materials)

It is **not** justified when:
- The source text is semantically transparent
- The model's pre-training covers the text type well
- Speed matters more than scholarly precision

### The broader lesson

This mirrors a pattern across LLM applications: **structured prompting improves average quality but increases variance**. Without a variance-reduction mechanism (here: fact-checking), the pipeline is a gamble. With it, the pipeline becomes a reliable upgrade.

The ancient commentary tradition learned this lesson over millennia: *annotation requires annotation* (注疏之學，疏亦須疏). Our experiment suggests that LLM pipelines face the same constraint. The fact-check stage is the digital equivalent of the 疏 — a commentary on the commentary, ensuring that each layer of interpretation is grounded before the next begins.

### Limitations

1. **Single judge**: All evaluations by one model (Claude Opus). Inter-rater reliability not tested.
2. **No human expert evaluation**: A classicist or sinologist might score differently, especially on Register.
3. **Single translation model**: Results specific to DeepSeek-R1-70B; larger or specialized models may show different patterns.
4. **Baroque German undersampled**: Model collapse prevents meaningful analysis of German texts.
5. **Fact-check uses the same model**: The fact-checker is DeepSeek-R1-70B itself — it can only catch errors it "knows" are wrong. A stronger fact-checker (e.g., Claude) might catch more.
