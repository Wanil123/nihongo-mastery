// ============================================================================
// JAPANESE VERB CONJUGATION (活用形 かつようけい) - Complete Reference & Quizzes
// Covers all major conjugation forms for Group 1 (五段 ごだん), Group 2 (一段 いちだん),
// and Group 3 (irregular) verbs
// ============================================================================

// ----------------------------------------------------------------------------
// 1. Introduction
// ----------------------------------------------------------------------------

export const conjugationIntro = {
  title: "活用形 (かつようけい) Conjugation Forms",
  description:
    "Japanese verbs change their endings to express tense, politeness, negation, ability, and much more. " +
    "Unlike English, Japanese verbs do not conjugate for person or number — the same form is used whether the subject is " +
    "\"I,\" \"you,\" or \"they.\" Instead, conjugation revolves around three verb groups: " +
    "Group 1 (五段動詞 (ごだんどうし) godan-doushi) where the final kana changes across the five vowel rows, " +
    "Group 2 (一段動詞 (いちだんどうし) ichidan-doushi) where you simply drop the final る and attach a suffix, " +
    "and Group 3 (irregular verbs) consisting of する and 来 (く) る, which follow unique patterns. " +
    "Mastering these conjugation forms is the key to fluency, as nearly every Japanese sentence depends on a correctly conjugated verb.",
  tips: [
    "Learn the three verb groups first. Knowing which group a verb belongs to determines every conjugation.",
    "Group 2 verbs always end in -iru or -eru, but not all -iru/-eru verbs are Group 2 (e.g., 帰 (かえ) る kaeru is Group 1). When in doubt, check a dictionary.",
    "Group 1 verbs follow predictable vowel-row shifts: u→a (nai), u→i (masu), u→e (conditional), u→o (volitional).",
    "Start with ます形 (けい), て形 (けい), and ない形 (けい) — these three forms appear in the vast majority of everyday conversations.",
    "Practice conjugation with verbs you already know from vocabulary study. Familiar words make the patterns stick faster.",
    "The て-form is the foundation for many grammar structures (ている, てください, てもいい, etc.), so master it early.",
    "Irregular verbs する and 来 (く) る simply need to be memorized — there are only two of them, so it is manageable."
  ]
};

// ----------------------------------------------------------------------------
// 2. Conjugation Forms
// ----------------------------------------------------------------------------

