// ============================================================================
// COMPLETE HIRAGANA DATA - All 46 basic characters + combinations
// ============================================================================

export const hiraganaIntro = {
  title: "Hiragana (ひらがな)",
  description: `Hiragana is the first writing system you need to master in Japanese.
It is the fundamental alphabet used to write native Japanese words, grammatical endings,
and particles. Unlike our Latin alphabet where each letter represents a single sound (consonant or vowel),
each hiragana represents a COMPLETE SYLLABLE (a consonant + a vowel, or a vowel alone).

For example: "か" is not read as "k" then "a" separately. It is a single character pronounced "ka" as one sound.

Japanese has 5 fundamental vowels: あ (a), い (i), う (u), え (e), お (o).
All other syllables are built by combining a consonant with these vowels.

IMPORTANT TIP: Don't try to memorize everything at once. Learn 5 characters per day,
practice them by writing them by hand (this is crucial!), and review the old ones every day.
In 2 weeks, you will have mastered all the basic hiragana.`,
  tips: [
    "Write each character by hand at least 20 times to memorize it",
    "Associate each character with a mental image (mnemonic)",
    "Read each character aloud while writing it",
    "Review the characters learned the day before BEFORE learning new ones",
    "Use flashcards for daily review"
  ]
};

export const hiraganaGroups = [
  {
    name: "Vowels (母音 - boin)",
    description: `These are the 5 fundamental sounds of Japanese. The ENTIRE Japanese phonetic system
is built on these 5 vowels. Unlike English which has around 20 different vowel sounds,
Japanese has only 5, which makes pronunciation relatively simple for an English speaker.

NOTE: Japanese pronunciation is PURE and CONSTANT. Each vowel is always pronounced
the same way, unlike English where vowels can have many different pronunciations.`,
    chars: [
      {
        char: "あ",
        romaji: "a",
        pronunciation: "Like the 'a' in 'father'. Mouth wide open, clear sound.",
        mnemonic: "Imagine someone opening their mouth wide and saying 'Ahhh!' at the dentist. The character あ looks like a person leaning forward with their mouth open.",
        strokeOrder: "3 strokes: 1) Horizontal stroke on top, 2) Vertical stroke crossing the first, 3) Curve starting from the intersection going left then up",
        examples: ["あめ (ame) = rain", "あさ (asa) = morning", "あお (ao) = blue/green", "あたま (atama) = head"]
      },
      {
        char: "い",
        romaji: "i",
        pronunciation: "Like the 'ee' in 'see'. High-pitched and short. Don't pronounce it as a long 'ee'.",
        mnemonic: "The character い looks like two people standing side by side - 'ee' as in 'easy' (easy to remember because it has two simple strokes).",
        strokeOrder: "2 strokes: 1) Curved stroke on the left (like a hook), 2) Curved stroke on the right",
        examples: ["いぬ (inu) = dog", "いえ (ie) = house", "いま (ima) = now", "いちご (ichigo) = strawberry"]
      },
      {
        char: "う",
        romaji: "u",
        pronunciation: "Like the 'oo' in 'food' but shorter. The lips are NOT rounded. Keep your lips relaxed and almost flat. This is a unique Japanese sound.",
        mnemonic: "The character う looks like an ear. 'U' as in an ear that listens.",
        strokeOrder: "2 strokes: 1) Small dot/stroke on top, 2) Curve below",
        examples: ["うみ (umi) = sea", "うた (uta) = song", "うえ (ue) = above/on top", "うし (ushi) = cow"]
      },
      {
        char: "え",
        romaji: "e",
        pronunciation: "Like the 'e' in 'bed'. Always this sound, never silent.",
        mnemonic: "The character え looks like an exotic bird with a crest - 'Eh, look at that bird!'",
        strokeOrder: "2 strokes: 1) Horizontal stroke with hook, 2) Stroke crossing below",
        examples: ["えき (eki) = train station", "えん (en) = yen (currency)", "えいご (eigo) = English (language)", "えんぴつ (enpitsu) = pencil"]
      },
      {
        char: "お",
        romaji: "o",
        pronunciation: "Like the 'o' in 'go'. Round and open sound.",
        mnemonic: "The character お looks like a man with a hat saying 'Oh!' when seeing something surprising.",
        strokeOrder: "3 strokes: 1) Horizontal stroke, 2) Vertical stroke crossing it, 3) Curve on the right with a dot",
        examples: ["おちゃ (ocha) = tea", "おかね (okane) = money", "おんな (onna) = woman", "おはよう (ohayou) = good morning"]
      }
    ]
  },
  {
    name: "K Group (か行 - ka gyō)",
    description: `The 'k' sound combined with the 5 vowels. The Japanese 'k' is identical to the English 'k',
so no particular difficulty here. Pronounce it cleanly and clearly.`,
    chars: [
      {
        char: "か",
        romaji: "ka",
        pronunciation: "Like 'ka' in 'karate'. Clean and clear.",
        mnemonic: "か looks like a katana blade cutting - KA-tana!",
        strokeOrder: "3 strokes",
        examples: ["かわ (kawa) = river", "かぜ (kaze) = wind", "かみ (kami) = paper/god/hair", "かぞく (kazoku) = family"]
      },
      {
        char: "き",
        romaji: "ki",
        pronunciation: "Like 'ki' in 'kiwi'.",
        mnemonic: "き looks like a key - KI (key)!",
        strokeOrder: "4 strokes",
        examples: ["きもの (kimono) = kimono", "きって (kitte) = stamp", "きれい (kirei) = beautiful/clean", "きのう (kinou) = yesterday"]
      },
      {
        char: "く",
        romaji: "ku",
        pronunciation: "Like 'coo' in 'cool' but shorter.",
        mnemonic: "く looks like a bird's beak going 'COO COO' (cuckoo).",
        strokeOrder: "1 stroke: a single angular curve",
        examples: ["くるま (kuruma) = car", "くち (kuchi) = mouth", "くに (kuni) = country", "くつ (kutsu) = shoes"]
      },
      {
        char: "け",
        romaji: "ke",
        pronunciation: "Like 'ke' in 'ketchup'.",
        mnemonic: "け looks like a gate entrance - KE-ep out of the gate!",
        strokeOrder: "3 strokes",
        examples: ["けさ (kesa) = this morning", "けっこん (kekkon) = marriage", "けんか (kenka) = fight/argument", "けしゴム (keshigomu) = eraser"]
      },
      {
        char: "こ",
        romaji: "ko",
        pronunciation: "Like 'co' in 'cola'.",
        mnemonic: "こ looks like two worms - like two little snakes saying KO.",
        strokeOrder: "2 horizontal strokes",
        examples: ["こども (kodomo) = child", "ここ (koko) = here", "こえ (koe) = voice", "こころ (kokoro) = heart/spirit"]
      }
    ]
  },
  {
    name: "S Group (さ行 - sa gyō)",
    description: `The 's' sound combined with the vowels. Note: し (shi) is NOT pronounced 'si'
but 'shi' as in 'she'. This is an important exception!`,
    chars: [
      {
        char: "さ",
        romaji: "sa",
        pronunciation: "Like 'sa' in 'samba'.",
        mnemonic: "さ looks like a person sitting and saying 'SA-y hello!'",
        strokeOrder: "3 strokes",
        examples: ["さかな (sakana) = fish", "さくら (sakura) = cherry blossom", "さむい (samui) = cold", "さとう (satou) = sugar"]
      },
      {
        char: "し",
        romaji: "shi",
        pronunciation: "Like 'shi' in 'she'. It is NOT 'si'!",
        mnemonic: "し looks like a fishhook - fishing in the sea (SHI can mean sea in Chinese). Also, it looks like a smile 'SHI-iii' (cheese!).",
        strokeOrder: "1 curved stroke",
        examples: ["しごと (shigoto) = work/job", "しろ (shiro) = white/castle", "しま (shima) = island", "しんぶん (shinbun) = newspaper"]
      },
      {
        char: "す",
        romaji: "su",
        pronunciation: "Like 'soo' in 'soon' but with the Japanese 'u' (lips not rounded).",
        mnemonic: "す looks like the number 5 and also like a spoon for eating SU-shi.",
        strokeOrder: "2 strokes",
        examples: ["すし (sushi) = sushi", "すき (suki) = to like", "すこし (sukoshi) = a little", "すみません (sumimasen) = excuse me"]
      },
      {
        char: "せ",
        romaji: "se",
        pronunciation: "Like 'se' in 'set'.",
        mnemonic: "せ looks like a hand pointing at something - 'SE-nsei, look!'",
        strokeOrder: "3 strokes",
        examples: ["せんせい (sensei) = teacher", "せかい (sekai) = world", "せなか (senaka) = back (body)"]
      },
      {
        char: "そ",
        romaji: "so",
        pronunciation: "Like 'so' in 'solo'.",
        mnemonic: "そ looks like a zigzag of sewing - SO-wing!",
        strokeOrder: "1 zigzag stroke",
        examples: ["そら (sora) = sky", "そと (soto) = outside/exterior", "そこ (soko) = there"]
      }
    ]
  },
  {
    name: "T Group (た行 - ta gyō)",
    description: `The 't' sound combined with the vowels. Two MAJOR exceptions here:
- ち is pronounced 'chi' (NOT 'ti')
- つ is pronounced 'tsu' (NOT 'tu')
These are unique pronunciations that you must memorize well.`,
    chars: [
      {
        char: "た",
        romaji: "ta",
        pronunciation: "Like 'ta' in 'taco'.",
        mnemonic: "た looks like the letters 't' and 'a' combined - TA!",
        strokeOrder: "4 strokes",
        examples: ["たべる (taberu) = to eat", "たかい (takai) = expensive/tall", "たまご (tamago) = egg", "たのしい (tanoshii) = fun"]
      },
      {
        char: "ち",
        romaji: "chi",
        pronunciation: "Like 'chi' in 'cheese'. NOT 'ti'!",
        mnemonic: "ち looks like the number 5 - CHI-ve (five)!",
        strokeOrder: "2 strokes",
        examples: ["ちいさい (chiisai) = small", "ちかてつ (chikatetsu) = subway", "ちず (chizu) = map/cheese", "ちち (chichi) = father"]
      },
      {
        char: "つ",
        romaji: "tsu",
        pronunciation: "Like the 'ts' in 'cats' followed by 'oo'. The 'ts' sound exists in English in words like 'cats' or 'bits'. Try saying 'ts' + 'oo' quickly.",
        mnemonic: "つ looks like an elongated smiley face riding a TSU-nami!",
        strokeOrder: "1 curved stroke",
        examples: ["つき (tsuki) = moon/month", "つよい (tsuyoi) = strong", "つくえ (tsukue) = desk", "つまらない (tsumaranai) = boring"]
      },
      {
        char: "て",
        romaji: "te",
        pronunciation: "Like 'te' in 'ten'.",
        mnemonic: "て looks like an arm and a hand - TE (hand in Japanese)!",
        strokeOrder: "1 stroke",
        examples: ["てがみ (tegami) = letter (mail)", "てんき (tenki) = weather", "てんぷら (tenpura) = tempura"]
      },
      {
        char: "と",
        romaji: "to",
        pronunciation: "Like 'to' in 'toe'.",
        mnemonic: "と looks like a toe - TO-e!",
        strokeOrder: "2 strokes",
        examples: ["ともだち (tomodachi) = friend", "とけい (tokei) = clock/watch", "とり (tori) = bird", "ところ (tokoro) = place"]
      }
    ]
  },
  {
    name: "N Group (な行 - na gyō)",
    description: "The 'n' sound combined with the vowels. Straightforward pronunciation, no tricks here.",
    chars: [
      {
        char: "な",
        romaji: "na",
        pronunciation: "Like 'na' in 'nap'.",
        mnemonic: "な looks like a knot - NA-t (knot)!",
        strokeOrder: "4 strokes",
        examples: ["なまえ (namae) = name", "なつ (natsu) = summer", "なか (naka) = inside/middle", "ながい (nagai) = long"]
      },
      {
        char: "に",
        romaji: "ni",
        pronunciation: "Like 'ni' in 'knee'.",
        mnemonic: "に looks like the word 'knee' - NI!",
        strokeOrder: "3 strokes",
        examples: ["にほん (nihon) = Japan", "にく (niku) = meat", "にわ (niwa) = garden", "にもつ (nimotsu) = luggage"]
      },
      {
        char: "ぬ",
        romaji: "nu",
        pronunciation: "Like 'noo' in 'noodle' with the Japanese u.",
        mnemonic: "ぬ looks like tangled noodles - NU-dles!",
        strokeOrder: "2 strokes",
        examples: ["ぬの (nuno) = cloth", "いぬ (inu) = dog", "ぬすむ (nusumu) = to steal"]
      },
      {
        char: "ね",
        romaji: "ne",
        pronunciation: "Like 'ne' in 'net'. Also used at the end of sentences meaning 'right?' or 'isn't it?'",
        mnemonic: "ね looks like a sleeping cat (neko = cat) - NE-ko!",
        strokeOrder: "2 strokes",
        examples: ["ねこ (neko) = cat", "ねる (neru) = to sleep", "ねつ (netsu) = fever", "ね (ne) = right?/isn't it? (particle)"]
      },
      {
        char: "の",
        romaji: "no",
        pronunciation: "Like 'no' in 'note'. It is also the possessive particle (like 'of' or \"'s\" in English).",
        mnemonic: "の looks like a spinning 'no' symbol - it's the easiest character to remember!",
        strokeOrder: "1 spiral stroke",
        examples: ["のみもの (nomimono) = drink/beverage", "わたしの (watashi no) = my/mine", "にほんの (nihon no) = of Japan"]
      }
    ]
  },
  {
    name: "H Group (は行 - ha gyō)",
    description: `The 'h' sound combined with the vowels. Important exceptions:
- ふ is pronounced 'fu' (NOT 'hu') - it's a sound between 'f' and 'h', blown gently
- は is pronounced 'wa' when used as the topic particle (not 'ha')
- へ is pronounced 'e' when used as the direction particle (not 'he')`,
    chars: [
      {
        char: "は",
        romaji: "ha",
        pronunciation: "Like 'ha' in 'hat'. BUT when it is used as the topic particle in a sentence, it is pronounced 'wa'!",
        mnemonic: "は looks like 'ha' with a hat. When it marks the topic, it laughs so hard it says 'WA-haha!'",
        strokeOrder: "3 strokes",
        examples: ["はな (hana) = flower/nose", "はし (hashi) = chopsticks/bridge", "わたしは (watashi wa) = I/me (topic)", "はる (haru) = spring"]
      },
      {
        char: "ひ",
        romaji: "hi",
        pronunciation: "Like 'hi' in 'he'. The 'h' is light, almost a breath.",
        mnemonic: "ひ looks like a smile - 'HI-hi!' while laughing.",
        strokeOrder: "1 curved stroke",
        examples: ["ひと (hito) = person", "ひだり (hidari) = left", "ひま (hima) = free time", "ひらがな (hiragana) = hiragana"]
      },
      {
        char: "ふ",
        romaji: "fu",
        pronunciation: "A UNIQUE sound between 'f' and 'h'. The lips are almost closed (as if about to whistle) and you blow gently. It is NEITHER the English 'f' (no teeth-lip contact) NOR the English 'h'.",
        mnemonic: "ふ looks like Mount Fuji seen from afar - FU-ji!",
        strokeOrder: "4 strokes",
        examples: ["ふゆ (fuyu) = winter", "ふね (fune) = boat", "ふじさん (fujisan) = Mount Fuji", "ふたつ (futatsu) = two (objects)"]
      },
      {
        char: "へ",
        romaji: "he",
        pronunciation: "Like 'he' in 'help'. BUT when it is used as the direction particle, it is pronounced 'e'!",
        mnemonic: "へ looks like a mountain or a hill - heading toward (HE/E) the mountain!",
        strokeOrder: "1 simple angular stroke",
        examples: ["へや (heya) = room", "にほんへ (nihon e) = toward Japan (direction)", "へた (heta) = bad at (unskilled)"]
      },
      {
        char: "ほ",
        romaji: "ho",
        pronunciation: "Like 'ho' in 'hotel'.",
        mnemonic: "ほ looks like は but with an extra stroke - HO-ho, Santa Claus!",
        strokeOrder: "4 strokes",
        examples: ["ほん (hon) = book", "ほし (hoshi) = star", "ほんとう (hontou) = really/truly", "ほしい (hoshii) = to want/desire"]
      }
    ]
  },
  {
    name: "M Group (ま行 - ma gyō)",
    description: "The 'm' sound combined with the vowels. Straightforward and natural pronunciation.",
    chars: [
      {
        char: "ま",
        romaji: "ma",
        pronunciation: "Like 'ma' in 'mama'.",
        mnemonic: "ま looks like 'mama' seen from the side.",
        strokeOrder: "3 strokes",
        examples: ["まち (machi) = town/city", "まど (mado) = window", "まえ (mae) = front/before", "まいにち (mainichi) = every day"]
      },
      {
        char: "み",
        romaji: "mi",
        pronunciation: "Like 'mi' in 'me'.",
        mnemonic: "み looks like the number 21 - twenty-one, MI!",
        strokeOrder: "2 strokes",
        examples: ["みず (mizu) = water", "みみ (mimi) = ear", "みせ (mise) = shop/store", "みち (michi) = path/road"]
      },
      {
        char: "む",
        romaji: "mu",
        pronunciation: "Like 'moo' in 'moon' with the Japanese u.",
        mnemonic: "む looks like a cow going 'MU-ooo' (moo!).",
        strokeOrder: "3 strokes",
        examples: ["むずかしい (muzukashii) = difficult", "むし (mushi) = insect", "むすめ (musume) = daughter", "むら (mura) = village"]
      },
      {
        char: "め",
        romaji: "me",
        pronunciation: "Like 'me' in 'met'.",
        mnemonic: "め looks like an eye with eyelashes - ME = eye in Japanese!",
        strokeOrder: "2 strokes",
        examples: ["め (me) = eye", "めがね (megane) = glasses", "あめ (ame) = rain/candy"]
      },
      {
        char: "も",
        romaji: "mo",
        pronunciation: "Like 'mo' in 'more'. It is also the particle meaning 'also/too'.",
        mnemonic: "も looks like a fishhook catching MO-re fish.",
        strokeOrder: "3 strokes",
        examples: ["もの (mono) = thing/object", "もり (mori) = forest", "わたしも (watashi mo) = me too"]
      }
    ]
  },
  {
    name: "Y Group (や行 - ya gyō)",
    description: "Only 3 characters in this group: ya, yu, yo. The sounds 'yi' and 'ye' do not exist in modern Japanese.",
    chars: [
      {
        char: "や",
        romaji: "ya",
        pronunciation: "Like 'ya' in 'yacht'.",
        mnemonic: "や looks like a yak - YA-k!",
        strokeOrder: "3 strokes",
        examples: ["やま (yama) = mountain", "やさい (yasai) = vegetables", "やすい (yasui) = cheap", "やすみ (yasumi) = rest/vacation"]
      },
      {
        char: "ゆ",
        romaji: "yu",
        pronunciation: "Like 'you' in English.",
        mnemonic: "ゆ looks like a fish swimming - in the hot water of a YU (bath).",
        strokeOrder: "2 strokes",
        examples: ["ゆき (yuki) = snow", "ゆめ (yume) = dream", "ゆうめい (yuumei) = famous", "ゆび (yubi) = finger"]
      },
      {
        char: "よ",
        romaji: "yo",
        pronunciation: "Like 'yo' in 'yoga'.",
        mnemonic: "よ looks like someone raising their arm and saying 'YO!'",
        strokeOrder: "2 strokes",
        examples: ["よる (yoru) = night", "よむ (yomu) = to read", "よん (yon) = four", "よかった (yokatta) = that was good!"]
      }
    ]
  },
  {
    name: "R Group (ら行 - ra gyō)",
    description: `The Japanese 'r' sound is VERY DIFFERENT from the English 'r'! It is neither the English 'r'
(where the tongue curls back) nor the French 'r' (guttural, from the back of the throat). It is a sound between 'l' and 'd'.
To produce it: place the tip of your tongue on the roof of your mouth (just behind your upper teeth)
and flick it down ONCE quickly. It's like a very fast 'l' or a very light 'd'.
In linguistics, this is called an alveolar "tap" or "flap".`,
    chars: [
      {
        char: "ら",
        romaji: "ra",
        pronunciation: "The tip of the tongue taps the roof of the mouth once + 'a'. Like a very fast 'la'.",
        mnemonic: "ら looks like a person singing 'LA-la-la' (RA ≈ LA).",
        strokeOrder: "2 strokes",
        examples: ["らいねん (rainen) = next year", "らいしゅう (raishuu) = next week"]
      },
      {
        char: "り",
        romaji: "ri",
        pronunciation: "Tap + 'i'. Like a fast 'li'.",
        mnemonic: "り looks like two blades of grass - RI-ver!",
        strokeOrder: "2 strokes",
        examples: ["りんご (ringo) = apple", "りょこう (ryokou) = travel/trip", "りかい (rikai) = understanding"]
      },
      {
        char: "る",
        romaji: "ru",
        pronunciation: "Tap + 'u'. Like a fast 'loo' with the Japanese u.",
        mnemonic: "る looks like a loop of thread - RU-ler (loop)!",
        strokeOrder: "1 stroke with a loop",
        examples: ["たべる (taberu) = to eat", "みる (miru) = to look/see", "する (suru) = to do"]
      },
      {
        char: "れ",
        romaji: "re",
        pronunciation: "Tap + 'e'. Like a fast 'le'.",
        mnemonic: "れ looks like a person running - RE-lay race!",
        strokeOrder: "2 strokes",
        examples: ["れんしゅう (renshuu) = practice/exercise", "れいぞうこ (reizouko) = refrigerator"]
      },
      {
        char: "ろ",
        romaji: "ro",
        pronunciation: "Tap + 'o'. Like a fast 'lo'.",
        mnemonic: "ろ looks like the number 3 - th-RO-ee (three)!",
        strokeOrder: "1 stroke",
        examples: ["ろく (roku) = six", "いろ (iro) = color", "しろ (shiro) = white"]
      }
    ]
  },
  {
    name: "W Group and N (わ行 + ん)",
    description: `The last basic characters. The W group now only contains わ (wa) and を (wo/o).
ん (n) is the ONLY character that represents a consonant alone (without a vowel).
It can NEVER start a Japanese word.`,
    chars: [
      {
        char: "わ",
        romaji: "wa",
        pronunciation: "Like 'wa' in 'wand'.",
        mnemonic: "わ looks like a person dancing and saying 'WA-ow!'",
        strokeOrder: "2 strokes",
        examples: ["わたし (watashi) = I/me", "わかる (wakaru) = to understand", "かわいい (kawaii) = cute"]
      },
      {
        char: "を",
        romaji: "wo/o",
        pronunciation: "Pronounced 'o' (identical to お). Used ONLY as the direct object particle in sentences.",
        mnemonic: "を is the particle 'WO' - it marks the object (what receives the action of the verb).",
        strokeOrder: "3 strokes",
        examples: ["みずをのむ (mizu wo nomu) = to drink water", "ほんをよむ (hon wo yomu) = to read a book", "テレビをみる (terebi wo miru) = to watch TV"]
      },
      {
        char: "ん",
        romaji: "n",
        pronunciation: "Like the 'n' in 'song'. It is pronounced differently depending on the following sound: 'n' before t/d/n, 'm' before b/p/m, 'ng' before k/g. It can NEVER be at the beginning of a word.",
        mnemonic: "ん looks like the letter 'n' in cursive!",
        strokeOrder: "1 curved stroke",
        examples: ["にほん (nihon) = Japan", "パン (pan) = bread", "せんせい (sensei) = teacher", "さん (san) = Mr./Ms. (honorific suffix)"]
      }
    ]
  }
];

