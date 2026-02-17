// ============================================================================
// ESSENTIAL KANJI - JLPT N4 (80 kanji for intermediate learners)
// ============================================================================

export const kanjiN4Intro = {
  title: "Kanji N4 (漢字 N4) - Intermediate Characters",
  description: `After mastering the basic N5 kanji, it's time to expand your knowledge!
N4 kanji build on what you already know and introduce more complex characters.

At this level, you will learn kanji for:
- Common verbs (think, know, speak, run, wait...)
- Family members (parent, brother, sister, husband, wife...)
- Body parts (head, eye, ear, hand, foot...)
- School & study (teach, learn, test, exam...)
- Daily life (cook, buy, sell, borrow, lend...)

REMEMBER: Each kanji has ON'YOMI (Chinese reading) and KUN'YOMI (Japanese reading).
- 音読み (onyomi): Used in compound words (2+ kanji together)
- 訓読み (kunyomi): Used when kanji stands alone or with hiragana

Many N4 kanji contain RADICALS you already know from N5!
For example: 語 (language) contains 言 (to say) - a new N4 kanji!`,
  tips: [
    "Review N5 kanji regularly while learning N4",
    "Look for familiar radicals inside new kanji",
    "Learn kanji in context - always with vocabulary words",
    "Group similar kanji together (e.g. family members, body parts)",
    "Practice writing each kanji at least 10 times",
    "Use flashcards with example sentences, not just single words"
  ]
};

