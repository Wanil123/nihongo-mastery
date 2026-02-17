// ============================================================================
// JAPANESE PARTICLES (助詞（じょし）) - Complete Guide & Quiz Data
// Covers all essential particles for beginner to intermediate learners
// ============================================================================

// ----------------------------------------------------------------------------
// INTRODUCTION
// ----------------------------------------------------------------------------

export const particleIntro = {
  title: "Particles (助詞（じょし）) - The Building Blocks of Japanese",
  description:
    "Particles (助詞（じょし）, joshi) are small words that follow nouns, verbs, or phrases to indicate their grammatical role in a sentence. Unlike English, which relies heavily on word order to convey meaning, Japanese uses particles to mark the subject, object, destination, location, and many other relationships between words. Think of particles as signposts that tell you how each word connects to the rest of the sentence. Mastering particles is one of the most important steps in learning Japanese, because even a single wrong particle can completely change the meaning of a sentence. Most particles are written in hiragana and are typically one or two characters long. Some particles, like は and へ, are pronounced differently from their standard hiragana readings when used as particles. While there are dozens of particles in Japanese, learning the core set covered here will allow you to understand and construct the vast majority of everyday sentences.",
  tips: [
    "Particles always come AFTER the word they mark, never before. For example: 東京（とうきょう）に (Tōkyō ni) — 'to Tokyo', where に marks Tokyo as the destination.",
    "The particle は is written with the hiragana は (ha) but is always pronounced 'wa' when used as the topic marker. Similarly, the particle へ (he) is pronounced 'e' when marking direction.",
    "When you are unsure which particle to use, try breaking the sentence into 'who does what, where, when, and how' — each of those roles has a corresponding particle.",
    "Pay close attention to the difference between は (topic) and が (subject). は highlights what you are talking about, while が identifies or emphasizes the specific subject. This distinction is subtle and takes time to master.",
    "Particles can stack or combine. For example, には (ni wa) combines the destination/location particle に with the topic marker は to mean 'as for (at/in that place)...'.",
    "Practice particles in full sentences rather than in isolation. Reading and listening to natural Japanese will help you develop an intuitive feel for which particle fits where."
  ]
};

// ----------------------------------------------------------------------------
// PARTICLE LIST — Detailed explanations for each major particle
// ----------------------------------------------------------------------------

