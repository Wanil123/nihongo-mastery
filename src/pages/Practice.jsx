import { useState, useMemo, useCallback, useEffect } from 'react';

// ── Kana data organized by rows ──
const hiraganaRows = [
  { id: 'h-vowels', label: 'a · i · u · e · o', chars: [
    { char: 'あ', romaji: 'a' }, { char: 'い', romaji: 'i' }, { char: 'う', romaji: 'u' }, { char: 'え', romaji: 'e' }, { char: 'お', romaji: 'o' }
  ]},
  { id: 'h-k', label: 'ka · ki · ku · ke · ko', chars: [
    { char: 'か', romaji: 'ka' }, { char: 'き', romaji: 'ki' }, { char: 'く', romaji: 'ku' }, { char: 'け', romaji: 'ke' }, { char: 'こ', romaji: 'ko' }
  ]},
  { id: 'h-s', label: 'sa · shi · su · se · so', chars: [
    { char: 'さ', romaji: 'sa' }, { char: 'し', romaji: 'shi' }, { char: 'す', romaji: 'su' }, { char: 'せ', romaji: 'se' }, { char: 'そ', romaji: 'so' }
  ]},
  { id: 'h-t', label: 'ta · chi · tsu · te · to', chars: [
    { char: 'た', romaji: 'ta' }, { char: 'ち', romaji: 'chi' }, { char: 'つ', romaji: 'tsu' }, { char: 'て', romaji: 'te' }, { char: 'と', romaji: 'to' }
  ]},
  { id: 'h-n', label: 'na · ni · nu · ne · no', chars: [
    { char: 'な', romaji: 'na' }, { char: 'に', romaji: 'ni' }, { char: 'ぬ', romaji: 'nu' }, { char: 'ね', romaji: 'ne' }, { char: 'の', romaji: 'no' }
  ]},
  { id: 'h-h', label: 'ha · hi · fu · he · ho', chars: [
    { char: 'は', romaji: 'ha' }, { char: 'ひ', romaji: 'hi' }, { char: 'ふ', romaji: 'fu' }, { char: 'へ', romaji: 'he' }, { char: 'ほ', romaji: 'ho' }
  ]},
  { id: 'h-m', label: 'ma · mi · mu · me · mo', chars: [
    { char: 'ま', romaji: 'ma' }, { char: 'み', romaji: 'mi' }, { char: 'む', romaji: 'mu' }, { char: 'め', romaji: 'me' }, { char: 'も', romaji: 'mo' }
  ]},
  { id: 'h-y', label: 'ya · yu · yo', chars: [
    { char: 'や', romaji: 'ya' }, { char: 'ゆ', romaji: 'yu' }, { char: 'よ', romaji: 'yo' }
  ]},
  { id: 'h-r', label: 'ra · ri · ru · re · ro', chars: [
    { char: 'ら', romaji: 'ra' }, { char: 'り', romaji: 'ri' }, { char: 'る', romaji: 'ru' }, { char: 'れ', romaji: 're' }, { char: 'ろ', romaji: 'ro' }
  ]},
  { id: 'h-w', label: 'wa · wo · n', chars: [
    { char: 'わ', romaji: 'wa' }, { char: 'を', romaji: 'wo' }, { char: 'ん', romaji: 'n' }
  ]},
];