export const conjugationForms = [

  // ==========================================================================
  // a. ます形 (けい) (Masu-form) — Polite form
  // ==========================================================================
  {
    id: "masu",
    name: "ます形 (けい) Masu-form",
    description:
      "The ます形 (けい) is the standard polite verb form used in everyday formal conversation. " +
      "It is the first conjugation most learners encounter and is appropriate for speaking with strangers, colleagues, and elders. " +
      "The negative is ません, past is ました, and negative past is ませんでした.",
    rules: [
      {
        group: "Group 1 (五段 (ごだん))",
        rule: "Change the final u-sound kana to its i-row equivalent, then add ます",
        examples: [
          { dict: "書 (か) く (kaku)", conjugated: "書 (か) きます (kakimasu)", meaning: "to write" },
          { dict: "飲 (の) む (nomu)", conjugated: "飲 (の) みます (nomimasu)", meaning: "to drink" },
          { dict: "話 (はな) す (hanasu)", conjugated: "話 (はな) します (hanashimasu)", meaning: "to speak" },
          { dict: "読 (よ) む (yomu)", conjugated: "読 (よ) みます (yomimasu)", meaning: "to read" },
          { dict: "買 (か) う (kau)", conjugated: "買 (か) います (kaimasu)", meaning: "to buy" }
        ]
      },
      {
        group: "Group 2 (一段 (いちだん))",
        rule: "Remove the final る, then add ます",
        examples: [
          { dict: "食 (た) べる (taberu)", conjugated: "食 (た) べます (tabemasu)", meaning: "to eat" },
          { dict: "見 (み) る (miru)", conjugated: "見 (み) ます (mimasu)", meaning: "to see / watch" },
          { dict: "起 (お) きる (okiru)", conjugated: "起 (お) きます (okimasu)", meaning: "to wake up" },
          { dict: "寝 (ね) る (neru)", conjugated: "寝 (ね) ます (nemasu)", meaning: "to sleep" },
          { dict: "教 (おし) える (oshieru)", conjugated: "教 (おし) えます (oshiemasu)", meaning: "to teach" }
        ]
      },
      {
        group: "Group 3 (irregular)",
        rule: "する → します, 来 (く) る → 来 (き) ます",
        examples: [
          { dict: "する (suru)", conjugated: "します (shimasu)", meaning: "to do" },
          { dict: "来 (く) る (kuru)", conjugated: "来 (き) ます (kimasu)", meaning: "to come" },
          { dict: "勉強 (べんきょう) する (benkyou suru)", conjugated: "勉強 (べんきょう) します (benkyou shimasu)", meaning: "to study" }
        ]
      }
    ],
    usageExamples: [
      { jp: "毎日 (まいにち) コーヒーを飲 (の) みます。", rm: "Mainichi koohii o nomimasu.", en: "I drink coffee every day." },
      { jp: "明日 (あした) 友達 (ともだち) が来 (き) ます。", rm: "Ashita tomodachi ga kimasu.", en: "My friend will come tomorrow." },
      { jp: "日本語 (にほんご) を話 (はな) しますか。", rm: "Nihongo o hanashimasu ka.", en: "Do you speak Japanese?" }
    ]
  },

  // ==========================================================================
  // b. て形 (けい) (Te-form) — Connecting form
  // ==========================================================================
  {
    id: "te",
    name: "て形 (けい) Te-form",
    description:
      "The て形 (けい) is one of the most versatile and important conjugation forms. " +
      "It is used to connect sentences, make requests (てください), describe ongoing actions (ている), ask permission (てもいい), and much more. " +
      "Group 1 verbs follow the \"te-form song\" pattern based on the final kana of the dictionary form.",
    rules: [
      {
        group: "Group 1 (五段 (ごだん))",
        rule: "Depends on the final kana: く→いて, ぐ→いで, す→して, む/ぶ/ぬ→んで, つ/る/う→って. Exception: 行 (い) く→行 (い) って",
        examples: [
          { dict: "書 (か) く (kaku)", conjugated: "書 (か) いて (kaite)", meaning: "to write" },
          { dict: "泳 (およ) ぐ (oyogu)", conjugated: "泳 (およ) いで (oyoide)", meaning: "to swim" },
          { dict: "話 (はな) す (hanasu)", conjugated: "話 (はな) して (hanashite)", meaning: "to speak" },
          { dict: "飲 (の) む (nomu)", conjugated: "飲 (の) んで (nonde)", meaning: "to drink" },
          { dict: "死 (し) ぬ (shinu)", conjugated: "死 (し) んで (shinde)", meaning: "to die" },
          { dict: "遊 (あそ) ぶ (asobu)", conjugated: "遊 (あそ) んで (asonde)", meaning: "to play" },
          { dict: "待 (ま) つ (matsu)", conjugated: "待 (ま) って (matte)", meaning: "to wait" },
          { dict: "読 (よ) む (yomu)", conjugated: "読 (よ) んで (yonde)", meaning: "to read" },
          { dict: "買 (か) う (kau)", conjugated: "買 (か) って (katte)", meaning: "to buy" },
          { dict: "行 (い) く (iku)", conjugated: "行 (い) って (itte)", meaning: "to go (exception)" }
        ]
      },
      {
        group: "Group 2 (一段 (いちだん))",
        rule: "Remove the final る, then add て",
        examples: [
          { dict: "食 (た) べる (taberu)", conjugated: "食 (た) べて (tabete)", meaning: "to eat" },
          { dict: "見 (み) る (miru)", conjugated: "見 (み) て (mite)", meaning: "to see / watch" },
          { dict: "起 (お) きる (okiru)", conjugated: "起 (お) きて (okite)", meaning: "to wake up" },
          { dict: "寝 (ね) る (neru)", conjugated: "寝 (ね) て (nete)", meaning: "to sleep" },
          { dict: "教 (おし) える (oshieru)", conjugated: "教 (おし) えて (oshiete)", meaning: "to teach" }
        ]
      },
      {
        group: "Group 3 (irregular)",
        rule: "する → して, 来 (く) る → 来 (き) て",
        examples: [
          { dict: "する (suru)", conjugated: "して (shite)", meaning: "to do" },
          { dict: "来 (く) る (kuru)", conjugated: "来 (き) て (kite)", meaning: "to come" },
          { dict: "勉強 (べんきょう) する (benkyou suru)", conjugated: "勉強 (べんきょう) して (benkyou shite)", meaning: "to study" }
        ]
      }
    ],
    usageExamples: [
      { jp: "ここに名前 (なまえ) を書 (か) いてください。", rm: "Koko ni namae o kaite kudasai.", en: "Please write your name here." },
      { jp: "今 (いま) テレビを見 (み) ています。", rm: "Ima terebi o mite imasu.", en: "I am watching TV right now." },
      { jp: "写真 (しゃしん) を撮 (と) ってもいいですか。", rm: "Shashin o totte mo ii desu ka.", en: "May I take a photo?" }
    ]
  },

  // ==========================================================================
  // c. た形 (けい) (Ta-form) — Past tense (plain)
  // ==========================================================================
  {
    id: "ta",
    name: "た形 (けい) Ta-form",
    description:
      "The た形 (けい) is the plain past tense form. It follows exactly the same sound-change rules as the て形 (けい), " +
      "but replaces て with た (and で with だ). It is used in casual speech for past tense, " +
      "and also appears in grammar patterns like たことがある (have experienced) and たほうがいい (you should).",
    rules: [
      {
        group: "Group 1 (五段 (ごだん))",
        rule: "Same pattern as て形 (けい) but with た/だ: く→いた, ぐ→いだ, す→した, む/ぶ/ぬ→んだ, つ/る/う→った. Exception: 行 (い) く→行 (い) った",
        examples: [
          { dict: "書 (か) く (kaku)", conjugated: "書 (か) いた (kaita)", meaning: "to write" },
          { dict: "泳 (およ) ぐ (oyogu)", conjugated: "泳 (およ) いだ (oyoida)", meaning: "to swim" },
          { dict: "話 (はな) す (hanasu)", conjugated: "話 (はな) した (hanashita)", meaning: "to speak" },
          { dict: "飲 (の) む (nomu)", conjugated: "飲 (の) んだ (nonda)", meaning: "to drink" },
          { dict: "遊 (あそ) ぶ (asobu)", conjugated: "遊 (あそ) んだ (asonda)", meaning: "to play" },
          { dict: "待 (ま) つ (matsu)", conjugated: "待 (ま) った (matta)", meaning: "to wait" },
          { dict: "買 (か) う (kau)", conjugated: "買 (か) った (katta)", meaning: "to buy" },
          { dict: "行 (い) く (iku)", conjugated: "行 (い) った (itta)", meaning: "to go (exception)" }
        ]
      },
      {
        group: "Group 2 (一段 (いちだん))",
        rule: "Remove the final る, then add た",
        examples: [
          { dict: "食 (た) べる (taberu)", conjugated: "食 (た) べた (tabeta)", meaning: "to eat" },
          { dict: "見 (み) る (miru)", conjugated: "見 (み) た (mita)", meaning: "to see / watch" },
          { dict: "起 (お) きる (okiru)", conjugated: "起 (お) きた (okita)", meaning: "to wake up" },
          { dict: "寝 (ね) る (neru)", conjugated: "寝 (ね) た (neta)", meaning: "to sleep" },
          { dict: "教 (おし) える (oshieru)", conjugated: "教 (おし) えた (oshieta)", meaning: "to teach" }
        ]
      },
      {
        group: "Group 3 (irregular)",
        rule: "する → した, 来 (く) る → 来 (き) た",
        examples: [
          { dict: "する (suru)", conjugated: "した (shita)", meaning: "to do" },
          { dict: "来 (く) る (kuru)", conjugated: "来 (き) た (kita)", meaning: "to come" },
          { dict: "勉強 (べんきょう) する (benkyou suru)", conjugated: "勉強 (べんきょう) した (benkyou shita)", meaning: "to study" }
        ]
      }
    ],
    usageExamples: [
      { jp: "昨日 (きのう) 映画 (えいが) を見 (み) た。", rm: "Kinou eiga o mita.", en: "I watched a movie yesterday." },
      { jp: "日本 (にほん) に行 (い) ったことがありますか。", rm: "Nihon ni itta koto ga arimasu ka.", en: "Have you ever been to Japan?" },
      { jp: "薬 (くすり) を飲 (の) んだほうがいいですよ。", rm: "Kusuri o nonda hou ga ii desu yo.", en: "You should take medicine." }
    ]
  },

  // ==========================================================================
  // d. ない形 (けい) (Nai-form) — Negative (plain)
  // ==========================================================================
  {
    id: "nai",
    name: "ない形 (けい) Nai-form",
    description:
      "The ない形 (けい) is the plain negative form, meaning \"do not\" or \"does not.\" " +
      "Group 1 verbs shift the final kana to the a-row before adding ない. " +
      "It is used in casual speech and also appears in patterns like ないでください (please don't), なければならない (must), and ないほうがいい (you shouldn't).",
    rules: [
      {
        group: "Group 1 (五段 (ごだん))",
        rule: "Change the final u-sound kana to its a-row equivalent, then add ない. Special case: verbs ending in う → わない (not あない)",
        examples: [
          { dict: "書 (か) く (kaku)", conjugated: "書 (か) かない (kakanai)", meaning: "to write" },
          { dict: "飲 (の) む (nomu)", conjugated: "飲 (の) まない (nomanai)", meaning: "to drink" },
          { dict: "話 (はな) す (hanasu)", conjugated: "話 (はな) さない (hanasanai)", meaning: "to speak" },
          { dict: "読 (よ) む (yomu)", conjugated: "読 (よ) まない (yomanai)", meaning: "to read" },
          { dict: "行 (い) く (iku)", conjugated: "行 (い) かない (ikanai)", meaning: "to go" },
          { dict: "泳 (およ) ぐ (oyogu)", conjugated: "泳 (およ) がない (oyoganai)", meaning: "to swim" },
          { dict: "待 (ま) つ (matsu)", conjugated: "待 (ま) たない (matanai)", meaning: "to wait" },
          { dict: "死 (し) ぬ (shinu)", conjugated: "死 (し) なない (shinanai)", meaning: "to die" },
          { dict: "遊 (あそ) ぶ (asobu)", conjugated: "遊 (あそ) ばない (asobanai)", meaning: "to play" },
          { dict: "買 (か) う (kau)", conjugated: "買 (か) わない (kawanai)", meaning: "to buy" }
        ]
      },
      {
        group: "Group 2 (一段 (いちだん))",
        rule: "Remove the final る, then add ない",
        examples: [
          { dict: "食 (た) べる (taberu)", conjugated: "食 (た) べない (tabenai)", meaning: "to eat" },
          { dict: "見 (み) る (miru)", conjugated: "見 (み) ない (minai)", meaning: "to see / watch" },
          { dict: "起 (お) きる (okiru)", conjugated: "起 (お) きない (okinai)", meaning: "to wake up" },
          { dict: "寝 (ね) る (neru)", conjugated: "寝 (ね) ない (nenai)", meaning: "to sleep" },
          { dict: "教 (おし) える (oshieru)", conjugated: "教 (おし) えない (oshienai)", meaning: "to teach" }
        ]
      },
      {
        group: "Group 3 (irregular)",
        rule: "する → しない, 来 (く) る → 来 (こ) ない",
        examples: [
          { dict: "する (suru)", conjugated: "しない (shinai)", meaning: "to do" },
          { dict: "来 (く) る (kuru)", conjugated: "来 (こ) ない (konai)", meaning: "to come" },
          { dict: "勉強 (べんきょう) する (benkyou suru)", conjugated: "勉強 (べんきょう) しない (benkyou shinai)", meaning: "to study" }
        ]
      }
    ],
    usageExamples: [
      { jp: "朝 (あさ) ごはんを食 (た) べないの？", rm: "Asagohan o tabenai no?", en: "You're not eating breakfast?" },
      { jp: "ここで写真 (しゃしん) を撮 (と) らないでください。", rm: "Koko de shashin o toranaide kudasai.", en: "Please don't take photos here." },
      { jp: "宿題 (しゅくだい) をしなければなりません。", rm: "Shukudai o shinakereba narimasen.", en: "I must do my homework." }
    ]
  },

  // ==========================================================================
  // e. 辞書形 (じしょけい) (Dictionary form)
  // ==========================================================================
  {
    id: "jisho",
    name: "辞書形 (じしょけい) Dictionary form",
    description:
      "The 辞書形 (じしょけい) is the base form of the verb as it appears in dictionaries. " +
      "It is also the plain present/future affirmative form. All Group 1 verbs end in an u-sound kana, " +
      "all Group 2 verbs end in る, and the two Group 3 verbs are する and 来 (く) る. " +
      "It is used in casual speech and as the building block for many grammar patterns such as ことができる (can do) and つもり (intend to).",
    rules: [
      {
        group: "Group 1 (五段 (ごだん))",
        rule: "The dictionary form ends in an u-row kana: う, く, ぐ, す, つ, ぬ, ぶ, む, る",
        examples: [
          { dict: "書 (か) く (kaku)", conjugated: "書 (か) く (kaku)", meaning: "to write" },
          { dict: "飲 (の) む (nomu)", conjugated: "飲 (の) む (nomu)", meaning: "to drink" },
          { dict: "話 (はな) す (hanasu)", conjugated: "話 (はな) す (hanasu)", meaning: "to speak" },
          { dict: "行 (い) く (iku)", conjugated: "行 (い) く (iku)", meaning: "to go" },
          { dict: "買 (か) う (kau)", conjugated: "買 (か) う (kau)", meaning: "to buy" }
        ]
      },
      {
        group: "Group 2 (一段 (いちだん))",
        rule: "The dictionary form always ends in る, preceded by an i-sound or e-sound vowel",
        examples: [
          { dict: "食 (た) べる (taberu)", conjugated: "食 (た) べる (taberu)", meaning: "to eat" },
          { dict: "見 (み) る (miru)", conjugated: "見 (み) る (miru)", meaning: "to see / watch" },
          { dict: "起 (お) きる (okiru)", conjugated: "起 (お) きる (okiru)", meaning: "to wake up" },
          { dict: "寝 (ね) る (neru)", conjugated: "寝 (ね) る (neru)", meaning: "to sleep" },
          { dict: "教 (おし) える (oshieru)", conjugated: "教 (おし) える (oshieru)", meaning: "to teach" }
        ]
      },
      {
        group: "Group 3 (irregular)",
        rule: "する and 来 (く) る are the two irregular verbs in their base form",
        examples: [
          { dict: "する (suru)", conjugated: "する (suru)", meaning: "to do" },
          { dict: "来 (く) る (kuru)", conjugated: "来 (く) る (kuru)", meaning: "to come" },
          { dict: "勉強 (べんきょう) する (benkyou suru)", conjugated: "勉強 (べんきょう) する (benkyou suru)", meaning: "to study" }
        ]
      }
    ],
    usageExamples: [
      { jp: "日本語 (にほんご) を話 (はな) すことができます。", rm: "Nihongo o hanasu koto ga dekimasu.", en: "I can speak Japanese." },
      { jp: "明日 (あした) 行 (い) くつもりです。", rm: "Ashita iku tsumori desu.", en: "I intend to go tomorrow." },
      { jp: "映画 (えいが) を見 (み) る前 (まえ) に、ご飯 (はん) を食 (た) べよう。", rm: "Eiga o miru mae ni, gohan o tabeyou.", en: "Let's eat before watching the movie." }
    ]
  },

  // ==========================================================================
  // f. 可能形 (かのうけい) (Potential form) — "can do"
  // ==========================================================================
  {
    id: "kanou",
    name: "可能形 (かのうけい) Potential form",
    description:
      "The 可能形 (かのうけい) expresses the ability or possibility to do something, equivalent to \"can\" or \"be able to\" in English. " +
      "Group 1 verbs shift to the e-row and add る, while Group 2 verbs add られる (though in casual speech, the ら is often dropped: 食 (た) べれる). " +
      "The potential form makes the verb behave like a Group 2 verb for further conjugation.",
    rules: [
      {
        group: "Group 1 (五段 (ごだん))",
        rule: "Change the final u-sound kana to its e-row equivalent, then add る",
        examples: [
          { dict: "書 (か) く (kaku)", conjugated: "書 (か) ける (kakeru)", meaning: "can write" },
          { dict: "飲 (の) む (nomu)", conjugated: "飲 (の) める (nomeru)", meaning: "can drink" },
          { dict: "話 (はな) す (hanasu)", conjugated: "話 (はな) せる (hanaseru)", meaning: "can speak" },
          { dict: "読 (よ) む (yomu)", conjugated: "読 (よ) める (yomeru)", meaning: "can read" },
          { dict: "泳 (およ) ぐ (oyogu)", conjugated: "泳 (およ) げる (oyogeru)", meaning: "can swim" },
          { dict: "買 (か) う (kau)", conjugated: "買 (か) える (kaeru)", meaning: "can buy" }
        ]
      },
      {
        group: "Group 2 (一段 (いちだん))",
        rule: "Remove the final る, then add られる (colloquially れる)",
        examples: [
          { dict: "食 (た) べる (taberu)", conjugated: "食 (た) べられる (taberareru)", meaning: "can eat" },
          { dict: "見 (み) る (miru)", conjugated: "見 (み) られる (mirareru)", meaning: "can see" },
          { dict: "起 (お) きる (okiru)", conjugated: "起 (お) きられる (okirareru)", meaning: "can wake up" },
          { dict: "寝 (ね) る (neru)", conjugated: "寝 (ね) られる (nerareru)", meaning: "can sleep" },
          { dict: "教 (おし) える (oshieru)", conjugated: "教 (おし) えられる (oshierareru)", meaning: "can teach" }
        ]
      },
      {
        group: "Group 3 (irregular)",
        rule: "する → できる, 来 (く) る → 来 (こ) られる",
        examples: [
          { dict: "する (suru)", conjugated: "できる (dekiru)", meaning: "can do" },
          { dict: "来 (く) る (kuru)", conjugated: "来 (こ) られる (korareru)", meaning: "can come" },
          { dict: "勉強 (べんきょう) する (benkyou suru)", conjugated: "勉強 (べんきょう) できる (benkyou dekiru)", meaning: "can study" }
        ]
      }
    ],
    usageExamples: [
      { jp: "漢字 (かんじ) が読 (よ) めますか。", rm: "Kanji ga yomemasu ka.", en: "Can you read kanji?" },
      { jp: "この川 (かわ) で泳 (およ) げます。", rm: "Kono kawa de oyogemasu.", en: "You can swim in this river." },
      { jp: "明日 (あした) 来 (こ) られますか。", rm: "Ashita koraremasu ka.", en: "Can you come tomorrow?" }
    ]
  },

  // ==========================================================================
  // g. 意志形 (いしけい) (Volitional form) — "let's"
  // ==========================================================================
  {
    id: "ishi",
    name: "意志形 (いしけい) Volitional form",
    description:
      "The 意志形 (いしけい) expresses the speaker's will or intention, and is also used to suggest doing something together (\"let's ...\"). " +
      "The polite equivalent is ましょう. It can also combine with と思 (おも) う to express plans (行 (い) こうと思 (おも) う, \"I'm thinking of going\"). " +
      "Group 1 verbs shift to the o-row and add う.",
    rules: [
      {
        group: "Group 1 (五段 (ごだん))",
        rule: "Change the final u-sound kana to its o-row equivalent, then add う",
        examples: [
          { dict: "書 (か) く (kaku)", conjugated: "書 (か) こう (kakou)", meaning: "let's write" },
          { dict: "飲 (の) む (nomu)", conjugated: "飲 (の) もう (nomou)", meaning: "let's drink" },
          { dict: "話 (はな) す (hanasu)", conjugated: "話 (はな) そう (hanasou)", meaning: "let's talk" },
          { dict: "読 (よ) む (yomu)", conjugated: "読 (よ) もう (yomou)", meaning: "let's read" },
          { dict: "行 (い) く (iku)", conjugated: "行 (い) こう (ikou)", meaning: "let's go" },
          { dict: "買 (か) う (kau)", conjugated: "買 (か) おう (kaou)", meaning: "let's buy" }
        ]
      },
      {
        group: "Group 2 (一段 (いちだん))",
        rule: "Remove the final る, then add よう",
        examples: [
          { dict: "食 (た) べる (taberu)", conjugated: "食 (た) べよう (tabeyou)", meaning: "let's eat" },
          { dict: "見 (み) る (miru)", conjugated: "見 (み) よう (miyou)", meaning: "let's watch" },
          { dict: "起 (お) きる (okiru)", conjugated: "起 (お) きよう (okiyou)", meaning: "let's wake up" },
          { dict: "寝 (ね) る (neru)", conjugated: "寝 (ね) よう (neyou)", meaning: "let's sleep" },
          { dict: "教 (おし) える (oshieru)", conjugated: "教 (おし) えよう (oshieyou)", meaning: "let's teach" }
        ]
      },
      {
        group: "Group 3 (irregular)",
        rule: "する → しよう, 来 (く) る → 来 (こ) よう",
        examples: [
          { dict: "する (suru)", conjugated: "しよう (shiyou)", meaning: "let's do" },
          { dict: "来 (く) る (kuru)", conjugated: "来 (こ) よう (koyou)", meaning: "let's come" },
          { dict: "勉強 (べんきょう) する (benkyou suru)", conjugated: "勉強 (べんきょう) しよう (benkyou shiyou)", meaning: "let's study" }
        ]
      }
    ],
    usageExamples: [
      { jp: "一緒 (いっしょ) に食 (た) べよう！", rm: "Issho ni tabeyou!", en: "Let's eat together!" },
      { jp: "来年 (らいねん) 日本 (にほん) に行 (い) こうと思 (おも) います。", rm: "Rainen Nihon ni ikou to omoimasu.", en: "I'm thinking of going to Japan next year." },
      { jp: "そろそろ寝 (ね) よう。", rm: "Sorosoro neyou.", en: "Let's go to sleep soon." }
    ]
  },

  // ==========================================================================
  // h. 命令形 (めいれいけい) (Imperative form) — Commands
  // ==========================================================================
  {
    id: "meirei",
    name: "命令形 (めいれいけい) Imperative form",
    description:
      "The 命令形 (めいれいけい) is the direct command form. It sounds forceful and is used in urgent situations, " +
      "by superiors to subordinates, in sports cheering, or in masculine casual speech. " +
      "In polite everyday life, てください is preferred. The negative imperative uses the dictionary form + な.",
    rules: [
      {
        group: "Group 1 (五段 (ごだん))",
        rule: "Change the final u-sound kana to its e-row equivalent",
        examples: [
          { dict: "書 (か) く (kaku)", conjugated: "書 (か) け (kake)", meaning: "Write!" },
          { dict: "飲 (の) む (nomu)", conjugated: "飲 (の) め (nome)", meaning: "Drink!" },
          { dict: "話 (はな) す (hanasu)", conjugated: "話 (はな) せ (hanase)", meaning: "Speak!" },
          { dict: "読 (よ) む (yomu)", conjugated: "読 (よ) め (yome)", meaning: "Read!" },
          { dict: "行 (い) く (iku)", conjugated: "行 (い) け (ike)", meaning: "Go!" },
          { dict: "待 (ま) つ (matsu)", conjugated: "待 (ま) て (mate)", meaning: "Wait!" }
        ]
      },
      {
        group: "Group 2 (一段 (いちだん))",
        rule: "Remove the final る, then add ろ (or よ in literary/formal style)",
        examples: [
          { dict: "食 (た) べる (taberu)", conjugated: "食 (た) べろ (tabero)", meaning: "Eat!" },
          { dict: "見 (み) る (miru)", conjugated: "見 (み) ろ (miro)", meaning: "Look!" },
          { dict: "起 (お) きる (okiru)", conjugated: "起 (お) きろ (okiro)", meaning: "Wake up!" },
          { dict: "寝 (ね) る (neru)", conjugated: "寝 (ね) ろ (nero)", meaning: "Sleep!" },
          { dict: "教 (おし) える (oshieru)", conjugated: "教 (おし) えろ (oshiero)", meaning: "Teach!" }
        ]
      },
      {
        group: "Group 3 (irregular)",
        rule: "する → しろ (or せよ in literary style), 来 (く) る → 来 (こ) い",
        examples: [
          { dict: "する (suru)", conjugated: "しろ (shiro)", meaning: "Do it!" },
          { dict: "来 (く) る (kuru)", conjugated: "来 (こ) い (koi)", meaning: "Come!" },
          { dict: "勉強 (べんきょう) する (benkyou suru)", conjugated: "勉強 (べんきょう) しろ (benkyou shiro)", meaning: "Study!" }
        ]
      }
    ],
    usageExamples: [
      { jp: "早 (はや) く走 (はし) れ！", rm: "Hayaku hashire!", en: "Run fast!" },
      { jp: "黙 (だま) れ！", rm: "Damare!", en: "Shut up!" },
      { jp: "こっちに来 (こ) い！", rm: "Kocchi ni koi!", en: "Come here!" }
    ]
  },

  // ==========================================================================
  // i. 条件形 (じょうけんけい) (Conditional form) — "if"
  // ==========================================================================
  {
    id: "jouken",
    name: "条件形 (じょうけんけい) Conditional form",
    description:
      "The 条件形 (じょうけんけい) (ば-form) expresses a conditional meaning: \"if.\" " +
      "Group 1 verbs shift to the e-row and add ば. It is one of several ways to say \"if\" in Japanese " +
      "(others include たら, と, and なら). The ば-form tends to emphasize a natural or logical consequence.",
    rules: [
      {
        group: "Group 1 (五段 (ごだん))",
        rule: "Change the final u-sound kana to its e-row equivalent, then add ば",
        examples: [
          { dict: "書 (か) く (kaku)", conjugated: "書 (か) けば (kakeba)", meaning: "if (one) writes" },
          { dict: "飲 (の) む (nomu)", conjugated: "飲 (の) めば (nomeba)", meaning: "if (one) drinks" },
          { dict: "話 (はな) す (hanasu)", conjugated: "話 (はな) せば (hanaseba)", meaning: "if (one) speaks" },
          { dict: "読 (よ) む (yomu)", conjugated: "読 (よ) めば (yomeba)", meaning: "if (one) reads" },
          { dict: "行 (い) く (iku)", conjugated: "行 (い) けば (ikeba)", meaning: "if (one) goes" },
          { dict: "買 (か) う (kau)", conjugated: "買 (か) えば (kaeba)", meaning: "if (one) buys" }
        ]
      },
      {
        group: "Group 2 (一段 (いちだん))",
        rule: "Remove the final る, then add れば",
        examples: [
          { dict: "食 (た) べる (taberu)", conjugated: "食 (た) べれば (tabereba)", meaning: "if (one) eats" },
          { dict: "見 (み) る (miru)", conjugated: "見 (み) れば (mireba)", meaning: "if (one) sees" },
          { dict: "起 (お) きる (okiru)", conjugated: "起 (お) きれば (okireba)", meaning: "if (one) wakes up" },
          { dict: "寝 (ね) る (neru)", conjugated: "寝 (ね) れば (nereba)", meaning: "if (one) sleeps" },
          { dict: "教 (おし) える (oshieru)", conjugated: "教 (おし) えれば (oshiereba)", meaning: "if (one) teaches" }
        ]
      },
      {
        group: "Group 3 (irregular)",
        rule: "する → すれば, 来 (く) る → 来 (く) れば",
        examples: [
          { dict: "する (suru)", conjugated: "すれば (sureba)", meaning: "if (one) does" },
          { dict: "来 (く) る (kuru)", conjugated: "来 (く) れば (kureba)", meaning: "if (one) comes" },
          { dict: "勉強 (べんきょう) する (benkyou suru)", conjugated: "勉強 (べんきょう) すれば (benkyou sureba)", meaning: "if (one) studies" }
        ]
      }
    ],
    usageExamples: [
      { jp: "練習 (れんしゅう) すれば、上手 (じょうず) になります。", rm: "Renshuu sureba, jouzu ni narimasu.", en: "If you practice, you'll get better." },
      { jp: "安 (やす) ければ、買 (か) います。", rm: "Yasukereba, kaimasu.", en: "If it's cheap, I'll buy it." },
      { jp: "早 (はや) く起 (お) きれば、朝 (あさ) ごはんを食 (た) べられます。", rm: "Hayaku okireba, asagohan o taberaremasu.", en: "If you wake up early, you can eat breakfast." }
    ]
  },

  // ==========================================================================
  // j. 受身形 (うけみけい) (Passive form)
  // ==========================================================================
  {
    id: "ukemi",
    name: "受身形 (うけみけい) Passive form",
    description:
      "The 受身形 (うけみけい) expresses that the subject is affected by someone else's action (\"is done to\"). " +
      "Japanese passive can express both standard passive voice and the \"suffering passive\" (迷惑 (めいわく) の受身 (うけみ)), " +
      "where the subject is negatively affected by an event. The passive form conjugates like a Group 2 verb.",
    rules: [
      {
        group: "Group 1 (五段 (ごだん))",
        rule: "Change the final u-sound kana to its a-row equivalent, then add れる",
        examples: [
          { dict: "書 (か) く (kaku)", conjugated: "書 (か) かれる (kakareru)", meaning: "to be written" },
          { dict: "飲 (の) む (nomu)", conjugated: "飲 (の) まれる (nomareru)", meaning: "to be drunk" },
          { dict: "話 (はな) す (hanasu)", conjugated: "話 (はな) される (hanasareru)", meaning: "to be spoken" },
          { dict: "読 (よ) む (yomu)", conjugated: "読 (よ) まれる (yomareru)", meaning: "to be read" },
          { dict: "待 (ま) つ (matsu)", conjugated: "待 (ま) たれる (matareru)", meaning: "to be waited for" },
          { dict: "買 (か) う (kau)", conjugated: "買 (か) われる (kawareru)", meaning: "to be bought" }
        ]
      },
      {
        group: "Group 2 (一段 (いちだん))",
        rule: "Remove the final る, then add られる",
        examples: [
          { dict: "食 (た) べる (taberu)", conjugated: "食 (た) べられる (taberareru)", meaning: "to be eaten" },
          { dict: "見 (み) る (miru)", conjugated: "見 (み) られる (mirareru)", meaning: "to be seen" },
          { dict: "起 (お) きる (okiru)", conjugated: "起 (お) きられる (okirareru)", meaning: "to be woken up" },
          { dict: "寝 (ね) る (neru)", conjugated: "寝 (ね) られる (nerareru)", meaning: "to be put to sleep" },
          { dict: "教 (おし) える (oshieru)", conjugated: "教 (おし) えられる (oshierareru)", meaning: "to be taught" }
        ]
      },
      {
        group: "Group 3 (irregular)",
        rule: "する → される, 来 (く) る → 来 (こ) られる",
        examples: [
          { dict: "する (suru)", conjugated: "される (sareru)", meaning: "to be done" },
          { dict: "来 (く) る (kuru)", conjugated: "来 (こ) られる (korareru)", meaning: "to be come to (visited)" },
          { dict: "勉強 (べんきょう) する (benkyou suru)", conjugated: "勉強 (べんきょう) される (benkyou sareru)", meaning: "to be studied" }
        ]
      }
    ],
    usageExamples: [
      { jp: "電車 (でんしゃ) で足 (あし) を踏 (ふ) まれた。", rm: "Densha de ashi o fumareta.", en: "My foot was stepped on in the train." },
      { jp: "先生 (せんせい) に褒 (ほ) められました。", rm: "Sensei ni homeraremashita.", en: "I was praised by the teacher." },
      { jp: "雨 (あめ) に降 (ふ) られて、ずぶ濡 (ぬ) れになった。", rm: "Ame ni furarete, zubunure ni natta.", en: "I got caught in the rain and was soaked." }
    ]
  },

  // ==========================================================================
  // k. 使役形 (しえきけい) (Causative form)
  // ==========================================================================
  {
    id: "shieki",
    name: "使役形 (しえきけい) Causative form",
    description:
      "The 使役形 (しえきけい) means \"to make/let someone do something.\" It expresses either coercion or permission, " +
      "depending on context. For example, 食 (た) べさせる can mean \"make someone eat\" or \"let someone eat.\" " +
      "The causative form conjugates like a Group 2 verb. There is also a shorter colloquial form for Group 1 verbs (e.g., 書 (か) かす instead of 書 (か) かせる).",
    rules: [
      {
        group: "Group 1 (五段 (ごだん))",
        rule: "Change the final u-sound kana to its a-row equivalent, then add せる",
        examples: [
          { dict: "書 (か) く (kaku)", conjugated: "書 (か) かせる (kakaseru)", meaning: "make/let write" },
          { dict: "飲 (の) む (nomu)", conjugated: "飲 (の) ませる (nomaseru)", meaning: "make/let drink" },
          { dict: "話 (はな) す (hanasu)", conjugated: "話 (はな) させる (hanasaseru)", meaning: "make/let speak" },
          { dict: "読 (よ) む (yomu)", conjugated: "読 (よ) ませる (yomaseru)", meaning: "make/let read" },
          { dict: "行 (い) く (iku)", conjugated: "行 (い) かせる (ikaseru)", meaning: "make/let go" },
          { dict: "待 (ま) つ (matsu)", conjugated: "待 (ま) たせる (mataseru)", meaning: "make/let wait" },
          { dict: "買 (か) う (kau)", conjugated: "買 (か) わせる (kawaseru)", meaning: "make/let buy" }
        ]
      },
      {
        group: "Group 2 (一段 (いちだん))",
        rule: "Remove the final る, then add させる",
        examples: [
          { dict: "食 (た) べる (taberu)", conjugated: "食 (た) べさせる (tabesaseru)", meaning: "make/let eat" },
          { dict: "見 (み) る (miru)", conjugated: "見 (み) させる (misaseru)", meaning: "make/let see" },
          { dict: "起 (お) きる (okiru)", conjugated: "起 (お) きさせる (okisaseru)", meaning: "make/let wake up" },
          { dict: "寝 (ね) る (neru)", conjugated: "寝 (ね) させる (nesaseru)", meaning: "make/let sleep" },
          { dict: "教 (おし) える (oshieru)", conjugated: "教 (おし) えさせる (oshiesaseru)", meaning: "make/let teach" }
        ]
      },
      {
        group: "Group 3 (irregular)",
        rule: "する → させる, 来 (く) る → 来 (こ) させる",
        examples: [
          { dict: "する (suru)", conjugated: "させる (saseru)", meaning: "make/let do" },
          { dict: "来 (く) る (kuru)", conjugated: "来 (こ) させる (kosaseru)", meaning: "make/let come" },
          { dict: "勉強 (べんきょう) する (benkyou suru)", conjugated: "勉強 (べんきょう) させる (benkyou saseru)", meaning: "make/let study" }
        ]
      }
    ],
    usageExamples: [
      { jp: "母 (はは) は子供 (こども) に野菜 (やさい) を食 (た) べさせます。", rm: "Haha wa kodomo ni yasai o tabesasemasu.", en: "The mother makes the child eat vegetables." },
      { jp: "先生 (せんせい) は学生 (がくせい) にスピーチをさせました。", rm: "Sensei wa gakusei ni supiichi o sasemashita.", en: "The teacher had the students give speeches." },
      { jp: "好 (す) きなことをさせてください。", rm: "Suki na koto o sasete kudasai.", en: "Please let me do what I like." }
    ]
  }
];