export const particleList = [
  {
    particle: "は",
    name: "は (wa)",
    function: "Topic marker",
    explanation:
      "は marks the topic of the sentence — the thing you are talking about. It sets the stage by telling the listener what the sentence is going to be about. は does not necessarily indicate the grammatical subject; rather, it frames the conversation. It is written with the hiragana は (ha) but always pronounced 'wa' when used as a particle.",
    examples: [
      { jp: "わたしは学生（がくせい）です。", rm: "Watashi wa gakusei desu.", en: "I am a student." },
      { jp: "今日（きょう）は天気（てんき）がいいですね。", rm: "Kyou wa tenki ga ii desu ne.", en: "The weather is nice today, isn't it?" },
      { jp: "日本語（にほんご）はおもしろいです。", rm: "Nihongo wa omoshiroi desu.", en: "Japanese is interesting." },
      { jp: "この本（ほん）はわたしのです。", rm: "Kono hon wa watashi no desu.", en: "This book is mine." }
    ],
    commonMistakes: "Beginners often confuse は with が. Remember that は marks what you are talking about (old/known information), while が introduces or emphasizes the subject (new information). Also, do not pronounce it as 'ha' — as a particle, it is always 'wa'."
  },
  {
    particle: "が",
    name: "が (ga)",
    function: "Subject marker",
    explanation:
      "が marks the grammatical subject of a sentence, especially when introducing new information, emphasizing who or what performs the action, or answering a 'who/what' question. It is also required after the subject in certain grammatical structures, such as with adjectives of desire (ほしい, ～たい) and ability (わかる, できる).",
    examples: [
      { jp: "だれが来（き）ましたか。", rm: "Dare ga kimashita ka.", en: "Who came?" },
      { jp: "猫（ねこ）がいます。", rm: "Neko ga imasu.", en: "There is a cat." },
      { jp: "わたしはコーヒーが好（す）きです。", rm: "Watashi wa koohii ga suki desu.", en: "I like coffee." },
      { jp: "雨（あめ）が降（ふ）っています。", rm: "Ame ga futte imasu.", en: "It is raining." }
    ],
    commonMistakes: "Learners tend to overuse が where は would be more natural. Use が when identifying something specific ('Who did it? — 田中（たなか）さん が did it') or with expressions of ability, desire, and existence. Use は when simply talking about a known topic."
  },
  {
    particle: "を",
    name: "を (wo)",
    function: "Direct object marker",
    explanation:
      "を marks the direct object of a transitive verb — the thing that receives the action. It is written with the hiragana を (wo) but is usually pronounced 'o' in modern Japanese. This is one of the most straightforward particles: whatever comes before を is what is being acted upon by the verb.",
    examples: [
      { jp: "パンを食（た）べます。", rm: "Pan o tabemasu.", en: "I eat bread." },
      { jp: "本（ほん）を読（よ）みます。", rm: "Hon o yomimasu.", en: "I read a book." },
      { jp: "日本語（にほんご）を勉強（べんきょう）しています。", rm: "Nihongo o benkyou shite imasu.", en: "I am studying Japanese." },
      { jp: "写真（しゃしん）を撮（と）りました。", rm: "Shashin o torimashita.", en: "I took a photo." }
    ],
    commonMistakes: "を is only used with transitive verbs (verbs that take an object). You cannot use を with intransitive verbs. For example, 'ドアが開（あ）く' (the door opens) uses が, not を, because 開（あ）く here is intransitive."
  },
  {
    particle: "に",
    name: "に (ni)",
    function: "Destination / Time / Location of existence / Indirect object",
    explanation:
      "に is one of the most versatile particles. It marks the destination of movement ('to'), a specific point in time ('at/on'), the location where something or someone exists (with いる/ある), and the indirect object or target of an action. Because of its many uses, に appears in almost every Japanese sentence at some point.",
    examples: [
      { jp: "学校（がっこう）に行（い）きます。", rm: "Gakkou ni ikimasu.", en: "I go to school." },
      { jp: "七時（しちじ）に起（お）きます。", rm: "Shichi-ji ni okimasu.", en: "I wake up at seven o'clock." },
      { jp: "公園（こうえん）に猫（ねこ）がいます。", rm: "Kouen ni neko ga imasu.", en: "There is a cat in the park." },
      { jp: "友達（ともだち）にプレゼントをあげます。", rm: "Tomodachi ni purezento o agemasu.", en: "I give a present to my friend." }
    ],
    commonMistakes: "A common mistake is confusing に with で for locations. Use に for the location where something EXISTS (いる/ある), and で for the location where an ACTION takes place. For example: 図書館（としょかん）に本（ほん）がある (the book exists in the library) vs. 図書館（としょかん）で本（ほん）を読（よ）む (I read a book at the library)."
  },
  {
    particle: "で",
    name: "で (de)",
    function: "Location of action / Means / Reason",
    explanation:
      "で marks the place where an action occurs, the means or tool used to do something, or the reason/cause for something. It answers questions like 'where did you do it?', 'how did you do it?', and 'why?'. Unlike に, which indicates a static point, で implies active engagement at a location or with a method.",
    examples: [
      { jp: "レストランで食（た）べます。", rm: "Resutoran de tabemasu.", en: "I eat at a restaurant." },
      { jp: "バスで学校（がっこう）に行（い）きます。", rm: "Basu de gakkou ni ikimasu.", en: "I go to school by bus." },
      { jp: "日本語（にほんご）で話（はな）してください。", rm: "Nihongo de hanashite kudasai.", en: "Please speak in Japanese." },
      { jp: "病気（びょうき）で学校（がっこう）を休（やす）みました。", rm: "Byouki de gakkou o yasumimashita.", en: "I was absent from school because of illness." }
    ],
    commonMistakes: "Mixing up で and に is very common. Remember: で is for the place where you DO something (action location), while に is for the place where something IS (existence location). If the verb describes movement or existence, use に. If it describes an activity, use で."
  },
  {
    particle: "へ",
    name: "へ (e)",
    function: "Direction of movement",
    explanation:
      "へ indicates the direction of movement and is similar to に when expressing a destination. However, へ emphasizes the direction or orientation ('toward'), while に emphasizes the arrival point ('to'). It is written with the hiragana へ (he) but pronounced 'e' when used as a particle. In many contexts, へ and に are interchangeable for destination.",
    examples: [
      { jp: "日本（にほん）へ行（い）きたいです。", rm: "Nihon e ikitai desu.", en: "I want to go to Japan." },
      { jp: "東京（とうきょう）へようこそ。", rm: "Toukyou e youkoso.", en: "Welcome to Tokyo." },
      { jp: "駅（えき）へ歩（ある）いて行（い）きます。", rm: "Eki e aruite ikimasu.", en: "I walk toward the station." }
    ],
    commonMistakes: "Do not pronounce へ as 'he' when it is a particle — it is always 'e'. Also, while へ and に are often interchangeable for destinations, only に can be used for time expressions and indirect objects. へ is limited to direction."
  },
  {
    particle: "と",
    name: "と (to)",
    function: "And (exhaustive listing) / With / Quotation",
    explanation:
      "と has several important uses. It connects nouns in an exhaustive list ('A and B', implying nothing else). It marks a companion ('with someone'). It also introduces quoted speech or thoughts ('he said that...'). When listing with と, every item in the list is stated — unlike や, which implies there are more items.",
    examples: [
      { jp: "犬（いぬ）と猫（ねこ）が好（す）きです。", rm: "Inu to neko ga suki desu.", en: "I like dogs and cats." },
      { jp: "友達（ともだち）と映画（えいが）を見（み）ました。", rm: "Tomodachi to eiga o mimashita.", en: "I watched a movie with a friend." },
      { jp: "先生（せんせい）は「勉強（べんきょう）してください」と言（い）いました。", rm: "Sensei wa 'benkyou shite kudasai' to iimashita.", en: "The teacher said, 'Please study.'" },
      { jp: "コーヒーと紅茶（こうちゃ）、どちらがいいですか。", rm: "Koohii to koucha, dochira ga ii desu ka.", en: "Coffee and tea — which do you prefer?" }
    ],
    commonMistakes: "When listing items, do not confuse と with や. と gives a complete list (A and B, and that is all), while や gives an incomplete list (A and B, among others). Using the wrong one changes the meaning."
  },
  {
    particle: "も",
    name: "も (mo)",
    function: "Also / Too / Even",
    explanation:
      "も replaces は, が, or を to mean 'also', 'too', or 'even'. It indicates that the same statement applies to an additional item. When using も, you drop the particle it replaces — you never say はも or がも. In negative sentences, も can mean 'not... either' or 'nothing/nobody' when combined with question words.",
    examples: [
      { jp: "わたしも学生（がくせい）です。", rm: "Watashi mo gakusei desu.", en: "I am also a student." },
      { jp: "これも買（か）います。", rm: "Kore mo kaimasu.", en: "I will buy this too." },
      { jp: "何（なに）も食（た）べませんでした。", rm: "Nani mo tabemasen deshita.", en: "I did not eat anything." },
      { jp: "東京（とうきょう）も大阪（おおさか）も行（い）きました。", rm: "Toukyou mo Oosaka mo ikimashita.", en: "I went to both Tokyo and Osaka." }
    ],
    commonMistakes: "A frequent error is stacking particles, like writing はも or をも. も replaces these particles entirely. Write 'わたしも' not 'わたしはも'. However, も can follow some particles like にも and でも."
  },
  {
    particle: "の",
    name: "の (no)",
    function: "Possession / Noun modification / Nominalization",
    explanation:
      "の connects two nouns, most commonly to show possession ('my', 'your', 'Tanaka's'), but also for apposition, description, and turning phrases into noun clauses. It functions much like the English apostrophe-s ('s) or the word 'of'. At the end of a sentence, の can soften a question or serve as an informal explanation (especially in casual speech).",
    examples: [
      { jp: "わたしの本（ほん）です。", rm: "Watashi no hon desu.", en: "It is my book." },
      { jp: "日本語（にほんご）の先生（せんせい）はだれですか。", rm: "Nihongo no sensei wa dare desu ka.", en: "Who is the Japanese teacher?" },
      { jp: "赤（あか）いのをください。", rm: "Akai no o kudasai.", en: "Please give me the red one." },
      { jp: "昨日（きのう）買（か）ったのはこれです。", rm: "Kinou katta no wa kore desu.", en: "The one I bought yesterday is this." }
    ],
    commonMistakes: "Learners sometimes overuse の by chaining too many together (e.g., 'わたしの友達（ともだち）の大学（だいがく）の先生（せんせい）の本（ほん）'). While grammatically possible, long の chains sound awkward. Also, do not confuse の as a possessive marker with its use as a sentence-ending particle (casual question or explanation)."
  },
  {
    particle: "から",
    name: "から (kara)",
    function: "From (origin in time or space) / Because",
    explanation:
      "から indicates a starting point in time or space ('from'), or a reason/cause ('because'). When used for time, it marks when something begins. When used for place, it marks where someone or something comes from. When placed after a verb or adjective clause, it means 'because' or 'since', giving the reason for the main clause.",
    examples: [
      { jp: "九時（くじ）から五時（ごじ）まで働（はたら）きます。", rm: "Ku-ji kara go-ji made hatarakimasu.", en: "I work from nine to five." },
      { jp: "東京（とうきょう）から来（き）ました。", rm: "Toukyou kara kimashita.", en: "I came from Tokyo." },
      { jp: "暑（あつ）いですから、窓（まど）を開（あ）けてください。", rm: "Atsui desu kara, mado o akete kudasai.", en: "Because it is hot, please open the window." },
      { jp: "ここから駅（えき）まで歩（ある）いて十分（じゅっぷん）です。", rm: "Koko kara eki made aruite juppun desu.", en: "It is a ten-minute walk from here to the station." }
    ],
    commonMistakes: "When using から as 'because', make sure the reason clause comes first, followed by the result. In polite speech, use ですから or ますから. Do not confuse から (from/because) with なので or ので, which are softer alternatives for giving reasons."
  },
  {
    particle: "まで",
    name: "まで (made)",
    function: "Until / Up to / As far as",
    explanation:
      "まで indicates an endpoint in time or space — 'until', 'up to', or 'as far as'. It is the natural partner of から (from). Together, から...まで expresses a range ('from A to B'). まで can be used with time expressions, locations, and even abstract concepts to show the extent or limit of something.",
    examples: [
      { jp: "五時（ごじ）まで待（ま）ってください。", rm: "Go-ji made matte kudasai.", en: "Please wait until five o'clock." },
      { jp: "東京（とうきょう）から大阪（おおさか）まで新幹線（しんかんせん）で行（い）きます。", rm: "Toukyou kara Oosaka made shinkansen de ikimasu.", en: "I go from Tokyo to Osaka by bullet train." },
      { jp: "月曜日（げつようび）から金曜日（きんようび）まで学校（がっこう）があります。", rm: "Getsuyoubi kara kinyoubi made gakkou ga arimasu.", en: "There is school from Monday to Friday." }
    ],
    commonMistakes: "Do not confuse まで (until/up to) with に (at a specific time). まで implies a duration or range, while に pinpoints a single moment. For example, '五時（ごじ）に帰（かえ）ります' means 'I return at five', while '五時（ごじ）まで待（ま）ちます' means 'I wait until five'."
  },
  {
    particle: "よ",
    name: "よ (yo)",
    function: "Emphasis / Assertion / Informing the listener",
    explanation:
      "よ is a sentence-ending particle used to assert information, emphasize a point, or inform the listener of something they may not know. It adds a tone of confidence or insistence, as if saying 'I'm telling you!' or 'You know!'. It is common in everyday conversation and can be used in both polite and casual speech.",
    examples: [
      { jp: "この映画（えいが）はおもしろいですよ。", rm: "Kono eiga wa omoshiroi desu yo.", en: "This movie is interesting, you know!" },
      { jp: "もう遅（おそ）いですよ。", rm: "Mou osoi desu yo.", en: "It is already late, you know." },
      { jp: "気（き）をつけてよ！", rm: "Ki o tsukete yo!", en: "Be careful!" }
    ],
    commonMistakes: "Overusing よ can make you sound pushy or condescending. Use it when you genuinely want to inform or emphasize something the listener does not know, not as a filler. In formal situations, use it sparingly."
  },
  {
    particle: "ね",
    name: "ね (ne)",
    function: "Confirmation / Seeking agreement",
    explanation:
      "ね is a sentence-ending particle used to seek agreement or confirmation from the listener — similar to 'right?', 'isn't it?', or 'don't you think?'. It creates a sense of shared understanding and is very common in Japanese conversation. It softens statements and makes them feel more conversational.",
    examples: [
      { jp: "いい天気（てんき）ですね。", rm: "Ii tenki desu ne.", en: "Nice weather, isn't it?" },
      { jp: "この料理（りょうり）はおいしいですね。", rm: "Kono ryouri wa oishii desu ne.", en: "This dish is delicious, isn't it?" },
      { jp: "日本語（にほんご）は難（むずか）しいですね。", rm: "Nihongo wa muzukashii desu ne.", en: "Japanese is difficult, isn't it?" }
    ],
    commonMistakes: "Do not use ね when stating something the listener already clearly knows and agrees with in a way that sounds condescending. Also, ね is for seeking agreement, while よ is for telling someone something new. Mixing them up changes the social nuance."
  },
  {
    particle: "か",
    name: "か (ka)",
    function: "Question marker",
    explanation:
      "か is placed at the end of a sentence to turn it into a question. In polite (です/ます) speech, か replaces the need for a question mark. In casual speech, か can sound blunt or masculine, and rising intonation alone is often used instead. か can also appear within a sentence to mean 'or' between options, or after question words to create indefinite pronouns (だれか = someone, 何（なに）か = something).",
    examples: [
      { jp: "これは何（なん）ですか。", rm: "Kore wa nan desu ka.", en: "What is this?" },
      { jp: "学生（がくせい）ですか。", rm: "Gakusei desu ka.", en: "Are you a student?" },
      { jp: "コーヒーか紅茶（こうちゃ）、どちらがいいですか。", rm: "Koohii ka koucha, dochira ga ii desu ka.", en: "Coffee or tea, which would you prefer?" },
      { jp: "だれか来（き）ましたか。", rm: "Dareka kimashita ka.", en: "Did someone come?" }
    ],
    commonMistakes: "In casual speech, ending a statement with か can sound interrogative or even rude depending on tone. Women and younger speakers often use rising intonation instead of か in casual conversation. In polite speech, か is always appropriate."
  },
  {
    particle: "や",
    name: "や (ya)",
    function: "Non-exhaustive listing (and, etc.)",
    explanation:
      "や connects nouns in a non-exhaustive list, meaning 'things like A and B (among others)'. Unlike と, which lists items completely, や implies that there are more items not mentioned. It is often followed by など (nado, meaning 'etc.') to reinforce the idea that the list is incomplete.",
    examples: [
      { jp: "りんごやバナナを買（か）いました。", rm: "Ringo ya banana o kaimashita.", en: "I bought things like apples and bananas (and other things)." },
      { jp: "本（ほん）やノートなどがあります。", rm: "Hon ya nooto nado ga arimasu.", en: "There are things like books and notebooks, etc." },
      { jp: "週末（しゅうまつ）は映画（えいが）や買（か）い物（もの）をします。", rm: "Shuumatsu wa eiga ya kaimono o shimasu.", en: "On weekends I do things like watching movies and shopping." }
    ],
    commonMistakes: "Do not confuse や with と. と means 'A and B (and nothing else)', while や means 'A and B (and possibly more)'. If you want to list everything, use と. If the list is just representative examples, use や."
  }
];