export const dakuten = {
  title: "Dakuten (濁点) - Voiced Sounds ゛",
  description: `Dakuten are two small marks (゛) added to the upper right of a hiragana to
turn it into a "voiced" sound (the vocal cords vibrate). It's like the difference between
'p' (unvoiced, vocal cords still) and 'b' (voiced, vocal cords vibrate) in English.

Transformations:
- K → G (か→が, き→ぎ, く→ぐ, け→げ, こ→ご)
- S → Z (さ→ざ, し→じ, す→ず, せ→ぜ, そ→ぞ)
- T → D (た→だ, ち→ぢ, つ→づ, て→で, と→ど)
- H → B (は→ば, ひ→び, ふ→ぶ, へ→べ, ほ→ぼ)

NOTE: じ (ji) and ぢ (ji) are pronounced the same way.
Similarly, ず (zu) and づ (zu) are pronounced the same.
じ and ず are almost always used in modern writing.`,
  chars: [
    { char: "が", romaji: "ga", base: "か", examples: ["がっこう (gakkou) = school", "がいこくじん (gaikokujin) = foreigner"] },
    { char: "ぎ", romaji: "gi", base: "き", examples: ["ぎんこう (ginkou) = bank", "ぎゅうにく (gyuuniku) = beef"] },
    { char: "ぐ", romaji: "gu", base: "く", examples: ["ぐあい (guai) = condition/state"] },
    { char: "げ", romaji: "ge", base: "け", examples: ["げんき (genki) = energetic/healthy", "げつようび (getsuyoubi) = Monday"] },
    { char: "ご", romaji: "go", base: "こ", examples: ["ごご (gogo) = afternoon", "ごはん (gohan) = rice/meal"] },
    { char: "ざ", romaji: "za", base: "さ", examples: ["ざっし (zasshi) = magazine"] },
    { char: "じ", romaji: "ji", base: "し", examples: ["じかん (jikan) = time/hour", "じしょ (jisho) = dictionary"] },
    { char: "ず", romaji: "zu", base: "す", examples: ["みず (mizu) = water", "すず (suzu) = bell"] },
    { char: "ぜ", romaji: "ze", base: "せ", examples: ["ぜんぶ (zenbu) = all/everything"] },
    { char: "ぞ", romaji: "zo", base: "そ", examples: ["かぞく (kazoku) = family"] },
    { char: "だ", romaji: "da", base: "た", examples: ["だいがく (daigaku) = university", "だれ (dare) = who?"] },
    { char: "ぢ", romaji: "ji", base: "ち", examples: ["はなぢ (hanaji) = nosebleed"] },
    { char: "づ", romaji: "zu", base: "つ", examples: ["つづく (tsuzuku) = to continue"] },
    { char: "で", romaji: "de", base: "て", examples: ["でんわ (denwa) = telephone", "でんしゃ (densha) = train"] },
    { char: "ど", romaji: "do", base: "と", examples: ["どこ (doko) = where?", "どうぞ (douzo) = please/go ahead"] },
    { char: "ば", romaji: "ba", base: "は", examples: ["ばんごはん (bangohan) = dinner"] },
    { char: "び", romaji: "bi", base: "ひ", examples: ["びょういん (byouin) = hospital"] },
    { char: "ぶ", romaji: "bu", base: "ふ", examples: ["ぶんか (bunka) = culture"] },
    { char: "べ", romaji: "be", base: "へ", examples: ["べんきょう (benkyou) = study/to study"] },
    { char: "ぼ", romaji: "bo", base: "ほ", examples: ["ぼく (boku) = I/me (masculine, informal)"] }
  ]
};

