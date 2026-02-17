// ============================================================================
// JAPANESE VERB CONJUGATION (活用形) - Complete Reference & Quizzes
// Covers all major conjugation forms for Group 1 (五段), Group 2 (一段),
// and Group 3 (irregular) verbs
// ============================================================================

// ----------------------------------------------------------------------------
// 1. Introduction
// ----------------------------------------------------------------------------

export const conjugationIntro = {
  title: "活用形 Conjugation Forms",
  description:
    "Japanese verbs change their endings to express tense, politeness, negation, ability, and much more. " +
    "Unlike English, Japanese verbs do not conjugate for person or number — the same form is used whether the subject is " +
    "\"I,\" \"you,\" or \"they.\" Instead, conjugation revolves around three verb groups: " +
    "Group 1 (五段動詞 godan-doushi) where the final kana changes across the five vowel rows, " +
    "Group 2 (一段動詞 ichidan-doushi) where you simply drop the final る and attach a suffix, " +
    "and Group 3 (irregular verbs) consisting of する and 来る (くる), which follow unique patterns. " +
    "Mastering these conjugation forms is the key to fluency, as nearly every Japanese sentence depends on a correctly conjugated verb.",
  tips: [
    "Learn the three verb groups first. Knowing which group a verb belongs to determines every conjugation.",
    "Group 2 verbs always end in -iru or -eru, but not all -iru/-eru verbs are Group 2 (e.g., 帰る kaeru is Group 1). When in doubt, check a dictionary.",
    "Group 1 verbs follow predictable vowel-row shifts: u→a (nai), u→i (masu), u→e (conditional), u→o (volitional).",
    "Start with ます形, て形, and ない形 — these three forms appear in the vast majority of everyday conversations.",
    "Practice conjugation with verbs you already know from vocabulary study. Familiar words make the patterns stick faster.",
    "The て-form is the foundation for many grammar structures (ている, てください, てもいい, etc.), so master it early.",
    "Irregular verbs する and 来る simply need to be memorized — there are only two of them, so it is manageable."
  ]
};

// ----------------------------------------------------------------------------
// 2. Conjugation Forms
// ----------------------------------------------------------------------------

