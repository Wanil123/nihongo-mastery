// ============================================================================
// ESSENTIAL KANJI - JLPT N5 (the first 80 kanji to learn)
// ============================================================================

export const kanjiIntro = {
  title: "Kanji (漢字) - Chinese Characters",
  description: `Kanji are characters of Chinese origin used in Japanese.
Each kanji represents a CONCEPT or an IDEA (not a sound like hiragana/katakana).

GOOD NEWS: Many kanji are simplified DRAWINGS of what they represent!
山 = mountain (look: it looks like a mountain with 3 peaks!)
川 = river (look: it looks like water currents!)

Each kanji generally has TWO types of reading:
1. 音読み (onyomi) = "Chinese" reading - used in compound words of 2+ kanji
2. 訓読み (kunyomi) = "Japanese" reading - used when the kanji is alone or with hiragana

For example: 山
- 訓読み (kunyomi): やま (yama) → when saying "mountain" alone: 山 = やま
- 音読み (onyomi): サン (san) → in compound words: 富士山 = ふじさん (Mount Fuji)

TIP: Don't panic! Learn kanji little by little, 3 to 5 per day maximum.
For each kanji, learn it with WORDS, not just the isolated character.`,
  tips: [
    "Learn 3-5 kanji per day maximum, no more",
    "Write each kanji by hand following the stroke order",
    "Learn each kanji with 2-3 vocabulary words that use it",
    "Look for 'radicals' (common parts) between similar kanji",
    "Review old kanji BEFORE learning new ones",
    "Use stories/mental images to memorize"
  ]
};