export const handakuten = {
  title: "Handakuten (半濁点) - P Sounds ゜",
  description: `Handakuten are a small circle (゜) added to the upper right of the H group hiragana.
They change the H sound to a P sound. Only 5 characters!

H → P (は→ぱ, ひ→ぴ, ふ→ぷ, へ→ぺ, ほ→ぽ)`,
  chars: [
    { char: "ぱ", romaji: "pa", base: "は", examples: ["パン (pan) = bread (often in katakana)"] },
    { char: "ぴ", romaji: "pi", base: "ひ", examples: ["えんぴつ (enpitsu) = pencil"] },
    { char: "ぷ", romaji: "pu", base: "ふ", examples: ["てんぷら (tenpura) = tempura"] },
    { char: "ぺ", romaji: "pe", base: "へ", examples: ["ぺらぺら (perapera) = fluently (speaking)"] },
    { char: "ぽ", romaji: "po", base: "ほ", examples: ["たんぽぽ (tanpopo) = dandelion", "にっぽん (nippon) = Japan"] }
  ]
};

export const yoon = {
  title: "Yōon (拗音) - Combined Sounds",
  description: `Yōon are combinations of a hiragana from the 'i' column (き, し, ち, に, ひ, み, り)
with a small や (ゃ), ゆ (ゅ) or よ (ょ). The small character combines with the previous one
to form a SINGLE syllable.

For example: き (ki) + small ゃ (ya) = きゃ (kya) - a single syllable!
WARNING: きや (ki-ya) = TWO syllables, きゃ (kya) = ONE syllable. The size of the や/ゆ/よ is crucial!`,
  combinations: [
    { chars: "きゃ きゅ きょ", romaji: "kya kyu kyo", examples: ["きゃく (kyaku) = guest/customer", "きょう (kyou) = today", "きゅう (kyuu) = nine"] },
    { chars: "しゃ しゅ しょ", romaji: "sha shu sho", examples: ["しゃしん (shashin) = photo", "しゅくだい (shukudai) = homework", "しょうがっこう (shougakkou) = elementary school"] },
    { chars: "ちゃ ちゅ ちょ", romaji: "cha chu cho", examples: ["おちゃ (ocha) = tea", "ちゅうごく (chuugoku) = China", "ちょっと (chotto) = a little"] },
    { chars: "にゃ にゅ にょ", romaji: "nya nyu nyo", examples: ["にゃん (nyan) = meow"] },
    { chars: "ひゃ ひゅ ひょ", romaji: "hya hyu hyo", examples: ["ひゃく (hyaku) = one hundred", "ひょう (hyou) = table/chart/hail"] },
    { chars: "みゃ みゅ みょ", romaji: "mya myu myo", examples: ["みょうじ (myouji) = surname/family name"] },
    { chars: "りゃ りゅ りょ", romaji: "rya ryu ryo", examples: ["りょうり (ryouri) = cooking (the art)", "りゅう (ryuu) = dragon", "りょかん (ryokan) = Japanese inn"] },
    { chars: "ぎゃ ぎゅ ぎょ", romaji: "gya gyu gyo", examples: ["ぎゅうにゅう (gyuunyuu) = milk", "ぎょうざ (gyouza) = Japanese dumplings"] },
    { chars: "じゃ じゅ じょ", romaji: "ja ju jo", examples: ["じゃあね (jaane) = see you later", "じゅう (juu) = ten", "じょうず (jouzu) = skilled/good at"] },
    { chars: "びゃ びゅ びょ", romaji: "bya byu byo", examples: ["びょういん (byouin) = hospital", "びょうき (byouki) = illness/sickness"] },
    { chars: "ぴゃ ぴゅ ぴょ", romaji: "pya pyu pyo", examples: ["ろっぴゃく (roppyaku) = six hundred"] }
  ]
};

