"""Prompt builders for three experimental conditions."""


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
    """Condition C: structured pipeline, Round 1 — word selection + annotation."""
    lang_name = {
        "classical-chinese": "Classical Chinese",
        "baroque-german": "Baroque German (17th century)",
        "latin": "Latin",
    }[passage["language"]]
    audience = passage.get("audience", "Graduate students in classical languages")
    genre = passage.get("genre", "classical")

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


def build_pipeline_factcheck(passage: dict, round1_response: str) -> list[dict]:
    """Fact-check round: verify annotations against source metadata and text."""
    lang_name = {
        "classical-chinese": "Classical Chinese",
        "baroque-german": "Baroque German (17th century)",
        "latin": "Latin",
    }[passage["language"]]
    source = passage.get("source", "")

    return [
        {"role": "system", "content": (
            "You are a meticulous philological fact-checker. "
            "Your job is to catch errors in annotations before they propagate."
        )},
        {"role": "user", "content": (
            f"A previous annotator produced the following annotations for a {lang_name} text.\n\n"
            f"=== Source metadata ===\n"
            f"Attribution: {source}\n\n"
            f"=== Original text ===\n"
            f"{passage['text']}\n\n"
            f"=== Annotations to verify ===\n"
            f"{round1_response}\n\n"
            f"Check each annotation for:\n"
            f"1. **Proper nouns**: Do person/place names match the source attribution? "
            f"Is the author correctly identified?\n"
            f"2. **Lexical accuracy**: For each word, does the given meaning match "
            f"its actual meaning in this grammatical context? Check prefixes, "
            f"case endings, verb forms carefully.\n"
            f"3. **Negation/polarity**: Are negative constructions (privative prefixes, "
            f"negative particles, 'ex-/in-/un-' forms) translated with the correct polarity?\n"
            f"4. **Internal consistency**: Do the annotations contradict each other?\n\n"
            f"Output the CORRECTED annotations as a JSON array in the same format. "
            f"If an annotation is correct, keep it unchanged. "
            f"If wrong, fix it and add a 'correction_note' field explaining what was wrong.\n"
            f"If all annotations are correct, output them unchanged."
        )},
    ]


def build_pipeline_round2(passage: dict, round1_response: str) -> list[dict]:
    """Round 2: commentary generation given round 1 annotations."""
    lang_name = {
        "classical-chinese": "Classical Chinese",
        "baroque-german": "Baroque German (17th century)",
        "latin": "Latin",
    }[passage["language"]]

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