export const kanjiList = [
  // === NUMBERS ===
  {
    kanji: "一", meaning: "One/First",
    onyomi: "イチ (ichi)", kunyomi: "ひと(つ) hito(tsu)",
    strokes: 1, level: "N5",
    visual: "A horizontal stroke = the number 1. The simplest of all kanji!",
    words: [
      { word: "一つ", reading: "ひとつ", meaning: "one (object)" },
      { word: "一人", reading: "ひとり", meaning: "one person / alone" },
      { word: "一日", reading: "いちにち / ついたち", meaning: "one day / the first (of the month)" },
      { word: "一番", reading: "いちばん", meaning: "number one / the best" }
    ]
  },
  {
    kanji: "二", meaning: "Two",
    onyomi: "ニ (ni)", kunyomi: "ふた(つ) futa(tsu)",
    strokes: 2, level: "N5",
    visual: "Two horizontal strokes = the number 2. Logical!",
    words: [
      { word: "二つ", reading: "ふたつ", meaning: "two (objects)" },
      { word: "二人", reading: "ふたり", meaning: "two people" },
      { word: "二月", reading: "にがつ", meaning: "February" }
    ]
  },
  {
    kanji: "三", meaning: "Three",
    onyomi: "サン (san)", kunyomi: "みっ(つ) mi(ttsu)",
    strokes: 3, level: "N5",
    visual: "Three horizontal strokes = the number 3!",
    words: [
      { word: "三つ", reading: "みっつ", meaning: "three (objects)" },
      { word: "三月", reading: "さんがつ", meaning: "March" },
      { word: "三人", reading: "さんにん", meaning: "three people" }
    ]
  },
  {
    kanji: "四", meaning: "Four",
    onyomi: "シ (shi)", kunyomi: "よ(つ)/よん yo(tsu)/yon",
    strokes: 5, level: "N5",
    visual: "Here, it no longer looks like stacked strokes! It's a divided square.",
    words: [
      { word: "四つ", reading: "よっつ", meaning: "four (objects)" },
      { word: "四月", reading: "しがつ", meaning: "April" },
      { word: "四人", reading: "よにん", meaning: "four people" }
    ]
  },
  {
    kanji: "五", meaning: "Five",
    onyomi: "ゴ (go)", kunyomi: "いつ(つ) itsu(tsu)",
    strokes: 4, level: "N5",
    visual: "5 strokes crossed in a complex way.",
    words: [
      { word: "五つ", reading: "いつつ", meaning: "five (objects)" },
      { word: "五月", reading: "ごがつ", meaning: "May" },
      { word: "五十", reading: "ごじゅう", meaning: "fifty" }
    ]
  },
  {
    kanji: "六", meaning: "Six",
    onyomi: "ロク (roku)", kunyomi: "むっ(つ) mu(ttsu)",
    strokes: 4, level: "N5",
    words: [
      { word: "六つ", reading: "むっつ", meaning: "six (objects)" },
      { word: "六月", reading: "ろくがつ", meaning: "June" }
    ]
  },
  {
    kanji: "七", meaning: "Seven",
    onyomi: "シチ (shichi)", kunyomi: "なな nana",
    strokes: 2, level: "N5",
    words: [
      { word: "七つ", reading: "ななつ", meaning: "seven (objects)" },
      { word: "七月", reading: "しちがつ", meaning: "July" }
    ]
  },
  {
    kanji: "八", meaning: "Eight",
    onyomi: "ハチ (hachi)", kunyomi: "やっ(つ) ya(ttsu)",
    strokes: 2, level: "N5",
    visual: "Two strokes opening downward, like the character 八.",
    words: [
      { word: "八つ", reading: "やっつ", meaning: "eight (objects)" },
      { word: "八月", reading: "はちがつ", meaning: "August" },
      { word: "八百屋", reading: "やおや", meaning: "greengrocer" }
    ]
  },
  {
    kanji: "九", meaning: "Nine",
    onyomi: "キュウ/ク (kyuu/ku)", kunyomi: "ここの(つ) kokono(tsu)",
    strokes: 2, level: "N5",
    words: [
      { word: "九つ", reading: "ここのつ", meaning: "nine (objects)" },
      { word: "九月", reading: "くがつ", meaning: "September" }
    ]
  },
  {
    kanji: "十", meaning: "Ten",
    onyomi: "ジュウ (juu)", kunyomi: "とお too",
    strokes: 2, level: "N5",
    visual: "A cross + = ten. Like crossed fingers!",
    words: [
      { word: "十", reading: "じゅう", meaning: "ten" },
      { word: "十月", reading: "じゅうがつ", meaning: "October" },
      { word: "二十", reading: "にじゅう", meaning: "twenty" }
    ]
  },
  {
    kanji: "百", meaning: "Hundred",
    onyomi: "ヒャク (hyaku)", kunyomi: "-",
    strokes: 6, level: "N5",
    words: [
      { word: "百", reading: "ひゃく", meaning: "hundred" },
      { word: "三百", reading: "さんびゃく", meaning: "three hundred" },
      { word: "百円", reading: "ひゃくえん", meaning: "100 yen" }
    ]
  },
  {
    kanji: "千", meaning: "Thousand",
    onyomi: "セン (sen)", kunyomi: "ち chi",
    strokes: 3, level: "N5",
    words: [
      { word: "千", reading: "せん", meaning: "thousand" },
      { word: "三千", reading: "さんぜん", meaning: "three thousand" },
      { word: "千円", reading: "せんえん", meaning: "1000 yen" }
    ]
  },
  {
    kanji: "万", meaning: "Ten thousand",
    onyomi: "マン (man)", kunyomi: "-",
    strokes: 3, level: "N5",
    words: [
      { word: "一万", reading: "いちまん", meaning: "ten thousand" },
      { word: "万円", reading: "まんえん", meaning: "10000 yen" }
    ]
  },
  // === NATURE ===
  {
    kanji: "日", meaning: "Day / Sun",
    onyomi: "ニチ/ジツ (nichi/jitsu)", kunyomi: "ひ/か hi/ka",
    strokes: 4, level: "N5",
    visual: "A rectangle with a horizontal stroke in the middle. It's a simplified sun!",
    words: [
      { word: "日曜日", reading: "にちようび", meaning: "Sunday" },
      { word: "今日", reading: "きょう", meaning: "today" },
      { word: "毎日", reading: "まいにち", meaning: "every day" },
      { word: "日本", reading: "にほん", meaning: "Japan (land of the rising sun)" }
    ]
  },
  {
    kanji: "月", meaning: "Moon / Month",
    onyomi: "ゲツ/ガツ (getsu/gatsu)", kunyomi: "つき tsuki",
    strokes: 4, level: "N5",
    visual: "Like 日 but open on the right, like a crescent moon",
    words: [
      { word: "月曜日", reading: "げつようび", meaning: "Monday" },
      { word: "一月", reading: "いちがつ", meaning: "January" },
      { word: "今月", reading: "こんげつ", meaning: "this month" },
      { word: "月", reading: "つき", meaning: "moon" }
    ]
  },
  {
    kanji: "火", meaning: "Fire",
    onyomi: "カ (ka)", kunyomi: "ひ hi",
    strokes: 4, level: "N5",
    visual: "Looks like a person raising their arms with flames",
    words: [
      { word: "火曜日", reading: "かようび", meaning: "Tuesday" },
      { word: "火事", reading: "かじ", meaning: "fire (disaster)" },
      { word: "花火", reading: "はなび", meaning: "fireworks" }
    ]
  },
  {
    kanji: "水", meaning: "Water",
    onyomi: "スイ (sui)", kunyomi: "みず mizu",
    strokes: 4, level: "N5",
    visual: "Looks like water splashing",
    words: [
      { word: "水曜日", reading: "すいようび", meaning: "Wednesday" },
      { word: "水", reading: "みず", meaning: "water" },
      { word: "水泳", reading: "すいえい", meaning: "swimming" }
    ]
  },
  {
    kanji: "木", meaning: "Tree / Wood",
    onyomi: "モク/ボク (moku/boku)", kunyomi: "き ki",
    strokes: 4, level: "N5",
    visual: "A tree with a trunk and branches!",
    words: [
      { word: "木曜日", reading: "もくようび", meaning: "Thursday" },
      { word: "木", reading: "き", meaning: "tree" }
    ]
  },
  {
    kanji: "金", meaning: "Gold / Metal / Money",
    onyomi: "キン/コン (kin/kon)", kunyomi: "かね kane",
    strokes: 8, level: "N5",
    words: [
      { word: "金曜日", reading: "きんようび", meaning: "Friday" },
      { word: "お金", reading: "おかね", meaning: "money" },
      { word: "金", reading: "きん", meaning: "gold" }
    ]
  },
  {
    kanji: "土", meaning: "Earth / Ground",
    onyomi: "ド/ト (do/to)", kunyomi: "つち tsuchi",
    strokes: 3, level: "N5",
    visual: "A plant growing from the earth, with two levels of ground.",
    words: [
      { word: "土曜日", reading: "どようび", meaning: "Saturday" },
      { word: "土地", reading: "とち", meaning: "land" }
    ]
  },
  {
    kanji: "山", meaning: "Mountain",
    onyomi: "サン (san)", kunyomi: "やま yama",
    strokes: 3, level: "N5",
    visual: "Three peaks of a mountain! The simplest of pictograms.",
    words: [
      { word: "山", reading: "やま", meaning: "mountain" },
      { word: "富士山", reading: "ふじさん", meaning: "Mount Fuji" },
      { word: "火山", reading: "かざん", meaning: "volcano" }
    ]
  },
  {
    kanji: "川", meaning: "River",
    onyomi: "セン (sen)", kunyomi: "かわ kawa",
    strokes: 3, level: "N5",
    visual: "Three water currents flowing!",
    words: [
      { word: "川", reading: "かわ", meaning: "river" }
    ]
  },
  // === PEOPLE ===
  {
    kanji: "人", meaning: "Person",
    onyomi: "ジン/ニン (jin/nin)", kunyomi: "ひと hito",
    strokes: 2, level: "N5",
    visual: "A person walking, seen from the side!",
    words: [
      { word: "人", reading: "ひと", meaning: "person" },
      { word: "日本人", reading: "にほんじん", meaning: "Japanese (person)" },
      { word: "フランス人", reading: "フランスじん", meaning: "French (person)" },
      { word: "一人", reading: "ひとり", meaning: "alone / one person" },
      { word: "大人", reading: "おとな", meaning: "adult" }
    ]
  },
  {
    kanji: "子", meaning: "Child",
    onyomi: "シ/ス (shi/su)", kunyomi: "こ ko",
    strokes: 3, level: "N5",
    visual: "A swaddled baby with open arms.",
    words: [
      { word: "子供", reading: "こども", meaning: "child" },
      { word: "女の子", reading: "おんなのこ", meaning: "girl" },
      { word: "男の子", reading: "おとこのこ", meaning: "boy" }
    ]
  },
  {
    kanji: "女", meaning: "Woman",
    onyomi: "ジョ (jo)", kunyomi: "おんな onna",
    strokes: 3, level: "N5",
    visual: "A person kneeling gracefully.",
    words: [
      { word: "女", reading: "おんな", meaning: "woman" },
      { word: "女の人", reading: "おんなのひと", meaning: "a woman" },
      { word: "女性", reading: "じょせい", meaning: "female" }
    ]
  },
  {
    kanji: "男", meaning: "Man",
    onyomi: "ダン/ナン (dan/nan)", kunyomi: "おとこ otoko",
    strokes: 7, level: "N5",
    visual: "田 (rice field) + 力 (strength) = the one who works with strength in the rice fields = MAN",
    words: [
      { word: "男", reading: "おとこ", meaning: "man" },
      { word: "男の人", reading: "おとこのひと", meaning: "a man" },
      { word: "男性", reading: "だんせい", meaning: "male" }
    ]
  },
  // === SIZE / POSITION ===
  {
    kanji: "大", meaning: "Big",
    onyomi: "ダイ/タイ (dai/tai)", kunyomi: "おお(きい) oo(kii)",
    strokes: 3, level: "N5",
    visual: "A person (人) stretching their arms to show 'BIG' like this!",
    words: [
      { word: "大きい", reading: "おおきい", meaning: "big" },
      { word: "大学", reading: "だいがく", meaning: "university" },
      { word: "大好き", reading: "だいすき", meaning: "to love / to really like" },
      { word: "大丈夫", reading: "だいじょうぶ", meaning: "it's fine / no problem" }
    ]
  },
  {
    kanji: "小", meaning: "Small",
    onyomi: "ショウ (shou)", kunyomi: "ちい(さい)/こ chii(sai)/ko",
    strokes: 3, level: "N5",
    visual: "Something small, squeezed together. Like 大 but shrunk.",
    words: [
      { word: "小さい", reading: "ちいさい", meaning: "small" },
      { word: "小学校", reading: "しょうがっこう", meaning: "elementary school" }
    ]
  },
  {
    kanji: "中", meaning: "Middle / Inside / China",
    onyomi: "チュウ (chuu)", kunyomi: "なか naka",
    strokes: 4, level: "N5",
    visual: "A rectangle with a stroke in the middle = in the CENTER!",
    words: [
      { word: "中", reading: "なか", meaning: "inside/middle" },
      { word: "中国", reading: "ちゅうごく", meaning: "China" },
      { word: "中学校", reading: "ちゅうがっこう", meaning: "middle school" }
    ]
  },
  {
    kanji: "上", meaning: "Above / To go up",
    onyomi: "ジョウ (jou)", kunyomi: "うえ/あ(がる) ue/a(garu)",
    strokes: 3, level: "N5",
    visual: "A stroke above the baseline = ABOVE",
    words: [
      { word: "上", reading: "うえ", meaning: "above" },
      { word: "上手", reading: "じょうず", meaning: "skillful/good at" }
    ]
  },
  {
    kanji: "下", meaning: "Below / To go down",
    onyomi: "カ/ゲ (ka/ge)", kunyomi: "した/さ(がる) shita/sa(garu)",
    strokes: 3, level: "N5",
    visual: "A stroke below the line = BELOW",
    words: [
      { word: "下", reading: "した", meaning: "below" },
      { word: "下手", reading: "へた", meaning: "clumsy/bad at" },
      { word: "地下鉄", reading: "ちかてつ", meaning: "subway (underground railway)" }
    ]
  },
  // === VERBS / ACTIONS ===
  {
    kanji: "食", meaning: "To eat / Food",
    onyomi: "ショク (shoku)", kunyomi: "た(べる) ta(beru)",
    strokes: 9, level: "N5",
    words: [
      { word: "食べる", reading: "たべる", meaning: "to eat" },
      { word: "食べ物", reading: "たべもの", meaning: "food" },
      { word: "食事", reading: "しょくじ", meaning: "meal" }
    ]
  },
  {
    kanji: "飲", meaning: "To drink",
    onyomi: "イン (in)", kunyomi: "の(む) no(mu)",
    strokes: 12, level: "N5",
    words: [
      { word: "飲む", reading: "のむ", meaning: "to drink" },
      { word: "飲み物", reading: "のみもの", meaning: "beverage" }
    ]
  },
  {
    kanji: "見", meaning: "To see / To look",
    onyomi: "ケン (ken)", kunyomi: "み(る) mi(ru)",
    strokes: 7, level: "N5",
    visual: "An eye (目) on legs (儿) = SEEING while walking!",
    words: [
      { word: "見る", reading: "みる", meaning: "to see/to watch" },
      { word: "花見", reading: "はなみ", meaning: "cherry blossom viewing" }
    ]
  },
  {
    kanji: "聞", meaning: "To listen / To ask",
    onyomi: "ブン/モン (bun/mon)", kunyomi: "き(く) ki(ku)",
    strokes: 14, level: "N5",
    visual: "An ear (耳) inside a gate (門) = eavesdropping at the door!",
    words: [
      { word: "聞く", reading: "きく", meaning: "to listen/to ask" },
      { word: "新聞", reading: "しんぶん", meaning: "newspaper" }
    ]
  },
  {
    kanji: "読", meaning: "To read",
    onyomi: "ドク/トク (doku/toku)", kunyomi: "よ(む) yo(mu)",
    strokes: 14, level: "N5",
    words: [
      { word: "読む", reading: "よむ", meaning: "to read" },
      { word: "読書", reading: "どくしょ", meaning: "reading" }
    ]
  },
  {
    kanji: "書", meaning: "To write",
    onyomi: "ショ (sho)", kunyomi: "か(く) ka(ku)",
    strokes: 10, level: "N5",
    words: [
      { word: "書く", reading: "かく", meaning: "to write" },
      { word: "辞書", reading: "じしょ", meaning: "dictionary" },
      { word: "図書館", reading: "としょかん", meaning: "library" }
    ]
  },
  {
    kanji: "話", meaning: "To speak / Story",
    onyomi: "ワ (wa)", kunyomi: "はな(す) hana(su)",
    strokes: 13, level: "N5",
    words: [
      { word: "話す", reading: "はなす", meaning: "to speak" },
      { word: "電話", reading: "でんわ", meaning: "telephone" },
      { word: "会話", reading: "かいわ", meaning: "conversation" }
    ]
  },
  {
    kanji: "行", meaning: "To go",
    onyomi: "コウ/ギョウ (kou/gyou)", kunyomi: "い(く) i(ku)",
    strokes: 6, level: "N5",
    words: [
      { word: "行く", reading: "いく", meaning: "to go" },
      { word: "旅行", reading: "りょこう", meaning: "travel" },
      { word: "銀行", reading: "ぎんこう", meaning: "bank" }
    ]
  },
  {
    kanji: "来", meaning: "To come",
    onyomi: "ライ (rai)", kunyomi: "く(る) ku(ru)",
    strokes: 7, level: "N5",
    words: [
      { word: "来る", reading: "くる", meaning: "to come" },
      { word: "来年", reading: "らいねん", meaning: "next year" },
      { word: "来週", reading: "らいしゅう", meaning: "next week" }
    ]
  },
  {
    kanji: "出", meaning: "To go out",
    onyomi: "シュツ (shutsu)", kunyomi: "で(る)/だ(す) de(ru)/da(su)",
    strokes: 5, level: "N5",
    visual: "Something COMING OUT of a container!",
    words: [
      { word: "出る", reading: "でる", meaning: "to go out" },
      { word: "出す", reading: "だす", meaning: "to take out / to send" },
      { word: "出口", reading: "でぐち", meaning: "exit" }
    ]
  },
  {
    kanji: "入", meaning: "To enter",
    onyomi: "ニュウ (nyuu)", kunyomi: "い(る)/はい(る) i(ru)/hai(ru)",
    strokes: 2, level: "N5",
    visual: "Like 人 but reversed = to enter",
    words: [
      { word: "入る", reading: "はいる", meaning: "to enter" },
      { word: "入口", reading: "いりぐち", meaning: "entrance" }
    ]
  },
  // === PLACES / CONCEPTS ===
  {
    kanji: "学", meaning: "Study / To learn",
    onyomi: "ガク (gaku)", kunyomi: "まな(ぶ) mana(bu)",
    strokes: 8, level: "N5",
    words: [
      { word: "学校", reading: "がっこう", meaning: "school" },
      { word: "大学", reading: "だいがく", meaning: "university" },
      { word: "学生", reading: "がくせい", meaning: "student" },
      { word: "学ぶ", reading: "まなぶ", meaning: "to learn/to study" }
    ]
  },
  {
    kanji: "校", meaning: "School (building)",
    onyomi: "コウ (kou)", kunyomi: "-",
    strokes: 10, level: "N5",
    words: [
      { word: "学校", reading: "がっこう", meaning: "school" },
      { word: "高校", reading: "こうこう", meaning: "high school" }
    ]
  },
  {
    kanji: "先", meaning: "Previous / Before / Tip",
    onyomi: "セン (sen)", kunyomi: "さき saki",
    strokes: 6, level: "N5",
    words: [
      { word: "先生", reading: "せんせい", meaning: "teacher" },
      { word: "先週", reading: "せんしゅう", meaning: "last week" },
      { word: "先月", reading: "せんげつ", meaning: "last month" }
    ]
  },
  {
    kanji: "生", meaning: "Life / To be born / Raw",
    onyomi: "セイ/ショウ (sei/shou)", kunyomi: "い(きる)/う(まれる)/なま i(kiru)/u(mareru)/nama",
    strokes: 5, level: "N5",
    words: [
      { word: "先生", reading: "せんせい", meaning: "teacher" },
      { word: "学生", reading: "がくせい", meaning: "student" },
      { word: "生まれる", reading: "うまれる", meaning: "to be born" },
      { word: "生ビール", reading: "なまビール", meaning: "draft beer" }
    ]
  },
  {
    kanji: "本", meaning: "Book / Origin / True",
    onyomi: "ホン (hon)", kunyomi: "もと moto",
    strokes: 5, level: "N5",
    visual: "A tree (木) with a mark at the root = ORIGIN/root. Also the counter for long objects.",
    words: [
      { word: "本", reading: "ほん", meaning: "book" },
      { word: "日本", reading: "にほん", meaning: "Japan" },
      { word: "本当", reading: "ほんとう", meaning: "true/really" }
    ]
  },
  {
    kanji: "語", meaning: "Language / Word",
    onyomi: "ゴ (go)", kunyomi: "かた(る) kata(ru)",
    strokes: 14, level: "N5",
    words: [
      { word: "日本語", reading: "にほんご", meaning: "Japanese (language)" },
      { word: "英語", reading: "えいご", meaning: "English (language)" },
      { word: "フランス語", reading: "フランスご", meaning: "French (language)" }
    ]
  },
  {
    kanji: "国", meaning: "Country",
    onyomi: "コク (koku)", kunyomi: "くに kuni",
    strokes: 8, level: "N5",
    visual: "A territory (玉 = jewel/treasure) surrounded by walls (□) = a COUNTRY!",
    words: [
      { word: "国", reading: "くに", meaning: "country" },
      { word: "中国", reading: "ちゅうごく", meaning: "China" },
      { word: "外国", reading: "がいこく", meaning: "foreign country" },
      { word: "外国人", reading: "がいこくじん", meaning: "foreigner" }
    ]
  },
  // === TIME ===
  {
    kanji: "年", meaning: "Year",
    onyomi: "ネン (nen)", kunyomi: "とし toshi",
    strokes: 6, level: "N5",
    words: [
      { word: "今年", reading: "ことし", meaning: "this year" },
      { word: "来年", reading: "らいねん", meaning: "next year" },
      { word: "去年", reading: "きょねん", meaning: "last year" },
      { word: "〜年", reading: "〜ねん", meaning: "year ~" }
    ]
  },
  {
    kanji: "時", meaning: "Time / Hour",
    onyomi: "ジ (ji)", kunyomi: "とき toki",
    strokes: 10, level: "N5",
    words: [
      { word: "時間", reading: "じかん", meaning: "time/duration" },
      { word: "〜時", reading: "〜じ", meaning: "~ o'clock" },
      { word: "時々", reading: "ときどき", meaning: "sometimes" }
    ]
  },
  {
    kanji: "今", meaning: "Now / This",
    onyomi: "コン/キン (kon/kin)", kunyomi: "いま ima",
    strokes: 4, level: "N5",
    words: [
      { word: "今", reading: "いま", meaning: "now" },
      { word: "今日", reading: "きょう", meaning: "today" },
      { word: "今週", reading: "こんしゅう", meaning: "this week" },
      { word: "今月", reading: "こんげつ", meaning: "this month" }
    ]
  },
  // === MEANS / DIRECTION ===
  {
    kanji: "車", meaning: "Car / Vehicle",
    onyomi: "シャ (sha)", kunyomi: "くるま kuruma",
    strokes: 7, level: "N5",
    visual: "Top view of a cart/vehicle with wheels!",
    words: [
      { word: "車", reading: "くるま", meaning: "car" },
      { word: "電車", reading: "でんしゃ", meaning: "train" },
      { word: "自転車", reading: "じてんしゃ", meaning: "bicycle" }
    ]
  },
  {
    kanji: "電", meaning: "Electricity",
    onyomi: "デン (den)", kunyomi: "-",
    strokes: 13, level: "N5",
    words: [
      { word: "電車", reading: "でんしゃ", meaning: "train" },
      { word: "電話", reading: "でんわ", meaning: "telephone" },
      { word: "電気", reading: "でんき", meaning: "electricity/light" }
    ]
  }
];

