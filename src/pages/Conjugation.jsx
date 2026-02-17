import { useState, useEffect } from 'react';
import { conjugationIntro, conjugationForms, conjugationQuizzes } from '../data/conjugation';
import Quiz from '../components/Quiz';

const tabs = ['Conjugation Forms', 'Quiz'];

export default function Conjugation() {
  const [activeTab, setActiveTab] = useState(0);
  const [openForm, setOpenForm] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, [activeTab]);

  const toggleForm = (id) => {
    setOpenForm(prev => prev === id ? null : id);
  };

  return (
    <div>
      <div className="page-header">
        <h2>活用形 Conjugation</h2>
        <p className="subtitle">Master all Japanese verb conjugation forms</p>
      </div>

      <div className="intro-box">
        <h3>{conjugationIntro.title}</h3>
        <p>{conjugationIntro.description}</p>
        <ul className="tips-list">
          {conjugationIntro.tips.map((tip, i) => <li key={i}>{tip}</li>)}
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
          {conjugationForms.map((form) => (
            <div key={form.id} className="conj-form-card">
              <div className="conj-form-header" onClick={() => toggleForm(form.id)}>
                <div>
                  <div className="conj-form-name">{form.name}</div>
                  <div className="conj-form-desc">{form.description}</div>
                </div>
                <span style={{ fontSize: '1.2rem', color: '#94a3b8', transition: 'transform 0.2s', transform: openForm === form.id ? 'rotate(90deg)' : 'none' }}>
                  ▶
                </span>
              </div>

              {openForm === form.id && (
                <div className="conj-form-body">
                  {form.rules.map((rule, ri) => (
                    <div key={ri} className="conj-group">
                      <h5>{rule.group}</h5>
                      <div className="conj-rule">{rule.rule}</div>
                      <div style={{ display: 'grid', gap: 4 }}>
                        {rule.examples.map((ex, ei) => (
                          <div key={ei} className="conj-example-row">
                            <span>{ex.dict}</span>
                            <span>→ {ex.conjugated}</span>
                            <span>{ex.meaning}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {form.usageExamples && form.usageExamples.length > 0 && (
                    <div style={{ marginTop: 16 }}>
                      <h5 style={{ color: '#0c4a6e', marginBottom: 8 }}>Usage examples:</h5>
                      {form.usageExamples.map((ex, ei) => (
                        <div key={ei} className="example-box">
                          <div className="jp">{ex.jp}</div>
                          <div className="rm">{ex.rm}</div>
                          <div className="fr">{ex.en}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {activeTab === 1 && (
        <div>
          {conjugationQuizzes.map((quiz, i) => (
            <div key={i} style={{ marginBottom: 32 }}>
              <Quiz questions={quiz.questions} title={quiz.title} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