export const specialRules = {
  title: "Special Pronunciation Rules",
  rules: [
    {
      name: "The small つ (っ) - Double consonant (促音 sokuon)",
      explanation: `A small つ (っ) placed before a consonant indicates that the consonant must be DOUBLED.
In practice, it's a short PAUSE before the following consonant.
Imagine holding your breath for a brief moment.

Example: がっこう (gakkou) = school
- が (ga) → PAUSE → こう (kou)
- The pause corresponds to the small っ
- In romaji, the consonant is written twice: kk

WARNING: The difference between a word with and without small つ can completely change the meaning!
- かた (kata) = shape/shoulder
- かった (katta) = won/bought`,
      examples: [
        "がっこう (gakkou) = school - pause before the 'k'",
        "きって (kitte) = stamp - pause before the 't'",
        "ざっし (zasshi) = magazine - pause before the 'sh'",
        "いっぱい (ippai) = a lot/full - pause before the 'p'",
        "ちょっと (chotto) = a little - pause before the 't'",
        "やっぱり (yappari) = as expected/after all - pause before the 'p'"
      ]
    },
    {
      name: "Long vowels (長音 chōon)",
      explanation: `In Japanese, the LENGTH of a vowel can change the meaning of a word!
You need to hold the sound longer (about double the length).

Rules:
- Long あ → add あ: おかあさん (okaasan) = mother
- Long い → add い: おにいさん (oniisan) = big brother
- Long う → add う: くうき (kuuki) = air
- Long え → often add い: せんせい (sensei) = teacher (the い lengthens the え)
- Long お → often add う: おとうさん (otousan) = father (the う lengthens the お)

WARNING:
- おばさん (obasan) = aunt ≠ おばあさん (obaasan) = grandmother
- おじさん (ojisan) = uncle ≠ おじいさん (ojiisan) = grandfather`,
      examples: [
        "おかあさん (okaasan) = mother - long 'a'",
        "おにいさん (oniisan) = big brother - long 'i'",
        "すうがく (suugaku) = mathematics - long 'u'",
        "せんせい (sensei) = teacher - long 'e' (written with い)",
        "おとうさん (otousan) = father - long 'o' (written with う)"
      ]
    }
  ]
};