// Helper to pick N random unique items from array, excluding one value
function pickRandom(arr, n, exclude) {
  const filtered = arr.filter(x => x !== exclude);
  const result = [];
  const copy = [...filtered];
  for (let i = 0; i < Math.min(n, copy.length); i++) {
    const j = Math.floor(Math.random() * copy.length);
    result.push(copy.splice(j, 1)[0]);
  }
  return result;
}

// Generate meaning quiz questions from ALL kanji
export function generateKanjiMeaningQuiz(list = kanjiList) {
  const allMeanings = list.map(k => k.meaning);
  return list.map(k => {
    const wrongs = pickRandom(allMeanings, 3, k.meaning);
    return {
      kanji: k.kanji,
      answer: k.meaning,
      options: [k.meaning, ...wrongs],
      instruction: 'What is the meaning of this kanji?'
    };
  });
}

// Generate reading quiz from kanji words
export function generateKanjiReadingQuiz(list = kanjiList) {
  const allWords = list.flatMap(k => k.words);
  const allReadings = allWords.map(w => w.reading);
  const questions = [];
  for (const k of list) {
    for (const w of k.words.slice(0, 2)) {
      const wrongs = pickRandom(allReadings, 3, w.reading);
      questions.push({
        word: w.word,
        answer: w.reading,
        options: [w.reading, ...wrongs],
        instruction: 'How do you read this word?'
      });
    }
  }
  return questions;
}