export const conjugationForms = [

  // ==========================================================================
  // a. ます形 (Masu-form) — Polite form
  // ==========================================================================
  {
    id: "masu",
    name: "ます形 Masu-form",
    description:
      "The ます形 is the standard polite verb form used in everyday formal conversation. " +
      "It is the first conjugation most learners encounter and is appropriate for speaking with strangers, colleagues, and elders. " +
      "The negative is ません, past is ました, and negative past is ませんでした.",
    rules: [
      {
        group: "Group 1 (五段)",
        rule: "Change the final u-sound kana to its i-row equivalent, then add ます",
        examples: [
          { dict: "書く (kaku)", conjugated: "書きます (kakimasu)", meaning: "to write" },
          { dict: "飲む (nomu)", conjugated: "飲みます (nomimasu)", meaning: "to drink" },
          { dict: "話す (hanasu)", conjugated: "話します (hanashimasu)", meaning: "to speak" },
          { dict: "読む (yomu)", conjugated: "読みます (yomimasu)", meaning: "to read" },
          { dict: "買う (kau)", conjugated: "買います (kaimasu)", meaning: "to buy" }
        ]
      },
      {
        group: "Group 2 (一段)",
        rule: "Remove the final る, then add ます",
        examples: [
          { dict: "食べる (taberu)", conjugated: "食べます (tabemasu)", meaning: "to eat" },
          { dict: "見る (miru)", conjugated: "見ます (mimasu)", meaning: "to see / watch" },
          { dict: "起きる (okiru)", conjugated: "起きます (okimasu)", meaning: "to wake up" },
          { dict: "寝る (neru)", conjugated: "寝ます (nemasu)", meaning: "to sleep" },
          { dict: "教える (oshieru)", conjugated: "教えます (oshiemasu)", meaning: "to teach" }
        ]
      },
      {
        group: "Group 3 (irregular)",
        rule: "する → します, 来る (くる) → 来ます (きます)",
        examples: [
          { dict: "する (suru)", conjugated: "します (shimasu)", meaning: "to do" },
          { dict: "来る (kuru)", conjugated: "来ます (kimasu)", meaning: "to come" },
          { dict: "勉強する (benkyou suru)", conjugated: "勉強します (benkyou shimasu)", meaning: "to study" }
        ]
      }
    ],
    usageExamples: [
      { jp: "毎日コーヒーを飲みます。", rm: "Mainichi koohii o nomimasu.", en: "I drink coffee every day." },
      { jp: "明日友達が来ます。", rm: "Ashita tomodachi ga kimasu.", en: "My friend will come tomorrow." },
      { jp: "日本語を話しますか。", rm: "Nihongo o hanashimasu ka.", en: "Do you speak Japanese?" }
    ]
  },

  // ==========================================================================
  // b. て形 (Te-form) — Connecting form
  // ==========================================================================
  {
    id: "te",
    name: "て形 Te-form",
    description:
      "The て形 is one of the most versatile and important conjugation forms. " +
      "It is used to connect sentences, make requests (てください), describe ongoing actions (ている), ask permission (てもいい), and much more. " +
      "Group 1 verbs follow the \"te-form song\" pattern based on the final kana of the dictionary form.",
    rules: [
      {
        group: "Group 1 (五段)",
        rule: "Depends on the final kana: く→いて, ぐ→いで, す→して, む/ぶ/ぬ→んで, つ/る/う→って. Exception: 行く→行って",
        examples: [
          { dict: "書く (kaku)", conjugated: "書いて (kaite)", meaning: "to write" },
          { dict: "泳ぐ (oyogu)", conjugated: "泳いで (oyoide)", meaning: "to swim" },
          { dict: "話す (hanasu)", conjugated: "話して (hanashite)", meaning: "to speak" },
          { dict: "飲む (nomu)", conjugated: "飲んで (nonde)", meaning: "to drink" },
          { dict: "死ぬ (shinu)", conjugated: "死んで (shinde)", meaning: "to die" },
          { dict: "遊ぶ (asobu)", conjugated: "遊んで (asonde)", meaning: "to play" },
          { dict: "待つ (matsu)", conjugated: "待って (matte)", meaning: "to wait" },
          { dict: "読む (yomu)", conjugated: "読んで (yonde)", meaning: "to read" },
          { dict: "買う (kau)", conjugated: "買って (katte)", meaning: "to buy" },
          { dict: "行く (iku)", conjugated: "行って (itte)", meaning: "to go (exception)" }
        ]
      },
      {
        group: "Group 2 (一段)",
        rule: "Remove the final る, then add て",
        examples: [
          { dict: "食べる (taberu)", conjugated: "食べて (tabete)", meaning: "to eat" },
          { dict: "見る (miru)", conjugated: "見て (mite)", meaning: "to see / watch" },
          { dict: "起きる (okiru)", conjugated: "起きて (okite)", meaning: "to wake up" },
          { dict: "寝る (neru)", conjugated: "寝て (nete)", meaning: "to sleep" },
          { dict: "教える (oshieru)", conjugated: "教えて (oshiete)", meaning: "to teach" }
        ]
      },
      {
        group: "Group 3 (irregular)",
        rule: "する → して, 来る (くる) → 来て (きて)",
        examples: [
          { dict: "する (suru)", conjugated: "して (shite)", meaning: "to do" },
          { dict: "来る (kuru)", conjugated: "来て (kite)", meaning: "to come" },
          { dict: "勉強する (benkyou suru)", conjugated: "勉強して (benkyou shite)", meaning: "to study" }
        ]
      }
    ],
    usageExamples: [
      { jp: "ここに名前を書いてください。", rm: "Koko ni namae o kaite kudasai.", en: "Please write your name here." },
      { jp: "今テレビを見ています。", rm: "Ima terebi o mite imasu.", en: "I am watching TV right now." },
      { jp: "写真を撮ってもいいですか。", rm: "Shashin o totte mo ii desu ka.", en: "May I take a photo?" }
    ]
  },

  // ==========================================================================
  // c. た形 (Ta-form) — Past tense (plain)
  // ==========================================================================
  {
    id: "ta",
    name: "た形 Ta-form",
    description:
      "The た形 is the plain past tense form. It follows exactly the same sound-change rules as the て-form, " +
      "but replaces て with た (and で with だ). It is used in casual speech for past tense, " +
      "and also appears in grammar patterns like たことがある (have experienced) and たほうがいい (you should).",
    rules: [
      {
        group: "Group 1 (五段)",
        rule: "Same pattern as て-form but with た/だ: く→いた, ぐ→いだ, す→した, む/ぶ/ぬ→んだ, つ/る/う→った. Exception: 行く→行った",
        examples: [
          { dict: "書く (kaku)", conjugated: "書いた (kaita)", meaning: "to write" },
          { dict: "泳ぐ (oyogu)", conjugated: "泳いだ (oyoida)", meaning: "to swim" },
          { dict: "話す (hanasu)", conjugated: "話した (hanashita)", meaning: "to speak" },
          { dict: "飲む (nomu)", conjugated: "飲んだ (nonda)", meaning: "to drink" },
          { dict: "遊ぶ (asobu)", conjugated: "遊んだ (asonda)", meaning: "to play" },
          { dict: "待つ (matsu)", conjugated: "待った (matta)", meaning: "to wait" },
          { dict: "買う (kau)", conjugated: "買った (katta)", meaning: "to buy" },
          { dict: "行く (iku)", conjugated: "行った (itta)", meaning: "to go (exception)" }
        ]
      },
      {
        group: "Group 2 (一段)",
        rule: "Remove the final る, then add た",
        examples: [
          { dict: "食べる (taberu)", conjugated: "食べた (tabeta)", meaning: "to eat" },
          { dict: "見る (miru)", conjugated: "見た (mita)", meaning: "to see / watch" },
          { dict: "起きる (okiru)", conjugated: "起きた (okita)", meaning: "to wake up" },
          { dict: "寝る (neru)", conjugated: "寝た (neta)", meaning: "to sleep" },
          { dict: "教える (oshieru)", conjugated: "教えた (oshieta)", meaning: "to teach" }
        ]
      },
      {
        group: "Group 3 (irregular)",
        rule: "する → した, 来る (くる) → 来た (きた)",
        examples: [
          { dict: "する (suru)", conjugated: "した (shita)", meaning: "to do" },
          { dict: "来る (kuru)", conjugated: "来た (kita)", meaning: "to come" },
          { dict: "勉強する (benkyou suru)", conjugated: "勉強した (benkyou shita)", meaning: "to study" }
        ]
      }
    ],
    usageExamples: [
      { jp: "昨日映画を見た。", rm: "Kinou eiga o mita.", en: "I watched a movie yesterday." },
      { jp: "日本に行ったことがありますか。", rm: "Nihon ni itta koto ga arimasu ka.", en: "Have you ever been to Japan?" },
      { jp: "薬を飲んだほうがいいですよ。", rm: "Kusuri o nonda hou ga ii desu yo.", en: "You should take medicine." }
    ]
  },

  // ==========================================================================
  // d. ない形 (Nai-form) — Negative (plain)
  // ==========================================================================
  {
    id: "nai",
    name: "ない形 Nai-form",
    description:
      "The ない形 is the plain negative form, meaning \"do not\" or \"does not.\" " +
      "Group 1 verbs shift the final kana to the a-row before adding ない. " +
      "It is used in casual speech and also appears in patterns like ないでください (please don't), なければならない (must), and ないほうがいい (you shouldn't).",
    rules: [
      {
        group: "Group 1 (五段)",
        rule: "Change the final u-sound kana to its a-row equivalent, then add ない. Special case: verbs ending in う → わない (not あない)",
        examples: [
          { dict: "書く (kaku)", conjugated: "書かない (kakanai)", meaning: "to write" },
          { dict: "飲む (nomu)", conjugated: "飲まない (nomanai)", meaning: "to drink" },
          { dict: "話す (hanasu)", conjugated: "話さない (hanasanai)", meaning: "to speak" },
          { dict: "読む (yomu)", conjugated: "読まない (yomanai)", meaning: "to read" },
          { dict: "行く (iku)", conjugated: "行かない (ikanai)", meaning: "to go" },
          { dict: "泳ぐ (oyogu)", conjugated: "泳がない (oyoganai)", meaning: "to swim" },
          { dict: "待つ (matsu)", conjugated: "待たない (matanai)", meaning: "to wait" },
          { dict: "死ぬ (shinu)", conjugated: "死なない (shinanai)", meaning: "to die" },
          { dict: "遊ぶ (asobu)", conjugated: "遊ばない (asobanai)", meaning: "to play" },
          { dict: "買う (kau)", conjugated: "買わない (kawanai)", meaning: "to buy" }
        ]
      },
      {
        group: "Group 2 (一段)",
        rule: "Remove the final る, then add ない",
        examples: [
          { dict: "食べる (taberu)", conjugated: "食べない (tabenai)", meaning: "to eat" },
          { dict: "見る (miru)", conjugated: "見ない (minai)", meaning: "to see / watch" },
          { dict: "起きる (okiru)", conjugated: "起きない (okinai)", meaning: "to wake up" },
          { dict: "寝る (neru)", conjugated: "寝ない (nenai)", meaning: "to sleep" },
          { dict: "教える (oshieru)", conjugated: "教えない (oshienai)", meaning: "to teach" }
        ]
      },
      {
        group: "Group 3 (irregular)",
        rule: "する → しない, 来る (くる) → 来ない (こない)",
        examples: [
          { dict: "する (suru)", conjugated: "しない (shinai)", meaning: "to do" },
          { dict: "来る (kuru)", conjugated: "来ない (konai)", meaning: "to come" },
          { dict: "勉強する (benkyou suru)", conjugated: "勉強しない (benkyou shinai)", meaning: "to study" }
        ]
      }
    ],
    usageExamples: [
      { jp: "朝ごはんを食べないの？", rm: "Asagohan o tabenai no?", en: "You're not eating breakfast?" },
      { jp: "ここで写真を撮らないでください。", rm: "Koko de shashin o toranaide kudasai.", en: "Please don't take photos here." },
      { jp: "宿題をしなければなりません。", rm: "Shukudai o shinakereba narimasen.", en: "I must do my homework." }
    ]
  },

  // ==========================================================================
  // e. 辞書形 (Dictionary form)
  // ==========================================================================
  {
    id: "jisho",
    name: "辞書形 Dictionary form",
    description:
      "The 辞書形 is the base form of the verb as it appears in dictionaries. " +
      "It is also the plain present/future affirmative form. All Group 1 verbs end in an u-sound kana, " +
      "all Group 2 verbs end in る, and the two Group 3 verbs are する and 来る. " +
      "It is used in casual speech and as the building block for many grammar patterns such as ことができる (can do) and つもり (intend to).",
    rules: [
      {
        group: "Group 1 (五段)",
        rule: "The dictionary form ends in an u-row kana: う, く, ぐ, す, つ, ぬ, ぶ, む, る",
        examples: [
          { dict: "書く (kaku)", conjugated: "書く (kaku)", meaning: "to write" },
          { dict: "飲む (nomu)", conjugated: "飲む (nomu)", meaning: "to drink" },
          { dict: "話す (hanasu)", conjugated: "話す (hanasu)", meaning: "to speak" },
          { dict: "行く (iku)", conjugated: "行く (iku)", meaning: "to go" },
          { dict: "買う (kau)", conjugated: "買う (kau)", meaning: "to buy" }
        ]
      },
      {
        group: "Group 2 (一段)",
        rule: "The dictionary form always ends in る, preceded by an i-sound or e-sound vowel",
        examples: [
          { dict: "食べる (taberu)", conjugated: "食べる (taberu)", meaning: "to eat" },
          { dict: "見る (miru)", conjugated: "見る (miru)", meaning: "to see / watch" },
          { dict: "起きる (okiru)", conjugated: "起きる (okiru)", meaning: "to wake up" },
          { dict: "寝る (neru)", conjugated: "寝る (neru)", meaning: "to sleep" },
          { dict: "教える (oshieru)", conjugated: "教える (oshieru)", meaning: "to teach" }
        ]
      },
      {
        group: "Group 3 (irregular)",
        rule: "する and 来る (くる) are the two irregular verbs in their base form",
        examples: [
          { dict: "する (suru)", conjugated: "する (suru)", meaning: "to do" },
          { dict: "来る (kuru)", conjugated: "来る (kuru)", meaning: "to come" },
          { dict: "勉強する (benkyou suru)", conjugated: "勉強する (benkyou suru)", meaning: "to study" }
        ]
      }
    ],
    usageExamples: [
      { jp: "日本語を話すことができます。", rm: "Nihongo o hanasu koto ga dekimasu.", en: "I can speak Japanese." },
      { jp: "明日行くつもりです。", rm: "Ashita iku tsumori desu.", en: "I intend to go tomorrow." },
      { jp: "映画を見る前に、ご飯を食べよう。", rm: "Eiga o miru mae ni, gohan o tabeyou.", en: "Let's eat before watching the movie." }
    ]
  },

  // ==========================================================================
  // f. 可能形 (Potential form) — "can do"
  // ==========================================================================
  {
    id: "kanou",
    name: "可能形 Potential form",
    description:
      "The 可能形 expresses the ability or possibility to do something, equivalent to \"can\" or \"be able to\" in English. " +
      "Group 1 verbs shift to the e-row and add る, while Group 2 verbs add られる (though in casual speech, the ら is often dropped: 食べれる). " +
      "The potential form makes the verb behave like a Group 2 verb for further conjugation.",
    rules: [
      {
        group: "Group 1 (五段)",
        rule: "Change the final u-sound kana to its e-row equivalent, then add る",
        examples: [
          { dict: "書く (kaku)", conjugated: "書ける (kakeru)", meaning: "can write" },
          { dict: "飲む (nomu)", conjugated: "飲める (nomeru)", meaning: "can drink" },
          { dict: "話す (hanasu)", conjugated: "話せる (hanaseru)", meaning: "can speak" },
          { dict: "読む (yomu)", conjugated: "読める (yomeru)", meaning: "can read" },
          { dict: "泳ぐ (oyogu)", conjugated: "泳げる (oyogeru)", meaning: "can swim" },
          { dict: "買う (kau)", conjugated: "買える (kaeru)", meaning: "can buy" }
        ]
      },
      {
        group: "Group 2 (一段)",
        rule: "Remove the final る, then add られる (colloquially れる)",
        examples: [
          { dict: "食べる (taberu)", conjugated: "食べられる (taberareru)", meaning: "can eat" },
          { dict: "見る (miru)", conjugated: "見られる (mirareru)", meaning: "can see" },
          { dict: "起きる (okiru)", conjugated: "起きられる (okirareru)", meaning: "can wake up" },
          { dict: "寝る (neru)", conjugated: "寝られる (nerareru)", meaning: "can sleep" },
          { dict: "教える (oshieru)", conjugated: "教えられる (oshierareru)", meaning: "can teach" }
        ]
      },
      {
        group: "Group 3 (irregular)",
        rule: "する → できる, 来る (くる) → 来られる (こられる)",
        examples: [
          { dict: "する (suru)", conjugated: "できる (dekiru)", meaning: "can do" },
          { dict: "来る (kuru)", conjugated: "来られる (korareru)", meaning: "can come" },
          { dict: "勉強する (benkyou suru)", conjugated: "勉強できる (benkyou dekiru)", meaning: "can study" }
        ]
      }
    ],
    usageExamples: [
      { jp: "漢字が読めますか。", rm: "Kanji ga yomemasu ka.", en: "Can you read kanji?" },
      { jp: "この川で泳げます。", rm: "Kono kawa de oyogemasu.", en: "You can swim in this river." },
      { jp: "明日来られますか。", rm: "Ashita koraremasu ka.", en: "Can you come tomorrow?" }
    ]
  },

  // ==========================================================================
  // g. 意志形 (Volitional form) — "let's"
  // ==========================================================================
  {
    id: "ishi",
    name: "意志形 Volitional form",
    description:
      "The 意志形 expresses the speaker's will or intention, and is also used to suggest doing something together (\"let's ...\"). " +
      "The polite equivalent is ましょう. It can also combine with と思う to express plans (行こうと思う, \"I'm thinking of going\"). " +
      "Group 1 verbs shift to the o-row and add う.",
    rules: [
      {
        group: "Group 1 (五段)",
        rule: "Change the final u-sound kana to its o-row equivalent, then add う",
        examples: [
          { dict: "書く (kaku)", conjugated: "書こう (kakou)", meaning: "let's write" },
          { dict: "飲む (nomu)", conjugated: "飲もう (nomou)", meaning: "let's drink" },
          { dict: "話す (hanasu)", conjugated: "話そう (hanasou)", meaning: "let's talk" },
          { dict: "読む (yomu)", conjugated: "読もう (yomou)", meaning: "let's read" },
          { dict: "行く (iku)", conjugated: "行こう (ikou)", meaning: "let's go" },
          { dict: "買う (kau)", conjugated: "買おう (kaou)", meaning: "let's buy" }
        ]
      },
      {
        group: "Group 2 (一段)",
        rule: "Remove the final る, then add よう",
        examples: [
          { dict: "食べる (taberu)", conjugated: "食べよう (tabeyou)", meaning: "let's eat" },
          { dict: "見る (miru)", conjugated: "見よう (miyou)", meaning: "let's watch" },
          { dict: "起きる (okiru)", conjugated: "起きよう (okiyou)", meaning: "let's wake up" },
          { dict: "寝る (neru)", conjugated: "寝よう (neyou)", meaning: "let's sleep" },
          { dict: "教える (oshieru)", conjugated: "教えよう (oshieyou)", meaning: "let's teach" }
        ]
      },
      {
        group: "Group 3 (irregular)",
        rule: "する → しよう, 来る (くる) → 来よう (こよう)",
        examples: [
          { dict: "する (suru)", conjugated: "しよう (shiyou)", meaning: "let's do" },
          { dict: "来る (kuru)", conjugated: "来よう (koyou)", meaning: "let's come" },
          { dict: "勉強する (benkyou suru)", conjugated: "勉強しよう (benkyou shiyou)", meaning: "let's study" }
        ]
      }
    ],
    usageExamples: [
      { jp: "一緒に食べよう！", rm: "Issho ni tabeyou!", en: "Let's eat together!" },
      { jp: "来年日本に行こうと思います。", rm: "Rainen Nihon ni ikou to omoimasu.", en: "I'm thinking of going to Japan next year." },
      { jp: "そろそろ寝よう。", rm: "Sorosoro neyou.", en: "Let's go to sleep soon." }
    ]
  },

  // ==========================================================================
  // h. 命令形 (Imperative form) — Commands
  // ==========================================================================
  {
    id: "meirei",
    name: "命令形 Imperative form",
    description:
      "The 命令形 is the direct command form. It sounds forceful and is used in urgent situations, " +
      "by superiors to subordinates, in sports cheering, or in masculine casual speech. " +
      "In polite everyday life, てください is preferred. The negative imperative uses the dictionary form + な.",
    rules: [
      {
        group: "Group 1 (五段)",
        rule: "Change the final u-sound kana to its e-row equivalent",
        examples: [
          { dict: "書く (kaku)", conjugated: "書け (kake)", meaning: "Write!" },
          { dict: "飲む (nomu)", conjugated: "飲め (nome)", meaning: "Drink!" },
          { dict: "話す (hanasu)", conjugated: "話せ (hanase)", meaning: "Speak!" },
          { dict: "読む (yomu)", conjugated: "読め (yome)", meaning: "Read!" },
          { dict: "行く (iku)", conjugated: "行け (ike)", meaning: "Go!" },
          { dict: "待つ (matsu)", conjugated: "待て (mate)", meaning: "Wait!" }
        ]
      },
      {
        group: "Group 2 (一段)",
        rule: "Remove the final る, then add ろ (or よ in literary/formal style)",
        examples: [
          { dict: "食べる (taberu)", conjugated: "食べろ (tabero)", meaning: "Eat!" },
          { dict: "見る (miru)", conjugated: "見ろ (miro)", meaning: "Look!" },
          { dict: "起きる (okiru)", conjugated: "起きろ (okiro)", meaning: "Wake up!" },
          { dict: "寝る (neru)", conjugated: "寝ろ (nero)", meaning: "Sleep!" },
          { dict: "教える (oshieru)", conjugated: "教えろ (oshiero)", meaning: "Teach!" }
        ]
      },
      {
        group: "Group 3 (irregular)",
        rule: "する → しろ (or せよ in literary style), 来る (くる) → 来い (こい)",
        examples: [
          { dict: "する (suru)", conjugated: "しろ (shiro)", meaning: "Do it!" },
          { dict: "来る (kuru)", conjugated: "来い (koi)", meaning: "Come!" },
          { dict: "勉強する (benkyou suru)", conjugated: "勉強しろ (benkyou shiro)", meaning: "Study!" }
        ]
      }
    ],
    usageExamples: [
      { jp: "早く走れ！", rm: "Hayaku hashire!", en: "Run fast!" },
      { jp: "黙れ！", rm: "Damare!", en: "Shut up!" },
      { jp: "こっちに来い！", rm: "Kocchi ni koi!", en: "Come here!" }
    ]
  },

  // ==========================================================================
  // i. 条件形 (Conditional form) — "if"
  // ==========================================================================
  {
    id: "jouken",
    name: "条件形 Conditional form",
    description:
      "The 条件形 (ば-form) expresses a conditional meaning: \"if.\" " +
      "Group 1 verbs shift to the e-row and add ば. It is one of several ways to say \"if\" in Japanese " +
      "(others include たら, と, and なら). The ば-form tends to emphasize a natural or logical consequence.",
    rules: [
      {
        group: "Group 1 (五段)",
        rule: "Change the final u-sound kana to its e-row equivalent, then add ば",
        examples: [
          { dict: "書く (kaku)", conjugated: "書けば (kakeba)", meaning: "if (one) writes" },
          { dict: "飲む (nomu)", conjugated: "飲めば (nomeba)", meaning: "if (one) drinks" },
          { dict: "話す (hanasu)", conjugated: "話せば (hanaseba)", meaning: "if (one) speaks" },
          { dict: "読む (yomu)", conjugated: "読めば (yomeba)", meaning: "if (one) reads" },
          { dict: "行く (iku)", conjugated: "行けば (ikeba)", meaning: "if (one) goes" },
          { dict: "買う (kau)", conjugated: "買えば (kaeba)", meaning: "if (one) buys" }
        ]
      },
      {
        group: "Group 2 (一段)",
        rule: "Remove the final る, then add れば",
        examples: [
          { dict: "食べる (taberu)", conjugated: "食べれば (tabereba)", meaning: "if (one) eats" },
          { dict: "見る (miru)", conjugated: "見れば (mireba)", meaning: "if (one) sees" },
          { dict: "起きる (okiru)", conjugated: "起きれば (okireba)", meaning: "if (one) wakes up" },
          { dict: "寝る (neru)", conjugated: "寝れば (nereba)", meaning: "if (one) sleeps" },
          { dict: "教える (oshieru)", conjugated: "教えれば (oshiereba)", meaning: "if (one) teaches" }
        ]
      },
      {
        group: "Group 3 (irregular)",
        rule: "する → すれば, 来る (くる) → 来れば (くれば)",
        examples: [
          { dict: "する (suru)", conjugated: "すれば (sureba)", meaning: "if (one) does" },
          { dict: "来る (kuru)", conjugated: "来れば (kureba)", meaning: "if (one) comes" },
          { dict: "勉強する (benkyou suru)", conjugated: "勉強すれば (benkyou sureba)", meaning: "if (one) studies" }
        ]
      }
    ],
    usageExamples: [
      { jp: "練習すれば、上手になります。", rm: "Renshuu sureba, jouzu ni narimasu.", en: "If you practice, you'll get better." },
      { jp: "安ければ、買います。", rm: "Yasukereba, kaimasu.", en: "If it's cheap, I'll buy it." },
      { jp: "早く起きれば、朝ごはんを食べられます。", rm: "Hayaku okireba, asagohan o taberaremasu.", en: "If you wake up early, you can eat breakfast." }
    ]
  },

  // ==========================================================================
  // j. 受身形 (Passive form)
  // ==========================================================================
  {
    id: "ukemi",
    name: "受身形 Passive form",
    description:
      "The 受身形 expresses that the subject is affected by someone else's action (\"is done to\"). " +
      "Japanese passive can express both standard passive voice and the \"suffering passive\" (迷惑の受身), " +
      "where the subject is negatively affected by an event. The passive form conjugates like a Group 2 verb.",
    rules: [
      {
        group: "Group 1 (五段)",
        rule: "Change the final u-sound kana to its a-row equivalent, then add れる",
        examples: [
          { dict: "書く (kaku)", conjugated: "書かれる (kakareru)", meaning: "to be written" },
          { dict: "飲む (nomu)", conjugated: "飲まれる (nomareru)", meaning: "to be drunk" },
          { dict: "話す (hanasu)", conjugated: "話される (hanasareru)", meaning: "to be spoken" },
          { dict: "読む (yomu)", conjugated: "読まれる (yomareru)", meaning: "to be read" },
          { dict: "待つ (matsu)", conjugated: "待たれる (matareru)", meaning: "to be waited for" },
          { dict: "買う (kau)", conjugated: "買われる (kawareru)", meaning: "to be bought" }
        ]
      },
      {
        group: "Group 2 (一段)",
        rule: "Remove the final る, then add られる",
        examples: [
          { dict: "食べる (taberu)", conjugated: "食べられる (taberareru)", meaning: "to be eaten" },
          { dict: "見る (miru)", conjugated: "見られる (mirareru)", meaning: "to be seen" },
          { dict: "起きる (okiru)", conjugated: "起きられる (okirareru)", meaning: "to be woken up" },
          { dict: "寝る (neru)", conjugated: "寝られる (nerareru)", meaning: "to be put to sleep" },
          { dict: "教える (oshieru)", conjugated: "教えられる (oshierareru)", meaning: "to be taught" }
        ]
      },
      {
        group: "Group 3 (irregular)",
        rule: "する → される, 来る (くる) → 来られる (こられる)",
        examples: [
          { dict: "する (suru)", conjugated: "される (sareru)", meaning: "to be done" },
          { dict: "来る (kuru)", conjugated: "来られる (korareru)", meaning: "to be come to (visited)" },
          { dict: "勉強する (benkyou suru)", conjugated: "勉強される (benkyou sareru)", meaning: "to be studied" }
        ]
      }
    ],
    usageExamples: [
      { jp: "電車で足を踏まれた。", rm: "Densha de ashi o fumareta.", en: "My foot was stepped on in the train." },
      { jp: "先生に褒められました。", rm: "Sensei ni homeraremashita.", en: "I was praised by the teacher." },
      { jp: "雨に降られて、ずぶ濡れになった。", rm: "Ame ni furarete, zubunure ni natta.", en: "I got caught in the rain and was soaked." }
    ]
  },

  // ==========================================================================
  // k. 使役形 (Causative form)
  // ==========================================================================
  {
    id: "shieki",
    name: "使役形 Causative form",
    description:
      "The 使役形 means \"to make/let someone do something.\" It expresses either coercion or permission, " +
      "depending on context. For example, 食べさせる can mean \"make someone eat\" or \"let someone eat.\" " +
      "The causative form conjugates like a Group 2 verb. There is also a shorter colloquial form for Group 1 verbs (e.g., 書かす instead of 書かせる).",
    rules: [
      {
        group: "Group 1 (五段)",
        rule: "Change the final u-sound kana to its a-row equivalent, then add せる",
        examples: [
          { dict: "書く (kaku)", conjugated: "書かせる (kakaseru)", meaning: "make/let write" },
          { dict: "飲む (nomu)", conjugated: "飲ませる (nomaseru)", meaning: "make/let drink" },
          { dict: "話す (hanasu)", conjugated: "話させる (hanasaseru)", meaning: "make/let speak" },
          { dict: "読む (yomu)", conjugated: "読ませる (yomaseru)", meaning: "make/let read" },
          { dict: "行く (iku)", conjugated: "行かせる (ikaseru)", meaning: "make/let go" },
          { dict: "待つ (matsu)", conjugated: "待たせる (mataseru)", meaning: "make/let wait" },
          { dict: "買う (kau)", conjugated: "買わせる (kawaseru)", meaning: "make/let buy" }
        ]
      },
      {
        group: "Group 2 (一段)",
        rule: "Remove the final る, then add させる",
        examples: [
          { dict: "食べる (taberu)", conjugated: "食べさせる (tabesaseru)", meaning: "make/let eat" },
          { dict: "見る (miru)", conjugated: "見させる (misaseru)", meaning: "make/let see" },
          { dict: "起きる (okiru)", conjugated: "起きさせる (okisaseru)", meaning: "make/let wake up" },
          { dict: "寝る (neru)", conjugated: "寝させる (nesaseru)", meaning: "make/let sleep" },
          { dict: "教える (oshieru)", conjugated: "教えさせる (oshiesaseru)", meaning: "make/let teach" }
        ]
      },
      {
        group: "Group 3 (irregular)",
        rule: "する → させる, 来る (くる) → 来させる (こさせる)",
        examples: [
          { dict: "する (suru)", conjugated: "させる (saseru)", meaning: "make/let do" },
          { dict: "来る (kuru)", conjugated: "来させる (kosaseru)", meaning: "make/let come" },
          { dict: "勉強する (benkyou suru)", conjugated: "勉強させる (benkyou saseru)", meaning: "make/let study" }
        ]
      }
    ],
    usageExamples: [
      { jp: "母は子供に野菜を食べさせます。", rm: "Haha wa kodomo ni yasai o tabesasemasu.", en: "The mother makes the child eat vegetables." },
      { jp: "先生は学生にスピーチをさせました。", rm: "Sensei wa gakusei ni supiichi o sasemashita.", en: "The teacher had the students give speeches." },
      { jp: "好きなことをさせてください。", rm: "Suki na koto o sasete kudasai.", en: "Please let me do what I like." }
    ]
  }
];

