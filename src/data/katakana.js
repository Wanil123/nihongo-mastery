// ============================================================================
// COMPLETE KATAKANA DATA - The alphabet for foreign words
// ============================================================================

export const katakanaIntro = {
  title: "Katakana (カタカナ)",
  description: `Katakana are the SECOND Japanese writing system. They represent exactly
the same sounds as hiragana, but are used in different situations:

1. Words borrowed from other languages (English, French, etc.)
   Example: コーヒー (koohii) = coffee (from the English "coffee")

2. Foreign proper nouns (your first name in Japanese will be in katakana!)
   Example: フランス (furansu) = France

3. Onomatopoeia and sound effects
   Example: ワンワン (wanwan) = woof woof (barking)

4. To emphasize a word (like italics in English)

5. Names of animals and plants in a scientific context

GOOD NEWS: Katakana represent the same sounds as hiragana!
If you know hiragana, you already know the pronunciation.
You just need to learn the new visual forms.

TIP: Katakana have straighter and more angular strokes than hiragana
(which are rounder and more flowing). Think: hiragana = feminine/soft, katakana = masculine/sharp.`,
  tips: [
    "Katakana are more angular than hiragana - straight and sharp strokes",
    "Many katakana words come from French or English, try to guess them!",
    "Practice by writing English words in katakana",
    "Look at Japanese product packaging - katakana are everywhere!",
    "Be careful: some borrowed words have changed meaning from the original"
  ]
};

