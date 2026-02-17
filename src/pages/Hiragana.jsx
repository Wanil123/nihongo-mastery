import { useState, useEffect } from 'react';
import { hiraganaIntro, hiraganaGroups, dakuten, handakuten, yoon, specialRules, hiraganaExercises } from '../data/hiragana';
import Quiz from '../components/Quiz';

const tabs = ['Basic Characters', 'Dakuten ゛', 'Handakuten ゜', 'Yōon (Combined)', 'Special Rules', 'Quiz'];

export default function Hiragana() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); }, [activeTab]);

  return (
    <div>
      <div className="page-header">
        <h2>ひらがな Hiragana</h2>
        <p className="subtitle">The first Japanese alphabet - 46 basic characters</p>
      </div>

      <div className="intro-box">
        <h3>{hiraganaIntro.title}</h3>
        <p>{hiraganaIntro.description}</p>
        <ul className="tips-list">
          {hiraganaIntro.tips.map((tip, i) => <li key={i}>{tip}</li>)}
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
          {hiraganaGroups.map((group, gi) => (
            <div key={gi} className="char-group">
              <h3>{group.name}</h3>
              <p>{group.description}</p>
              <div className="char-grid">
                {group.chars.map((ch, ci) => (
                  <div key={ci} className="char-card">
                    <div className="char-display">
                      <span className="main-char">{ch.char}</span>
                      <span className="romaji">{ch.romaji}</span>
                    </div>
                    <div className="pronunciation">{ch.pronunciation}</div>
                    {ch.mnemonic && <div className="mnemonic">Tip: {ch.mnemonic}</div>}
                    {ch.strokeOrder && (
                      <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: 8 }}>
                        Strokes: {ch.strokeOrder}
                      </div>
                    )}
                    {ch.examples && (
                      <div className="examples">
                        {ch.examples.map((ex, ei) => <span key={ei}>{ex}</span>)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 1 && (
        <div>
          <div className="intro-box">
            <h3>{dakuten.title}</h3>
            <p>{dakuten.description}</p>
          </div>
          <div className="dakuten-grid">
            {dakuten.chars.map((ch, i) => (
              <div key={i} className="dakuten-card">
                <div className="dk-char">{ch.char}</div>
                <div className="dk-info">
                  <div className="dk-romaji">{ch.romaji} (from {ch.base})</div>
                  <div className="dk-examples">
                    {ch.examples.map((ex, ei) => <div key={ei}>{ex}</div>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 2 && (
        <div>
          <div className="intro-box">
            <h3>{handakuten.title}</h3>
            <p>{handakuten.description}</p>
          </div>
          <div className="dakuten-grid">
            {handakuten.chars.map((ch, i) => (
              <div key={i} className="dakuten-card">
                <div className="dk-char">{ch.char}</div>
                <div className="dk-info">
                  <div className="dk-romaji">{ch.romaji} (from {ch.base})</div>
                  <div className="dk-examples">
                    {ch.examples.map((ex, ei) => <div key={ei}>{ex}</div>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 3 && (
        <div>
          <div className="intro-box">
            <h3>{yoon.title}</h3>
            <p>{yoon.description}</p>
          </div>
          {yoon.combinations.map((combo, i) => (
            <div key={i} className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
                <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: '#dc2626' }}>
                  {combo.chars}
                </span>
                <span style={{ color: '#64748b', fontSize: '0.9rem' }}>{combo.romaji}</span>
              </div>
              <div className="examples">
                {combo.examples.map((ex, ei) => <span key={ei}>{ex}</span>)}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 4 && (
        <div>
          {specialRules.rules.map((rule, i) => (
            <div key={i} className="rule-box">
              <h4>{rule.name}</h4>
              <p>{rule.explanation}</p>
              <ul className="rule-examples">
                {rule.examples.map((ex, ei) => <li key={ei}>{ex}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}

      {activeTab === 5 && (
        <div>
          {hiraganaExercises.map((exercise, i) => (
            <div key={i} style={{ marginBottom: 32 }}>
              <Quiz questions={exercise.questions} title={exercise.title} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