export const kanjiN4List = [
  // ============================
  // === VERBS - THINKING & COMMUNICATION (思考・伝達の動詞) ===
  // ============================
  {
    kanji: "思", meaning: "Think",
    onyomi: "シ (shi)", kunyomi: "おも(う) omo(u)",
    strokes: 9, level: "N4",
    visual: "田 (field) on top of 心 (heart) = what's on your heart = THINKING",
    words: [
      { word: "思う", reading: "おもう", meaning: "to think" },
      { word: "思い出", reading: "おもいで", meaning: "memory / recollection" },
      { word: "思い出す", reading: "おもいだす", meaning: "to remember / to recall" },
      { word: "不思議", reading: "ふしぎ", meaning: "mysterious / wonder" }
    ]
  },
  {
    kanji: "知", meaning: "Know",
    onyomi: "チ (chi)", kunyomi: "し(る) shi(ru)",
    strokes: 8, level: "N4",
    visual: "矢 (arrow) + 口 (mouth) = words that hit the target = KNOWING",
    words: [
      { word: "知る", reading: "しる", meaning: "to know" },
      { word: "知識", reading: "ちしき", meaning: "knowledge" },
      { word: "知人", reading: "ちじん", meaning: "acquaintance" }
    ]
  },
  {
    kanji: "言", meaning: "Say / Word",
    onyomi: "ゲン/ゴン (gen/gon)", kunyomi: "い(う)/こと i(u)/koto",
    strokes: 7, level: "N4",
    visual: "Sound waves coming from a mouth = SAYING words",
    words: [
      { word: "言う", reading: "いう", meaning: "to say" },
      { word: "言葉", reading: "ことば", meaning: "word / language" },
      { word: "言語", reading: "げんご", meaning: "language" },
      { word: "方言", reading: "ほうげん", meaning: "dialect" }
    ]
  },
  {
    kanji: "答", meaning: "Answer",
    onyomi: "トウ (tou)", kunyomi: "こた(える) kota(eru)",
    strokes: 12, level: "N4",
    visual: "竹 (bamboo) + 合 (to fit) = fitting answer written on bamboo",
    words: [
      { word: "答える", reading: "こたえる", meaning: "to answer" },
      { word: "答え", reading: "こたえ", meaning: "answer" },
      { word: "回答", reading: "かいとう", meaning: "reply / response" }
    ]
  },
  {
    kanji: "問", meaning: "Question / Ask",
    onyomi: "モン (mon)", kunyomi: "と(う) to(u)",
    strokes: 11, level: "N4",
    visual: "口 (mouth) inside 門 (gate) = asking at the gate = QUESTIONING",
    words: [
      { word: "問題", reading: "もんだい", meaning: "problem / question" },
      { word: "質問", reading: "しつもん", meaning: "question" },
      { word: "問う", reading: "とう", meaning: "to ask / to question" }
    ]
  },

  // ============================
  // === VERBS - START & END (開始・終了の動詞) ===
  // ============================
  {
    kanji: "始", meaning: "Begin",
    onyomi: "シ (shi)", kunyomi: "はじ(める) haji(meru)",
    strokes: 8, level: "N4",
    visual: "女 (woman) + 台 (platform) = a woman on stage to BEGIN the show",
    words: [
      { word: "始める", reading: "はじめる", meaning: "to begin (transitive)" },
      { word: "始まる", reading: "はじまる", meaning: "to begin (intransitive)" },
      { word: "開始", reading: "かいし", meaning: "start / commencement" }
    ]
  },
  {
    kanji: "終", meaning: "End",
    onyomi: "シュウ (shuu)", kunyomi: "お(わる) o(waru)",
    strokes: 11, level: "N4",
    visual: "糸 (thread) + 冬 (winter) = the thread of winter ends = ENDING",
    words: [
      { word: "終わる", reading: "おわる", meaning: "to end (intransitive)" },
      { word: "終わり", reading: "おわり", meaning: "end / conclusion" },
      { word: "最終", reading: "さいしゅう", meaning: "last / final" }
    ]
  },
  {
    kanji: "開", meaning: "Open",
    onyomi: "カイ (kai)", kunyomi: "あ(ける)/ひら(く) a(keru)/hira(ku)",
    strokes: 12, level: "N4",
    visual: "門 (gate) + 开 = opening the GATE",
    words: [
      { word: "開ける", reading: "あける", meaning: "to open (transitive)" },
      { word: "開く", reading: "ひらく", meaning: "to open / to hold (event)" },
      { word: "開始", reading: "かいし", meaning: "start / commencement" },
      { word: "公開", reading: "こうかい", meaning: "public / open to the public" }
    ]
  },
  {
    kanji: "閉", meaning: "Close / Shut",
    onyomi: "ヘイ (hei)", kunyomi: "し(める)/と(じる) shi(meru)/to(jiru)",
    strokes: 11, level: "N4",
    visual: "門 (gate) + 才 = shutting the gate = CLOSING",
    words: [
      { word: "閉める", reading: "しめる", meaning: "to close (transitive)" },
      { word: "閉まる", reading: "しまる", meaning: "to close (intransitive)" },
      { word: "閉じる", reading: "とじる", meaning: "to shut / to close" }
    ]
  },
  {
    kanji: "止", meaning: "Stop",
    onyomi: "シ (shi)", kunyomi: "と(める)/と(まる) to(meru)/to(maru)",
    strokes: 4, level: "N4",
    visual: "A footprint that has stopped = STOPPING",
    words: [
      { word: "止める", reading: "とめる", meaning: "to stop (transitive)" },
      { word: "止まる", reading: "とまる", meaning: "to stop (intransitive)" },
      { word: "中止", reading: "ちゅうし", meaning: "cancellation / suspension" },
      { word: "禁止", reading: "きんし", meaning: "prohibition / forbidden" }
    ]
  },

  // ============================
  // === VERBS - MOVEMENT (移動の動詞) ===
  // ============================
  {
    kanji: "歩", meaning: "Walk",
    onyomi: "ホ/ブ (ho/bu)", kunyomi: "ある(く) aru(ku)",
    strokes: 8, level: "N4",
    visual: "止 (stop) + 少 (a little) = stop a little as you WALK step by step",
    words: [
      { word: "歩く", reading: "あるく", meaning: "to walk" },
      { word: "散歩", reading: "さんぽ", meaning: "a walk / stroll" },
      { word: "歩道", reading: "ほどう", meaning: "sidewalk" }
    ]
  },
  {
    kanji: "走", meaning: "Run",
    onyomi: "ソウ (sou)", kunyomi: "はし(る) hashi(ru)",
    strokes: 7, level: "N4",
    visual: "土 (earth) + the radical for movement = RUNNING on the ground",
    words: [
      { word: "走る", reading: "はしる", meaning: "to run" },
      { word: "走行", reading: "そうこう", meaning: "traveling / running (of vehicle)" },
      { word: "競走", reading: "きょうそう", meaning: "race / running competition" }
    ]
  },
  {
    kanji: "持", meaning: "Hold / Have",
    onyomi: "ジ (ji)", kunyomi: "も(つ) mo(tsu)",
    strokes: 9, level: "N4",
    visual: "扌(hand) + 寺 (temple) = holding something in your HAND",
    words: [
      { word: "持つ", reading: "もつ", meaning: "to hold / to have" },
      { word: "持ち物", reading: "もちもの", meaning: "belongings" },
      { word: "気持ち", reading: "きもち", meaning: "feeling / mood" },
      { word: "金持ち", reading: "かねもち", meaning: "rich person" }
    ]
  },
  {
    kanji: "待", meaning: "Wait",
    onyomi: "タイ (tai)", kunyomi: "ま(つ) ma(tsu)",
    strokes: 9, level: "N4",
    visual: "彳(step) + 寺 (temple) = stepping to the temple and WAITING",
    words: [
      { word: "待つ", reading: "まつ", meaning: "to wait" },
      { word: "期待", reading: "きたい", meaning: "expectation / hope" },
      { word: "待合室", reading: "まちあいしつ", meaning: "waiting room" }
    ]
  },
  {
    kanji: "立", meaning: "Stand",
    onyomi: "リツ (ritsu)", kunyomi: "た(つ) ta(tsu)",
    strokes: 5, level: "N4",
    visual: "A person standing on the ground with legs apart",
    words: [
      { word: "立つ", reading: "たつ", meaning: "to stand" },
      { word: "立場", reading: "たちば", meaning: "standpoint / position" },
      { word: "国立", reading: "こくりつ", meaning: "national (government-established)" },
      { word: "役に立つ", reading: "やくにたつ", meaning: "to be useful" }
    ]
  },
  {
    kanji: "座", meaning: "Sit / Seat",
    onyomi: "ザ (za)", kunyomi: "すわ(る) suwa(ru)",
    strokes: 10, level: "N4",
    visual: "广 (building) + two 人 (people) + 土 (earth) = people sitting in a building",
    words: [
      { word: "座る", reading: "すわる", meaning: "to sit" },
      { word: "座席", reading: "ざせき", meaning: "seat" },
      { word: "正座", reading: "せいざ", meaning: "sitting properly (on knees)" }
    ]
  },

  // ============================
  // === VERBS - DAILY ACTIONS (日常の動詞) ===
  // ============================
  {
    kanji: "使", meaning: "Use",
    onyomi: "シ (shi)", kunyomi: "つか(う) tsuka(u)",
    strokes: 8, level: "N4",
    visual: "亻(person) + 吏 (official) = a person being USED as an official",
    words: [
      { word: "使う", reading: "つかう", meaning: "to use" },
      { word: "大使", reading: "たいし", meaning: "ambassador" },
      { word: "使い方", reading: "つかいかた", meaning: "how to use / usage" }
    ]
  },
  {
    kanji: "働", meaning: "Work",
    onyomi: "ドウ (dou)", kunyomi: "はたら(く) hatara(ku)",
    strokes: 13, level: "N4",
    visual: "亻(person) + 動 (move) = a person MOVING = WORKING",
    words: [
      { word: "働く", reading: "はたらく", meaning: "to work" },
      { word: "労働", reading: "ろうどう", meaning: "labor / work" },
      { word: "共働き", reading: "ともばたらき", meaning: "dual income (both spouses working)" }
    ]
  },
  {
    kanji: "住", meaning: "Live / Reside",
    onyomi: "ジュウ (juu)", kunyomi: "す(む) su(mu)",
    strokes: 7, level: "N4",
    visual: "亻(person) + 主 (master) = the master person who LIVES there",
    words: [
      { word: "住む", reading: "すむ", meaning: "to live / to reside" },
      { word: "住所", reading: "じゅうしょ", meaning: "address" },
      { word: "住民", reading: "じゅうみん", meaning: "resident / inhabitant" }
    ]
  },
  {
    kanji: "切", meaning: "Cut",
    onyomi: "セツ (setsu)", kunyomi: "き(る) ki(ru)",
    strokes: 4, level: "N4",
    visual: "七 + 刀 (sword) = CUTTING with a sword",
    words: [
      { word: "切る", reading: "きる", meaning: "to cut" },
      { word: "切手", reading: "きって", meaning: "postage stamp" },
      { word: "大切", reading: "たいせつ", meaning: "important / precious" },
      { word: "親切", reading: "しんせつ", meaning: "kind / friendly" }
    ]
  },
  {
    kanji: "着", meaning: "Wear / Arrive",
    onyomi: "チャク (chaku)", kunyomi: "き(る)/つ(く) ki(ru)/tsu(ku)",
    strokes: 12, level: "N4",
    words: [
      { word: "着る", reading: "きる", meaning: "to wear (upper body)" },
      { word: "着く", reading: "つく", meaning: "to arrive" },
      { word: "到着", reading: "とうちゃく", meaning: "arrival" },
      { word: "着物", reading: "きもの", meaning: "kimono / clothing" }
    ]
  },
  {
    kanji: "売", meaning: "Sell",
    onyomi: "バイ (bai)", kunyomi: "う(る) u(ru)",
    strokes: 7, level: "N4",
    visual: "士 (samurai) + 買 simplified = SELLING goods",
    words: [
      { word: "売る", reading: "うる", meaning: "to sell" },
      { word: "売り場", reading: "うりば", meaning: "sales counter / department" },
      { word: "販売", reading: "はんばい", meaning: "sales / selling" }
    ]
  },
  {
    kanji: "買", meaning: "Buy",
    onyomi: "バイ (bai)", kunyomi: "か(う) ka(u)",
    strokes: 12, level: "N4",
    visual: "网 (net) + 貝 (shell/money) = catching money in a net = BUYING",
    words: [
      { word: "買う", reading: "かう", meaning: "to buy" },
      { word: "買い物", reading: "かいもの", meaning: "shopping" },
      { word: "売買", reading: "ばいばい", meaning: "buying and selling / trade" }
    ]
  },
  {
    kanji: "貸", meaning: "Lend",
    onyomi: "タイ (tai)", kunyomi: "か(す) ka(su)",
    strokes: 12, level: "N4",
    words: [
      { word: "貸す", reading: "かす", meaning: "to lend" },
      { word: "貸し出し", reading: "かしだし", meaning: "lending / checkout" },
      { word: "賃貸", reading: "ちんたい", meaning: "rental / lease" }
    ]
  },
  {
    kanji: "借", meaning: "Borrow",
    onyomi: "シャク (shaku)", kunyomi: "か(りる) ka(riru)",
    strokes: 10, level: "N4",
    words: [
      { word: "借りる", reading: "かりる", meaning: "to borrow" },
      { word: "借金", reading: "しゃっきん", meaning: "debt / loan" }
    ]
  },
  {
    kanji: "送", meaning: "Send",
    onyomi: "ソウ (sou)", kunyomi: "おく(る) oku(ru)",
    strokes: 9, level: "N4",
    words: [
      { word: "送る", reading: "おくる", meaning: "to send" },
      { word: "送料", reading: "そうりょう", meaning: "shipping cost" },
      { word: "放送", reading: "ほうそう", meaning: "broadcast" },
      { word: "見送る", reading: "みおくる", meaning: "to see off" }
    ]
  },
  {
    kanji: "届", meaning: "Deliver / Reach",
    onyomi: "トドケ (todoke)", kunyomi: "とど(ける) todo(keru)",
    strokes: 8, level: "N4",
    words: [
      { word: "届ける", reading: "とどける", meaning: "to deliver (transitive)" },
      { word: "届く", reading: "とどく", meaning: "to reach / to arrive (intransitive)" },
      { word: "届け出", reading: "とどけで", meaning: "notification / report" }
    ]
  },

  // ============================
  // === EDUCATION & STUDY (教育・勉強) ===
  // ============================
  {
    kanji: "教", meaning: "Teach",
    onyomi: "キョウ (kyou)", kunyomi: "おし(える) oshi(eru)",
    strokes: 11, level: "N4",
    visual: "孝 (filial piety) + 攵 (action) = taking action to show piety = TEACHING",
    words: [
      { word: "教える", reading: "おしえる", meaning: "to teach / to tell" },
      { word: "教室", reading: "きょうしつ", meaning: "classroom" },
      { word: "教科書", reading: "きょうかしょ", meaning: "textbook" },
      { word: "宗教", reading: "しゅうきょう", meaning: "religion" }
    ]
  },
  {
    kanji: "習", meaning: "Learn / Practice",
    onyomi: "シュウ (shuu)", kunyomi: "なら(う) nara(u)",
    strokes: 11, level: "N4",
    visual: "羽 (wings) + 白 (white) = a white bird learning to fly = LEARNING",
    words: [
      { word: "習う", reading: "ならう", meaning: "to learn / to take lessons" },
      { word: "練習", reading: "れんしゅう", meaning: "practice" },
      { word: "習慣", reading: "しゅうかん", meaning: "habit / custom" },
      { word: "学習", reading: "がくしゅう", meaning: "study / learning" }
    ]
  },
  {
    kanji: "勉", meaning: "Effort / Exertion",
    onyomi: "ベン (ben)", kunyomi: "-",
    strokes: 10, level: "N4",
    visual: "免 (avoid) + 力 (power) = using power to avoid laziness = EFFORT",
    words: [
      { word: "勉強", reading: "べんきょう", meaning: "study" },
      { word: "勉強する", reading: "べんきょうする", meaning: "to study" }
    ]
  },
  {
    kanji: "強", meaning: "Strong",
    onyomi: "キョウ/ゴウ (kyou/gou)", kunyomi: "つよ(い) tsuyo(i)",
    strokes: 11, level: "N4",
    visual: "弓 (bow) + insect = even an insect with a bow is STRONG",
    words: [
      { word: "強い", reading: "つよい", meaning: "strong" },
      { word: "勉強", reading: "べんきょう", meaning: "study" },
      { word: "強力", reading: "きょうりょく", meaning: "powerful / mighty" }
    ]
  },
  {
    kanji: "試", meaning: "Try / Test",
    onyomi: "シ (shi)", kunyomi: "こころ(みる)/ため(す) kokoro(miru)/tame(su)",
    strokes: 13, level: "N4",
    words: [
      { word: "試す", reading: "ためす", meaning: "to try / to test" },
      { word: "試験", reading: "しけん", meaning: "exam / test" },
      { word: "試合", reading: "しあい", meaning: "match / game / bout" }
    ]
  },
  {
    kanji: "験", meaning: "Examine / Verify",
    onyomi: "ケン (ken)", kunyomi: "-",
    strokes: 18, level: "N4",
    words: [
      { word: "試験", reading: "しけん", meaning: "exam / test" },
      { word: "経験", reading: "けいけん", meaning: "experience" },
      { word: "実験", reading: "じっけん", meaning: "experiment" }
    ]
  },

  // ============================
  // === ARTS & CULTURE (文化・芸術) ===
  // ============================
  {
    kanji: "映", meaning: "Reflect / Project",
    onyomi: "エイ (ei)", kunyomi: "うつ(る)/うつ(す) utsu(ru)/utsu(su)",
    strokes: 9, level: "N4",
    visual: "日 (sun) + 央 (center) = light projected from the center = REFLECTING",
    words: [
      { word: "映画", reading: "えいが", meaning: "movie / film" },
      { word: "映る", reading: "うつる", meaning: "to be reflected" },
      { word: "映画館", reading: "えいがかん", meaning: "movie theater" }
    ]
  },
  {
    kanji: "画", meaning: "Picture / Drawing",
    onyomi: "ガ/カク (ga/kaku)", kunyomi: "-",
    strokes: 8, level: "N4",
    words: [
      { word: "映画", reading: "えいが", meaning: "movie / film" },
      { word: "計画", reading: "けいかく", meaning: "plan / project" },
      { word: "画家", reading: "がか", meaning: "painter / artist" },
      { word: "漫画", reading: "まんが", meaning: "manga / comics" }
    ]
  },
  {
    kanji: "楽", meaning: "Fun / Music / Comfort",
    onyomi: "ガク/ラク (gaku/raku)", kunyomi: "たの(しい) tano(shii)",
    strokes: 13, level: "N4",
    visual: "白 (white) + 木 (tree) with decorations = a decorated tree for FUN / MUSIC",
    words: [
      { word: "楽しい", reading: "たのしい", meaning: "fun / enjoyable" },
      { word: "音楽", reading: "おんがく", meaning: "music" },
      { word: "楽器", reading: "がっき", meaning: "musical instrument" },
      { word: "楽な", reading: "らくな", meaning: "easy / comfortable" }
    ]
  },
  {
    kanji: "歌", meaning: "Song / Sing",
    onyomi: "カ (ka)", kunyomi: "うた/うた(う) uta/uta(u)",
    strokes: 14, level: "N4",
    words: [
      { word: "歌", reading: "うた", meaning: "song" },
      { word: "歌う", reading: "うたう", meaning: "to sing" },
      { word: "歌手", reading: "かしゅ", meaning: "singer" },
      { word: "歌詞", reading: "かし", meaning: "lyrics" }
    ]
  },

  // ============================
  // === LANGUAGE & WRITING (言語・文字) ===
  // ============================
  {
    kanji: "英", meaning: "England / English / Excellent",
    onyomi: "エイ (ei)", kunyomi: "-",
    strokes: 8, level: "N4",
    visual: "艹 (grass/plant) + 央 (center) = the flower at the center = EXCELLENT",
    words: [
      { word: "英語", reading: "えいご", meaning: "English language" },
      { word: "英国", reading: "えいこく", meaning: "England / UK" },
      { word: "英会話", reading: "えいかいわ", meaning: "English conversation" }
    ]
  },
  {
    kanji: "漢", meaning: "China / Chinese",
    onyomi: "カン (kan)", kunyomi: "-",
    strokes: 13, level: "N4",
    words: [
      { word: "漢字", reading: "かんじ", meaning: "kanji / Chinese characters" },
      { word: "漢方", reading: "かんぽう", meaning: "Chinese medicine" }
    ]
  },
  {
    kanji: "字", meaning: "Character / Letter",
    onyomi: "ジ (ji)", kunyomi: "あざ aza",
    strokes: 6, level: "N4",
    visual: "宀 (roof) + 子 (child) = a child under a roof learning CHARACTERS",
    words: [
      { word: "漢字", reading: "かんじ", meaning: "kanji / Chinese characters" },
      { word: "文字", reading: "もじ", meaning: "letter / character" },
      { word: "数字", reading: "すうじ", meaning: "number / numeral" },
      { word: "字幕", reading: "じまく", meaning: "subtitles" }
    ]
  },
  {
    kanji: "文", meaning: "Writing / Sentence / Culture",
    onyomi: "ブン/モン (bun/mon)", kunyomi: "ふみ fumi",
    strokes: 4, level: "N4",
    visual: "A pattern or design = WRITING / CULTURE",
    words: [
      { word: "文化", reading: "ぶんか", meaning: "culture" },
      { word: "文学", reading: "ぶんがく", meaning: "literature" },
      { word: "文章", reading: "ぶんしょう", meaning: "sentence / text" },
      { word: "作文", reading: "さくぶん", meaning: "composition / essay" }
    ]
  },
  {
    kanji: "作", meaning: "Make / Create",
    onyomi: "サク/サ (saku/sa)", kunyomi: "つく(る) tsuku(ru)",
    strokes: 7, level: "N4",
    visual: "亻(person) + 乍 = a person MAKING something",
    words: [
      { word: "作る", reading: "つくる", meaning: "to make / to create" },
      { word: "作品", reading: "さくひん", meaning: "work (of art) / piece" },
      { word: "作文", reading: "さくぶん", meaning: "composition / essay" },
      { word: "動作", reading: "どうさ", meaning: "action / movement" }
    ]
  },

  // ============================
  // === FOOD & COOKING (料理・食べ物) ===
  // ============================
  {
    kanji: "料", meaning: "Fee / Material / Ingredients",
    onyomi: "リョウ (ryou)", kunyomi: "-",
    strokes: 10, level: "N4",
    words: [
      { word: "料理", reading: "りょうり", meaning: "cooking / cuisine" },
      { word: "材料", reading: "ざいりょう", meaning: "ingredients / materials" },
      { word: "料金", reading: "りょうきん", meaning: "fee / charge" },
      { word: "無料", reading: "むりょう", meaning: "free (of charge)" }
    ]
  },
  {
    kanji: "理", meaning: "Reason / Logic",
    onyomi: "リ (ri)", kunyomi: "-",
    strokes: 11, level: "N4",
    visual: "王 (king) + 里 (village) = the king's logic for ruling the village = REASON",
    words: [
      { word: "料理", reading: "りょうり", meaning: "cooking / cuisine" },
      { word: "理由", reading: "りゆう", meaning: "reason" },
      { word: "地理", reading: "ちり", meaning: "geography" },
      { word: "無理", reading: "むり", meaning: "impossible / unreasonable" }
    ]
  },
  {
    kanji: "肉", meaning: "Meat / Flesh",
    onyomi: "ニク (niku)", kunyomi: "-",
    strokes: 6, level: "N4",
    visual: "Looks like a piece of MEAT hanging to dry",
    words: [
      { word: "肉", reading: "にく", meaning: "meat" },
      { word: "牛肉", reading: "ぎゅうにく", meaning: "beef" },
      { word: "鶏肉", reading: "とりにく", meaning: "chicken meat" },
      { word: "豚肉", reading: "ぶたにく", meaning: "pork" }
    ]
  },
  {
    kanji: "魚", meaning: "Fish",
    onyomi: "ギョ (gyo)", kunyomi: "さかな/うお sakana/uo",
    strokes: 11, level: "N4",
    visual: "A pictogram of a FISH with head, body, and tail",
    words: [
      { word: "魚", reading: "さかな", meaning: "fish" },
      { word: "金魚", reading: "きんぎょ", meaning: "goldfish" },
      { word: "魚屋", reading: "さかなや", meaning: "fish shop / fishmonger" }
    ]
  },
  {
    kanji: "茶", meaning: "Tea",
    onyomi: "チャ/サ (cha/sa)", kunyomi: "-",
    strokes: 9, level: "N4",
    visual: "艹 (plant) + parts = a PLANT you brew = TEA",
    words: [
      { word: "お茶", reading: "おちゃ", meaning: "tea (green tea)" },
      { word: "茶色", reading: "ちゃいろ", meaning: "brown (tea-colored)" },
      { word: "喫茶店", reading: "きっさてん", meaning: "coffee shop / cafe" }
    ]
  },
  {
    kanji: "野", meaning: "Field / Wild",
    onyomi: "ヤ (ya)", kunyomi: "の no",
    strokes: 11, level: "N4",
    words: [
      { word: "野菜", reading: "やさい", meaning: "vegetables" },
      { word: "野球", reading: "やきゅう", meaning: "baseball" },
      { word: "野原", reading: "のはら", meaning: "field / plain" }
    ]
  },
  {
    kanji: "菜", meaning: "Vegetable / Greens",
    onyomi: "サイ (sai)", kunyomi: "な na",
    strokes: 11, level: "N4",
    visual: "艹 (grass/plant) + 采 (gather) = gathering plants = VEGETABLES",
    words: [
      { word: "野菜", reading: "やさい", meaning: "vegetables" },
      { word: "菜食", reading: "さいしょく", meaning: "vegetarian diet" }
    ]
  },

  // ============================
  // === NATURE & COLORS (自然・色) ===
  // ============================
  {
    kanji: "花", meaning: "Flower",
    onyomi: "カ (ka)", kunyomi: "はな hana",
    strokes: 7, level: "N4",
    visual: "艹 (plant) + 化 (change) = a plant that CHANGES into a FLOWER",
    words: [
      { word: "花", reading: "はな", meaning: "flower" },
      { word: "花見", reading: "はなみ", meaning: "cherry blossom viewing" },
      { word: "花火", reading: "はなび", meaning: "fireworks" },
      { word: "花屋", reading: "はなや", meaning: "flower shop / florist" }
    ]
  },
  {
    kanji: "色", meaning: "Color",
    onyomi: "ショク/シキ (shoku/shiki)", kunyomi: "いろ iro",
    strokes: 6, level: "N4",
    words: [
      { word: "色", reading: "いろ", meaning: "color" },
      { word: "茶色", reading: "ちゃいろ", meaning: "brown" },
      { word: "景色", reading: "けしき", meaning: "scenery / landscape" },
      { word: "色々", reading: "いろいろ", meaning: "various / all sorts of" }
    ]
  },
  {
    kanji: "赤", meaning: "Red",
    onyomi: "セキ/シャク (seki/shaku)", kunyomi: "あか(い) aka(i)",
    strokes: 7, level: "N4",
    visual: "土 (earth) + fire elements = the RED of burning earth",
    words: [
      { word: "赤い", reading: "あかい", meaning: "red" },
      { word: "赤ちゃん", reading: "あかちゃん", meaning: "baby" },
      { word: "赤十字", reading: "せきじゅうじ", meaning: "Red Cross" }
    ]
  },
  {
    kanji: "青", meaning: "Blue / Green",
    onyomi: "セイ/ショウ (sei/shou)", kunyomi: "あお(い) ao(i)",
    strokes: 8, level: "N4",
    visual: "The color of the sky and the sea = BLUE",
    words: [
      { word: "青い", reading: "あおい", meaning: "blue / green (for nature)" },
      { word: "青空", reading: "あおぞら", meaning: "blue sky" },
      { word: "青年", reading: "せいねん", meaning: "young man / youth" }
    ]
  },
  {
    kanji: "黒", meaning: "Black",
    onyomi: "コク (koku)", kunyomi: "くろ(い) kuro(i)",
    strokes: 11, level: "N4",
    visual: "里 (village) + fire elements = a village blackened by fire = BLACK",
    words: [
      { word: "黒い", reading: "くろい", meaning: "black" },
      { word: "黒板", reading: "こくばん", meaning: "blackboard" },
      { word: "黒人", reading: "こくじん", meaning: "Black person" }
    ]
  },
  {
    kanji: "白", meaning: "White",
    onyomi: "ハク/ビャク (haku/byaku)", kunyomi: "しろ(い) shiro(i)",
    strokes: 5, level: "N4",
    visual: "A grain of WHITE rice",
    words: [
      { word: "白い", reading: "しろい", meaning: "white" },
      { word: "白人", reading: "はくじん", meaning: "Caucasian person" },
      { word: "白鳥", reading: "はくちょう", meaning: "swan (white bird)" },
      { word: "面白い", reading: "おもしろい", meaning: "interesting / funny" }
    ]
  },

  // ============================
  // === QUALITY & CHARACTERISTIC (性質・特性) ===
  // ============================
  {
    kanji: "同", meaning: "Same",
    onyomi: "ドウ (dou)", kunyomi: "おな(じ) ona(ji)",
    strokes: 6, level: "N4",
    words: [
      { word: "同じ", reading: "おなじ", meaning: "same" },
      { word: "同時", reading: "どうじ", meaning: "simultaneous" },
      { word: "同僚", reading: "どうりょう", meaning: "colleague" }
    ]
  },
  {
    kanji: "特", meaning: "Special",
    onyomi: "トク (toku)", kunyomi: "-",
    strokes: 10, level: "N4",
    visual: "牛 (cow) + 寺 (temple) = a SPECIAL cow at the temple",
    words: [
      { word: "特に", reading: "とくに", meaning: "especially / particularly" },
      { word: "特別", reading: "とくべつ", meaning: "special" },
      { word: "特急", reading: "とっきゅう", meaning: "limited express (train)" },
      { word: "独特", reading: "どくとく", meaning: "unique / peculiar" }
    ]
  },
  {
    kanji: "別", meaning: "Separate / Different",
    onyomi: "ベツ (betsu)", kunyomi: "わか(れる) waka(reru)",
    strokes: 7, level: "N4",
    words: [
      { word: "別の", reading: "べつの", meaning: "another / different" },
      { word: "特別", reading: "とくべつ", meaning: "special" },
      { word: "別れる", reading: "わかれる", meaning: "to separate / to break up" },
      { word: "別々", reading: "べつべつ", meaning: "separately / individually" }
    ]
  },

  // ============================
  // === FAMILY (家族) ===
  // ============================
  {
    kanji: "親", meaning: "Parent / Intimate",
    onyomi: "シン (shin)", kunyomi: "おや/した(しい) oya/shita(shii)",
    strokes: 16, level: "N4",
    visual: "立 (stand) + 木 (tree) + 見 (see) = standing by a tree to SEE = PARENT watching",
    words: [
      { word: "親", reading: "おや", meaning: "parent" },
      { word: "両親", reading: "りょうしん", meaning: "both parents" },
      { word: "親切", reading: "しんせつ", meaning: "kind / friendly" },
      { word: "親しい", reading: "したしい", meaning: "intimate / close (friend)" }
    ]
  },
  {
    kanji: "兄", meaning: "Older Brother",
    onyomi: "ケイ/キョウ (kei/kyou)", kunyomi: "あに ani",
    strokes: 5, level: "N4",
    visual: "口 (mouth) + legs = a person who can SPEAK standing = OLDER BROTHER",
    words: [
      { word: "兄", reading: "あに", meaning: "older brother (humble)" },
      { word: "お兄さん", reading: "おにいさん", meaning: "older brother (polite)" },
      { word: "兄弟", reading: "きょうだい", meaning: "siblings / brothers" }
    ]
  },
  {
    kanji: "弟", meaning: "Younger Brother",
    onyomi: "テイ/ダイ (tei/dai)", kunyomi: "おとうと otouto",
    strokes: 7, level: "N4",
    words: [
      { word: "弟", reading: "おとうと", meaning: "younger brother" },
      { word: "兄弟", reading: "きょうだい", meaning: "siblings / brothers" }
    ]
  },
  {
    kanji: "姉", meaning: "Older Sister",
    onyomi: "シ (shi)", kunyomi: "あね ane",
    strokes: 8, level: "N4",
    visual: "女 (woman) + 市 (city/market) = a WOMAN of the market = OLDER SISTER",
    words: [
      { word: "姉", reading: "あね", meaning: "older sister (humble)" },
      { word: "お姉さん", reading: "おねえさん", meaning: "older sister (polite)" },
      { word: "姉妹", reading: "しまい", meaning: "sisters" }
    ]
  },
  {
    kanji: "妹", meaning: "Younger Sister",
    onyomi: "マイ (mai)", kunyomi: "いもうと imouto",
    strokes: 8, level: "N4",
    visual: "女 (woman) + 未 (not yet) = a woman NOT YET grown up = YOUNGER SISTER",
    words: [
      { word: "妹", reading: "いもうと", meaning: "younger sister" },
      { word: "姉妹", reading: "しまい", meaning: "sisters" }
    ]
  },
  {
    kanji: "夫", meaning: "Husband",
    onyomi: "フ/フウ (fu/fuu)", kunyomi: "おっと otto",
    strokes: 4, level: "N4",
    visual: "大 (big) with a hairpin on top = a grown MAN = HUSBAND",
    words: [
      { word: "夫", reading: "おっと", meaning: "husband (humble)" },
      { word: "夫婦", reading: "ふうふ", meaning: "married couple" },
      { word: "夫人", reading: "ふじん", meaning: "wife (formal) / Mrs." }
    ]
  },
  {
    kanji: "妻", meaning: "Wife",
    onyomi: "サイ (sai)", kunyomi: "つま tsuma",
    strokes: 8, level: "N4",
    words: [
      { word: "妻", reading: "つま", meaning: "wife (humble)" },
      { word: "夫妻", reading: "ふさい", meaning: "husband and wife / Mr. and Mrs." }
    ]
  },
  {
    kanji: "家", meaning: "House / Home / Family",
    onyomi: "カ/ケ (ka/ke)", kunyomi: "いえ/や ie/ya",
    strokes: 10, level: "N4",
    visual: "宀 (roof) + 豕 (pig) = a pig under a roof = HOME (pigs were kept at home)",
    words: [
      { word: "家", reading: "いえ", meaning: "house / home" },
      { word: "家族", reading: "かぞく", meaning: "family" },
      { word: "家庭", reading: "かてい", meaning: "household / home" },
      { word: "作家", reading: "さっか", meaning: "author / writer" }
    ]
  },
  {
    kanji: "族", meaning: "Tribe / Family",
    onyomi: "ゾク (zoku)", kunyomi: "-",
    strokes: 11, level: "N4",
    words: [
      { word: "家族", reading: "かぞく", meaning: "family" },
      { word: "民族", reading: "みんぞく", meaning: "ethnic group / people" },
      { word: "水族館", reading: "すいぞくかん", meaning: "aquarium" }
    ]
  },
  {
    kanji: "友", meaning: "Friend",
    onyomi: "ユウ (yuu)", kunyomi: "とも tomo",
    strokes: 4, level: "N4",
    visual: "Two hands reaching out to each other = FRIENDS",
    words: [
      { word: "友達", reading: "ともだち", meaning: "friend" },
      { word: "友人", reading: "ゆうじん", meaning: "friend (formal)" },
      { word: "親友", reading: "しんゆう", meaning: "best friend / close friend" }
    ]
  },

  // ============================
  // === HEALTH & BODY (健康・体) ===
  // ============================
  {
    kanji: "元", meaning: "Origin / Former / Healthy",
    onyomi: "ゲン/ガン (gen/gan)", kunyomi: "もと moto",
    strokes: 4, level: "N4",
    words: [
      { word: "元気", reading: "げんき", meaning: "healthy / energetic" },
      { word: "元日", reading: "がんじつ", meaning: "New Year's Day" },
      { word: "元々", reading: "もともと", meaning: "originally" }
    ]
  },
  {
    kanji: "気", meaning: "Spirit / Energy / Air",
    onyomi: "キ/ケ (ki/ke)", kunyomi: "-",
    strokes: 6, level: "N4",
    visual: "气 (steam/air) + 米 (rice) = steam rising from rice = ENERGY / SPIRIT",
    words: [
      { word: "元気", reading: "げんき", meaning: "healthy / energetic" },
      { word: "天気", reading: "てんき", meaning: "weather" },
      { word: "気持ち", reading: "きもち", meaning: "feeling / mood" },
      { word: "人気", reading: "にんき", meaning: "popularity" }
    ]
  },
  {
    kanji: "病", meaning: "Illness / Sick",
    onyomi: "ビョウ (byou)", kunyomi: "や(む)/やまい ya(mu)/yamai",
    strokes: 10, level: "N4",
    visual: "疒 (sickness radical) + 丙 = lying in bed SICK",
    words: [
      { word: "病気", reading: "びょうき", meaning: "illness / sickness" },
      { word: "病院", reading: "びょういん", meaning: "hospital" },
      { word: "病人", reading: "びょうにん", meaning: "sick person / patient" }
    ]
  },
  {
    kanji: "院", meaning: "Institution / Temple",
    onyomi: "イン (in)", kunyomi: "-",
    strokes: 10, level: "N4",
    words: [
      { word: "病院", reading: "びょういん", meaning: "hospital" },
      { word: "入院", reading: "にゅういん", meaning: "hospitalization" },
      { word: "退院", reading: "たいいん", meaning: "leaving the hospital" },
      { word: "美容院", reading: "びよういん", meaning: "beauty salon" }
    ]
  },
  {
    kanji: "医", meaning: "Medicine / Doctor",
    onyomi: "イ (i)", kunyomi: "-",
    strokes: 7, level: "N4",
    visual: "匚 (box) + 矢 (arrow) = arrows (tools) in a box = MEDICAL tools",
    words: [
      { word: "医者", reading: "いしゃ", meaning: "doctor" },
      { word: "医学", reading: "いがく", meaning: "medical science" },
      { word: "医院", reading: "いいん", meaning: "clinic / doctor's office" }
    ]
  },
  {
    kanji: "薬", meaning: "Medicine / Drug",
    onyomi: "ヤク (yaku)", kunyomi: "くすり kusuri",
    strokes: 16, level: "N4",
    visual: "艹 (plant) + 楽 (comfort) = a PLANT that brings COMFORT = MEDICINE",
    words: [
      { word: "薬", reading: "くすり", meaning: "medicine / drug" },
      { word: "薬局", reading: "やっきょく", meaning: "pharmacy" },
      { word: "薬指", reading: "くすりゆび", meaning: "ring finger" }
    ]
  },
  {
    kanji: "体", meaning: "Body",
    onyomi: "タイ/テイ (tai/tei)", kunyomi: "からだ karada",
    strokes: 7, level: "N4",
    visual: "亻(person) + 本 (origin) = the ORIGIN of a person = BODY",
    words: [
      { word: "体", reading: "からだ", meaning: "body" },
      { word: "体育", reading: "たいいく", meaning: "physical education" },
      { word: "体重", reading: "たいじゅう", meaning: "body weight" },
      { word: "体温", reading: "たいおん", meaning: "body temperature" }
    ]
  },

  // ============================
  // === BODY PARTS (体の部分) ===
  // ============================
  {
    kanji: "目", meaning: "Eye",
    onyomi: "モク/ボク (moku/boku)", kunyomi: "め me",
    strokes: 5, level: "N4",
    visual: "A pictogram of an EYE turned sideways",
    words: [
      { word: "目", reading: "め", meaning: "eye" },
      { word: "目的", reading: "もくてき", meaning: "purpose / objective" },
      { word: "目立つ", reading: "めだつ", meaning: "to stand out / to be conspicuous" },
      { word: "科目", reading: "かもく", meaning: "subject (school)" }
    ]
  },
  {
    kanji: "耳", meaning: "Ear",
    onyomi: "ジ (ji)", kunyomi: "みみ mimi",
    strokes: 6, level: "N4",
    visual: "A pictogram of an EAR",
    words: [
      { word: "耳", reading: "みみ", meaning: "ear" },
      { word: "耳鼻科", reading: "じびか", meaning: "ear, nose, and throat (ENT)" },
      { word: "早耳", reading: "はやみみ", meaning: "keen of hearing / well-informed" }
    ]
  },
  {
    kanji: "手", meaning: "Hand",
    onyomi: "シュ (shu)", kunyomi: "て te",
    strokes: 4, level: "N4",
    visual: "A pictogram of a HAND with fingers",
    words: [
      { word: "手", reading: "て", meaning: "hand" },
      { word: "手紙", reading: "てがみ", meaning: "letter (mail)" },
      { word: "上手", reading: "じょうず", meaning: "skillful / good at" },
      { word: "下手", reading: "へた", meaning: "unskillful / bad at" }
    ]
  },
  {
    kanji: "足", meaning: "Foot / Leg / Enough",
    onyomi: "ソク (soku)", kunyomi: "あし/た(りる) ashi/ta(riru)",
    strokes: 7, level: "N4",
    visual: "A pictogram of a FOOT with toes",
    words: [
      { word: "足", reading: "あし", meaning: "foot / leg" },
      { word: "足りる", reading: "たりる", meaning: "to be enough / to suffice" },
      { word: "不足", reading: "ふそく", meaning: "shortage / insufficiency" },
      { word: "遠足", reading: "えんそく", meaning: "excursion / field trip" }
    ]
  },
  {
    kanji: "頭", meaning: "Head",
    onyomi: "トウ/ズ (tou/zu)", kunyomi: "あたま atama",
    strokes: 16, level: "N4",
    visual: "豆 (bean) + 頁 (head/page) = the BEAN-shaped HEAD",
    words: [
      { word: "頭", reading: "あたま", meaning: "head" },
      { word: "頭痛", reading: "ずつう", meaning: "headache" },
      { word: "先頭", reading: "せんとう", meaning: "head / front / lead" }
    ]
  }
];
