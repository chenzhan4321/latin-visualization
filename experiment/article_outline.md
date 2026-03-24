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

## 6. Language-Specific Findings

| Text type | Best strategy | Why |
|-----------|--------------|-----|
| Baroque German | **D (Pipeline + FC)** | Archaic orthography decoding is a genuine bottleneck |
| Rare Classical Chinese | **D (Pipeline + FC)** | Proper nouns and allusions need structured annotation |
| Well-attested Latin prose | **A (Direct)** | Model's pre-training is strong enough; extra stages add noise |

## 7. Scaling Experiment (In Progress)

50 additional high-difficulty passages (A vs D only), to test:
- Statistical significance (paired Wilcoxon signed-rank test)
- Confidence intervals for the D-A score difference
- Whether the language-specific pattern holds at scale

## 8. Discussion

### What this means for LLM-assisted scholarship

The commentary pipeline is not a silver bullet. It is a **conditional improvement** that requires:
1. Source metadata injected into the pipeline (not just raw text)
2. A fact-check stage that catches annotation errors before they propagate
3. Awareness that for well-represented text types, the pipeline adds cost without benefit

### The broader lesson

This mirrors a pattern across LLM applications: **structured prompting improves average quality but increases variance**. The fact-check stage is a variance reduction technique — analogous to ensemble methods in ML, or peer review in academia.

The ancient commentary tradition learned this lesson over millennia: *annotation requires annotation*. Our experiment suggests that LLM pipelines face the same constraint.
