const SECTIONS_1_10 = [
  {
    id: 1,
    title: "The Official's Warning",
    lines: [
      { zh: "大夫曰：「吾以賢良為少愈，乃反其幽明，若胡車相隨而鳴。諸生獨不見季夏之螇乎？音聲入耳，秋至而聲無。者生無易由言，不顧其患，患至而後默，晚矣。」", indent: false },
    ],
    en: [
      { text: "The Grandee said: \"I had supposed the Worthies' condition was improving somewhat, yet they have reversed light and dark, like Hu barbarian carts following one another and clamoring. Have you scholars not seen the cicadas of late summer? Their sound fills the ear, but when autumn comes, their voices vanish. Those who live carelessly by words, heedless of disaster—who fall silent only after calamity arrives—it is too late.\"", indent: false },
    ],
    words: [
      { form: "大夫", pinyin: "dàfū", pos: "noun", cls: "w-noun", info: "The Grandee — the government representative in the Salt and Iron Debates. Historically identified with Sang Hongyang (桑弘羊), the architect of Emperor Wu's state monopoly policies.", gloss: "grandee; senior official" },
      { form: "賢良", pinyin: "xiánliáng", pos: "noun", cls: "w-noun", info: "The Worthies — Confucian-leaning scholars selected from the provinces to advise the court. They represent the opposition voice, advocating for reduced government intervention and a return to moral governance.", gloss: "worthy men; virtuous scholars" },
      { form: "愈", pinyin: "yù", pos: "verb", cls: "w-verb", info: "To recover, to improve. Here 少愈 = 'somewhat improved.' The Grandee sarcastically suggests the scholars' arguments were getting better, only to reverse course.", gloss: "to improve; to recover" },
      { form: "幽明", pinyin: "yōumíng", pos: "noun", cls: "w-noun", info: "Darkness and light — here metaphorically: clarity and confusion. 反其幽明 = 'reversed their dark and light,' i.e., confused right and wrong.", gloss: "dark and light; clarity and confusion" },
      { form: "胡車", pinyin: "húchē", pos: "noun", cls: "w-noun", info: "Hu barbarian carts — wheeled vehicles from the northern steppe peoples (匈奴 Xiongnu and others). Known for their characteristic creaking noise in a caravan. The simile implies noisy, meaningless repetition.", gloss: "barbarian carts" },
      { form: "螇", pinyin: "xī", pos: "noun", cls: "w-noun", info: "Cicada (蟬). The cicada is a classical metaphor for transience: it sings loudly in summer and dies in autumn. The Grandee warns that the scholars' eloquence will meet the same fate.", gloss: "cicada" },
    ],
    grammar: `<p><b>吾以賢良為少愈</b> — 以 A 為 B: "I took A to be B," a common construction for stating an assumption. 少愈 = "somewhat improved."</p>
<p><b>乃反其幽明</b> — 乃 marks an unexpected turn: "yet instead they reversed..." 反 here is a verb meaning "to reverse."</p>
<p><b>若胡車相隨而鳴</b> — 若 introduces a simile: "as if." 相隨 = "following one another." 而 connects the two actions (following + making noise).</p>
<p><b>者生無易由言</b> — A difficult passage. 者 = "those who." 無易由言 = "carelessly live by words" (i.e., talk without regard for consequences).</p>`,
    context: `<p>This is the opening of Chapter 29 (散不足) of the <b>Yantie Lun</b> (鹽鐵論, <i>Discourses on Salt and Iron</i>), compiled by Huan Kuan (桓寬) based on records of a court debate held in <b>81 BCE</b> during the reign of Emperor Zhao of Han (漢昭帝).</p>
<p>The debate pitted <b>government officials</b> (大夫, led by Sang Hongyang 桑弘羊) defending Emperor Wu's state monopoly policies (salt, iron, liquor) against <b>Confucian scholars</b> (賢良文學) who argued these policies impoverished the people and corrupted public morality.</p>
<p>In this chapter, the debate shifts to the theme of <b>popular extravagance</b> — the scholars will argue that the people's luxurious spending has exceeded all ancient norms, cataloguing excesses in food, clothing, housing, transport, ritual, and burial.</p>`,
    rhetoric: `<p>The Grandee opens with a <b>double insult</b>: (1) a backhanded compliment ("I thought you were improving") immediately reversed, and (2) a comparison to barbarian carts — associating the scholars' arguments with uncivilized noise.</p>
<p>The <b>cicada metaphor</b> is a veiled threat: like cicadas that sing in summer and perish in autumn, the scholars' words are impressive but will amount to nothing. This is a power move — reminding the scholars that the government holds authority regardless of their eloquence.</p>`,
    notes: `<p><b>Wang Liqi (王利器《鹽鐵論校注》):</b> Notes that 螇 is a variant of 蟬 (cicada). Some editions read 螗 (táng, a type of mantis), but the cicada reading is preferred for the seasonal metaphor to work.</p>
<p><b>Textual note:</b> 者生無易由言 is one of the most corrupt passages in the text. Various emendations have been proposed; the reading here follows the majority interpretation: "those who live carelessly by words."</p>`,
    translation: `<p><b>Key choices:</b></p>
<ul><li>"Grandee" for 大夫 — preserving the formal, aristocratic register. "Official" is too generic.</li>
<li>"Worthies" for 賢良 — the standard translation in Yantie Lun scholarship (cf. Esson Gale's 1931 translation).</li>
<li>"Hu barbarian carts" — retaining 胡 as "Hu barbarian" rather than simply "northern" to preserve the derogatory tone the Grandee intends.</li></ul>`,
  },
  {
    id: 2,
    title: "The Worthy Man's Riposte",
    lines: [
      { zh: "賢良曰：「孔子讀史記，喟然而歎，傷正德之廢，君臣之危也。", indent: false },
      { zh: "夫賢人君子，以天下為任者也。任大者思遠，思遠者忘近。", indent: false },
      { zh: "誠心閔悼，惻隱加爾，故忠心獨而無累。此詩人所以傷而作，比干、子胥遺身忘禍也。", indent: false },
      { zh: "其惡勞人若斯之急，安能默乎？", indent: false },
      { zh: "《詩》云：『憂心如惔，不敢戲談。』孔子栖栖，疾固也。墨子遑遑，閔世也。」", indent: false },
    ],
    en: [
      { text: "The Worthy Man said: \"When Confucius read the historical records, he sighed deeply, grieving over the abandonment of upright virtue and the peril of ruler and minister.\"", indent: false },
      { text: "\"The worthy man and the gentleman take the world as their charge. Those who bear great responsibilities think far ahead; those who think far ahead forget what lies close at hand.\"", indent: false },
      { text: "\"With sincere hearts they grieve and mourn, moved by compassion for others. Therefore their loyalty stands alone, free of entanglements. This is why the poets grieved and composed, why Bi Gan and Wu Zixu gave up their lives and forgot their own ruin.\"", indent: false },
      { text: "\"When the suffering of the laboring people is this urgent, how could one remain silent?\"", indent: false },
      { text: "\"The Odes say: 'My anxious heart burns as if scorched; I dare not speak in jest.' Confucius was restless because he despised obstinacy. Mozi was agitated because he pitied the world.\"", indent: false },
    ],
    words: [
      { form: "史記", pinyin: "shǐjì", pos: "noun", cls: "w-noun", info: "Historical records — here NOT Sima Qian's work (which came later) but older annalistic records that Confucius reportedly studied. The term predates the famous book.", gloss: "historical records" },
      { form: "喟然", pinyin: "kuìrán", pos: "adv", cls: "w-adv", info: "With a deep sigh. 喟 is an onomatopoeic character for sighing. 然 makes it an adverb. This is a set phrase indicating profound emotional response.", gloss: "with a deep sigh" },
      { form: "閔", pinyin: "mǐn", pos: "verb", cls: "w-verb", info: "To grieve for, to pity. Interchangeable with 憫 (mǐn). Used for compassionate grief over the suffering of others — a Confucian virtue.", gloss: "to grieve; to pity" },
      { form: "惻隱", pinyin: "cèyǐn", pos: "noun", cls: "w-noun", info: "Compassion, sympathetic distress. A key Mencian concept: 惻隱之心 (the heart of compassion) is one of the four moral sprouts (四端 sìduān) that make humans inherently good.", gloss: "compassion; sympathetic distress" },
      { form: "比干", pinyin: "Bǐgān", pos: "proper", cls: "w-proper", info: "Bi Gan — uncle of the last Shang king (紂王 Zhòu Wáng). He remonstrated against the king's tyranny and was executed by having his heart cut out. The archetype of loyal remonstrance unto death.", gloss: "Bi Gan (martyred loyal minister)" },
      { form: "子胥", pinyin: "Zǐxū", pos: "proper", cls: "w-proper", info: "Wu Zixu (伍子胥) — minister of the state of Wu. He warned King Fuchai against sparing the state of Yue, was ignored, and was forced to commit suicide. Another archetype of loyal remonstrance.", gloss: "Wu Zixu (martyred loyal minister)" },
      { form: "惔", pinyin: "tán", pos: "verb", cls: "w-verb", info: "To burn, to scorch. In the Odes quotation, 憂心如惔 = 'an anxious heart as if scorched by fire.' A powerful metaphor for anguished concern.", gloss: "to burn; to scorch" },
      { form: "固", pinyin: "gù", pos: "noun", cls: "w-noun", info: "Obstinacy, stubbornness. 疾固 = 'to despise stubbornness.' Confucius was restless (栖栖 qīqī) because he could not tolerate the world's willful ignorance.", gloss: "obstinacy; stubbornness" },
    ],
    grammar: `<p><b>以天下為任者也</b> — 以 X 為 Y 者也: "one who takes X as Y." The sentence-final 者也 marks a defining statement. This is the scholars' self-definition: they bear responsibility for the whole world.</p>
<p><b>任大者思遠，思遠者忘近</b> — A chain of parallel reasoning using 者 as "one who": great responsibility → far thinking → forgetting the near. The parallelism creates rhetorical momentum.</p>
<p><b>安能默乎？</b> — 安能: "how could one possibly." A rhetorical question expecting the answer "impossible." 乎 is the question particle.</p>
<p><b>孔子栖栖，疾固也。墨子遑遑，閔世也</b> — Two tightly parallel clauses: Subject + reduplicative adverb + causal 也-clause. The reduplicatives (栖栖 = restless, 遑遑 = agitated) are vivid and onomatopoeic.</p>`,
    context: `<p>The Worthy Man's response is a <b>declaration of moral duty</b>. He rejects the Grandee's accusation of empty talk by invoking the most powerful precedents in Chinese intellectual history: Confucius, the classical poets, and martyred ministers who died for their principles.</p>
<p>The invocation of <b>Bi Gan and Wu Zixu</b> is significant: both men spoke truth to tyrannical power and were killed for it. The implication is clear — the scholars are willing to risk the Grandee's displeasure because silence in the face of injustice is a greater failure than any personal consequence.</p>`,
    rhetoric: `<p>The Worthy Man's response is a masterclass in <b>ethos construction</b>. Instead of addressing the Grandee's insults directly, he elevates the discourse to the moral plane:</p>
<ul>
<li><b>Appeal to authority:</b> Confucius, the poets, Bi Gan, Wu Zixu — each example is unassailable</li>
<li><b>Rhetorical question:</b> 安能默乎？ — forces the audience to concede that silence is impossible</li>
<li><b>Self-identification with martyrs:</b> subtly threatens the Grandee by implying that silencing honest critics is what tyrants do</li>
<li><b>Closing with dual example:</b> Confucius (Confucian) + Mozi (Mohist) — showing this is not sectarian but universal moral commitment</li>
</ul>`,
    notes: `<p><b>Wang Liqi:</b> Notes that the Odes quotation is from 《小雅·節南山》(Xiao Ya, Jie Nanshan). The full couplet is 憂心如惔，不敢戲談 — "my anxious heart burns like fire; I dare not speak in jest."</p>
<p>The pairing of Confucius (儒) and Mozi (墨) is unusual — these two schools were often opposed. The scholars deliberately invoke both to claim universal moral ground.</p>`,
    translation: `<p><b>"The world as their charge"</b> for 以天下為任 — "charge" captures the weight of 任 better than "responsibility," which sounds bureaucratic. The scholars see themselves as stewards of civilization, not employees.</p>
<p><b>"Restless"</b> for 栖栖 — literally "perching here and there, unsettled." Confucius wandered from state to state, never finding a ruler willing to implement his vision.</p>`,
  },
  {
    id: 3,
    title: "The Official Falls Silent",
    lines: [
      { zh: "大夫默然。", indent: false },
    ],
    en: [
      { text: "The Grandee fell silent.", indent: false },
    ],
    words: [
      { form: "默然", pinyin: "mòrán", pos: "adv", cls: "w-adv", info: "Silently, in silence. 然 makes it an adverb of manner. This is the same word the Grandee used in his insult about cicadas falling silent — now turned against him.", gloss: "silently; in silence" },
    ],
    grammar: `<p>The shortest possible narrative sentence: subject (大夫) + predicate (默然). No elaboration, no qualification — the silence itself is the statement.</p>`,
    context: `<p>In the conventions of the Yantie Lun, when a debater "falls silent" (默然), it signals a <b>concession of the point</b>. The Grandee cannot rebut the Worthy Man's invocation of Confucius and the martyred ministers.</p>`,
    rhetoric: `<p>This three-character sentence is one of the most devastating rhetorical moments in the text. The Grandee — who just compared the scholars to noisy cicadas that fall silent when autumn comes — has himself been <b>silenced</b>. The irony is exquisite and surely intentional on Huan Kuan's part.</p>
<p>The structural pattern of the Yantie Lun frequently has the Grandee silenced after the scholars' most powerful arguments. This is the compiler's editorial hand: Huan Kuan sympathizes with the Confucian position.</p>`,
    notes: `<p>Some scholars argue that Huan Kuan (桓寬), the compiler, was himself a Confucian sympathizer who shaped the debate record to favor the scholars. The pattern of the Grandee falling silent at key moments is cited as evidence of this editorial bias.</p>`,
    translation: `<p><b>"Fell silent"</b> — English requires a verb of transition ("fell"), while the Chinese simply states the resulting state (默然). The choice of "fell" captures the involuntary quality — the Grandee did not choose to be silent; he was <i>rendered</i> silent.</p>`,
  },
  {
    id: 4,
    title: "The Chancellor Intervenes",
    lines: [
      { zh: "丞相曰：「願聞散不足。」", indent: false },
    ],
    en: [
      { text: "The Chancellor said: \"I would like to hear about the scattering of insufficiency.\"", indent: false },
    ],
    words: [
      { form: "丞相", pinyin: "chéngxiàng", pos: "noun", cls: "w-noun", info: "The Chancellor — the highest civil official under the Emperor, moderating the debate. Historically this was Tian Qianqiu (田千秋). He intervenes to redirect the discussion after the Grandee is silenced.", gloss: "chancellor; prime minister" },
      { form: "散不足", pinyin: "sàn bùzú", pos: "noun", cls: "w-noun", info: "Scattering insufficiency — the chapter title. It refers to the problem of wealth being scattered/wasted on luxuries, leading to insufficiency of resources. The scholars will catalogue how extravagant spending has left the people impoverished.", gloss: "scattering of insufficiency; the dissipation that causes want" },
      { form: "願", pinyin: "yuàn", pos: "verb", cls: "w-verb", info: "To wish, to desire. 願聞 = 'I wish to hear' — a polite formula for requesting someone to speak. The Chancellor diplomatically invites elaboration.", gloss: "to wish; to desire" },
    ],
    grammar: `<p><b>願聞散不足</b> — A simple SVO structure: 願 (wish to) + 聞 (hear) + 散不足 (the scattering of insufficiency). 願聞 is a politeness formula, equivalent to "please tell me about..."</p>`,
    context: `<p>The Chancellor's intervention is structurally crucial: it <b>resets the debate</b> after the Grandee's defeat and opens the floor for the Worthy Man's main argument — a systematic catalogue of how modern extravagance exceeds ancient norms.</p>
<p>The phrase 散不足 becomes the chapter title. It encapsulates the Confucian diagnosis: resources are <b>scattered</b> (散) on luxuries, resulting in <b>insufficiency</b> (不足) for the people's basic needs.</p>`,
    rhetoric: `<p>The Chancellor functions as a <b>moderator</b> figure. His brief intervention serves the narrative structure by transitioning from the preliminary exchange (§1-3) to the substantive argument (§5-38). In debate terms, he calls for the scholars' position paper.</p>`,
    notes: null,
    translation: `<p><b>"Scattering of insufficiency"</b> — this is deliberately literal to preserve the conceptual content of 散不足. Alternative: "the dispersal that causes want" or "how wasteful spending creates poverty." I chose the literal version because the title is a technical term in the debate.</p>`,
  },
  {
    id: 5,
    title: "The Thesis: Desire and Regulation",
    lines: [
      { zh: "賢良曰：「宮室輿馬，衣服器械，喪祭食飲，聲色玩好，人情之所不能已也。", indent: false },
      { zh: "故聖人為之制度以防之。", indent: false },
      { zh: "間者，士大夫務於權利，怠於禮義；故百姓倣傚，頗踰制度。", indent: false },
      { zh: "今故陳之，曰：", indent: false },
    ],
    en: [
      { text: "The Worthy Man said: \"Palaces, carriages and horses, clothing, tools and utensils, funerals, sacrifices, food and drink, music, sensual pleasures, and objects of delight — these are things that human nature cannot cease desiring.\"", indent: false },
      { text: "\"Therefore the sages established regulations and systems to restrain them.\"", indent: false },
      { text: "\"In recent times, officials and gentlemen have devoted themselves to power and profit while neglecting propriety and righteousness. The common people have imitated them and considerably exceeded established regulations.\"", indent: false },
      { text: "\"I shall now lay this out as follows:\"", indent: false },
    ],
    words: [
      { form: "輿馬", pinyin: "yúmǎ", pos: "noun", cls: "w-noun", info: "Carriages and horses — a metonym for transportation and its associated display of wealth. In the Zhou class system, the type of carriage and number of horses indicated social rank.", gloss: "carriages and horses" },
      { form: "器械", pinyin: "qìxiè", pos: "noun", cls: "w-noun", info: "Tools and utensils — broadly, manufactured goods. Covers everything from farming implements to ritual vessels to decorative objects.", gloss: "tools; utensils; implements" },
      { form: "聲色", pinyin: "shēngsè", pos: "noun", cls: "w-noun", info: "Sound and color — a compound meaning music and sensual/visual pleasures. Often carries a connotation of excess and moral dissipation.", gloss: "music and sensual pleasures" },
      { form: "玩好", pinyin: "wánhào", pos: "noun", cls: "w-noun", info: "Objects of delight — things collected or enjoyed for pleasure rather than utility. Luxury goods, curiosities, ornaments.", gloss: "objects of delight; playthings" },
      { form: "已", pinyin: "yǐ", pos: "verb", cls: "w-verb", info: "To cease, to stop. 不能已 = 'cannot cease.' Human desire for material pleasures is presented as an unalterable fact of nature — the question is how to channel it.", gloss: "to cease; to stop" },
      { form: "制度", pinyin: "zhìdù", pos: "noun", cls: "w-noun", info: "Regulations and systems — specifically, the sumptuary laws and ritual prescriptions (禮 lǐ) established by the ancient sage-kings to regulate consumption by social class.", gloss: "regulations; systems; institutions" },
      { form: "間者", pinyin: "jiànzhě", pos: "adv", cls: "w-adv", info: "Recently, in recent times. A temporal marker that shifts from the theoretical (ancient sages) to the contemporary complaint.", gloss: "recently; in recent times" },
      { form: "倣傚", pinyin: "fǎngxiào", pos: "verb", cls: "w-verb", info: "To imitate, to emulate. The common people imitate the elites' luxury — a 'trickle-down' theory of corruption.", gloss: "to imitate; to emulate" },
      { form: "踰", pinyin: "yú", pos: "verb", cls: "w-verb", info: "To exceed, to transgress. 踰制度 = 'exceeded the regulations.' The character implies stepping over a boundary — a violation of proper order.", gloss: "to exceed; to transgress" },
    ],
    grammar: `<p><b>人情之所不能已也</b> — A nominalized clause: 人情 (human nature) + 之 (possessive/structural) + 所不能已 (that which cannot be ceased) + 也 (assertive). The 所…也 construction makes this a definitional statement.</p>
<p><b>故聖人為之制度以防之</b> — 為 (wéi): "established." 之: refers back to the desires. 制度: regulations. 以: "in order to." 防之: "restrain them." Two instances of 之 referring to two different things (desires, then people).</p>
<p><b>今故陳之，曰</b> — 今故 = "now therefore." 陳之 = "lay it out." 曰 introduces what follows. This is a formal transitional formula, like "I shall now proceed to state..."</p>`,
    context: `<p>This paragraph is the <b>thesis statement</b> of the entire chapter. The Worthy Man establishes his framework:</p>
<ol>
<li><b>Premise:</b> desire for material goods is natural and ineradicable</li>
<li><b>Solution:</b> the sages created sumptuary regulations to keep desire within proper bounds</li>
<li><b>Problem:</b> the ruling class itself has abandoned these regulations, and the people have followed</li>
<li><b>Method:</b> what follows is a systematic catalogue of violations</li>
</ol>
<p>The <b>sumptuary law</b> (制度) framework is key: in the Zhou ideal, each social class had prescribed limits on the size of their houses, number of horses, quality of clothing, and elaborateness of rituals. The scholars' argument is that these class boundaries have collapsed.</p>`,
    rhetoric: `<p>The Worthy Man deploys the classic Confucian rhetorical structure: <b>ancient norm → modern deviation → call for restoration</b>. This 古/今 (ancient/modern) contrast will be repeated in every subsequent paragraph.</p>
<p>Note the careful concession: human desire is acknowledged as natural (人情之所不能已). The scholars are not ascetics demanding the elimination of pleasure — they advocate for <b>regulated</b> pleasure. This makes their position harder to attack as impractical.</p>
<p>The blame is placed on the <b>elites first</b> (士大夫務於權利), then the people (百姓倣傚). This is politically shrewd: it deflects potential criticism that the scholars are blaming the common people, instead targeting the very officials they are debating against.</p>`,
    notes: `<p><b>Wang Liqi:</b> Notes that 制度 here specifically refers to the 禮制 (ritual regulations) detailed in the 周禮 (Rites of Zhou) and 禮記 (Record of Rites), which prescribed sumptuary limits by social class.</p>`,
    translation: `<p><b>"Human nature cannot cease desiring"</b> for 人情之所不能已 — I chose "human nature" for 人情 rather than "human feelings" because the argument is about an innate, universal drive, not a temporary emotion. "Cannot cease desiring" captures the relentless, ongoing quality of 不能已.</p>`,
  },
  {
    id: 6,
    title: "Food: Ancient Restraint vs. Modern Excess",
    lines: [
      { zh: "「古者，穀物菜果，不時不食，鳥獸魚鱉，不中殺不食。故徼罔不入於澤，雜毛不取。", indent: false },
      { zh: "今富者逐驅殲罔罝，掩捕麑鷇，耽湎沈酒鋪百川。鮮羔䍮，幾胎肩，皮黃口。春鵝秋鶵，冬葵溫韭，浚茈蓼蘇，豐薷耳菜，毛果蟲貉。", indent: false },
    ],
    en: [
      { text: "\"In antiquity, grains, vegetables, and fruits were not eaten out of season; birds, beasts, fish, and turtles were not killed and eaten unless it was the proper time. Therefore nets did not enter the marshes, and animals with mixed fur were not taken.\"", indent: false },
      { text: "\"Nowadays the wealthy drive out with nets and snares to exterminate indiscriminately, trapping fawns and fledglings, drowning themselves in wine poured like rivers. They eat fresh lamb and suckling kid, calves still in the womb, creatures with skin still yellow and mouths still young. Spring geese and autumn chicks, winter mallows and hothouse leeks, water chestnuts and knotweed and perilla in abundance, ear-mushrooms and sundry greens, hairy fruits and vermin-infested game.\"", indent: false },
    ],
    words: [
      { form: "不時", pinyin: "bùshí", pos: "adv", cls: "w-adv", info: "Out of season — 時 here means 'proper season.' The ancient principle: eat only what is in season. This was both ecological (preserving animal populations) and ritual (respecting natural cycles).", gloss: "out of season" },
      { form: "不中殺", pinyin: "bùzhōng shā", pos: "verb", cls: "w-verb", info: "Not killed at the proper time — 中 (zhōng) means 'hitting the mark' or 'according to regulation.' Animals had designated hunting seasons; killing outside these was a violation of both law and cosmic order.", gloss: "killed outside the regulated season" },
      { form: "徼罔", pinyin: "jiǎo wǎng", pos: "noun", cls: "w-noun", info: "Nets and snares — tools for catching fish and game. 徼 = a fine-meshed net. The ancient prohibition: nets with fine mesh were forbidden because they catch immature fish.", gloss: "nets and snares" },
      { form: "麑", pinyin: "ní", pos: "noun", cls: "w-noun", info: "A fawn — a young deer. Hunting fawns was forbidden under the ancient system because it destroyed the breeding population.", gloss: "fawn; young deer" },
      { form: "鷇", pinyin: "kòu", pos: "noun", cls: "w-noun", info: "A fledgling — a bird too young to fly. Taking fledglings from nests was another prohibited practice.", gloss: "fledgling; nestling" },
      { form: "耽湎", pinyin: "dānmiǎn", pos: "verb", cls: "w-verb", info: "To indulge excessively in drink — both characters mean to be sunk in or addicted to alcohol. A doublet for emphasis.", gloss: "to be sunk in drink" },
    ],
    grammar: `<p><b>不時不食…不中殺不食</b> — Double-negative conditionals: "if not in season, then not eaten; if not killed at the proper time, then not eaten." The repetitive structure creates a rhythm of prohibition.</p>
<p><b>今富者…</b> — The 古/今 pivot. After establishing the ancient norm, 今 (now) introduces the contrast. This structure will repeat in almost every paragraph of the chapter.</p>`,
    context: `<p>The first concrete example in the catalogue. The ancient regulations referenced here derive from texts like the <b>月令 (Yueling, Monthly Ordinances)</b> in the Liji, which prescribed seasonal prohibitions: no hunting in spring (breeding season), no fishing with fine nets, no taking eggs from nests.</p>
<p>These were not merely moral guidelines but practical <b>conservation measures</b> — ancient China's version of wildlife management.</p>`,
    rhetoric: `<p>The catalogue of modern excess reads like a <b>menu from hell</b>: fawns, fledglings, unborn calves, creatures with baby teeth still showing. Every item is chosen to maximize the reader's moral disgust. The scholars are not just listing foods — they are constructing an image of <b>predatory decadence</b> that devours even the unborn.</p>
<p>The phrase 鋪百川 ("pouring wine like a hundred rivers") is hyperbole pushed to absurdity — a hallmark of the Yantie Lun's rhetorical style.</p>`,
    notes: `<p><b>Wang Liqi:</b> 幾胎肩 is a difficult phrase. 幾 may mean "nearly" or be a variant of 饑. 胎肩 = "fetal shoulder" — meat from animals so young they are still in the womb. 皮黃口 = animals with yellow skin/mouths, i.e., newborns.</p>
<p>Many of the specific food items in this passage have uncertain identifications. 毛果蟲貉 ("hairy fruits and insect-infested game") may refer to eating anything available regardless of quality.</p>`,
    translation: `<p><b>"Trapping fawns and fledglings"</b> — I use the specific English zoological terms rather than generic "young animals" to match the specificity of 麑鷇. The Chinese reader would feel the taboo viscerally; the English reader needs the concrete image to achieve the same effect.</p>
<p><b>"Drowning themselves in wine poured like rivers"</b> — a free rendering of 耽湎沈酒鋪百川, combining the metaphor of drowning (沈) with the hyperbole of rivers (百川).</p>`,
  },
  {
    id: 7,
    title: "Housing: From Thatched Roofs to Painted Halls",
    lines: [
      { zh: "「古者，采椽茅茨，陶桴複穴，足禦寒暑、蔽風雨而已。", indent: false },
      { zh: "及其後世，采椽不斲，茅茨不翦，無斲削之事，磨礱之功。大夫達棱楹，士穎首，庶人斧成木構而已。", indent: false },
      { zh: "今富者井幹增梁，雕文檻楯，堊𢆃壁飾。", indent: false },
    ],
    en: [
      { text: "\"In antiquity, rafters were of plain timber and roofs thatched with straw; earthen drums covered sunken dwellings — enough to keep out cold and heat, to shelter from wind and rain, and nothing more.\"", indent: false },
      { text: "\"In later generations, rafters were left unhewn and thatch untrimmed — there was no chiseling, carving, or labor of polishing. Grandees had pillars with smooth edges; gentlemen had pointed roof-caps; commoners built with axe-hewn timber, and that was all.\"", indent: false },
      { text: "\"Nowadays the wealthy raise interlocking beams and multi-storied frameworks, carve ornate railings and balustrades, and plaster and paint their walls with decoration.\"", indent: false },
    ],
    words: [
      { form: "采椽", pinyin: "cǎichuán", pos: "noun", cls: "w-noun", info: "Plain/unfinished rafters — 采 here means 'natural, unworked' (not 'colorful'). The rafters were simply tree branches used as-is. A symbol of primitive simplicity.", gloss: "unfinished rafters" },
      { form: "茅茨", pinyin: "máocí", pos: "noun", cls: "w-noun", info: "Thatched roof — 茅 = cogon grass, 茨 = thatching. The canonical image of ancient simplicity: even the sage-kings Yao and Shun supposedly lived under thatched roofs.", gloss: "thatched roof" },
      { form: "斲", pinyin: "zhuó", pos: "verb", cls: "w-verb", info: "To hew, to carve wood with an axe. 不斲 = left uncarved. The point: ancient construction required no fine craftsmanship.", gloss: "to hew; to carve" },
      { form: "井幹", pinyin: "jǐnggàn", pos: "noun", cls: "w-noun", info: "A 'well-crib' structure — interlocking horizontal beams stacked like the frame of a well, used to build multi-story buildings. An advanced and expensive construction technique.", gloss: "well-crib framework" },
    ],
    grammar: `<p><b>足禦寒暑、蔽風雨而已</b> — 足 (sufficient to) + parallel verb phrases (禦寒暑 / 蔽風雨) + 而已 (and nothing more). The 而已 is crucial: it marks the boundary of sufficiency. Ancient housing was adequate — not comfortable, not beautiful, just adequate.</p>
<p><b>及其後世</b> — "By later generations." The 古/今 structure here actually has THREE stages: (1) deep antiquity, (2) later generations, (3) the present. This three-stage decline narrative is more nuanced than simple ancient/modern contrast.</p>`,
    context: `<p>The <b>three-stage framework</b> used here (deep antiquity → regulated later era → decadent present) is a standard Confucian historical model. Each stage represents increasing deviation from the original simplicity.</p>
<p>The sumptuary distinctions — Grandees get smooth pillars, gentlemen get pointed roof-caps, commoners get axe-hewn timber — illustrate the Zhou <b>class system</b> in architecture. Every building material and technique was prescribed by rank.</p>`,
    rhetoric: `<p>The three-stage structure is more persuasive than a simple binary contrast. By showing that even the "middle period" was restrained (采椽不斲), the modern excesses (雕文檻楯) appear even more extreme. The reader traverses three levels of increasing elaboration, making the final state feel like a runaway escalation.</p>`,
    notes: `<p><b>陶桴複穴:</b> A much-debated phrase. 陶桴 may mean "earthen drums" (a primitive building element) or "pottery tiles." 複穴 = "covered pits," referring to semi-subterranean dwellings common in Neolithic China.</p>
<p><b>Wang Liqi:</b> 堊𢆃壁飾 — 堊 is white lime plaster; 𢆃 is a rare character, possibly a variant of 墐 (to plaster with mud).</p>`,
    translation: `<p><b>"Earthen drums covered sunken dwellings"</b> — a best-guess rendering of 陶桴複穴. The archaeological record confirms that early Chinese dwellings were indeed semi-subterranean (半地穴式). I chose "sunken dwellings" to evoke this accurately.</p>`,
  },
  {
    id: 8,
    title: "Crafts and Entertainment: From Function to Spectacle",
    lines: [
      { zh: "「古者，衣服不中制，器械不中用，不粥於市。", indent: false },
      { zh: "今民間雕琢不中之物，刻畫玩好無用之器。玄黃雜青，五色繡衣，戲弄蒲人雜婦，百獸馬戲鬥虎，唐銻追人，奇蟲胡妲。", indent: false },
    ],
    en: [
      { text: "\"In antiquity, clothing that did not meet regulations and tools that were not fit for use could not be sold in the market.\"", indent: false },
      { text: "\"Nowadays among the common people there are carvings of non-conforming objects and engravings of useless ornamental curiosities. Black and yellow mixed with blue-green, embroidered garments of five colors — puppet shows with straw figures and mixed troupes of women, animal spectacles with horse-riding acrobatics and tiger fights, Tang-ti performers chasing people, exotic insects and Hu-da dances.\"", indent: false },
    ],
    words: [
      { form: "粥", pinyin: "yù", pos: "verb", cls: "w-verb", info: "To sell. An archaic usage — 粥 normally means 'porridge,' but in classical Chinese it is a loan character for 鬻 (yù, to sell). 不粥於市 = 'not sold in the market.'", gloss: "to sell (archaic)" },
      { form: "蒲人", pinyin: "púrén", pos: "noun", cls: "w-noun", info: "Straw/rush figures — puppets made of cattail or rush, used in theatrical performances. An early form of puppet theater.", gloss: "straw figures; puppets" },
      { form: "馬戲", pinyin: "mǎxì", pos: "noun", cls: "w-noun", info: "Horse acrobatics — literally 'horse show.' One of the earliest attestations of this term, which still means 'circus' in modern Chinese. These were equestrian stunts performed for entertainment.", gloss: "horse acrobatics; circus" },
      { form: "鬥虎", pinyin: "dòuhǔ", pos: "noun", cls: "w-noun", info: "Tiger fights — staged combat between tigers or between humans and tigers, a spectacular and dangerous entertainment of the Han dynasty.", gloss: "tiger fighting" },
      { form: "胡妲", pinyin: "húdá", pos: "noun", cls: "w-noun", info: "Hu-da — a type of exotic entertainment or dance from the western regions (胡 = foreign/Central Asian). The exact nature is uncertain; possibly a conjuring act or foreign dance.", gloss: "foreign exotic performance" },
    ],
    grammar: `<p><b>不中制…不中用</b> — 中 (zhōng) functions as "conforming to" or "meeting the standard of." Two parallel negative conditions: not meeting regulations, not meeting the standard of usefulness.</p>
<p><b>不粥於市</b> — The passive construction with 於: "not sold in the market." In the ancient ideal, the market itself was regulated — substandard goods were simply prohibited from sale.</p>`,
    context: `<p>This passage is remarkable for its description of <b>Han-dynasty popular entertainment</b>: puppet shows, animal spectacles, tiger fights, acrobatics, and foreign performances. It provides one of the most detailed glimpses of urban entertainment culture in early imperial China.</p>
<p>The mention of 胡 (Hu/foreign) performers reflects the cosmopolitan nature of Han dynasty cities, where Central Asian entertainers were a common sight — particularly after Zhang Qian's 張騫 missions opened the Silk Road.</p>`,
    rhetoric: `<p>The list is constructed for maximum sensory overload: colors (玄黃雜青), textures (五色繡衣), sounds and spectacles (馬戲鬥虎). The reader is meant to feel dizzy with excess. Each item is more exotic and extravagant than the last, building to the truly alien (奇蟲胡妲).</p>`,
    notes: `<p><b>唐銻追人:</b> Extremely uncertain. 唐銻 may be a type of performer or performance. Wang Liqi tentatively reads it as a type of chase-performance where actors pursue audience members — a form of immersive theater.</p>`,
    translation: `<p><b>"Puppet shows with straw figures and mixed troupes of women"</b> — 戲弄蒲人雜婦 is ambiguous. I take 蒲人 as puppets and 雜婦 as troupes of women performers. Others read 雜婦 as "promiscuous women," but "mixed troupes" preserves the ambiguity.</p>
<p>Several items in this list resist confident translation. I have tried to be honest about uncertainty rather than presenting a false clarity.</p>`,
  },
  {
    id: 9,
    title: "Horses and Carriages: From Labor to Display",
    lines: [
      { zh: "「古者，諸侯不秣馬，天子有命，以車就牧。庶人之乘馬者，足以代其勞而已。故行則服桅，止則就犁。", indent: false },
      { zh: "今富者連車列騎，驂貳輜軿。中者微輿短轂，繁髦掌蹄。夫一馬伏櫪，當中家六口之食，亡丁男一人之事。", indent: false },
    ],
    en: [
      { text: "\"In antiquity, feudal lords did not stable-feed their horses; only when the Son of Heaven issued a command did they bring carriages to the pastures. Commoners who rode horses did so merely to replace their own labor, and nothing more. When traveling, the horse bore the yoke; when halting, it returned to the plow.\"", indent: false },
      { text: "\"Nowadays the wealthy travel in trains of carriages and rows of riders, with spare teams and covered wagons. Even those of moderate means have small carriages with short axles, their horses decked with ornamental manes and hoofed with iron shoes. A single horse kept in its stable consumes the food of six members of a middling household, and displaces the labor of one able-bodied man.\"", indent: false },
    ],
    words: [
      { form: "秣", pinyin: "mò", pos: "verb", cls: "w-verb", info: "To stable-feed — to feed horses with grain in a stable, as opposed to letting them graze. Grain-fed horses were an expensive luxury. 不秣馬 means even lords did not keep grain-fed horses in peacetime.", gloss: "to stable-feed (horses)" },
      { form: "輜軿", pinyin: "zīpíng", pos: "noun", cls: "w-noun", info: "Covered wagons — 輜 is a supply/baggage wagon, 軿 is an enclosed carriage (often for women). Together they suggest an elaborate retinue.", gloss: "covered wagons; carriages" },
      { form: "驂貳", pinyin: "cāněr", pos: "noun", cls: "w-noun", info: "Spare/flanking horses — 驂 is a flanking horse (in a four-horse team, the outer pair), 貳 is a spare/backup. Having extra horses was pure luxury.", gloss: "flanking and spare horses" },
      { form: "伏櫪", pinyin: "fúlì", pos: "verb", cls: "w-verb", info: "To lie at the manger — a horse kept in the stable, fed but not worked. Later made famous by Cao Cao's poem: 老驥伏櫪 ('an old steed at the manger still dreams of galloping a thousand miles').", gloss: "to lie at the manger; to be stabled" },
      { form: "丁男", pinyin: "dīngnán", pos: "noun", cls: "w-noun", info: "An able-bodied man — a male of working age who can perform corvée labor or farm work. In Han tax terms, a 丁 was a male between 15-56 liable for labor service.", gloss: "able-bodied man" },
    ],
    grammar: `<p><b>一馬伏櫪，當中家六口之食，亡丁男一人之事</b> — A devastating economic calculation compressed into one sentence: one horse = six people's food = one man's labor. The parallel structure (當…亡…) makes the equation inescapable.</p>
<p><b>足以代其勞而已</b> — 足以 (sufficient to) + 代其勞 (replace their labor) + 而已 (and nothing more). Again, 而已 draws the line: horses were tools, not status symbols.</p>`,
    context: `<p>The economic argument here is pointed: in a society where most families hovered near subsistence, keeping an idle horse was an outrageous misallocation of resources. The calculation — one horse eats the food of six people — is one of the most cited statistics in the Yantie Lun.</p>
<p>The Han dynasty saw a massive expansion of horse culture, driven by military needs (cavalry warfare against the Xiongnu) but also by elite status competition. The government maintained enormous horse herds, and private horse-keeping became a marker of wealth.</p>`,
    rhetoric: `<p>The Worthy Man moves from moral argument to <b>economic calculation</b> — a shift from ethos to logos. The equation "one horse = six mouths" is devastating because it is concrete and inarguable. The abstraction of "extravagance" becomes a tangible theft from hungry families.</p>`,
    notes: `<p><b>繁髦掌蹄:</b> Decorative horse-trappings. 繁髦 = ornamental mane decorations; 掌蹄 = iron horseshoes or hoof-guards. These details show the extent of equestrian luxury.</p>`,
    translation: `<p><b>"Displaces the labor of one able-bodied man"</b> for 亡丁男一人之事 — 亡 here means "to lose/waste." The horse doesn't work but still needs a groom, so it both consumes food AND wastes labor. I use "displaces" to capture this double cost.</p>`,
  },
  {
    id: 10,
    title: "Clothing: From Hemp to Silk and Brocade",
    lines: [
      { zh: "「古者，庶人耋老而後衣絲，其餘則麻枲而已，故命曰布衣。", indent: false },
      { zh: "及其後，則絲裏枲表，直領無褘，袍合不緣。夫羅紈文繡者，人君后妃之服也。繭紬縑練者，婚姻之嘉飾也。是以文繒薄織，不粥於市。", indent: false },
      { zh: "今富者縟繡羅紈，中者素綈冰錦。常民而被后妃之服，褻人而居婚姻之飾。夫紈素之賈倍縑，縑之用倍紈也。", indent: false },
    ],
    en: [
      { text: "\"In antiquity, commoners wore silk only after reaching old age; the rest wore nothing but hemp and flax. Hence the term 'cloth-clad' for a commoner.\"", indent: false },
      { text: "\"In later times, people wore silk on the inside with hemp on the outside; collars were straight and without ornamental folds, and padded robes were unbordered. Gauze, fine silk, and embroidered fabrics were the attire of emperors and empresses. Pongee, taffeta, and bleached silk were the fine adornments of marriage ceremonies. Therefore patterned silks and sheer-woven cloth were not sold in the market.\"", indent: false },
      { text: "\"Nowadays the wealthy wear lavish embroidery, gauze, and fine silk; those of moderate means wear plain damask and ice-bright brocade. Ordinary people don the garments of empresses; men of no rank sport the adornments reserved for weddings. The price of fine silk is double that of taffeta, yet the consumption of taffeta is double that of fine silk.\"", indent: false },
    ],
    words: [
      { form: "耋老", pinyin: "diélǎo", pos: "noun", cls: "w-noun", info: "Extreme old age — 耋 means seventy or eighty years old. Only at this age could commoners wear silk. This was not poverty but regulation: silk was reserved for the elderly as a mark of respect.", gloss: "advanced old age (70-80)" },
      { form: "布衣", pinyin: "bùyī", pos: "noun", cls: "w-noun", info: "Cloth-clad — literally 'hemp clothing.' This became the standard term for a commoner (as opposed to an official). When someone says 布衣 in Chinese literature, they mean an ordinary person of no rank.", gloss: "cloth-clad; commoner" },
      { form: "麻枲", pinyin: "máxǐ", pos: "noun", cls: "w-noun", info: "Hemp and flax — the coarse plant fibers worn by commoners. Both are rough, undyed fabrics, far inferior to silk in comfort and appearance.", gloss: "hemp and flax" },
      { form: "羅紈", pinyin: "luówán", pos: "noun", cls: "w-noun", info: "Gauze and fine silk — the lightest, most luxurious fabrics. 羅 is an open-weave gauze; 紈 is a smooth, fine white silk. Reserved for the imperial family.", gloss: "gauze and fine silk" },
      { form: "縑", pinyin: "jiān", pos: "noun", cls: "w-noun", info: "Taffeta / double-threaded silk — a medium-grade silk fabric. In the Han dynasty, bolts of 縑 were used as currency and for tax payments.", gloss: "taffeta; double-threaded silk" },
      { form: "賈", pinyin: "jià", pos: "noun", cls: "w-noun", info: "Price, value. Here 紈素之賈倍縑 = 'the price of fine silk is double that of taffeta.' 賈 is the archaic form of 價.", gloss: "price; value" },
    ],
    grammar: `<p><b>故命曰布衣</b> — 命曰 = "is termed / is called." A naming-etymology: the term 布衣 (commoner) derives from the fact that commoners could only wear cloth (布), not silk.</p>
<p><b>常民而被后妃之服，褻人而居婚姻之飾</b> — Parallel indictments using 而 as a concessive connector: "ordinary people yet wearing empress's robes; lowly men yet sporting wedding finery." The 而 creates a sense of violation: these combinations should not exist.</p>
<p><b>夫紈素之賈倍縑，縑之用倍紈也</b> — An economic paradox: fine silk costs double taffeta, yet taffeta is consumed at double the rate. This means the total expenditure on textiles is enormous at every level.</p>`,
    context: `<p>The <b>textile hierarchy</b> was one of the most strictly enforced aspects of Zhou/Han sumptuary law. Fabrics encoded social status as visibly as modern luxury brands: hemp → coarse silk → fine silk → embroidered gauze → imperial fabrics. Wearing above one's station was a punishable offense.</p>
<p>The etymology of 布衣 is significant: the very word for "commoner" in Chinese is defined by what they wore. When this barrier breaks down (commoners wearing silk), the entire class system is threatened.</p>`,
    rhetoric: `<p>The key rhetorical move is the <b>inversion of categories</b>: empress-clothes on commoners, wedding-finery on nobodies. This is not just about fabric — it's about the <b>collapse of social legibility</b>. If anyone can wear anything, how does one know who is who? For Confucians, this illegibility is the root of social disorder.</p>`,
    notes: `<p><b>冰錦 (bīngjǐn):</b> "Ice brocade" — a type of sheer, gleaming brocade. The name suggests a cold, crystalline luster. The exact technique is uncertain.</p>
<p><b>Wang Liqi:</b> The final economic observation (紈素之賈倍縑，縑之用倍紈) shows the scholars had a surprisingly sophisticated understanding of price elasticity: cheaper goods may have higher total consumption.</p>`,
    translation: `<p><b>"Ice-bright brocade"</b> for 冰錦 — a somewhat speculative rendering. The name clearly evokes a visual quality (ice-like sheen), and I want the English reader to sense the luxury of the fabric.</p>
<p><b>"Cloth-clad"</b> for 布衣 — I keep this literal rather than using the conventional "commoner" because the etymology is the point of this passage.</p>`,
  },
];
