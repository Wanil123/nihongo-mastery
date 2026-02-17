// ============================================================================
// MINNA NO NIHONGO - Complete Grammar Lessons 1-25 (Book I)
// Based on Minna no Nihongo textbook
// ============================================================================

export const grammarLessons = [{
  id: 1,
  title: "Lesson 1: わたしは マイク・ミラーです (I am Mike Miller)",
  level: "Beginner",
  content: `Welcome to Lesson 1 of Minna no Nihongo! In this foundational lesson, you will learn how to introduce yourself, state your name and occupation, ask about other people's identities, and use basic sentence patterns with です (desu). This lesson covers the most essential sentence structure in Japanese: the "A は B です" pattern, which means "A is B." You will also learn how to negate sentences, ask yes/no questions, use the particle も (also), connect nouns with の, and use the polite suffix さん. By the end of this lesson, you will be able to have a simple self-introduction conversation in Japanese.`,
  grammarPoints: [
    {
      title: "N は N です (N wa N desu) — A is B",
      explanation: `This is the most fundamental sentence pattern in Japanese. It states that something (the topic, marked by は) is something else (followed by です). Think of は as "as for..." and です as "is/am/are."

The particle は is written with the hiragana は (ha) but pronounced "wa" when used as a topic marker. です (desu) is the polite copula, equivalent to "to be." The final す in です is often barely pronounced, so it sounds more like "des."

Structure: [Topic] は [Description/Identity] です
This pattern works for stating your name, nationality, occupation, and more.`,
      examples: [
        { jp: "わたしは マイク・ミラーです。", rm: "Watashi wa Maiku Miraa desu.", fr: "I am Mike Miller." },
        { jp: "わたしは がくせいです。", rm: "Watashi wa gakusei desu.", fr: "I am a student." },
        { jp: "マリアさんは ブラジルじんです。", rm: "Maria-san wa Burajiru-jin desu.", fr: "Maria is Brazilian." }
      ]
    },
    {
      title: "N は N じゃ ありません (N wa N ja arimasen) — A is not B",
      explanation: `To negate a です sentence, replace です with じゃ ありません (ja arimasen). This means "is not." The more formal version is ではありません (de wa arimasen), but じゃありません is used in everyday polite speech.

Structure: [Topic] は [Description] じゃ ありません

Note: じゃ is a contraction of では. In very formal writing or speech, you would use ではありません instead.`,
      examples: [
        { jp: "わたしは せんせいじゃ ありません。", rm: "Watashi wa sensei ja arimasen.", fr: "I am not a teacher." },
        { jp: "サントスさんは がくせいじゃ ありません。", rm: "Santosu-san wa gakusei ja arimasen.", fr: "Mr. Santos is not a student." },
        { jp: "わたしは にほんじんじゃ ありません。", rm: "Watashi wa Nihon-jin ja arimasen.", fr: "I am not Japanese." }
      ]
    },
    {
      title: "N は N ですか (N wa N desu ka) — Is A B? / はい、そうです / いいえ、そうじゃ ありません",
      explanation: `To turn a statement into a yes/no question, simply add か (ka) at the end. No change in word order is needed. Japanese does not use question marks in formal writing, but they are common in casual text.

To answer yes: はい、そうです (Hai, sou desu) — "Yes, that's right."
To answer no: いいえ、そうじゃ ありません (Iie, sou ja arimasen) — "No, that's not right."

You can also give a full-sentence answer instead of just そうです.`,
      examples: [
        { jp: "ミラーさんは アメリカじんですか。", rm: "Miraa-san wa Amerika-jin desu ka.", fr: "Is Mr. Miller American?" },
        { jp: "はい、そうです。", rm: "Hai, sou desu.", fr: "Yes, that's right." },
        { jp: "いいえ、そうじゃ ありません。", rm: "Iie, sou ja arimasen.", fr: "No, that's not right." }
      ]
    },
    {
      title: "N₁ も N₂ です (N1 mo N2 desu) — N1 is also N2",
      explanation: `The particle も (mo) means "also" or "too." It replaces は (wa) when you want to say that something is the same as what was previously mentioned. You cannot use は and も together — も takes the place of は.

Structure: [Topic] も [Description] です

Use this when the same description applies to another subject.`,
      examples: [
        { jp: "ミラーさんは かいしゃいんです。サントスさんも かいしゃいんです。", rm: "Miraa-san wa kaishain desu. Santosu-san mo kaishain desu.", fr: "Mr. Miller is a company employee. Mr. Santos is also a company employee." },
        { jp: "わたしも がくせいです。", rm: "Watashi mo gakusei desu.", fr: "I am also a student." }
      ]
    },
    {
      title: "N₁ の N₂ (N1 no N2) — N2 of N1 (Affiliation / Belonging)",
      explanation: `The particle の (no) connects two nouns. In Lesson 1, it is primarily used to show affiliation or belonging — indicating which company, school, or organization someone belongs to.

Structure: [Organization/Group] の [Person/Role]

の can also express possession (my, your, his) and other noun-to-noun relationships, but in this lesson we focus on the affiliation meaning.`,
      examples: [
        { jp: "IMCの しゃいんです。", rm: "IMC no shain desu.", fr: "(I am) an employee of IMC." },
        { jp: "さくら だいがくの がくせいです。", rm: "Sakura daigaku no gakusei desu.", fr: "(I am) a student of Sakura University." },
        { jp: "にほんごの せんせいです。", rm: "Nihongo no sensei desu.", fr: "(He/She is) a Japanese language teacher." }
      ]
    },
    {
      title: "～さん (~san) — Polite name suffix",
      explanation: `さん (san) is a polite suffix added after someone's name. It is similar to "Mr./Ms./Mrs." in English but is gender-neutral and used much more broadly. You can attach it to both family names and given names.

Important rules:
- NEVER use さん with your own name. Saying わたしは ミラーさんです is incorrect and sounds arrogant.
- Always use さん (or another appropriate suffix) when referring to other people.
- Other suffixes include: せんせい (sensei, for teachers/doctors), さま (sama, very polite/formal), くん (kun, for young males), ちゃん (chan, for children/close friends).`,
      examples: [
        { jp: "たなかさんは エンジニアです。", rm: "Tanaka-san wa enjinia desu.", fr: "Mr./Ms. Tanaka is an engineer." },
        { jp: "はじめまして。ミラーです。", rm: "Hajimemashite. Miraa desu.", fr: "Nice to meet you. I am Miller. (no さん for yourself)" },
        { jp: "カリナさんは インドネシアじんです。", rm: "Karina-san wa Indoneshia-jin desu.", fr: "Karina is Indonesian." }
      ]
    }
  ],
  keyPoints: [
    "は (written ha, pronounced wa) marks the topic of the sentence",
    "です (desu) is the polite form of 'to be' — use it at the end of statements",
    "Add か (ka) to the end of a statement to make it a question",
    "も (mo) replaces は to mean 'also' — never use はも together",
    "Never use さん when referring to yourself"
  ],
  examples: [
    {
      japanese: "はじめまして。わたしは マイク・ミラーです。アメリカじんです。IMCの しゃいんです。どうぞ よろしく おねがいします。",
      romaji: "Hajimemashite. Watashi wa Maiku Miraa desu. Amerika-jin desu. IMC no shain desu. Douzo yoroshiku onegaishimasu.",
      french: "Nice to meet you. I am Mike Miller. I am American. I am an employee of IMC. Pleased to meet you.",
      breakdown: "はじめまして (nice to meet you) + わたしは...です (I am...) + アメリカじん (American person) + IMCの しゃいん (IMC employee) + どうぞよろしく (pleased to meet you)"
    },
    {
      japanese: "ワンさんは ちゅうごくじんですか。...いいえ、ちゅうごくじんじゃ ありません。かんこくじんです。",
      romaji: "Wan-san wa Chuugoku-jin desu ka. ...Iie, Chuugoku-jin ja arimasen. Kankoku-jin desu.",
      french: "Is Mr. Wang Chinese? ...No, he is not Chinese. He is Korean.",
      breakdown: "ワンさん (Mr. Wang) + は (topic) + ちゅうごくじん (Chinese person) + ですか (is?) + いいえ (no) + じゃありません (is not) + かんこくじん (Korean person) + です (is)"
    },
    {
      japanese: "マリアさんは がくせいです。カリナさんも がくせいです。",
      romaji: "Maria-san wa gakusei desu. Karina-san mo gakusei desu.",
      french: "Maria is a student. Karina is also a student.",
      breakdown: "マリアさん (Maria) + は (topic) + がくせい (student) + です (is). カリナさん (Karina) + も (also) + がくせい (student) + です (is)"
    }
  ],
  exercises: [
    {
      question: "Translate into Japanese: 'I am a teacher.'",
      answer: "わたしは せんせいです。",
      explanation: "Use the basic pattern: わたし (I) + は (topic marker) + せんせい (teacher) + です (am).",
      hint: "teacher = せんせい"
    },
    {
      question: "How do you say 'Mr. Tanaka is not a student'?",
      answer: "たなかさんは がくせいじゃ ありません。",
      explanation: "Use the negative form: replace です with じゃ ありません to negate.",
      hint: "student = がくせい"
    },
    {
      question: "Fill in the blank: サントスさんは ブラジルじんです。マリアさん＿ ブラジルじんです。",
      answer: "も",
      explanation: "Since Maria is ALSO Brazilian (same as Santos), we use も (also) instead of は."
    },
    {
      question: "Your Japanese colleague asks: がくせいですか。You are not a student, you are an engineer. How do you reply?",
      answer: "いいえ、がくせいじゃ ありません。エンジニアです。",
      explanation: "First deny with いいえ and the negative form, then state what you actually are."
    },
    {
      question: "Rearrange: です / の / IMC / わたし / しゃいん / は",
      answer: "わたしは IMCの しゃいんです。",
      explanation: "わたしは (I + topic) + IMCの (of IMC) + しゃいん (employee) + です (am). The の connects the company to the role."
    }
  ]
},
{
  id: 2,
  title: "Lesson 2: これは 本です (This is a book)",
  level: "Beginner",
  content: `In Lesson 2, you will learn how to identify and ask about objects using demonstrative words. Japanese has a very systematic three-way distance system: こ- (near the speaker), そ- (near the listener), and あ- (far from both). You will learn これ/それ/あれ (this/that/that over there) as standalone pronouns, and この/その/あの as demonstrative adjectives that modify nouns. You will also learn how to confirm and deny information, ask "or" questions, use の as a pronoun replacement, and politely ask about someone's country of origin.`,
  grammarPoints: [
    {
      title: "これ / それ / あれ (kore / sore / are) — This / That / That over there",
      explanation: `These are demonstrative pronouns used to point to things:
- これ (kore): something near the SPEAKER
- それ (sore): something near the LISTENER
- あれ (are): something far from BOTH speaker and listener

These words stand alone as pronouns and do not need a noun after them.

To ask "what is this/that?", use: これ/それ/あれ は なんですか。`,
      examples: [
        { jp: "これは ほんです。", rm: "Kore wa hon desu.", fr: "This is a book." },
        { jp: "それは なんですか。", rm: "Sore wa nan desu ka.", fr: "What is that?" },
        { jp: "あれは さくらだいがくです。", rm: "Are wa Sakura daigaku desu.", fr: "That over there is Sakura University." }
      ]
    },
    {
      title: "この / その / あの + N (kono / sono / ano + N) — This N / That N / That N over there",
      explanation: `When you want to specify WHICH noun you are talking about, use この/その/あの directly before the noun. Unlike これ/それ/あれ, these MUST be followed by a noun.

- この + noun: this [noun] (near speaker)
- その + noun: that [noun] (near listener)
- あの + noun: that [noun] over there (far from both)

Remember: この/その/あの ALWAYS need a noun after them. You cannot say この alone.`,
      examples: [
        { jp: "このほんは わたしのです。", rm: "Kono hon wa watashi no desu.", fr: "This book is mine." },
        { jp: "そのかばんは だれのですか。", rm: "Sono kaban wa dare no desu ka.", fr: "Whose bag is that?" },
        { jp: "あのかたは どなたですか。", rm: "Ano kata wa donata desu ka.", fr: "Who is that person over there?" }
      ]
    },
    {
      title: "そうです / そうじゃ ありません — That's right / That's not right",
      explanation: `When someone asks a yes/no question, you can confirm or deny using:
- はい、そうです。 (Hai, sou desu.) — "Yes, that's right."
- いいえ、そうじゃ ありません。 (Iie, sou ja arimasen.) — "No, that's not right."

These are the standard short answers for confirmation questions. After いいえ, you typically add what it actually is.`,
      examples: [
        { jp: "これは じしょですか。...はい、そうです。", rm: "Kore wa jisho desu ka. ...Hai, sou desu.", fr: "Is this a dictionary? ...Yes, it is." },
        { jp: "それは ノートですか。...いいえ、そうじゃ ありません。てちょうです。", rm: "Sore wa nooto desu ka. ...Iie, sou ja arimasen. Techou desu.", fr: "Is that a notebook? ...No, it isn't. It's a planner." }
      ]
    },
    {
      title: "～か、～か (~ ka, ~ ka) — A or B (question with choices)",
      explanation: `To ask an "or" question (offering two or more choices), list the options each followed by か:

Structure: A ですか、B ですか。 = "Is it A, or is it B?"

The answer should specify which one it is, not just はい or いいえ.`,
      examples: [
        { jp: "これは 「9」ですか、「7」ですか。", rm: "Kore wa 'kyuu' desu ka, 'nana' desu ka.", fr: "Is this a '9' or a '7'?" },
        { jp: "それは にほんごの ほんですか、えいごの ほんですか。", rm: "Sore wa Nihongo no hon desu ka, Eigo no hon desu ka.", fr: "Is that a Japanese book or an English book?" },
        { jp: "にほんごの ほんです。", rm: "Nihongo no hon desu.", fr: "It's a Japanese book." }
      ]
    },
    {
      title: "N の (N no) — Pronoun use of の (replacing a noun)",
      explanation: `When the noun being talked about is obvious from context, you can drop it and just use の after the possessor or descriptor. The の acts as a pronoun meaning "one" or "the one belonging to."

Example: わたしの ほんです → わたしのです = "It's mine."
(ほん is dropped because we already know we're talking about a book.)

This works with any noun modifier: さくらだいがくの → さくらだいがくのです = "It's Sakura University's (one)."`,
      examples: [
        { jp: "このかさは あなたのですか。", rm: "Kono kasa wa anata no desu ka.", fr: "Is this umbrella yours?" },
        { jp: "いいえ、わたしのじゃ ありません。", rm: "Iie, watashi no ja arimasen.", fr: "No, it's not mine." },
        { jp: "あのかばんは だれのですか。...サントスさんのです。", rm: "Ano kaban wa dare no desu ka. ...Santosu-san no desu.", fr: "Whose bag is that? ...It's Mr. Santos's." }
      ]
    },
    {
      title: "おくには どちらですか (O-kuni wa dochira desu ka) — Where are you from?",
      explanation: `This is the polite way to ask about someone's country of origin. おくに (o-kuni) is the polite form of くに (country), with the honorific prefix お. どちら (dochira) is the polite form of どこ (where).

This is a set phrase you should memorize for introductions. The answer uses the pattern: [Country] から きました (I came from [Country]).`,
      examples: [
        { jp: "おくには どちらですか。", rm: "O-kuni wa dochira desu ka.", fr: "Where are you from? (polite)" },
        { jp: "アメリカです。", rm: "Amerika desu.", fr: "I'm from America." },
        { jp: "タイから きました。", rm: "Tai kara kimashita.", fr: "I came from Thailand." }
      ]
    }
  ],
  keyPoints: [
    "これ/それ/あれ are standalone pronouns; この/その/あの must be followed by a noun",
    "The こそあ system is based on distance: こ = near speaker, そ = near listener, あ = far from both",
    "Use ～か、～か to ask 'or' questions — do not answer with はい/いいえ",
    "の can replace a noun that is already understood from context",
    "Use おくには どちらですか to politely ask someone's country of origin"
  ],
  examples: [
    {
      japanese: "これは コンピューターですか。...いいえ、それは テレビです。",
      romaji: "Kore wa konpyuutaa desu ka. ...Iie, sore wa terebi desu.",
      french: "Is this a computer? ...No, that is a television.",
      breakdown: "これ (this) + は (topic) + コンピューター (computer) + ですか (is it?). いいえ (no) + それ (that) + は (topic) + テレビ (TV) + です (is)"
    },
    {
      japanese: "そのかぎは だれのですか。...わたしのです。",
      romaji: "Sono kagi wa dare no desu ka. ...Watashi no desu.",
      french: "Whose key is that? ...It's mine.",
      breakdown: "その (that) + かぎ (key) + は (topic) + だれの (whose) + ですか (is it?). わたしの (mine) + です (is)"
    },
    {
      japanese: "あのかたは どなたですか。...IMCの ミラーさんです。",
      romaji: "Ano kata wa donata desu ka. ...IMC no Miraa-san desu.",
      french: "Who is that person? ...That is Mr. Miller from IMC.",
      breakdown: "あの (that over there) + かた (person, polite) + は + どなた (who, polite) + ですか. IMCの (of IMC) + ミラーさん (Mr. Miller) + です (is)"
    }
  ],
  exercises: [
    {
      question: "Translate: 'What is that?' (the object is near the listener)",
      answer: "それは なんですか。",
      explanation: "Use それ because the object is near the listener. なん (what) + ですか (is it?)."
    },
    {
      question: "Fill in the blank: ＿＿ほんは わたしのです。(This book is mine — the book is near you, the speaker)",
      answer: "この",
      explanation: "Use この (this + noun) because the book is near the speaker and we need a noun (ほん) after it."
    },
    {
      question: "Someone asks これは ボールペンですか、シャープペンシルですか。It is a ballpoint pen. How do you answer?",
      answer: "ボールペンです。",
      explanation: "For 'or' questions (A か B か), you answer by stating which one it is, not はい/いいえ."
    },
    {
      question: "How do you politely ask someone which country they are from?",
      answer: "おくには どちらですか。",
      explanation: "おくに (country, polite) + は (topic) + どちら (where, polite) + ですか (is it?)"
    },
    {
      question: "Translate: 'That notebook over there is Mr. Tanaka's.'",
      answer: "あのノートは たなかさんのです。",
      explanation: "あの (that over there) + ノート (notebook) + は (topic) + たなかさんの (Tanaka's) + です (is). The の replaces the repeated noun.",
      hint: "notebook = ノート"
    }
  ]
},
{
  id: 3,
  title: "Lesson 3: ここは 食堂です (This is the cafeteria)",
  level: "Beginner",
  content: `Lesson 3 expands the demonstrative system to places. You will learn ここ/そこ/あそこ (here/there/over there) for locations, how to say where things and places are, how to ask for locations, how to describe where products come from, how to understand prices and numbers, and the essential shopping phrase ～をください (please give me ~). This lesson is very practical for navigating buildings, asking for directions, and shopping in Japan.`,
  grammarPoints: [
    {
      title: "ここ / そこ / あそこ (koko / soko / asoko) — Here / There / Over there",
      explanation: `Just like これ/それ/あれ for objects, Japanese uses a parallel set for places:
- ここ (koko): here, this place (near the speaker)
- そこ (soko): there, that place (near the listener)
- あそこ (asoko): over there (far from both)
- どこ (doko): where? (question word)

Note: あそこ is slightly irregular — you might expect あこ, but it is あそこ.`,
      examples: [
        { jp: "ここは しょくどうです。", rm: "Koko wa shokudou desu.", fr: "Here is the cafeteria." },
        { jp: "そこは じむしょです。", rm: "Soko wa jimusho desu.", fr: "There is the office." },
        { jp: "おてあらいは あそこです。", rm: "Otearai wa asoko desu.", fr: "The restroom is over there." }
      ]
    },
    {
      title: "N は (place) です — N is at/in (place)",
      explanation: `To state where something or someplace is, use this pattern:

Structure: [Thing/Place] は [Location] です

This is a simple way to tell someone where something is located. The location can be ここ/そこ/あそこ or a more specific place description.`,
      examples: [
        { jp: "でんわは あそこです。", rm: "Denwa wa asoko desu.", fr: "The telephone is over there." },
        { jp: "エレベーターは あちらです。", rm: "Erebeetaa wa achira desu.", fr: "The elevator is that way." },
        { jp: "うけつけは 1かいです。", rm: "Uketsuke wa ikkai desu.", fr: "The reception is on the 1st floor." }
      ]
    },
    {
      title: "(Place) は どこ / どちらですか — Where is (place)?",
      explanation: `To ask where something is:
- どこ (doko): where? (casual/neutral)
- どちら (dochira): where? / which direction? (more polite)

Structure: [Thing you're looking for] は どこですか / どちらですか

どちら is more polite than どこ and is preferred when speaking to strangers or in formal situations.`,
      examples: [
        { jp: "トイレは どこですか。", rm: "Toire wa doko desu ka.", fr: "Where is the restroom?" },
        { jp: "ミラーさんは どちらですか。", rm: "Miraa-san wa dochira desu ka.", fr: "Where is Mr. Miller?" },
        { jp: "きょうしつは どこですか。...2かいです。", rm: "Kyoushitsu wa doko desu ka. ...Nikai desu.", fr: "Where is the classroom? ...It's on the 2nd floor." }
      ]
    },
    {
      title: "N₁ の N₂ (Origin / Product) — N2 from/of N1",
      explanation: `In Lesson 1, you learned の for affiliation. Here, の is also used to indicate the origin or manufacturer of a product:

Structure: [Country/Brand] の [Product] = a [Product] from [Country/Brand]

This is commonly used when talking about where products are made or what brand they belong to.`,
      examples: [
        { jp: "これは にほんの くるまです。", rm: "Kore wa Nihon no kuruma desu.", fr: "This is a Japanese car." },
        { jp: "それは イタリアの かばんです。", rm: "Sore wa Itaria no kaban desu.", fr: "That is an Italian bag." },
        { jp: "あのワインは フランスのです。", rm: "Ano wain wa Furansu no desu.", fr: "That wine over there is French (one)." }
      ]
    },
    {
      title: "Numbers + えん (Prices)",
      explanation: `To state prices in Japanese, use the number followed by えん (en, yen).

To ask the price: いくらですか (Ikura desu ka) = "How much is it?"

Useful number review for shopping:
- ひゃく (100), にひゃく (200), さんびゃく (300), よんひゃく (400)
- せん (1,000), にせん (2,000), さんぜん (3,000)
- いちまん (10,000)

When asking the price of a specific item, point to it or use これ/それ/あれ.`,
      examples: [
        { jp: "これは いくらですか。", rm: "Kore wa ikura desu ka.", fr: "How much is this?" },
        { jp: "それは さんびゃくえんです。", rm: "Sore wa sanbyaku-en desu.", fr: "That is 300 yen." },
        { jp: "このとけいは いちまん ごせんえんです。", rm: "Kono tokei wa ichiman gosen-en desu.", fr: "This watch is 15,000 yen." }
      ]
    },
    {
      title: "～を ください (~wo kudasai) — Please give me ~",
      explanation: `This is one of the most useful phrases for shopping and ordering. を (wo) marks the object, and ください (kudasai) means "please give me."

Structure: [Item] を ください = "Please give me [item]" / "I'll have [item]"

You can specify quantities by adding a number or counter before ください. This phrase is polite and appropriate in shops, restaurants, and everyday situations.`,
      examples: [
        { jp: "コーヒーを ください。", rm: "Koohii wo kudasai.", fr: "Coffee, please." },
        { jp: "これを ください。", rm: "Kore wo kudasai.", fr: "This one, please." },
        { jp: "その ノートを ３さつ ください。", rm: "Sono nooto wo san-satsu kudasai.", fr: "Please give me 3 of those notebooks." }
      ]
    }
  ],
  keyPoints: [
    "ここ/そこ/あそこ follow the same こ/そ/あ distance system as これ/それ/あれ",
    "どこ asks 'where' — use どちら for a more polite version",
    "の can indicate origin: にほんの くるま = a Japanese car",
    "いくらですか is the standard way to ask 'how much?'",
    "～をください is the go-to phrase for ordering and shopping"
  ],
  examples: [
    {
      japanese: "すみません、おてあらいは どこですか。...おてあらいは あそこです。",
      romaji: "Sumimasen, otearai wa doko desu ka. ...Otearai wa asoko desu.",
      french: "Excuse me, where is the restroom? ...The restroom is over there.",
      breakdown: "すみません (excuse me) + おてあらい (restroom, polite) + は + どこ (where) + ですか. あそこ (over there) + です (is)"
    },
    {
      japanese: "このかさは いくらですか。...にせん ごひゃくえんです。じゃ、これを ください。",
      romaji: "Kono kasa wa ikura desu ka. ...Nisen gohyaku-en desu. Ja, kore wo kudasai.",
      french: "How much is this umbrella? ...It's 2,500 yen. Well then, I'll take this one please.",
      breakdown: "この (this) + かさ (umbrella) + いくら (how much) + ですか. にせんごひゃくえん (2,500 yen). じゃ (well then) + これを (this + object) + ください (please)"
    },
    {
      japanese: "これは どこの くるまですか。...にほんの くるまです。トヨタです。",
      romaji: "Kore wa doko no kuruma desu ka. ...Nihon no kuruma desu. Toyota desu.",
      french: "Where is this car from? ...It's a Japanese car. It's a Toyota.",
      breakdown: "どこの (where from) + くるま (car) + ですか. にほんの (Japanese / of Japan) + くるま (car) + です. トヨタ (Toyota) + です (is)"
    }
  ],
  exercises: [
    {
      question: "Ask 'Where is the elevator?' in polite Japanese.",
      answer: "エレベーターは どちらですか。",
      explanation: "Use どちら (the polite form of どこ) for asking directions politely."
    },
    {
      question: "Translate: 'This is a French wine.'",
      answer: "これは フランスの ワインです。",
      explanation: "フランスの (French / of France) + ワイン (wine). The の connects the country of origin to the product.",
      hint: "France = フランス, wine = ワイン"
    },
    {
      question: "You want to buy two of those pencils. What do you say?",
      answer: "そのえんぴつを ２ほん ください。",
      explanation: "その (that) + えんぴつ (pencil) + を (object) + にほん (2 long thin objects) + ください (please). Pencils use the counter ほん because they are long and thin.",
      hint: "pencil = えんぴつ, counter for long things = ほん"
    },
    {
      question: "Fill in the blank: おてあらいは ＿＿ですか。(Where is the restroom?)",
      answer: "どこ",
      explanation: "どこ (where) is the question word for location."
    },
    {
      question: "How do you ask 'How much is that watch?'",
      answer: "そのとけいは いくらですか。",
      explanation: "その (that) + とけい (watch) + は (topic) + いくら (how much) + ですか (is it?).",
      hint: "watch = とけい, how much = いくら"
    }
  ]
},
{
  id: 4,
  title: "Lesson 4: 今 何時ですか (What time is it now?)",
  level: "Beginner",
  content: `Lesson 4 introduces telling time, the verb ます-form conjugation system, and essential time-related grammar. You will learn how to ask and tell the time, use verbs in their polite present/past affirmative and negative forms, express time ranges with から～まで (from...to...), connect nouns with と (and), and mark specific times with the particle に. This lesson is critical because it is your first encounter with Japanese verbs beyond です, opening the door to describing actions and daily routines.`,
  grammarPoints: [
    {
      title: "なんじですか / ～じ～ふん (Telling Time)",
      explanation: `To ask the time: いま なんじですか (Ima nan-ji desu ka) = "What time is it now?"

Hours use ～じ (ji): いちじ (1:00), にじ (2:00), さんじ (3:00)...
Minutes use ～ふん/ぷん (fun/pun): いっぷん (1 min), にふん (2 min), さんぷん (3 min)...
Half past = はん (han): さんじはん (3:30)

Watch for irregular readings:
- 4:00 = よじ (NOT しじ)
- 7:00 = しちじ (NOT ななじ)
- 9:00 = くじ (NOT きゅうじ)

For AM/PM:
- ごぜん (gozen) = AM
- ごご (gogo) = PM`,
      examples: [
        { jp: "いま なんじですか。...ごご ３じです。", rm: "Ima nan-ji desu ka. ...Gogo san-ji desu.", fr: "What time is it now? ...It's 3:00 PM." },
        { jp: "ごぜん ７じはんです。", rm: "Gozen shichi-ji han desu.", fr: "It's 7:30 AM." },
        { jp: "じゅうにじ じゅうごふんです。", rm: "Juuni-ji juugo-fun desu.", fr: "It's 12:15." }
      ]
    },
    {
      title: "V-ます / V-ません / V-ました / V-ませんでした (Verb conjugation: polite form)",
      explanation: `Japanese verbs in polite speech use four basic conjugations built on the ます (masu) stem:

1. V-ます (present/future affirmative): "I do" / "I will do"
2. V-ません (present/future negative): "I don't do" / "I won't do"
3. V-ました (past affirmative): "I did"
4. V-ませんでした (past negative): "I didn't do"

Important: In Japanese, the present tense (ます) also covers the future. Context determines whether it means "I do (regularly)" or "I will do."

These forms do NOT change based on the subject — the same form is used for I, you, he, she, we, they.`,
      examples: [
        { jp: "まいにち べんきょうします。", rm: "Mainichi benkyou shimasu.", fr: "I study every day." },
        { jp: "あした はたらきません。", rm: "Ashita hatarakimasen.", fr: "I won't work tomorrow." },
        { jp: "きのう べんきょうしました。", rm: "Kinou benkyou shimashita.", fr: "I studied yesterday." }
      ]
    },
    {
      title: "～から ～まで (~ kara ~ made) — From ~ to ~",
      explanation: `から (kara) means "from" (starting point) and まで (made) means "to/until" (ending point). They can be used for both time and place.

Structure: [Start] から [End] まで

They can be used together or separately:
- ９じから ５じまで (from 9 to 5)
- ９じから はたらきます (I work from 9)
- ５じまで はたらきます (I work until 5)`,
      examples: [
        { jp: "９じから ５じまで はたらきます。", rm: "Ku-ji kara go-ji made hatarakimasu.", fr: "I work from 9:00 to 5:00." },
        { jp: "げつようびから きんようびまで べんきょうします。", rm: "Getsuyoubi kara kinyoubi made benkyou shimasu.", fr: "I study from Monday to Friday." },
        { jp: "ひるやすみは 12じから 1じまでです。", rm: "Hiruyasumi wa juuni-ji kara ichi-ji made desu.", fr: "Lunch break is from 12:00 to 1:00." }
      ]
    },
    {
      title: "N と N (N to N) — N and N",
      explanation: `The particle と (to) connects two nouns, meaning "and." Unlike English, と can only connect nouns, not sentences or verbs.

Structure: N₁ と N₂ = N1 and N2

Note: と only links nouns. To connect sentences, you need different conjunctions (covered in later lessons).`,
      examples: [
        { jp: "にちようびと どようびは やすみです。", rm: "Nichiyoubi to doyoubi wa yasumi desu.", fr: "Sunday and Saturday are days off." },
        { jp: "ぎんこうの やすみは どようびと にちようびです。", rm: "Ginkou no yasumi wa doyoubi to nichiyoubi desu.", fr: "The bank's days off are Saturday and Sunday." },
        { jp: "あさごはんは パンと コーヒーです。", rm: "Asagohan wa pan to koohii desu.", fr: "Breakfast is bread and coffee." }
      ]
    },
    {
      title: "～に V (Time + ni + Verb) — Doing something at a specific time",
      explanation: `The particle に (ni) marks a specific point in time when an action takes place. Use に after:
- Clock times: ７じに おきます (I wake up at 7)
- Days of the week: にちようびに やすみます (I rest on Sunday)
- Dates: ３がつ２５にちに にほんへ いきます (I go to Japan on March 25th)

Do NOT use に with:
- Relative time words: きょう、あした、きのう、まいにち、いつ (these never take に)
- General time words: あさ、ひる、よる (optional — に may or may not be used)`,
      examples: [
        { jp: "まいあさ ６じに おきます。", rm: "Maiasa roku-ji ni okimasu.", fr: "I wake up at 6:00 every morning." },
        { jp: "１１じに ねます。", rm: "Juuichi-ji ni nemasu.", fr: "I go to bed at 11:00." },
        { jp: "にちようびに やすみます。", rm: "Nichiyoubi ni yasumimasu.", fr: "I rest on Sunday." }
      ]
    }
  ],
  keyPoints: [
    "In Japanese, present tense (ます) covers both present and future actions",
    "Verb forms don't change based on who performs the action (no person conjugation)",
    "に marks specific times (clock times, days, dates) — but NOT relative time words like きょう or あした",
    "から and まで work for both time and place ranges",
    "と connects nouns only — not sentences or clauses"
  ],
  examples: [
    {
      japanese: "まいにち ９じから ５じまで はたらきます。どようびと にちようびは はたらきません。",
      romaji: "Mainichi ku-ji kara go-ji made hatarakimasu. Doyoubi to nichiyoubi wa hatarakimasen.",
      french: "I work every day from 9:00 to 5:00. I don't work on Saturday and Sunday.",
      breakdown: "まいにち (every day) + ９じから (from 9) + ５じまで (to 5) + はたらきます (work). どようびと にちようび (Saturday and Sunday) + は (topic) + はたらきません (don't work)"
    },
    {
      japanese: "きのう ６じに おきました。そして、７じに がっこうへ いきました。",
      romaji: "Kinou roku-ji ni okimashita. Soshite, shichi-ji ni gakkou e ikimashita.",
      french: "Yesterday I woke up at 6:00. Then, I went to school at 7:00.",
      breakdown: "きのう (yesterday) + ６じに (at 6) + おきました (woke up). そして (then) + ７じに (at 7) + がっこうへ (to school) + いきました (went)"
    },
    {
      japanese: "ぎんこうは ９じから ３じまでです。やすみは どようびと にちようびです。",
      romaji: "Ginkou wa ku-ji kara san-ji made desu. Yasumi wa doyoubi to nichiyoubi desu.",
      french: "The bank is open from 9:00 to 3:00. Its days off are Saturday and Sunday.",
      breakdown: "ぎんこう (bank) + は + ９じから (from 9) + ３じまで (to 3) + です. やすみ (day off) + は + どようびと にちようび (Saturday and Sunday) + です"
    }
  ],
  exercises: [
    {
      question: "How do you say 'It is now 8:30 AM'?",
      answer: "いま ごぜん ８じはんです。",
      explanation: "いま (now) + ごぜん (AM) + ８じ (8 o'clock) + はん (half/30 minutes) + です (is)."
    },
    {
      question: "Change to past tense: わたしは べんきょうします。",
      answer: "わたしは べんきょうしました。",
      explanation: "Replace します (present) with しました (past) to express 'I studied.'"
    },
    {
      question: "Fill in the blank: まいあさ ７じ＿ おきます。(I wake up at 7 every morning.)",
      answer: "に",
      explanation: "に marks the specific time (7 o'clock) when the action (waking up) takes place."
    },
    {
      question: "Translate: 'I work from Monday to Friday.'",
      answer: "げつようびから きんようびまで はたらきます。",
      explanation: "げつようび (Monday) + から (from) + きんようび (Friday) + まで (to/until) + はたらきます (work)."
    },
    {
      question: "Change to negative: きのう べんきょうしました。→ きのう ＿＿＿。(I didn't study yesterday.)",
      answer: "きのう べんきょうしませんでした。",
      explanation: "The past negative of します is しませんでした."
    }
  ]
},
{
  id: 5,
  title: "Lesson 5: 京都へ 行きます (I go to Kyoto)",
  level: "Beginner",
  content: `Lesson 5 teaches you how to talk about movement and travel. You will learn the three essential movement verbs — いきます (to go), きます (to come), and かえります (to return) — along with the particles that accompany them. The particle へ (e) marks the direction/destination, で (de) marks the means of transportation, and と (to) indicates a companion. You will also learn how to say you aren't going anywhere and how to ask "when" using いつ. This lesson enables you to describe your travel plans, commute, and weekend activities.`,
  grammarPoints: [
    {
      title: "Place へ いきます / きます / かえります — Go / Come / Return to a place",
      explanation: `The particle へ (written as へ but pronounced "e") marks the direction or destination of movement verbs:

- いきます (ikimasu): to go
- きます (kimasu): to come
- かえります (kaerimasu): to return/go home

Structure: [Place] へ いきます/きます/かえります

Note: You can also use に instead of へ for the destination. へ emphasizes the direction, while に emphasizes the arrival point. In everyday speech, they are largely interchangeable for these verbs.`,
      examples: [
        { jp: "きょうとへ いきます。", rm: "Kyouto e ikimasu.", fr: "I will go to Kyoto." },
        { jp: "あした にほんへ きます。", rm: "Ashita Nihon e kimasu.", fr: "He/She will come to Japan tomorrow." },
        { jp: "こんばん うちへ かえります。", rm: "Konban uchi e kaerimasu.", fr: "I will go home tonight." }
      ]
    },
    {
      title: "どこ(へ)も いきません — I'm not going anywhere",
      explanation: `To say you are NOT going anywhere, use the pattern:

どこ(へ)も + negative verb

The particle も after a question word + negative verb creates a total negation:
- どこも いきません = I'm not going anywhere
- なにも たべません = I'm not eating anything (Lesson 6+)
- だれも いません = Nobody is there (Lesson 6+)

This pattern is very useful for expressing that nothing will happen.`,
      examples: [
        { jp: "やすみは どこへ いきますか。...どこ(へ)も いきません。", rm: "Yasumi wa doko e ikimasu ka. ...Doko (e) mo ikimasen.", fr: "Where will you go during the holiday? ...I'm not going anywhere." },
        { jp: "にちようびは どこも いきませんでした。", rm: "Nichiyoubi wa doko mo ikimasen deshita.", fr: "I didn't go anywhere on Sunday." }
      ]
    },
    {
      title: "Vehicle / Means で いきます — Go by (means of transport)",
      explanation: `The particle で (de) indicates the means or method of transportation used to travel:

Structure: [Means of transport] で いきます/きます/かえります

Common transportation words:
- でんしゃ (train), バス (bus), タクシー (taxi), じてんしゃ (bicycle)
- くるま (car), ひこうき (airplane), ちかてつ (subway), しんかんせん (bullet train)
- あるいて (on foot) — Note: あるいて does NOT use で because it is already the て-form of あるく (to walk)`,
      examples: [
        { jp: "でんしゃで いきます。", rm: "Densha de ikimasu.", fr: "I go by train." },
        { jp: "タクシーで ホテルへ かえります。", rm: "Takushii de hoteru e kaerimasu.", fr: "I return to the hotel by taxi." },
        { jp: "あるいて がっこうへ いきます。", rm: "Aruite gakkou e ikimasu.", fr: "I walk to school." }
      ]
    },
    {
      title: "Person と V — Do something with someone",
      explanation: `The particle と (to) can indicate a companion — the person you do something with:

Structure: [Person] と [Verb] = do [Verb] with [Person]

If you go alone, use ひとりで (hitori de) = "by oneself / alone." Note: ひとりで does NOT use と.`,
      examples: [
        { jp: "かぞくと にほんへ きました。", rm: "Kazoku to Nihon e kimashita.", fr: "I came to Japan with my family." },
        { jp: "ともだちと きょうとへ いきます。", rm: "Tomodachi to Kyouto e ikimasu.", fr: "I will go to Kyoto with a friend." },
        { jp: "ひとりで いきます。", rm: "Hitori de ikimasu.", fr: "I will go alone." }
      ]
    },
    {
      title: "いつ (itsu) — When?",
      explanation: `いつ (itsu) is the question word for "when." It can be placed at the beginning of the sentence or before the verb.

Structure: いつ [verb]ますか = "When do you [verb]?"

Important: いつ does NOT take the particle に. It is used on its own.

To answer, provide the specific time, which may or may not require に depending on the type of time word.`,
      examples: [
        { jp: "いつ にほんへ きましたか。", rm: "Itsu Nihon e kimashita ka.", fr: "When did you come to Japan?" },
        { jp: "３がつ２５にちに きました。", rm: "San-gatsu nijuugo-nichi ni kimashita.", fr: "I came on March 25th." },
        { jp: "いつ くにへ かえりますか。", rm: "Itsu kuni e kaerimasu ka.", fr: "When will you return to your country?" }
      ]
    }
  ],
  keyPoints: [
    "へ (pronounced 'e') marks the direction/destination of movement verbs",
    "で marks the means of transportation — but あるいて (on foot) does not use で",
    "と marks a companion; ひとりで means 'alone'",
    "どこ(へ)も + negative verb = not going anywhere",
    "いつ (when) does not take the particle に"
  ],
  examples: [
    {
      japanese: "せんしゅう ひとりで ひこうきで とうきょうへ いきました。",
      romaji: "Senshuu hitori de hikouki de Toukyou e ikimashita.",
      french: "Last week I went to Tokyo alone by airplane.",
      breakdown: "せんしゅう (last week) + ひとりで (alone) + ひこうきで (by airplane) + とうきょうへ (to Tokyo) + いきました (went)"
    },
    {
      japanese: "にちようびに かぞくと くるまで うみへ いきます。",
      romaji: "Nichiyoubi ni kazoku to kuruma de umi e ikimasu.",
      french: "On Sunday, I will go to the sea with my family by car.",
      breakdown: "にちようびに (on Sunday) + かぞくと (with family) + くるまで (by car) + うみへ (to the sea) + いきます (will go)"
    },
    {
      japanese: "いつ くにへ かえりますか。...らいねんの ３がつに かえります。",
      romaji: "Itsu kuni e kaerimasu ka. ...Rainen no san-gatsu ni kaerimasu.",
      french: "When will you return to your country? ...I'll return in March of next year.",
      breakdown: "いつ (when) + くにへ (to country) + かえりますか (will you return?). らいねんの (next year's) + ３がつに (in March) + かえります (will return)"
    }
  ],
  exercises: [
    {
      question: "Translate: 'I go to school by bus.'",
      answer: "バスで がっこうへ いきます。",
      explanation: "バスで (by bus) + がっこうへ (to school) + いきます (go).",
      hint: "bus = バス, school = がっこう"
    },
    {
      question: "Your friend asks: やすみは どこへ いきますか。You're staying home. How do you reply?",
      answer: "どこ(へ)も いきません。",
      explanation: "どこも + negative verb means 'not going anywhere.'"
    },
    {
      question: "Fill in: ともだち＿ きょうとへ いきました。(I went to Kyoto with a friend.)",
      answer: "と",
      explanation: "と indicates the companion — the person you did the action with."
    },
    {
      question: "Rearrange: かえりました / うちへ / タクシーで / きのう",
      answer: "きのう タクシーで うちへ かえりました。",
      explanation: "Time (きのう) + means (タクシーで) + destination (うちへ) + verb (かえりました). The verb always goes at the end."
    },
    {
      question: "Ask: 'When did you come to Japan?'",
      answer: "いつ にほんへ きましたか。",
      explanation: "いつ (when) + にほんへ (to Japan) + きましたか (did you come?). Note: いつ does not need に."
    }
  ]
},
{
  id: 6,
  title: "Lesson 6: いっしょに 映画を 見ませんか (Won't you watch a movie together?)",
  level: "Beginner",
  content: `Lesson 6 introduces transitive verbs with the を (wo) particle, the concept of doing actions at specific places with で (de), and two very important social expressions: V-ませんか (invitation) and V-ましょう (suggestion/let's). This lesson is where you truly begin to describe daily activities — eating, drinking, reading, watching, studying, and more. You will also learn how to invite people to do things and how to enthusiastically agree to suggestions. These patterns are essential for social interaction in Japanese.`,
  grammarPoints: [
    {
      title: "N を V (N wo V) — Transitive verb pattern (doing something to something)",
      explanation: `The particle を (wo, often pronounced "o") marks the direct object — the thing that receives the action of the verb.

Structure: [Object] を [Verb]

This is used with transitive verbs (verbs that take an object):
- たべます (to eat), のみます (to drink), みます (to watch/see)
- よみます (to read), かきます (to write), ききます (to listen)
- かいます (to buy), とります (to take/photograph), します (to do)`,
      examples: [
        { jp: "あさごはんを たべます。", rm: "Asagohan wo tabemasu.", fr: "I eat breakfast." },
        { jp: "にほんごを べんきょうします。", rm: "Nihongo wo benkyou shimasu.", fr: "I study Japanese." },
        { jp: "テレビを みます。", rm: "Terebi wo mimasu.", fr: "I watch TV." }
      ]
    },
    {
      title: "Place で V (Place de V) — Doing an action at a place",
      explanation: `The particle で (de) marks the location where an action takes place.

Structure: [Place] で [Action Verb]

Important distinction from に:
- で = place of ACTION (doing something somewhere): レストランで たべます (I eat at a restaurant)
- に = place of EXISTENCE or DESTINATION (being somewhere / going somewhere)

If you are performing an action, use で for the location.`,
      examples: [
        { jp: "えきの ちかくで コーヒーを のみます。", rm: "Eki no chikaku de koohii wo nomimasu.", fr: "I drink coffee near the station." },
        { jp: "うちで えいがを みます。", rm: "Uchi de eiga wo mimasu.", fr: "I watch movies at home." },
        { jp: "としょかんで べんきょうします。", rm: "Toshokan de benkyou shimasu.", fr: "I study at the library." }
      ]
    },
    {
      title: "V-ませんか (V-masen ka) — Won't you? / Would you like to? (Invitation)",
      explanation: `The negative question form V-ませんか is used to politely invite someone to do something. Despite being negative in form, it functions as a warm invitation.

Structure: いっしょに [Activity] V-ませんか = "Won't you [do activity] together?"

This is softer and more polite than directly saying "Let's do X." It gives the listener room to decline. It's the standard way to invite someone in polite Japanese.

To accept: ええ、いいですね。(Yes, that sounds good.)
To decline: すみません、ちょっと... (Sorry, it's a bit... [implied: difficult])`,
      examples: [
        { jp: "いっしょに ひるごはんを たべませんか。", rm: "Issho ni hirugohan wo tabemasen ka.", fr: "Won't you eat lunch together (with me)?" },
        { jp: "いっしょに えいがを みませんか。", rm: "Issho ni eiga wo mimasen ka.", fr: "Would you like to watch a movie together?" },
        { jp: "こんばん のみに いきませんか。", rm: "Konban nomi ni ikimasen ka.", fr: "Won't you go for drinks tonight?" }
      ]
    },
    {
      title: "V-ましょう (V-mashou) — Let's (do something)",
      explanation: `V-ましょう expresses a suggestion or proposal to do something together. It's more assertive than V-ませんか and is used when both parties have already agreed or when you're enthusiastically suggesting something.

Structure: [Activity] V-ましょう = "Let's [do activity]"

This can also be used as an enthusiastic response to an invitation:
A: いっしょに たべませんか。(Won't you eat together?)
B: ええ、たべましょう。(Yes, let's eat!)`,
      examples: [
        { jp: "いっしょに べんきょうしましょう。", rm: "Issho ni benkyou shimashou.", fr: "Let's study together." },
        { jp: "ちょっと やすみましょう。", rm: "Chotto yasumimashou.", fr: "Let's take a short break." },
        { jp: "ええ、いきましょう。", rm: "Ee, ikimashou.", fr: "Yes, let's go!" }
      ]
    },
    {
      title: "なにを しますか (Nani wo shimasu ka) — What do you do? / What will you do?",
      explanation: `This question asks about what activity someone does or plans to do. なに (nani) or なん (nan) means "what" and を marks it as the object of します (to do).

Structure: [Time/Situation] なにを しますか = "What do you do [at that time/in that situation]?"

This is commonly used to ask about weekend plans, daily activities, and more.`,
      examples: [
        { jp: "にちようびは なにを しますか。", rm: "Nichiyoubi wa nani wo shimasu ka.", fr: "What do you do on Sunday?" },
        { jp: "やすみは なにを しましたか。", rm: "Yasumi wa nani wo shimashita ka.", fr: "What did you do during the holiday?" },
        { jp: "テニスを しました。", rm: "Tenisu wo shimashita.", fr: "I played tennis." }
      ]
    }
  ],
  keyPoints: [
    "を (wo) marks the direct object of a transitive verb",
    "で marks the place where an ACTION is performed (not mere existence)",
    "V-ませんか is a polite invitation ('won't you?'), not a negative question",
    "V-ましょう is used to suggest or agree to do something ('let's!')",
    "Decline invitations gently with すみません、ちょっと... — Japanese culture values indirect refusals"
  ],
  examples: [
    {
      japanese: "にちようびは なにを しますか。...こうえんで テニスを します。いっしょに しませんか。...ええ、しましょう。",
      romaji: "Nichiyoubi wa nani wo shimasu ka. ...Kouen de tenisu wo shimasu. Issho ni shimasen ka. ...Ee, shimashou.",
      french: "What will you do on Sunday? ...I'll play tennis in the park. Won't you join? ...Yes, let's do it!",
      breakdown: "にちようび (Sunday) + なにを (what) + しますか (will you do?). こうえんで (in the park) + テニスを (tennis) + します (play). いっしょに (together) + しませんか (won't you?). ええ (yes) + しましょう (let's)"
    },
    {
      japanese: "まいあさ うちで しんぶんを よみます。そして コーヒーを のみます。",
      romaji: "Maiasa uchi de shinbun wo yomimasu. Soshite koohii wo nomimasu.",
      french: "Every morning I read the newspaper at home. Then I drink coffee.",
      breakdown: "まいあさ (every morning) + うちで (at home) + しんぶんを (newspaper) + よみます (read). そして (then) + コーヒーを (coffee) + のみます (drink)"
    }
  ],
  exercises: [
    {
      question: "Translate: 'I read a book at the library.'",
      answer: "としょかんで ほんを よみます。",
      explanation: "としょかんで (at the library) + ほんを (a book) + よみます (read).",
      hint: "library = としょかん, book = ほん"
    },
    {
      question: "Invite your friend to eat lunch together. Use polite invitation form.",
      answer: "いっしょに ひるごはんを たべませんか。",
      explanation: "いっしょに (together) + ひるごはんを (lunch) + たべませんか (won't you eat?). V-ませんか is the polite invitation form."
    },
    {
      question: "Your friend invites you: いっしょに えいがを みませんか。You want to accept. What do you say?",
      answer: "ええ、みましょう。",
      explanation: "ええ (yes) + みましょう (let's watch). Use V-ましょう to enthusiastically agree to a suggestion."
    },
    {
      question: "Fill in the blank: きのう デパート＿ くつ＿ かいました。(Yesterday I bought shoes at the department store.)",
      answer: "で / を",
      explanation: "デパートで (at the department store — place of action) + くつを (shoes — direct object) + かいました (bought)."
    },
    {
      question: "Ask 'What did you do on the weekend?' in Japanese.",
      answer: "しゅうまつは なにを しましたか。",
      explanation: "しゅうまつ (weekend) + は (topic) + なにを (what) + しましたか (did you do?).",
      hint: "weekend = しゅうまつ"
    }
  ]
},
{
  id: 7,
  title: "Lesson 7: 手で 食べます (I eat with hands)",
  level: "Beginner",
  content: `Lesson 7 covers using tools and instruments with で, the giving and receiving verbs あげます and もらいます, and expressing whether an action has been completed with もう～ました (already did) and まだです (not yet). The giving/receiving system in Japanese is more nuanced than in English — the choice of verb depends on the direction of the giving (who gives to whom and the social relationship). This lesson introduces the basic framework that becomes more complex in later lessons.`,
  grammarPoints: [
    {
      title: "Tool / Means で V — Using a tool or instrument to do something",
      explanation: `You already learned で for means of transportation (Lesson 5) and place of action (Lesson 6). Here, で also marks the tool, instrument, or means used to perform an action.

Structure: [Tool/Instrument] で [Verb] = "do [Verb] with/by [Tool]"

This is one of the most versatile uses of で. It covers physical tools, languages, and other means.`,
      examples: [
        { jp: "はしで たべます。", rm: "Hashi de tabemasu.", fr: "I eat with chopsticks." },
        { jp: "にほんごで レポートを かきます。", rm: "Nihongo de repooto wo kakimasu.", fr: "I write the report in Japanese." },
        { jp: "てで たべます。", rm: "Te de tabemasu.", fr: "I eat with my hands." }
      ]
    },
    {
      title: "N₁ (person) に N₂ を あげます — Give N2 to N1",
      explanation: `あげます (agemasu) means "to give." The person receiving the gift is marked with に, and the thing being given is marked with を.

Structure: [Receiver] に [Thing] を あげます

Important rules:
- あげます is used when the speaker (or the speaker's in-group) gives to someone else.
- NEVER use あげます when someone gives to you — use もらいます instead.
- When the receiver is socially higher, the humble form さしあげます can be used (advanced).`,
      examples: [
        { jp: "わたしは マリアさんに はなを あげます。", rm: "Watashi wa Maria-san ni hana wo agemasu.", fr: "I give flowers to Maria." },
        { jp: "たなかさんに チョコレートを あげました。", rm: "Tanaka-san ni chokoreeto wo agemashita.", fr: "I gave chocolate to Mr. Tanaka." },
        { jp: "ともだちに ほんを あげます。", rm: "Tomodachi ni hon wo agemasu.", fr: "I give a book to my friend." }
      ]
    },
    {
      title: "N₁ (person) に N₂ を もらいます — Receive N2 from N1",
      explanation: `もらいます (moraimasu) means "to receive." The person you received from is marked with に (or から), and the thing received is marked with を.

Structure: [Giver] に [Thing] を もらいます = "receive [Thing] from [Giver]"

Note: You can use either に or から after the giver. Both are correct:
- やまださんに もらいました (received from Mr. Yamada)
- やまださんから もらいました (received from Mr. Yamada)`,
      examples: [
        { jp: "わたしは やまださんに ほんを もらいました。", rm: "Watashi wa Yamada-san ni hon wo moraimashita.", fr: "I received a book from Mr. Yamada." },
        { jp: "たんじょうびに ともだちに プレゼントを もらいました。", rm: "Tanjoubi ni tomodachi ni purezento wo moraimashita.", fr: "I received a present from my friend on my birthday." },
        { jp: "だれに もらいましたか。", rm: "Dare ni moraimashita ka.", fr: "Who did you receive it from?" }
      ]
    },
    {
      title: "もう V-ました — Already did",
      explanation: `もう (mou) combined with the past tense ました means "already did something."

Structure: もう [Verb]ました = "already [did Verb]"

This is used to indicate that an action has been completed. It's commonly used in questions to check if something has been done yet.

Question: もう [Verb]ましたか = "Have you already [done Verb]?"
Affirmative answer: はい、もう [Verb]ました = "Yes, I already [did]."`,
      examples: [
        { jp: "もう ひるごはんを たべましたか。", rm: "Mou hirugohan wo tabemashita ka.", fr: "Have you already eaten lunch?" },
        { jp: "はい、もう たべました。", rm: "Hai, mou tabemashita.", fr: "Yes, I've already eaten." },
        { jp: "もう レポートを かきました。", rm: "Mou repooto wo kakimashita.", fr: "I've already written the report." }
      ]
    },
    {
      title: "まだです — Not yet",
      explanation: `まだです (mada desu) means "not yet." It is the standard negative answer to もう～ましたか questions.

Structure: いいえ、まだです。= "No, not yet."

Important: Do NOT say まだ～ませんでした. The correct short answer is simply まだです. If you want to add detail, you can say まだ [Verb]ていません (haven't done yet), but まだです is the Lesson 7 standard.`,
      examples: [
        { jp: "もう しゅくだいを しましたか。...いいえ、まだです。", rm: "Mou shukudai wo shimashita ka. ...Iie, mada desu.", fr: "Have you done your homework already? ...No, not yet." },
        { jp: "もう にほんへ いきましたか。...いいえ、まだです。", rm: "Mou Nihon e ikimashita ka. ...Iie, mada desu.", fr: "Have you been to Japan already? ...No, not yet." }
      ]
    }
  ],
  keyPoints: [
    "で marks tools and instruments: はしで たべます (eat with chopsticks)",
    "あげます = give (from me/my side to others), もらいます = receive (from others to me)",
    "The receiver of あげます and the giver of もらいます are marked with に",
    "もう + past verb = 'already did'; answer with まだです for 'not yet'",
    "Never use あげます when someone gives something TO you — use もらいます"
  ],
  examples: [
    {
      japanese: "わたしは はは に セーターを あげました。ははは わたしに とけいを くれました。",
      romaji: "Watashi wa haha ni seetaa wo agemashita. Haha wa watashi ni tokei wo kuremashita.",
      french: "I gave a sweater to my mother. My mother gave me a watch.",
      breakdown: "わたしは (I) + ははに (to my mother) + セーターを (a sweater) + あげました (gave). Note: くれました (gave to me) is introduced formally in a later lesson but is previewed here."
    },
    {
      japanese: "もう しんぶんを よみましたか。...はい、もう よみました。",
      romaji: "Mou shinbun wo yomimashita ka. ...Hai, mou yomimashita.",
      french: "Have you already read the newspaper? ...Yes, I've already read it.",
      breakdown: "もう (already) + しんぶんを (newspaper) + よみましたか (did you read?). はい (yes) + もう (already) + よみました (read)"
    },
    {
      japanese: "にほんごで メールを かきます。えいごで かきません。",
      romaji: "Nihongo de meeru wo kakimasu. Eigo de kakimasen.",
      french: "I write emails in Japanese. I don't write them in English.",
      breakdown: "にほんごで (in Japanese) + メールを (emails) + かきます (write). えいごで (in English) + かきません (don't write)"
    }
  ],
  exercises: [
    {
      question: "Translate: 'I write with a pen.'",
      answer: "ペンで かきます。",
      explanation: "ペンで (with a pen) + かきます (write). で marks the tool/instrument used.",
      hint: "pen = ペン"
    },
    {
      question: "Translate: 'I gave a book to Mr. Tanaka.'",
      answer: "たなかさんに ほんを あげました。",
      explanation: "たなかさんに (to Mr. Tanaka) + ほんを (a book) + あげました (gave). に marks the receiver."
    },
    {
      question: "Your teacher asks: もう しゅくだいを しましたか。You haven't done it yet. How do you reply?",
      answer: "いいえ、まだです。",
      explanation: "まだです is the standard answer for 'not yet' when asked もう～ましたか."
    },
    {
      question: "Fill in the blanks: わたしは ともだち＿ プレゼント＿ もらいました。(I received a present from my friend.)",
      answer: "に / を",
      explanation: "ともだちに (from friend) + プレゼントを (a present) + もらいました (received). に marks the giver with もらいます."
    },
    {
      question: "Translate: 'Have you already eaten dinner?'",
      answer: "もう ばんごはんを たべましたか。",
      explanation: "もう (already) + ばんごはんを (dinner) + たべましたか (did you eat?).",
      hint: "dinner = ばんごはん"
    }
  ]
},
{
  id: 8,
  title: "Lesson 8: 桜は きれいです (Cherry blossoms are beautiful)",
  level: "Beginner",
  content: `Lesson 8 is your thorough introduction to Japanese adjectives. Japanese has two types of adjectives — い-adjectives and な-adjectives — and they conjugate differently. In this lesson you will learn how to describe things, express opinions, make negative and past forms of adjectives, contrast ideas with が (but), use degree adverbs like とても (very) and あまり (not very), and ask for opinions with どうですか and どんな. This lesson is essential for expressing your feelings, opinions, and evaluations of anything you encounter.`,
  grammarPoints: [
    {
      title: "な-adjective です — Describing with な-adjectives",
      explanation: `な-adjectives (also called na-keiyoushi or adjectival nouns) are followed by です in predicate position and by な when modifying a noun.

Conjugation pattern (same as nouns + です):
- Present affirmative: ～です (is ~)
- Present negative: ～じゃ ありません (is not ~)
- Past affirmative: ～でした (was ~)
- Past negative: ～じゃ ありませんでした (was not ~)
- Before a noun: ～な + noun

Common な-adjectives: きれい (beautiful/clean), しずか (quiet), げんき (energetic/healthy), ゆうめい (famous), べんり (convenient), にぎやか (lively), ひま (free/not busy), しんせつ (kind), ハンサム (handsome)`,
      examples: [
        { jp: "さくらは きれいです。", rm: "Sakura wa kirei desu.", fr: "Cherry blossoms are beautiful." },
        { jp: "この まちは にぎやかです。", rm: "Kono machi wa nigiyaka desu.", fr: "This town is lively." },
        { jp: "きれいな はなですね。", rm: "Kirei na hana desu ne.", fr: "What beautiful flowers!" }
      ]
    },
    {
      title: "い-adjective です — Describing with い-adjectives",
      explanation: `い-adjectives (also called i-keiyoushi) always end in い and conjugate by changing their ending. They do NOT follow the same pattern as な-adjectives.

Conjugation pattern:
- Present affirmative: ～いです (is ~)
- Present negative: ～くないです (is not ~) [remove い, add くないです]
- Past affirmative: ～かったです (was ~) [remove い, add かったです]
- Past negative: ～くなかったです (was not ~) [remove い, add くなかったです]
- Before a noun: ～い + noun (no change needed)

EXCEPTION: いい (good) is irregular:
- いいです → よくないです → よかったです → よくなかったです

Common い-adjectives: おおきい (big), ちいさい (small), あたらしい (new), ふるい (old), たかい (expensive/high), やすい (cheap), おいしい (delicious), おもしろい (interesting), むずかしい (difficult), さむい (cold), あつい (hot)`,
      examples: [
        { jp: "このラーメンは おいしいです。", rm: "Kono raamen wa oishii desu.", fr: "This ramen is delicious." },
        { jp: "きのうは さむかったです。", rm: "Kinou wa samukatta desu.", fr: "Yesterday was cold." },
        { jp: "あの えいがは おもしろくなかったです。", rm: "Ano eiga wa omoshirokunakatta desu.", fr: "That movie was not interesting." }
      ]
    },
    {
      title: "Adj ～が、～ (Contrast with が — but)",
      explanation: `が (ga) placed between two clauses means "but" and is used to contrast or qualify information. It connects two sentences into one.

Structure: [Sentence 1] が、[Sentence 2] = "[Sentence 1], but [Sentence 2]"

This is different from the subject-marking が particle. Context makes it clear which one is being used.`,
      examples: [
        { jp: "にほんの たべものは おいしいですが、たかいです。", rm: "Nihon no tabemono wa oishii desu ga, takai desu.", fr: "Japanese food is delicious, but expensive." },
        { jp: "この へやは きれいですが、せまいです。", rm: "Kono heya wa kirei desu ga, semai desu.", fr: "This room is clean, but small." },
        { jp: "さくらは きれいですが、みじかいです。", rm: "Sakura wa kirei desu ga, mijikai desu.", fr: "Cherry blossoms are beautiful, but short-lived." }
      ]
    },
    {
      title: "とても / あまり — Degree adverbs (very / not very)",
      explanation: `These adverbs modify adjectives to express degree:

- とても (totemo) = very, extremely (used with AFFIRMATIVE sentences)
- あまり (amari) = not very, not much (used with NEGATIVE sentences)

Important: あまり MUST be used with a negative verb/adjective form. You cannot say あまり おいしいです. It must be あまり おいしくないです.`,
      examples: [
        { jp: "きょうは とても あついです。", rm: "Kyou wa totemo atsui desu.", fr: "Today is very hot." },
        { jp: "この えいがは あまり おもしろくないです。", rm: "Kono eiga wa amari omoshirokunai desu.", fr: "This movie is not very interesting." },
        { jp: "にほんごは とても おもしろいです。", rm: "Nihongo wa totemo omoshiroi desu.", fr: "Japanese is very interesting." }
      ]
    },
    {
      title: "N は どうですか — How is N? / What do you think of N?",
      explanation: `どうですか (dou desu ka) asks for someone's impression, opinion, or evaluation of something.

Structure: [Topic] は どうですか = "How is [Topic]?" / "What do you think of [Topic]?"

This is commonly used to ask about experiences, conditions, or opinions. The answer typically uses an adjective.`,
      examples: [
        { jp: "にほんの せいかつは どうですか。", rm: "Nihon no seikatsu wa dou desu ka.", fr: "How is life in Japan?" },
        { jp: "おしごとは どうですか。", rm: "O-shigoto wa dou desu ka.", fr: "How is your work?" },
        { jp: "たのしいです。", rm: "Tanoshii desu.", fr: "It's enjoyable." }
      ]
    },
    {
      title: "N₁ は どんな N₂ ですか — What kind of N2 is N1?",
      explanation: `どんな (donna) means "what kind of" and is placed before a noun. It asks for a description or characterization.

Structure: [Topic] は どんな [Category Noun] ですか = "What kind of [noun] is [topic]?"

This is useful for asking about the qualities or characteristics of something.`,
      examples: [
        { jp: "ならは どんな まちですか。", rm: "Nara wa donna machi desu ka.", fr: "What kind of city is Nara?" },
        { jp: "しずかな まちです。", rm: "Shizuka na machi desu.", fr: "It's a quiet city." },
        { jp: "ミラーさんは どんな ひとですか。...しんせつな ひとです。", rm: "Miraa-san wa donna hito desu ka. ...Shinsetsu na hito desu.", fr: "What kind of person is Mr. Miller? ...He's a kind person." }
      ]
    }
  ],
  keyPoints: [
    "い-adjectives conjugate by changing the い ending; な-adjectives conjugate like nouns with です",
    "いい (good) is irregular: よくないです, よかったです, よくなかったです",
    "とても goes with affirmative forms; あまり goes with negative forms",
    "が between clauses means 'but' (contrast connector)",
    "どうですか asks for impressions; どんな asks for descriptions ('what kind of')"
  ],
  examples: [
    {
      japanese: "にほんの たべものは どうですか。...とても おいしいですが、すこし たかいです。",
      romaji: "Nihon no tabemono wa dou desu ka. ...Totemo oishii desu ga, sukoshi takai desu.",
      french: "How is Japanese food? ...It's very delicious, but a little expensive.",
      breakdown: "にほんの たべもの (Japanese food) + は + どうですか (how is it?). とても (very) + おいしい (delicious) + ですが (but) + すこし (a little) + たかいです (expensive)"
    },
    {
      japanese: "おおさかは どんな まちですか。...にぎやかで おもしろい まちです。たべものも おいしいです。",
      romaji: "Oosaka wa donna machi desu ka. ...Nigiyaka de omoshiroi machi desu. Tabemono mo oishii desu.",
      french: "What kind of city is Osaka? ...It's a lively and interesting city. The food is also delicious.",
      breakdown: "おおさか (Osaka) + どんな まち (what kind of city) + ですか. にぎやかで (lively, and) + おもしろい (interesting) + まち (city) + です. たべものも (food also) + おいしいです (is delicious)"
    },
    {
      japanese: "きのうの パーティーは どうでしたか。...とても たのしかったです。",
      romaji: "Kinou no paatii wa dou deshita ka. ...Totemo tanoshikatta desu.",
      french: "How was yesterday's party? ...It was very fun.",
      breakdown: "きのうの (yesterday's) + パーティー (party) + どうでしたか (how was it?). とても (very) + たのしかったです (was fun — past of たのしい)"
    }
  ],
  exercises: [
    {
      question: "Make this sentence negative: このレストランは ゆうめいです。(This restaurant is famous.)",
      answer: "このレストランは ゆうめいじゃ ありません。",
      explanation: "ゆうめい is a な-adjective. Negative form: ゆうめいじゃ ありません (same as noun negation)."
    },
    {
      question: "Make this sentence past tense: きょうは さむいです。(Today is cold.)",
      answer: "きょうは さむかったです。",
      explanation: "さむい is an い-adjective. Past form: remove い, add かったです → さむかったです."
    },
    {
      question: "Fill in: きのうの テストは あまり ＿＿＿。(Yesterday's test was not very difficult.)",
      answer: "むずかしくなかったです",
      explanation: "あまり requires a negative form. Past negative of むずかしい: むずかしくなかったです.",
      hint: "difficult = むずかしい"
    },
    {
      question: "Ask 'What kind of person is your teacher?'",
      answer: "せんせいは どんな ひとですか。",
      explanation: "せんせい (teacher) + は + どんな (what kind of) + ひと (person) + ですか."
    },
    {
      question: "Translate: 'This book is interesting but difficult.'",
      answer: "このほんは おもしろいですが、むずかしいです。",
      explanation: "おもしろいです (is interesting) + が (but) + むずかしいです (is difficult). が connects the two contrasting descriptions."
    }
  ]
},
{
  id: 9,
  title: "Lesson 9: 日本語が 少し わかります (I understand a little Japanese)",
  level: "Beginner",
  content: `Lesson 9 introduces an important group of verbs and adjectives that use the particle が instead of を. You will learn how to express likes and dislikes (すきです / きらいです), ability and skill (じょうずです / へたです), understanding and ability (わかります / できます), and how to explain reasons with から (because). You will also learn degree adverbs that work with these expressions: よく, だいたい, たくさん, すこし, あまり, and ぜんぜん. This lesson is essential for talking about your preferences, abilities, and reasons.`,
  grammarPoints: [
    {
      title: "N が すきです / きらいです — Like / Dislike N",
      explanation: `In Japanese, "to like" and "to dislike" are expressed as adjectives (な-adjectives), not verbs:
- すきです (suki desu) = like
- だいすきです (daisuki desu) = love / like very much
- きらいです (kirai desu) = dislike
- だいきらいです (daikirai desu) = hate / really dislike

The object of liking/disliking is marked with が (not を):
Structure: [Thing/Person] が すきです / きらいです

To ask: なにが すきですか (What do you like?)
To ask about specific category: どんな [category] が すきですか (What kind of [category] do you like?)`,
      examples: [
        { jp: "わたしは にほんりょうりが すきです。", rm: "Watashi wa Nihon-ryouri ga suki desu.", fr: "I like Japanese food." },
        { jp: "おんがくが だいすきです。", rm: "Ongaku ga daisuki desu.", fr: "I love music." },
        { jp: "にんじんが きらいです。", rm: "Ninjin ga kirai desu.", fr: "I dislike carrots." }
      ]
    },
    {
      title: "N が じょうずです / へたです — Good at / Bad at N",
      explanation: `じょうずです (jouzu desu) means "to be good at / skilled at" and へたです (heta desu) means "to be bad at / unskilled at." Both are な-adjectives.

The skill or activity is marked with が:
Structure: [Skill/Activity] が じょうずです / へたです

Important cultural note: NEVER say わたしは ～が じょうずです about yourself. In Japanese culture, praising your own skill is considered boastful. Use じょうずです only for others. For yourself, use the humble まあまあです (so-so) or すこし できます (I can do it a little).`,
      examples: [
        { jp: "マリアさんは にほんごが じょうずです。", rm: "Maria-san wa Nihongo ga jouzu desu.", fr: "Maria is good at Japanese." },
        { jp: "わたしは りょうりが へたです。", rm: "Watashi wa ryouri ga heta desu.", fr: "I am bad at cooking." },
        { jp: "カリナさんは うたが じょうずです。", rm: "Karina-san wa uta ga jouzu desu.", fr: "Karina is good at singing." }
      ]
    },
    {
      title: "N が わかります / できます — Understand / Can do N",
      explanation: `わかります (wakarimasu) means "to understand" and できます (dekimasu) means "to be able to do / to be possible." Both of these verbs take が for their object, NOT を.

Structure:
- [Language/Subject] が わかります = understand [language/subject]
- [Skill/Activity] が できます = can do [skill/activity]

This is a very common pattern for talking about your abilities and comprehension.`,
      examples: [
        { jp: "にほんごが すこし わかります。", rm: "Nihongo ga sukoshi wakarimasu.", fr: "I understand a little Japanese." },
        { jp: "えいごが わかりますか。", rm: "Eigo ga wakarimasu ka.", fr: "Do you understand English?" },
        { jp: "くるまの うんてんが できます。", rm: "Kuruma no unten ga dekimasu.", fr: "I can drive a car." }
      ]
    },
    {
      title: "どんな N — What kind of N",
      explanation: `どんな (donna) placed before a noun asks "what kind of." This was introduced in Lesson 8, but here it is used specifically with すきです to ask about preferences.

Structure: どんな [Category] が すきですか = "What kind of [category] do you like?"

The answer should specify the type within that category.`,
      examples: [
        { jp: "どんな えいがが すきですか。", rm: "Donna eiga ga suki desu ka.", fr: "What kind of movies do you like?" },
        { jp: "アクションえいがが すきです。", rm: "Akushon eiga ga suki desu.", fr: "I like action movies." },
        { jp: "どんな スポーツが すきですか。...サッカーが すきです。", rm: "Donna supootsu ga suki desu ka. ...Sakkaa ga suki desu.", fr: "What kind of sports do you like? ...I like soccer." }
      ]
    },
    {
      title: "よく / だいたい / たくさん / すこし / あまり / ぜんぜん — Degree adverbs",
      explanation: `These adverbs express how much or to what degree something applies:

With AFFIRMATIVE verbs/adjectives:
- よく (yoku) = well, often
- だいたい (daitai) = mostly, more or less
- たくさん (takusan) = a lot, many

With NEGATIVE verbs/adjectives:
- あまり (amari) = not very, not much
- ぜんぜん (zenzen) = not at all, absolutely not

Neutral (can go either way):
- すこし (sukoshi) = a little, a bit

Degree scale (high to low):
よく / たくさん → だいたい → すこし → あまり...ません → ぜんぜん...ません`,
      examples: [
        { jp: "にほんごが すこし わかります。", rm: "Nihongo ga sukoshi wakarimasu.", fr: "I understand Japanese a little." },
        { jp: "かんじは ぜんぜん わかりません。", rm: "Kanji wa zenzen wakarimasen.", fr: "I don't understand kanji at all." },
        { jp: "にほんりょうりを よく たべます。", rm: "Nihon-ryouri wo yoku tabemasu.", fr: "I often eat Japanese food." }
      ]
    },
    {
      title: "～から (~ kara) — Because ~ (reason)",
      explanation: `から (kara) at the end of a clause means "because." It gives the reason or cause for something.

Structure: [Reason] から、[Result/Conclusion]

Note: In Japanese, the reason (because clause) often comes FIRST, followed by から, then the result. However, the order can be reversed, especially in spoken Japanese:

- じかんが ありませんから、しんぶんを よみません。(Because I don't have time, I don't read the newspaper.)
- しんぶんを よみません。じかんが ありませんから。(I don't read the newspaper. Because I don't have time.)`,
      examples: [
        { jp: "じかんが ありませんから、あさごはんを たべません。", rm: "Jikan ga arimasen kara, asagohan wo tabemasen.", fr: "Because I don't have time, I don't eat breakfast." },
        { jp: "さくらが きれいですから、にほんが すきです。", rm: "Sakura ga kirei desu kara, Nihon ga suki desu.", fr: "Because the cherry blossoms are beautiful, I like Japan." },
        { jp: "どうして にほんごを べんきょうしますか。...にほんの えいがが すきですから。", rm: "Doushite Nihongo wo benkyou shimasu ka. ...Nihon no eiga ga suki desu kara.", fr: "Why do you study Japanese? ...Because I like Japanese movies." }
      ]
    }
  ],
  keyPoints: [
    "すきです, きらいです, じょうずです, へたです, わかります, and できます all take が (not を) for their object",
    "Never call yourself じょうず — it's considered boastful in Japanese culture",
    "あまり pairs with negative forms; ぜんぜん pairs with negative forms (stronger)",
    "から at the end of a clause means 'because' — the reason comes before から",
    "どんな + noun asks 'what kind of' — useful for asking about preferences"
  ],
  examples: [
    {
      japanese: "にほんごが すこし わかります。でも、かんじは あまり わかりません。",
      romaji: "Nihongo ga sukoshi wakarimasu. Demo, kanji wa amari wakarimasen.",
      french: "I understand Japanese a little. But I don't understand kanji very well.",
      breakdown: "にほんごが (Japanese + subject) + すこし (a little) + わかります (understand). でも (but) + かんじは (kanji + topic) + あまり (not very) + わかりません (don't understand)"
    },
    {
      japanese: "どんな おんがくが すきですか。...ジャズが すきです。よく ジャズの コンサートへ いきます。",
      romaji: "Donna ongaku ga suki desu ka. ...Jazu ga suki desu. Yoku jazu no konsaato e ikimasu.",
      french: "What kind of music do you like? ...I like jazz. I often go to jazz concerts.",
      breakdown: "どんな (what kind of) + おんがく (music) + が すきですか (do you like?). ジャズが (jazz + subject) + すきです (like). よく (often) + ジャズの コンサートへ (to jazz concerts) + いきます (go)"
    },
    {
      japanese: "どうして にほんへ きましたか。...にほんの ぶんかが すきですから。そして、にほんの かいしゃで はたらきたいですから。",
      romaji: "Doushite Nihon e kimashita ka. ...Nihon no bunka ga suki desu kara. Soshite, Nihon no kaisha de hatarakitai desu kara.",
      french: "Why did you come to Japan? ...Because I like Japanese culture. And because I want to work at a Japanese company.",
      breakdown: "どうして (why) + にほんへ (to Japan) + きましたか (did you come?). にほんの ぶんか (Japanese culture) + が すきですから (because I like). そして (and) + にほんの かいしゃで (at a Japanese company) + はたらきたいですから (because I want to work)"
    }
  ],
  exercises: [
    {
      question: "Translate: 'I like Japanese food.'",
      answer: "わたしは にほんりょうりが すきです。",
      explanation: "にほんりょうり (Japanese food) + が (subject marker for すき) + すきです (like). Remember: すき uses が, not を.",
      hint: "Japanese food = にほんりょうり"
    },
    {
      question: "Fill in: かんじは ＿＿＿ わかりません。(I don't understand kanji at all.)",
      answer: "ぜんぜん",
      explanation: "ぜんぜん (not at all) is used with negative forms to express total negation. ぜんぜん わかりません = don't understand at all."
    },
    {
      question: "Your Japanese friend says: にほんごが じょうずですね。How should you humbly respond?",
      answer: "いいえ、まだまだです。",
      explanation: "In Japanese culture, you should be modest when complimented. まだまだです (I still have a long way to go) or いいえ、まだまだです is a common humble response. Saying ありがとう is acceptable but agreeing with じょうず about yourself is not.",
      hint: "Be humble! Don't agree that you are じょうず."
    },
    {
      question: "Explain why you study Japanese using から: 'Because I like anime.'",
      answer: "アニメが すきですから、にほんごを べんきょうします。",
      explanation: "アニメが すきですから (because I like anime) + にほんごを べんきょうします (I study Japanese). The reason (から clause) comes first."
    },
    {
      question: "Ask 'What kind of sports do you like?' and answer 'I like swimming.'",
      answer: "どんな スポーツが すきですか。...すいえいが すきです。",
      explanation: "どんな (what kind of) + スポーツが (sports + が) + すきですか (do you like?). すいえい (swimming) + が すきです (like).",
      hint: "swimming = すいえい"
    }
  ]
},
{
  id: 10,
  title: "Lesson 10: あそこに コンビニが あります",
  level: "Beginner",
  content: `In this lesson, you will learn how to express the existence of things, people, and animals, and how to describe where they are located. Japanese uses two different verbs for existence:

- あります (arimasu) is used for INANIMATE objects (things that cannot move by themselves): books, buildings, trees, etc.
- います (imasu) is used for ANIMATE beings (things that can move by themselves): people, animals, insects, etc.

This is a very important distinction in Japanese. Using the wrong verb sounds unnatural. For example, you would never say テーブルがいます (table ga imasu) because a table cannot move on its own.

The particle が marks the thing or person that exists, and the particle に marks the location where it exists. You will also learn how to describe positions using words like うえ (above), した (below), なか (inside), and others.`,
  grammarPoints: [
    {
      title: "N が あります (inanimate existence)",
      explanation: "Use あります to say that an inanimate object EXISTS somewhere. The thing that exists is marked by が. This pattern is used when you want to introduce new information about what exists at a location. Think of it as answering the question 'What is there?'",
      examples: [
        { jp: "あそこに コンビニが あります。", rm: "asoko ni konbini ga arimasu.", fr: "There is a convenience store over there." },
        { jp: "つくえの うえに ほんが あります。", rm: "tsukue no ue ni hon ga arimasu.", fr: "There is a book on the desk." },
        { jp: "にわに きが あります。", rm: "niwa ni ki ga arimasu.", fr: "There are trees in the garden." }
      ]
    },
    {
      title: "N が います (animate existence)",
      explanation: "Use います to say that an animate being (person, animal, insect, fish) EXISTS somewhere. Just like あります, the being that exists is marked by が and the location by に. Remember: if it can move on its own, use います.",
      examples: [
        { jp: "こうえんに こどもが います。", rm: "kouen ni kodomo ga imasu.", fr: "There are children in the park." },
        { jp: "へやに ねこが います。", rm: "heya ni neko ga imasu.", fr: "There is a cat in the room." },
        { jp: "プールに だれか います。", rm: "puuru ni dareka imasu.", fr: "There is someone in the pool." }
      ]
    },
    {
      title: "N は (place) に あります / います (stating location)",
      explanation: "When you already know WHAT you are talking about and want to say WHERE it is, use は instead of が. The pattern is: [Thing/Person] は [Place] に あります/います. Think of は as marking old/known information ('as for X...') and が as introducing new information.",
      examples: [
        { jp: "コンビニは あそこに あります。", rm: "konbini wa asoko ni arimasu.", fr: "The convenience store is over there." },
        { jp: "ミラーさんは じむしょに います。", rm: "Miraa-san wa jimusho ni imasu.", fr: "Mr. Miller is in the office." },
        { jp: "トイレは にかいに あります。", rm: "toire wa ni-kai ni arimasu.", fr: "The restroom is on the second floor." }
      ]
    },
    {
      title: "N₁ の N₂ (position words)",
      explanation: `To describe exactly WHERE something is in relation to another object, use position words after the reference object with の. Common position words:
- うえ (ue) = on, above
- した (shita) = under, below
- まえ (mae) = in front of
- うしろ (ushiro) = behind
- なか (naka) = inside
- そと (soto) = outside
- みぎ (migi) = right
- ひだり (hidari) = left
- あいだ (aida) = between
- となり (tonari) = next to
- ちかく (chikaku) = near

Pattern: [Reference Object] の [Position] に [Thing] が あります/います`,
      examples: [
        { jp: "テーブルの うえに はなが あります。", rm: "teeburu no ue ni hana ga arimasu.", fr: "There are flowers on the table." },
        { jp: "いすの したに ねこが います。", rm: "isu no shita ni neko ga imasu.", fr: "There is a cat under the chair." },
        { jp: "ぎんこうの となりに ゆうびんきょくが あります。", rm: "ginkou no tonari ni yuubinkyoku ga arimasu.", fr: "There is a post office next to the bank." }
      ]
    },
    {
      title: "なにが ありますか / だれが いますか (asking what/who exists)",
      explanation: "To ask WHAT exists at a location, use なにが ありますか. To ask WHO is at a location, use だれが いますか. Notice that なに and だれ always take が (not は), because you are asking about unknown, new information.",
      examples: [
        { jp: "つくえの うえに なにが ありますか。", rm: "tsukue no ue ni nani ga arimasu ka.", fr: "What is on the desk?" },
        { jp: "きょうしつに だれが いますか。", rm: "kyoushitsu ni dare ga imasu ka.", fr: "Who is in the classroom?" },
        { jp: "かばんの なかに なにが ありますか。", rm: "kaban no naka ni nani ga arimasu ka.", fr: "What is inside the bag?" }
      ]
    }
  ],
  keyPoints: [
    "あります is for inanimate objects (things), います is for animate beings (people, animals)",
    "Use が to introduce NEW information about what exists; use は when the topic is already known",
    "The location is always marked by に (not で) with あります/います",
    "Position words (うえ, した, なか, etc.) come after the reference noun + の",
    "Question words like なに and だれ always pair with が, never は"
  ],
  examples: [
    {
      japanese: "えきの ちかくに おおきい こうえんが あります。",
      romaji: "eki no chikaku ni ookii kouen ga arimasu.",
      french: "There is a big park near the station.",
      breakdown: "えき(station) の ちかく(near) に(at) おおきい(big) こうえん(park) が(subject) あります(exists-inanimate)"
    },
    {
      japanese: "ほんやは えきの まえに あります。",
      romaji: "hon'ya wa eki no mae ni arimasu.",
      french: "The bookstore is in front of the station.",
      breakdown: "ほんや(bookstore) は(topic) えき(station) の まえ(front) に(at) あります(exists)"
    },
    {
      japanese: "つくえの うえに なにも ありません。",
      romaji: "tsukue no ue ni nani mo arimasen.",
      french: "There is nothing on the desk.",
      breakdown: "つくえ(desk) の うえ(top) に(at) なにも(nothing) ありません(does not exist)"
    },
    {
      japanese: "にわに いぬと ねこが います。",
      romaji: "niwa ni inu to neko ga imasu.",
      french: "There are a dog and a cat in the garden.",
      breakdown: "にわ(garden) に(at) いぬ(dog) と(and) ねこ(cat) が(subject) います(exist-animate)"
    }
  ],
  exercises: [
    {
      question: "Fill in the blank: へやに ねこ＿ います。",
      answer: "が",
      explanation: "が marks the subject of existence. The cat is new information being introduced."
    },
    {
      question: "Choose the correct verb: つくえの うえに ほんが ＿＿＿。 (あります / います)",
      answer: "あります",
      explanation: "ほん (book) is inanimate, so we use あります."
    },
    {
      question: "Translate into Japanese: 'There is a hospital near the station.'",
      hint: "hospital = びょういん, station = えき, near = ちかく",
      answer: "えきの ちかくに びょういんが あります。",
      explanation: "えき(station) の ちかく(near) に(at) びょういん(hospital) が(subject) あります(exists)"
    },
    {
      question: "Put in order: あります / かばんの なかに / パスポートが",
      answer: "かばんの なかに パスポートが あります。",
      explanation: "Location (かばんの なかに) + Subject (パスポートが) + Verb (あります)"
    },
    {
      question: "Choose the correct particle: コンビニ＿ あそこに あります。 (が / は)",
      answer: "は",
      explanation: "Here, コンビニ is already the known topic (we are telling WHERE it is), so は is correct."
    }
  ]
},
{
  id: 11,
  title: "Lesson 11: 会議室に テーブルが 七つ あります",
  level: "Beginner",
  content: `This lesson covers one of the trickiest aspects of Japanese for learners: counters (助数詞 josūshi). In English, you can simply say "three books" or "two cats." In Japanese, you MUST use a specific counter word that matches the type of object you are counting.

Think of it like English expressions such as "two SHEETS of paper" or "three CUPS of coffee" -- except in Japanese, EVERYTHING requires a counter. The counter word is placed after the number, and the number+counter combination usually comes right before the verb or after the noun it counts.

You will also learn how to express duration of time (how long something takes) and frequency (how often something happens). These are essential for talking about daily routines, travel, and work schedules.`,
  grammarPoints: [
    {
      title: "General counter: ～つ (hitotsu, futatsu...)",
      explanation: "The ～つ counter uses native Japanese numbers and works for almost any object when you do not know the specific counter. It only goes from 1 to 10. This is the safest counter to use when you are unsure. After 10, you switch to the Sino-Japanese numbers without ～つ.",
      examples: [
        { jp: "りんごを みっつ ください。", rm: "ringo wo mittsu kudasai.", fr: "Three apples, please." },
        { jp: "かいぎしつに テーブルが ななつ あります。", rm: "kaigishitsu ni teeburu ga nanatsu arimasu.", fr: "There are seven tables in the meeting room." },
        { jp: "たまごを いつつ かいました。", rm: "tamago wo itsutsu kaimashita.", fr: "I bought five eggs." }
      ]
    },
    {
      title: "People counter: ～人 (にん / り)",
      explanation: "Use ～人 to count people. IMPORTANT: 1 person = ひとり (hitori), 2 people = ふたり (futari). These are irregular! From 3 onward, it follows the regular pattern: さんにん, よにん, ごにん, etc. Note: 4 people = よにん (not しにん or よんにん).",
      examples: [
        { jp: "きょうしつに がくせいが ごにん います。", rm: "kyoushitsu ni gakusei ga go-nin imasu.", fr: "There are five students in the classroom." },
        { jp: "かぞくは よにん です。", rm: "kazoku wa yo-nin desu.", fr: "My family has four members." },
        { jp: "ともだちが ふたり きました。", rm: "tomodachi ga futari kimashita.", fr: "Two friends came." }
      ]
    },
    {
      title: "Common counters: ～台, ～枚, ～本, ～冊, ～杯",
      explanation: `Japanese has many specialized counters. Here are the most common ones you need to know:
- ～台 (dai): machines, vehicles, large appliances (cars, computers, TVs)
- ～枚 (mai): flat, thin objects (paper, tickets, shirts, plates, photos)
- ～本 (hon/bon/pon): long, cylindrical objects (pens, bottles, umbrellas, roads, movies)
- ～冊 (satsu): bound volumes (books, notebooks, magazines)
- ～杯 (hai/bai/pai): cups, glasses, bowls of liquid/food

IMPORTANT: ～本 and ～杯 have sound changes!
～本: いっぽん, にほん, さんぼん, よんほん, ごほん, ろっぽん, ななほん, はっぽん/はちほん, きゅうほん, じゅっぽん
～杯: いっぱい, にはい, さんばい, よんはい, ごはい, ろっぱい, ななはい, はっぱい, きゅうはい, じゅっぱい`,
      examples: [
        { jp: "くるまが さんだい あります。", rm: "kuruma ga san-dai arimasu.", fr: "There are three cars." },
        { jp: "かみを にまい ください。", rm: "kami wo ni-mai kudasai.", fr: "Two sheets of paper, please." },
        { jp: "ペンを いっぽん かりました。", rm: "pen wo ippon karimashita.", fr: "I borrowed one pen." }
      ]
    },
    {
      title: "Duration: ～時間, ～分, ～か月, ～週間",
      explanation: `To express how long something takes or how long you do something, use duration words:
- ～時間 (jikan): hours -- いちじかん (1 hour), にじかん (2 hours)
- ～分 (fun/pun): minutes -- ごふん (5 min), じゅっぷん (10 min)
- ～か月 (kagetsu): months -- いっかげつ (1 month), さんかげつ (3 months)
- ～週間 (shuukan): weeks -- いっしゅうかん (1 week), にしゅうかん (2 weeks)
- ～年 (nen): years -- いちねん (1 year), にねん (2 years)
- ～日 (nichi/ka): days -- いちにち (1 day), ふつか (2 days), みっか (3 days)

Duration words go before the verb without any particle.`,
      examples: [
        { jp: "まいにち にじかん べんきょうします。", rm: "mainichi ni-jikan benkyou shimasu.", fr: "I study two hours every day." },
        { jp: "ここから えきまで じゅっぷん かかります。", rm: "koko kara eki made juppun kakarimasu.", fr: "It takes 10 minutes from here to the station." },
        { jp: "にほんに いちねん いました。", rm: "nihon ni ichi-nen imashita.", fr: "I was in Japan for one year." }
      ]
    },
    {
      title: "～に ～回 (frequency: times per period)",
      explanation: "To express how often you do something, use the pattern: [time period] に [number] 回 (kai). The に here means 'per' or 'in.' 回 (kai) is the counter for number of times.",
      examples: [
        { jp: "いっしゅうかんに にかい テニスを します。", rm: "isshuukan ni ni-kai tenisu wo shimasu.", fr: "I play tennis twice a week." },
        { jp: "いちにちに さんかい ごはんを たべます。", rm: "ichinichi ni san-kai gohan wo tabemasu.", fr: "I eat three times a day." },
        { jp: "いちねんに いっかい にほんへ いきます。", rm: "ichi-nen ni ikkai nihon e ikimasu.", fr: "I go to Japan once a year." }
      ]
    },
    {
      title: "どのくらい (how long / how much)",
      explanation: "どのくらい (dono kurai) is used to ask about duration, quantity, or extent. It can mean 'how long,' 'how much,' or 'how far' depending on context. For time duration specifically, you can also hear どのぐらい (same meaning).",
      examples: [
        { jp: "どのくらい かかりますか。", rm: "dono kurai kakarimasu ka.", fr: "How long does it take?" },
        { jp: "どのくらい にほんごを べんきょうしましたか。", rm: "dono kurai nihongo wo benkyou shimashita ka.", fr: "How long have you studied Japanese?" },
        { jp: "おおさかから とうきょうまで どのくらいですか。", rm: "Oosaka kara Toukyou made dono kurai desu ka.", fr: "How far is it from Osaka to Tokyo?" }
      ]
    }
  ],
  keyPoints: [
    "Japanese requires counter words when counting -- you cannot just say 'number + noun' like in English",
    "The ～つ counter (ひとつ, ふたつ...) is the universal fallback for objects when you do not know the specific counter",
    "ひとり (1 person) and ふたり (2 people) are irregular; from 3 onward use さんにん, よにん, etc.",
    "Some counters cause sound changes (rendaku): ～本 has ぽん/ぼん/ほん variations, ～杯 has ぱい/ばい/はい",
    "Duration words (にじかん, さんかげつ, etc.) go directly before the verb with NO particle"
  ],
  examples: [
    {
      japanese: "この クラスに がくせいが じゅうごにん います。",
      romaji: "kono kurasu ni gakusei ga juu-go-nin imasu.",
      french: "There are 15 students in this class.",
      breakdown: "この(this) クラス(class) に(in) がくせい(student) が(subject) じゅうごにん(15 people) います(exist-animate)"
    },
    {
      japanese: "まいあさ コーヒーを にはい のみます。",
      romaji: "maiasa koohii wo ni-hai nomimasu.",
      french: "I drink two cups of coffee every morning.",
      breakdown: "まいあさ(every morning) コーヒー(coffee) を(object) にはい(two cups) のみます(drink)"
    },
    {
      japanese: "とうきょうから おおさかまで しんかんせんで にじかんはん かかります。",
      romaji: "Toukyou kara Oosaka made shinkansen de ni-jikan-han kakarimasu.",
      french: "It takes two and a half hours from Tokyo to Osaka by bullet train.",
      breakdown: "とうきょう(Tokyo) から(from) おおさか(Osaka) まで(to) しんかんせん(bullet train) で(by) にじかんはん(2.5 hours) かかります(takes)"
    }
  ],
  exercises: [
    {
      question: "How do you say 'two people' in Japanese?",
      answer: "ふたり",
      explanation: "1 person = ひとり, 2 people = ふたり. These are irregular. From 3 onward: さんにん, よにん, etc."
    },
    {
      question: "Fill in the counter: ペンを さん＿ かいました。 (I bought 3 pens.)",
      answer: "ぼん (さんぼん)",
      explanation: "Pens are long, thin objects, so use ～本. With さん, 本 becomes ぼん (sound change): さんぼん."
    },
    {
      question: "Translate: 'I study Japanese for 3 hours every day.'",
      hint: "every day = まいにち, 3 hours = さんじかん, to study = べんきょうします",
      answer: "まいにち さんじかん にほんごを べんきょうします。",
      explanation: "Duration (さんじかん) goes before the verb without any particle."
    },
    {
      question: "Put in order: にかい / いっしゅうかんに / えいがを / みます",
      answer: "いっしゅうかんに にかい えいがを みます。",
      explanation: "Frequency pattern: いっしゅうかんに にかい = twice a week. Then object + verb."
    },
    {
      question: "Choose the correct counter: きっぷを に＿ かいました。 (まい / ほん / さつ)",
      answer: "まい",
      explanation: "Tickets are flat, thin objects, so the counter ～枚 (まい) is correct."
    }
  ]
},
{
  id: 12,
  title: "Lesson 12: 京都は 大阪より 静かです",
  level: "Beginner",
  content: `This lesson teaches you how to compare things in Japanese. You will learn how to say that one thing is more [adjective] than another, how to ask which of two things is more [adjective], how to express the superlative (the most [adjective] among a group), and how to say something is NOT as [adjective] as something else.

Japanese comparisons work differently from English. There is no word equivalent to "more" or "-er" (like "bigger" or "more expensive"). Instead, Japanese uses the particle より (yori) meaning "than" and the word いちばん (ichiban) meaning "number one / most."

The basic concept is simple: "A is [adjective]. Compared to B" becomes "A は B より [adjective] です."`,
  grammarPoints: [
    {
      title: "N₁ は N₂ より Adj です (comparison: A is more ~ than B)",
      explanation: "To say 'A is more [adjective] than B,' use the pattern: A は B より [adjective] です. より (yori) means 'than' or 'compared to.' The adjective itself does NOT change form -- there is no equivalent of English '-er' or 'more.' The comparison is created entirely by the word より.",
      examples: [
        { jp: "きょうとは おおさかより しずかです。", rm: "Kyouto wa Oosaka yori shizuka desu.", fr: "Kyoto is quieter than Osaka." },
        { jp: "にほんごは えいごより むずかしいです。", rm: "nihongo wa eigo yori muzukashii desu.", fr: "Japanese is more difficult than English." },
        { jp: "ひこうきは でんしゃより はやいです。", rm: "hikouki wa densha yori hayai desu.", fr: "Airplanes are faster than trains." }
      ]
    },
    {
      title: "N₁ と N₂ と どちらが Adj ですか (which is more ~?)",
      explanation: "To ask 'Which is more [adjective], A or B?' use: A と B と どちらが [adjective] ですか. どちら (dochira) means 'which of the two.' The answer uses the pattern: [choice] のほうが [adjective] です (~ is more ~). のほうが literally means 'the direction/side of.'",
      examples: [
        { jp: "にくと さかなと どちらが すきですか。", rm: "niku to sakana to dochira ga suki desu ka.", fr: "Which do you like more, meat or fish?" },
        { jp: "さかなの ほうが すきです。", rm: "sakana no hou ga suki desu.", fr: "I like fish more." },
        { jp: "バスと でんしゃと どちらが べんりですか。", rm: "basu to densha to dochira ga benri desu ka.", fr: "Which is more convenient, the bus or the train?" }
      ]
    },
    {
      title: "N の中で 何/どこ/だれが いちばん Adj ですか (superlative)",
      explanation: "To express the superlative ('the most ~' or 'the ~-est'), use いちばん (ichiban, meaning 'number one'). To ask 'What/Where/Who is the most [adjective] among [group]?' use: [Group] の中で [question word] が いちばん [adjective] ですか. The answer: [Answer] が いちばん [adjective] です.",
      examples: [
        { jp: "くだものの なかで なにが いちばん すきですか。", rm: "kudamono no naka de nani ga ichiban suki desu ka.", fr: "Among fruits, which do you like the most?" },
        { jp: "りんごが いちばん すきです。", rm: "ringo ga ichiban suki desu.", fr: "I like apples the most." },
        { jp: "にほんで どこが いちばん きれいですか。", rm: "nihon de doko ga ichiban kirei desu ka.", fr: "Where is the most beautiful place in Japan?" }
      ]
    },
    {
      title: "N₁ は N₂ ほど Adj-くないです / Adj-じゃないです (not as ~ as)",
      explanation: "To say 'A is NOT as [adjective] as B,' use: A は B ほど [adjective negative] です. ほど (hodo) means 'as much as' or 'to the extent of.' The adjective MUST be in the negative form. For い-adjectives: ~くないです. For な-adjectives: ~じゃないです.",
      examples: [
        { jp: "おおさかは きょうとほど しずかじゃないです。", rm: "Oosaka wa Kyouto hodo shizuka ja nai desu.", fr: "Osaka is not as quiet as Kyoto." },
        { jp: "わたしは あなたほど せが たかくないです。", rm: "watashi wa anata hodo se ga takaku nai desu.", fr: "I am not as tall as you." },
        { jp: "きょうは きのうほど さむくないです。", rm: "kyou wa kinou hodo samuku nai desu.", fr: "Today is not as cold as yesterday." }
      ]
    }
  ],
  keyPoints: [
    "Japanese adjectives do NOT change form for comparison -- より and いちばん do the work",
    "A は B より ~ = A is more ~ than B (より means 'than')",
    "A と B と どちらが ~ですか = Which is more ~, A or B? Answer: ~のほうが ~です",
    "~の中で [question word] が いちばん ~ですか = superlative question pattern",
    "A は B ほど ~くないです/~じゃないです = A is NOT as ~ as B (ほど always takes negative)"
  ],
  examples: [
    {
      japanese: "この レストランは あの レストランより おいしいです。",
      romaji: "kono resutoran wa ano resutoran yori oishii desu.",
      french: "This restaurant is more delicious than that restaurant.",
      breakdown: "この(this) レストラン(restaurant) は(topic) あの(that) レストラン(restaurant) より(than) おいしい(delicious) です(is)"
    },
    {
      japanese: "スポーツの なかで サッカーが いちばん おもしろいです。",
      romaji: "supootsu no naka de sakkaa ga ichiban omoshiroi desu.",
      french: "Among sports, soccer is the most interesting.",
      breakdown: "スポーツ(sports) の なかで(among) サッカー(soccer) が(subject) いちばん(most) おもしろい(interesting) です(is)"
    },
    {
      japanese: "とうきょうは おおさかほど あたたかくないです。",
      romaji: "Toukyou wa Oosaka hodo atatakaku nai desu.",
      french: "Tokyo is not as warm as Osaka.",
      breakdown: "とうきょう(Tokyo) は(topic) おおさか(Osaka) ほど(as much as) あたたかくない(not warm) です(is)"
    }
  ],
  exercises: [
    {
      question: "Translate: 'Summer is hotter than spring.'",
      hint: "summer = なつ, spring = はる, hot = あつい",
      answer: "なつは はるより あついです。",
      explanation: "なつ(summer) は はる(spring) より(than) あつい(hot) です"
    },
    {
      question: "Fill in: にくと やさいと ＿＿＿が すきですか。",
      answer: "どちら",
      explanation: "どちら is used to ask 'which of the two' in a comparison question."
    },
    {
      question: "Answer the question: クラスで だれが いちばん せが たかいですか。 -- Answer with たなかさん.",
      answer: "たなかさんが いちばん せが たかいです。",
      explanation: "Answer superlative questions with: [person/thing] が いちばん [adjective] です."
    },
    {
      question: "Translate: 'This test is not as difficult as that test.'",
      hint: "test = テスト, difficult = むずかしい",
      answer: "この テストは あの テストほど むずかしくないです。",
      explanation: "Use ほど + negative adjective to express 'not as ~ as.'"
    },
    {
      question: "Put in order: はやいです / ひこうきが / のりものの なかで / いちばん",
      answer: "のりものの なかで ひこうきが いちばん はやいです。",
      explanation: "Superlative pattern: [group]の なかで [subject]が いちばん [adjective]です"
    }
  ]
},
{
  id: 13,
  title: "Lesson 13: 別々に おねがいします",
  level: "Beginner",
  content: `In this lesson, you will learn how to express your wants and desires in Japanese. This includes wanting a THING (noun + がほしいです) and wanting to DO something (verb stem + たいです).

Important cultural note: In Japanese, you generally only use ほしいです and たいです to talk about YOUR OWN desires, or to ask someone directly about their desires in a question. You would not normally say "He wants..." using these forms for a third person, as it is considered presumptuous to state what someone else wants. For third-person desires, different grammar is used (covered in later lessons).

You will also learn the very useful pattern of going/coming somewhere FOR THE PURPOSE of doing something.`,
  grammarPoints: [
    {
      title: "N が ほしいです (I want N)",
      explanation: "To say you WANT something (a noun), use: [noun] が ほしいです (hoshii desu). The thing you want is marked by が. In the negative: ほしくないです. In the past: ほしかったです. Remember, ほしい is an い-adjective, so it conjugates like one. This pattern is only used for the speaker's own desires (first person) or in questions (second person).",
      examples: [
        { jp: "あたらしい くるまが ほしいです。", rm: "atarashii kuruma ga hoshii desu.", fr: "I want a new car." },
        { jp: "いま なにが ほしいですか。", rm: "ima nani ga hoshii desu ka.", fr: "What do you want now?" },
        { jp: "おかねは ほしくないです。", rm: "okane wa hoshiku nai desu.", fr: "I don't want money." }
      ]
    },
    {
      title: "V-ます form → V-たいです (I want to do V)",
      explanation: "To say you WANT TO DO something, take the ます-form of the verb, drop ます, and add たいです. For example: たべます → たべたいです (I want to eat). The particle for the object can be either を or が (both are acceptable with たい). Like ほしい, たい is an い-adjective and conjugates accordingly: たべたくないです (don't want to eat), たべたかったです (wanted to eat).",
      examples: [
        { jp: "にほんへ いきたいです。", rm: "nihon e ikitai desu.", fr: "I want to go to Japan." },
        { jp: "つめたい みずを のみたいです。", rm: "tsumetai mizu wo nomitai desu.", fr: "I want to drink cold water." },
        { jp: "きょうは なにも したくないです。", rm: "kyou wa nani mo shitaku nai desu.", fr: "I don't want to do anything today." }
      ]
    },
    {
      title: "Place へ V-ます stem に 行きます/来ます (go/come to do ~)",
      explanation: "To say you go or come somewhere for the PURPOSE of doing something, use: [place] へ [verb ます-stem] に 行きます/来ます. The verb ます-stem is the verb with ます removed. The に here indicates purpose. For example: たべます → たべ に いきます (go to eat). This pattern only works with movement verbs like いきます, きます, かえります.",
      examples: [
        { jp: "レストランへ ひるごはんを たべに いきます。", rm: "resutoran e hirugohan wo tabe ni ikimasu.", fr: "I go to a restaurant to eat lunch." },
        { jp: "にほんへ にほんごを べんきょうしに きました。", rm: "nihon e nihongo wo benkyou shi ni kimashita.", fr: "I came to Japan to study Japanese." },
        { jp: "こうえんへ さんぽしに いきましょう。", rm: "kouen e sanpo shi ni ikimashou.", fr: "Let's go to the park for a walk." }
      ]
    },
    {
      title: "いかがですか (polite offer: how about ~?)",
      explanation: "いかがですか is the polite form of どうですか (how about?). It is commonly used when offering something to someone, making suggestions, or politely asking for someone's opinion or preference. It is used in formal and service situations (restaurants, shops, business).",
      examples: [
        { jp: "コーヒーは いかがですか。", rm: "koohii wa ikaga desu ka.", fr: "Would you like some coffee?" },
        { jp: "もう いっぱい いかがですか。", rm: "mou ippai ikaga desu ka.", fr: "How about one more cup?" },
        { jp: "おちゃは いかがですか。", rm: "ocha wa ikaga desu ka.", fr: "Would you like some tea?" }
      ]
    }
  ],
  keyPoints: [
    "ほしいです and たいです are い-adjectives, so they conjugate like い-adjectives (ほしくない, たべたかった, etc.)",
    "These forms express the speaker's desires only -- do not use them to describe what a third person wants",
    "The object particle with たいです can be either を or が -- both are acceptable",
    "Purpose of movement: [place] へ [V-stem] に いきます/きます -- the に indicates purpose",
    "いかがですか is the polite equivalent of どうですか for offering or suggesting"
  ],
  examples: [
    {
      japanese: "なつやすみに うみへ およぎに いきたいです。",
      romaji: "natsuyasumi ni umi e oyogi ni ikitai desu.",
      french: "I want to go to the sea to swim during summer vacation.",
      breakdown: "なつやすみ(summer vacation) に(during) うみ(sea) へ(to) およぎ(swim-stem) に(purpose) いきたい(want to go) です"
    },
    {
      japanese: "おなかが すいたから、なにか たべたいです。",
      romaji: "onaka ga suita kara, nanika tabetai desu.",
      french: "I'm hungry, so I want to eat something.",
      breakdown: "おなか(stomach) が すいた(became empty) から(because) なにか(something) たべたい(want to eat) です"
    },
    {
      japanese: "べつべつに おねがいします。",
      romaji: "betsubetsu ni onegai shimasu.",
      french: "Separately, please. (asking for separate checks)",
      breakdown: "べつべつに(separately) おねがいします(please)"
    }
  ],
  exercises: [
    {
      question: "Translate: 'I want to drink beer.'",
      hint: "beer = ビール, to drink = のみます",
      answer: "ビールが のみたいです。 (or ビールを のみたいです。)",
      explanation: "のみます → のみたいです. Both が and を are acceptable with たい."
    },
    {
      question: "Fill in: デパートへ かいものを ＿＿に いきます。 (I go to the department store to shop.)",
      answer: "し",
      explanation: "かいものします → stem is かいものし. Pattern: V-stem + に いきます (go to do ~)."
    },
    {
      question: "How do you say 'I don't want anything' in Japanese?",
      answer: "なにも ほしくないです。",
      explanation: "なにも + negative = nothing. ほしい negative = ほしくないです."
    },
    {
      question: "Choose the correct form: にほんりょうりを (たべたいです / たべほしいです)",
      answer: "たべたいです",
      explanation: "To express wanting to DO something, use V-たいです. ほしいです is for wanting THINGS (nouns)."
    },
    {
      question: "Translate: 'I came to Osaka to meet a friend.'",
      hint: "to meet = あいます, friend = ともだち",
      answer: "おおさかへ ともだちに あいに きました。",
      explanation: "あいます → あい(stem) + に きました. ともだちに = the person you meet (に marks the target of あう)."
    }
  ]
},
{
  id: 14,
  title: "Lesson 14: みどりまちまで おねがいします",
  level: "Beginner",
  content: `This is one of the most important lessons in Minna no Nihongo! The て-form (te-form) is a verb conjugation that serves as a building block for many grammar patterns. Mastering it unlocks a huge range of expressions.

In this lesson you will learn:
1. How to form the て-form for all three verb groups
2. How to make polite requests with ～てください
3. How to describe ongoing actions with ～ています
4. How to offer help with ～ましょうか

The て-form itself has no tense -- it cannot be used alone at the end of a sentence (in polite speech). It always connects to something else. Think of it as the "connecting form" of the verb.`,
  grammarPoints: [
    {
      title: "て-form: Group 2 (る-verbs) and Group 3 (irregular)",
      explanation: `Let's start with the easy ones:

GROUP 2 (る-verbs / ichidan): Remove る, add て
  たべる → たべて (eat)
  みる → みて (see)
  おきる → おきて (wake up)
  ねる → ねて (sleep)
  おしえる → おしえて (teach)

GROUP 3 (irregular): Only two verbs!
  する → して (do)
  くる → きて (come)

These are straightforward. Group 1 is where it gets tricky.`,
      examples: [
        { jp: "たべて (← たべる)", rm: "tabete", fr: "eat (te-form)" },
        { jp: "みて (← みる)", rm: "mite", fr: "see/watch (te-form)" },
        { jp: "して (← する)", rm: "shite", fr: "do (te-form)" }
      ]
    },
    {
      title: "て-form: Group 1 (う-verbs) rules",
      explanation: `Group 1 verbs follow specific rules based on their final syllable. A helpful mnemonic song goes to the tune of 'Santa Claus is Coming to Town':

Ending in う, つ, る → って
  かう → かって (buy), まつ → まって (wait), かえる → かえって (return)

Ending in む, ぶ, ぬ → んで
  のむ → のんで (drink), あそぶ → あそんで (play), しぬ → しんで (die)

Ending in く → いて
  かく → かいて (write), きく → きいて (listen)
  EXCEPTION: いく → いって (go) -- NOT いいて!

Ending in ぐ → いで
  およぐ → およいで (swim), いそぐ → いそいで (hurry)

Ending in す → して
  はなす → はなして (speak), かす → かして (lend)`,
      examples: [
        { jp: "のんで (← のむ)", rm: "nonde", fr: "drink (te-form): む→んで" },
        { jp: "かいて (← かく)", rm: "kaite", fr: "write (te-form): く→いて" },
        { jp: "いって (← いく)", rm: "itte", fr: "go (te-form): EXCEPTION! く→って for いく" }
      ]
    },
    {
      title: "V-て ください (please do ~)",
      explanation: "To make a polite request, add ください after the て-form: V-て ください. This is the standard polite way to ask someone to do something. It is softer than an imperative but still a clear request. You can use it with strangers, coworkers, teachers, etc.",
      examples: [
        { jp: "ちょっと まって ください。", rm: "chotto matte kudasai.", fr: "Please wait a moment." },
        { jp: "もういちど いって ください。", rm: "mou ichido itte kudasai.", fr: "Please say it one more time." },
        { jp: "ここに なまえを かいて ください。", rm: "koko ni namae wo kaite kudasai.", fr: "Please write your name here." }
      ]
    },
    {
      title: "V-て います (progressive / resulting state)",
      explanation: `V-ています has two main meanings:

1. ONGOING ACTION (like English '-ing'): describes an action happening right now.
   いま ごはんを たべています = I am eating right now.

2. RESULTING STATE: describes a state that resulted from a past action.
   けっこんしています = I am married (the result of having gotten married).
   しっています = I know (the result of having come to know).

How to tell which meaning? Context! Also, some verbs naturally describe momentary actions (けっこんする, しる, すわる) and tend to take the 'resulting state' meaning.`,
      examples: [
        { jp: "いま あめが ふっています。", rm: "ima ame ga futte imasu.", fr: "It is raining right now." },
        { jp: "ミラーさんは でんわを かけています。", rm: "Miraa-san wa denwa wo kakete imasu.", fr: "Mr. Miller is making a phone call." },
        { jp: "わたしは とうきょうに すんでいます。", rm: "watashi wa Toukyou ni sunde imasu.", fr: "I live in Tokyo. (resulting state)" }
      ]
    },
    {
      title: "V-ましょうか (shall I ~? / let me ~)",
      explanation: "V-ましょうか is used to OFFER to do something for someone. It means 'Shall I ~?' or 'Let me ~.' This is different from V-ましょう (let's ~), which is a suggestion to do something together. V-ましょうか is an offer of help from you to the other person.",
      examples: [
        { jp: "にもつを もちましょうか。", rm: "nimotsu wo mochimashou ka.", fr: "Shall I carry your luggage?" },
        { jp: "まどを あけましょうか。", rm: "mado wo akemashou ka.", fr: "Shall I open the window?" },
        { jp: "タクシーを よびましょうか。", rm: "takushii wo yobimashou ka.", fr: "Shall I call a taxi?" }
      ]
    }
  ],
  keyPoints: [
    "The て-form is a connecting form and cannot stand alone at the end of a polite sentence",
    "Group 1 rules: う/つ/る→って, む/ぶ/ぬ→んで, く→いて (exception: いく→いって), ぐ→いで, す→して",
    "Group 2: remove る, add て. Group 3: する→して, くる→きて",
    "V-てください = polite request. V-ています = ongoing action or resulting state",
    "V-ましょうか = offering help ('Shall I ~?'), different from V-ましょう ('Let's ~')"
  ],
  examples: [
    {
      japanese: "みどりまちまで おねがいします。",
      romaji: "Midori-machi made onegai shimasu.",
      french: "To Midori-machi, please. (said to a taxi driver)",
      breakdown: "みどりまち(Midori-machi) まで(to/until) おねがいします(please)"
    },
    {
      japanese: "すみません、しゃしんを とって ください。",
      romaji: "sumimasen, shashin wo totte kudasai.",
      french: "Excuse me, please take a photo.",
      breakdown: "すみません(excuse me) しゃしん(photo) を(object) とって(take-te form) ください(please)"
    },
    {
      japanese: "おとうとは いま テレビを みています。",
      romaji: "otouto wa ima terebi wo mite imasu.",
      french: "My younger brother is watching TV right now.",
      breakdown: "おとうと(younger brother) は(topic) いま(now) テレビ(TV) を(object) みています(is watching)"
    }
  ],
  exercises: [
    {
      question: "Convert to て-form: のむ (to drink)",
      answer: "のんで",
      explanation: "のむ ends in む, so む → んで. のむ → のんで."
    },
    {
      question: "Convert to て-form: いく (to go)",
      answer: "いって",
      explanation: "いく is the EXCEPTION to the く→いて rule. いく → いって (NOT いいて)."
    },
    {
      question: "Translate: 'Please speak slowly.'",
      hint: "slowly = ゆっくり, to speak = はなす",
      answer: "ゆっくり はなして ください。",
      explanation: "はなす → はなして (す→して) + ください"
    },
    {
      question: "Choose the correct meaning: わたしは けっこんしています。 (a) I am getting married. (b) I am married.",
      answer: "(b) I am married.",
      explanation: "けっこんする is a momentary action, so ～ています indicates the RESULTING STATE: being married."
    },
    {
      question: "Fill in: エアコンを ＿＿＿ましょうか。 (Shall I turn on the AC?) つけます → ?",
      answer: "つけ",
      explanation: "V-ましょうか pattern. つけます → つけましょうか (Shall I turn it on?)."
    }
  ]
},
{
  id: 15,
  title: "Lesson 15: ご家族は？",
  level: "Beginner",
  content: `This lesson expands on the て-form by teaching you how to ask for permission, express prohibition, describe habitual actions and states, and say that something has not yet happened.

These patterns are incredibly common in daily conversation. You will use them to ask if you can do something, to understand rules (what you must not do), to talk about your job and lifestyle, and to explain that you have not done something yet.

The lesson also introduces talking about family, occupations, and daily routines -- all natural contexts where these grammar patterns appear.`,
  grammarPoints: [
    {
      title: "V-ても いいですか (May I ~? / Is it okay to ~?)",
      explanation: "To ask for PERMISSION, use: V-て も いいですか. Literally: 'Even if I do V, is it good?' The answer for granting permission: はい、V-ても いいですよ (Yes, it's fine). The answer for refusing: すみません、ちょっと... (Sorry, it's a bit...) -- Japanese people often refuse indirectly.",
      examples: [
        { jp: "しゃしんを とっても いいですか。", rm: "shashin wo totte mo ii desu ka.", fr: "May I take a photo?" },
        { jp: "ここに すわっても いいですか。", rm: "koko ni suwatte mo ii desu ka.", fr: "May I sit here?" },
        { jp: "エアコンを つけても いいですか。", rm: "eakon wo tsukete mo ii desu ka.", fr: "May I turn on the air conditioning?" }
      ]
    },
    {
      title: "V-ては いけません (must not / not allowed to)",
      explanation: "To express PROHIBITION (something you must not do), use: V-ては いけません. This is a firm prohibition, like a rule or regulation. It is commonly seen on signs, in classrooms, and when parents talk to children. The は in ては is sometimes written as わ in casual speech (V-ちゃ いけない).",
      examples: [
        { jp: "ここで たばこを すっては いけません。", rm: "koko de tabako wo sutte wa ikemasen.", fr: "You must not smoke here." },
        { jp: "しけんで じしょを つかっては いけません。", rm: "shiken de jisho wo tsukatte wa ikemasen.", fr: "You must not use a dictionary during the exam." },
        { jp: "としょかんで たべものを たべては いけません。", rm: "toshokan de tabemono wo tabete wa ikemasen.", fr: "You must not eat food in the library." }
      ]
    },
    {
      title: "V-ています (habitual action / occupation / lasting state)",
      explanation: `You already learned V-ています for ongoing actions and resulting states. Now we expand to more uses:

1. HABITUAL ACTION: describes something you do regularly.
   まいあさ ジョギングしています = I jog every morning (habitual)

2. OCCUPATION/AFFILIATION: describes what you do for a living or where you belong.
   びょういんで はたらいています = I work at a hospital

3. LASTING STATE: describes a state that continues.
   あには とうきょうに すんでいます = My older brother lives in Tokyo

The key is that V-ています describes a continuing situation, whether it's an action in progress, a habit, or a state.`,
      examples: [
        { jp: "わたしは まいにち にほんごを べんきょうしています。", rm: "watashi wa mainichi nihongo wo benkyou shite imasu.", fr: "I study Japanese every day. (habitual)" },
        { jp: "ちちは ぎんこうで はたらいています。", rm: "chichi wa ginkou de hataraite imasu.", fr: "My father works at a bank. (occupation)" },
        { jp: "あねは けっこんしています。", rm: "ane wa kekkon shite imasu.", fr: "My older sister is married. (state)" }
      ]
    },
    {
      title: "まだ V-ていません (have not ~ yet)",
      explanation: "To say you have NOT done something YET, use: まだ V-ていません. まだ means 'still' or 'yet.' This implies that the action is expected to happen eventually, but has not happened so far. The question form is: もう V-ましたか (Have you already done ~?).",
      examples: [
        { jp: "まだ ひるごはんを たべていません。", rm: "mada hirugohan wo tabete imasen.", fr: "I haven't eaten lunch yet." },
        { jp: "まだ レポートを かいていません。", rm: "mada repooto wo kaite imasen.", fr: "I haven't written the report yet." },
        { jp: "もう しゅくだいを しましたか。 ...いいえ、まだ していません。", rm: "mou shukudai wo shimashita ka. ...iie, mada shite imasen.", fr: "Have you done your homework yet? ...No, I haven't done it yet." }
      ]
    }
  ],
  keyPoints: [
    "V-てもいいですか = asking permission (May I?). Answer: いいですよ / すみません、ちょっと...",
    "V-てはいけません = prohibition (Must not). Used for rules and regulations",
    "V-ています has multiple meanings: ongoing action, habitual action, occupation, and lasting state",
    "まだ V-ていません = have not yet done. Paired with もう V-ましたか (Have you already done?)",
    "When talking about family, use humble terms for YOUR family and honorific terms for someone else's family"
  ],
  examples: [
    {
      japanese: "この へやで でんわを かけても いいですか。",
      romaji: "kono heya de denwa wo kakete mo ii desu ka.",
      french: "May I make a phone call in this room?",
      breakdown: "この(this) へや(room) で(in) でんわ(phone) を(object) かけても(even if make) いいですか(is it okay?)"
    },
    {
      japanese: "はは は びょういんで はたらいています。",
      romaji: "haha wa byouin de hataraite imasu.",
      french: "My mother works at a hospital.",
      breakdown: "はは(mother-humble) は(topic) びょういん(hospital) で(at) はたらいています(is working/works)"
    },
    {
      japanese: "もう きっぷを かいましたか。 ...いいえ、まだ かっていません。",
      romaji: "mou kippu wo kaimashita ka. ...iie, mada katte imasen.",
      french: "Have you already bought the ticket? ...No, I haven't bought it yet.",
      breakdown: "もう(already) きっぷ(ticket) を かいましたか(did you buy?) ...まだ(yet) かっていません(have not bought)"
    }
  ],
  exercises: [
    {
      question: "Ask for permission: 'May I use this computer?'",
      hint: "computer = パソコン, to use = つかいます",
      answer: "この パソコンを つかっても いいですか。",
      explanation: "つかいます → つかって + も いいですか"
    },
    {
      question: "Fill in: ここで ＿＿ては いけません。 (You must not run here.) はしります → ?",
      answer: "はしっ",
      explanation: "はしります → はしって → はしっては いけません. (る→って pattern for はしる)"
    },
    {
      question: "Translate: 'I haven't read that book yet.'",
      hint: "to read = よみます",
      answer: "まだ その ほんを よんでいません。",
      explanation: "よみます → よんで + いません. まだ ~ ていません = have not ~ yet."
    },
    {
      question: "Which meaning of V-ています? 'あには おおさかに すんでいます。'",
      answer: "Lasting state / resulting state (My older brother lives in Osaka)",
      explanation: "すんでいます (from すむ = to live/reside) describes a lasting state, not an ongoing action."
    },
    {
      question: "Respond: もう ばんごはんを たべましたか。 Answer with 'No, not yet.'",
      answer: "いいえ、まだ たべていません。",
      explanation: "Use まだ V-ていません to respond 'not yet' to a もう ~ましたか question."
    }
  ]
},
{
  id: 16,
  title: "Lesson 16: 使い方を 教えて ください",
  level: "Beginner",
  content: `This lesson teaches you how to connect multiple actions, adjectives, and descriptions together in a single sentence. In English, we use "and" freely. In Japanese, there are specific forms for linking verbs and adjectives.

You will learn how to describe a SEQUENCE of actions ('I ate breakfast and then went to work'), how to LINK adjectives to describe something with multiple qualities ('This room is big and clean'), and how to express that one action happens AFTER another.

These patterns will make your Japanese sound much more natural and fluent, as you will be able to say complex sentences instead of short, choppy ones.`,
  grammarPoints: [
    {
      title: "V₁-て、V₂ (sequential actions with て-form)",
      explanation: "To express a sequence of actions ('I did X and then Y'), use the て-form for the first verb and put the main verb at the end. The て-form connects actions in the order they happen. You can chain multiple actions: V₁-て、V₂-て、V₃. The tense (past/present/future) is determined ONLY by the last verb.",
      examples: [
        { jp: "あさ おきて、シャワーを あびて、あさごはんを たべます。", rm: "asa okite, shawaa wo abite, asagohan wo tabemasu.", fr: "In the morning I wake up, take a shower, and eat breakfast." },
        { jp: "でんしゃに のって、かいしゃに いきます。", rm: "densha ni notte, kaisha ni ikimasu.", fr: "I take the train and go to the office." },
        { jp: "スーパーで やさいを かって、ばんごはんを つくりました。", rm: "suupaa de yasai wo katte, bangohan wo tsukurimashita.", fr: "I bought vegetables at the supermarket and made dinner." }
      ]
    },
    {
      title: "い-Adj₁-くて、い-Adj₂ (linking い-adjectives)",
      explanation: "To connect two い-adjectives ('X is A and B'), change the first い-adjective: remove い, add くて. The last adjective keeps its normal form + です. This is the adjective equivalent of the verb て-form.",
      examples: [
        { jp: "この りょうりは やすくて、おいしいです。", rm: "kono ryouri wa yasukute, oishii desu.", fr: "This food is cheap and delicious." },
        { jp: "きのうは あつくて、たいへんでした。", rm: "kinou wa atsukute, taihen deshita.", fr: "Yesterday was hot and terrible." },
        { jp: "あの ホテルは ふるくて、せまいです。", rm: "ano hoteru wa furukute, semai desu.", fr: "That hotel is old and small." }
      ]
    },
    {
      title: "な-Adj₁-で、な-Adj₂ / N-で (linking な-adjectives and nouns)",
      explanation: "To connect な-adjectives or nouns in a descriptive chain, add で after the first な-adjective or noun. This works the same way as くて for い-adjectives. For nouns: にほんじんで、せんせいです (He is Japanese and a teacher).",
      examples: [
        { jp: "この へやは きれいで、ひろいです。", rm: "kono heya wa kirei de, hiroi desu.", fr: "This room is clean and spacious." },
        { jp: "ミラーさんは しんせつで、おもしろいです。", rm: "Miraa-san wa shinsetsu de, omoshiroi desu.", fr: "Mr. Miller is kind and interesting." },
        { jp: "かのじょは にほんじんで、いしゃです。", rm: "kanojo wa nihonjin de, isha desu.", fr: "She is Japanese and a doctor." }
      ]
    },
    {
      title: "V₁-てから、V₂ (after doing V₁, then V₂)",
      explanation: "To explicitly say 'AFTER doing X, I do Y,' use: V₁-てから、V₂. てから emphasizes that V₁ must be completed BEFORE V₂ begins. This is stronger than simply using て to chain actions. The difference: V-て V₂ = 'do X and Y (in sequence),' V-てから V₂ = 'do Y only AFTER completing X.'",
      examples: [
        { jp: "てを あらってから、ごはんを たべます。", rm: "te wo aratte kara, gohan wo tabemasu.", fr: "After washing my hands, I eat." },
        { jp: "にほんへ きてから、にほんごが じょうずに なりました。", rm: "nihon e kite kara, nihongo ga jouzu ni narimashita.", fr: "After coming to Japan, my Japanese got better." },
        { jp: "しごとが おわってから、のみに いきましょう。", rm: "shigoto ga owatte kara, nomi ni ikimashou.", fr: "After work finishes, let's go drinking." }
      ]
    },
    {
      title: "V-ます stem + 方 (かた) (how to do ~)",
      explanation: "To express 'how to do something,' use: V-ます stem + 方 (かた). This creates a noun meaning 'the way of doing ~' or 'how to do ~.' For example: つかいます → つかいかた (how to use), よみます → よみかた (how to read), たべます → たべかた (how to eat).",
      examples: [
        { jp: "この きかいの つかいかたを おしえて ください。", rm: "kono kikai no tsukaikata wo oshiete kudasai.", fr: "Please teach me how to use this machine." },
        { jp: "この かんじの よみかたが わかりません。", rm: "kono kanji no yomikata ga wakarimasen.", fr: "I don't know how to read this kanji." },
        { jp: "おすしの たべかたを しっていますか。", rm: "osushi no tabekata wo shitte imasu ka.", fr: "Do you know how to eat sushi?" }
      ]
    }
  ],
  keyPoints: [
    "V-て chains actions in sequence; the tense is set by the LAST verb only",
    "い-adjective linking: remove い, add くて. な-adjective/noun linking: add で",
    "V-てから emphasizes that one action must finish BEFORE the next one starts",
    "V-stem + 方 (かた) = 'how to do ~' -- creates a noun you can use in any noun position",
    "You can chain multiple actions: V₁-て、V₂-て、V₃-て、V₄ます (all in sequence)"
  ],
  examples: [
    {
      japanese: "うちへ かえって、シャワーを あびて、ばんごはんを たべました。",
      romaji: "uchi e kaette, shawaa wo abite, bangohan wo tabemashita.",
      french: "I went home, took a shower, and ate dinner.",
      breakdown: "うち(home) へ かえって(returned-te) シャワー(shower) を あびて(took-te) ばんごはん(dinner) を たべました(ate)"
    },
    {
      japanese: "この まちは しずかで、きれいで、とても すきです。",
      romaji: "kono machi wa shizuka de, kirei de, totemo suki desu.",
      french: "This town is quiet and beautiful, and I like it very much.",
      breakdown: "この(this) まち(town) は しずかで(quiet-and) きれいで(beautiful-and) とても(very) すき(like) です"
    },
    {
      japanese: "くすりを のんでから、ねて ください。",
      romaji: "kusuri wo nonde kara, nete kudasai.",
      french: "After taking medicine, please go to sleep.",
      breakdown: "くすり(medicine) を のんでから(after drinking) ねて(sleep-te) ください(please)"
    }
  ],
  exercises: [
    {
      question: "Connect: 'I bought a book and read it.' かいます → ?、よみました",
      answer: "ほんを かって、よみました。",
      explanation: "かいます (かう) → かって (う→って). て-form connects the two sequential actions."
    },
    {
      question: "Link the adjectives: 'This bag is light and convenient.' (light = かるい, convenient = べんり)",
      answer: "この かばんは かるくて、べんりです。",
      explanation: "かるい (い-adj) → かるくて (remove い, add くて). べんり is a な-adj at the end."
    },
    {
      question: "Translate: 'After eating, I brush my teeth.' (brush teeth = はを みがきます)",
      answer: "たべてから、はを みがきます。",
      explanation: "たべます → たべてから (after eating). てから emphasizes the order."
    },
    {
      question: "How do you say 'how to make' in Japanese? (to make = つくります)",
      answer: "つくりかた",
      explanation: "つくります → stem: つくり + 方(かた) = つくりかた (how to make)"
    },
    {
      question: "Put in order: たべます / てを / あらってから / ごはんを",
      answer: "てを あらってから、ごはんを たべます。",
      explanation: "After washing hands (てを あらってから), eat rice/food (ごはんを たべます)."
    }
  ]
},
{
  id: 17,
  title: "Lesson 17: どうしましたか",
  level: "Beginner",
  content: `This lesson introduces the ない-form (nai-form), which is the plain/casual negative form of verbs. Just as the て-form is a building block for many grammar patterns, the ない-form is essential for expressing negative requests, obligations, and the absence of obligation.

You will learn:
1. How to form the ない-form for all verb groups
2. How to make negative requests: 'Please don't ~' (V-ないでください)
3. How to express obligation: 'must do ~' (V-なければなりません)
4. How to express the absence of obligation: 'don't have to ~' (V-なくてもいいです)

This lesson's title 'どうしましたか' (What happened? / What's wrong?) is a phrase commonly used at a doctor's office, which is a key context in Minna no Nihongo Lesson 17.`,
  grammarPoints: [
    {
      title: "ない-form: Formation rules",
      explanation: `The ない-form is the plain negative form. Here is how to form it:

GROUP 2 (る-verbs): Remove る, add ない
  たべる → たべない (not eat)
  みる → みない (not see)
  おきる → おきない (not wake up)

GROUP 3 (irregular):
  する → しない (not do)
  くる → こない (not come)

GROUP 1 (う-verbs): Change the final う-row sound to the corresponding あ-row sound, then add ない.
  かく → かかない (k-u → k-a + nai)
  のむ → のまない (m-u → m-a + nai)
  はなす → はなさない (s-u → s-a + nai)
  まつ → またない (t-u → t-a + nai)
  しぬ → しなない (n-u → n-a + nai)
  あそぶ → あそばない (b-u → b-a + nai)
  かえる → かえらない (r-u → r-a + nai)

SPECIAL CASE: Verbs ending in う → わない (NOT あない!)
  かう → かわない (buy → not buy)
  あう → あわない (meet → not meet)

IMPORTANT EXCEPTION: ある → ない (NOT あらない!)
The verb ある (to exist) simply becomes ない.`,
      examples: [
        { jp: "たべない (← たべる)", rm: "tabenai", fr: "not eat (Group 2: remove る, add ない)" },
        { jp: "のまない (← のむ)", rm: "nomanai", fr: "not drink (Group 1: む→ま + ない)" },
        { jp: "かわない (← かう)", rm: "kawanai", fr: "not buy (Group 1 special: う→わ + ない)" }
      ]
    },
    {
      title: "V-ないで ください (please don't ~)",
      explanation: "To ask someone NOT to do something, use: V-ないで ください. This is the negative equivalent of V-てください. It is a polite way to ask someone to refrain from doing something. Note: the で here is NOT the particle で -- it is part of the ないで construction.",
      examples: [
        { jp: "ここで しゃしんを とらないで ください。", rm: "koko de shashin wo toranaide kudasai.", fr: "Please don't take photos here." },
        { jp: "しんぱいしないで ください。", rm: "shinpai shinaide kudasai.", fr: "Please don't worry." },
        { jp: "ここに くるまを とめないで ください。", rm: "koko ni kuruma wo tomenaide kudasai.", fr: "Please don't park your car here." }
      ]
    },
    {
      title: "V-なければ なりません (must do ~ / have to ~)",
      explanation: "To express that something MUST be done (obligation), use: V-なければ なりません. This literally means 'if one does not do V, it will not do / it won't work.' It can also be written as V-なければ いけません (same meaning). This is a fairly long expression, so in casual speech people often shorten it to V-なきゃ or V-ないと.",
      examples: [
        { jp: "くすりを のまなければ なりません。", rm: "kusuri wo nomanakereba narimasen.", fr: "I must take medicine." },
        { jp: "あした しけんが ありますから、べんきょうしなければ なりません。", rm: "ashita shiken ga arimasu kara, benkyou shinakereba narimasen.", fr: "There's an exam tomorrow, so I must study." },
        { jp: "まいにち にほんごを れんしゅうしなければ なりません。", rm: "mainichi nihongo wo renshuu shinakereba narimasen.", fr: "I have to practice Japanese every day." }
      ]
    },
    {
      title: "V-なくても いいです (don't have to ~ / it's okay not to ~)",
      explanation: "To express that something is NOT necessary (absence of obligation), use: V-なくても いいです. This means 'it's okay even if you don't do V' or 'you don't have to do V.' This is the opposite of V-なければなりません. Note the conjugation: V-ない → V-なくて + も いいです.",
      examples: [
        { jp: "あした こなくても いいです。", rm: "ashita konakute mo ii desu.", fr: "You don't have to come tomorrow." },
        { jp: "むりに たべなくても いいですよ。", rm: "muri ni tabenakute mo ii desu yo.", fr: "You don't have to force yourself to eat." },
        { jp: "にちようびは はやく おきなくても いいです。", rm: "nichiyoubi wa hayaku okinakute mo ii desu.", fr: "On Sundays, you don't have to wake up early." }
      ]
    }
  ],
  keyPoints: [
    "ない-form: Group 1 changes the final う-row kana to あ-row + ない. Exception: verbs ending in う → わない",
    "Group 2: remove る, add ない. Group 3: する→しない, くる→こない. Special: ある→ない",
    "V-ないでください = Please don't ~ (polite negative request)",
    "V-なければなりません = Must do ~ (obligation). Often shortened to V-なきゃ in casual speech",
    "V-なくてもいいです = Don't have to ~ (no obligation). Opposite of なければなりません"
  ],
  examples: [
    {
      japanese: "どうしましたか。 ...あたまが いたいです。",
      romaji: "dou shimashita ka. ...atama ga itai desu.",
      french: "What happened? / What's wrong? ...I have a headache.",
      breakdown: "どう(how/what) しましたか(happened?) ...あたま(head) が いたい(hurts) です"
    },
    {
      japanese: "おさけを のまないで ください。くすりを のんでいますから。",
      romaji: "osake wo nomanaide kudasai. kusuri wo nonde imasu kara.",
      french: "Please don't drink alcohol. Because I'm taking medicine.",
      breakdown: "おさけ(alcohol) を のまないで(don't drink) ください(please). くすり(medicine) を のんでいます(am taking) から(because)"
    },
    {
      japanese: "びょうきですから、きょうは かいしゃに いかなければ なりませんか。 ...いいえ、いかなくても いいですよ。",
      romaji: "byouki desu kara, kyou wa kaisha ni ikanakereba narimasen ka. ...iie, ikanakute mo ii desu yo.",
      french: "Since you're sick, do you have to go to work today? ...No, you don't have to go.",
      breakdown: "びょうき(sick) ですから(because) きょう(today) は かいしゃ(company) に いかなければなりません(must go) か ...いいえ いかなくても(even if not go) いいですよ(it's fine)"
    }
  ],
  exercises: [
    {
      question: "Convert to ない-form: かく (to write)",
      answer: "かかない",
      explanation: "かく is Group 1. く is in the う-row. Change to あ-row: か + ない = かかない."
    },
    {
      question: "Convert to ない-form: かう (to buy)",
      answer: "かわない",
      explanation: "Special case! Verbs ending in う change to わ + ない (NOT あない). かう → かわない."
    },
    {
      question: "Translate: 'Please don't run in the hospital.'",
      hint: "hospital = びょういん, to run = はしります (はしる)",
      answer: "びょういんで はしらないで ください。",
      explanation: "はしる → はしらない (Group 1: る→ら + ない) + で ください"
    },
    {
      question: "Translate: 'I have to go to the hospital tomorrow.'",
      hint: "hospital = びょういん, to go = いきます (いく)",
      answer: "あした びょういんに いかなければ なりません。",
      explanation: "いく → いかない → いかなければ なりません (must go)"
    },
    {
      question: "Fill in: にちようびは しごとを ＿＿＿＿＿ いいです。 (You don't have to work on Sunday.) する → ?",
      answer: "しなくても",
      explanation: "する → しない → しなくても いいです (don't have to do)"
    }
  ]
},
{
  id: 18,
  title: "Lesson 18: 趣味は 映画を 見ることです",
  level: "Intermediate",
  content: `Lesson 18 introduces the dictionary form (辞書形 jishokei) of verbs — the plain present affirmative form. This is the form you find when you look up a verb in a dictionary, which is why it is called the "dictionary form."

Up until now you have been using the polite ます form. The dictionary form is the base form of every verb and is essential for building more advanced grammar. In this lesson you will learn how to convert ます form verbs back to their dictionary form, and then use the dictionary form in several important patterns:

1. V-dictionary + ことが できます — expressing ability ("I can do...")
2. 趣味は V-dictionary + ことです — talking about hobbies ("My hobby is...")
3. V-dictionary / Nの + まえに — expressing "before doing something"
4. V-dictionary + 時間/約束/用事 — "time to V," "appointment to V," etc.

These patterns are extremely common in daily Japanese and open the door to much more natural expression.`,
  grammarPoints: [
    {
      title: "Dictionary Form (辞書形) — Formation",
      explanation: `The dictionary form is the plain present affirmative of a verb. Here is how to convert from ます form:

GROUP 2 (ru-verbs): Remove ます, add る
  たべます → たべる (to eat)
  みます → みる (to see)
  ねます → ねる (to sleep)

GROUP 1 (u-verbs): Remove ます, change the last vowel sound from -i to -u
  かきます → かく (to write)  [ki → ku]
  のみます → のむ (to drink)  [mi → mu]
  はなします → はなす (to speak)  [shi → su]
  まちます → まつ (to wait)  [chi → tsu]
  あそびます → あそぶ (to play)  [bi → bu]
  よみます → よむ (to read)  [mi → mu]
  かいます → かう (to buy)  [i → u]

GROUP 3 (irregular):
  します → する (to do)
  きます → くる (to come)`,
      examples: [
        { jp: "たべます → たべる", rm: "tabemasu → taberu", fr: "to eat (polite → dictionary)" },
        { jp: "かきます → かく", rm: "kakimasu → kaku", fr: "to write (polite → dictionary)" },
        { jp: "します → する", rm: "shimasu → suru", fr: "to do (polite → dictionary)" }
      ]
    },
    {
      title: "V-dictionary + ことが できます (can do / be able to)",
      explanation: `This pattern expresses ability or possibility. The verb in dictionary form + こと turns the verb into a noun ("the act of doing"), and できます means "can / is possible."

Structure: V-dictionary + ことが できます
Negative: V-dictionary + ことが できません

Note: For nouns, you can simply say Nが できます (e.g., 日本語が できます = I can speak Japanese).`,
      examples: [
        { jp: "わたしは 日本語を 話すことが できます。", rm: "watashi wa nihongo wo hanasu koto ga dekimasu.", fr: "I can speak Japanese." },
        { jp: "ここで 泳ぐことが できますか。", rm: "koko de oyogu koto ga dekimasu ka.", fr: "Can you swim here?" },
        { jp: "漢字を 読むことが できません。", rm: "kanji wo yomu koto ga dekimasen.", fr: "I cannot read kanji." }
      ]
    },
    {
      title: "趣味は V-dictionary + ことです (My hobby is...)",
      explanation: `This pattern is used to describe hobbies or interests. Again, V + こと nominalizes the verb (turns it into a noun-like phrase), and です states what the hobby is.

Structure: 趣味は V-dictionary + ことです

This is one of the most common self-introduction patterns in Japanese.`,
      examples: [
        { jp: "趣味は 映画を 見ることです。", rm: "shumi wa eiga wo miru koto desu.", fr: "My hobby is watching movies." },
        { jp: "趣味は 料理を 作ることです。", rm: "shumi wa ryouri wo tsukuru koto desu.", fr: "My hobby is cooking." },
        { jp: "わたしの 趣味は 写真を 撮ることです。", rm: "watashi no shumi wa shashin wo toru koto desu.", fr: "My hobby is taking photos." }
      ]
    },
    {
      title: "V-dictionary / Nの + まえに (before doing / before N)",
      explanation: `まえに means "before." When used with a verb, the verb must be in dictionary form. When used with a noun, the noun takes の before まえに.

Structure:
  V-dictionary + まえに、～ (before doing V, ...)
  Nの + まえに、～ (before N, ...)

Important: The verb before まえに is ALWAYS in dictionary form, regardless of the tense of the main sentence. The tense is determined by the final verb of the sentence.`,
      examples: [
        { jp: "寝る まえに、歯を みがきます。", rm: "neru mae ni, ha wo migakimasu.", fr: "Before sleeping, I brush my teeth." },
        { jp: "食事の まえに、手を 洗います。", rm: "shokuji no mae ni, te wo araimasu.", fr: "Before the meal, I wash my hands." },
        { jp: "日本へ 行く まえに、日本語を 勉強しました。", rm: "nihon e iku mae ni, nihongo wo benkyou shimashita.", fr: "Before going to Japan, I studied Japanese." }
      ]
    },
    {
      title: "V-dictionary + 時間/約束/用事 (time to V / appointment to V)",
      explanation: `The dictionary form can modify nouns directly. This is used to describe what kind of time, appointment, or errand it is.

Structure: V-dictionary + noun (時間 = time, 約束 = appointment/promise, 用事 = errand/things to do)

This is actually an early preview of noun modification (relative clauses), which you will study in depth in Lesson 22.`,
      examples: [
        { jp: "本を 読む 時間が ありません。", rm: "hon wo yomu jikan ga arimasen.", fr: "I don't have time to read books." },
        { jp: "友達と 会う 約束が あります。", rm: "tomodachi to au yakusoku ga arimasu.", fr: "I have an appointment to meet a friend." },
        { jp: "あした する 用事が たくさん あります。", rm: "ashita suru youji ga takusan arimasu.", fr: "I have a lot of things to do tomorrow." }
      ]
    }
  ],
  keyPoints: [
    "The dictionary form is the plain present affirmative — the form listed in dictionaries",
    "V + ことが できます expresses ability: 泳ぐことが できます = I can swim",
    "V + ことです turns a verb into a noun phrase, perfect for describing hobbies",
    "The verb before まえに is ALWAYS in dictionary form, no matter what tense the sentence is",
    "The dictionary form can directly modify nouns: 読む 時間 = time to read"
  ],
  examples: [
    {
      japanese: "わたしは ピアノを ひくことが できます。",
      romaji: "watashi wa piano wo hiku koto ga dekimasu.",
      french: "I can play the piano.",
      breakdown: "わたし(I) は(topic) ピアノ(piano) を(object) ひく(to play-dictionary) こと(act of) が(subject) できます(can)"
    },
    {
      japanese: "趣味は 音楽を 聞くことです。",
      romaji: "shumi wa ongaku wo kiku koto desu.",
      french: "My hobby is listening to music.",
      breakdown: "趣味(hobby) は(topic) 音楽(music) を(object) 聞く(to listen-dictionary) こと(act of) です(is)"
    },
    {
      japanese: "出かける まえに、電気を 消してください。",
      romaji: "dekakeru mae ni, denki wo keshite kudasai.",
      french: "Before going out, please turn off the lights.",
      breakdown: "出かける(to go out-dictionary) まえに(before) 電気(lights) を(object) 消して(turn off-te) ください(please)"
    },
    {
      japanese: "勉強する 時間が ほしいです。",
      romaji: "benkyou suru jikan ga hoshii desu.",
      french: "I want time to study.",
      breakdown: "勉強する(to study-dictionary) 時間(time) が(subject) ほしい(want) です(polite)"
    }
  ],
  exercises: [
    {
      question: "Convert to dictionary form: のみます",
      answer: "のむ",
      explanation: "のみます is a Group 1 verb. Remove ます and change the -i row (み) to the -u row (む): のむ."
    },
    {
      question: "Translate into Japanese: 'My hobby is reading books.' (book = 本, to read = 読む)",
      answer: "趣味は 本を 読むことです。",
      explanation: "趣味は(hobby is) 本を(books) 読む(to read-dictionary) こと(act of) です(is)."
    },
    {
      question: "Fill in the blank: 寝る ＿＿＿、シャワーを 浴びます。(Before sleeping, I take a shower.)",
      answer: "まえに",
      hint: "'Before' in Japanese is まえに, placed after the dictionary form verb.",
      explanation: "寝る まえに = before sleeping. The verb before まえに must be in dictionary form."
    },
    {
      question: "Translate: 'I cannot drive a car.' (to drive = 運転する, car = 車)",
      answer: "車を 運転することが できません。",
      explanation: "運転する(to drive-dictionary) + ことが できません(cannot). Use the negative form できません."
    },
    {
      question: "Reorder the words: あります / 友達と / 約束が / 遊ぶ",
      answer: "友達と 遊ぶ 約束が あります。",
      explanation: "友達と(with friend) 遊ぶ(to play/hang out-dictionary) 約束(appointment) が(subject) あります(exists). 'I have plans to hang out with a friend.'"
    }
  ]
},
{
  id: 19,
  title: "Lesson 19: 富士山に 登ったことが ありますか",
  level: "Intermediate",
  content: `Lesson 19 introduces the た-form (ta-form) — the plain past affirmative of verbs. Just as the て-form was crucial for many grammar patterns, the た-form unlocks important new expressions.

The た-form is formed almost identically to the て-form: simply replace て with た (and で with だ). If you already know the て-form well, the た-form is extremely easy!

In this lesson you will learn:
1. How to form the た-form from the て-form
2. V-た + ことが あります — expressing past experience ("I have done...")
3. V₁-たり V₂-たり します — listing representative actions ("I do things like V₁ and V₂")
4. V-た + あとで — expressing "after doing something"
5. もう V-た / まだ V-ていない — "already did" vs "not yet"

These patterns are extremely common in everyday conversation and are used constantly when talking about experiences, weekend activities, and sequences of events.`,
  grammarPoints: [
    {
      title: "た-form (Plain Past Affirmative) — Formation",
      explanation: `The た-form is formed by replacing て with た, and で with だ in the て-form:

GROUP 1 (u-verbs):
  かいて → かいた (wrote)     [く → いた]
  およいで → およいだ (swam)   [ぐ → いだ]
  のんで → のんだ (drank)     [む/ぶ/ぬ → んだ]
  はなして → はなした (spoke)  [す → した]
  まって → まった (waited)    [う/つ/る → った]
  いって → いった (went)      [irregular: いく]

GROUP 2 (ru-verbs):
  たべて → たべた (ate)
  みて → みた (saw)

GROUP 3 (irregular):
  して → した (did)
  きて → きた (came)

Simply remember: て→た, で→だ. That is it!`,
      examples: [
        { jp: "きのう 映画を 見た。", rm: "kinou eiga wo mita.", fr: "I watched a movie yesterday. (casual)" },
        { jp: "朝ごはんを 食べた。", rm: "asagohan wo tabeta.", fr: "I ate breakfast. (casual)" },
        { jp: "日本に 行った。", rm: "nihon ni itta.", fr: "I went to Japan. (casual)" }
      ]
    },
    {
      title: "V-た + ことが あります (have experienced / have done before)",
      explanation: `This pattern expresses whether you have ever had the experience of doing something. It is used to talk about life experiences.

Structure:
  V-た + ことが あります (I have done V before)
  V-た + ことが ありません (I have never done V)

Question: V-た + ことが ありますか (Have you ever done V?)

Important: This pattern is about whether you have the EXPERIENCE, not about a specific past event. For a specific event, just use the past tense normally.`,
      examples: [
        { jp: "富士山に 登ったことが あります。", rm: "fujisan ni nobotta koto ga arimasu.", fr: "I have climbed Mt. Fuji (before)." },
        { jp: "納豆を 食べたことが ありますか。", rm: "nattou wo tabeta koto ga arimasu ka.", fr: "Have you ever eaten natto?" },
        { jp: "いいえ、一度も 食べたことが ありません。", rm: "iie, ichido mo tabeta koto ga arimasen.", fr: "No, I have never eaten it (not even once)." }
      ]
    },
    {
      title: "V₁-たり V₂-たり します (do things like V₁ and V₂)",
      explanation: `This pattern lists representative activities from a larger set. It implies "I do things like V₁ and V₂ (among other things)." It is commonly used to describe what you did on a holiday or in your free time.

Structure: V₁-たり V₂-たり します
  (Past tense: V₁-たり V₂-たり しました)

Formation: Use the た-form and add り.
  食べた → 食べたり
  飲んだ → 飲んだり
  見た → 見たり

The final します carries the tense of the whole sentence.`,
      examples: [
        { jp: "日曜日は 本を 読んだり、映画を 見たり します。", rm: "nichiyoubi wa hon wo yondari, eiga wo mitari shimasu.", fr: "On Sundays I do things like read books and watch movies." },
        { jp: "週末は 買い物したり、友達に 会ったり しました。", rm: "shuumatsu wa kaimono shitari, tomodachi ni attari shimashita.", fr: "On the weekend I did things like shopping and meeting friends." },
        { jp: "休みの 日は 掃除したり、洗濯したり します。", rm: "yasumi no hi wa souji shitari, sentaku shitari shimasu.", fr: "On my days off I do things like cleaning and laundry." }
      ]
    },
    {
      title: "V-た + あとで (after doing V)",
      explanation: `This pattern expresses doing something after completing another action. The first verb is in た-form because the action is completed before the next one begins.

Structure: V-た + あとで、～ (after doing V, ...)
  Also: Nの + あとで (after N)

Compare with まえに (Lesson 18):
  食べる まえに = before eating (dictionary form + まえに)
  食べた あとで = after eating (た-form + あとで)`,
      examples: [
        { jp: "ごはんを 食べた あとで、コーヒーを 飲みます。", rm: "gohan wo tabeta ato de, koohii wo nomimasu.", fr: "After eating, I drink coffee." },
        { jp: "映画を 見た あとで、レストランへ 行きました。", rm: "eiga wo mita ato de, resutoran e ikimashita.", fr: "After watching the movie, we went to a restaurant." },
        { jp: "授業の あとで、図書館で 勉強します。", rm: "jugyou no ato de, toshokan de benkyou shimasu.", fr: "After class, I study at the library." }
      ]
    },
    {
      title: "もう V-ました / まだ V-ていません (already / not yet)",
      explanation: `もう means "already" and まだ means "not yet." These are used to ask and answer whether something has been completed.

Question: もう V-ましたか (Have you already done V?)
Answer (yes): はい、もう V-ました (Yes, I already did V.)
Answer (no): いいえ、まだ V-ていません (No, I haven't done V yet.)
  Or more casually: いいえ、まだです (No, not yet.)

Important: The negative answer uses ていません (not ませんでした), because the state of "not having done it" continues to the present.`,
      examples: [
        { jp: "もう 昼ごはんを 食べましたか。", rm: "mou hirugohan wo tabemashita ka.", fr: "Have you already eaten lunch?" },
        { jp: "はい、もう 食べました。", rm: "hai, mou tabemashita.", fr: "Yes, I already ate." },
        { jp: "いいえ、まだ 食べていません。", rm: "iie, mada tabete imasen.", fr: "No, I haven't eaten yet." }
      ]
    }
  ],
  keyPoints: [
    "The た-form is made by replacing て→た and で→だ in the て-form",
    "V-た ことが あります expresses life experience, not a specific past event",
    "一度も + ことが ありません = 'not even once' — for strong negation of experience",
    "V-たり V-たり します lists representative actions — it implies 'among other things'",
    "V-た あとで = after doing V (contrast with V-dictionary まえに = before doing V)",
    "まだ uses ていません (present state), NOT ませんでした (simple past negative)"
  ],
  examples: [
    {
      japanese: "すしを 食べたことが ありますか。",
      romaji: "sushi wo tabeta koto ga arimasu ka.",
      french: "Have you ever eaten sushi?",
      breakdown: "すし(sushi) を(object) 食べた(ate-plain past) こと(experience) が(subject) あります(exists) か(question)"
    },
    {
      japanese: "休みの 日は テニスを したり、本を 読んだり します。",
      romaji: "yasumi no hi wa tenisu wo shitari, hon wo yondari shimasu.",
      french: "On my days off, I do things like play tennis and read books.",
      breakdown: "休みの日(day off) は(topic) テニスをしたり(play tennis-tari) 本を読んだり(read books-tari) します(do)"
    },
    {
      japanese: "シャワーを 浴びた あとで、寝ます。",
      romaji: "shawaa wo abita ato de, nemasu.",
      french: "After taking a shower, I go to bed.",
      breakdown: "シャワー(shower) を(object) 浴びた(took-plain past) あとで(after) 寝ます(sleep-polite)"
    }
  ],
  exercises: [
    {
      question: "Convert to た-form: のみます",
      answer: "のんだ",
      explanation: "のみます → のんで (て-form) → のんだ (た-form). む verbs: んで → んだ."
    },
    {
      question: "Translate: 'Have you ever been to Kyoto?' (Kyoto = 京都, to go = 行く)",
      answer: "京都に 行ったことが ありますか。",
      explanation: "行く → 行った (た-form). 行ったことが ありますか = Have you ever gone (to)...?"
    },
    {
      question: "Fill in the blanks: 週末は 音楽を 聞い＿＿、散歩し＿＿ しました。",
      answer: "たり、たり",
      hint: "The pattern is V-たり V-たり します.",
      explanation: "聞いたり、散歩したり しました = I did things like listening to music and taking walks."
    },
    {
      question: "Choose the correct answer: もう 宿題を しましたか。— いいえ、まだ ＿＿＿。 (a) しませんでした (b) していません",
      answer: "(b) していません",
      explanation: "When answering 'not yet,' use まだ V-ていません (the state of not having done it continues). しませんでした would mean 'I did not do it' (completed past negative)."
    },
    {
      question: "Translate: 'After eating dinner, I watched TV.' (dinner = 晩ごはん, to watch = 見る, TV = テレビ)",
      answer: "晩ごはんを 食べた あとで、テレビを 見ました。",
      explanation: "食べた(ate-た form) あとで(after) = after eating. The main verb 見ました is past tense because the whole event is in the past."
    }
  ]
},
{
  id: 20,
  title: "Lesson 20: 夏休みは どこか 行った？",
  level: "Intermediate",
  content: `Lesson 20 is a turning point in your Japanese studies. Until now, you have been using polite (ます/です) forms almost exclusively. In this lesson, you learn the plain/casual form system for ALL tenses and use it in real casual conversation.

Japanese has two main speech levels:
- POLITE (丁寧語 teineigo): ます/です forms — used with strangers, superiors, in formal settings
- CASUAL/PLAIN (普通形 futsūkei): dictionary form, た-form, etc. — used with friends, family, close colleagues

The plain form is not just "rude" Japanese — it is how native speakers talk with people they are close to. Understanding it is essential for:
1. Casual conversation with friends
2. Embedded clauses in polite sentences (Lessons 21-25)
3. Reading manga, watching anime, understanding song lyrics
4. Internal thoughts and diary writing

This lesson covers the full plain form chart for verbs, adjectives, and nouns, plus casual speech patterns including sentence-final particles.`,
  grammarPoints: [
    {
      title: "Plain Form Chart — Verbs",
      explanation: `Every verb has four plain forms:

                    Affirmative          Negative
Present/Future:    dictionary form      ない-form
                   食べる (eat)          食べない (don't eat)
                   行く (go)             行かない (don't go)
                   する (do)             しない (don't do)
                   くる (come)           こない (don't come)

Past:              た-form               なかった
                   食べた (ate)           食べなかった (didn't eat)
                   行った (went)          行かなかった (didn't go)
                   した (did)             しなかった (didn't do)
                   きた (came)            こなかった (didn't come)

The ない-form for Group 1 verbs: change the final -u to -a and add ない.
  かく → かかない (don't write)
  のむ → のまない (don't drink)
  はなす → はなさない (don't speak)
  Special: ある → ない (NOT あらない!)

For Group 2: remove る, add ない.
  たべる → たべない
  みる → みない`,
      examples: [
        { jp: "明日 学校に 行かない。", rm: "ashita gakkou ni ikanai.", fr: "I'm not going to school tomorrow. (casual)" },
        { jp: "昨日 何も 食べなかった。", rm: "kinou nanimo tabenakatta.", fr: "I didn't eat anything yesterday. (casual)" },
        { jp: "その映画、もう 見た？", rm: "sono eiga, mou mita?", fr: "Did you already watch that movie? (casual)" }
      ]
    },
    {
      title: "Plain Form Chart — い-Adjectives",
      explanation: `い-adjectives have their own plain forms:

                    Affirmative            Negative
Present:           おいしい (delicious)     おいしくない (not delicious)
Past:              おいしかった (was delicious) おいしくなかった (was not delicious)

Note: いい (good) is irregular:
  Present: いい / よくない
  Past: よかった / よくなかった

In casual speech you simply drop です:
  Polite: おいしいです → Casual: おいしい
  Polite: おいしくないです → Casual: おいしくない`,
      examples: [
        { jp: "この ラーメン、おいしい！", rm: "kono raamen, oishii!", fr: "This ramen is delicious! (casual)" },
        { jp: "昨日は あまり 寒くなかった。", rm: "kinou wa amari samukunakatta.", fr: "Yesterday wasn't very cold. (casual)" },
        { jp: "テスト、よかった？", rm: "tesuto, yokatta?", fr: "Was the test good? (casual)" }
      ]
    },
    {
      title: "Plain Form Chart — な-Adjectives and Nouns",
      explanation: `な-adjectives and nouns follow the same plain form pattern:

                    Affirmative            Negative
Present:           しずかだ (quiet)         しずかじゃない (not quiet)
                   学生だ (is a student)     学生じゃない (is not a student)
Past:              しずかだった (was quiet)  しずかじゃなかった (wasn't quiet)
                   学生だった (was a student) 学生じゃなかった (wasn't a student)

Important: In casual conversation, the だ is often dropped in statements, especially by women:
  きれいだ → きれい (It's pretty)
  学生だ → 学生 (I'm a student)
But だ is kept in embedded clauses (Lesson 21+).`,
      examples: [
        { jp: "この 部屋、静かだね。", rm: "kono heya, shizuka da ne.", fr: "This room is quiet, isn't it. (casual)" },
        { jp: "あの 人は 有名じゃない。", rm: "ano hito wa yuumei ja nai.", fr: "That person isn't famous. (casual)" },
        { jp: "昨日は 暇だった。", rm: "kinou wa hima datta.", fr: "I was free yesterday. (casual)" }
      ]
    },
    {
      title: "Sentence-final Particles ね and よ",
      explanation: `In casual speech, particles at the end of sentences add nuance and feeling:

ね (ne): Seeks agreement or confirmation. Like "right?", "isn't it?", "don't you think?"
  いい天気だね = Nice weather, isn't it?

よ (yo): Asserts new information or emphasis. Like "you know!", "I'm telling you!"
  この店、おいしいよ = This restaurant is good, you know!

よね (yo ne): Combines both — "It's X, right?" (stronger seeking of agreement)
  明日は テストだよね = Tomorrow is the test, right?

These particles are used in both polite and casual speech, but are especially common in casual conversation.`,
      examples: [
        { jp: "この 映画、おもしろいね。", rm: "kono eiga, omoshiroi ne.", fr: "This movie is interesting, isn't it." },
        { jp: "明日 パーティーが あるよ。", rm: "ashita paatii ga aru yo.", fr: "There's a party tomorrow, you know." },
        { jp: "あの レストラン、高いよね。", rm: "ano resutoran, takai yo ne.", fr: "That restaurant is expensive, right?" }
      ]
    },
    {
      title: "～んですか / ～んです (seeking/giving explanation)",
      explanation: `～んです (polite: ～んですか) is used when you want an explanation for something you've noticed, or when you are providing background context/explanation.

Structure: Plain form + んです (んですか for questions)
  Verb: 行くんです / 行くんですか
  い-adj: おいしいんです / おいしいんですか
  な-adj: 静かなんです (な, not だ!)
  Noun: 学生なんです (な, not だ!)

When to use it:
- You see someone with a suitcase → どこかに 行くんですか (Are you going somewhere? — I noticed and want to know)
- Explaining a reason → 頭が 痛いんです (It's that I have a headache — explaining why you look unwell)

This is one of the most-used conversational patterns in Japanese.`,
      examples: [
        { jp: "どうしたんですか。", rm: "doushita n desu ka.", fr: "What happened? / What's wrong? (seeking explanation)" },
        { jp: "明日 試験が あるんです。", rm: "ashita shiken ga aru n desu.", fr: "It's that I have an exam tomorrow. (explaining)" },
        { jp: "すみません、ちょっと 分からないんですが…", rm: "sumimasen, chotto wakaranai n desu ga...", fr: "Excuse me, it's that I don't quite understand... (polite explanation)" }
      ]
    }
  ],
  keyPoints: [
    "Japanese has two speech levels: polite (ます/です) and plain/casual — both are essential",
    "Plain form negative for verbs: change -u to -a + ない (Group 1), remove る + ない (Group 2)",
    "The special verb ある becomes ない in plain negative (NOT あらない)",
    "ね seeks agreement, よ asserts information — both add natural flavor to conversation",
    "～んです is used when there is a visible reason or context that prompts explanation"
  ],
  examples: [
    {
      japanese: "夏休みは どこか 行った？",
      romaji: "natsuyasumi wa dokoka itta?",
      french: "Did you go anywhere for summer vacation?",
      breakdown: "夏休み(summer vacation) は(topic) どこか(somewhere) 行った(went-plain past)？(casual question — no か needed)"
    },
    {
      japanese: "ううん、どこも 行かなかった。",
      romaji: "uun, dokomo ikanakatta.",
      french: "Nah, I didn't go anywhere.",
      breakdown: "ううん(casual no) どこも(anywhere-with negative) 行かなかった(didn't go-plain past negative)"
    },
    {
      japanese: "今日は 早く 帰るんです。子供が 熱が あるんです。",
      romaji: "kyou wa hayaku kaeru n desu. kodomo ga netsu ga aru n desu.",
      french: "I'm going home early today. My child has a fever. (explaining)",
      breakdown: "今日は(today) 早く(early) 帰る(return-plain) んです(explanation). 子供が(child) 熱が(fever) あるんです(has-explanation)"
    }
  ],
  exercises: [
    {
      question: "Convert to plain negative present: 飲みます",
      answer: "飲まない",
      explanation: "飲みます (Group 1: のむ). Change む(-u) to ま(-a) + ない = 飲まない (don't drink)."
    },
    {
      question: "Convert to plain past negative: 高いです",
      answer: "高くなかった",
      explanation: "い-adjective: 高い → 高くない (negative) → 高くなかった (past negative). Remove い, add くなかった."
    },
    {
      question: "Your friend looks tired. Ask 'What's wrong?' using ～んですか.",
      answer: "どうしたんですか。",
      hint: "どうした means 'what happened' in plain form.",
      explanation: "どうした(what happened-plain past) + んですか(seeking explanation) = 'What's wrong?' You noticed something and are seeking an explanation."
    },
    {
      question: "Fill in the particle: この ケーキ、おいしい＿＿。(This cake is delicious, isn't it.)",
      answer: "ね",
      explanation: "ね is used to seek agreement or share a feeling. 'This cake is delicious, right?'"
    },
    {
      question: "Convert this polite sentence to casual: 昨日 映画を 見ましたか。",
      answer: "昨日 映画 見た？",
      explanation: "見ました → 見た (plain past). か → ? (rising intonation). を is often dropped in casual speech."
    }
  ]
},
{
  id: 21,
  title: "Lesson 21: わたしも そう 思います",
  level: "Intermediate",
  content: `Lesson 21 teaches you how to express opinions, report what others have said, and make educated guesses. These patterns all require the plain form inside the sentence, even when the overall sentence is polite. This is a critical concept: plain forms are not just for casual speech — they are also used inside polite sentences as "embedded clauses."

Key patterns in this lesson:
1. Plain form + と思います — "I think that..."
2. Plain form + と言いました — "X said that..."
3. ～でしょう？ — "Probably..." / "Isn't it?"
4. Embedded clauses as subjects and objects

From this lesson onward, mastering the plain form becomes essential for expressing complex thoughts even in polite Japanese.`,
  grammarPoints: [
    {
      title: "Plain form + と思います (I think that...)",
      explanation: `This pattern expresses your opinion or belief. The clause before と must be in plain form, even in a polite sentence.

Structure: [plain form sentence] + と思います (I think that...)
  Negative: [plain form] + と思いません (I don't think that...)
  Or more natural: [plain negative form] + と思います

Important rules:
- Verb: 行くと思います (I think he'll go)
- い-adj: おいしいと思います (I think it's delicious)
- な-adj: 静かだと思います (I think it's quiet) — use だ before と
- Noun: 学生だと思います (I think he's a student) — use だ before と

For your own definite intentions, use つもり or plans instead. と思います is better for opinions, guesses, or uncertain plans.`,
      examples: [
        { jp: "明日は 雨が 降ると 思います。", rm: "ashita wa ame ga furu to omoimasu.", fr: "I think it will rain tomorrow." },
        { jp: "この 問題は 難しいと 思います。", rm: "kono mondai wa muzukashii to omoimasu.", fr: "I think this problem is difficult." },
        { jp: "田中さんは 来ないと 思います。", rm: "Tanaka-san wa konai to omoimasu.", fr: "I think Mr. Tanaka won't come." }
      ]
    },
    {
      title: "Plain form + と言いました (X said that...)",
      explanation: `This pattern reports what someone said. Like と思います, the clause before と must be in plain form.

Structure: [person]は [plain form sentence] と言いました (X said that...)

For direct quotes, you can also use the exact words:
  田中さんは「明日 行きます」と 言いました。(Mr. Tanaka said "I'll go tomorrow.")

For indirect quotes (reporting the meaning):
  田中さんは 明日 行くと 言いました。(Mr. Tanaka said he'll go tomorrow.)

Related expression: と言っていました means "was saying" / "said" (with nuance that the information is still relevant).`,
      examples: [
        { jp: "先生は テストは 月曜日だと 言いました。", rm: "sensei wa tesuto wa getsuyoubi da to iimashita.", fr: "The teacher said the test is on Monday." },
        { jp: "ミラーさんは パーティーに 行かないと 言いました。", rm: "Miraa-san wa paatii ni ikanai to iimashita.", fr: "Mr. Miller said he won't go to the party." },
        { jp: "天気予報は 明日 晴れると 言っていました。", rm: "tenki yohou wa ashita hareru to itte imashita.", fr: "The weather forecast said it will be sunny tomorrow." }
      ]
    },
    {
      title: "～でしょう？ (probably / isn't it?)",
      explanation: `でしょう has two main uses:

1. Conjecture/probability (falling intonation): "probably," "I expect"
  明日は いい 天気でしょう。= It will probably be nice weather tomorrow.

2. Seeking confirmation (rising intonation): "isn't it?", "right?"
  あの 映画、おもしろかったでしょう？ = That movie was interesting, wasn't it?

Structure: Plain form + でしょう
  BUT: for な-adjectives and nouns in present affirmative, drop だ:
    静か + でしょう (NOT 静かだでしょう)
    学生 + でしょう (NOT 学生だでしょう)

The casual equivalent is ～だろう (used mostly by men) or ～でしょ.`,
      examples: [
        { jp: "明日は 寒いでしょう。", rm: "ashita wa samui deshou.", fr: "It will probably be cold tomorrow." },
        { jp: "この 料理、おいしいでしょう？", rm: "kono ryouri, oishii deshou?", fr: "This food is delicious, isn't it?" },
        { jp: "山田さんは もう 帰ったでしょう。", rm: "Yamada-san wa mou kaetta deshou.", fr: "Mr. Yamada has probably already gone home." }
      ]
    },
    {
      title: "Embedded Clauses with と",
      explanation: `The quotation particle と allows you to embed entire sentences as objects of verbs like 思う (think), 言う (say), 知っている (know), 聞く (hear/ask), 考える (consider), and others.

This is one of the most powerful grammar structures in Japanese: any complete sentence in plain form can be placed before と and become the object of another verb.

Structure: [plain form sentence] と [verb of thinking/saying/knowing]

Common verbs used with と:
  と思います (I think...)
  と言いました (said that...)
  と聞きました (I heard that...)
  と知っています (I know that...)
  と考えています (I am considering that...)`,
      examples: [
        { jp: "日本は 安全だと 聞きました。", rm: "nihon wa anzen da to kikimashita.", fr: "I heard that Japan is safe." },
        { jp: "あの 店は おいしいと 知っています。", rm: "ano mise wa oishii to shitte imasu.", fr: "I know that that restaurant is good." },
        { jp: "来年 日本に 行こうと 考えています。", rm: "rainen nihon ni ikou to kangaete imasu.", fr: "I'm thinking of going to Japan next year." }
      ]
    }
  ],
  keyPoints: [
    "Plain form is used INSIDE polite sentences before と思います, と言いました, etc.",
    "For な-adjectives and nouns before と思います, add だ: 学生だと思います",
    "For な-adjectives and nouns before でしょう, drop だ: 学生でしょう",
    "と言いました reports what someone said — use plain form for indirect speech",
    "でしょう with falling intonation = probably; with rising intonation = seeking confirmation"
  ],
  examples: [
    {
      japanese: "わたしも そう 思います。",
      romaji: "watashi mo sou omoimasu.",
      french: "I think so too.",
      breakdown: "わたし(I) も(also) そう(so/that way) 思います(think-polite)"
    },
    {
      japanese: "日本語は 難しいと 思いますが、おもしろいです。",
      romaji: "nihongo wa muzukashii to omoimasu ga, omoshiroi desu.",
      french: "I think Japanese is difficult, but it's interesting.",
      breakdown: "日本語は(Japanese) 難しい(difficult-plain) と(quotation) 思います(think) が(but) おもしろいです(interesting)"
    },
    {
      japanese: "部長は 会議は 3時からだと 言いました。",
      romaji: "buchou wa kaigi wa sanji kara da to iimashita.",
      french: "The department manager said the meeting is from 3 o'clock.",
      breakdown: "部長は(manager) 会議は(meeting) 3時から(from 3) だ(is-plain) と(quotation) 言いました(said)"
    }
  ],
  exercises: [
    {
      question: "Express your opinion: 'I think this book is interesting.' (this book = この本, interesting = おもしろい)",
      answer: "この本は おもしろいと 思います。",
      explanation: "おもしろい is an い-adjective, so use it directly before と思います. No だ needed for い-adjectives."
    },
    {
      question: "Report: 'Ms. Suzuki said she will come at 10 o'clock.' (Suzuki = 鈴木さん, to come = 来る, 10 o'clock = 10時に)",
      answer: "鈴木さんは 10時に 来ると 言いました。",
      explanation: "来る(come-plain present) + と言いました(said). The embedded clause uses plain form."
    },
    {
      question: "Choose correct form: あの レストランは ＿＿＿でしょう？ (a) 有名だ (b) 有名 — meaning 'That restaurant is famous, right?'",
      answer: "(b) 有名",
      explanation: "Before でしょう, な-adjectives and nouns drop だ. So 有名でしょう, NOT 有名だでしょう."
    },
    {
      question: "Translate: 'I heard that Mt. Fuji is beautiful.' (Mt. Fuji = 富士山, beautiful = きれい)",
      answer: "富士山は きれいだと 聞きました。",
      hint: "きれい is a な-adjective. Before と, な-adjectives need だ.",
      explanation: "きれい is a な-adjective, so add だ before と: きれいだと 聞きました."
    },
    {
      question: "Say 'It will probably snow tomorrow.' (to snow = 雪が 降る, tomorrow = 明日)",
      answer: "明日は 雪が 降るでしょう。",
      explanation: "降る(fall-plain present) + でしょう(probably). The plain form verb goes directly before でしょう."
    }
  ]
},
{
  id: 22,
  title: "Lesson 22: これは 息子が くれた セーターです",
  level: "Intermediate",
  content: `Lesson 22 introduces one of the most powerful and commonly used grammar structures in Japanese: noun modification using plain form clauses, also known as relative clauses. In English, these use words like "who," "which," "that" — for example, "the book THAT I bought" or "the person WHO came yesterday."

In Japanese, there are no relative pronouns. Instead, the modifying clause (in plain form) is placed directly BEFORE the noun it modifies. This is the opposite of English word order.

English: The movie [that I watched yesterday]
Japanese: [きのう 見た] 映画

This lesson also introduces the important ～とき pattern (when / at the time of), which uses a similar noun-modifying structure.

Understanding noun modification will dramatically expand your ability to form complex, natural sentences.`,
  grammarPoints: [
    {
      title: "Noun Modification with Verbs (Relative Clauses)",
      explanation: `In Japanese, to describe a noun with a verb clause, place the plain form verb clause directly before the noun. No relative pronoun (who, which, that) is needed.

Structure: [plain form clause] + Noun

Examples of how English relative clauses become Japanese:
  "the book that I bought" → わたしが 買った 本
  "the person who came" → 来た 人
  "the movie that I will watch" → 見る 映画
  "food that I don't eat" → 食べない 食べ物

The verb tense in the modifying clause is independent of the main sentence's tense:
  きのう 買った 本は おもしろいです。= The book I bought yesterday is interesting.
  (買った is past because the buying happened in the past, but おもしろいです is present.)`,
      examples: [
        { jp: "これは 母が 作った ケーキです。", rm: "kore wa haha ga tsukutta keeki desu.", fr: "This is a cake my mother made." },
        { jp: "きのう 会った 人は 田中さんです。", rm: "kinou atta hito wa Tanaka-san desu.", fr: "The person I met yesterday is Mr. Tanaka." },
        { jp: "わたしが 住んでいる 町は 静かです。", rm: "watashi ga sunde iru machi wa shizuka desu.", fr: "The town where I live is quiet." }
      ]
    },
    {
      title: "Noun Modification with い-Adjectives",
      explanation: `い-adjectives modify nouns directly (you already know this from basic grammar), but in this lesson we see how they work in the same noun-modification framework:

Present: おいしい 料理 (delicious food)
Negative: おいしくない 料理 (food that isn't delicious)
Past: おいしかった 料理 (food that was delicious)
Past negative: おいしくなかった 料理 (food that wasn't delicious)

The adjective stays in plain form before the noun.`,
      examples: [
        { jp: "安い 店を 知っていますか。", rm: "yasui mise wo shitte imasu ka.", fr: "Do you know a cheap shop?" },
        { jp: "おもしろくなかった 映画の 名前を 忘れました。", rm: "omoshirokunakatta eiga no namae wo wasuremashita.", fr: "I forgot the name of the movie that wasn't interesting." },
        { jp: "背が 高い 人が 山田さんです。", rm: "se ga takai hito ga Yamada-san desu.", fr: "The tall person is Mr. Yamada." }
      ]
    },
    {
      title: "Noun Modification with な-Adjectives and Nouns",
      explanation: `For な-adjectives and nouns used as modifiers:

な-adjective:
  Present: 静かな 部屋 (a quiet room) — use な, not だ
  Past: 静かだった 部屋 (the room that was quiet)
  Negative: 静かじゃない 部屋 (a room that is not quiet)

Noun:
  Present: 日本語の 本 (a Japanese book) — use の
  When using a noun as a modifying clause with a copula:
  学生だった 時 (when I was a student) — use だった for past`,
      examples: [
        { jp: "有名な 歌手が この 町に 来ました。", rm: "yuumei na kashu ga kono machi ni kimashita.", fr: "A famous singer came to this town." },
        { jp: "きれいだった 花が 枯れてしまいました。", rm: "kirei datta hana ga karete shimaimashita.", fr: "The flowers that were beautiful have wilted." },
        { jp: "静かな レストランを 探しています。", rm: "shizuka na resutoran wo sagashite imasu.", fr: "I'm looking for a quiet restaurant." }
      ]
    },
    {
      title: "～とき (when / at the time of)",
      explanation: `とき means "when" or "at the time of." It uses the same noun-modification structure: the clause before とき is in plain form.

Structure:
  V-plain + とき (when I do V / when I did V)
  い-adj + とき (when it is/was adj)
  な-adj + な + とき (when it is na-adj)
  N + の + とき (when/at the time of N)

Important tense note for verbs:
  V-dictionary + とき = when you are about to do V (before the action)
  V-た + とき = when you have done V (after the action)

  日本に 行く とき、パスポートを 持っていきます。
  = When going to Japan (before arriving), I take my passport.

  日本に 行った とき、富士山を 見ました。
  = When I went to Japan (while there/after arriving), I saw Mt. Fuji.

This tense distinction is explored further in Lesson 23.`,
      examples: [
        { jp: "暇な とき、何を しますか。", rm: "hima na toki, nani wo shimasu ka.", fr: "What do you do when you're free?" },
        { jp: "子供の とき、よく 公園で 遊びました。", rm: "kodomo no toki, yoku kouen de asobimashita.", fr: "When I was a child, I often played in the park." },
        { jp: "分からない とき、先生に 聞きます。", rm: "wakaranai toki, sensei ni kikimasu.", fr: "When I don't understand, I ask the teacher." }
      ]
    }
  ],
  keyPoints: [
    "In Japanese, modifying clauses come BEFORE the noun — opposite of English relative clauses",
    "No relative pronoun (who, which, that) is needed — just place the plain form clause before the noun",
    "The subject inside a relative clause is marked with が, not は: 母が 作った ケーキ",
    "な-adjectives use な (not だ) before nouns: 静かな 部屋",
    "とき (when) follows the same noun-modification pattern and the tense of the verb before とき matters"
  ],
  examples: [
    {
      japanese: "これは 息子が くれた セーターです。",
      romaji: "kore wa musuko ga kureta seetaa desu.",
      french: "This is a sweater my son gave me.",
      breakdown: "これは(this) 息子が(son-subject) くれた(gave me-plain past) セーター(sweater) です(is)"
    },
    {
      japanese: "きのう 買った 本を もう 読みました。",
      romaji: "kinou katta hon wo mou yomimashita.",
      french: "I already read the book I bought yesterday.",
      breakdown: "きのう(yesterday) 買った(bought-plain past) 本(book) を(object) もう(already) 読みました(read-polite past)"
    },
    {
      japanese: "若い とき、たくさん 旅行しました。",
      romaji: "wakai toki, takusan ryokou shimashita.",
      french: "When I was young, I traveled a lot.",
      breakdown: "若い(young-plain) とき(when) たくさん(a lot) 旅行しました(traveled-polite past)"
    }
  ],
  exercises: [
    {
      question: "Translate: 'The person who teaches Japanese is Mr. Yamada.' (to teach = 教える, Japanese = 日本語)",
      answer: "日本語を 教えている 人は 山田さんです。",
      explanation: "教えている(is teaching-plain) 人(person) = the person who teaches. The modifying clause comes before the noun."
    },
    {
      question: "Combine: わたしは 昨日 映画を 見ました + その映画は おもしろかったです → 'The movie I watched yesterday was interesting.'",
      answer: "昨日 見た 映画は おもしろかったです。",
      explanation: "昨日 見た(watched yesterday-plain past) 映画(movie) = the movie I watched yesterday. Place the clause before the noun."
    },
    {
      question: "Fill in: ＿＿＿ とき、辞書を 使います。(When I don't understand, I use a dictionary.)",
      answer: "分からない",
      hint: "Use the plain negative form of 分かる.",
      explanation: "分からない(don't understand-plain negative) とき(when) = when I don't understand."
    },
    {
      question: "Choose the correct form: これは 友達が ＿＿＿ 写真です。(This is a photo my friend took.) (a) 撮りました (b) 撮った",
      answer: "(b) 撮った",
      explanation: "Inside a noun-modifying clause, use plain form (撮った), not polite form (撮りました)."
    },
    {
      question: "Translate: 'I'm looking for a quiet place.' (quiet = 静か, place = 場所, to look for = 探す)",
      answer: "静かな 場所を 探しています。",
      explanation: "静か is a な-adjective, so use 静かな before the noun 場所. な-adjectives use な (not だ) when modifying a noun."
    }
  ]
},
{
  id: 23,
  title: "Lesson 23: 図書館で 本を 借りるとき、カードが いります",
  level: "Intermediate",
  content: `Lesson 23 dives deeper into conditional and temporal expressions. You have already seen とき (when) briefly in Lesson 22. Now you will learn its full usage with careful attention to how the tense of the verb before とき changes the meaning.

This lesson also introduces two new conditional forms:
1. V-dictionary + と — "when/whenever" (natural, automatic consequences)
2. V-た + ら — "if/when" (more specific conditions)

These three patterns (とき, と, たら) each express "when" or "if" but with different nuances. Understanding the differences will make your Japanese much more precise and natural.`,
  grammarPoints: [
    {
      title: "V-dictionary とき vs V-た とき (when — tense matters!)",
      explanation: `The tense of the verb before とき is crucial:

V-dictionary + とき = BEFORE the action is completed / on the way to doing it
V-た + とき = AFTER the action is completed / having done it

Compare these carefully:
  会社に 行く とき、コンビニに 寄ります。
  = When going to the office (on my way there, before arriving), I stop by a convenience store.

  会社に 行った とき、部長に 会いました。
  = When I went to the office (after arriving there), I met the department head.

Another example:
  日本に 来る とき、パスポートを なくしました。
  = When coming to Japan (on the way, before arriving), I lost my passport.

  日本に 来た とき、とても 寒かったです。
  = When I came to Japan (after arriving), it was very cold.

With adjectives and nouns, とき works as follows:
  暇な とき = when free (な-adj + な + とき)
  寂しい とき = when lonely (い-adj + とき)
  学生の とき = when I was a student (N + の + とき)`,
      examples: [
        { jp: "図書館で 本を 借りる とき、カードが いります。", rm: "toshokan de hon wo kariru toki, kaado ga irimasu.", fr: "When borrowing books at the library, you need a card." },
        { jp: "国に 帰った とき、家族に お土産を あげました。", rm: "kuni ni kaetta toki, kazoku ni omiyage wo agemashita.", fr: "When I returned to my country (after returning), I gave souvenirs to my family." },
        { jp: "寂しい とき、友達に 電話します。", rm: "sabishii toki, tomodachi ni denwa shimasu.", fr: "When I feel lonely, I call my friends." }
      ]
    },
    {
      title: "V-dictionary + と (when/whenever — natural consequence)",
      explanation: `The と conditional expresses natural, automatic, or habitual consequences. When A happens, B always/naturally follows. Think of it as "whenever A, then B naturally occurs."

Structure: [plain present form] + と、[result]

Uses:
1. Natural/scientific facts: 春に なると、花が 咲きます。(When spring comes, flowers bloom.)
2. Habitual actions: このボタンを 押すと、ドアが 開きます。(When you press this button, the door opens.)
3. Giving directions: まっすぐ 行くと、駅が あります。(If you go straight, there is a station.)

Important restrictions:
- Do NOT use と for requests, commands, invitations, or your own will/desire
  ✗ 暇だと、遊びに 来てください (wrong — can't use と with requests)
  ○ 暇だったら、遊びに 来てください (correct — use たら for requests)

- The verb before と is ALWAYS in present plain form (never past).`,
      examples: [
        { jp: "春に なると、桜が 咲きます。", rm: "haru ni naru to, sakura ga sakimasu.", fr: "When spring comes, cherry blossoms bloom." },
        { jp: "このボタンを 押すと、電気が つきます。", rm: "kono botan wo osu to, denki ga tsukimasu.", fr: "When you press this button, the light turns on." },
        { jp: "右に 曲がると、銀行が あります。", rm: "migi ni magaru to, ginkou ga arimasu.", fr: "If you turn right, there's a bank." }
      ]
    },
    {
      title: "～たら Conditional (if/when — specific condition)",
      explanation: `The たら conditional is the most versatile conditional in Japanese. It can express both "if" and "when" and works with requests, invitations, and desires — unlike と.

Formation: た-form + ら
  食べた + ら → 食べたら (if/when I eat)
  行った + ら → 行ったら (if/when I go)
  高かった + ら → 高かったら (if it's expensive)
  静かだった + ら → 静かだったら (if it's quiet)
  学生だった + ら → 学生だったら (if I were a student)

Uses:
1. Specific conditions: 雨が 降ったら、出かけません。(If it rains, I won't go out.)
2. Requests: 分かったら、教えてください。(If you find out, please tell me.)
3. When (completed action): 駅に 着いたら、電話してください。(When you arrive at the station, please call me.)
4. Discovered situations: うちに 帰ったら、猫が いました。(When I got home, there was a cat.)

たら is the safest conditional to use when you are unsure which one to pick.`,
      examples: [
        { jp: "お金が あったら、旅行したいです。", rm: "okane ga attara, ryokou shitai desu.", fr: "If I had money, I'd want to travel." },
        { jp: "安かったら、買います。", rm: "yasukattara, kaimasu.", fr: "If it's cheap, I'll buy it." },
        { jp: "駅に 着いたら、電話してください。", rm: "eki ni tsuitara, denwa shite kudasai.", fr: "When you arrive at the station, please call me." }
      ]
    },
    {
      title: "Comparison: とき vs と vs たら",
      explanation: `Here is a summary to help you choose the right pattern:

とき (when/at the time of):
- Describes the time or situation when something happens
- Can use past or present form before とき
- Focus on the TIME of the event
  子供の とき、よく 泣きました。(When I was a child, I often cried.)

と (whenever/if — natural consequence):
- Automatic, habitual, natural results
- Cannot use for requests, commands, invitations, or volition
- Always present tense before と
  春に なると、暖かく なります。(When spring comes, it gets warm.)

たら (if/when — specific condition):
- The most versatile conditional
- Can use for anything: requests, invitations, desires, specific events
- Formed from た-form + ら
  明日 天気が よかったら、公園に 行きましょう。(If the weather is nice tomorrow, let's go to the park.)

When in doubt, たら is usually the safest choice!`,
      examples: [
        { jp: "暑い とき、エアコンを つけます。(at the time when it's hot)", rm: "atsui toki, eakon wo tsukemasu.", fr: "When it's hot, I turn on the AC. (describing the time)" },
        { jp: "暑いと、アイスが 食べたく なります。(whenever it's hot)", rm: "atsui to, aisu ga tabetaku narimasu.", fr: "Whenever it's hot, I feel like eating ice cream. (natural tendency)" },
        { jp: "暑かったら、窓を 開けてください。(if it's hot)", rm: "atsukattara, mado wo akete kudasai.", fr: "If it's hot, please open the window. (request)" }
      ]
    }
  ],
  keyPoints: [
    "V-dictionary とき = before/on the way to doing; V-た とき = after having done",
    "と conditional: natural/automatic consequences only — NEVER use with requests or commands",
    "たら conditional: the most versatile — works with requests, invitations, desires, and more",
    "When giving directions, use と: まっすぐ 行くと、右に あります",
    "When in doubt between conditionals, たら is the safest choice"
  ],
  examples: [
    {
      japanese: "図書館で 本を 借りる とき、カードが いります。",
      romaji: "toshokan de hon wo kariru toki, kaado ga irimasu.",
      french: "When borrowing books at the library, you need a card.",
      breakdown: "図書館で(at library) 本を(books) 借りる(borrow-dictionary) とき(when) カードが(card) いります(is needed)"
    },
    {
      japanese: "まっすぐ 行くと、左に コンビニが あります。",
      romaji: "massugu iku to, hidari ni konbini ga arimasu.",
      french: "If you go straight, there's a convenience store on the left.",
      breakdown: "まっすぐ(straight) 行く(go-dictionary) と(when/if-natural) 左に(on the left) コンビニが(convenience store) あります(exists)"
    },
    {
      japanese: "時間が あったら、映画を 見に 行きませんか。",
      romaji: "jikan ga attara, eiga wo mi ni ikimasen ka.",
      french: "If you have time, shall we go see a movie?",
      breakdown: "時間が(time) あったら(if there is-conditional) 映画を(movie) 見に(to see) 行きませんか(shall we go)"
    }
  ],
  exercises: [
    {
      question: "Choose the correct form: 日本に ＿＿＿ とき、カメラを 買いました。(When I went to Japan [after arriving], I bought a camera.) (a) 行く (b) 行った",
      answer: "(b) 行った",
      explanation: "行った とき = after arriving in Japan. The camera was bought while in Japan. 行く とき would mean 'on the way to Japan (before arriving).'"
    },
    {
      question: "Translate: 'When spring comes, it gets warm.' (spring = 春, warm = 暖かい, to become = なる)",
      answer: "春に なると、暖かく なります。",
      explanation: "This is a natural/automatic consequence (spring always leads to warmth), so use と. 暖かい → 暖かく(adverb form) + なります(becomes)."
    },
    {
      question: "Fill in: お金が ＿＿＿＿、新しい パソコンを 買いたいです。(If I have money, I want to buy a new computer.)",
      answer: "あったら",
      hint: "ある → あった (た-form) + ら = あったら",
      explanation: "たら is correct here because you are expressing a desire (買いたい). You cannot use と with desires/volition."
    },
    {
      question: "Which conditional is wrong? 暑い＿＿、窓を 開けてください。(a) と (b) たら",
      answer: "(a) と — this is wrong because you cannot use と with requests (～てください)",
      explanation: "と is for natural/automatic consequences. For requests, commands, and invitations, you must use たら: 暑かったら、窓を 開けてください。"
    },
    {
      question: "Translate: 'When I was a student, I studied every day.' (student = 学生, every day = 毎日)",
      answer: "学生の とき、毎日 勉強しました。",
      explanation: "Noun + の + とき: 学生の とき = when I was a student. The past meaning comes from the main verb しました."
    }
  ]
},
{
  id: 24,
  title: "Lesson 24: 手伝って くれませんか",
  level: "Intermediate",
  content: `Lesson 24 introduces one of the most uniquely Japanese grammar concepts: the giving and receiving verbs used with て-form. In Japanese, when someone does a favor for someone else, you use special verbs that indicate the direction of the favor and the speaker's perspective.

There are three key patterns:
1. V-て あげます — I/someone does something FOR someone (giving a favor outward)
2. V-て もらいます — I receive the favor of someone doing something FOR ME
3. V-て くれます — Someone kindly does something FOR ME (from the giver's perspective)

These patterns reflect a core aspect of Japanese culture: awareness of social relationships, gratitude, and the direction of kindness. Mastering them will make your Japanese sound much more natural and culturally appropriate.

First, let's review the basic giving/receiving verbs:
- あげます = to give (to someone else)
- もらいます = to receive (from someone)
- くれます = someone gives (to me/my in-group)`,
  grammarPoints: [
    {
      title: "V-て あげます (do something for someone — giving direction)",
      explanation: `This pattern means "I do V for someone" or "X does V for Y." The action flows FROM the doer TO the receiver, like giving a gift.

Structure: [person A]は [person B]に V-て あげます
  = A does V for B

Important cultural note: Using あげます about your own actions toward someone of equal or higher status can sound condescending ("I did this nice thing for you"). It is safer to use when:
- Talking about what you did for someone of lower status (children, pets)
- Describing what a third person did for another third person
- The listener specifically asks what you did

Instead of saying わたしが あげます directly, Japanese speakers often use the more humble くれます form or simply describe the action without あげます.`,
      examples: [
        { jp: "わたしは 弟に 日本語を 教えて あげました。", rm: "watashi wa otouto ni nihongo wo oshiete agemashita.", fr: "I taught Japanese to my younger brother (as a favor for him)." },
        { jp: "田中さんは おばあさんの 荷物を 持って あげました。", rm: "Tanaka-san wa obaasan no nimotsu wo motte agemashita.", fr: "Mr. Tanaka carried the old woman's luggage (for her)." },
        { jp: "友達に 空港まで 送って あげます。", rm: "tomodachi ni kuukou made okutte agemasu.", fr: "I'll take my friend to the airport (as a favor)." }
      ]
    },
    {
      title: "V-て もらいます (have someone do something for me — receiving a favor)",
      explanation: `This pattern means "I have/get someone to do V for me" or "I receive the favor of someone doing V." The focus is on the RECEIVER of the favor.

Structure: [receiver]は [doer]に V-て もらいます
  = The receiver has the doer do V for them

This is very useful for expressing that you received help or a favor. It sounds grateful and humble.

Note the particle: the person who does the action is marked with に (the source of the favor).`,
      examples: [
        { jp: "わたしは 友達に 空港まで 送って もらいました。", rm: "watashi wa tomodachi ni kuukou made okutte moraimashita.", fr: "I had my friend take me to the airport. / My friend kindly took me to the airport." },
        { jp: "先生に 作文を 直して もらいました。", rm: "sensei ni sakubun wo naoshite moraimashita.", fr: "I had the teacher correct my essay." },
        { jp: "父に 自転車を 修理して もらいました。", rm: "chichi ni jitensha wo shuuri shite moraimashita.", fr: "I had my father fix my bicycle." }
      ]
    },
    {
      title: "V-て くれます (someone kindly does something for me — giver's action, my gratitude)",
      explanation: `This pattern means "someone does V for me/my in-group." The focus is on the GIVER's kind action toward me. It expresses gratitude.

Structure: [doer]は (わたしに) V-て くれます
  = The doer does V for me

This is the pattern Japanese speakers use MOST OFTEN to describe favors they received. It highlights the other person's kindness.

くれませんか (won't you do V for me?) is a polite way to ask for a favor:
  手伝って くれませんか。= Won't you help me? (polite request)

Compare あげます/もらいます/くれます:
  田中さんは わたしに 本を 貸して くれました。(Tanaka kindly lent me a book — focus on Tanaka's kindness)
  わたしは 田中さんに 本を 貸して もらいました。(I had Tanaka lend me a book — focus on my receiving)
  Both describe the same event from different perspectives!`,
      examples: [
        { jp: "母は 毎日 お弁当を 作って くれます。", rm: "haha wa mainichi obentou wo tsukutte kuremasu.", fr: "My mother makes me a boxed lunch every day (how kind of her)." },
        { jp: "友達が 駅まで 迎えに 来て くれました。", rm: "tomodachi ga eki made mukae ni kite kuremashita.", fr: "My friend came to pick me up at the station." },
        { jp: "ちょっと 手伝って くれませんか。", rm: "chotto tetsudatte kuremasen ka.", fr: "Won't you help me a little? (polite request)" }
      ]
    },
    {
      title: "Comparing the Three Patterns",
      explanation: `All three patterns describe someone doing a favor, but from different perspectives:

1. Aさんは Bさんに V-て あげました
   = A did V for B (A is the subject, outward giving)
   田中さんは 山田さんに 道を 教えて あげました。
   = Tanaka told Yamada the way (for Yamada's benefit).

2. Bさんは Aさんに V-て もらいました
   = B had A do V / B received V from A (B is the subject, receiving)
   山田さんは 田中さんに 道を 教えて もらいました。
   = Yamada had Tanaka tell him the way.

3. Aさんは (Bさんに) V-て くれました
   = A did V for B/me (A is the subject, inward giving toward speaker)
   田中さんは 道を 教えて くれました。
   = Tanaka kindly told me the way.

Key insight: もらいます and くれます both describe receiving a favor, but:
  - もらいます: I am the subject, I received the favor
  - くれます: The other person is the subject, they gave me the favor`,
      examples: [
        { jp: "山田さんが 写真を 撮って くれました。", rm: "Yamada-san ga shashin wo totte kuremashita.", fr: "Mr. Yamada kindly took a photo (for me/us)." },
        { jp: "山田さんに 写真を 撮って もらいました。", rm: "Yamada-san ni shashin wo totte moraimashita.", fr: "I had Mr. Yamada take a photo (for me)." },
        { jp: "山田さんは 田中さんに 写真を 撮って あげました。", rm: "Yamada-san wa Tanaka-san ni shashin wo totte agemashita.", fr: "Mr. Yamada took a photo for Mr. Tanaka." }
      ]
    }
  ],
  keyPoints: [
    "あげます = doing a favor for someone (outward direction) — be careful, can sound condescending",
    "もらいます = receiving a favor from someone — I am the subject, sounds grateful and humble",
    "くれます = someone does a favor for me/my group — the giver is the subject, expresses gratitude",
    "V-て くれませんか is a polite way to ask someone for a favor",
    "もらいます and くれます describe the same event from different perspectives (receiver vs giver as subject)"
  ],
  examples: [
    {
      japanese: "手伝って くれませんか。",
      romaji: "tetsudatte kuremasen ka.",
      french: "Won't you help me? (polite request)",
      breakdown: "手伝って(help-te form) くれませんか(won't you do for me-polite question)"
    },
    {
      japanese: "母が セーターを 編んで くれました。",
      romaji: "haha ga seetaa wo ande kuremashita.",
      french: "My mother knitted a sweater for me.",
      breakdown: "母が(mother-subject) セーター(sweater) を(object) 編んで(knit-te) くれました(did for me-polite past)"
    },
    {
      japanese: "先輩に レポートを 見て もらいました。",
      romaji: "senpai ni repooto wo mite moraimashita.",
      french: "I had my senior look over my report.",
      breakdown: "先輩に(senior-source) レポートを(report) 見て(look at-te) もらいました(received the favor-polite past)"
    }
  ],
  exercises: [
    {
      question: "Translate: 'My friend taught me Japanese.' — Use くれました.",
      answer: "友達が 日本語を 教えて くれました。",
      explanation: "友達が(friend-subject) 日本語を(Japanese) 教えて(teach-te) くれました(did for me). The focus is on the friend's kindness."
    },
    {
      question: "Rewrite from もらいました perspective: 友達が 日本語を 教えて くれました。",
      answer: "友達に 日本語を 教えて もらいました。",
      explanation: "Same event, different perspective. With もらいました, I am the implied subject. 友達に = from my friend (source of favor, marked with に)."
    },
    {
      question: "Fill in: 子供に 絵本を 読んで ＿＿＿＿。(I read a picture book to/for the child.)",
      answer: "あげました",
      hint: "You are doing something for someone else (the child).",
      explanation: "あげます is used when YOU do a favor for someone else. Reading to a child is a favor given to the child."
    },
    {
      question: "Which is the most polite way to ask someone to help you carry your luggage? (a) 荷物を 持って あげます (b) 荷物を 持って くれませんか (c) 荷物を 持って もらいます",
      answer: "(b) 荷物を 持って くれませんか",
      explanation: "V-て くれませんか is a polite request form meaning 'Won't you kindly do V for me?' (a) means 'I'll carry it for you' and (c) is a statement, not a request."
    },
    {
      question: "Translate: 'I had the doctor examine me.' (doctor = 医者, to examine = 診る)",
      answer: "医者に 診て もらいました。",
      explanation: "医者に(doctor-source) 診て(examine-te) もらいました(received the favor). I received the favor of the doctor examining me."
    }
  ]
},
{
  id: 25,
  title: "Lesson 25: いい 天気だったら、散歩しませんか",
  level: "Intermediate",
  content: `Lesson 25 expands and deepens your understanding of the たら conditional (introduced in Lesson 23) and introduces the important ても pattern (even if / even though).

In Lesson 23, you learned the basics of たら. Now you will practice it with all word types (verbs, い-adjectives, な-adjectives, nouns) and learn to use it fluently in a variety of situations: invitations, suggestions, hypothetical conditions, and discovered situations.

The second major grammar point, ～ても (even if / even though), is the concessive conditional — it describes a situation where the expected result does NOT happen despite the condition being true. This is extremely common in everyday Japanese.

Together, these patterns give you powerful tools for expressing conditions, hypothetical situations, and unexpected outcomes.`,
  grammarPoints: [
    {
      title: "～たら Conditional — Full Formation for All Word Types",
      explanation: `The たら conditional is formed from the た-form (plain past) + ら. Here is how it works for every word type:

VERBS: た-form + ら
  食べた → 食べたら (if/when I eat)
  行った → 行ったら (if/when I go)
  した → したら (if/when I do)
  来た → きたら (if/when someone comes)

い-ADJECTIVES: remove い, add かったら
  安い → 安かったら (if it's cheap)
  おいしい → おいしかったら (if it's delicious)
  いい → よかったら (if it's good — irregular!)

な-ADJECTIVES: add だったら
  静か → 静かだったら (if it's quiet)
  暇 → 暇だったら (if free)

NOUNS: add だったら
  雨 → 雨だったら (if it's rain / if it rains)
  日曜日 → 日曜日だったら (if it's Sunday)

NEGATIVE FORMS: なかったら
  行かない → 行かなかったら (if I don't go)
  おいしくない → おいしくなかったら (if it's not delicious)
  静かじゃない → 静かじゃなかったら (if it's not quiet)`,
      examples: [
        { jp: "いい 天気だったら、散歩しませんか。", rm: "ii tenki dattara, sanpo shimasen ka.", fr: "If the weather is nice, shall we take a walk?" },
        { jp: "よかったら、いっしょに 食べませんか。", rm: "yokattara, issho ni tabemasen ka.", fr: "If you'd like (if it's okay), shall we eat together?" },
        { jp: "安かったら、買います。高かったら、買いません。", rm: "yasukattara, kaimasu. takakattara, kaimasen.", fr: "If it's cheap, I'll buy it. If it's expensive, I won't." }
      ]
    },
    {
      title: "たら for Discovered Situations (When I did X, I found...)",
      explanation: `A special use of たら is to describe something you discovered or that unexpectedly happened as a result of an action. In this use, たら means "when I did X, (I discovered/found that) Y."

Structure: V-たら、[unexpected discovery/result]

This is different from using たら as "if" — it describes what actually happened, not a hypothetical.

The result clause often contains:
  - いました/ありました (there was)
  - ～ていました (was doing)
  - an unexpected situation`,
      examples: [
        { jp: "うちに 帰ったら、友達が 来ていました。", rm: "uchi ni kaettara, tomodachi ga kite imashita.", fr: "When I got home, my friend had come (was there)." },
        { jp: "窓を 開けたら、きれいな 虹が 見えました。", rm: "mado wo aketara, kirei na niji ga miemashita.", fr: "When I opened the window, I could see a beautiful rainbow." },
        { jp: "薬を 飲んだら、すぐ 元気に なりました。", rm: "kusuri wo nondara, sugu genki ni narimashita.", fr: "When I took the medicine, I immediately felt better." }
      ]
    },
    {
      title: "～ても (even if / even though)",
      explanation: `～ても expresses "even if" or "even though" — the result is surprising or contrary to what you would expect from the condition.

Formation for VERBS: て-form + も
  食べても (even if I eat)
  行っても (even if I go)
  しても (even if I do)

Structure: V-ても、[surprising/unexpected result]

Compare:
  たら (if): 薬を 飲んだら、元気に なります。(If you take medicine, you'll get better.)
  ても (even if): 薬を 飲んでも、元気に なりません。(Even if you take medicine, you won't get better.)

ても states that the expected result does NOT occur despite the condition.`,
      examples: [
        { jp: "たくさん 食べても、太りません。", rm: "takusan tabetemo, futorimasen.", fr: "Even if I eat a lot, I don't gain weight." },
        { jp: "何回 説明しても、分かりません。", rm: "nankai setsumei shitemo, wakarimasen.", fr: "No matter how many times you explain, I don't understand." },
        { jp: "雨が 降っても、サッカーを します。", rm: "ame ga futtemo, sakkaa wo shimasu.", fr: "Even if it rains, I'll play soccer." }
      ]
    },
    {
      title: "い-adjective + くても (even if it is...)",
      explanation: `For い-adjectives, the ても form is made by replacing い with くても:

  高い → 高くても (even if it's expensive)
  おいしい → おいしくても (even if it's delicious)
  寒い → 寒くても (even if it's cold)
  いい → よくても (even if it's good — irregular!)

Negative: ～くなくても (even if it's not...)
  高くない → 高くなくても (even if it's not expensive)`,
      examples: [
        { jp: "高くても、買いたいです。", rm: "takakutemo, kaitai desu.", fr: "Even if it's expensive, I want to buy it." },
        { jp: "忙しくても、毎日 日本語を 勉強します。", rm: "isogashikutemo, mainichi nihongo wo benkyou shimasu.", fr: "Even if I'm busy, I study Japanese every day." },
        { jp: "おいしくなくても、全部 食べます。", rm: "oishikunakutemo, zenbu tabemasu.", fr: "Even if it's not delicious, I'll eat all of it." }
      ]
    },
    {
      title: "な-adjective / Noun + でも (even if it is...)",
      explanation: `For な-adjectives and nouns, ても becomes でも:

な-adjective:
  静か → 静かでも (even if it's quiet)
  好き → 好きでも (even if I like it)
  便利 → 便利でも (even if it's convenient)

Noun:
  雨 → 雨でも (even if it's rain / even if it rains)
  日曜日 → 日曜日でも (even if it's Sunday)
  子供 → 子供でも (even if they're a child)

Negative: ～じゃなくても (even if it's not...)
  静かじゃなくても (even if it's not quiet)

This is easy to remember: just add でも after the な-adjective or noun.`,
      examples: [
        { jp: "雨でも、試合は あります。", rm: "ame demo, shiai wa arimasu.", fr: "Even if it rains, the game will take place." },
        { jp: "静かでも、この 部屋は 好きじゃないです。", rm: "shizuka demo, kono heya wa suki ja nai desu.", fr: "Even if it's quiet, I don't like this room." },
        { jp: "子供でも、この 漢字は 読めます。", rm: "kodomo demo, kono kanji wa yomemasu.", fr: "Even a child can read this kanji." }
      ]
    }
  ],
  keyPoints: [
    "たら is formed from た-form + ら and works with all word types: verbs, adjectives, nouns",
    "よかったら is a very useful set phrase meaning 'if you'd like' / 'if it's okay with you'",
    "たら can also describe discovered situations: うちに帰ったら、猫がいた (When I got home, the cat was there)",
    "ても (even if) expresses unexpected results: い-adj → くても, な-adj/noun → でも, verb → て-form + も",
    "ても means the expected result does NOT happen despite the condition being true"
  ],
  examples: [
    {
      japanese: "いい 天気だったら、散歩しませんか。",
      romaji: "ii tenki dattara, sanpo shimasen ka.",
      french: "If the weather is nice, shall we take a walk?",
      breakdown: "いい(good) 天気(weather) だったら(if it is-conditional) 散歩しませんか(shall we take a walk)"
    },
    {
      japanese: "何度 練習しても、上手に なりません。",
      romaji: "nando renshuu shitemo, jouzu ni narimasen.",
      french: "No matter how many times I practice, I don't get better.",
      breakdown: "何度(how many times) 練習しても(even if practice) 上手に(skillfully) なりません(don't become)"
    },
    {
      japanese: "窓を 開けたら、富士山が 見えました。",
      romaji: "mado wo aketara, fujisan ga miemashita.",
      french: "When I opened the window, I could see Mt. Fuji.",
      breakdown: "窓を(window) 開けたら(when opened-discovered situation) 富士山が(Mt. Fuji) 見えました(was visible)"
    },
    {
      japanese: "高くても、おいしかったら、食べに 行きます。",
      romaji: "takakutemo, oishikattara, tabe ni ikimasu.",
      french: "Even if it's expensive, if it's delicious, I'll go eat there.",
      breakdown: "高くても(even if expensive) おいしかったら(if delicious) 食べに(to eat) 行きます(go)"
    }
  ],
  exercises: [
    {
      question: "Form the たら conditional: いい (good)",
      answer: "よかったら",
      explanation: "いい is irregular. Its past form is よかった, so the conditional is よかった + ら = よかったら. NOT いかったら!"
    },
    {
      question: "Translate: 'Even if it rains, I'll go.' (rain = 雨が 降る, to go = 行く)",
      answer: "雨が 降っても、行きます。",
      explanation: "降る → 降って (て-form) + も = 降っても (even if it rains). The result (行きます) is unexpected given rain."
    },
    {
      question: "Fill in: ＿＿＿＿、いっしょに ごはんを 食べませんか。(If you'd like, shall we eat together?)",
      answer: "よかったら",
      hint: "This is a very common set phrase using いい in たら form.",
      explanation: "よかったら is a polite, gentle way to make an invitation. It literally means 'if it is good (with you).'"
    },
    {
      question: "Choose: 忙し＿＿＿、毎日 運動します。(Even if I'm busy, I exercise every day.) (a) かったら (b) くても",
      answer: "(b) くても",
      explanation: "忙しい (い-adjective) + ても = 忙しくても (even if busy). かったら would mean 'if busy' (condition leading to expected result), but here the result is unexpected."
    },
    {
      question: "Translate this discovered situation: 'When I opened the box, there was a present inside.' (box = 箱, to open = 開ける, present = プレゼント, inside = 中に)",
      answer: "箱を 開けたら、中に プレゼントが ありました。",
      explanation: "開ける → 開けた → 開けたら (when I opened). This たら describes a discovered situation — you didn't expect the present. The past tense ありました shows it actually happened."
    }
  ]
}
];