export const hiraganaExercises = [
  {
    type: "recognition",
    title: "Exercise 1: Vowel Recognition",
    instruction: "What is the romaji for this hiragana?",
    questions: [
      { char: "あ", answer: "a", options: ["a", "i", "u", "e"] },
      { char: "い", answer: "i", options: ["e", "i", "a", "o"] },
      { char: "う", answer: "u", options: ["u", "o", "a", "e"] },
      { char: "え", answer: "e", options: ["i", "a", "e", "u"] },
      { char: "お", answer: "o", options: ["a", "o", "u", "e"] },
      { char: "か", answer: "ka", options: ["ka", "sa", "ta", "na"] },
      { char: "き", answer: "ki", options: ["ki", "si", "chi", "ni"] },
      { char: "く", answer: "ku", options: ["tu", "ku", "su", "nu"] },
      { char: "け", answer: "ke", options: ["ke", "se", "te", "ne"] },
      { char: "こ", answer: "ko", options: ["ko", "so", "to", "no"] },
      { char: "さ", answer: "sa", options: ["sa", "ka", "ta", "na"] },
      { char: "し", answer: "shi", options: ["si", "shi", "chi", "hi"] },
      { char: "す", answer: "su", options: ["su", "ku", "tsu", "nu"] },
      { char: "せ", answer: "se", options: ["se", "ke", "te", "he"] },
      { char: "そ", answer: "so", options: ["so", "ko", "to", "no"] },
      { char: "た", answer: "ta", options: ["ta", "ka", "sa", "na"] },
      { char: "ち", answer: "chi", options: ["ti", "chi", "shi", "tsu"] },
      { char: "つ", answer: "tsu", options: ["tu", "tsu", "su", "chi"] },
      { char: "て", answer: "te", options: ["te", "ke", "se", "he"] },
      { char: "と", answer: "to", options: ["to", "ko", "so", "no"] },
      { char: "な", answer: "na", options: ["na", "ta", "ma", "ra"] },
      { char: "に", answer: "ni", options: ["ni", "mi", "ri", "chi"] },
      { char: "ぬ", answer: "nu", options: ["nu", "mu", "ru", "su"] },
      { char: "ね", answer: "ne", options: ["ne", "me", "re", "he"] },
      { char: "の", answer: "no", options: ["no", "mo", "ro", "ho"] },
      { char: "は", answer: "ha", options: ["ha", "na", "ma", "ra"] },
      { char: "ひ", answer: "hi", options: ["hi", "shi", "chi", "ki"] },
      { char: "ふ", answer: "fu", options: ["hu", "fu", "ku", "tsu"] },
      { char: "へ", answer: "he", options: ["he", "ke", "se", "me"] },
      { char: "ほ", answer: "ho", options: ["ho", "mo", "no", "ko"] },
      { char: "ま", answer: "ma", options: ["ma", "na", "ha", "ra"] },
      { char: "み", answer: "mi", options: ["mi", "ni", "ri", "hi"] },
      { char: "む", answer: "mu", options: ["mu", "nu", "ru", "ku"] },
      { char: "め", answer: "me", options: ["me", "ne", "re", "he"] },
      { char: "も", answer: "mo", options: ["mo", "no", "ho", "ro"] },
      { char: "や", answer: "ya", options: ["ya", "wa", "ra", "ka"] },
      { char: "ゆ", answer: "yu", options: ["yu", "ru", "mu", "ku"] },
      { char: "よ", answer: "yo", options: ["yo", "ro", "mo", "ko"] },
      { char: "ら", answer: "ra", options: ["ra", "na", "ma", "wa"] },
      { char: "り", answer: "ri", options: ["ri", "ni", "mi", "ki"] },
      { char: "る", answer: "ru", options: ["ru", "mu", "nu", "ku"] },
      { char: "れ", answer: "re", options: ["re", "ne", "me", "ke"] },
      { char: "ろ", answer: "ro", options: ["ro", "no", "mo", "ho"] },
      { char: "わ", answer: "wa", options: ["wa", "ra", "ya", "na"] },
      { char: "を", answer: "wo", options: ["wo", "no", "mo", "ho"] },
      { char: "ん", answer: "n", options: ["n", "m", "ng", "nu"] }
    ]
  },
  {
    type: "reading",
    title: "Exercise 2: Word Reading",
    instruction: "Read this word in hiragana and choose the correct meaning.",
    questions: [
      { word: "さくら", romaji: "sakura", answer: "cherry blossom", options: ["cherry blossom", "mountain", "river", "sun"] },
      { word: "やま", romaji: "yama", answer: "mountain", options: ["sea", "mountain", "forest", "island"] },
      { word: "ねこ", romaji: "neko", answer: "cat", options: ["dog", "bird", "cat", "fish"] },
      { word: "みず", romaji: "mizu", answer: "water", options: ["fire", "earth", "water", "wind"] },
      { word: "はな", romaji: "hana", answer: "flower/nose", options: ["tree", "flower/nose", "leaf", "root"] },
      { word: "ほん", romaji: "hon", answer: "book", options: ["pen", "notebook", "book", "paper"] },
      { word: "ともだち", romaji: "tomodachi", answer: "friend", options: ["family", "friend", "neighbor", "teacher"] },
      { word: "たべる", romaji: "taberu", answer: "to eat", options: ["to sleep", "to eat", "to drink", "to run"] },
      { word: "おはよう", romaji: "ohayou", answer: "good morning", options: ["good evening", "goodbye", "good morning", "good night"] },
      { word: "ありがとう", romaji: "arigatou", answer: "thank you", options: ["thank you", "sorry", "please", "you're welcome"] }
    ]
  }
];
