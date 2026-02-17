import { Link } from 'react-router-dom';

const modules = [
  {
    icon: "あ",
    title: "Hiragana ひらがな",
    desc: "The 46 basic characters + combinations. The fundamental Japanese alphabet with mnemonics and exercises.",
    path: "/hiragana",
    level: "Beginner"
  },
  {
    icon: "ア",
    title: "Katakana カタカナ",
    desc: "The alphabet for foreign words. Loan words, confusing pairs, and quizzes.",
    path: "/katakana",
    level: "Beginner"
  },
  {
    icon: "文",
    title: "Grammar 文法",
    desc: "Sentence structure, particles, verbs, adjectives, te-form, and essential expressions based on Minna no Nihongo.",
    path: "/grammar",
    level: "Beginner → Intermediate"
  },
  {
    icon: "変",
    title: "Conjugation 活用",
    desc: "All verb conjugation forms: te-form, nai-form, potential, volitional, passive, causative, and more with quizzes.",
    path: "/conjugation",
    level: "Beginner → Intermediate"
  },
  {
    icon: "は",
    title: "Particles 助詞",
    desc: "Master は, が, を, に, で, and all essential particles with explanations and practice quizzes.",
    path: "/particles",
    level: "Beginner → Intermediate"
  },
  {
    icon: "言",
    title: "Vocabulary 語彙",
    desc: "Over 400 essential words organized by theme with emoji icons, flashcards, and lesson-based vocab.",
    path: "/vocabulary",
    level: "Beginner"
  },
  {
    icon: "漢",
    title: "Kanji 漢字",
    desc: "120+ kanji (JLPT N5 & N4) with visual explanations, readings, words, and challenging quizzes.",
    path: "/kanji",
    level: "Beginner → Intermediate"
  },
  {
    icon: "話",
    title: "Conversations 会話",
    desc: "Realistic dialogues: restaurant, shopping, doctor, phone, and more.",
    path: "/conversations",
    level: "Beginner → Intermediate"
  }
];

export default function Home() {
  return (
    <div>
      <div className="hero">
        <h2>日本語マスター</h2>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: 16 }}>
          Nihongo Mastery
        </h2>
        <p>
          Complete course to learn Japanese from scratch.
          Hiragana, katakana, grammar, vocabulary, kanji, and real conversations.
          Everything you need to truly communicate in Japanese.
        </p>
      </div>

      <div className="page-header">
        <h2>Learning Modules</h2>
        <p className="subtitle">
          Start with Hiragana, then progress module by module. Each lesson
          includes detailed explanations, concrete examples, and exercises.
        </p>
      </div>

      <div className="module-grid">
        {modules.map((mod) => (
          <Link key={mod.path} to={mod.path} className="module-card">
            <span className="module-icon" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
              {mod.icon}
            </span>
            <h3>{mod.title}</h3>
            <p>{mod.desc}</p>
            <span className="module-level">{mod.level}</span>
          </Link>
        ))}
      </div>

      <div className="card" style={{ marginTop: 32 }}>
        <h3 style={{ marginBottom: 12 }}>Tips to get started</h3>
        <div style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.8 }}>
          <p><strong>1. Start with Hiragana.</strong> This is the absolute foundation. Without hiragana, you can't read anything. Learn 5 characters per day by writing them by hand.</p>
          <br />
          <p><strong>2. Review EVERY DAY.</strong> Consistency is more important than quantity. 15 minutes per day is better than 3 hours once a week.</p>
          <br />
          <p><strong>3. Speak out loud.</strong> Japanese is learned with your ears and mouth, not just your eyes. Pronounce every word, every sentence.</p>
          <br />
          <p><strong>4. Don't be afraid of mistakes.</strong> Japanese people are very patient with learners and greatly appreciate the effort. まちがっても だいじょうぶ！(Even if you make mistakes, it's OK!)</p>
          <br />
          <p><strong>5. Recommended order:</strong> Hiragana → Katakana → Grammar (lessons 1-5) → Vocabulary → Grammar (continued) → Kanji → Conversations</p>
        </div>
      </div>
    </div>
  );
}