const hiraganaAltRows = [
  { id: 'h-g', label: 'ga · gi · gu · ge · go', chars: [
    { char: 'が', romaji: 'ga' }, { char: 'ぎ', romaji: 'gi' }, { char: 'ぐ', romaji: 'gu' }, { char: 'げ', romaji: 'ge' }, { char: 'ご', romaji: 'go' }
  ]},
  { id: 'h-z', label: 'za · ji · zu · ze · zo', chars: [
    { char: 'ざ', romaji: 'za' }, { char: 'じ', romaji: 'ji' }, { char: 'ず', romaji: 'zu' }, { char: 'ぜ', romaji: 'ze' }, { char: 'ぞ', romaji: 'zo' }
  ]},
  { id: 'h-d', label: 'da · di · du · de · do', chars: [
    { char: 'だ', romaji: 'da' }, { char: 'ぢ', romaji: 'di' }, { char: 'づ', romaji: 'du' }, { char: 'で', romaji: 'de' }, { char: 'ど', romaji: 'do' }
  ]},
  { id: 'h-b', label: 'ba · bi · bu · be · bo', chars: [
    { char: 'ば', romaji: 'ba' }, { char: 'び', romaji: 'bi' }, { char: 'ぶ', romaji: 'bu' }, { char: 'べ', romaji: 'be' }, { char: 'ぼ', romaji: 'bo' }
  ]},
  { id: 'h-p', label: 'pa · pi · pu · pe · po', chars: [
    { char: 'ぱ', romaji: 'pa' }, { char: 'ぴ', romaji: 'pi' }, { char: 'ぷ', romaji: 'pu' }, { char: 'ぺ', romaji: 'pe' }, { char: 'ぽ', romaji: 'po' }
  ]},
  { id: 'h-ky', label: 'kya · kyu · kyo', chars: [
    { char: 'きゃ', romaji: 'kya' }, { char: 'きゅ', romaji: 'kyu' }, { char: 'きょ', romaji: 'kyo' }
  ]},
  { id: 'h-sh', label: 'sha · shu · sho', chars: [
    { char: 'しゃ', romaji: 'sha' }, { char: 'しゅ', romaji: 'shu' }, { char: 'しょ', romaji: 'sho' }
  ]},
  { id: 'h-ch', label: 'cha · chu · cho', chars: [
    { char: 'ちゃ', romaji: 'cha' }, { char: 'ちゅ', romaji: 'chu' }, { char: 'ちょ', romaji: 'cho' }
  ]},
  { id: 'h-ny', label: 'nya · nyu · nyo', chars: [
    { char: 'にゃ', romaji: 'nya' }, { char: 'にゅ', romaji: 'nyu' }, { char: 'にょ', romaji: 'nyo' }
  ]},
  { id: 'h-hy', label: 'hya · hyu · hyo', chars: [
    { char: 'ひゃ', romaji: 'hya' }, { char: 'ひゅ', romaji: 'hyu' }, { char: 'ひょ', romaji: 'hyo' }
  ]},
  { id: 'h-my', label: 'mya · myu · myo', chars: [
    { char: 'みゃ', romaji: 'mya' }, { char: 'みゅ', romaji: 'myu' }, { char: 'みょ', romaji: 'myo' }
  ]},
  { id: 'h-ry', label: 'rya · ryu · ryo', chars: [
    { char: 'りゃ', romaji: 'rya' }, { char: 'りゅ', romaji: 'ryu' }, { char: 'りょ', romaji: 'ryo' }
  ]},
];

const katakanaRows = [
  { id: 'k-vowels', label: 'a · i · u · e · o', chars: [
    { char: 'ア', romaji: 'a' }, { char: 'イ', romaji: 'i' }, { char: 'ウ', romaji: 'u' }, { char: 'エ', romaji: 'e' }, { char: 'オ', romaji: 'o' }
  ]},
  { id: 'k-k', label: 'ka · ki · ku · ke · ko', chars: [
    { char: 'カ', romaji: 'ka' }, { char: 'キ', romaji: 'ki' }, { char: 'ク', romaji: 'ku' }, { char: 'ケ', romaji: 'ke' }, { char: 'コ', romaji: 'ko' }
  ]},
  { id: 'k-s', label: 'sa · shi · su · se · so', chars: [
    { char: 'サ', romaji: 'sa' }, { char: 'シ', romaji: 'shi' }, { char: 'ス', romaji: 'su' }, { char: 'セ', romaji: 'se' }, { char: 'ソ', romaji: 'so' }
  ]},
  { id: 'k-t', label: 'ta · chi · tsu · te · to', chars: [
    { char: 'タ', romaji: 'ta' }, { char: 'チ', romaji: 'chi' }, { char: 'ツ', romaji: 'tsu' }, { char: 'テ', romaji: 'te' }, { char: 'ト', romaji: 'to' }
  ]},
  { id: 'k-n', label: 'na · ni · nu · ne · no', chars: [
    { char: 'ナ', romaji: 'na' }, { char: 'ニ', romaji: 'ni' }, { char: 'ヌ', romaji: 'nu' }, { char: 'ネ', romaji: 'ne' }, { char: 'ノ', romaji: 'no' }
  ]},
  { id: 'k-h', label: 'ha · hi · fu · he · ho', chars: [
    { char: 'ハ', romaji: 'ha' }, { char: 'ヒ', romaji: 'hi' }, { char: 'フ', romaji: 'fu' }, { char: 'ヘ', romaji: 'he' }, { char: 'ホ', romaji: 'ho' }
  ]},
  { id: 'k-m', label: 'ma · mi · mu · me · mo', chars: [
    { char: 'マ', romaji: 'ma' }, { char: 'ミ', romaji: 'mi' }, { char: 'ム', romaji: 'mu' }, { char: 'メ', romaji: 'me' }, { char: 'モ', romaji: 'mo' }
  ]},
  { id: 'k-y', label: 'ya · yu · yo', chars: [
    { char: 'ヤ', romaji: 'ya' }, { char: 'ユ', romaji: 'yu' }, { char: 'ヨ', romaji: 'yo' }
  ]},
  { id: 'k-r', label: 'ra · ri · ru · re · ro', chars: [
    { char: 'ラ', romaji: 'ra' }, { char: 'リ', romaji: 'ri' }, { char: 'ル', romaji: 'ru' }, { char: 'レ', romaji: 're' }, { char: 'ロ', romaji: 'ro' }
  ]},
  { id: 'k-w', label: 'wa · wo · n', chars: [
    { char: 'ワ', romaji: 'wa' }, { char: 'ヲ', romaji: 'wo' }, { char: 'ン', romaji: 'n' }
  ]},
];

