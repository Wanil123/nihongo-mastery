import { useState, useEffect } from 'react';
import { conversations, usefulPhrases } from '../data/conversations';

export default function Conversations() {
  const [activeConv, setActiveConv] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); }, [activeConv]);

  return (
    <div>
      <div className="page-header">
        <h2>会話 Conversations</h2>
        <p className="subtitle">Realistic dialogues for everyday life in Japan</p>
      </div>

      <div className="lesson-nav">
        {conversations.map((c, i) => (
          <button
            key={c.id}
            className={`lesson-nav-btn ${i === activeConv ? 'active' : ''}`}
            onClick={() => setActiveConv(i)}
          >
            {c.title}
          </button>
        ))}
        <button
          className={`lesson-nav-btn ${activeConv === conversations.length ? 'active' : ''}`}
          onClick={() => setActiveConv(conversations.length)}
        >
          Useful Phrases
        </button>
      </div>

      {activeConv < conversations.length ? (
        <ConversationView conv={conversations[activeConv]} />
      ) : (
        <PhrasesView />
      )}
    </div>
  );
}

function ConversationView({ conv }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{conv.title}</h3>
        <span className="badge">{conv.level}</span>
      </div>

      <div style={{ background: '#f0f9ff', padding: '12px 16px', borderRadius: 8, marginBottom: 20, fontSize: '0.9rem', color: '#0c4a6e' }}>
        <strong>Situation:</strong> {conv.situation}
      </div>

      <div className="dialogue-container">
        {conv.dialogue.map((line, i) => (
          <div key={i} className={`dialogue-line ${line.speaker === 'You' ? 'you' : ''}`}>
            <div className="dialogue-speaker">{line.speaker}</div>
            <div className="dialogue-bubble">
              <div className="jp">{line.jp}</div>
              <div className="rm">{line.rm}</div>
              <div className="fr">{line.fr}</div>
            </div>
          </div>
        ))}
      </div>

      {conv.notes && (
        <div className="dialogue-notes">
          <h4>Cultural and linguistic notes</h4>
          <ul>
            {conv.notes.map((note, i) => <li key={i}>{note}</li>)}
          </ul>
        </div>
      )}

      {conv.usefulVocab && (
        <div style={{ marginTop: 20 }}>
          <h4 style={{ marginBottom: 10 }}>Useful vocabulary</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 6 }}>
            {conv.usefulVocab.map((v, i) => (
              <div key={i} style={{ padding: '6px 12px', background: '#f1f5f9', borderRadius: 6, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 500 }}>{v.jp}</span>

                <span style={{ color: '#64748b' }}> = {v.fr}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function PhrasesView() {
  return (
    <div>
      <div className="card">
        <h3 style={{ marginBottom: 16 }}>{usefulPhrases.title}</h3>
        {usefulPhrases.categories.map((cat, ci) => (
          <div key={ci} style={{ marginBottom: 24 }}>
            <h4 style={{ color: '#dc2626', marginBottom: 12 }}>{cat.name}</h4>
            <div className="expression-grid">
              {cat.phrases.map((p, pi) => (
                <div key={pi} className="expression-card">
                  <div>
                    <div className="expr-jp">{p.jp}</div>
                    <div className="expr-rm">{p.rm}</div>
                  </div>
                  <div className="expr-fr">{p.fr}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
