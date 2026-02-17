import { useState, useEffect } from 'react';
import { kanjiIntro, kanjiList, kanjiExercises } from '../data/kanji';
import Quiz from '../components/Quiz';

const tabs = ['Essential Kanji', 'Quiz'];

export default function Kanji() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); }, [activeTab]);

  return (
    <div>
      <div className="page-header">
        <h2>漢字 Kanji</h2>
        <p className="subtitle">Chinese characters - JLPT N5</p>
      </div>

      <div className="intro-box">
        <h3>{kanjiIntro.title}</h3>
        <p>{kanjiIntro.description}</p>
        <ul className="tips-list">
          {kanjiIntro.tips.map((tip, i) => <li key={i}>{tip}</li>)}
        </ul>
      </div>

      <div className="tabs">
        {tabs.map((tab, i) => (
          <button key={tab} className={`tab ${i === activeTab ? 'active' : ''}`} onClick={() => setActiveTab(i)}>
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 0 && (
        <div className="kanji-grid">
          {kanjiList.map((k, i) => (
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
      )}

      {activeTab === 1 && (
        <div>
          {kanjiExercises.map((exercise, i) => (
            <div key={i} style={{ marginBottom: 32 }}>
              <Quiz questions={exercise.questions} title={exercise.title} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