// ----------------------------------------------------------------------------
// 3. Conjugation Quizzes
// ----------------------------------------------------------------------------

export const conjugationQuizzes = [

  // ==========================================================================
  // Quiz 1: Conjugate to て形 (けい) (15 questions)
  // ==========================================================================
  {
    title: "Conjugate to て形 (けい)",
    questions: [
      {
        word: "書 (か) く",
        instruction: "What is the て-form?",
        answer: "書 (か) いて",
        options: ["書 (か) いて", "書 (か) って", "書 (か) して", "書 (か) きて"]
      },
      {
        word: "飲 (の) む",
        instruction: "What is the て-form?",
        answer: "飲 (の) んで",
        options: ["飲 (の) んで", "飲 (の) みて", "飲 (の) して", "飲 (の) って"]
      },
      {
        word: "話 (はな) す",
        instruction: "What is the て-form?",
        answer: "話 (はな) して",
        options: ["話 (はな) して", "話 (はな) いて", "話 (はな) って", "話 (はな) ちて"]
      },
      {
        word: "食 (た) べる",
        instruction: "What is the て-form?",
        answer: "食 (た) べて",
        options: ["食 (た) べて", "食 (た) べって", "食 (た) べいて", "食 (た) べして"]
      },
      {
        word: "行 (い) く",
        instruction: "What is the て-form?",
        answer: "行 (い) って",
        options: ["行 (い) って", "行 (い) いて", "行 (い) きて", "行 (い) して"]
      },
      {
        word: "泳 (およ) ぐ",
        instruction: "What is the て-form?",
        answer: "泳 (およ) いで",
        options: ["泳 (およ) いで", "泳 (およ) ぎて", "泳 (およ) して", "泳 (およ) って"]
      },
      {
        word: "待 (ま) つ",
        instruction: "What is the て-form?",
        answer: "待 (ま) って",
        options: ["待 (ま) って", "待 (ま) いて", "待 (ま) ちて", "待 (ま) して"]
      },
      {
        word: "死 (し) ぬ",
        instruction: "What is the て-form?",
        answer: "死 (し) んで",
        options: ["死 (し) んで", "死 (し) にて", "死 (し) って", "死 (し) して"]
      },
      {
        word: "遊 (あそ) ぶ",
        instruction: "What is the て-form?",
        answer: "遊 (あそ) んで",
        options: ["遊 (あそ) んで", "遊 (あそ) びて", "遊 (あそ) って", "遊 (あそ) いで"]
      },
      {
        word: "買 (か) う",
        instruction: "What is the て-form?",
        answer: "買 (か) って",
        options: ["買 (か) って", "買 (か) うて", "買 (か) いて", "買 (か) わて"]
      },
      {
        word: "見 (み) る",
        instruction: "What is the て-form?",
        answer: "見 (み) て",
        options: ["見 (み) て", "見 (み) って", "見 (み) いて", "見 (み) りて"]
      },
      {
        word: "する",
        instruction: "What is the て-form?",
        answer: "して",
        options: ["して", "すって", "すて", "するて"]
      },
      {
        word: "来 (く) る",
        instruction: "What is the て-form?",
        answer: "来 (き) て",
        options: ["来 (き) て", "来 (く) って", "来 (く) りて", "来 (く) るて"]
      },
      {
        word: "読 (よ) む",
        instruction: "What is the て-form?",
        answer: "読 (よ) んで",
        options: ["読 (よ) んで", "読 (よ) みて", "読 (よ) いて", "読 (よ) って"]
      },
      {
        word: "起 (お) きる",
        instruction: "What is the て-form?",
        answer: "起 (お) きて",
        options: ["起 (お) きて", "起 (お) きって", "起 (お) きいて", "起 (お) きして"]
      }
    ]
  },

  // ==========================================================================
  // Quiz 2: Conjugate to ない形 (けい) (12 questions)
  // ==========================================================================
  {
    title: "Conjugate to ない形 (けい)",
    questions: [
      {
        word: "飲 (の) む",
        instruction: "What is the ない-form?",
        answer: "飲 (の) まない",
        options: ["飲 (の) まない", "飲 (の) みない", "飲 (の) むない", "飲 (の) もない"]
      },
      {
        word: "書 (か) く",
        instruction: "What is the ない-form?",
        answer: "書 (か) かない",
        options: ["書 (か) かない", "書 (か) きない", "書 (か) くない", "書 (か) けない"]
      },
      {
        word: "食 (た) べる",
        instruction: "What is the ない-form?",
        answer: "食 (た) べない",
        options: ["食 (た) べない", "食 (た) べらない", "食 (た) ばない", "食 (た) べるない"]
      },
      {
        word: "行 (い) く",
        instruction: "What is the ない-form?",
        answer: "行 (い) かない",
        options: ["行 (い) かない", "行 (い) きない", "行 (い) くない", "行 (い) けない"]
      },
      {
        word: "する",
        instruction: "What is the ない-form?",
        answer: "しない",
        options: ["しない", "すない", "するない", "さない"]
      },
      {
        word: "来 (く) る",
        instruction: "What is the ない-form?",
        answer: "来 (こ) ない",
        options: ["来 (こ) ない", "来 (く) るない", "来 (く) りない", "来 (く) らない"]
      },
      {
        word: "話 (はな) す",
        instruction: "What is the ない-form?",
        answer: "話 (はな) さない",
        options: ["話 (はな) さない", "話 (はな) しない", "話 (はな) すない", "話 (はな) せない"]
      },
      {
        word: "見 (み) る",
        instruction: "What is the ない-form?",
        answer: "見 (み) ない",
        options: ["見 (み) ない", "見 (み) るない", "見 (み) らない", "見 (み) りない"]
      },
      {
        word: "買 (か) う",
        instruction: "What is the ない-form?",
        answer: "買 (か) わない",
        options: ["買 (か) わない", "買 (か) あない", "買 (か) うない", "買 (か) いない"]
      },
      {
        word: "泳 (およ) ぐ",
        instruction: "What is the ない-form?",
        answer: "泳 (およ) がない",
        options: ["泳 (およ) がない", "泳 (およ) ぎない", "泳 (およ) ぐない", "泳 (およ) げない"]
      },
      {
        word: "待 (ま) つ",
        instruction: "What is the ない-form?",
        answer: "待 (ま) たない",
        options: ["待 (ま) たない", "待 (ま) ちない", "待 (ま) つない", "待 (ま) てない"]
      },
      {
        word: "寝 (ね) る",
        instruction: "What is the ない-form?",
        answer: "寝 (ね) ない",
        options: ["寝 (ね) ない", "寝 (ね) るない", "寝 (ね) らない", "寝 (ね) りない"]
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
        word: "食 (た) べられる",
        instruction: "What form is this?",
        answer: "Potential form",
        options: ["Potential form", "Passive form", "Causative form", "Te-form"]
      },
      {
        word: "書 (か) いて",
        instruction: "What form is this?",
        answer: "Te-form",
        options: ["Te-form", "Ta-form", "Nai-form", "Masu-form"]
      },
      {
        word: "飲 (の) ませる",
        instruction: "What form is this?",
        answer: "Causative form",
        options: ["Causative form", "Passive form", "Potential form", "Conditional form"]
      },
      {
        word: "話 (はな) された",
        instruction: "What form is this?",
        answer: "Passive form",
        options: ["Passive form", "Causative form", "Potential form", "Imperative form"]
      },
      {
        word: "行 (い) こう",
        instruction: "What form is this?",
        answer: "Volitional form",
        options: ["Volitional form", "Imperative form", "Conditional form", "Potential form"]
      },
      {
        word: "読 (よ) めば",
        instruction: "What form is this?",
        answer: "Conditional form",
        options: ["Conditional form", "Potential form", "Volitional form", "Passive form"]
      },
      {
        word: "見 (み) ろ",
        instruction: "What form is this?",
        answer: "Imperative form",
        options: ["Imperative form", "Volitional form", "Te-form", "Dictionary form"]
      },
      {
        word: "泳 (およ) いだ",
        instruction: "What form is this?",
        answer: "Ta-form",
        options: ["Ta-form", "Te-form", "Nai-form", "Masu-form"]
      },
      {
        word: "起 (お) きない",
        instruction: "What form is this?",
        answer: "Nai-form",
        options: ["Nai-form", "Potential form", "Passive form", "Te-form"]
      },
      {
        word: "来 (こ) させる",
        instruction: "What form is this?",
        answer: "Causative form",
        options: ["Causative form", "Passive form", "Potential form", "Conditional form"]
      },
      {
        word: "話 (はな) します",
        instruction: "What form is this?",
        answer: "Masu-form",
        options: ["Masu-form", "Dictionary form", "Te-form", "Conditional form"]
      },
      {
        word: "書 (か) ける",
        instruction: "What form is this?",
        answer: "Potential form",
        options: ["Potential form", "Conditional form", "Passive form", "Imperative form"]
      }
    ]
  }
];