export const katakanaGroups = [
  {
    name: "Vowels (母音)",
    chars: [
      {
        char: "ア",
        romaji: "a",
        hiraganaEquiv: "あ",
        pronunciation: "Same as あ - 'a' as in 'father'",
        mnemonic: "ア looks like a capital 'A' without the middle bar",
        examples: ["アメリカ (amerika) = America/United States", "アイス (aisu) = ice cream"]
      },
      {
        char: "イ",
        romaji: "i",
        hiraganaEquiv: "い",
        pronunciation: "Same as い - 'i' as in 'meet'",
        mnemonic: "イ looks like the letter 'I' with an extra stroke",
        examples: ["イタリア (itaria) = Italy", "イギリス (igirisu) = England"]
      },
      {
        char: "ウ",
        romaji: "u",
        hiraganaEquiv: "う",
        pronunciation: "Same as う - 'u' as in 'food' but shorter",
        mnemonic: "ウ looks like a pot with ears",
        examples: ["ウイスキー (uisukii) = whisky", "ウェブ (webu) = web"]
      },
      {
        char: "エ",
        romaji: "e",
        hiraganaEquiv: "え",
        pronunciation: "Same as え - 'e' as in 'bet'",
        mnemonic: "エ looks like an 'I' lying on its side",
        examples: ["エレベーター (erebeetaa) = elevator", "エアコン (eakon) = air conditioning"]
      },
      {
        char: "オ",
        romaji: "o",
        hiraganaEquiv: "お",
        pronunciation: "Same as お - 'o' as in 'go'",
        mnemonic: "オ looks like a man running with a flag",
        examples: ["オレンジ (orenji) = orange", "オーストラリア (oosutoraria) = Australia"]
      }
    ]
  },
  {
    name: "K Group (カ行)",
    chars: [
      { char: "カ", romaji: "ka", hiraganaEquiv: "か", mnemonic: "カ looks like a knife cutting - KA-t!", examples: ["カメラ (kamera) = camera", "カレー (karee) = curry"] },
      { char: "キ", romaji: "ki", hiraganaEquiv: "き", mnemonic: "キ looks like a key - KI!", examples: ["キロ (kiro) = kilo", "キッチン (kicchin) = kitchen"] },
      { char: "ク", romaji: "ku", hiraganaEquiv: "く", mnemonic: "ク looks like the side of a cube - KU-be!", examples: ["クラス (kurasu) = class", "クリスマス (kurisumasu) = Christmas"] },
      { char: "ケ", romaji: "ke", hiraganaEquiv: "け", mnemonic: "ケ looks like the letter K - KE!", examples: ["ケーキ (keeki) = cake", "ケチャップ (kechappu) = ketchup"] },
      { char: "コ", romaji: "ko", hiraganaEquiv: "こ", mnemonic: "コ looks like a corner - KO-rner!", examples: ["コーヒー (koohii) = coffee (drink)", "コンピューター (konpyuutaa) = computer"] }
    ]
  },
  {
    name: "S Group (サ行)",
    chars: [
      { char: "サ", romaji: "sa", hiraganaEquiv: "さ", mnemonic: "サ looks like a samurai standing up", examples: ["サラダ (sarada) = salad", "サッカー (sakkaa) = football/soccer"] },
      { char: "シ", romaji: "shi", hiraganaEquiv: "し", mnemonic: "シ looks like a smiley face ;) - SHI-iii!", examples: ["シャワー (shawaa) = shower", "シャツ (shatsu) = shirt"] },
      { char: "ス", romaji: "su", hiraganaEquiv: "す", mnemonic: "ス looks like a slide - SU-lide!", examples: ["スポーツ (supootsu) = sport", "スマホ (sumaho) = smartphone"] },
      { char: "セ", romaji: "se", hiraganaEquiv: "せ", mnemonic: "セ looks like a mouth saying - SE!", examples: ["セーター (seetaa) = sweater", "セール (seeru) = sale"] },
      { char: "ソ", romaji: "so", hiraganaEquiv: "そ", mnemonic: "ソ looks like シ but the strokes slant differently - be careful not to mix them up!", examples: ["ソファ (sofa) = sofa/couch", "ソース (soosu) = sauce"] }
    ]
  },
  {
    name: "T Group (タ行)",
    chars: [
      { char: "タ", romaji: "ta", hiraganaEquiv: "た", mnemonic: "タ looks like 'ta' in cursive", examples: ["タクシー (takushii) = taxi", "タオル (taoru) = towel"] },
      { char: "チ", romaji: "chi", hiraganaEquiv: "ち", mnemonic: "チ looks like the number 5 - CHI-ve!", examples: ["チーズ (chiizu) = cheese", "チョコレート (chokoreeто) = chocolate"] },
      { char: "ツ", romaji: "tsu", hiraganaEquiv: "つ", mnemonic: "ツ looks like シ (shi) but the strokes slant downward - CAREFUL! ツ has vertical strokes, シ has horizontal strokes", examples: ["ツアー (tsuaa) = tour (trip)", "ツイッター (tsuittaa) = Twitter"] },
      { char: "テ", romaji: "te", hiraganaEquiv: "て", mnemonic: "テ looks like a tabletop - TE-ble!", examples: ["テレビ (terebi) = television", "テスト (tesuto) = test/exam"] },
      { char: "ト", romaji: "to", hiraganaEquiv: "と", mnemonic: "ト looks like a totem - TO-tem!", examples: ["トイレ (toire) = toilet/restroom", "トマト (tomato) = tomato"] }
    ]
  },
  {
    name: "N Group (ナ行)",
    chars: [
      { char: "ナ", romaji: "na", hiraganaEquiv: "な", mnemonic: "ナ looks like a knife - NA-ife!", examples: ["ナイフ (naifu) = knife", "ナプキン (napukin) = napkin"] },
      { char: "ニ", romaji: "ni", hiraganaEquiv: "に", mnemonic: "ニ is two horizontal strokes - like the number 2 (NI in Japanese!)", examples: ["ニュース (nyuusu) = news", "ニット (nitto) = knit"] },
      { char: "ヌ", romaji: "nu", hiraganaEquiv: "ぬ", mnemonic: "ヌ looks like noodles - NU-dles!", examples: ["ヌードル (nuudoru) = noodles"] },
      { char: "ネ", romaji: "ne", hiraganaEquiv: "ね", mnemonic: "ネ looks like a net - NE-t!", examples: ["ネクタイ (nekutai) = necktie", "ネット (netto) = internet/net"] },
      { char: "ノ", romaji: "no", hiraganaEquiv: "の", mnemonic: "ノ is a simple diagonal stroke - the simplest of all!", examples: ["ノート (nooto) = notebook/note", "ノック (nokku) = knock"] }
    ]
  },
  {
    name: "H Group (ハ行)",
    chars: [
      { char: "ハ", romaji: "ha", hiraganaEquiv: "は", mnemonic: "ハ looks like 'ha' - two strokes opening like a mouth laughing HA-HA!", examples: ["ハンバーガー (hanbaagaa) = hamburger", "ハサミ (hasami) = scissors"] },
      { char: "ヒ", romaji: "hi", hiraganaEquiv: "ひ", mnemonic: "ヒ looks like a sideways smile - HI-hi!", examples: ["ヒーロー (hiiroo) = hero", "ヒーター (hiitaa) = heater"] },
      { char: "フ", romaji: "fu", hiraganaEquiv: "ふ", mnemonic: "フ looks like the peak of Mount Fuji - FU-ji!", examples: ["フランス (furansu) = France", "フォーク (fooku) = fork"] },
      { char: "ヘ", romaji: "he", hiraganaEquiv: "へ", mnemonic: "ヘ is IDENTICAL to the hiragana へ - it's the same character! A simple angle.", examples: ["ヘリコプター (herikoputaa) = helicopter", "ヘルメット (herumetto) = helmet"] },
      { char: "ホ", romaji: "ho", hiraganaEquiv: "ほ", mnemonic: "ホ looks like a Christmas tree - HO-HO-HO!", examples: ["ホテル (hoteru) = hotel", "ホーム (hoomu) = platform (train station)/home"] }
    ]
  },
  {
    name: "M Group (マ行)",
    chars: [
      { char: "マ", romaji: "ma", hiraganaEquiv: "ま", mnemonic: "マ looks like an open mouth - MA-ma!", examples: ["マクドナルド (makudonarudo) = McDonald's", "マンション (manshon) = upscale apartment"] },
      { char: "ミ", romaji: "mi", hiraganaEquiv: "み", mnemonic: "ミ is three horizontal strokes - like the number 3 (MI-tsu = three)", examples: ["ミルク (miruku) = milk", "ミュージック (myuujikku) = music"] },
      { char: "ム", romaji: "mu", hiraganaEquiv: "む", mnemonic: "ム looks like a muscular arm - MU-scle!", examples: ["ムービー (muubii) = movie"] },
      { char: "メ", romaji: "me", hiraganaEquiv: "め", mnemonic: "メ looks like an X - ME!", examples: ["メニュー (menyuu) = menu", "メール (meeru) = e-mail"] },
      { char: "モ", romaji: "mo", hiraganaEquiv: "も", mnemonic: "モ looks like an M lying on its side", examples: ["モデル (moderu) = model", "モバイル (mobairu) = mobile"] }
    ]
  },
  {
    name: "Y Group (ヤ行)",
    chars: [
      { char: "ヤ", romaji: "ya", hiraganaEquiv: "や", mnemonic: "ヤ looks like a yak", examples: ["ヤフー (yafuu) = Yahoo"] },
      { char: "ユ", romaji: "yu", hiraganaEquiv: "ゆ", mnemonic: "ユ looks like the letter U - YU!", examples: ["ユーロ (yuuro) = euro", "ユニフォーム (yunifoomu) = uniform"] },
      { char: "ヨ", romaji: "yo", hiraganaEquiv: "よ", mnemonic: "ヨ looks like a reversed E - YO!", examples: ["ヨーロッパ (yooroppa) = Europe", "ヨーグルト (yooguruto) = yogurt"] }
    ]
  },
  {
    name: "R Group (ラ行)",
    chars: [
      { char: "ラ", romaji: "ra", hiraganaEquiv: "ら", mnemonic: "ラ looks like a quick 'ra'", examples: ["ラーメン (raamen) = ramen", "ラジオ (rajio) = radio"] },
      { char: "リ", romaji: "ri", hiraganaEquiv: "り", mnemonic: "リ is two vertical strokes - RI!", examples: ["リモコン (rimokon) = remote control", "リットル (rittoru) = liter"] },
      { char: "ル", romaji: "ru", hiraganaEquiv: "る", mnemonic: "ル looks like a foot - RU!", examples: ["ルール (ruuru) = rule", "ルーム (ruumu) = room"] },
      { char: "レ", romaji: "re", hiraganaEquiv: "れ", mnemonic: "レ looks like a reversed letter L - RE!", examples: ["レストラン (resutoran) = restaurant", "レモン (remon) = lemon"] },
      { char: "ロ", romaji: "ro", hiraganaEquiv: "ろ", mnemonic: "ロ is a square/rectangle - like a box (RO-maji = Latin letters!)", examples: ["ロボット (robotto) = robot", "ロシア (roshia) = Russia"] }
    ]
  },
  {
    name: "W Group + N (ワ行 + ン)",
    chars: [
      { char: "ワ", romaji: "wa", hiraganaEquiv: "わ", mnemonic: "ワ looks like a wine glass - WA-ine!", examples: ["ワイン (wain) = wine", "ワイファイ (waifai) = WiFi"] },
      { char: "ヲ", romaji: "wo", hiraganaEquiv: "を", mnemonic: "ヲ is rarely used in katakana - almost never!", examples: ["Very rare in katakana"] },
      { char: "ン", romaji: "n", hiraganaEquiv: "ん", mnemonic: "ン looks like ソ (so) but be careful! ン goes from bottom to upper-right", examples: ["パン (pan) = bread", "ラーメン (raamen) = ramen"] }
    ]
  }
];