// ----------------------------------------------------------------------------
// 3. Conjugation Quizzes
// ----------------------------------------------------------------------------

export const conjugationQuizzes = [

  // ==========================================================================
  // Quiz 1: Conjugate to て-form (15 questions)
  // ==========================================================================
  {
    title: "Conjugate to て-form",
    questions: [
      {
        word: "書く",
        instruction: "What is the て-form?",
        answer: "書いて",
        options: ["書いて", "書って", "書して", "書きて"]
      },
      {
        word: "飲む",
        instruction: "What is the て-form?",
        answer: "飲んで",
        options: ["飲んで", "飲みて", "飲して", "飲って"]
      },
      {
        word: "話す",
        instruction: "What is the て-form?",
        answer: "話して",
        options: ["話して", "話いて", "話って", "話ちて"]
      },
      {
        word: "食べる",
        instruction: "What is the て-form?",
        answer: "食べて",
        options: ["食べて", "食べって", "食べいて", "食べして"]
      },
      {
        word: "行く",
        instruction: "What is the て-form?",
        answer: "行って",
        options: ["行って", "行いて", "行きて", "行して"]
      },
      {
        word: "泳ぐ",
        instruction: "What is the て-form?",
        answer: "泳いで",
        options: ["泳いで", "泳ぎて", "泳して", "泳って"]
      },
      {
        word: "待つ",
        instruction: "What is the て-form?",
        answer: "待って",
        options: ["待って", "待いて", "待ちて", "待して"]
      },
      {
        word: "死ぬ",
        instruction: "What is the て-form?",
        answer: "死んで",
        options: ["死んで", "死にて", "死って", "死して"]
      },
      {
        word: "遊ぶ",
        instruction: "What is the て-form?",
        answer: "遊んで",
        options: ["遊んで", "遊びて", "遊って", "遊いで"]
      },
      {
        word: "買う",
        instruction: "What is the て-form?",
        answer: "買って",
        options: ["買って", "買うて", "買いて", "買わて"]
      },
      {
        word: "見る",
        instruction: "What is the て-form?",
        answer: "見て",
        options: ["見て", "見って", "見いて", "見りて"]
      },
      {
        word: "する",
        instruction: "What is the て-form?",
        answer: "して",
        options: ["して", "すって", "すて", "するて"]
      },
      {
        word: "来る",
        instruction: "What is the て-form?",
        answer: "来て",
        options: ["来て", "来って", "来りて", "来るて"]
      },
      {
        word: "読む",
        instruction: "What is the て-form?",
        answer: "読んで",
        options: ["読んで", "読みて", "読いて", "読って"]
      },
      {
        word: "起きる",
        instruction: "What is the て-form?",
        answer: "起きて",
        options: ["起きて", "起きって", "起きいて", "起きして"]
      }
    ]
  },

  // ==========================================================================
  // Quiz 2: Conjugate to ない-form (12 questions)
  // ==========================================================================
  {
    title: "Conjugate to ない-form",
    questions: [
      {
        word: "飲む",
        instruction: "What is the ない-form?",
        answer: "飲まない",
        options: ["飲まない", "飲みない", "飲むない", "飲もない"]
      },
      {
        word: "書く",
        instruction: "What is the ない-form?",
        answer: "書かない",
        options: ["書かない", "書きない", "書くない", "書けない"]
      },
      {
        word: "食べる",
        instruction: "What is the ない-form?",
        answer: "食べない",
        options: ["食べない", "食べらない", "食ばない", "食べるない"]
      },
      {
        word: "行く",
        instruction: "What is the ない-form?",
        answer: "行かない",
        options: ["行かない", "行きない", "行くない", "行けない"]
      },
      {
        word: "する",
        instruction: "What is the ない-form?",
        answer: "しない",
        options: ["しない", "すない", "するない", "さない"]
      },
      {
        word: "来る",
        instruction: "What is the ない-form?",
        answer: "来ない",
        options: ["来ない", "来るない", "来りない", "来らない"]
      },
      {
        word: "話す",
        instruction: "What is the ない-form?",
        answer: "話さない",
        options: ["話さない", "話しない", "話すない", "話せない"]
      },
      {
        word: "見る",
        instruction: "What is the ない-form?",
        answer: "見ない",
        options: ["見ない", "見るない", "見らない", "見りない"]
      },
      {
        word: "買う",
        instruction: "What is the ない-form?",
        answer: "買わない",
        options: ["買わない", "買あない", "買うない", "買いない"]
      },
      {
        word: "泳ぐ",
        instruction: "What is the ない-form?",
        answer: "泳がない",
        options: ["泳がない", "泳ぎない", "泳ぐない", "泳げない"]
      },
      {
        word: "待つ",
        instruction: "What is the ない-form?",
        answer: "待たない",
        options: ["待たない", "待ちない", "待つない", "待てない"]
      },
      {
        word: "寝る",
        instruction: "What is the ない-form?",
        answer: "寝ない",
        options: ["寝ない", "寝るない", "寝らない", "寝りない"]
      }
    ]
  },

  // ==========================================================================
  // Quiz 3: Identify the conjugation (12 questions)
  // ==========================================================================
  {
    title: "Identify the conjugation",
    questions: [
      {
        word: "食べられる",
        instruction: "What form is this?",
        answer: "Potential form",
        options: ["Potential form", "Passive form", "Causative form", "Te-form"]
      },
      {
        word: "書いて",
        instruction: "What form is this?",
        answer: "Te-form",
        options: ["Te-form", "Ta-form", "Nai-form", "Masu-form"]
      },
      {
        word: "飲ませる",
        instruction: "What form is this?",
        answer: "Causative form",
        options: ["Causative form", "Passive form", "Potential form", "Conditional form"]
      },
      {
        word: "話された",
        instruction: "What form is this?",
        answer: "Passive form",
        options: ["Passive form", "Causative form", "Potential form", "Imperative form"]
      },
      {
        word: "行こう",
        instruction: "What form is this?",
        answer: "Volitional form",
        options: ["Volitional form", "Imperative form", "Conditional form", "Potential form"]
      },
      {
        word: "読めば",
        instruction: "What form is this?",
        answer: "Conditional form",
        options: ["Conditional form", "Potential form", "Volitional form", "Passive form"]
      },
      {
        word: "見ろ",
        instruction: "What form is this?",
        answer: "Imperative form",
        options: ["Imperative form", "Volitional form", "Te-form", "Dictionary form"]
      },
      {
        word: "泳いだ",
        instruction: "What form is this?",
        answer: "Ta-form",
        options: ["Ta-form", "Te-form", "Nai-form", "Masu-form"]
      },
      {
        word: "起きない",
        instruction: "What form is this?",
        answer: "Nai-form",
        options: ["Nai-form", "Potential form", "Passive form", "Te-form"]
      },
      {
        word: "来させる",
        instruction: "What form is this?",
        answer: "Causative form",
        options: ["Causative form", "Passive form", "Potential form", "Conditional form"]
      },
      {
        word: "話します",
        instruction: "What form is this?",
        answer: "Masu-form",
        options: ["Masu-form", "Dictionary form", "Te-form", "Conditional form"]
      },
      {
        word: "書ける",
        instruction: "What form is this?",
        answer: "Potential form",
        options: ["Potential form", "Conditional form", "Passive form", "Imperative form"]
      }
    ]
  }
];
