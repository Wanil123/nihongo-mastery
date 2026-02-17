import { useState, useEffect } from 'react';
import { katakanaIntro, katakanaGroups, katakanaConfusionPairs, katakanaLoanWords, katakanaExercises } from '../data/katakana';
import Quiz from '../components/Quiz';

const tabs = ['Characters', 'Confusing Pairs', 'Loan Words', 'Quiz'];

export default function Katakana() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); }, [activeTab]);

  return (
    <div>
      <div className="page-header">
        <h2>カタカナ Katakana</h2>
        <p className="subtitle">The alphabet for foreign words and proper nouns</p>
      </div>

      <div className="intro-box">
        <h3>{katakanaIntro.title}</h3>
        <p>{katakanaIntro.description}</p>
        <ul className="tips-list">
          {katakanaIntro.tips.map((tip, i) => <li key={i}>{tip}</li>)}
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
          {katakanaGroups.map((group, gi) => (
            <div key={gi} className="char-group">
              <h3>{group.name}</h3>
              <div className="char-grid">
                {group.chars.map((ch, ci) => (
                  <div key={ci} className="char-card">
                    <div className="char-display">
                      <span className="main-char">{ch.char}</span>
                      <span className="romaji">{ch.romaji}</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: 8 }}>
                      Hiragana: {ch.hiraganaEquiv}
                    </div>
                    {ch.pronunciation && <div className="pronunciation">{ch.pronunciation}</div>}
                    {ch.mnemonic && <div className="mnemonic">Tip: {ch.mnemonic}</div>}
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
          <div className="card">
            <h3 style={{ marginBottom: 8 }}>{katakanaConfusionPairs.title}</h3>
            <p style={{ marginBottom: 20 }}>{katakanaConfusionPairs.description}</p>
          </div>
          {katakanaConfusionPairs.pairs.map((pair, i) => (
            <div key={i} className="confusion-pair">
              <div className="pair-chars">{pair.chars.join(' vs ')}</div>
              <div className="pair-trick">{pair.trick}</div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 2 && (
        <div>
          <div className="card">
            <h3 style={{ marginBottom: 8 }}>{katakanaLoanWords.title}</h3>
            <p>{katakanaLoanWords.description}</p>
          </div>
          {katakanaLoanWords.categories.map((cat, ci) => (
            <div key={ci} style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 12, color: '#dc2626' }}>{cat.name}</h3>
              <div className="loan-word-grid">
                {cat.words.map((word, wi) => (
                  <div key={wi} className="loan-word-card">
                    <div className="katakana">{word.katakana}</div>
                    <div className="romaji">{word.romaji}</div>
                    <div className="meaning">{word.meaning}</div>
                    <div className="origin">{word.origin}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 3 && (
        <div>
          {katakanaExercises.map((exercise, i) => (
            <div key={i} style={{ marginBottom: 32 }}>
              <Quiz questions={exercise.questions} title={exercise.title} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