// Generate "which kanji" quiz - given meaning, pick the kanji
export function generateKanjiRecognitionQuiz(list = kanjiList) {
  const allKanji = list.map(k => k.kanji);
  return list.map(k => {
    const wrongs = pickRandom(allKanji, 3, k.kanji);
    return {
      word: k.meaning,
      answer: k.kanji,
      options: [k.kanji, ...wrongs],
      instruction: 'Which kanji means this?'
    };
  });
}

// Groups of similar-looking kanji for the confusion quiz
export const similarKanjiGroups = [
  // N5 groups
  { kanji: ["人", "入", "八"], meanings: ["Person", "To enter", "Eight"], hint: "Pay attention to stroke angles!" },
  { kanji: ["大", "木", "本"], meanings: ["Big", "Tree", "Book"], hint: "Count the strokes at the bottom!" },
  { kanji: ["上", "下"], meanings: ["Above", "Below"], hint: "Which direction does the stroke point?" },
  { kanji: ["日", "目", "白"], meanings: ["Day/Sun", "Eye", "White"], hint: "Look at the inner strokes!" },
  { kanji: ["月", "円"], meanings: ["Moon/Month", "Circle/Yen"], hint: "Check the inner lines — horizontal vs angled!" },
  { kanji: ["子", "字", "学"], meanings: ["Child", "Character", "Study"], hint: "子 appears inside the others!" },
  { kanji: ["女", "姉", "妹", "妻"], meanings: ["Woman", "Older Sister", "Younger Sister", "Wife"], hint: "They all contain the 女 radical!" },
  { kanji: ["土", "士", "十"], meanings: ["Earth", "Samurai/Scholar", "Ten"], hint: "Compare the length of horizontal strokes!" },
  { kanji: ["千", "十", "百"], meanings: ["Thousand", "Ten", "Hundred"], hint: "Look at the top stroke and structure!" },
  { kanji: ["山", "出"], meanings: ["Mountain", "To go out"], hint: "Count the peaks!" },
  { kanji: ["火", "水"], meanings: ["Fire", "Water"], hint: "Fire points up, water flows down!" },
  { kanji: ["食", "飲"], meanings: ["To eat", "To drink"], hint: "Look at the bottom radical!" },
  { kanji: ["見", "聞"], meanings: ["To see", "To listen"], hint: "見 has 儿 at bottom, 聞 has 耳 inside 門!" },
  { kanji: ["読", "話", "語"], meanings: ["To read", "To speak", "Language"], hint: "Check the left radical: 言 vs different right sides!" },
  { kanji: ["行", "来"], meanings: ["To go", "To come"], hint: "Opposite meanings, different structures!" },
  { kanji: ["先", "生"], meanings: ["Previous/Before", "Life/Born"], hint: "先 has 儿 at bottom, 生 has a different shape!" },
  { kanji: ["年", "午"], meanings: ["Year", "Noon"], hint: "年 has more strokes on top!" },
  // N4 groups
  { kanji: ["持", "待"], meanings: ["Hold/Have", "Wait"], hint: "Left radical: 扌(hand) for hold, 彳(step) for wait!" },
  { kanji: ["開", "閉", "問", "聞"], meanings: ["Open", "Close", "Question", "Listen"], hint: "All have 門 (gate) — check what's inside!" },
  { kanji: ["始", "姉"], meanings: ["Begin", "Older Sister"], hint: "Both have 女 on the left — check the right side!" },
  { kanji: ["売", "買", "読"], meanings: ["Sell", "Buy", "Read"], hint: "売 and 買 differ by top/bottom, 読 has 言!" },
  { kanji: ["貸", "借"], meanings: ["Lend", "Borrow"], hint: "貸 has 貝 (shell/money), 借 has 亻(person)!" },
  { kanji: ["住", "使"], meanings: ["Live/Reside", "Use"], hint: "Both start with 亻— check the right component!" },
  { kanji: ["元", "兄"], meanings: ["Origin/Healthy", "Older Brother"], hint: "兄 has 口 on top, 元 has two horizontal strokes!" },
  { kanji: ["友", "夫"], meanings: ["Friend", "Husband"], hint: "友 curves left, 夫 is more symmetrical!" },
  { kanji: ["料", "理"], meanings: ["Fee/Material", "Reason/Logic"], hint: "Both have 里 — check the left radical: 米 vs 王!" },
  { kanji: ["花", "茶", "菜", "英", "薬"], meanings: ["Flower", "Tea", "Vegetable", "English", "Medicine"], hint: "All share the 艹 (plant) radical on top!" },
  { kanji: ["教", "習"], meanings: ["Teach", "Learn"], hint: "教 has 攵 on right, 習 has 羽 (wings) on top!" },
  { kanji: ["試", "験"], meanings: ["Try/Test", "Examine"], hint: "Often used together as 試験 (exam)!" },
  { kanji: ["赤", "走"], meanings: ["Red", "Run"], hint: "Both have 土 on top — check the bottom!" },
  { kanji: ["止", "足"], meanings: ["Stop", "Foot/Leg"], hint: "止 is simpler, 足 builds on it with more strokes!" },
  { kanji: ["切", "七"], meanings: ["Cut", "Seven"], hint: "切 has 刀 (sword) on the right!" },
  { kanji: ["目", "耳", "口"], meanings: ["Eye", "Ear", "Mouth"], hint: "Body part kanji — different shapes for different senses!" },
  { kanji: ["体", "休"], meanings: ["Body", "Rest"], hint: "Both have 亻— 体 has 本, 休 has 木!" },
  { kanji: ["院", "病", "医"], meanings: ["Institution", "Illness", "Doctor"], hint: "Medical kanji — 院 has 阝, 病 has 疒, 医 has 匚!" },
  { kanji: ["歩", "走", "止"], meanings: ["Walk", "Run", "Stop"], hint: "Movement kanji — 止 is inside 歩!" },
  { kanji: ["映", "画"], meanings: ["Reflect/Project", "Picture"], hint: "Often together as 映画 (movie)!" },
  { kanji: ["同", "向"], meanings: ["Same", "Direction/Toward"], hint: "Similar outer frames — check what's inside!" },
  { kanji: ["黒", "白", "赤", "青"], meanings: ["Black", "White", "Red", "Blue"], hint: "Color kanji — each has a unique structure!" },
];

