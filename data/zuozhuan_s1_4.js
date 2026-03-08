const SECTIONS_1_4 = [
  {
    id: 1,
    title: "Background: The Marriage of Duke Wu",
    lines: [
      { zh: "初，鄭武公娶于申，曰武姜，生莊公及共叔段。", indent: false },
      { zh: "莊公寤生，驚姜氏，故名曰寤生，遂惡之。", indent: false },
      { zh: "愛共叔段，欲立之，亟請於武公，公弗許。", indent: false },
    ],
    en: [
      { text: "At first, Duke Wu of Zheng married a woman from the state of Shen, called Wu Jiang. She gave birth to Duke Zhuang and Gongshu Duan.", indent: false },
      { text: "Duke Zhuang was born with a difficult birth, which startled Lady Jiang. Therefore she named him 'Wusheng' (difficult birth), and from then on detested him.", indent: false },
      { text: "She loved Gongshu Duan and wished to establish him as heir, repeatedly requesting this of Duke Wu, but the Duke would not permit it.", indent: false },
    ],
    words: [
      { form: "初", pinyin: "chu", pos: "adv", cls: "w-adv", info: "A narrative marker meaning 'in the beginning' or 'originally.' In the Zuozhuan, 初 typically introduces backstory or flashback, signaling that the narrator is reaching back in time to explain the origins of a current event.", gloss: "at first; originally" },
      { form: "娶", pinyin: "qu", pos: "verb", cls: "w-verb", info: "To marry (said of the man taking a wife). Composed of 女 (woman) + 取 (to take). In classical Chinese, marriage vocabulary is gendered: the man 娶 (takes a wife), while the woman 嫁 (jiā, is married off to).", gloss: "to marry; to take a wife" },
      { form: "于", pinyin: "yu", pos: "prep", cls: "w-prep", info: "A versatile preposition meaning 'in,' 'at,' 'from,' or 'to,' depending on context. Here 娶于申 means 'married [a woman] from the state of Shen.' 于 frequently introduces a location or source in classical Chinese.", gloss: "in; at; from" },
      { form: "曰", pinyin: "yue", pos: "verb", cls: "w-verb", info: "Means 'called' or 'named.' In classical Chinese, 曰 can introduce direct speech ('said') or a name/title ('called'). Here it introduces the woman's posthumous title: Wu Jiang.", gloss: "called; named; said" },
      { form: "寤生", pinyin: "wu sheng", pos: "noun", cls: "w-noun", info: "A compound meaning 'difficult birth' or possibly 'breech birth.' The character 寤 normally means 'to awaken,' leading to traditional interpretations that the baby was born while the mother was sleeping or that it was a feet-first (breech) delivery. The exact medical meaning is debated by commentators. It became Zhuang Gong's personal name.", gloss: "difficult/breech birth" },
      { form: "驚", pinyin: "jing", pos: "verb", cls: "w-verb", info: "To startle, to frighten. Here used causatively: the birth 驚 (startled/frightened) Lady Jiang. This single character encapsulates the traumatic origin of the mother's hatred for her firstborn.", gloss: "to startle; to frighten" },
      { form: "遂", pinyin: "sui", pos: "adv", cls: "w-adv", info: "An adverb meaning 'thereupon,' 'consequently,' or 'from then on.' It marks a logical or temporal consequence. The use of 遂 here suggests that Lady Jiang's hatred was immediate and irreversible.", gloss: "thereupon; consequently" },
      { form: "惡", pinyin: "wu", pos: "verb", cls: "w-verb", info: "To detest, to hate. Pronounced wù (4th tone) when used as a verb meaning 'to hate,' distinct from è (also 4th tone) meaning 'evil/bad' as an adjective. This phonetic distinction is critical in classical Chinese reading.", gloss: "to detest; to hate" },
      { form: "共叔段", pinyin: "Gong Shu Duan", pos: "proper", cls: "w-proper", info: "The younger brother of Duke Zhuang. 共 (Gōng) is his posthumous place-name (he later fled to the state of Gong). 叔 (shū) means 'younger brother' or 'uncle' — here indicating his birth order. 段 (Duàn) is his personal name.", gloss: "Gongshu Duan (personal name)" },
      { form: "立", pinyin: "li", pos: "verb", cls: "w-verb", info: "To establish, to set up — specifically, to establish someone as heir or ruler. 欲立之 means 'wished to establish him [as heir].' In the Zhou feudal system, succession normally followed primogeniture (立嫡以長, lì dí yǐ zhǎng), making Lady Jiang's request a violation of ritual propriety.", gloss: "to establish; to set up as heir" },
      { form: "亟", pinyin: "qi", pos: "adv", cls: "w-adv", info: "Repeatedly, urgently. Pronounced qì when meaning 'repeatedly' (as here), distinct from jí meaning 'urgently.' 亟請 means she asked again and again — emphasizing Lady Jiang's persistent attempts to subvert the succession.", gloss: "repeatedly; urgently" },
      { form: "弗", pinyin: "fu", pos: "adv", cls: "w-adv", info: "A negative adverb meaning 'would not' or 'did not.' Unlike 不 (bù), which is a general negation, 弗 typically negates transitive verbs and often implies a deliberate refusal. 公弗許 = the Duke would not permit it.", gloss: "would not; did not" },
    ],
    grammar: `<h4>Key Grammar Patterns</h4>
<p><b>1. 娶于申 (qǔ yú Shēn) — "Verb + 于 + Place"</b><br>
The preposition 于 (yú) introduces the source or location of an action. In modern Chinese, you would say 從申國娶了一位女子, but in classical Chinese, the prepositional phrase 于申 follows the verb directly. This "verb + 于 + noun" pattern is one of the most common structures in classical Chinese.</p>

<p><b>2. 曰武姜 (yuē Wǔ Jiāng) — Naming Convention</b><br>
武姜 is a compound posthumous name: 武 (Wǔ) comes from her husband Duke Wu's posthumous title, and 姜 (Jiāng) is her natal clan name (from the state of Shen, which was of the Jiang clan). In the Zhou system, married women were often referred to by their husband's title + their natal clan name.</p>

<p><b>3. Pronoun 之 (zhī) as Object</b><br>
In 惡之, 立之, and 許 (with implied 之), the pronoun 之 functions as a direct object meaning 'him' or 'it.' This is the most common third-person pronoun in classical Chinese. Note that in 公弗許, the object 之 is omitted — classical Chinese freely drops pronouns when the referent is clear from context.</p>

<p><b>4. 故名曰寤生 (gù míng yuē Wùshēng) — "therefore named [him] Wusheng"</b><br>
故 (gù) = therefore. The subject (Lady Jiang) is omitted. 名 (míng) is used as a verb: 'to name.' 曰 introduces the name itself. This kind of subject omission is pervasive in classical Chinese — the reader must infer subjects from context.</p>

<p><b>5. 遂惡之 — Consequential 遂 (suì)</b><br>
遂 marks a consequence that follows naturally and inevitably from the preceding event. It is stronger than 故 (therefore) — it implies 'and so, from that point on.' The progression is: difficult birth → startled the mother → named him "Difficult Birth" → 遂 hated him. Each step follows inexorably.</p>

<p><b>6. 亟請於武公，公弗許 — Parallel Compression</b><br>
Note the extreme compression: 亟請於武公 (repeatedly requested of Duke Wu) is balanced against 公弗許 (the Duke would not permit). No conjunction connects them — the juxtaposition itself implies contrast. This paratactic style is characteristic of the Zuozhuan.</p>`,

    context: `<h4>Historical Background</h4>
<p>The state of <b>Zheng</b> (鄭, Zhèng) was a relatively small but politically influential state during the Spring and Autumn period (770-476 BCE), located in what is now Henan province in central China. Despite its small size, Zheng played an outsized role in early Spring and Autumn politics because of its proximity to the Zhou royal domain.</p>

<p><b>Duke Wu of Zheng</b> (鄭武公, Zhèng Wǔ Gōng, r. 770-744 BCE) was the second ruler of Zheng. He married a woman from the <b>state of Shen</b> (申, Shēn), a small state whose ruling house belonged to the Jiang (姜) clan — the same clan as the famous Tai Gong Wang (太公望), founder of the state of Qi. The Shen marriage was thus a union between the Ji (姬) clan of Zheng and the Jiang (姜) clan of Shen — a common aristocratic alliance pattern in the Zhou world.</p>

<p>The woman became known as <b>Wu Jiang</b> (武姜): 武 from her husband's posthumous title + 姜 from her natal clan. She bore two sons:</p>
<ul>
<li><b>Duke Zhuang</b> (鄭莊公, Zhèng Zhuāng Gōng, r. 743-701 BCE) — the elder son and legitimate heir</li>
<li><b>Gongshu Duan</b> (共叔段, Gōng Shū Duàn) — the younger son, his mother's favorite</li>
</ul>

<p>The <b>Zhou feudal succession system</b> followed the principle of <b>primogeniture among legitimate sons</b> (立嫡以長, lì dí yǐ zhǎng): the eldest son of the primary wife inherits. Lady Jiang's desire to replace the elder with the younger was a direct violation of this principle — one of the most destabilizing acts possible in the Zhou political order. Duke Wu's refusal upheld the system, but the damage to family relations was already done.</p>

<p>This passage serves as the <b>backstory</b> (introduced by the marker 初) to events in the first year of Duke Yin of Lu (722 BCE), which is where the Zuozhuan's narrative proper begins. The Zuozhuan often reaches back in time to explain the root causes of conflicts.</p>`,

    commentary: `<h4>Traditional Commentaries</h4>

<p><b>On 初 (chū):</b></p>
<p>Du Yu's commentary (杜預注, Dù Yù zhù):<br>
<span class="commentary-zh">「初，始也。」</span><br>
"初 means 'the beginning.'" Du Yu's terse gloss reflects the Zuozhuan's narrative technique: 初 signals a flashback. The events described here predate the main narrative by at least two decades.</p>

<p><b>On 寤生 (wù shēng):</b></p>
<p>Du Yu's commentary:<br>
<span class="commentary-zh">「寤生，寤寐而莊公已生，故驚而惡之。」</span><br>
"Wusheng — [Lady Jiang] was asleep (寤寐) and Duke Zhuang had already been born, which is why she was startled and detested him."</p>

<p>Kong Yingda's subcommentary (孔穎達疏, Kǒng Yǐngdá shū) elaborates:<br>
<span class="commentary-zh">「杜以寤寐而生，謂睡中生子，故驚也。一說寤生謂逆生，即今之所謂難產。」</span><br>
"Du [Yu] interprets 'wusheng' as giving birth while asleep — bearing a child in her sleep, hence the fright. An alternative interpretation is that 寤生 means a breech birth (逆生, nì shēng), what we would now call a difficult delivery."</p>

<p>The debate over 寤生 has continued for centuries. Most modern scholars favor the "breech birth" interpretation, since a breech delivery would indeed be frightening enough to permanently traumatize the mother. The "born while sleeping" interpretation seems less plausible as a cause for lifelong hatred.</p>

<p><b>On 亟請於武公 (qì qǐng yú Wǔ Gōng):</b></p>
<p>Du Yu's commentary:<br>
<span class="commentary-zh">「亟，數也。」</span><br>
"亟 means 'repeatedly' (數, shuò)."</p>

<p>Kong Yingda adds:<br>
<span class="commentary-zh">「欲廢長立少，非禮之正，武公所以弗許。」</span><br>
"To depose the elder and establish the younger violates the correct rites — this is why Duke Wu would not permit it." Kong Yingda explicitly frames Lady Jiang's request as a violation of 禮 (lǐ, ritual propriety), the foundational principle of Zhou political order.</p>`,

    narrative: `<h4>Narrative Technique</h4>

<p><b>Economy of characterization.</b> In just three sentences, the Zuozhuan establishes an entire family drama. We learn the marriage, the birth trauma, the naming, the hatred, the favoritism, the political intrigue, and the father's resistance — all without a single word of editorializing. The narrator never says Lady Jiang was wrong or Duke Wu was right. The facts speak for themselves.</p>

<p><b>The power of naming.</b> The name "Wusheng" (寤生, difficult birth) is the narrative's hinge. By naming her son after his traumatic birth, Lady Jiang permanently inscribes her negative experience onto his identity. Every time anyone calls him by name, the birth trauma is re-invoked. The Zuozhuan is deeply interested in how names encode meaning and fate — a theme that runs throughout the text.</p>

<p><b>遂 as narrative doom.</b> The word 遂 (thereupon, from then on) does enormous work here. It transforms a single event (a difficult birth) into a permanent condition (lifelong hatred). There is no gradual development, no second chance — 遂 marks an irreversible turning point. The reader understands immediately that this hatred will drive the entire plot.</p>

<p><b>Implied critique through structure.</b> The passage moves from 惡之 (hated him) → 愛共叔段 (loved Gongshu Duan) → 欲立之 (wished to establish him). The progression from private emotion (hatred/love) to political action (attempting to change the succession) is presented as a straight line. The Zuozhuan does not need to moralize: the structural logic — emotion → political disruption — speaks for itself.</p>

<p><b>Foreshadowing.</b> The phrase 公弗許 (the Duke would not permit it) ends the backstory on a note of unresolved tension. The father blocked the mother's wish, but the desire did not disappear. The reader is left to wonder: what will happen when Duke Wu is no longer alive to say no?</p>`,
  },
  {
    id: 2,
    title: "Duan's Expansion: The Cities of Zhi and Jing",
    lines: [
      { zh: "及莊公即位，爲之請制。", indent: false },
      { zh: "公曰：「制，巖邑也，虢叔死焉，佗邑唯命。」", indent: false },
      { zh: "請京，使居之，謂之京城大叔。", indent: false },
    ],
    en: [
      { text: "When Duke Zhuang ascended to power, she requested the city of Zhi for him.", indent: false },
      { text: "The Duke said: 'Zhi is a precipitous city; Lord Guo died there. Any other city — as you command.'", indent: false },
      { text: "She then requested Jing. He sent Duan to reside in Jing, and people called him 'the Great Lord of Jing.'", indent: false },
    ],
    words: [
      { form: "及", pinyin: "ji", pos: "prep", cls: "w-prep", info: "A temporal conjunction meaning 'when' or 'by the time of.' 及莊公即位 = 'when Duke Zhuang ascended the throne.' In classical Chinese, 及 often marks the arrival of a long-anticipated moment.", gloss: "when; by the time of" },
      { form: "即位", pinyin: "ji wei", pos: "verb", cls: "w-verb", info: "To ascend to the throne, literally 'to take one's position' (即 = approach, 位 = position/seat). This is the standard term for a ruler's accession in classical Chinese texts.", gloss: "to ascend the throne" },
      { form: "爲", pinyin: "wei", pos: "prep", cls: "w-prep", info: "Here pronounced wèi (4th tone), meaning 'on behalf of' or 'for.' 爲之請制 = 'on his behalf, requested [the city of] Zhi.' When 爲 means 'for/on behalf of,' it is a preposition; when it means 'to do/make,' it is a verb (pronounced wéi, 2nd tone).", gloss: "for; on behalf of" },
      { form: "制", pinyin: "Zhi", pos: "proper", cls: "w-proper", info: "A strategically important city in Zheng, located at a mountain pass. Its name literally means 'control' or 'command,' reflecting its commanding geographic position. The city was considered a vital defensive point.", gloss: "Zhi (place name)" },
      { form: "巖", pinyin: "yan", pos: "adj", cls: "w-adj", info: "Precipitous, steep, craggy. Describes a city built in a mountainous, easily defensible position. 巖邑 (yán yì) = 'a precipitous city,' i.e., a fortified stronghold.", gloss: "precipitous; steep; craggy" },
      { form: "焉", pinyin: "yan", pos: "particle", cls: "w-part", info: "A fusion word combining 'at/in that place' (於 + 之). 虢叔死焉 = 'Lord Guo died there (at that place).' 焉 is one of the most versatile particles in classical Chinese, functioning as a pronoun, locative, or sentence-final particle depending on context.", gloss: "there; at that place (= 於之)" },
      { form: "佗", pinyin: "tuo", pos: "adj", cls: "w-adj", info: "An alternate form of 他, here meaning 'other.' 佗邑 = 'other cities.' In classical Chinese, 佗/他 was originally only an adjective meaning 'other,' not a third-person pronoun (that usage developed later).", gloss: "other" },
      { form: "唯命", pinyin: "wei ming", pos: "verb", cls: "w-verb", info: "Literally 'only [your] command' — an idiom of deference meaning 'as you wish' or 'at your command.' The full form would be 唯命是聽 (wéi mìng shì tīng), 'I will obey whatever command [you give].' Duke Zhuang uses this phrase to appear filial while strategically denying the specific request.", gloss: "as you command; at your wish" },
      { form: "京", pinyin: "Jing", pos: "proper", cls: "w-proper", info: "A major city in the state of Zheng. Unlike Zhi, Jing was located on flat, fertile land — but it was also very large, making it potentially dangerous as a base of power for a rival. Its name 京 literally means 'capital' or 'high mound,' which is itself ominous.", gloss: "Jing (place name)" },
      { form: "謂", pinyin: "wei", pos: "verb", cls: "w-verb", info: "To call, to refer to as. 謂之京城大叔 = 'they called him the Great Lord of Jing.' The subject is impersonal ('people' or 'they') — a common construction when reporting general usage or public opinion.", gloss: "to call; to refer to as" },
      { form: "大叔", pinyin: "tai shu", pos: "noun", cls: "w-noun", info: "Here 大 is pronounced tài, meaning 'great' or 'grand' (same character as 太). 叔 means 'younger brother/uncle.' 京城大叔 = 'the Great Lord of the city of Jing.' This title is ominous: it elevates Duan to a quasi-independent status, as if he were the ruler of his own domain.", gloss: "Great Lord; Grand Uncle" },
    ],
    grammar: `<h4>Key Grammar Patterns</h4>

<p><b>1. 及莊公即位 (jí Zhuāng Gōng jí wèi) — Temporal 及</b><br>
及 here is a temporal conjunction: 'when' or 'by the time that.' It marks a transition from the backstory (Section 1) to the main narrative timeline. Compare the English 'when Duke Zhuang ascended the throne' — 及 does the same work as 'when.'</p>

<p><b>2. 爲之請制 (wèi zhī qǐng Zhì) — Benefactive 爲</b><br>
爲 (wèi) + pronoun + verb = 'to do [verb] on behalf of [pronoun].' Here: 'on his behalf, requested Zhi.' The pronoun 之 refers to Gongshu Duan. Note that the subject (Lady Jiang) is omitted — the reader must infer it from context.</p>

<p><b>3. 制，巖邑也 (Zhì, yán yì yě) — The Nominal Sentence with 也</b><br>
This is the classic A 也 pattern for definitions or identifications: 'Zhi — [it is] a precipitous city.' The particle 也 (yě) at the end marks this as a declarative statement of fact. There is no verb 'to be' (是) in classical Chinese — the juxtaposition of subject and predicate, sealed by 也, serves the same function.</p>

<p><b>4. 虢叔死焉 (Guó Shū sǐ yān) — Locative 焉</b><br>
焉 here is a fusion of 於 (at) + 之 (it/there), meaning 'there' or 'at that place.' The sentence means 'Lord Guo died there.' This is more elegant than saying 虢叔死於制 — the pronoun 焉 avoids repeating the place name.</p>

<p><b>5. 佗邑唯命 (tuó yì wéi mìng) — Compressed Deference Formula</b><br>
This is an extremely compressed expression. Expanded: 佗邑唯命是聽 = 'As for other cities, I will only listen to [your] command.' The sentence omits the subject (I), the main verb (listen/obey), and the structural particle 是. This kind of radical compression is typical of high-register diplomatic speech in the Zuozhuan.</p>

<p><b>6. 使居之 (shǐ jū zhī) — Causative 使</b><br>
使 (shǐ) = 'to cause, to send, to have [someone do something].' Here: '[He] sent [Duan] to reside there.' Note the double omission: the subject (Duke Zhuang) and the person sent (Duan) are both omitted. The 之 at the end refers to the place (Jing).</p>`,

    context: `<h4>Historical and Political Background</h4>

<p>After Duke Wu died (744 BCE), his elder son succeeded him as <b>Duke Zhuang of Zheng</b> (鄭莊公, r. 743-701 BCE). Lady Wu Jiang, now the dowager, immediately began maneuvering on behalf of her favorite son, Gongshu Duan.</p>

<p><b>The city of Zhi</b> (制) was a strategically critical fortress located at a mountain pass — essentially, it controlled a major route into Zheng's territory. By requesting this city for Duan, Lady Jiang was asking for a position of enormous military leverage. Duke Zhuang's refusal was shrewd: he cited the precedent of <b>Lord Guo</b> (虢叔, Guó Shū), who had died at Zhi — implying that the city was unlucky or dangerous. But the real reason was strategic: giving Duan control of Zhi would have been giving him the keys to Zheng's defense.</p>

<p><b>The city of Jing</b> (京), which Lady Jiang requested instead, was a different kind of danger. It was large and wealthy — located on fertile plains rather than in the mountains. While Zhi was dangerous because of its defensive position, Jing was dangerous because of its size and economic resources. As Section 3 will make clear, Jing's walls exceeded the proper limits for a subject's city.</p>

<p><b>The title "京城大叔"</b> (Jīng Chéng Tài Shū, 'Great Lord of the City of Jing') is deeply ominous. By giving Duan a title that combines a major city name with the honorific 大 (great/grand), the people of Zheng were effectively treating him as an independent lord rather than a subject of Duke Zhuang. The Zuozhuan reports this title without comment, but the implied criticism is sharp: this is a state within a state.</p>

<p><b>Duke Zhuang's strategy</b> is already visible in this passage. He refuses Zhi (a genuinely dangerous concession) but grants Jing (a large but less strategically critical city), appearing filial while actually setting a trap. His phrase 佗邑唯命 ('any other city, as you command') sounds generous but is carefully calculated: he gives just enough to seem compliant while denying the truly critical concession. Many commentators see this as evidence that Duke Zhuang was deliberately allowing Duan to overreach so that he could eventually crush him with moral justification.</p>`,

    commentary: `<h4>Traditional Commentaries</h4>

<p><b>On 制，巖邑也 (Zhi is a precipitous city):</b></p>
<p>Du Yu's commentary:<br>
<span class="commentary-zh">「制，鄭邑。巖，險也。虢叔，東虢君也。恃制巖險而不脩德，鄭滅之。」</span><br>
"Zhi was a city of Zheng. 巖 (yán) means 'precipitous/dangerous.' Lord Guo was the ruler of Eastern Guo. He relied on Zhi's steep defenses but did not cultivate virtue, so Zheng destroyed him."</p>

<p>This is significant: Du Yu tells us that Lord Guo's downfall came not from the city's weakness but from his own moral failure. Duke Zhuang's citation of this precedent is therefore doubly pointed — he is not just saying 'the city is dangerous' but implicitly warning: 'those who hold power without virtue come to ruin.' Whether he means this as a warning to Duan or as a justification for his own future actions is left ambiguous.</p>

<p><b>On 佗邑唯命 (Any other city, as you command):</b></p>
<p>Kong Yingda's subcommentary:<br>
<span class="commentary-zh">「公之於母，不能致諫，又不能早爲之所，而云唯命，使驕叔段者，莊公之罪也。」</span><br>
"That the Duke could neither admonish his mother nor arrange a place for [Duan] early, but instead said 'as you command' — thereby making Duan arrogant — this is Duke Zhuang's fault."</p>

<p>Kong Yingda directly criticizes Duke Zhuang. The phrase 唯命 (as you command) is not genuine filial deference — it is a calculated abdication of responsibility that allows Duan to grow dangerously powerful. By granting Jing, Duke Zhuang gives Duan enough rope to hang himself.</p>

<p><b>On 京城大叔 (Great Lord of Jing):</b></p>
<p>Du Yu's commentary:<br>
<span class="commentary-zh">「京，鄭邑。大，謂其爲大都也。」</span><br>
"Jing is a city of Zheng. 大 (great) refers to it being a major city."</p>

<p>Kong Yingda elaborates:<br>
<span class="commentary-zh">「叔段居大都，人謂之大叔，言其僭也。」</span><br>
"Since [Gong]shu Duan resided in a major city, people called him 'Great Lord' — this indicates his usurpation (僭, jiàn)." The word 僭 is crucial: it means to exceed one's proper rank, to arrogate privileges that belong only to a superior. Duan's title already marks him as a usurper in the eyes of the tradition.</p>`,

    narrative: `<h4>Narrative Technique</h4>

<p><b>The art of refusal.</b> Duke Zhuang's response to his mother's request is a masterclass in diplomatic speech as rendered by the Zuozhuan. He does not say "no" directly — that would be unfilial. Instead, he offers a reason (Lord Guo's death) that sounds like concern but is actually strategic denial. Then he offers a sweeping concession (佗邑唯命, "any other city") that sounds generous but has already excluded the only city that truly matters. The reader watches a chess game in which Lady Jiang thinks she is winning but is actually being outmaneuvered.</p>

<p><b>Ominous naming.</b> The title 京城大叔 is reported in the passive voice: 謂之 ('they called him'). The narrator does not tell us who started using this title or whether it was official. By attributing it to anonymous public usage, the Zuozhuan suggests that Duan's inflated status had become common knowledge — a situation that had already gone too far. The word 大 (great) in his title parallels the 大都 (great city) that Zhai Zhong will warn about in the next section.</p>

<p><b>Duke Zhuang's calculated passivity.</b> One of the great interpretive questions of this story is whether Duke Zhuang was a victim of filial obligation or a Machiavellian strategist who deliberately allowed his brother to overextend. The Zuozhuan gives us both readings simultaneously. On the surface, he appears to be a filial son deferring to his mother's wishes. But the careful denial of Zhi combined with the easy granting of Jing suggests a mind that is already planning several moves ahead. The narrator never tells us what Duke Zhuang is thinking — the reader must judge from actions alone.</p>

<p><b>Structural parallels.</b> Note the parallel structure: 請制 (requested Zhi) → refused → 請京 (requested Jing) → granted. The two requests create a pattern of escalation. Lady Jiang's first attempt fails; her second succeeds. But the 'success' is actually part of Duke Zhuang's trap. The Zuozhuan often uses paired events to create ironic contrasts between appearance and reality.</p>`,
  },
  {
    id: 3,
    title: "Warnings Ignored: Zhai Zhong's Counsel",
    lines: [
      { zh: "祭仲曰：「都，城過百雉，國之害也。", indent: false },
      { zh: "先王之制：大都，不過參國之一；中，五之一；小，九之一。", indent: false },
      { zh: "今京不度，非制也，君將不堪。」", indent: false },
      { zh: "公曰：「姜氏欲之，焉辟害？」", indent: false },
      { zh: "對曰：「姜氏何厭之有？", indent: false },
      { zh: "不如早爲之所，無使滋蔓。蔓，難圖也。", indent: false },
      { zh: "蔓草猶不可除，況君之寵弟乎？」", indent: false },
      { zh: "公曰：「多行不義，必自斃，子姑待之。」", indent: false },
    ],
    en: [
      { text: "Zhai Zhong said: 'If a city's walls exceed one hundred zhi, it becomes a harm to the state.", indent: false },
      { text: "The system of the former kings: a large city should not exceed one-third the size of the capital; a medium one, one-fifth; a small one, one-ninth.", indent: false },
      { text: "Now Jing exceeds the standard — this violates the system, and my lord will not be able to endure it.'", indent: false },
      { text: "The Duke said: 'Lady Jiang desires it — how can I avoid harm?'", indent: false },
      { text: "He replied: 'How could Lady Jiang ever be satisfied?", indent: false },
      { text: "It would be better to arrange a place for him early, and not let the problem spread. Once it spreads, it is hard to deal with.", indent: false },
      { text: "Even spreading weeds cannot be removed — how much less your lord's favored brother?'", indent: false },
      { text: "The Duke said: 'One who repeatedly acts against righteousness will surely bring about his own destruction. Just wait.'", indent: false },
    ],
    words: [
      { form: "祭仲", pinyin: "Zhai Zhong", pos: "proper", cls: "w-proper", info: "A high-ranking minister of Zheng. His surname 祭 is pronounced Zhài (not jì) when used as a surname. Zhai Zhong was one of Zheng's most important statesmen, active across several reigns. He appears frequently in the Zuozhuan.", gloss: "Zhai Zhong (personal name)" },
      { form: "雉", pinyin: "zhi", pos: "noun", cls: "w-noun", info: "A unit of wall measurement. One 雉 (zhì) equals a section of wall one zhàng (丈, ~3.3 meters) high and three zhàng long. 百雉 (one hundred zhi) thus describes a wall approximately 1 kilometer in total length — a significant fortification.", gloss: "zhi (unit of wall measurement)" },
      { form: "參", pinyin: "san", pos: "adj", cls: "w-adj", info: "An archaic form of 三 (sān, three). 參國之一 = one-third of the capital city. The use of 參 for 'three' is characteristic of formal, archaic registers in classical Chinese.", gloss: "three; one-third" },
      { form: "度", pinyin: "du", pos: "noun", cls: "w-noun", info: "Standard, measure, proper limit. 不度 = 'does not [conform to the] standard.' Used here as a noun meaning 'the proper measure.' Related to the verb 度 (duó, to measure/assess).", gloss: "standard; proper measure" },
      { form: "制", pinyin: "zhi", pos: "noun", cls: "w-noun", info: "System, regulation, institution. 先王之制 = 'the system of the former kings.' Note that this is the same character as the city name 制 (Zhì) — a coincidence the original audience would have noticed. 非制也 = 'this is not [according to the] system.'", gloss: "system; regulation; institution" },
      { form: "堪", pinyin: "kan", pos: "verb", cls: "w-verb", info: "To endure, to bear, to withstand. 君將不堪 = 'my lord will not be able to endure it.' Implies that the situation will become unbearable — a polite way of saying 'you will lose control.'", gloss: "to endure; to bear" },
      { form: "焉", pinyin: "yan", pos: "adv", cls: "w-adv", info: "Here used as an interrogative adverb meaning 'how?' or 'where?' 焉辟害 = 'how can [I] avoid harm?' This is a different usage from the locative 焉 in Section 2. Context determines which meaning applies.", gloss: "how?; where?" },
      { form: "辟", pinyin: "bi", pos: "verb", cls: "w-verb", info: "An alternate form of 避 (bì), meaning 'to avoid.' 焉辟害 = 'how can I avoid harm?' The use of 辟 for 避 is common in pre-Qin texts. Some editions write 避 directly.", gloss: "to avoid (= 避)" },
      { form: "厭", pinyin: "yan", pos: "verb", cls: "w-verb", info: "To be satisfied, to have enough. 何厭之有 = 'what satisfaction does she have?' i.e., 'how could she ever be satisfied?' The construction 何...之有 is a rhetorical question pattern implying 'there is no...'", gloss: "to be satisfied; to have enough" },
      { form: "滋蔓", pinyin: "zi man", pos: "verb", cls: "w-verb", info: "To grow and spread (like vines). 滋 = to grow, increase; 蔓 = to creep, to spread as a vine. The compound is both literal (weeds spreading) and metaphorical (Duan's power expanding unchecked).", gloss: "to grow and spread; to proliferate" },
      { form: "圖", pinyin: "tu", pos: "verb", cls: "w-verb", info: "To plan, to manage, to deal with. 難圖也 = 'it will be hard to deal with.' In classical Chinese, 圖 often means 'to plan against' or 'to bring under control.'", gloss: "to plan; to deal with; to manage" },
      { form: "猶", pinyin: "you", pos: "adv", cls: "w-adv", info: "Still, even, yet. 蔓草猶不可除 = 'even spreading weeds cannot be removed.' 猶 intensifies the rhetorical force: if even weeds are hard to remove, how much harder a powerful brother?", gloss: "still; even; yet" },
      { form: "況", pinyin: "kuang", pos: "adv", cls: "w-adv", info: "How much more/less; let alone. 況君之寵弟乎 = 'how much less [can you remove] your lord's favored brother?' 況 introduces the stronger case in an a fortiori argument (from lesser to greater).", gloss: "how much more/less; let alone" },
      { form: "斃", pinyin: "bi", pos: "verb", cls: "w-verb", info: "To die, to be destroyed, to bring about one's own ruin. 必自斃 = 'will surely bring about his own destruction.' 自斃 implies self-destruction — the agent is also the victim.", gloss: "to die; to be destroyed; to collapse" },
      { form: "姑", pinyin: "gu", pos: "adv", cls: "w-adv", info: "For now, for the time being. 子姑待之 = 'you just wait for now.' 姑 softens the command, giving it a sense of patient confidence.", gloss: "for now; for the time being" },
    ],
    grammar: `<h4>Key Grammar Patterns</h4>

<p><b>1. 城過百雉，國之害也 — The 也 Judgment Sentence</b><br>
This is another instance of the 'A, B 也' pattern: '[If a] city's walls exceed one hundred zhi, [that is] a harm to the state.' The particle 也 marks a declarative judgment. Note the omitted conditional: classical Chinese does not need a word for 'if' when the conditional relationship is clear from context. 國之害 uses 之 as a possessive particle: 'the state's harm' = 'a harm to the state.'</p>

<p><b>2. 大都，不過參國之一 — Fractions in Classical Chinese</b><br>
參國之一 = 'one-third of the capital.' The structure is [denominator] + [whole] + 之 + [numerator]. So 五之一 = one-fifth, 九之一 = one-ninth. This fractional notation is standard in classical Chinese. Note that 國 here means 'the capital city' (國都), not 'the state' — in early Chinese, 國 originally referred to the walled capital.</p>

<p><b>3. 焉辟害 (yān bì hài) — Interrogative 焉</b><br>
焉 here is an interrogative adverb meaning 'how?' (= 如何). 焉辟害 = 'how can [I] avoid harm?' Compare the locative 焉 in Section 2 (虢叔死焉 = 'died there'). The same character, 焉, can be interrogative ('how/where?'), locative ('there'), or a sentence-final particle, depending on position and context.</p>

<p><b>4. 何厭之有 (hé yàn zhī yǒu) — Rhetorical Question with Fronted Object</b><br>
This is one of the most important patterns in classical Chinese: 何 + [object] + 之 + 有 = 'what [object] is there?' The object (厭, satisfaction) is fronted before the verb (有, to have), with 之 serving as a structural particle marking the fronted object. Literally: 'what satisfaction 之 is-there?' = 'how could there be any satisfaction?' = 'she will never be satisfied.' This pattern (何...之有) always carries a rhetorical force implying 'there is no such thing.'</p>

<p><b>5. 不如早爲之所 — "It would be better to..."</b><br>
不如 (bùrú) = 'it would be better to,' 'nothing compares to.' 爲之所 is compressed: 爲 (wèi, for/to) + 之 (him) + 所 (a place/arrangement). Literally: 'arrange a place for him.' The word 所 here is deliberately vague — it could mean 'assign him a proper place' (a smaller fief) or, more ominously, 'deal with him' (eliminate him).</p>

<p><b>6. 蔓草猶不可除，況君之寵弟乎 — The A fortiori Argument (猶...況...乎)</b><br>
This is the classic 'even A cannot be done, how much less B?' construction: 猶 (even) + A + 不可 (cannot) + verb, 況 (how much less) + B + 乎 (rhetorical question particle). The argument moves from a lesser case (weeds) to a greater case (the Duke's brother), compelling the listener to accept the conclusion.</p>

<p><b>7. 多行不義，必自斃 — Proverbial Compression</b><br>
This sentence has become one of the most famous proverbs in the Chinese language. Its grammatical structure is elegant: 多 (often) + 行 (practice) + 不義 (unrighteousness) = subject clause; 必 (certainly) + 自 (self) + 斃 (destroy) = predicate. The entire sentence is only six characters but contains a complete philosophical argument about the self-defeating nature of injustice.</p>`,

    context: `<h4>Historical and Political Background</h4>

<p><b>Zhai Zhong</b> (祭仲, Zhài Zhōng) was one of the most important ministers in the state of Zheng, serving across multiple reigns. His surname 祭 is derived from a place name and is pronounced Zhài (not jì). In the Zuozhuan, he appears as a shrewd and outspoken political advisor — the archetype of the loyal minister who dares to speak uncomfortable truths.</p>

<p><b>The system of city sizes</b> that Zhai Zhong cites reflects the Zhou feudal order's emphasis on hierarchical proportionality. Every aspect of the Zhou world — city walls, carriages, sacrificial vessels, musical ensembles — was supposed to follow strict proportional rules that reflected one's rank. A vassal's city that exceeds the proper proportion to the capital is not just an architectural problem — it is a political statement of independence. When Zhai Zhong says 今京不度 ('now Jing exceeds the standard'), he is saying that Duan is already acting as if he were an independent ruler.</p>

<p>The specific measurements — 1/3, 1/5, 1/9 of the capital — may or may not reflect actual historical regulations. What matters is the principle: subordinate cities must be visibly smaller than the capital. This principle was fundamental to Zhou political theory, in which spatial hierarchy mirrors political hierarchy.</p>

<p><b>Duke Zhuang's response</b> — 姜氏欲之，焉辟害 ('Lady Jiang desires it — how can I avoid harm?') — invokes filial piety as his excuse. In the Confucian ethical system, filial piety (孝, xiào) was the supreme virtue, and disobeying one's mother was a grave offense. Duke Zhuang positions himself as trapped between political prudence and filial duty. Whether this is sincere or a calculated pose is one of the central interpretive questions of the story.</p>

<p><b>The proverb 多行不義必自斃</b> ('one who repeatedly acts against righteousness will surely destroy himself') has become one of the most widely quoted lines from the Zuozhuan. Duke Zhuang's words reveal his strategy: he will not act against Duan directly. Instead, he will wait for Duan to condemn himself through his own actions. This is a policy of strategic patience — or, less charitably, of deliberate entrapment.</p>`,

    commentary: `<h4>Traditional Commentaries</h4>

<p><b>On 百雉 (one hundred zhi):</b></p>
<p>Du Yu's commentary:<br>
<span class="commentary-zh">「雉，度名也。方丈曰堵，三堵曰雉。一雉之牆，長三丈，高一丈。」</span><br>
"雉 (zhì) is a unit of measurement. A square zhàng is called a dǔ (堵); three dǔ make one zhì. One zhì of wall is three zhàng long and one zhàng high."</p>

<p>This gives us the concrete dimensions: one zhì = approximately 10 meters long by 3.3 meters high. One hundred zhì would be a wall approximately 1 kilometer in total length — a substantial urban fortification for a subordinate city.</p>

<p><b>On 參國之一 (one-third of the capital):</b></p>
<p>Du Yu's commentary:<br>
<span class="commentary-zh">「國，國都也。謂都城方九里，大都城方三里。」</span><br>
"國 here means 'the capital city.' The capital's walls are nine lǐ square; a large subordinate city's walls are three lǐ square."</p>

<p>Kong Yingda adds:<br>
<span class="commentary-zh">「先王之制，所以別尊卑、定上下也。都邑過制，則上下不分，故爲國害。」</span><br>
"The system of the former kings served to distinguish the honored from the humble and to fix the positions of superior and inferior. When cities exceed the standard, the distinction between superior and inferior is lost — hence it becomes a harm to the state."</p>

<p>Kong Yingda makes explicit what the text implies: the city-size regulations are not merely practical (defense) but fundamentally about maintaining the hierarchical order (禮, lǐ) that holds society together.</p>

<p><b>On 多行不義必自斃 (Repeated injustice brings self-destruction):</b></p>
<p>Du Yu's commentary:<br>
<span class="commentary-zh">「斃，踣也。」</span><br>
"斃 (bì) means 'to fall/collapse' (踣, bó)."</p>

<p>Kong Yingda's subcommentary:<br>
<span class="commentary-zh">「公意在使段自斃。祭仲欲公除之，公不聽，欲俟其有罪而後誅之也。」</span><br>
"The Duke intended to let Duan destroy himself. Zhai Zhong wanted the Duke to eliminate him, but the Duke did not listen — he wished to wait until [Duan] had committed crimes and only then punish him."</p>

<p>This is a crucial observation: Kong Yingda identifies Duke Zhuang's strategy as deliberate — he is not passively waiting but actively waiting for Duan to give him a justifiable pretext for action. This is the essence of the moral ambiguity at the heart of the story: is Duke Zhuang a patient sage or a cold-blooded strategist?</p>`,

    narrative: `<h4>Narrative Technique</h4>

<p><b>The advisory dialogue pattern.</b> This section introduces one of the Zuozhuan's signature narrative forms: the minister-ruler dialogue. A wise minister offers counsel; the ruler responds. The pattern repeats with variation (Zhai Zhong speaks → Duke responds → Zhai Zhong speaks again → Duke responds again), creating a rhythm of escalating urgency met by calm refusal. This structure appears dozens of times throughout the Zuozhuan and became a template for Chinese historical narrative.</p>

<p><b>Metaphor as argument.</b> Zhai Zhong's rhetorical strategy builds from abstract principle (city-size regulations) to concrete metaphor (spreading weeds). The weed metaphor — 蔓草猶不可除，況君之寵弟乎 — is devastatingly effective because it moves from a lesser case (weeds) to a greater one (the Duke's brother), using the 猶...況 a fortiori construction. The logic is irrefutable; the Duke can only respond by changing the subject entirely.</p>

<p><b>Duke Zhuang's deflections.</b> Each of the Duke's responses reveals a different strategy of avoidance:<br>
(1) 姜氏欲之，焉辟害 — appeals to filial piety as a constraint ('my hands are tied')<br>
(2) 多行不義必自斃，子姑待之 — appeals to moral inevitability ('justice will prevail on its own')<br>
Neither response actually addresses Zhai Zhong's concrete argument about city sizes and political danger. The Duke deflects from the practical to the philosophical, which is either wisdom or evasion, depending on one's interpretation.</p>

<p><b>The proverbial voice.</b> Duke Zhuang's final statement — 多行不義必自斃 — shifts register from personal conversation to universal maxim. By speaking in proverbs, the Duke removes himself from the situation. He is no longer a brother dealing with a rival; he is a sage pronouncing a general truth about the universe. This shift in register is itself a kind of power move: it forecloses further argument by appealing to a higher authority (the moral order itself).</p>

<p><b>Dramatic irony.</b> The reader, who knows the outcome of the story (Duan's eventual defeat), reads this dialogue with full knowledge that Duke Zhuang is right — Duan will indeed destroy himself. But this foreknowledge does not resolve the moral question: was the Duke wise to wait, or was he culpable for allowing the situation to deteriorate? The Zuozhuan refuses to answer, leaving the reader to judge.</p>`,
  },
  {
    id: 4,
    title: "Further Provocations: Dual Allegiance",
    lines: [
      { zh: "既而大叔命西鄙、北鄙貳於己。", indent: false },
      { zh: "公子呂曰：「國不堪貳，君將若之何？", indent: false },
      { zh: "欲與大叔，臣請事之；若不與，則請除之。無生民心。」", indent: false },
      { zh: "公曰：「無庸，將自及。」", indent: false },
      { zh: "大叔又收貳以爲己邑，至于廩延。", indent: false },
      { zh: "子封曰：「可矣，厚將得衆。」", indent: false },
      { zh: "公曰：「不義不暱，厚將崩。」", indent: false },
    ],
    en: [
      { text: "Before long, the Great Lord commanded the western and northern border towns to have dual allegiance — to him as well as to the Duke.", indent: false },
      { text: "Gongzi Lu said: 'A state cannot endure dual allegiance. What does my lord intend to do?", indent: false },
      { text: "If you wish to yield to the Great Lord, I request permission to serve him; if not, then I request permission to eliminate him. Do not let the people become of two minds.'", indent: false },
      { text: "The Duke said: 'There is no need; he will bring it upon himself.'", indent: false },
      { text: "The Great Lord then annexed the towns of dual allegiance as his own territory, extending to Linyan.", indent: false },
      { text: "Zifeng said: 'It is time! As his territory grows, he will win the multitude.'", indent: false },
      { text: "The Duke said: 'Without righteousness and without loyalty, the thicker it grows, the more surely it will collapse.'", indent: false },
    ],
    words: [
      { form: "既而", pinyin: "ji er", pos: "adv", cls: "w-adv", info: "A temporal conjunction meaning 'before long,' 'soon after,' or 'after a while.' 既 = already; 而 = and/then. Together they indicate a passage of time — not immediate, but not very long either.", gloss: "before long; soon after" },
      { form: "鄙", pinyin: "bi", pos: "noun", cls: "w-noun", info: "Border town, frontier settlement. In the Zhou feudal system, 鄙 referred to outlying settlements on the edges of a state's territory, as opposed to the central cities. 西鄙、北鄙 = the western and northern border towns.", gloss: "border town; frontier" },
      { form: "貳", pinyin: "er", pos: "verb", cls: "w-verb", info: "To have dual allegiance, to be of two minds, to serve two masters. Literally 'two' (二) with a heart/mind radical variant. 貳於己 = 'to have dual allegiance to himself [as well as to the Duke].' This is an act of political subversion — dividing the loyalty of border towns.", gloss: "to have dual allegiance; to be divided" },
      { form: "公子呂", pinyin: "Gongzi Lu", pos: "proper", cls: "w-proper", info: "A minister and military commander of Zheng, also known by his courtesy name 子封 (Zǐfēng). 公子 indicates he was a son of a previous duke, making him a member of the Zheng ruling house. His dual naming (公子呂 / 子封) is typical of the Zuozhuan.", gloss: "Gongzi Lu (= Zifeng)" },
      { form: "若之何", pinyin: "ruo zhi he", pos: "particle", cls: "w-part", info: "A fixed interrogative phrase meaning 'what will you do about it?' Literally: 若 (like/as) + 之 (it) + 何 (what) = 'what about it?' This is one of the most common question formulas in the Zuozhuan.", gloss: "what will you do about it?" },
      { form: "與", pinyin: "yu", pos: "verb", cls: "w-verb", info: "To give, to yield, to hand over. 欲與大叔 = 'if you wish to yield [the state] to the Great Lord.' The object (the state/power) is omitted but understood. Pronounced yǔ (3rd tone) as a verb.", gloss: "to give; to yield; to hand over" },
      { form: "事", pinyin: "shi", pos: "verb", cls: "w-verb", info: "To serve (a ruler or master). 臣請事之 = 'I, your servant, request to serve him.' The word carries political weight: to 事 someone is to accept them as one's lord. Gongzi Lu is saying: if you yield to Duan, I will transfer my allegiance.", gloss: "to serve (a lord)" },
      { form: "除", pinyin: "chu", pos: "verb", cls: "w-verb", info: "To eliminate, to remove. In political context, a euphemism for killing or permanently neutralizing a rival. 請除之 = 'I request [permission] to eliminate him.'", gloss: "to eliminate; to remove" },
      { form: "庸", pinyin: "yong", pos: "noun", cls: "w-noun", info: "Need, necessity. 無庸 = 'there is no need.' An archaic usage — in modern Chinese, 庸 usually means 'mediocre.' Here it retains its older meaning of 'use' or 'need.'", gloss: "need; necessity (archaic)" },
      { form: "及", pinyin: "ji", pos: "verb", cls: "w-verb", info: "To reach, to catch up to, to come upon (oneself). 將自及 = 'it will come upon him on its own' or 'he will bring it upon himself.' Compare the temporal 及 in Section 2 (及莊公即位) — same character, different function.", gloss: "to reach; to catch up to" },
      { form: "厚", pinyin: "hou", pos: "adj", cls: "w-adj", info: "Thick, substantial, great (in extent). 厚將得衆 = 'as [his territory] grows thick/substantial, he will win the multitude.' Used metaphorically for the accumulation of territory and power.", gloss: "thick; substantial; great in extent" },
      { form: "暱", pinyin: "ni", pos: "verb", cls: "w-verb", info: "To be close, to be intimate, to be loyal. 不暱 = 'without closeness/loyalty.' Some editions write 昵. Duke Zhuang argues that without both righteousness (義) and personal loyalty (暱), Duan's supporters will not truly follow him.", gloss: "to be close; to be intimate; to be loyal" },
      { form: "崩", pinyin: "beng", pos: "verb", cls: "w-verb", info: "To collapse, to crumble. Originally used for the death of a Son of Heaven or for the collapse of a mountain. 厚將崩 = 'the thicker it grows, the more surely it will collapse.' The metaphor combines physical weight with political fragility.", gloss: "to collapse; to crumble" },
    ],
    grammar: `<h4>Key Grammar Patterns</h4>

<p><b>1. 命西鄙、北鄙貳於己 — Causative 命 (mìng)</b><br>
命 (mìng, to command) takes a pivotal construction: 命 + [object] + [verb phrase]. Here: 'commanded the western and northern border towns to have dual allegiance to himself.' The structure is: 命 (command) + 西鄙北鄙 (object: border towns) + 貳於己 (verb phrase: to be of dual allegiance to himself). 於己 = 'to himself,' where 於 introduces the indirect object and 己 is the reflexive pronoun.</p>

<p><b>2. 君將若之何 (jūn jiāng ruò zhī hé) — "What will you do about it?"</b><br>
This is a fixed interrogative formula: 若之何 = 'what about it?' or 'what will [you] do about this?' 將 (jiāng) = 'about to, going to,' adding future tense. The formula appears throughout the Zuozhuan as a way for ministers to press their lords for decisions. It is more forceful than a simple question — it demands action.</p>

<p><b>3. 欲與大叔，臣請事之；若不與，則請除之 — Conditional Parallel Structure</b><br>
This is a beautifully balanced conditional: 'If [you] wish to yield to the Great Lord, [then] I request to serve him; if [you do] not yield, then I request to eliminate him.' The parallel structure (欲與...請事之 / 不與...請除之) forces a binary choice: there is no middle ground. Note the omitted subjects and the implied 'if' (若 appears explicitly only in the second clause).</p>

<p><b>4. 無生民心 (wú shēng mín xīn) — Prohibitive 無</b><br>
無 here functions as a prohibitive ('do not'), equivalent to 勿 (wù). 生 = 'to give rise to,' used causatively. 民心 = 'the people's hearts/minds.' The whole phrase: 'Do not give rise to [divided] hearts among the people.' This is a compressed warning: inaction will itself cause political harm.</p>

<p><b>5. 無庸，將自及 — Extreme Compression</b><br>
Duke Zhuang's response is only five characters. 無庸 = 'no need' (there is no need [to act]). 將自及 = '[disaster] will of-itself reach [him].' The subject of 及 is omitted — it could be 'disaster,' 'consequences,' or 'fate.' This radical brevity is characteristic of Duke Zhuang's speech throughout the story: he says as little as possible, in contrast to his ministers' lengthy arguments.</p>

<p><b>6. 不義不暱，厚將崩 — Paired Negation + Conditional Consequence</b><br>
不義 (without righteousness) + 不暱 (without loyalty): two parallel negations that together describe the absence of both moral and personal bonds. 厚將崩: 'the thicker [it grows], [the more surely] it will collapse.' This is a metaphorical conditional — the thicker Duan's territorial holdings become, the more fragile they actually are, because they lack the inner cohesion of righteousness and loyalty.</p>`,

    context: `<h4>Historical and Political Background</h4>

<p>The situation has now escalated from a city grant (Section 2) to active territorial subversion. Duan is no longer just passively enjoying a large fief — he is actively <b>commanding border towns to divide their allegiance</b>. In the Zhou feudal system, each settlement owed loyalty exclusively to its immediate lord. For Duan to command 西鄙 and 北鄙 to 貳於己 ('be of dual allegiance to himself') was an open act of political rebellion, though short of outright war.</p>

<p><b>Gongzi Lu</b> (公子呂, Gōngzǐ Lǚ), also known as <b>Zifeng</b> (子封, Zǐfēng), was a member of the Zheng ruling house (公子 = 'son of a duke') who served as a military commander. His dual naming is typical of the Zuozhuan: 公子呂 is his formal lineage name, while 子封 is his courtesy name (字, zì). The text uses both names, switching between them — when he is first introduced, he is 公子呂; when he speaks again later, he is 子封. Both refer to the same person.</p>

<p>Gongzi Lu's ultimatum is striking in its bluntness. He presents Duke Zhuang with a binary choice: <b>yield or strike</b>. There is no middle path. His offer to 'serve' Duan (事之) if the Duke yields is not sincere — it is a rhetorical device designed to shock the Duke into action by making the alternative (submission) sound intolerable.</p>

<p><b>Linyan</b> (廩延, Lǐnyán) was a town that marked the furthest extent of Duan's territorial expansion. Its mention signals that Duan's ambitions were not confined to Jing — he was systematically building a rival power base across western and northern Zheng.</p>

<p>Duke Zhuang's repeated refusals to act — 無庸，將自及 ('no need; he will bring it upon himself') and 不義不暱，厚將崩 ('without righteousness and loyalty, the thicker it grows, the more surely it will collapse') — have been the subject of intense debate for over two thousand years. Is this <b>Confucian patience</b> (waiting for moral self-correction) or <b>Legalist cunning</b> (deliberately allowing an enemy to overextend)? The Zuozhuan leaves both readings available.</p>`,

    commentary: `<h4>Traditional Commentaries</h4>

<p><b>On 貳於己 (dual allegiance to himself):</b></p>
<p>Du Yu's commentary:<br>
<span class="commentary-zh">「貳，兩屬也。令西鄙、北鄙既屬於國，又屬於己。」</span><br>
"貳 (èr) means 'dual attachment.' He commanded the western and northern border towns to belong both to the state and to himself."</p>

<p>The word 兩屬 (liǎng shǔ, 'dual attachment') is Du Yu's gloss for the politically loaded term 貳. In the Zhou system, towns could not serve two masters — 貳 was inherently subversive.</p>

<p><b>On 國不堪貳 (the state cannot endure dual allegiance):</b></p>
<p>Kong Yingda's subcommentary:<br>
<span class="commentary-zh">「國之所以爲國者，以民心一也。貳則民心離矣，國將何以存？」</span><br>
"What makes a state a state is that the people's hearts are unified. If there is dual [allegiance], the people's hearts are divided — how then can the state survive?"</p>

<p>Kong Yingda articulates the fundamental political principle at stake: the unity of the state depends on the unity of the people's loyalty. Duan's 貳 threatens the very foundation of political order.</p>

<p><b>On 無庸，將自及 (No need; he will bring it upon himself):</b></p>
<p>Du Yu's commentary:<br>
<span class="commentary-zh">「庸，用也。及，至也。言將自及禍也。」</span><br>
"庸 (yōng) means 'use/need.' 及 (jí) means 'to reach.' [The Duke] is saying that [Duan] will bring disaster upon himself."</p>

<p><b>On 不義不暱，厚將崩 (Without righteousness and loyalty, the thicker it grows, the more it will collapse):</b></p>
<p>Du Yu's commentary:<br>
<span class="commentary-zh">「暱，親也。言段所爲不義，其黨必不暱。衆雖厚，將自崩潰。」</span><br>
"暱 (nì) means 'closeness/intimacy.' This means that what Duan does is unrighteous, so his followers will surely not be loyal. Though his forces may be numerous, they will collapse of their own accord."</p>

<p>Kong Yingda adds a critical moral judgment:<br>
<span class="commentary-zh">「莊公此言，明知段之將敗，而故養成其惡，此莊公之心術也。」</span><br>
"Duke Zhuang's words here make clear that he knew Duan would fail, yet he deliberately nurtured the growth of [Duan's] evil — this reveals Duke Zhuang's true mentality (心術, xīn shù)."</p>

<p>The term 心術 (xīn shù, literally 'heart-technique') is damning. Kong Yingda is saying that Duke Zhuang's patient words conceal a calculating mind. He is not waiting passively for justice — he is actively cultivating his brother's downfall.</p>`,

    narrative: `<h4>Narrative Technique</h4>

<p><b>Repetition with variation.</b> This section mirrors Section 3 in structure: a minister warns the Duke, the Duke deflects with a philosophical maxim. But there are crucial differences. The minister is now different (Gongzi Lu instead of Zhai Zhong), the warnings are more urgent, and the Duke's responses are even more compressed. Zhai Zhong warned about potential danger; Gongzi Lu demands immediate action. The repetition creates a rhythm of escalating crisis met with unchanging calm — a pattern that builds unbearable narrative tension.</p>

<p><b>The binary ultimatum.</b> Gongzi Lu's speech is structurally brilliant: 欲與...臣請事之 / 若不與...則請除之 (if yield → I serve him; if not yield → I eliminate him). By reducing the situation to two stark options, he eliminates the Duke's preferred strategy of patient waiting. There is no third option in Gongzi Lu's formulation. The Duke's response (無庸) effectively creates a third option — continued inaction — which is precisely what his minister is trying to prevent.</p>

<p><b>Duke Zhuang's increasing brevity.</b> Compare the Duke's responses across Sections 3 and 4:<br>
- Section 3, first response: 姜氏欲之，焉辟害？ (9 characters)<br>
- Section 3, second response: 多行不義，必自斃，子姑待之。 (10 characters)<br>
- Section 4, first response: 無庸，將自及。 (5 characters)<br>
- Section 4, second response: 不義不暱，厚將崩。 (6 characters)<br>
The Duke's responses grow shorter as the crisis deepens. This is not a sign of less engagement but of greater certainty — or greater coldness. Each response is more aphoristic, more impersonal, more detached. By the end, he speaks entirely in maxims, as if the fate of his brother were a matter of natural law rather than human choice.</p>

<p><b>Dual naming as narrative signal.</b> The text introduces the minister as 公子呂 (Gongzi Lu) but later calls him 子封 (Zifeng). This is not inconsistency — it is the Zuozhuan's standard practice of introducing a character formally and then switching to the courtesy name for subsequent references. For the student, recognizing that 公子呂 = 子封 is essential to following the narrative.</p>

<p><b>The widening scale.</b> The story's geographic scope expands with each section: Section 2 involves one city (Jing); Section 3 discusses the size of that city; Section 4 extends to multiple border towns (西鄙, 北鄙) and then to the town of Linyan. Duan's ambition is literally spreading across the map. The spatial expansion mirrors the political escalation, and Zifeng's warning — 厚將得衆 ('as it thickens, he will win the multitude') — captures this geographic-political metaphor perfectly.</p>`,

    springAutumn: `<h4>Spring and Autumn Annals: The Principle of Word Choice (春秋笔法)</h4>

<p>The <b>Spring and Autumn Annals</b> (《春秋》, Chūnqiū) is the terse chronicle of the state of Lu that the Zuozhuan serves to explain. The Annals' entry for this event (which comes later in the story, at the moment of Duan's defeat) reads:</p>

<p class="annals-text">「鄭伯克段于鄢。」</p>
<p>"The Earl of Zheng overcame Duan at Yan."</p>

<p>Every word in this six-character entry carries moral judgment — this is the essence of <b>春秋笔法</b> (Chūnqiū bǐfǎ), the 'brush-method of the Spring and Autumn,' also known as <b>一字褒貶</b> (yī zì bāo biǎn), 'praise and blame in a single character.'</p>

<p><b>鄭伯 (Zhèng Bó, 'the Earl of Zheng'):</b> Duke Zhuang's rank was 伯 (bó, earl/count). By using his rank title rather than calling him by name or adding an honorific, the Annals treats him with cold formality. The Gongyang Commentary (《公羊傳》) explains: <span class="commentary-zh">「段，弟也。何以不稱弟？當國而言，失教也。」</span> — "Duan was his brother. Why not call him 'brother'? Speaking in terms of the state, [the Duke] failed in his duty to educate [his brother]." The neutral 鄭伯 implies that the Duke failed in his fraternal duty.</p>

<p><b>克 (kè, 'overcame'):</b> The character 克 is used for military victories against foreign enemies — not for internal family disputes. By using 克 instead of 殺 (shā, 'killed') or 逐 (zhú, 'expelled'), the Annals treats this as a war between equals rather than a ruler suppressing a rebel. This downgrades Duke Zhuang (treating him as Duan's equal rather than his superior) and simultaneously suggests that the conflict was avoidable. The Guliang Commentary (《穀梁傳》) says: <span class="commentary-zh">「克者何？能也。何能也？能殺也。何以不言殺？見段之有徒衆也。」</span> — "'Overcame' means 'was able to.' Able to do what? Able to kill. Why not say 'killed'? To show that Duan had followers and forces [making it a real battle]."</p>

<p><b>段 (Duàn):</b> Duan is called by his bare personal name — not 'Gongshu Duan' (共叔段) or 'the Duke's brother' (弟). In the Annals' system, using someone's bare name without title or kinship term is a mark of moral condemnation. By stripping Duan of his kinship title (叔, younger brother), the Annals refuses to treat the relationship as a normal fraternal bond — because Duan's actions had already destroyed that bond.</p>

<p>The genius of 春秋笔法 is that the Annals itself says none of this explicitly. It merely records six characters: 鄭伯克段于鄢. The moral judgments are encoded in word choices that the reader must decode — a practice that the Zuozhuan, Gongyang, and Guliang commentaries exist to explain. This section (Section 4) sets the stage for that climactic entry by establishing the pattern of Duan's escalating provocations and Duke Zhuang's deliberate inaction that made the final confrontation both inevitable and morally ambiguous.</p>`,
  },
];