const katakanaAltRows = [
  { id: 'k-g', label: 'ga · gi · gu · ge · go', chars: [
    { char: 'ガ', romaji: 'ga' }, { char: 'ギ', romaji: 'gi' }, { char: 'グ', romaji: 'gu' }, { char: 'ゲ', romaji: 'ge' }, { char: 'ゴ', romaji: 'go' }
  ]},
  { id: 'k-z', label: 'za · ji · zu · ze · zo', chars: [
    { char: 'ザ', romaji: 'za' }, { char: 'ジ', romaji: 'ji' }, { char: 'ズ', romaji: 'zu' }, { char: 'ゼ', romaji: 'ze' }, { char: 'ゾ', romaji: 'zo' }
  ]},
  { id: 'k-d', label: 'da · di · du · de · do', chars: [
    { char: 'ダ', romaji: 'da' }, { char: 'ヂ', romaji: 'di' }, { char: 'ヅ', romaji: 'du' }, { char: 'デ', romaji: 'de' }, { char: 'ド', romaji: 'do' }
  ]},
  { id: 'k-b', label: 'ba · bi · bu · be · bo', chars: [
    { char: 'バ', romaji: 'ba' }, { char: 'ビ', romaji: 'bi' }, { char: 'ブ', romaji: 'bu' }, { char: 'ベ', romaji: 'be' }, { char: 'ボ', romaji: 'bo' }
  ]},
  { id: 'k-p', label: 'pa · pi · pu · pe · po', chars: [
    { char: 'パ', romaji: 'pa' }, { char: 'ピ', romaji: 'pi' }, { char: 'プ', romaji: 'pu' }, { char: 'ペ', romaji: 'pe' }, { char: 'ポ', romaji: 'po' }
  ]},
  { id: 'k-ky', label: 'kya · kyu · kyo', chars: [
    { char: 'キャ', romaji: 'kya' }, { char: 'キュ', romaji: 'kyu' }, { char: 'キョ', romaji: 'kyo' }
  ]},
  { id: 'k-sh', label: 'sha · shu · sho', chars: [
    { char: 'シャ', romaji: 'sha' }, { char: 'シュ', romaji: 'shu' }, { char: 'ショ', romaji: 'sho' }
  ]},
  { id: 'k-ch', label: 'cha · chu · cho', chars: [
    { char: 'チャ', romaji: 'cha' }, { char: 'チュ', romaji: 'chu' }, { char: 'チョ', romaji: 'cho' }
  ]},
  { id: 'k-ny', label: 'nya · nyu · nyo', chars: [
    { char: 'ニャ', romaji: 'nya' }, { char: 'ニュ', romaji: 'nyu' }, { char: 'ニョ', romaji: 'nyo' }
  ]},
  { id: 'k-hy', label: 'hya · hyu · hyo', chars: [
    { char: 'ヒャ', romaji: 'hya' }, { char: 'ヒュ', romaji: 'hyu' }, { char: 'ヒョ', romaji: 'hyo' }
  ]},
  { id: 'k-my', label: 'mya · myu · myo', chars: [
    { char: 'ミャ', romaji: 'mya' }, { char: 'ミュ', romaji: 'myu' }, { char: 'ミョ', romaji: 'myo' }
  ]},
  { id: 'k-ry', label: 'rya · ryu · ryo', chars: [
    { char: 'リャ', romaji: 'rya' }, { char: 'リュ', romaji: 'ryu' }, { char: 'リョ', romaji: 'ryo' }
  ]},
];