// ----------------------------------------------------------------------------
// QUIZZES
// ----------------------------------------------------------------------------

export const particleQuizzes = [
  // ==========================================================================
  // QUIZ 1 — Choose the correct particle (fill in the blank)
  // ==========================================================================
  {
    title: "Choose the Correct Particle",
    type: "fill-in",
    questions: [
      {
        instruction: "Fill in the blank with the correct particle.",
        word: "わたし___学生（がくせい）です。",
        answer: "は",
        options: ["は", "が", "を", "に"]
      },
      {
        instruction: "Fill in the blank with the correct particle.",
        word: "パン___食（た）べます。",
        answer: "を",
        options: ["を", "が", "は", "で"]
      },
      {
        instruction: "Fill in the blank with the correct particle.",
        word: "学校（がっこう）___行（い）きます。",
        answer: "に",
        options: ["に", "を", "で", "が"]
      },
      {
        instruction: "Fill in the blank with the correct particle.",
        word: "レストラン___ご飯（はん）を食（た）べます。",
        answer: "で",
        options: ["で", "に", "を", "は"]
      },
      {
        instruction: "Fill in the blank with the correct particle.",
        word: "わたし___本（ほん）です。",
        answer: "の",
        options: ["の", "は", "が", "を"]
      },
      {
        instruction: "Fill in the blank with the correct particle.",
        word: "友達（ともだち）___映画（えいが）を見（み）ました。",
        answer: "と",
        options: ["と", "は", "を", "に"]
      },
      {
        instruction: "Fill in the blank with the correct particle.",
        word: "東京（とうきょう）___来（き）ました。",
        answer: "から",
        options: ["から", "まで", "に", "で"]
      },
      {
        instruction: "Fill in the blank with the correct particle.",
        word: "五時（ごじ）___待（ま）ってください。",
        answer: "まで",
        options: ["まで", "から", "に", "で"]
      },
      {
        instruction: "Fill in the blank with the correct particle.",
        word: "わたし___行（い）きます。",
        answer: "も",
        options: ["も", "は", "が", "を"]
      },
      {
        instruction: "Fill in the blank with the correct particle.",
        word: "バス___学校（がっこう）に行（い）きます。",
        answer: "で",
        options: ["で", "に", "を", "は"]
      },
      {
        instruction: "Fill in the blank with the correct particle.",
        word: "だれ___来（き）ましたか。",
        answer: "が",
        options: ["が", "は", "を", "に"]
      },
      {
        instruction: "Fill in the blank with the correct particle.",
        word: "りんご___バナナを買（か）いました。",
        answer: "や",
        options: ["や", "と", "も", "は"]
      },
      {
        instruction: "Fill in the blank with the correct particle.",
        word: "日本（にほん）___行（い）きたいです。",
        answer: "へ",
        options: ["へ", "を", "が", "で"]
      },
      {
        instruction: "Fill in the blank with the correct particle.",
        word: "これは何（なん）です___。",
        answer: "か",
        options: ["か", "ね", "よ", "の"]
      },
      {
        instruction: "Fill in the blank with the correct particle.",
        word: "コーヒー___好（す）きです。",
        answer: "が",
        options: ["が", "を", "は", "の"]
      }
    ]
  },

  // ==========================================================================
  // QUIZ 2 — What does this particle do?
  // ==========================================================================
  {
    title: "What Does This Particle Do?",
    type: "function-identification",
    questions: [
      {
        instruction: "What is the function of the highlighted particle?",
        word: "わたし【は】学生（がくせい）です。",
        answer: "Marks the topic of the sentence",
        options: [
          "Marks the topic of the sentence",
          "Marks the subject performing an action",
          "Marks the direct object",
          "Marks the destination"
        ]
      },
      {
        instruction: "What is the function of the highlighted particle?",
        word: "パン【を】食（た）べます。",
        answer: "Marks the direct object of the verb",
        options: [
          "Marks the direct object of the verb",
          "Marks the location of the action",
          "Marks the topic of the sentence",
          "Marks the means or method"
        ]
      },
      {
        instruction: "What is the function of the highlighted particle?",
        word: "学校（がっこう）【に】行（い）きます。",
        answer: "Marks the destination of movement",
        options: [
          "Marks the destination of movement",
          "Marks the location where an action takes place",
          "Marks the direct object",
          "Marks the direction of movement"
        ]
      },
      {
        instruction: "What is the function of the highlighted particle?",
        word: "レストラン【で】食（た）べます。",
        answer: "Marks the location where an action takes place",
        options: [
          "Marks the location where an action takes place",
          "Marks the destination of movement",
          "Marks the location where something exists",
          "Marks the direct object"
        ]
      },
      {
        instruction: "What is the function of the highlighted particle?",
        word: "わたし【の】本（ほん）です。",
        answer: "Indicates possession",
        options: [
          "Indicates possession",
          "Marks the topic of the sentence",
          "Marks the subject performing an action",
          "Marks an indirect object"
        ]
      },
      {
        instruction: "What is the function of the highlighted particle?",
        word: "友達（ともだち）【と】映画（えいが）を見（み）ました。",
        answer: "Indicates a companion (with)",
        options: [
          "Indicates a companion (with)",
          "Indicates a non-exhaustive list",
          "Marks the direct object",
          "Marks the topic"
        ]
      },
      {
        instruction: "What is the function of the highlighted particle?",
        word: "東京（とうきょう）【から】来（き）ました。",
        answer: "Indicates the starting point (from)",
        options: [
          "Indicates the starting point (from)",
          "Indicates the endpoint (until)",
          "Marks the destination",
          "Marks the location of an action"
        ]
      },
      {
        instruction: "What is the function of the highlighted particle?",
        word: "猫（ねこ）【が】います。",
        answer: "Marks the subject (identifies what exists)",
        options: [
          "Marks the subject (identifies what exists)",
          "Marks the topic of the sentence",
          "Marks the direct object",
          "Indicates possession"
        ]
      },
      {
        instruction: "What is the function of the highlighted particle?",
        word: "いい天気（てんき）です【ね】。",
        answer: "Seeks agreement or confirmation from the listener",
        options: [
          "Seeks agreement or confirmation from the listener",
          "Adds emphasis or asserts new information",
          "Turns the sentence into a question",
          "Marks the end of the sentence"
        ]
      },
      {
        instruction: "What is the function of the highlighted particle?",
        word: "わたし【も】行（い）きます。",
        answer: "Indicates 'also' or 'too'",
        options: [
          "Indicates 'also' or 'too'",
          "Marks the topic of the sentence",
          "Marks the subject performing an action",
          "Marks the direct object"
        ]
      }
    ]
  },

  // ==========================================================================
  // QUIZ 3 — Correct or incorrect?
  // ==========================================================================
  {
    title: "Correct or Incorrect?",
    type: "error-detection",
    questions: [
      {
        instruction: "Is this particle usage correct?",
        word: "わたしは本（ほん）を読（よ）みます。",
        answer: "Correct",
        options: ["Correct", "わたしが本（ほん）を読（よ）みます。", "わたしは本（ほん）が読（よ）みます。", "わたしは本（ほん）に読（よ）みます。"]
      },
      {
        instruction: "Is this particle usage correct?",
        word: "学校（がっこう）を行（い）きます。",
        answer: "学校（がっこう）に行（い）きます。(Use に for destination)",
        options: ["Correct", "学校（がっこう）に行（い）きます。(Use に for destination)", "学校（がっこう）が行（い）きます。", "学校（がっこう）は行（い）きます。"]
      },
      {
        instruction: "Is this particle usage correct?",
        word: "レストランに食（た）べます。",
        answer: "レストランで食（た）べます。(Use で for location of action)",
        options: ["Correct", "レストランで食（た）べます。(Use で for location of action)", "レストランを食（た）べます。", "レストランが食（た）べます。"]
      },
      {
        instruction: "Is this particle usage correct?",
        word: "友達（ともだち）と映画（えいが）を見（み）ました。",
        answer: "Correct",
        options: ["Correct", "友達（ともだち）が映画（えいが）を見（み）ました。", "友達（ともだち）を映画（えいが）と見（み）ました。", "友達（ともだち）に映画（えいが）を見（み）ました。"]
      },
      {
        instruction: "Is this particle usage correct?",
        word: "わたしはもコーヒーが好（す）きです。",
        answer: "わたしもコーヒーが好（す）きです。(も replaces は)",
        options: ["Correct", "わたしもコーヒーが好（す）きです。(も replaces は)", "わたしがもコーヒーは好（す）きです。", "わたしはコーヒーも好（す）きです。"]
      },
      {
        instruction: "Is this particle usage correct?",
        word: "バスで学校（がっこう）に行（い）きます。",
        answer: "Correct",
        options: ["Correct", "バスに学校（がっこう）で行（い）きます。", "バスを学校（がっこう）に行（い）きます。", "バスが学校（がっこう）に行（い）きます。"]
      },
      {
        instruction: "Is this particle usage correct?",
        word: "公園（こうえん）にサッカーをします。",
        answer: "公園（こうえん）でサッカーをします。(Use で for location of action)",
        options: ["Correct", "公園（こうえん）でサッカーをします。(Use で for location of action)", "公園（こうえん）がサッカーをします。", "公園（こうえん）はサッカーをします。"]
      },
      {
        instruction: "Is this particle usage correct?",
        word: "九時（くじ）から五時（ごじ）まで働（はたら）きます。",
        answer: "Correct",
        options: ["Correct", "九時（くじ）に五時（ごじ）まで働（はたら）きます。", "九時（くじ）まで五時（ごじ）から働（はたら）きます。", "九時（くじ）で五時（ごじ）に働（はたら）きます。"]
      },
      {
        instruction: "Is this particle usage correct?",
        word: "だれは来（き）ましたか。",
        answer: "だれが来（き）ましたか。(Use が with question words like だれ)",
        options: ["Correct", "だれが来（き）ましたか。(Use が with question words like だれ)", "だれを来（き）ましたか。", "だれに来（き）ましたか。"]
      },
      {
        instruction: "Is this particle usage correct?",
        word: "日本語（にほんご）の先生（せんせい）はとてもやさしいです。",
        answer: "Correct",
        options: ["Correct", "日本語（にほんご）は先生（せんせい）のとてもやさしいです。", "日本語（にほんご）が先生（せんせい）はとてもやさしいです。", "日本語（にほんご）を先生（せんせい）にとてもやさしいです。"]
      }
    ]
  },

  // ==========================================================================
  // QUIZ 4 — Advanced particle usage
  // ==========================================================================
  {
    title: "Advanced Particle Usage",
    type: "advanced",
    questions: [
      {
        instruction: "Fill in the blanks with the correct particles. (は vs が)",
        word: "A:「だれ___来（き）ましたか。」B:「田中（たなか）さん___来（き）ました。」",
        answer: "が / が",
        options: ["が / が", "は / は", "が / は", "は / が"]
      },
      {
        instruction: "Fill in the blank with the correct particle. (に vs で)",
        word: "図書館（としょかん）___本（ほん）があります。",
        answer: "に",
        options: ["に", "で", "が", "は"]
      },
      {
        instruction: "Fill in the blank with the correct particle. (に vs で)",
        word: "図書館（としょかん）___本（ほん）を読（よ）みます。",
        answer: "で",
        options: ["で", "に", "は", "を"]
      },
      {
        instruction: "Fill in the blanks with the correct particles. (は vs が)",
        word: "わたし___ピアノ___弾（ひ）けます。",
        answer: "は / が",
        options: ["は / が", "が / を", "は / を", "が / が"]
      },
      {
        instruction: "Fill in the blanks with the correct particles. (と vs や)",
        word: "かばんの中（なか）に本（ほん）___ペン___入（はい）っています。(There may be other items too.)",
        answer: "や / が",
        options: ["や / が", "と / が", "や / を", "と / を"]
      },
      {
        instruction: "Fill in the blanks with the correct particles.",
        word: "先生（せんせい）___「静（しず）かにしてください」___言（い）いました。",
        answer: "が / と",
        options: ["が / と", "は / を", "に / が", "が / は"]
      },
      {
        instruction: "Fill in the blank with the correct particle. (に vs で)",
        word: "椅子（いす）の上（うえ）___猫（ねこ）がいます。",
        answer: "に",
        options: ["に", "で", "が", "は"]
      },
      {
        instruction: "Fill in the blank with the correct particle. (は vs が)",
        word: "あ、雨（あめ）___降（ふ）ってきた！",
        answer: "が",
        options: ["が", "は", "を", "に"]
      },
      {
        instruction: "Fill in the blanks with the correct particles.",
        word: "日本語（にほんご）___英語（えいご）___違（ちが）います。",
        answer: "は / と",
        options: ["は / と", "が / を", "の / は", "と / が"]
      },
      {
        instruction: "Fill in the blank with the correct particle.",
        word: "友達（ともだち）___プレゼントをもらいました。",
        answer: "に",
        options: ["に", "と", "が", "から"]
      }
    ]
  }
];
