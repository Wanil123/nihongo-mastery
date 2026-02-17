// ============================================================================
// DIALOGUES AND CONVERSATIONS - Real everyday situations
// ============================================================================

export const conversations = [
  {
    id: 1,
    title: "Introducing yourself (自己紹介)",
    situation: "You are meeting someone for the first time in Japan.",
    level: "Beginner",
    dialogue: [
      { speaker: "Tanaka", jp: "はじめまして。たなかです。", rm: "Hajimemashite. Tanaka desu.", fr: "Nice to meet you. I'm Tanaka." },
      { speaker: "You", jp: "はじめまして。[votre nom]です。フランスからきました。", rm: "Hajimemashite. [votre nom] desu. Furansu kara kimashita.", fr: "Nice to meet you. I'm [your name]. I come from France." },
      { speaker: "Tanaka", jp: "フランスですか！いいですね。にほんごがじょうずですね。", rm: "Furansu desu ka! Ii desu ne. Nihongo ga jouzu desu ne.", fr: "France! That's nice. Your Japanese is good!" },
      { speaker: "You", jp: "いいえ、まだまだです。いま にほんごを べんきょうしています。", rm: "Iie, mada mada desu. Ima nihongo wo benkyou shite imasu.", fr: "No, not yet. I'm studying Japanese right now." },
      { speaker: "Tanaka", jp: "そうですか。がんばってください！", rm: "Sou desu ka. Ganbatte kudasai!", fr: "I see. Good luck! (Do your best!)" },
      { speaker: "You", jp: "ありがとうございます。よろしくおねがいします。", rm: "Arigatou gozaimasu. Yoroshiku onegai shimasu.", fr: "Thank you. I look forward to your kindness." },
      { speaker: "Tanaka", jp: "こちらこそ、よろしくおねがいします。", rm: "Kochira koso, yoroshiku onegai shimasu.", fr: "Likewise, the pleasure is mine." }
    ],
    notes: [
      "'まだまだです' is a very Japanese expression of humility. Instead of saying 'thank you' when someone compliments you, you say 'I still have a long way to go'. It's very well regarded!",
      "'がんばって' is one of the most used words in Japan. It means 'do your best / good luck / hang in there'. You'll hear it EVERYWHERE.",
      "'こちらこそ' means 'it is I (who should be saying that)'. It's the polite response to 'yoroshiku'."
    ]
  },
  {
    id: 2,
    title: "At the restaurant (レストランで)",
    situation: "You walk into a restaurant in Japan.",
    level: "Beginner",
    dialogue: [
      { speaker: "Waiter", jp: "いらっしゃいませ！なんめいさまですか？", rm: "Irasshaimase! Nanmei-sama desu ka?", fr: "Welcome! How many people?" },
      { speaker: "You", jp: "ふたりです。", rm: "Futari desu.", fr: "Two people." },
      { speaker: "Waiter", jp: "こちらへどうぞ。メニューです。", rm: "Kochira e douzo. Menyuu desu.", fr: "This way, please. Here is the menu." },
      { speaker: "You", jp: "すみません、これは なんですか？", rm: "Sumimasen, kore wa nan desu ka?", fr: "Excuse me, what is this?" },
      { speaker: "Waiter", jp: "それは やきにくていしょくです。にくと ごはんと みそしるが つきます。", rm: "Sore wa yakiniku teishoku desu. Niku to gohan to misoshiru ga tsukimasu.", fr: "That's a yakiniku set meal (grilled meat). It comes with meat, rice, and miso soup." },
      { speaker: "You", jp: "じゃあ、それを ふたつ おねがいします。", rm: "Jaa, sore wo futatsu onegai shimasu.", fr: "Then, two of those, please." },
      { speaker: "Waiter", jp: "おのみものは なにが よろしいですか？", rm: "Onomimono wa nani ga yoroshii desu ka?", fr: "What would you like to drink?" },
      { speaker: "You", jp: "みずを おねがいします。", rm: "Mizu wo onegai shimasu.", fr: "Water, please." },
      { speaker: "Waiter", jp: "かしこまりました。しょうしょう おまちください。", rm: "Kashikomarimashita. Shoushou omachi kudasai.", fr: "Understood. Please wait a moment." },
      { speaker: "(Later)", jp: "おまたせしました。どうぞ。", rm: "Omatase shimashita. Douzo.", fr: "Sorry for the wait. Here you go." },
      { speaker: "You", jp: "いただきます！", rm: "Itadakimasu!", fr: "(Bon appetit! - said before eating)" },
      { speaker: "(After the meal)", jp: "ごちそうさまでした。おいしかったです！", rm: "Gochisousama deshita. Oishikatta desu!", fr: "Thank you for the meal. It was delicious!" },
      { speaker: "You", jp: "すみません、おかいけいを おねがいします。", rm: "Sumimasen, okaikei wo onegai shimasu.", fr: "Excuse me, the check please." }
    ],
    notes: [
      "'いらっしゃいませ' is said in ALL shops and restaurants when you enter. No need to respond!",
      "'かしこまりました' is the very polite form of 'understood'. You'll hear it in restaurants and hotels.",
      "In Japan, water is FREE at restaurants and served automatically.",
      "There is NO tipping in Japan. It's even considered rude to leave a tip!"
    ]
  },
  {
    id: 3,
    title: "Asking for directions (道を聞く)",
    situation: "You are lost and ask a passerby for directions.",
    level: "Beginner",
    dialogue: [
      { speaker: "You", jp: "すみません、ちょっと いいですか？", rm: "Sumimasen, chotto ii desu ka?", fr: "Excuse me, may I bother you for a moment?" },
      { speaker: "Passerby", jp: "はい、なんですか？", rm: "Hai, nan desu ka?", fr: "Yes, what is it?" },
      { speaker: "You", jp: "えきは どこですか？", rm: "Eki wa doko desu ka?", fr: "Where is the station?" },
      { speaker: "Passerby", jp: "えきですか。ここを まっすぐ いって、つぎの しんごうを みぎに まがってください。", rm: "Eki desu ka. Koko wo massugu itte, tsugi no shingou wo migi ni magatte kudasai.", fr: "The station? Go straight here, then turn right at the next traffic light." },
      { speaker: "You", jp: "まっすぐ いって、みぎですね。", rm: "Massugu itte, migi desu ne.", fr: "Straight ahead then right, correct?" },
      { speaker: "Passerby", jp: "はい、そうです。ごふんぐらい あるきます。", rm: "Hai, sou desu. Go-fun gurai arukimasu.", fr: "Yes, that's right. It's about a 5-minute walk." },
      { speaker: "You", jp: "わかりました。どうも ありがとうございます。", rm: "Wakarimashita. Doumo arigatou gozaimasu.", fr: "I understand. Thank you very much." },
      { speaker: "Passerby", jp: "いいえ、どういたしまして。きをつけて！", rm: "Iie, dou itashimashite. Ki wo tsukete!", fr: "You're welcome. Take care! (Be careful!)" }
    ],
    notes: [
      "'ちょっといいですか？' is THE perfect phrase to politely approach someone.",
      "Japanese people often confirm by repeating the key word of the question ('えきですか' = the station, right?).",
      "'ぐらい' means 'about/approximately'. Very useful for estimations.",
      "'きをつけて' (be careful / take care) is a very common and warm farewell expression."
    ]
  },
  {
    id: 4,
    title: "Going shopping (買い物)",
    situation: "You are in a clothing store.",
    level: "Beginner",
    dialogue: [
      { speaker: "Clerk", jp: "いらっしゃいませ！なにか おさがしですか？", rm: "Irasshaimase! Nanika osagashi desu ka?", fr: "Welcome! Are you looking for something?" },
      { speaker: "You", jp: "この Tシャツは いくらですか？", rm: "Kono T-shatsu wa ikura desu ka?", fr: "How much is this T-shirt?" },
      { speaker: "Clerk", jp: "にせんえんです。", rm: "Nisen en desu.", fr: "2000 yen." },
      { speaker: "You", jp: "ほかの いろは ありますか？", rm: "Hoka no iro wa arimasu ka?", fr: "Do you have other colors?" },
      { speaker: "Clerk", jp: "はい、しろと くろと あかが あります。", rm: "Hai, shiro to kuro to aka ga arimasu.", fr: "Yes, we have white, black, and red." },
      { speaker: "You", jp: "しろを みせてください。", rm: "Shiro wo misete kudasai.", fr: "Show me the white one, please." },
      { speaker: "Clerk", jp: "はい、どうぞ。", rm: "Hai, douzo.", fr: "Yes, here you go." },
      { speaker: "You", jp: "これを ください。カードで いいですか？", rm: "Kore wo kudasai. Kaado de ii desu ka?", fr: "I'll take this one. Can I pay by card?" },
      { speaker: "Clerk", jp: "はい、だいじょうぶです。ありがとうございます。", rm: "Hai, daijoubu desu. Arigatou gozaimasu.", fr: "Yes, no problem. Thank you." }
    ],
    notes: [
      "'おさがしですか' = 'are you looking for?' (honorific form of さがす = to search)",
      "'ほかの' = 'other(s)'. Very useful for asking for alternatives.",
      "'カードでいいですか？' is THE phrase to know for paying by card.",
      "In Japan, change is returned to you on a small tray, not handed directly."
    ]
  },
  {
    id: 5,
    title: "At the doctor's (病院で)",
    situation: "You are not feeling well and go to the doctor.",
    level: "Intermediate",
    dialogue: [
      { speaker: "Doctor", jp: "きょうは どうしましたか？", rm: "Kyou wa dou shimashita ka?", fr: "What seems to be the problem today?" },
      { speaker: "You", jp: "きのうから あたまが いたいです。そして、ねつも あります。", rm: "Kinou kara atama ga itai desu. Soshite, netsu mo arimasu.", fr: "I've had a headache since yesterday. And I also have a fever." },
      { speaker: "Doctor", jp: "ねつは なんどですか？", rm: "Netsu wa nando desu ka?", fr: "What is your temperature?" },
      { speaker: "You", jp: "さんじゅうはちど ごです。", rm: "Sanjuu hachi do go desu.", fr: "38.5 degrees." },
      { speaker: "Doctor", jp: "のどは いたいですか？", rm: "Nodo wa itai desu ka?", fr: "Does your throat hurt?" },
      { speaker: "You", jp: "はい、すこし いたいです。せきも でます。", rm: "Hai, sukoshi itai desu. Seki mo demasu.", fr: "Yes, a little. I also have a cough." },
      { speaker: "Doctor", jp: "かぜですね。くすりを だします。ゆっくり やすんでください。", rm: "Kaze desu ne. Kusuri wo dashimasu. Yukkuri yasunde kudasai.", fr: "It's a cold. I'll prescribe some medicine. Please get plenty of rest." },
      { speaker: "You", jp: "ありがとうございます。くすりは いつ のみますか？", rm: "Arigatou gozaimasu. Kusuri wa itsu nomimasu ka?", fr: "Thank you. When should I take the medicine?" },
      { speaker: "Doctor", jp: "まいにち さんかい、しょくごに のんでください。", rm: "Mainichi sankai, shokugo ni nonde kudasai.", fr: "Three times a day, after meals." }
    ],
    notes: [
      "'どうしましたか？' = 'What happened / What's wrong?' - Standard question at the doctor's.",
      "'〜がいたいです' = 'my ~ hurts'. あたまがいたい (headache), おなかがいたい (stomachache).",
      "'〜をだします' = 'I will issue/prescribe ~'. The doctor 'puts out' a prescription.",
      "In Japan, pharmacies are often separate from clinics. You take the prescription to the pharmacy."
    ],
    usefulVocab: [
      { jp: "いたい", fr: "painful / to hurt" },
      { jp: "ねつ", fr: "fever" },
      { jp: "かぜ", fr: "cold" },
      { jp: "せき", fr: "cough" },
      { jp: "くすり", fr: "medicine" },
      { jp: "びょういん", fr: "hospital" },
      { jp: "おなか", fr: "stomach" },
      { jp: "はきけ", fr: "nausea" },
      { jp: "アレルギー", fr: "allergy" }
    ]
  },
  {
    id: 6,
    title: "On the phone (電話で)",
    situation: "You call a restaurant to make a reservation.",
    level: "Intermediate",
    dialogue: [
      { speaker: "Restaurant", jp: "はい、さくらレストランです。", rm: "Hai, Sakura resutoran desu.", fr: "Yes, Sakura restaurant." },
      { speaker: "You", jp: "もしもし、すみません、よやくを おねがいしたいんですが。", rm: "Moshi moshi, sumimasen, yoyaku wo onegai shitain desu ga.", fr: "Hello, excuse me, I would like to make a reservation." },
      { speaker: "Restaurant", jp: "ありがとうございます。いつ いらっしゃいますか？", rm: "Arigatou gozaimasu. Itsu irasshaimasu ka?", fr: "Thank you. When will you be coming?" },
      { speaker: "You", jp: "きんようびの よる ななじに おねがいします。", rm: "Kinyoubi no yoru nana-ji ni onegai shimasu.", fr: "Friday evening at 7 PM, please." },
      { speaker: "Restaurant", jp: "なんめいさまですか？", rm: "Nanmei-sama desu ka?", fr: "How many people?" },
      { speaker: "You", jp: "さんにんです。", rm: "San-nin desu.", fr: "Three people." },
      { speaker: "Restaurant", jp: "かしこまりました。おなまえと おでんわばんごうを おねがいします。", rm: "Kashikomarimashita. Onamae to odenwa bangou wo onegai shimasu.", fr: "Understood. Your name and phone number, please." },
      { speaker: "You", jp: "[nom]です。ばんごうは ぜろきゅうぜろ の いちにさん の よんごろくなな です。", rm: "[nom] desu. Bangou wa zero-kyuu-zero no ichi-ni-san no yon-go-roku-nana desu.", fr: "It's [name]. The number is 090-123-4567." },
      { speaker: "Restaurant", jp: "はい、きんようび ななじ さんめいさま、[nom]さまですね。おまちしております。", rm: "Hai, kinyoubi nana-ji san-mei-sama, [nom]-sama desu ne. Omachi shite orimasu.", fr: "Alright, Friday at 7 PM for 3 people, Mr./Ms. [name]. We look forward to seeing you." }
    ],
    notes: [
      "'もしもし' is the Japanese 'hello' on the phone. Used ONLY on the phone.",
      "'〜たいんですが' is a polite way to say 'I would like to...'. The 'が' at the end softens the request.",
      "Japanese phone numbers are separated by 'の' (no) when spoken on the phone.",
      "'おまちしております' is the ultra-polite form of 'we are waiting for you'. Typical of service language."
    ]
  },
  {
    id: 7,
    title: "Talking about hobbies (趣味について)",
    situation: "A new colleague asks you about your hobbies.",
    level: "Beginner",
    dialogue: [
      { speaker: "Colleague", jp: "しゅみは なんですか？", rm: "Shumi wa nan desu ka?", fr: "What are your hobbies?" },
      { speaker: "You", jp: "えいがを みることと、りょうりを つくることが すきです。", rm: "Eiga wo miru koto to, ryouri wo tsukuru koto ga suki desu.", fr: "I like watching movies and cooking." },
      { speaker: "Colleague", jp: "いいですね！どんな えいがが すきですか？", rm: "Ii desu ne! Donna eiga ga suki desu ka?", fr: "That's nice! What kind of movies do you like?" },
      { speaker: "You", jp: "にほんの えいがが すきです。とくに アニメが だいすきです。", rm: "Nihon no eiga ga suki desu. Tokuni anime ga daisuki desu.", fr: "I like Japanese movies. Especially, I love anime." },
      { speaker: "Colleague", jp: "おお、どんな アニメが すきですか？", rm: "Oo, donna anime ga suki desu ka?", fr: "Oh, what anime do you like?" },
      { speaker: "You", jp: "ジブリの えいがが いちばん すきです。「となりのトトロ」は すばらしいです。", rm: "Jiburi no eiga ga ichiban suki desu. 'Tonari no Totoro' wa subarashii desu.", fr: "Ghibli movies are my favorites. My Neighbor Totoro is wonderful." },
      { speaker: "Colleague", jp: "わたしも すきです！こんど いっしょに えいがを みましょう。", rm: "Watashi mo suki desu! Kondo issho ni eiga wo mimashou.", fr: "I like them too! Let's go watch a movie together sometime." },
      { speaker: "You", jp: "いいですね！ぜひ！", rm: "Ii desu ne! Zehi!", fr: "Great idea! Absolutely!" }
    ],
    notes: [
      "'〜ことがすきです' = 'I like doing ~'. こと turns a verb into a noun (nominalization).",
      "'とくに' = 'especially / in particular'. Very useful word.",
      "'いちばん' = 'the most / number one'. いちばんすき = favorite.",
      "'〜ましょう' = 'let's do ~' (invitation/suggestion). Very commonly used form.",
      "'ぜひ' = 'absolutely / by all means'. An expression of enthusiasm."
    ]
  }
];