// All unique romaji values for generating wrong answers
const allRomaji = [...new Set([
  ...hiraganaRows.flatMap(r => r.chars.map(c => c.romaji)),
  ...hiraganaAltRows.flatMap(r => r.chars.map(c => c.romaji)),
])];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateQuestions(selectedIds) {
  const allRows = [...hiraganaRows, ...hiraganaAltRows, ...katakanaRows, ...katakanaAltRows];
  const selectedChars = allRows
    .filter(r => selectedIds.has(r.id))
    .flatMap(r => r.chars);

  const shuffled = shuffle(selectedChars);

  return shuffled.map(ch => {
    const wrongOptions = allRomaji
      .filter(r => r !== ch.romaji)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    const options = shuffle([ch.romaji, ...wrongOptions]);
    return { char: ch.char, answer: ch.romaji, options };
  });
}

// ── Main Component ──
export default function Practice() {
  const [selected, setSelected] = useState(new Set(['h-vowels']));
  const [hiraAltOpen, setHiraAltOpen] = useState(false);
  const [kataAltOpen, setKataAltOpen] = useState(false);
  const [quizMode, setQuizMode] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [quizMode, finished]);

  const toggle = useCallback((id) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const selectBulk = useCallback((ids, add) => {
    setSelected(prev => {
      const next = new Set(prev);
      ids.forEach(id => add ? next.add(id) : next.delete(id));
      return next;
    });
  }, []);

  const hiraBaseIds = hiraganaRows.map(r => r.id);
  const hiraAltIds = hiraganaAltRows.map(r => r.id);
  const kataBaseIds = katakanaRows.map(r => r.id);
  const kataAltIds = katakanaAltRows.map(r => r.id);

  const totalSelected = useMemo(() => {
    const allRows = [...hiraganaRows, ...hiraganaAltRows, ...katakanaRows, ...katakanaAltRows];
    return allRows.filter(r => selected.has(r.id)).reduce((sum, r) => sum + r.chars.length, 0);
  }, [selected]);

  const startQuiz = () => {
    if (totalSelected === 0) return;
    const q = generateQuestions(selected);
    setQuestions(q);
    setCurrent(0);
    setScore(0);
    setPicked(null);
    setShowNext(false);
    setFinished(false);
    setQuizMode(true);
  };

  const handlePick = (opt) => {
    if (picked !== null) return;
    setPicked(opt);
    if (opt === questions[current].answer) setScore(s => s + 1);
    setShowNext(true);
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent(c => c + 1);
      setPicked(null);
      setShowNext(false);
    }
  };

  const backToSelection = () => {
    setQuizMode(false);
    setFinished(false);
  };

  // ── Quiz finished screen ──
  if (quizMode && finished) {
    const pct = Math.round((score / questions.length) * 100);
    let msg = '';
    if (pct === 100) msg = 'Perfect! すばらしい！ You nailed it!';
    else if (pct >= 80) msg = 'Great job! よくできました！ Keep it up!';
    else if (pct >= 60) msg = 'Not bad! もうすこし！ Almost there!';
    else msg = 'Keep practicing! がんばって！';

    return (
      <div>
        <div className="page-header">
          <h2>Practice Results</h2>
        </div>
        <div className="quiz-container">
          <div className="quiz-result">
            <div className="score">{score}/{questions.length}</div>
            <div style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: 8 }}>{pct}%</div>
            <p>{msg}</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={startQuiz}>Retry</button>
              <button className="btn btn-outline" onClick={backToSelection}>Change selection</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Quiz mode ──
  if (quizMode && questions.length > 0) {
    const q = questions[current];
    return (
      <div>
        <div className="page-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2>Kana Practice</h2>
          <button className="btn btn-outline" onClick={backToSelection} style={{ fontSize: '0.85rem', padding: '6px 14px' }}>
            Back
          </button>
        </div>
        <div className="quiz-container">
          <div className="quiz-progress">
            <div className="quiz-progress-bar">
              <div className="quiz-progress-fill" style={{ width: `${((current + 1) / questions.length) * 100}%` }} />
            </div>
            <span className="quiz-progress-text">{current + 1}/{questions.length}</span>
            <span className="quiz-progress-text" style={{ color: '#16a34a' }}>{score} correct</span>
          </div>
          <div className="quiz-question">
            <div className="question-char">{q.char}</div>
            <p>What is the romaji reading?</p>
          </div>
          <div className="quiz-options">
            {q.options.map((opt) => {
              let cls = 'quiz-option';
              if (picked !== null) {
                if (opt === q.answer) cls += ' correct';
                else if (opt === picked) cls += ' wrong';
              }
              return (
                <button key={opt} className={cls} onClick={() => handlePick(opt)} disabled={picked !== null}>
                  {opt}
                </button>
              );
            })}
          </div>
          {showNext && (
            <div style={{ textAlign: 'center' }}>
              <button className="btn btn-next" onClick={handleNext}>
                {current + 1 >= questions.length ? 'See results' : 'Next question →'}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── Selection screen ──
  return (
    <div>
      <div className="page-header">
        <h2>Kana Practice</h2>
        <p className="subtitle">Choose the character groups you want to practice, then press Start.</p>
      </div>

      <div className="practice-grid">
        {/* Hiragana column */}
        <div className="practice-column">
          <div className="practice-col-header">
            <h3>Hiragana · ひらがな</h3>
          </div>
          <div className="practice-rows">
            {hiraganaRows.map(row => (
              <label key={row.id} className={`practice-row ${selected.has(row.id) ? 'checked' : ''}`}>
                <input type="checkbox" checked={selected.has(row.id)} onChange={() => toggle(row.id)} />
                <span className="practice-row-label">{row.label}</span>
              </label>
            ))}
            <div
              className={`practice-row practice-alt-toggle ${hiraAltOpen ? 'open' : ''}`}
              onClick={() => setHiraAltOpen(!hiraAltOpen)}
            >
              <span className="toggle-arrow">{hiraAltOpen ? '▼' : '▶'}</span>
              <span>Alternative characters (ga · ba · kya..)</span>
            </div>
            {hiraAltOpen && hiraganaAltRows.map(row => (
              <label key={row.id} className={`practice-row alt ${selected.has(row.id) ? 'checked' : ''}`}>
                <input type="checkbox" checked={selected.has(row.id)} onChange={() => toggle(row.id)} />
                <span className="practice-row-label">{row.label}</span>
              </label>
            ))}
          </div>
          <div className="practice-quick-btns">
            <button onClick={() => selectBulk([...hiraBaseIds, ...hiraAltIds], true)}>All</button>
            <span className="sep">·</span>
            <button onClick={() => selectBulk([...hiraBaseIds, ...hiraAltIds], false)}>None</button>
            <span className="sep">·</span>
            <button onClick={() => selectBulk(hiraAltIds, true)}>All alternative</button>
            <span className="sep">·</span>
            <button onClick={() => selectBulk(hiraAltIds, false)}>No alternative</button>
          </div>
        </div>

        {/* Katakana column */}
        <div className="practice-column">
          <div className="practice-col-header">
            <h3>Katakana · カタカナ</h3>
          </div>
          <div className="practice-rows">
            {katakanaRows.map(row => (
              <label key={row.id} className={`practice-row ${selected.has(row.id) ? 'checked' : ''}`}>
                <input type="checkbox" checked={selected.has(row.id)} onChange={() => toggle(row.id)} />
                <span className="practice-row-label">{row.label}</span>
              </label>
            ))}
            <div
              className={`practice-row practice-alt-toggle ${kataAltOpen ? 'open' : ''}`}
              onClick={() => setKataAltOpen(!kataAltOpen)}
            >
              <span className="toggle-arrow">{kataAltOpen ? '▼' : '▶'}</span>
              <span>Alternative characters (ga · ba · kya..)</span>
            </div>
            {kataAltOpen && katakanaAltRows.map(row => (
              <label key={row.id} className={`practice-row alt ${selected.has(row.id) ? 'checked' : ''}`}>
                <input type="checkbox" checked={selected.has(row.id)} onChange={() => toggle(row.id)} />
                <span className="practice-row-label">{row.label}</span>
              </label>
            ))}
          </div>
          <div className="practice-quick-btns">
            <button onClick={() => selectBulk([...kataBaseIds, ...kataAltIds], true)}>All</button>
            <span className="sep">·</span>
            <button onClick={() => selectBulk([...kataBaseIds, ...kataAltIds], false)}>None</button>
            <span className="sep">·</span>
            <button onClick={() => selectBulk(kataAltIds, true)}>All alternative</button>
            <span className="sep">·</span>
            <button onClick={() => selectBulk(kataAltIds, false)}>No alternative</button>
          </div>
        </div>
      </div>

      {/* Start button */}
      <div className="practice-start-area">
        <div className="practice-count">
          {totalSelected} character{totalSelected !== 1 ? 's' : ''} selected
        </div>
        <button
          className="btn btn-primary practice-start-btn"
          onClick={startQuiz}
          disabled={totalSelected === 0}
        >
          Start
        </button>
      </div>
    </div>
  );
}
