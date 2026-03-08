const SECTIONS_1_3 = [
  {
    id: 1,
    title: "Pulse Diagnosis of Palpitation",
    lines: [
      { zh: "脈證十二條、方五首。", indent: false },
      { zh: "寸口脈動而弱，動即為驚，弱則為悸。", indent: false },
    ],
    en: [
      { text: "Twelve items on pulse signs and symptoms; five formulas.", indent: false },
      { text: "At the cunkou position, if the pulse is stirring and weak: stirring indicates fright, and weakness indicates palpitation.", indent: false },
    ],
    words: [
      { form: "脈", pinyin: "mài", pos: "noun", cls: "w-medical", info: "The pulse. In TCM, pulse diagnosis (脈診 màizhěn) is one of the four diagnostic methods (四診 sìzhěn). The physician feels the radial artery to assess the state of qi, blood, yin, and yang throughout the body.", gloss: "pulse; vessel" },
      { form: "證", pinyin: "zhèng", pos: "noun", cls: "w-medical", info: "Signs and symptoms; a pattern of disease. Distinct from 病 (bìng, disease entity). A 證 is the TCM diagnostic conclusion based on the totality of symptoms, pulse, and signs — it guides treatment.", gloss: "pattern; signs and symptoms" },
      { form: "寸", pinyin: "cùn", pos: "noun", cls: "w-medical", info: "The 'inch' position — the most distal of three pulse positions on the radial artery. The three positions are 寸 (cùn, inch), 關 (guān, bar), and 尺 (chǐ, cubit). The left 寸 position corresponds to the Heart.", gloss: "inch (pulse position)" },
      { form: "口", pinyin: "kǒu", pos: "noun", cls: "w-noun", info: "Literally 'mouth' or 'opening.' 寸口 (cùnkǒu) refers to the pulse-taking site at the radial artery on the wrist — the standard location for pulse diagnosis since the Nanjing (Classic of Difficulties).", gloss: "mouth; opening" },
      { form: "動", pinyin: "dòng", pos: "adj", cls: "w-medical", info: "The 'stirring' pulse (動脈 dòngmài): a pulse quality that feels like a bean bouncing under the finger — short, slippery, forceful, and rapid, without a clear head or tail. It indicates internal agitation, often from fright or shock.", gloss: "stirring; agitated (pulse quality)" },
      { form: "弱", pinyin: "ruò", pos: "adj", cls: "w-medical", info: "The 'weak' pulse (弱脈 ruòmài): a pulse that is deep, thin, soft, and lacks force. It indicates insufficiency of qi and blood — the body lacks the resources to maintain a strong pulse.", gloss: "weak (pulse quality)" },
      { form: "驚", pinyin: "jīng", pos: "noun", cls: "w-medical", info: "Fright — a sudden emotional shock caused by an external stimulus (e.g., a loud noise, unexpected event). Unlike 悸, which arises internally, 驚 has an identifiable external trigger. In TCM, fright scatters qi and disturbs the Heart spirit (心神 xīnshén).", gloss: "fright; alarm" },
      { form: "悸", pinyin: "jì", pos: "noun", cls: "w-medical", info: "Palpitation — an awareness of one's own heartbeat, often with a sense of unease or anxiety. Unlike 驚 (triggered externally), 悸 arises from internal deficiency: insufficient qi and blood fail to nourish the Heart, leaving the spirit (神 shén) unsettled.", gloss: "palpitation" },
      { form: "條", pinyin: "tiáo", pos: "noun", cls: "w-noun", info: "A classifier meaning 'item' or 'clause.' 十二條 = twelve items/entries. Used for counting discrete textual entries.", gloss: "item; clause" },
      { form: "首", pinyin: "shǒu", pos: "noun", cls: "w-noun", info: "A classifier for poems, songs, or in this context, medical formulas. 方五首 = five formulas.", gloss: "classifier for formulas" },
    ],
    grammar: `<h4>Key Grammar Patterns</h4>
<p><b>1. 脈動而弱 — Coordinate Adjectives with 而 (ér)</b><br>
The conjunction 而 connects two pulse qualities: 動 (stirring) 而 弱 (weak). Both qualities are present simultaneously. In classical Chinese medical texts, 而 between adjectives means "and" or "and also," describing a compound pulse image.</p>

<p><b>2. 動即為驚，弱則為悸 — Parallel Conditional Structure</b><br>
即 (jí, "then/indicates") and 則 (zé, "then/indicates") are near-synonyms here, both introducing a diagnostic conclusion. The parallel structure — X即為A，Y則為B — is a classic formula for differential diagnosis: "if X, it indicates A; if Y, it indicates B." This rhetorical pattern pervades the Jinkui Yaolue.</p>

<p><b>3. 脈證十二條、方五首 — Chapter Heading Convention</b><br>
This terse opening format — listing the number of 脈證 entries and 方 (formulas) — is a standard chapter header in the Jinkui Yaolue. No verb is needed; the structure is purely nominal: "pulse-signs twelve items, formulas five heads."</p>`,

    medicine: `<h4>Medical Analysis</h4>
<p>This deceptively simple opening establishes the <b>fundamental distinction</b> between two types of cardiac symptoms that are often confused:</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:10px 0">
<div style="padding:10px;background:#f5f0e6;border-radius:6px;border-left:3px solid #8B2500">
<b style="color:#8B2500">驚 Jīng (Fright)</b><br>
<b>Cause:</b> External stimulus<br>
<b>Mechanism:</b> Sudden shock scatters qi<br>
<b>Pulse:</b> 動 (stirring) — agitated, forceful<br>
<b>Nature:</b> Excess pattern (邪氣有餘)
</div>
<div style="padding:10px;background:#f5f0e6;border-radius:6px;border-left:3px solid #006400">
<b style="color:#006400">悸 Jì (Palpitation)</b><br>
<b>Cause:</b> Internal deficiency<br>
<b>Mechanism:</b> Qi/blood cannot nourish Heart<br>
<b>Pulse:</b> 弱 (weak) — deep, thin, soft<br>
<b>Nature:</b> Deficiency pattern (正氣不足)
</div>
</div>

<p>The <b>Heart</b> (心 xīn) in TCM houses the spirit (神 shén) — consciousness, cognition, and emotional stability. When qi and blood are abundant, the spirit is settled (神安 shén ān). When they are deficient, the spirit becomes restless, manifesting as palpitation.</p>

<p>The <b>stirring pulse</b> (動脈) is unique among the 28 pulse types: it feels like a bean vibrating under the finger, without the smooth rise-and-fall of a normal pulse. Zhongjing associates this pulse with internal turbulence — qi that has been "shaken" by an external shock.</p>

<p>Clinical significance: this passage teaches that treatment for cardiac symptoms must begin with differential diagnosis — <b>calming the spirit and settling fright</b> (鎮驚安神 zhènjīng ānshén) for 驚, versus <b>tonifying qi and nourishing blood</b> (補氣養血 bǔqì yǎngxuè) for 悸.</p>`,

    commentary: `<h4>Traditional Commentaries</h4>
<p><b>尤在涇《金匱要略心典》(You Zaijing, Qing dynasty):</b></p>
<blockquote>「動為陽，陽則動而不寧；弱為陰，陰則弱而不振。驚生於外，故脈動；悸生於內，故脈弱。」</blockquote>
<p>"The stirring [pulse] belongs to yang — yang then is agitated and restless. The weak [pulse] belongs to yin — yin then is weak and lacks vigor. Fright arises from outside, hence the pulse is stirring. Palpitation arises from within, hence the pulse is weak."</p>
<p>You Zaijing's analysis maps the distinction onto the fundamental yin-yang framework: 驚 is a yang (active, external) phenomenon with a correspondingly yang (agitated) pulse; 悸 is a yin (passive, internal) phenomenon with a correspondingly yin (weak) pulse. This elegant parallelism is characteristic of classical commentary.</p>

<p><b>徐彬《金匱要略論注》(Xu Bin, Qing dynasty):</b></p>
<blockquote>「驚者，心卒動而不寧也，其因在外；悸者，心跳動而怔忡也，其因在內。」</blockquote>
<p>"Fright is when the heart suddenly stirs and is not at peace — its cause lies outside. Palpitation is when the heart throbs and flutters — its cause lies within."</p>`,

    narrative: null,
    formula: null,

    clinical: `<h4>Modern Clinical Relevance</h4>
<p>In modern TCM practice, this passage remains foundational for the differential diagnosis of cardiac symptoms. The 驚/悸 distinction maps approximately onto:</p>
<ul>
<li><b>驚 (fright-type palpitation):</b> anxiety-related cardiac symptoms, panic attacks, PTSD-related cardiac symptoms — conditions with identifiable external triggers</li>
<li><b>悸 (deficiency-type palpitation):</b> functional palpitation from anemia, post-illness debility, chronic fatigue — conditions arising from internal insufficiency</li>
</ul>
<p>In biomedical terms, the "stirring pulse" (動脈) may correspond to a bounding or hyperdynamic pulse seen in anxiety states, while the "weak pulse" (弱脈) corresponds to a thready, weak pulse seen in hypovolemia or cardiac insufficiency.</p>
<p>Modern TCM physicians still use this framework: for 驚-type symptoms, formulas that <b>settle the spirit with heavy substances</b> (重鎮安神 zhòngzhèn ānshén) such as 龍骨 (dragon bone) and 牡蠣 (oyster shell) are preferred. For 悸-type symptoms, formulas that <b>tonify qi and blood</b> such as 歸脾湯 (Guipi Tang) are used.</p>`,
  },
  {
    id: 2,
    title: "Epistaxis: Pulse Signs and Prohibitions",
    lines: [
      { zh: "師曰：夫脈浮，目睛暈黃，衄未止；暈黃去，目睛急了，知衄今止。", indent: false },
      { zh: "又曰：從春至夏衄者，太陽；從秋至冬衄者，陽明。", indent: false },
      { zh: "衄家不可汗，汗出必額上陷，脈緊急，直視不能眴，不得眠。", indent: false },
      { zh: "病人面無色，無寒熱。脈沉弦者衄；浮弱，手按之絕者，下血；煩欬者，必吐血。", indent: false },
      { zh: "夫吐血，欬逆上氣，其脈數而有熱，不得臥者死。", indent: false },
      { zh: "夫酒客欬者，必致吐血，此因極飲過度所致也。", indent: false },
    ],
    en: [
      { text: "The Master said: When the pulse is floating and the eyes show a yellowish haze, the epistaxis has not yet stopped. When the yellowish haze disappears and the eyes become clear and alert, one knows the epistaxis has now stopped.", indent: false },
      { text: "He also said: Epistaxis from spring to summer pertains to Taiyang; from autumn to winter, it pertains to Yangming.", indent: false },
      { text: "Those prone to epistaxis must not be made to sweat. If sweating is induced, the forehead will certainly become sunken, the pulse tight and urgent, the eyes will stare straight ahead unable to blink, and the patient will be unable to sleep.", indent: false },
      { text: "If a patient has no color in the face and no alternating cold and heat: a deep, wiry pulse indicates epistaxis; a floating, weak pulse that disappears on pressure indicates bleeding from below; vexation with coughing means there will certainly be hematemesis.", indent: false },
      { text: "In hematemesis with coughing, counterflow qi rising, a rapid pulse with heat, and inability to lie down — this is a death sign.", indent: false },
      { text: "Those who drink excessively and then cough will inevitably vomit blood — this is caused by extreme overindulgence.", indent: false },
    ],
    words: [
      { form: "師", pinyin: "shī", pos: "noun", cls: "w-noun", info: "The Master — referring to Zhang Zhongjing (張仲景, c. 150–219 CE), author of the Shanghan Lun and Jinkui Yaolue. 師曰 ('the Master said') introduces authoritative diagnostic teachings.", gloss: "master; teacher" },
      { form: "衄", pinyin: "nǜ", pos: "noun", cls: "w-medical", info: "Epistaxis — nosebleed. In TCM, 衄 indicates blood (血 xuè) breaking out of the vessels due to heat forcing blood to move recklessly (血熱妄行 xuèrè wàngxíng) or qi failing to contain blood (氣不攝血 qì bù shè xuè).", gloss: "epistaxis; nosebleed" },
      { form: "暈", pinyin: "yùn", pos: "noun", cls: "w-medical", info: "A haze or halo — here describing a yellowish discoloration around the pupils (目睛暈黃 mùjīng yùnhuáng). This eye sign indicates that blood-heat is still active and bleeding has not resolved.", gloss: "haze; halo; dizziness" },
      { form: "太陽", pinyin: "tàiyáng", pos: "medical", cls: "w-medical", info: "Taiyang — the 'Greater Yang' channel. One of the six channels (六經 liùjīng) in Shanghan Lun theory. Taiyang governs the exterior (表 biǎo) and is associated with spring/summer (yang seasons). Taiyang epistaxis implies exterior heat forcing blood upward.", gloss: "Taiyang (Greater Yang channel)" },
      { form: "陽明", pinyin: "yángmíng", pos: "medical", cls: "w-medical", info: "Yangming — the 'Yang Brightness' channel. Associated with the Stomach and Large Intestine, it governs the interior (裏 lǐ). Yangming epistaxis in autumn/winter implies interior dryness-heat damaging the blood vessels.", gloss: "Yangming (Yang Brightness channel)" },
      { form: "汗", pinyin: "hàn", pos: "verb", cls: "w-verb", info: "To induce sweating — a therapeutic method (發汗 fāhàn). Here used as a verb: 不可汗 = 'must not be made to sweat.' Sweating expels fluids and is contraindicated in patients who are already losing blood.", gloss: "to sweat; to induce sweating" },
      { form: "眴", pinyin: "shùn", pos: "verb", cls: "w-verb", info: "To blink. 不能眴 = unable to blink. This is a severe sign: the eyes stare fixedly, indicating that body fluids (津液 jīnyè) are severely depleted — both blood and fluids have been lost.", gloss: "to blink" },
      { form: "沉", pinyin: "chén", pos: "adj", cls: "w-medical", info: "The 'deep' or 'sunken' pulse (沉脈 chénmài): felt only with heavy pressure. Indicates the pathology is in the interior (裏 lǐ), or that yang qi is insufficient to push the pulse to the surface.", gloss: "deep; sunken (pulse quality)" },
      { form: "弦", pinyin: "xián", pos: "adj", cls: "w-medical", info: "The 'wiry' or 'taut' pulse (弦脈 xiánmài): feels like pressing on a guitar string — taut, straight, and long. Indicates Liver pathology, pain, or phlegm-fluid retention.", gloss: "wiry; taut (pulse quality)" },
      { form: "數", pinyin: "shuò", pos: "adj", cls: "w-medical", info: "The 'rapid' pulse (數脈 shuòmài): more than five beats per respiration (>90 BPM). Indicates heat. Note the special medical pronunciation: shuò, not shù.", gloss: "rapid (pulse quality)" },
      { form: "欬", pinyin: "ké", pos: "verb", cls: "w-medical", info: "To cough. Variant character for 咳. In this context, coughing forces qi upward (氣逆 qìnì), which can carry blood upward with it, resulting in hematemesis.", gloss: "to cough" },
      { form: "酒客", pinyin: "jiǔkè", pos: "noun", cls: "w-noun", info: "Literally 'wine guest' — a person who habitually drinks to excess. Chronic alcohol consumption generates damp-heat (濕熱 shīrè) in the Stomach and Liver, which can damage blood vessels.", gloss: "heavy drinker" },
    ],
    grammar: `<h4>Key Grammar Patterns</h4>
<p><b>1. 師曰…又曰… — Master's Discourse Structure</b><br>
師曰 (shī yuē, "the Master said") introduces an authoritative teaching. 又曰 (yòu yuē, "he also said") introduces a supplementary point. This structure — common in the Jinkui Yaolue — often combines related but distinct observations on the same topic.</p>

<p><b>2. 衄家不可汗 — The 家 (jiā) Classifier</b><br>
家 here does not mean "family" but serves as a classifier for a person with a chronic condition: 衄家 = "a person prone to epistaxis," literally "an epistaxis-person." This usage appears throughout Zhongjing's works: 喘家 (asthma-person), 瘡家 (sores-person), 汗家 (sweating-person). It implies a constitutional predisposition.</p>

<p><b>3. 脈沉弦者衄；浮弱，手按之絕者，下血；煩欬者，必吐血 — Triple Differential</b><br>
Three diagnostic scenarios are compressed into a single compound sentence, each ending with a condition: 者…衄 / 者…下血 / 者…吐血. The particle 者 (zhě) functions as "one who has [this pulse]" — it nominalizes the preceding clause. This compressed syntax demands careful parsing.</p>

<p><b>4. 不得臥者死 — Death Sign Formula</b><br>
The construction X者死 ("one who has X will die") is a formulaic death-sign declaration in classical Chinese medicine. 不得臥 = "unable to lie down." The bluntness is characteristic of Zhongjing's prognostic statements.</p>

<p><b>5. 此因極飲過度所致也 — Causal Explanation</b><br>
此 (this) + 因 (because of) + X + 所致也 (is what caused it). The 所…也 construction is a standard classical Chinese explanatory formula, here wrapped around the cause 極飲過度 (extreme overindulgence in drink).</p>`,

    medicine: `<h4>Medical Analysis</h4>
<p><b>Eye Signs in Epistaxis (目睛暈黃)</b><br>
A yellowish haze around the eyes indicates ongoing blood-heat: heat steams upward and manifests in the eyes. When the haze clears (暈黃去) and the eyes regain clarity (目睛急了), the heat has resolved and bleeding has stopped. This is an early example of using <b>eye diagnosis</b> as a real-time prognostic indicator.</p>

<p><b>Seasonal Channel Attribution</b><br>
Spring–summer epistaxis → Taiyang: during warm yang seasons, exterior pathogenic heat enters through the Taiyang (Bladder) channel, which runs over the head and connects to the nose. The mechanism is exterior heat forcing blood outward.<br>
Autumn–winter epistaxis → Yangming: during cool yin seasons, interior dryness accumulates in the Yangming (Stomach) channel, which also passes through the nose. The mechanism is interior dryness-heat damaging vessels.</p>

<p><b>Why Sweating Is Forbidden (衄家不可汗)</b><br>
Blood and sweat share the same source (血汗同源 xuè hàn tóngyuán): both derive from body fluids (津液 jīnyè). A patient already losing blood through epistaxis cannot afford further fluid loss through induced sweating. The catastrophic consequences described — sunken forehead, fixed staring, insomnia — all indicate severe fluid and blood depletion (亡津液 wáng jīnyè).</p>

<p><b>Three-Way Pulse Differential</b></p>
<ul>
<li><b>沉弦 (deep, wiry)</b> → epistaxis: pathology is interior, Liver channel heat forces blood upward through the nose</li>
<li><b>浮弱，手按之絕 (floating, weak, disappears on pressure)</b> → rectal bleeding (下血): qi is too deficient to contain blood in the lower body</li>
<li><b>煩欬 (vexation + coughing)</b> → hematemesis (吐血): Lung-Stomach heat with upward counterflow forces blood out through the mouth</li>
</ul>

<p><b>Death Sign</b><br>
Hematemesis + coughing + counterflow qi + rapid pulse + heat + inability to lie down = a fatal pattern. This represents complete exhaustion: yin (blood) has been depleted, yang (heat) floats unanchored, and qi rebels upward uncontrollably. The patient cannot lie down because counterflow qi constantly surges upward.</p>`,

    commentary: `<h4>Traditional Commentaries</h4>
<p><b>尤在涇《金匱要略心典》:</b></p>
<blockquote>「衄家之血，已從上出，若更發其汗，則陽氣外張而津液內竭，故額上陷。額為太陽之位，太陽之氣不足則陷也。」</blockquote>
<p>"In a person prone to epistaxis, blood has already left from above. If sweating is further induced, yang qi expands outward while body fluids are internally exhausted — hence the forehead becomes sunken. The forehead is the region of Taiyang; when Taiyang qi is insufficient, it collapses."</p>
<p>You Zaijing explains the dramatic physical sign of a sunken forehead as the collapse of Taiyang qi in its own territory — a vivid anatomical-cosmological reading.</p>

<p><b>尤在涇 on the death sign:</b></p>
<blockquote>「吐血而欬逆上氣者，血隨氣升也。脈數有熱，不得臥者，氣逆不降也。血脫而氣不歸，陰陽離決，故死。」</blockquote>
<p>"When one vomits blood with coughing and counterflow qi rising, blood follows qi upward. A rapid pulse with heat and inability to lie down indicate that qi rebels and does not descend. Blood is lost and qi does not return — yin and yang separate and diverge — therefore death."</p>
<p>The key phrase is 陰陽離決 (yīnyáng líjué): yin (blood) and yang (qi) have separated from each other — the most fundamental condition for death in TCM cosmology.</p>

<p><b>徐彬《金匱要略論注》on seasonal attribution:</b></p>
<blockquote>「春夏陽氣在表，太陽主表，故衄屬太陽。秋冬陽氣在裏，陽明主裏，故衄屬陽明。」</blockquote>
<p>"In spring and summer, yang qi is at the exterior; Taiyang governs the exterior, hence epistaxis pertains to Taiyang. In autumn and winter, yang qi is in the interior; Yangming governs the interior, hence epistaxis pertains to Yangming."</p>`,

    narrative: null,
    formula: null,

    clinical: `<h4>Modern Clinical Relevance</h4>
<p><b>Eye diagnosis:</b> The observation of yellowish discoloration around the eyes during active nosebleeds has parallels in modern medicine — subconjunctival changes and periorbital signs can indicate ongoing vascular compromise. While not a standard modern diagnostic criterion, experienced TCM practitioners still use eye signs in bleeding disorders.</p>

<p><b>Contraindication of diaphoresis:</b> This principle remains central to modern TCM practice. Patients presenting with bleeding disorders are never treated with strong exterior-releasing (解表 jiěbiǎo) formulas. In biomedical terms, this aligns with the understanding that fluid loss (from bleeding) should not be compounded by further fluid loss (from sweating), as this can lead to hypovolemic shock.</p>

<p><b>Three-way differential:</b> Modern TCM still uses this pulse-based differential framework:
<ul>
<li>Deep, wiry pulse + nosebleed → Liver fire pattern → treat with 龍膽瀉肝湯 (Longdan Xiegan Tang)</li>
<li>Floating, weak pulse + rectal bleeding → Spleen qi deficiency → treat with 歸脾湯 (Guipi Tang) or 補中益氣湯 (Buzhong Yiqi Tang)</li>
<li>Vexation + cough + hematemesis → Lung-Stomach heat → treat with 瀉心湯 (Xiexin Tang)</li>
</ul></p>

<p><b>Alcohol-related hematemesis:</b> This passage is a remarkably early clinical observation linking chronic alcohol consumption to upper GI bleeding — now understood as resulting from alcoholic gastritis, esophageal varices, or Mallory-Weiss tears.</p>`,
  },
  {
    id: 3,
    title: "Blood Loss and Blood Stasis Diagnosis",
    lines: [
      { zh: "寸口脈弦而大，弦則為減，大則為芤，減則為寒，芤則為虛，寒虛相擊，此名曰革，婦人則半產漏下，男子則亡血。", indent: false },
      { zh: "亡血不可發其表，汗出則寒慄而振。", indent: false },
      { zh: "病人胸滿，唇痿舌青，口燥，但欲漱水，不欲嚥，無寒熱，脈微大來遲，腹不滿，其人言我滿，為有瘀血。", indent: false },
      { zh: "病者如熱狀，煩滿，口乾燥而渴，其脈反無熱，此為陰伏，是瘀血也，當下之。", indent: false },
    ],
    en: [
      { text: "At the cunkou, if the pulse is wiry and large: wiry indicates diminishment, large indicates hollowness. Diminishment means cold; hollowness means vacuity. When cold and vacuity strike against each other, this is called the 'leather' pulse. In women it indicates miscarriage and uterine bleeding; in men it indicates blood loss.", indent: false },
      { text: "After blood loss, one must not release the exterior. If sweating is induced, there will be shivering and trembling with cold.", indent: false },
      { text: "If a patient has chest fullness, withered lips, a blue-green tongue, dry mouth, desires only to rinse with water but does not wish to swallow, has no cold or heat, the pulse is slightly large and arrives slowly, the abdomen is not actually full but the patient says 'I feel full' — this indicates blood stasis.", indent: false },
      { text: "If a patient appears feverish with vexation and fullness, dry mouth and thirst, yet the pulse paradoxically shows no heat — this is hidden yin; it is blood stasis, and one should purge downward.", indent: false },
    ],
    words: [
      { form: "芤", pinyin: "kōu", pos: "adj", cls: "w-medical", info: "The 'hollow' or 'scallion-stalk' pulse (芤脈 kōumài): floating, large, and soft, but hollow in the middle when pressed — like pressing on a scallion stalk. It specifically indicates significant blood loss, where the vessels have lost their contents but the vessel walls (yang) remain.", gloss: "hollow; scallion-stalk (pulse quality)" },
      { form: "革", pinyin: "gé", pos: "adj", cls: "w-medical", info: "The 'leather' or 'drum-skin' pulse (革脈 gémài): a compound pulse combining 弦 (wiry) and 芤 (hollow) — taut on the surface like a drum skin, but empty inside. It indicates severe depletion of both blood and essence. Zhang Zhongjing derives it logically: 弦+大 → 減+芤 → 寒+虛 → 革.", gloss: "leather; drum-skin (pulse quality)" },
      { form: "半產", pinyin: "bànchǎn", pos: "noun", cls: "w-medical", info: "Miscarriage — literally 'half-birth.' The fetus is lost before full term. In TCM, this occurs when qi and blood are too depleted to nourish and secure the fetus.", gloss: "miscarriage" },
      { form: "漏下", pinyin: "lòuxià", pos: "noun", cls: "w-medical", info: "Uterine bleeding — literally 'leaking downward.' Persistent, abnormal vaginal bleeding outside of normal menstruation. Indicates the Spleen failing to contain blood (脾不統血 pí bù tǒng xuè) or the Chong and Ren vessels being insecure.", gloss: "uterine bleeding; metrorrhagia" },
      { form: "亡血", pinyin: "wángxuè", pos: "noun", cls: "w-medical", info: "Blood loss — 亡 (wáng) means 'to lose' or 'to be gone.' 亡血 is a severe state where significant blood has been lost, leaving the vessels depleted. The term carries more gravity than simple 出血 (bleeding).", gloss: "blood loss; blood depletion" },
      { form: "瘀血", pinyin: "yūxuè", pos: "medical", cls: "w-medical", info: "Blood stasis — blood that has stopped moving and stagnated within the body. One of the most important pathological concepts in TCM. Stagnant blood cannot nourish tissues and obstructs the flow of fresh blood and qi. It produces a characteristic set of signs: fixed pain, dark complexion, blue-purple tongue.", gloss: "blood stasis; static blood" },
      { form: "唇痿", pinyin: "chúnwěi", pos: "noun", cls: "w-medical", info: "Withered lips — 痿 (wěi) means atrophy or withering. When blood stagnates internally, fresh blood cannot reach the lips to nourish them. Dry, withered lips indicate either blood deficiency or blood stasis.", gloss: "withered/atrophied lips" },
      { form: "舌青", pinyin: "shéqīng", pos: "noun", cls: "w-medical", info: "Blue-green tongue — 青 (qīng) can mean blue, green, or dark. A blue-purple tongue is the hallmark sign of blood stasis: stagnant, deoxygenated blood gives the tongue a dark, livid appearance. This remains a primary diagnostic sign in modern TCM.", gloss: "blue-green/dark tongue" },
      { form: "漱", pinyin: "shù", pos: "verb", cls: "w-verb", info: "To rinse the mouth. The pattern 但欲漱水不欲嚥 (desires only to rinse but not swallow) is a classic blood stasis sign: the mouth feels dry because stagnant blood obstructs fluid distribution, but there is no true fluid deficiency — hence no desire to actually drink.", gloss: "to rinse the mouth" },
      { form: "嚥", pinyin: "yàn", pos: "verb", cls: "w-verb", info: "To swallow. Variant of 咽. In the diagnostic sign 不欲嚥 (does not wish to swallow), the absence of thirst despite dry mouth differentiates blood stasis from true yin deficiency.", gloss: "to swallow" },
      { form: "陰伏", pinyin: "yīnfú", pos: "noun", cls: "w-medical", info: "Hidden yin — a condition where a yin (cold/stasis) pathology lurks internally while producing misleading yang (heat) signs on the surface. The pulse reveals the truth: despite apparent heat signs, the pulse shows no heat, exposing the false-heat/true-cold nature.", gloss: "hidden yin; latent yin pathology" },
      { form: "下", pinyin: "xià", pos: "verb", cls: "w-medical", info: "To purge downward — one of the eight therapeutic methods (八法 bāfǎ). Here 當下之 means 'should treat by purgation.' For blood stasis, this means using herbs like 大黃 (dàhuáng, rhubarb) that break up stasis and move it downward for elimination.", gloss: "to purge; to treat by downward purgation" },
    ],
    grammar: `<h4>Key Grammar Patterns</h4>
<p><b>1. 弦則為減，大則為芤 — Chain of Logical Derivation</b><br>
The repeated 則為 (zé wéi, "then indicates") structure builds a logical chain: 弦→減→寒, 大→芤→虛, 寒+虛→革. This syllogistic progression is Zhang Zhongjing's method of <i>constructing</i> a complex pulse type from simpler components — a remarkable feat of analytical medical reasoning.</p>

<p><b>2. 婦人則…男子則… — Gender-Differentiated Manifestation</b><br>
The parallel 則 structure presents the same underlying pathology (革脈 = severe depletion) manifesting differently by sex: 半產漏下 in women (reproductive bleeding), 亡血 in men (general blood loss). This structure recurs throughout the Jinkui Yaolue.</p>

<p><b>3. 但欲漱水，不欲嚥 — Contrastive 但…不… Construction</b><br>
但 (dàn, "only") + positive action + 不 + contrasting action: "only wishes to rinse, does not wish to swallow." This precise clinical observation — compressed into eight characters — is one of the most famous diagnostic signs in all of Chinese medicine.</p>

<p><b>4. 腹不滿，其人言我滿 — Subjective vs. Objective Discrepancy</b><br>
The narrator's observation (腹不滿, "the abdomen is not full") contradicts the patient's self-report (其人言我滿, "the person says 'I am full'"). This deliberate juxtaposition of objective and subjective findings is clinically significant: the feeling of fullness without actual distension points to blood stasis blocking qi circulation.</p>

<p><b>5. 其脈反無熱 — The Diagnostic 反 (fǎn)</b><br>
反 means "contrary to expectation" or "paradoxically." The patient appears hot (如熱狀), yet the pulse 反 shows no heat. This word signals a diagnostic trap: surface signs mislead, and only the pulse reveals the truth. 反 is a red flag in classical medical texts.</p>`,

    medicine: `<h4>Medical Analysis</h4>
<p><b>The Leather Pulse (革脈) — Constructed by Logic</b><br>
Zhang Zhongjing builds the 革脈 concept through deductive reasoning:</p>
<div style="padding:10px;background:#f5f0e6;border-radius:6px;border-left:3px solid var(--accent);margin:8px 0">
弦 (wiry) → 減 (diminished) → 寒 (cold)<br>
大 (large) → 芤 (hollow) → 虛 (vacuous)<br>
寒 + 虛 = <b>革</b> (leather)
</div>
<p>The 革脈 feels hard and taut on the surface (like stretched leather or a drum skin) but empty when pressed deeply. Physically: the artery wall is tensed (弦, from cold contracting the vessel), but the vessel contents are depleted (芤, from blood loss). This is the pulse of severe hemorrhage or chronic blood depletion.</p>

<p><b>Blood Stasis (瘀血) — The Classic Signs</b><br>
This passage gives the most concentrated description of blood stasis signs in the Jinkui Yaolue:</p>
<ul>
<li><b>胸滿 (chest fullness)</b> — stasis obstructs qi flow in the chest</li>
<li><b>唇痿 (withered lips)</b> — stasis prevents fresh blood from reaching the extremities</li>
<li><b>舌青 (blue-green tongue)</b> — THE hallmark sign; stagnant blood darkens the tongue</li>
<li><b>口燥但欲漱水不欲嚥 (dry mouth, wants to rinse but not swallow)</b> — fluids exist but stasis prevents their distribution; mouth is dry locally but the body is not truly thirsty</li>
<li><b>腹不滿其人言我滿 (abdomen not full but patient says full)</b> — subjective fullness from qi obstruction, not actual abdominal distension</li>
</ul>

<p><b>False Heat from Blood Stasis</b><br>
The second passage describes a diagnostic trap: 如熱狀 (appears like heat) with 煩滿, dry mouth, and thirst — but 其脈反無熱 (the pulse paradoxically has no heat signs). This is <b>blood stasis masquerading as heat</b>. The mechanism: stagnant blood generates local inflammation-like signs, but since it is not true systemic heat, the pulse does not show a rapid/surging quality. The treatment — 當下之 (purge downward) — uses blood-moving purgatives, not heat-clearing herbs.</p>`,

    commentary: `<h4>Traditional Commentaries</h4>
<p><b>尤在涇《金匱要略心典》on the leather pulse:</b></p>
<blockquote>「弦為寒，大為虛，寒虛之脈，外急而中空，如按鼓皮，故名曰革。婦人則衝任虛寒，不能固攝經血而漏下，或不能養胎而半產；男子則亡血失精。」</blockquote>
<p>"Wiry indicates cold; large indicates vacuity. A cold-vacuity pulse is taut on the outside and hollow in the middle — like pressing on a drum skin, hence the name 'leather.' In women, the Chong and Ren vessels become cold and vacuous, unable to secure menstrual blood (causing uterine bleeding) or unable to nourish the fetus (causing miscarriage). In men, it indicates loss of blood or essence."</p>

<p><b>尤在涇 on the blood stasis signs:</b></p>
<blockquote>「瘀血在內，則氣為血阻而不行，故胸滿、腹滿。血不華色，故唇痿。血凝泣則舌青。瘀血內阻，津液不能上承，故口燥；然非津液之真不足，故但欲漱水而不欲嚥也。」</blockquote>
<p>"When stagnant blood is inside, qi is obstructed by blood and cannot circulate — hence chest fullness and abdominal fullness. Blood fails to bring color to the surface — hence withered lips. Blood congeals and stagnates — hence a blue tongue. Stagnant blood internally obstructs, and body fluids cannot ascend — hence dry mouth. But because body fluids are not truly insufficient, the patient only wants to rinse with water and does not wish to swallow."</p>
<p>This is a masterful commentary: You Zaijing systematically explains each symptom through a single unifying mechanism (blood stasis → qi obstruction → secondary fluid maldistribution).</p>

<p><b>徐彬 on false heat:</b></p>
<blockquote>「瘀血化熱，故如熱狀、煩滿、口乾渴。然血瘀非真熱，故脈反不數不洪，此為陰伏之候。」</blockquote>
<p>"Stagnant blood transforms into heat, hence the appearance of heat, vexation-fullness, and dry mouth with thirst. But blood stasis is not true heat — hence the pulse is paradoxically neither rapid nor surging. This is the sign of latent yin [pathology]."</p>`,

    narrative: null,
    formula: null,

    clinical: `<h4>Modern Clinical Relevance</h4>
<p><b>The leather pulse</b> in modern TCM practice is associated with severe anemia, postpartum hemorrhage, and chronic blood loss conditions. The description of a taut-but-hollow vessel corresponds well to the hemodynamic state of hypovolemia with compensatory vasoconstriction.</p>

<p><b>Blood stasis diagnosis</b> remains one of the most clinically active areas of modern TCM. The signs described here are still taught and used:</p>
<ul>
<li><b>Dark/purple tongue</b> — the single most reliable sign of blood stasis in modern TCM tongue diagnosis</li>
<li><b>Wanting to rinse but not swallow</b> — still used to differentiate blood stasis from yin deficiency (both cause dry mouth, but yin-deficient patients genuinely want to drink)</li>
<li><b>Subjective fullness without objective distension</b> — used to differentiate blood stasis from food stagnation or qi stagnation</li>
</ul>

<p><b>Modern research connections:</b> The concept of 瘀血 (blood stasis) has been extensively studied in modern Chinese medical research. It has been correlated with:</p>
<ul>
<li>Microcirculatory disorders and increased blood viscosity</li>
<li>Elevated fibrinogen and platelet aggregation</li>
<li>Chronic inflammatory states</li>
<li>Disseminated intravascular coagulation (DIC)</li>
</ul>
<p>The "false heat" presentation (如熱狀 with no heat pulse) may correspond to low-grade inflammation from tissue ischemia or necrosis — where local inflammatory mediators produce heat-like symptoms without systemic fever.</p>

<p><b>Treatment principle — 當下之:</b> Modern TCM uses blood-moving and stasis-breaking formulas such as 桃核承氣湯 (Taohe Chengqi Tang) and 下瘀血湯 (Xiayuxue Tang) for blood stasis patterns requiring downward purgation.</p>`,
  },
];