// Build a lookup from kanji char to meaning using both N5 and N4 lists
function buildKanjiLookup(extraList) {
  const lookup = {};
  for (const k of kanjiList) lookup[k.kanji] = k.meaning;
  if (extraList) {
    for (const k of extraList) lookup[k.kanji] = k.meaning;
  }
  return lookup;
}

// Generate similar-looking kanji quiz
export function generateSimilarKanjiQuiz(n4List = []) {
  const lookup = buildKanjiLookup(n4List);
  const questions = [];

  for (const group of similarKanjiGroups) {
    // Only include groups where all kanji exist in our data
    const validKanji = group.kanji.filter(k => lookup[k]);
    if (validKanji.length < 2) continue;

    for (let i = 0; i < validKanji.length; i++) {
      const correct = validKanji[i];
      const correctMeaning = lookup[correct];
      // Wrong options are the other kanji in the same group (they look similar!)
      const wrongs = validKanji.filter(k => k !== correct);
      // Pad with random kanji if group is small
      while (wrongs.length < 3) {
        const allKanjiChars = Object.keys(lookup).filter(k => k !== correct && !wrongs.includes(k));
        if (allKanjiChars.length === 0) break;
        wrongs.push(allKanjiChars[Math.floor(Math.random() * allKanjiChars.length)]);
      }

      questions.push({
        word: correctMeaning,
        answer: correct,
        options: [correct, ...wrongs.slice(0, 3)],
        instruction: `Pick the correct kanji (${group.hint})`
      });
    }
  }

  return questions;
}

// Pre-generated static exercises for backward compatibility
export const kanjiExercises = [
  {
    type: "meaning",
    title: "Kanji → Meaning (all N5)",
    questions: generateKanjiMeaningQuiz()
  },
  {
    type: "reading",
    title: "Word → Reading (all N5)",
    questions: generateKanjiReadingQuiz()
  },
  {
    type: "recognition",
    title: "Meaning → Kanji (all N5)",
    questions: generateKanjiRecognitionQuiz()
  }
];
