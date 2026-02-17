import { useState, useEffect } from 'react';
import { particleIntro, particleList, particleQuizzes } from '../data/particles';
import Quiz from '../components/Quiz';

const tabs = ['All Particles', 'Quiz'];

export default function Particles() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); }, [activeTab]);

  return (
    <div>
      <div className="page-header">
        <h2>助詞 Particles</h2>
        <p className="subtitle">The glue that holds Japanese sentences together</p>
      </div>

      <div className="intro-box">
        <h3>{particleIntro.title}</h3>
        <p>{particleIntro.description}</p>
        <ul className="tips-list">
          {particleIntro.tips.map((tip, i) => <li key={i}>{tip}</li>)}
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
        <div>
          {particleList.map((p, i) => (
            <div key={i} className="particle-card">
              <div className="particle-card-header">
                <div className="particle-big-char">{p.particle}</div>
                <div>
                  <h4>{p.name}</h4>
                  <div className="function">{p.function}</div>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: 12, whiteSpace: 'pre-line' }}>
                {p.explanation}
              </p>
              <div className="particle-examples">
                {p.examples.map((ex, ei) => (
                  <div key={ei} className="particle-example">
                    <div className="jp">{ex.jp}</div>
                    <div className="rm">{ex.rm}</div>
                    <div className="en">{ex.en}</div>
                  </div>
                ))}
              </div>
              {p.commonMistakes && (
                <div className="particle-mistake">
                  ⚠ Common mistake: {p.commonMistakes}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {activeTab === 1 && (
        <div>
          {particleQuizzes.map((quiz, i) => (
            <div key={i} style={{ marginBottom: 32 }}>
              <Quiz questions={quiz.questions} title={quiz.title} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
