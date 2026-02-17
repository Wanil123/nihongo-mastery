import { useState, useEffect, useMemo } from 'react';
import { kanjiIntro, kanjiList, generateKanjiMeaningQuiz, generateKanjiReadingQuiz, generateKanjiRecognitionQuiz } from '../data/kanji';
import { kanjiN4Intro, kanjiN4List } from '../data/kanji-n4';
import Quiz from '../components/Quiz';

const tabs = ['N5 Kanji', 'N4 Kanji', 'Quiz'];

export default function Kanji() {
  const [activeTab, setActiveTab] = useState(0);
  const [quizLevel, setQuizLevel] = useState('n5');
  const [quizType, setQuizType] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, [activeTab, quizType]);

  const n4List = kanjiN4List || [];
  const n4Intro = kanjiN4Intro || null;

  // Generate quizzes dynamically based on selected level
  const quizQuestions = useMemo(() => {
    if (!quizType) return null;
    const list = quizLevel === 'n5' ? kanjiList : n4List;
    if (list.length === 0) return null;

    switch (quizType) {
      case 'meaning': return generateKanjiMeaningQuiz(list);
      case 'reading': return generateKanjiReadingQuiz(list);
      case 'recognition': return generateKanjiRecognitionQuiz(list);
      default: return null;
    }
  }, [quizType, quizLevel, n4List]);

  const renderKanjiGrid = (list) => (
    <div className="kanji-grid">
      {list.map((k, i) => (
        <div key={i} className="kanji-card">
          <div className="kanji-top">
            <div className="kanji-char">{k.kanji}</div>
            <div className="kanji-info">
              <h4>{k.meaning}</h4>
              <div className="kanji-readings">
                <span>音: {k.onyomi}</span>
                <span>訓: {k.kunyomi}</span>
                <span>{k.strokes} strokes | {k.level}</span>
              </div>
            </div>
          </div>
          {k.visual && <div className="kanji-visual">{k.visual}</div>}
          <div className="kanji-words">
            {k.words.map((w, wi) => (
              <span key={wi} className="kanji-word" title={w.meaning}>
                {w.word} ({w.reading}) = {w.meaning}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <div className="page-header">
        <h2>漢字 Kanji</h2>
        <p className="subtitle">Chinese characters - JLPT N5 & N4</p>
      </div>

      <div className="intro-box">
        <h3>{kanjiIntro.title}</h3>
        <p>{kanjiIntro.description}</p>
        <ul className="tips-list">
          {kanjiIntro.tips.map((tip, i) => <li key={i}>{tip}</li>)}
        </ul>
      </div>

      <div className="tabs">
        {tabs.map((tab, i) => {
          if (i === 1 && n4List.length === 0) return null;
          return (
            <button key={tab} className={`tab ${i === activeTab ? 'active' : ''}`} onClick={() => { setActiveTab(i); setQuizType(null); }}>
              {tab}
            </button>
          );
        })}
      </div>

      {activeTab === 0 && renderKanjiGrid(kanjiList)}

      {activeTab === 1 && n4List.length > 0 && (
        <div>
          {n4Intro && (
            <div className="intro-box" style={{ marginBottom: 20 }}>
              <h3>{n4Intro.title}</h3>
              <p>{n4Intro.description}</p>
            </div>
          )}
          {renderKanjiGrid(n4List)}
        </div>
      )}

      {activeTab === 2 && (
        <div>
          {!quizType ? (
            <div>
              {/* Level selection */}
              <div style={{ marginBottom: 20 }}>
                <h4 style={{ marginBottom: 10, color: '#0c4a6e' }}>Select level:</h4>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 20 }}>
                  <button
                    className={`btn ${quizLevel === 'n5' ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => setQuizLevel('n5')}
                  >
                    N5 ({kanjiList.length} kanji)
                  </button>
                  {n4List.length > 0 && (
                    <button
                      className={`btn ${quizLevel === 'n4' ? 'btn-primary' : 'btn-outline'}`}
                      onClick={() => setQuizLevel('n4')}
                    >
                      N4 ({n4List.length} kanji)
                    </button>
                  )}
                </div>
              </div>

              {/* Quiz type selection */}
              <h4 style={{ marginBottom: 10, color: '#0c4a6e' }}>Choose quiz type:</h4>
              <div className="quiz-type-grid">
                <button className="quiz-type-card" onClick={() => setQuizType('meaning')}>
                  <div className="quiz-type-icon">漢→A</div>
                  <div className="quiz-type-title">Kanji → Meaning</div>
                  <div className="quiz-type-desc">See a kanji, choose the correct meaning</div>
                </button>
                <button className="quiz-type-card" onClick={() => setQuizType('reading')}>
                  <div className="quiz-type-icon">字→読</div>
                  <div className="quiz-type-title">Word → Reading</div>
                  <div className="quiz-type-desc">See a word, choose the correct reading</div>
                </button>
                <button className="quiz-type-card" onClick={() => setQuizType('recognition')}>
                  <div className="quiz-type-icon">A→漢</div>
                  <div className="quiz-type-title">Meaning → Kanji</div>
                  <div className="quiz-type-desc">See a meaning, choose the correct kanji</div>
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <button className="btn btn-outline" onClick={() => setQuizType(null)} style={{ fontSize: '0.85rem', padding: '6px 14px' }}>
                  ← Back to quiz selection
                </button>
                <span className="badge">{quizLevel.toUpperCase()}</span>
              </div>
              {quizQuestions && (
                <Quiz
                  key={`${quizLevel}-${quizType}-${Date.now()}`}
                  questions={quizQuestions}
                  title={quizType === 'meaning' ? `Kanji → Meaning (${quizLevel.toUpperCase()})` :
                         quizType === 'reading' ? `Word → Reading (${quizLevel.toUpperCase()})` :
                         `Meaning → Kanji (${quizLevel.toUpperCase()})`}
                />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