export const katakanaConfusionPairs = {
  title: "Commonly confused katakana pairs",
  description: "These pairs of katakana look very similar. Here's how to tell them apart:",
  pairs: [
    {
      chars: ["シ (shi)", "ツ (tsu)"],
      trick: "シ (shi): the two small strokes are HORIZONTAL (like a smiley face). ツ (tsu): the two small strokes are VERTICAL (like raindrops falling)."
    },
    {
      chars: ["ソ (so)", "ン (n)"],
      trick: "ソ (so): the stroke goes from upper-left to lower-right. ン (n): the stroke goes from lower-left to upper-right."
    },
    {
      chars: ["ク (ku)", "タ (ta)"],
      trick: "タ (ta) has an extra horizontal stroke inside that ク (ku) doesn't have."
    },
    {
      chars: ["ヌ (nu)", "ス (su)"],
      trick: "ヌ (nu) has a small hook/dot at the bottom right that ス (su) doesn't have."
    },
    {
      chars: ["ウ (u)", "ワ (wa)"],
      trick: "ウ (u) has a horizontal stroke on top + two vertical strokes. ワ (wa) only has the horizontal stroke + ONE vertical stroke (on the right)."
    }
  ]
};

export const katakanaLoanWords = {
  title: "Common loanwords (外来語 gairaigo)",
  description: `Japanese has borrowed A LOT of words from English, French, Portuguese,
German, and other languages. These words are always written in katakana.

TIP for English speakers: Try pronouncing the katakana word out loud.
Often, you'll recognize the original English or French word!

Note: Japanese pronunciation adapts foreign sounds to the Japanese phonetic system.
For example, 'l' becomes 'r', consonant clusters are separated by vowels, etc.`,
  categories: [
    {
      name: "Food and drinks",
      words: [
        { katakana: "コーヒー", romaji: "koohii", meaning: "coffee", origin: "coffee (English)" },
        { katakana: "パン", romaji: "pan", meaning: "bread", origin: "pão (Portuguese)" },
        { katakana: "ビール", romaji: "biiru", meaning: "beer", origin: "bier (Dutch)" },
        { katakana: "ケーキ", romaji: "keeki", meaning: "cake", origin: "cake (English)" },
        { katakana: "チョコレート", romaji: "chokoreeто", meaning: "chocolate", origin: "chocolate (English)" },
        { katakana: "アイスクリーム", romaji: "aisukuriimu", meaning: "ice cream", origin: "ice cream (English)" },
        { katakana: "サラダ", romaji: "sarada", meaning: "salad", origin: "salad (English)" },
        { katakana: "ワイン", romaji: "wain", meaning: "wine", origin: "wine (English)" },
        { katakana: "ジュース", romaji: "juusu", meaning: "juice", origin: "juice (English)" },
        { katakana: "レストラン", romaji: "resutoran", meaning: "restaurant", origin: "restaurant (French!)" },
        { katakana: "カフェ", romaji: "kafe", meaning: "cafe (place)", origin: "café (French!)" },
        { katakana: "クロワッサン", romaji: "kurowassan", meaning: "croissant", origin: "croissant (French!)" }
      ]
    },
    {
      name: "Technology",
      words: [
        { katakana: "コンピューター", romaji: "konpyuutaa", meaning: "computer", origin: "computer (English)" },
        { katakana: "スマートフォン", romaji: "sumaatofon", meaning: "smartphone", origin: "smartphone (English)" },
        { katakana: "インターネット", romaji: "intaanetto", meaning: "internet", origin: "internet (English)" },
        { katakana: "テレビ", romaji: "terebi", meaning: "television", origin: "television (English)" },
        { katakana: "ゲーム", romaji: "geemu", meaning: "game", origin: "game (English)" },
        { katakana: "メール", romaji: "meeru", meaning: "e-mail", origin: "mail (English)" },
        { katakana: "アプリ", romaji: "apuri", meaning: "app", origin: "app (English)" },
        { katakana: "パソコン", romaji: "pasokon", meaning: "PC/computer", origin: "personal computer (English)" }
      ]
    },
    {
      name: "Countries and places",
      words: [
        { katakana: "フランス", romaji: "furansu", meaning: "France", origin: "France (French)" },
        { katakana: "アメリカ", romaji: "amerika", meaning: "United States", origin: "America (English)" },
        { katakana: "イギリス", romaji: "igirisu", meaning: "England", origin: "inglês (Portuguese)" },
        { katakana: "ドイツ", romaji: "doitsu", meaning: "Germany", origin: "Deutsch (German)" },
        { katakana: "カナダ", romaji: "kanada", meaning: "Canada", origin: "Canada" },
        { katakana: "オーストラリア", romaji: "oosutoraria", meaning: "Australia", origin: "Australia" },
        { katakana: "パリ", romaji: "pari", meaning: "Paris", origin: "Paris (French!)" },
        { katakana: "ロンドン", romaji: "rondon", meaning: "London", origin: "London (English)" }
      ]
    },
    {
      name: "Daily life",
      words: [
        { katakana: "ホテル", romaji: "hoteru", meaning: "hotel", origin: "hotel (English)" },
        { katakana: "タクシー", romaji: "takushii", meaning: "taxi", origin: "taxi" },
        { katakana: "バス", romaji: "basu", meaning: "bus", origin: "bus (English)" },
        { katakana: "トイレ", romaji: "toire", meaning: "toilet/restroom", origin: "toilet (English)" },
        { katakana: "エレベーター", romaji: "erebeetaa", meaning: "elevator", origin: "elevator (English)" },
        { katakana: "シャワー", romaji: "shawaa", meaning: "shower", origin: "shower (English)" },
        { katakana: "アパート", romaji: "apaato", meaning: "apartment", origin: "apartment (English)" },
        { katakana: "スーパー", romaji: "suupaa", meaning: "supermarket", origin: "supermarket (English)" }
      ]
    }
  ]
};

