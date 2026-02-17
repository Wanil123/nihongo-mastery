import { useState, useCallback, useEffect } from 'react';
import { vocabularyCategories } from '../data/vocabulary';
import { mnnVocabulary } from '../data/mnn-vocabulary';

export default function Vocabulary() {
  const [mode, setMode] = useState('mnn');
  const [activeCat, setActiveCat] = useState(0);
  const [activeLesson, setActiveLesson] = useState(0);
  const [flashcardMode, setFlashcardMode] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [mode, activeLesson, activeCat]);

  const cat = vocabularyCategories[activeCat];
  const lesson = mnnVocabulary[activeLesson];

  return (
    <div>
      <div className="page-header">
        <h2>語彙 Vocabulary</h2>
        <p className="subtitle">Essential words organized by lesson and theme</p>
      </div>

      <div className="tabs" style={{ marginBottom: 20 }}>
        <button
          className={`tab ${mode === 'mnn' ? 'active' : ''}`}
          onClick={() => { setMode('mnn'); setFlashcardMode(false); }}
        >
          📖 By Lesson (MNN)
        </button>
        <button
          className={`tab ${mode === 'theme' ? 'active' : ''}`}
          onClick={() => { setMode('theme'); setFlashcardMode(false); }}
        >
          🏷️ By Theme
        </button>
      </div>

      {mode === 'mnn' ? (
        <>
          <div className="lesson-nav">
            {mnnVocabulary.map((l, i) => (
              <button
                key={l.id}
                className={`lesson-nav-btn ${i === activeLesson ? 'active' : ''}`}
                onClick={() => { setActiveLesson(i); setFlashcardMode(false); }}
              >
                L{l.id}
              </button>
            ))}
          </div>

          <div className="card">
            <div className="card-header">
              <h3>{lesson.title}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="badge">{lesson.words.length} words</span>
                <button
                  className={`btn ${flashcardMode ? 'btn-outline' : ''}`}
                  style={{ padding: '6px 14px', fontSize: '0.85rem' }}
                  onClick={() => setFlashcardMode(!flashcardMode)}
                >
                  {flashcardMode ? '📋 List' : '🃏 Flashcards'}
                </button>
              </div>
            </div>

            {flashcardMode ? (
              <FlashcardDeck words={lesson.words} key={activeLesson} />
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table className="vocab-table">
                  <thead>
                    <tr>
                      <th>Japanese</th>
                      <th>Romaji</th>
                      <th>English</th>
                      {lesson.words.some(w => w.note) && <th>Notes</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {lesson.words.map((w, i) => (
                      <tr key={i}>
                        <td className="jp-col">{w.jp}</td>
                        <td className="rm-col">{w.rm}</td>
                        <td>{w.fr}</td>
                        {lesson.words.some(w2 => w2.note) && (
                          <td className="note-col">{w.note || ''}</td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="vocab-categories">
            {vocabularyCategories.map((c, i) => (
              <button
                key={c.id}
                className={`vocab-cat-btn ${i === activeCat ? 'active' : ''}`}
                onClick={() => setActiveCat(i)}
              >
                <span className="cat-icon">{c.icon}</span>
                <span className="cat-name">{c.name}</span>
              </button>
            ))}
          </div>

          <div className="card">
            <div className="card-header">
              <h3>{cat.icon} {cat.name}</h3>
              <span className="badge">{cat.words.length} words</span>
            </div>

            {cat.description && (
              <p style={{ marginBottom: 16, whiteSpace: 'pre-line' }}>{cat.description}</p>
            )}

            <div style={{ overflowX: 'auto' }}>
              <table className="vocab-table">
                <thead>
                  <tr>
                    {cat.words.some(w => w.emoji) && <th style={{ width: 40 }}></th>}
                    <th>Japanese</th>
                    <th>Romaji</th>
                    <th>English</th>
                    {cat.words.some(w => w.note || w.sound) && <th>Notes</th>}
                  </tr>
                </thead>
                <tbody>
                  {cat.words.map((w, i) => (
                    <tr key={i}>
                      {cat.words.some(w2 => w2.emoji) && (
                        <td style={{ fontSize: '1.3rem', textAlign: 'center', padding: '4px' }}>{w.emoji || ''}</td>
                      )}
                      <td className="jp-col">{w.jp}</td>
                      <td className="rm-col">{w.rm}</td>
                      <td>{w.fr}</td>
                      {cat.words.some(w2 => w2.note || w2.sound) && (
                        <td className="note-col">{w.note || w.sound || ''}</td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function FlashcardDeck({ words }) {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState([]);
  const [unknown, setUnknown] = useState([]);
  const [shuffled, setShuffled] = useState(() => shuffle([...words]));
  const [finished, setFinished] = useState(false);

  const card = shuffled[current];
  const total = shuffled.length;
  const progress = current;

  const flip = useCallback(() => setFlipped(f => !f), []);

  const next = useCallback((isKnown) => {
    if (isKnown) {
      setKnown(k => [...k, card]);
    } else {
      setUnknown(u => [...u, card]);
    }
    setFlipped(false);
    if (current + 1 >= total) {
      setFinished(true);
    } else {
      setCurrent(c => c + 1);
    }
  }, [current, total, card]);

  const restart = useCallback((wordsToUse) => {
    setShuffled(shuffle([...wordsToUse]));
    setCurrent(0);
    setFlipped(false);
    setKnown([]);
    setUnknown([]);
    setFinished(false);
  }, []);

  if (finished) {
    const score = Math.round((known.length / total) * 100);
    return (
      <div className="flashcard-result">
        <div className="flashcard-score">{score}%</div>
        <div className="flashcard-score-label">
          {score === 100 ? 'Perfect! You know all the words!' :
           score >= 70 ? 'Great job! Keep practicing the ones you missed.' :
           score >= 40 ? 'Good effort! Review the words below.' :
           'Keep going! Practice makes perfect.'}
        </div>
        <div className="flashcard-stats">
          <div className="flashcard-stat known">
            <span className="stat-num">{known.length}</span>
            <span className="stat-label">Known</span>
          </div>
          <div className="flashcard-stat unknown">
            <span className="stat-num">{unknown.length}</span>
            <span className="stat-label">To review</span>
          </div>
        </div>
        <div className="flashcard-actions">
          <button className="btn" onClick={() => restart(words)}>
            Restart all ({words.length})
          </button>
          {unknown.length > 0 && (
            <button className="btn btn-outline" onClick={() => restart(unknown)}>
              Review missed ({unknown.length})
            </button>
          )}
        </div>
        {unknown.length > 0 && (
          <div className="flashcard-missed">
            <h4>Words to review:</h4>
            <div className="flashcard-missed-list">
              {unknown.map((w, i) => (
                <div key={i} className="flashcard-missed-item">
                  <span className="missed-jp">{w.jp}</span>
                  <span className="missed-en">{w.fr}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flashcard-container">
      <div className="flashcard-progress">
        <div className="flashcard-progress-bar">
          <div
            className="flashcard-progress-fill"
            style={{ width: `${(progress / total) * 100}%` }}
          />
        </div>
        <span className="flashcard-progress-text">{progress + 1} / {total}</span>
      </div>

      <div
        className={`flashcard ${flipped ? 'flipped' : ''}`}
        onClick={flip}
      >
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <div className="flashcard-jp">{card.jp}</div>
            <div className="flashcard-hint">Tap to reveal</div>
          </div>
          <div className="flashcard-back">
            <div className="flashcard-jp">{card.jp}</div>
            <div className="flashcard-rm">{card.rm}</div>
            <div className="flashcard-en">{card.fr}</div>
            {card.note && <div className="flashcard-note">{card.note}</div>}
          </div>
        </div>
      </div>

      <div className="flashcard-buttons">
        <button
          className="flashcard-btn dont-know"
          onClick={() => next(false)}
        >
          ✕ Don't know
        </button>
        <button
          className="flashcard-btn know"
          onClick={() => next(true)}
        >
          ✓ Know it
        </button>
      </div>
    </div>
  );
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