export const usefulPhrases = {
  title: "Useful phrases for surviving in Japan",
  categories: [
    {
      name: "In case of emergency",
      phrases: [
        { jp: "たすけてください！", rm: "Tasukete kudasai!", fr: "Help me!" },
        { jp: "けいさつを よんでください！", rm: "Keisatsu wo yonde kudasai!", fr: "Call the police!" },
        { jp: "きゅうきゅうしゃを おねがいします！", rm: "Kyuukyuusha wo onegai shimasu!", fr: "Call an ambulance!" },
        { jp: "びょういんは どこですか？", rm: "Byouin wa doko desu ka?", fr: "Where is the hospital?" }
      ]
    },
    {
      name: "Daily life",
      phrases: [
        { jp: "にほんごが すこし わかります", rm: "Nihongo ga sukoshi wakarimasu", fr: "I understand a little Japanese" },
        { jp: "もっと ゆっくり はなしてください", rm: "Motto yukkuri hanashite kudasai", fr: "Please speak more slowly" },
        { jp: "かいてください", rm: "Kaite kudasai", fr: "Please write it down" },
        { jp: "WiFiは ありますか？", rm: "WiFi wa arimasu ka?", fr: "Do you have WiFi?" },
        { jp: "しゃしんを とってもいいですか？", rm: "Shashin wo totte mo ii desu ka?", fr: "May I take a photo?" },
        { jp: "おすすめは なんですか？", rm: "Osusume wa nan desu ka?", fr: "What do you recommend?" },
        { jp: "えいごの メニューは ありますか？", rm: "Eigo no menyuu wa arimasu ka?", fr: "Do you have an English menu?" },
        { jp: "ベジタリアン りょうりは ありますか？", rm: "Bejitarian ryouri wa arimasu ka?", fr: "Do you have vegetarian dishes?" },
        { jp: "トイレを かりてもいいですか？", rm: "Toire wo karite mo ii desu ka?", fr: "May I use the restroom?" }
      ]
    }
  ]
};