export const katakanaExercises = [
  {
    type: "recognition",
    title: "Exercise 1: Katakana recognition",
    instruction: "What is the romaji for this katakana?",
    questions: [
      { char: "ア", answer: "a", options: ["a", "i", "u", "e"] },
      { char: "カ", answer: "ka", options: ["ka", "sa", "ta", "na"] },
      { char: "シ", answer: "shi", options: ["shi", "tsu", "so", "n"] },
      { char: "ツ", answer: "tsu", options: ["shi", "tsu", "so", "n"] },
      { char: "テ", answer: "te", options: ["te", "ke", "se", "he"] },
      { char: "ナ", answer: "na", options: ["na", "ta", "ra", "ma"] },
      { char: "フ", answer: "fu", options: ["fu", "hu", "ku", "su"] },
      { char: "マ", answer: "ma", options: ["ma", "na", "ya", "ra"] },
      { char: "ラ", answer: "ra", options: ["ra", "na", "ma", "wa"] },
      { char: "ン", answer: "n", options: ["n", "so", "shi", "tsu"] },
      { char: "コ", answer: "ko", options: ["ko", "to", "so", "no"] },
      { char: "ロ", answer: "ro", options: ["ro", "ko", "mo", "no"] },
      { char: "サ", answer: "sa", options: ["sa", "se", "ki", "ka"] },
      { char: "ヨ", answer: "yo", options: ["yo", "ko", "mo", "so"] },
      { char: "ワ", answer: "wa", options: ["wa", "ya", "ra", "na"] }
    ]
  },
  {
    type: "loanword",
    title: "Exercise 2: Guess the loanword",
    instruction: "What does this katakana word mean? (Read it out loud, you might recognize the word!)",
    questions: [
      { word: "コーヒー", romaji: "koohii", answer: "coffee", options: ["tea", "coffee", "juice", "milk"] },
      { word: "テレビ", romaji: "terebi", answer: "television", options: ["telephone", "television", "radio", "computer"] },
      { word: "ホテル", romaji: "hoteru", answer: "hotel", options: ["hospital", "hotel", "restaurant", "school"] },
      { word: "レストラン", romaji: "resutoran", answer: "restaurant", options: ["restaurant", "station", "airport", "shop"] },
      { word: "タクシー", romaji: "takushii", answer: "taxi", options: ["bus", "train", "taxi", "airplane"] },
      { word: "フランス", romaji: "furansu", answer: "France", options: ["England", "France", "Germany", "Spain"] },
      { word: "サラダ", romaji: "sarada", answer: "salad", options: ["salad", "soup", "pizza", "steak"] },
      { word: "スマートフォン", romaji: "sumaatofon", answer: "smartphone", options: ["computer", "tablet", "smartphone", "television"] }
    ]
  }
];
