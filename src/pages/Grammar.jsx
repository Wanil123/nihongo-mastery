import { useState, useEffect } from 'react';
import { grammarLessons } from '../data/grammar';
import ExerciseBlock from '../components/ExerciseBlock';
import SpeakButton from '../components/SpeakButton';

export default function Grammar() {
  const [activeLesson, setActiveLesson] = useState(0);
  const lesson = grammarLessons[activeLesson];

  useEffect(() => { window.scrollTo(0, 0); }, [activeLesson]);

  return (
    <div>
      <div className="page-header">
        <h2>文法 Grammar</h2>
        <p className="subtitle">Based on Minna no Nihongo — 25 lessons from beginner to intermediate</p>
      </div>

      <div className="lesson-nav">
        {grammarLessons.map((l, i) => (
          <button
            key={l.id}
            className={`lesson-nav-btn ${i === activeLesson ? 'active' : ''}`}
            onClick={() => setActiveLesson(i)}
          >
            L{l.id}
          </button>
        ))}
      </div>

      <div className="card">
        <div className="card-header">
          <h3>{lesson.title}</h3>
          <span className="badge">{lesson.level}</span>
        </div>

        <div className="lesson-content">{lesson.content}</div>

        {/* Grammar Points (new MNN structure) */}
        {lesson.grammarPoints && (
          <div>
            {lesson.grammarPoints.map((gp, gi) => (
              <div key={gi} className="grammar-point-section">
                <div className="grammar-point-header">
                  <span className="grammar-point-number">{gi + 1}</span>
                  <h4>{gp.title}</h4>
                </div>
                <div className="lesson-content" style={{ fontSize: '0.9rem', marginBottom: 12 }}>
                  {gp.explanation}
                </div>
                {gp.examples && gp.examples.map((ex, ei) => (
                  <div key={ei} className="example-box">
                    <div className="jp">{ex.jp} <SpeakButton text={ex.jp} /></div>
                    <div className="rm">{ex.rm}</div>
                    <div className="fr">{ex.fr}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Key Points */}
        {lesson.keyPoints && (
          <div className="key-points">
            <h4>Key points to remember</h4>
            <ul>
              {lesson.keyPoints.map((kp, i) => <li key={i}>{kp}</li>)}
            </ul>
          </div>
        )}

        {/* Examples */}
        {lesson.examples && (
          <div style={{ marginBottom: 24 }}>
            <h4 style={{ marginBottom: 12, fontSize: '1rem' }}>Examples</h4>
            {lesson.examples.map((ex, i) => (
              <div key={i} className="example-box">
                <div className="jp">{ex.japanese || ex.jp} <SpeakButton text={ex.japanese || ex.jp} /></div>
                <div className="rm">{ex.romaji || ex.rm}</div>
                <div className="fr">{ex.french || ex.fr}</div>
                {ex.breakdown && <div className="breakdown">{ex.breakdown}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Particles */}
        {lesson.particles && (
          <div>
            {lesson.particles.map((p, i) => (
              <div key={i} className="particle-section">
                <div className="particle-header">
                  <div className="particle-char">{p.particle.split(' ')[0]}</div>
                  <div>
                    <h4>{p.particle}</h4>
                    <div className="function">{p.function}</div>
                  </div>
                </div>
                <div className="lesson-content" style={{ fontSize: '0.9rem', marginBottom: 12 }}>
                  {p.explanation}
                </div>
                {p.examples.map((ex, ei) => (
                  <div key={ei} className="example-box">
                    <div className="jp">{ex.jp} <SpeakButton text={ex.jp} /></div>
                    <div className="rm">{ex.rm}</div>
                    <div className="fr">{ex.fr}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Verb Groups */}
        {lesson.verbGroups && (
          <div>
            {lesson.verbGroups.map((group, gi) => (
              <div key={gi} style={{ marginBottom: 28, borderBottom: '1px solid #e2e8f0', paddingBottom: 20 }}>
                <h4 style={{ color: '#dc2626', marginBottom: 8 }}>{group.name}</h4>
                <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: 12, whiteSpace: 'pre-line' }}>{group.description}</p>
                <div style={{ display: 'grid', gap: 6 }}>
                  {group.examples.map((v, vi) => (
                    <div key={vi} className="grammar-verb-row">
                      <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 500 }}>{v.dict}</span>
                      <span style={{ fontFamily: "'Noto Sans JP', sans-serif", color: '#dc2626' }}>→ {v.masu}</span>
                      <span style={{ color: '#64748b' }}>{v.meaning}</span>
                    </div>
                  ))}
                </div>
                {group.note && <p style={{ fontSize: '0.85rem', color: '#92400e', background: '#fef3c7', padding: '10px 14px', borderRadius: 8, marginTop: 12 }}>{group.note}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Conjugation table (object with forms) */}
        {lesson.conjugation && !Array.isArray(lesson.conjugation) && lesson.conjugation.forms && (
          <div style={{ marginBottom: 24 }}>
            <h4 style={{ marginBottom: 12 }}>{lesson.conjugation.title}</h4>
            {lesson.conjugation.forms.map((form, fi) => (
              <div key={fi} style={{ marginBottom: 16, padding: 16, background: '#f8fafc', borderRadius: 8, borderLeft: '4px solid #dc2626' }}>
                <div style={{ fontWeight: 600, marginBottom: 6 }}>{form.name}</div>
                <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: 8 }}>Rule: {form.rule}</div>
                {form.examples.map((ex, ei) => (
                  <div key={ei} style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.9rem', padding: '2px 0' }}>{ex}</div>
                ))}
                {form.note && <div style={{ fontSize: '0.85rem', color: '#92400e', marginTop: 6 }}>{form.note}</div>}
              </div>
            ))}
          </div>
        )}

        {/* です conjugation (array) */}
        {Array.isArray(lesson.conjugation) && (
          <div style={{ marginBottom: 24 }}>
            <h4 style={{ marginBottom: 12 }}>Conjugation of です</h4>
            <div style={{ display: 'grid', gap: 8 }}>
              {lesson.conjugation.map((c, ci) => (
                <div key={ci} className="grammar-conj-row">
                  <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>{c.form}</span>
                  <span style={{ fontFamily: "'Noto Sans JP', sans-serif", color: '#dc2626' }}>{c.japanese}</span>
                  <span style={{ color: '#64748b' }}>{c.example}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* i-adjectives */}
        {lesson.iAdjectives && (
          <div style={{ marginBottom: 24 }}>
            <h4 style={{ color: '#dc2626', marginBottom: 12 }}>{lesson.iAdjectives.title}</h4>
            <div style={{ display: 'grid', gap: 6, marginBottom: 16 }}>
              {lesson.iAdjectives.conjugation.map((c, ci) => (
                <div key={ci} className="grammar-adj-row">
                  <span style={{ fontWeight: 600 }}>{c.form}</span>
                  <span style={{ color: '#64748b' }}>{c.rule}</span>
                  <span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>{c.example}</span>
                </div>
              ))}
            </div>
            <h4 style={{ fontSize: '0.95rem', marginBottom: 10 }}>Common い adjectives</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 6 }}>
              {lesson.iAdjectives.commonAdjectives.map((a, ai) => (
                <div key={ai} style={{ padding: '6px 12px', background: '#f1f5f9', borderRadius: 6, fontSize: '0.85rem' }}>
                  <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 500 }}>{a.jp}</span>
                  <span style={{ color: '#94a3b8' }}> ({a.rm})</span>
                  <span style={{ color: '#64748b' }}> = {a.fr}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* na-adjectives */}
        {lesson.naAdjectives && (
          <div style={{ marginBottom: 24 }}>
            <h4 style={{ color: '#dc2626', marginBottom: 12 }}>{lesson.naAdjectives.title}</h4>
            <div style={{ display: 'grid', gap: 6, marginBottom: 16 }}>
              {lesson.naAdjectives.conjugation.map((c, ci) => (
                <div key={ci} className="grammar-adj-row wide">
                  <span style={{ fontWeight: 600 }}>{c.form}</span>
                  <span style={{ color: '#64748b' }}>{c.rule}</span>
                  <span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>{c.example}</span>
                </div>
              ))}
            </div>
            <h4 style={{ fontSize: '0.95rem', marginBottom: 10 }}>Common な adjectives</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 6 }}>
              {lesson.naAdjectives.commonAdjectives.map((a, ai) => (
                <div key={ai} style={{ padding: '6px 12px', background: '#f1f5f9', borderRadius: 6, fontSize: '0.85rem' }}>
                  <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 500 }}>{a.jp}</span>
                  <span style={{ color: '#94a3b8' }}> ({a.rm})</span>
                  <span style={{ color: '#64748b' }}> = {a.fr}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Ko-so-a-do table */}
        {lesson.kosoado && (
          <div style={{ marginBottom: 24 }}>
            <div style={{ overflowX: 'auto' }}>
              <table className="vocab-table" style={{ minWidth: 600 }}>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>こ (near me)</th>
                    <th>そ (near you)</th>
                    <th>あ (far away)</th>
                    <th>ど (question)</th>
                  </tr>
                </thead>
                <tbody>
                  {lesson.kosoado.map((cat, ci) => (
                    <tr key={ci}>
                      <td style={{ fontWeight: 600 }}>{cat.type}</td>
                      <td style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>{cat.ko}</td>
                      <td style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>{cat.so}</td>
                      <td style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>{cat.a}</td>
                      <td style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>{cat.do}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Numbers */}
        {lesson.sinoJapanese && (
          <div style={{ marginBottom: 24 }}>
            <h4 style={{ color: '#dc2626', marginBottom: 12 }}>{lesson.sinoJapanese.title}</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 6 }}>
              {lesson.sinoJapanese.numbers.map((n, ni) => (
                <div key={ni} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 12px', background: '#f8fafc', borderRadius: 6 }}>
                  <span style={{ fontWeight: 700, minWidth: 50, color: '#dc2626' }}>{n.num}</span>
                  <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 500 }}>{n.jp}</span>
                  <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{n.rm}</span>
                  {n.note && <span style={{ fontSize: '0.75rem', color: '#92400e', background: '#fef3c7', padding: '1px 6px', borderRadius: 4 }}>{n.note}</span>}
                </div>
              ))}
            </div>
          </div>
        )}

        {lesson.nativeJapanese && (
          <div style={{ marginBottom: 24 }}>
            <h4 style={{ color: '#dc2626', marginBottom: 8 }}>{lesson.nativeJapanese.title}</h4>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: 12 }}>{lesson.nativeJapanese.description}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 6 }}>
              {lesson.nativeJapanese.numbers.map((n, ni) => (
                <div key={ni} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 12px', background: '#f0fdf4', borderRadius: 6 }}>
                  <span style={{ fontWeight: 700, color: '#16a34a' }}>{n.num}</span>
                  <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 500 }}>{n.jp}</span>
                  <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{n.rm}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {lesson.counters && (
          <div style={{ marginBottom: 24 }}>
            <h4 style={{ color: '#dc2626', marginBottom: 8 }}>{lesson.counters.title}</h4>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: 12, whiteSpace: 'pre-line' }}>{lesson.counters.description}</p>
            <div style={{ display: 'grid', gap: 8 }}>
              {lesson.counters.common.map((c, ci) => (
                <div key={ci} style={{ padding: '10px 14px', background: '#f8fafc', borderRadius: 8, borderLeft: '3px solid #f59e0b' }}>
                  <div style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 600, marginBottom: 2 }}>{c.counter}</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{c.usage}</div>
                  <div style={{ fontSize: '0.85rem', fontFamily: "'Noto Sans JP', sans-serif", color: '#92400e' }}>{c.example}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Time */}
        {lesson.time && (
          <div style={{ marginBottom: 24 }}>
            <h4 style={{ color: '#dc2626', marginBottom: 12 }}>{lesson.time.title}</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 6, marginBottom: 16 }}>
              {lesson.time.hours.map((h, hi) => (
                <div key={hi} style={{ padding: '4px 12px', background: '#f8fafc', borderRadius: 6, fontSize: '0.9rem', fontFamily: "'Noto Sans JP', sans-serif" }}>{h}</div>
              ))}
            </div>
            <div style={{ marginBottom: 16 }}>
              {lesson.time.examples.map((ex, ei) => (
                <div key={ei} className="example-box">
                  <div className="jp">{ex}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {lesson.days && (
          <div style={{ marginBottom: 24 }}>
            <h4 style={{ color: '#dc2626', marginBottom: 12 }}>{lesson.days.title}</h4>
            <div style={{ display: 'grid', gap: 6 }}>
              {lesson.days.list.map((d, di) => (
                <div key={di} className="grammar-days-row">
                  <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 500 }}>{d.jp}</span>
                  <span style={{ fontWeight: 600 }}>{d.fr}</span>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{d.kanji}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {lesson.relativeTime && (
          <div style={{ marginBottom: 24 }}>
            <h4 style={{ color: '#dc2626', marginBottom: 12 }}>Relative time expressions</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 6 }}>
              {lesson.relativeTime.map((t, ti) => (
                <div key={ti} style={{ padding: '6px 12px', background: '#f1f5f9', borderRadius: 6, fontSize: '0.9rem' }}>
                  <span style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 500 }}>{t.jp}</span>
                  <span style={{ color: '#94a3b8' }}> ({t.rm}) </span>
                  <span style={{ color: '#64748b' }}>= {t.fr}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Te-form usages */}
        {lesson.usages && (
          <div>
            {lesson.usages.map((usage, ui) => (
              <div key={ui} style={{ marginBottom: 20 }}>
                <h4 style={{ color: '#dc2626', marginBottom: 10, fontSize: '0.95rem' }}>{usage.name}</h4>
                {usage.examples.map((ex, ei) => (
                  <div key={ei} className="example-box">
                    <div className="jp">{ex.jp} <SpeakButton text={ex.jp} /></div>
                    <div className="rm">{ex.rm}</div>
                    <div className="fr">{ex.fr}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Expression categories */}
        {lesson.categories && (
          <div>
            {lesson.categories.map((cat, ci) => (
              <div key={ci} style={{ marginBottom: 28 }}>
                <h4 style={{ color: '#dc2626', marginBottom: 12 }}>{cat.name}</h4>
                <div className="expression-grid">
                  {cat.expressions.map((expr, ei) => (
                    <div key={ei} className="expression-card">
                      <div>
                        <div className="expr-jp">{expr.jp} <SpeakButton text={expr.jp} /></div>
                        <div className="expr-rm">{expr.rm}</div>
                      </div>
                      <div className="expr-fr">{expr.fr}</div>
                      {expr.note && <div className="expr-note">{expr.note}</div>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Exercises */}
        {lesson.exercises && <ExerciseBlock exercises={lesson.exercises} />}
      </div>
    </div>
  );
}
