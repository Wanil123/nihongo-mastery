import { useState, useEffect } from 'react';
import Quiz from '../components/Quiz';
import ExerciseBlock from '../components/ExerciseBlock';
import {
  sinoJapaneseNumbers,
  nativeJapaneseNumbers,
  timeHours,
  timeMinutes,
  timeExamples,
  months,
  daysOfMonth,
  dateExamples,
  daysOfWeek,
  weekExamples,
  numberExercises,
  numberQuizQuestions,
} from '../data/numbers';

const tabs = ['数字 Numbers', '時間 Time', '日付 Dates', '曜日 Days', '練習 Exercises', 'クイズ Quiz'];

export default function Numbers() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); }, [activeTab]);

  return (
    <div>
      <div className="page-header">
        <h2>数字 Numbers</h2>
        <p className="subtitle">Number readings, time, dates, and days of the week</p>
      </div>

      <div className="intro-box">
        <h3>About Japanese Numbers</h3>
        <p>
          Japanese has <strong>two number systems</strong>: Sino-Japanese (音読み — on'yomi), borrowed from Chinese and used
          for most counting, and Native Japanese (和語数詞 — wago suushi), used for general objects up to 10.
          When reading times, dates, and months, specific readings apply — many are irregular and must be memorised.
        </p>
        <ul className="tips-list">
          <li>4 is read よん (yon) in most contexts, but し (shi) in months (April = しがつ).</li>
          <li>7 is read なな (nana) for general counting, but しち (shichi) for hours and months.</li>
          <li>9 is read きゅう (kyuu) alone, but く (ku) for hours and months.</li>
          <li>300, 600, 800 and 3,000, 8,000 have irregular sound changes.</li>
          <li>Dates 1–10, 14, 20, and 24 have special readings derived from native Japanese numbers.</li>
        </ul>
      </div>

      <div className="tabs">
        {tabs.map((tab, i) => (
          <button key={tab} className={`tab ${i === activeTab ? 'active' : ''}`} onClick={() => setActiveTab(i)}>
            {tab}
          </button>
        ))}
      </div>

      {/* ── TAB 0 : NUMBERS ─────────────────────────────────────────────── */}
      {activeTab === 0 && (
        <div>
          {/* Sino-Japanese */}
          <div className="card" style={{ marginBottom: 24 }}>
            <div className="card-header">
              <h3>Sino-Japanese Numbers (音読み)</h3>
              <span className="badge">On'yomi</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: 16 }}>
              Used for counting, telling time, dates, phone numbers, prices, and most everyday situations.
              Numbers are built by combining tens, hundreds, and thousands.
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table className="vocab-table">
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Japanese</th>
                    <th>Romaji</th>
                    <th>English</th>
                    <th>Note</th>
                  </tr>
                </thead>
                <tbody>
                  {sinoJapaneseNumbers.map((n, i) => (
                    <tr key={i} style={n.note ? { background: '#fefce8' } : {}}>
                      <td style={{ fontWeight: 700, color: '#dc2626' }}>{n.num}</td>
                      <td className="jp-col" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '1.1rem' }}>{n.jp}</td>
                      <td className="rm-col">{n.rm}</td>
                      <td>{n.en}</td>
                      <td style={{ fontSize: '0.82rem', color: '#92400e' }}>{n.note || ''}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ marginTop: 16, padding: '12px 16px', background: '#fef2f2', borderRadius: 8, borderLeft: '4px solid #dc2626' }}>
              <strong style={{ display: 'block', marginBottom: 6 }}>Building larger numbers</strong>
              <p style={{ fontSize: '0.9rem', margin: 0, color: '#475569' }}>
                Pattern: [tens] + じゅう + [ones] &nbsp;|&nbsp; [hundreds] + ひゃく + ... &nbsp;|&nbsp; [thousands] + せん + ...<br />
                Example: 256 = にひゃく (200) + ごじゅう (50) + ろく (6) = <strong>にひゃくごじゅうろく</strong>
              </p>
            </div>
          </div>

          {/* Native Japanese */}
          <div className="card">
            <div className="card-header">
              <h3>Native Japanese Numbers (和語数詞)</h3>
              <span className="badge">Wago</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: 16 }}>
              Used for counting general objects (without a counter), and for abstract quantities up to 10.
              Above 10, Sino-Japanese numbers take over.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 10 }}>
              {nativeJapaneseNumbers.map((n, i) => (
                <div key={i} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: '10px 14px' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#dc2626', fontFamily: "'Noto Sans JP', sans-serif" }}>{n.jp}</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{n.rm}</div>
                  <div style={{ fontSize: '0.9rem', color: '#1e293b', marginTop: 2 }}>{n.num} — {n.en}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, padding: '12px 16px', background: '#f0fdf4', borderRadius: 8, borderLeft: '4px solid #16a34a' }}>
              <strong>Usage example</strong>
              <div className="particle-example" style={{ marginTop: 8 }}>
                <div className="jp">りんごをみっつください。</div>
                <div className="rm">Ringo o mittsu kudasai.</div>
                <div className="en">Please give me three apples.</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 1 : TIME ────────────────────────────────────────────────── */}
      {activeTab === 1 && (
        <div>
          {/* Hours */}
          <div className="card" style={{ marginBottom: 24 }}>
            <div className="card-header">
              <h3>Hours (〜時)</h3>
              <span className="badge">〜じ</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: 16 }}>
              Add 時 (じ) after the number to say an hour. Watch out for <strong>4時 (よじ)</strong> and <strong>9時 (くじ)</strong> — they are irregular.
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table className="vocab-table">
                <thead>
                  <tr><th>Time</th><th>Japanese</th><th>Romaji</th><th>English</th><th>Note</th></tr>
                </thead>
                <tbody>
                  {timeHours.map((h, i) => (
                    <tr key={i} style={h.note ? { background: '#fefce8' } : {}}>
                      <td style={{ fontWeight: 700, color: '#dc2626' }}>{h.time}</td>
                      <td className="jp-col" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '1.1rem' }}>{h.jp}</td>
                      <td className="rm-col">{h.rm}</td>
                      <td>{h.en}</td>
                      <td style={{ fontSize: '0.82rem', color: '#92400e' }}>{h.note || ''}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Minutes */}
          <div className="card" style={{ marginBottom: 24 }}>
            <div className="card-header">
              <h3>Minutes (〜分)</h3>
              <span className="badge">〜ふん / ぷん</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: 16 }}>
              Minutes use ふん (fun) or ぷん (pun) depending on the preceding number. 1, 3, 4, 6, 8, 10 trigger sound changes.
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table className="vocab-table">
                <thead>
                  <tr><th>Minutes</th><th>Japanese</th><th>Romaji</th><th>English</th><th>Note</th></tr>
                </thead>
                <tbody>
                  {timeMinutes.map((m, i) => (
                    <tr key={i} style={m.note ? { background: '#fefce8' } : {}}>
                      <td style={{ fontWeight: 700, color: '#dc2626' }}>{m.min}</td>
                      <td className="jp-col" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '1.05rem' }}>{m.jp}</td>
                      <td className="rm-col">{m.rm}</td>
                      <td>{m.en}</td>
                      <td style={{ fontSize: '0.82rem', color: '#92400e' }}>{m.note || ''}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Time expressions */}
          <div className="card">
            <div className="card-header">
              <h3>Time Expressions</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: 4 }}>
              Use <strong>午前</strong> (ごぜん, gozen) for AM and <strong>午後</strong> (ごご, gogo) for PM.<br />
              Structure: [AM/PM] + [hour]時 + [minutes]分 + です
            </p>
            <div style={{ marginTop: 12 }}>
              {timeExamples.map((ex, i) => (
                <div key={i} className="particle-example">
                  <div className="jp">{ex.jp}</div>
                  <div className="rm">{ex.rm}</div>
                  <div className="en">{ex.en}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 2 : DATES ───────────────────────────────────────────────── */}
      {activeTab === 2 && (
        <div>
          {/* Months */}
          <div className="card" style={{ marginBottom: 24 }}>
            <div className="card-header">
              <h3>Months (〜月)</h3>
              <span className="badge">〜がつ</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: 16 }}>
              Add 月 (がつ, gatsu) after the number. Months 4, 7, and 9 use special readings:
              し (4), しち (7), く (9) — not よん, なな, きゅう.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10 }}>
              {months.map((m, i) => (
                <div key={i} style={{
                  background: m.note ? '#fefce8' : '#f8fafc',
                  border: `1px solid ${m.note ? '#fde68a' : '#e2e8f0'}`,
                  borderRadius: 8,
                  padding: '10px 14px',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, color: '#dc2626', fontSize: '1rem' }}>{m.num}月</span>
                    <span style={{ fontSize: '1.15rem', fontFamily: "'Noto Sans JP', sans-serif" }}>{m.jp}</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{m.rm}</div>
                  <div style={{ fontSize: '0.9rem', color: '#1e293b', marginTop: 2 }}>{m.en}</div>
                  {m.note && <div style={{ fontSize: '0.78rem', color: '#92400e', marginTop: 4 }}>⚠ {m.note}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* Days of month */}
          <div className="card" style={{ marginBottom: 24 }}>
            <div className="card-header">
              <h3>Days of the Month (〜日)</h3>
              <span className="badge">〜にち / 〜か</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: 16 }}>
              Days 1–10, 14, 20, and 24 have <strong>irregular native Japanese readings</strong>. All others use [number] + にち (nichi).
              Highlighted rows are irregular.
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table className="vocab-table">
                <thead>
                  <tr><th>Day</th><th>Japanese</th><th>Romaji</th><th>English</th></tr>
                </thead>
                <tbody>
                  {daysOfMonth.map((d, i) => (
                    <tr key={i} style={d.irregular ? { background: '#fefce8', fontWeight: 600 } : {}}>
                      <td style={{ fontWeight: 700, color: '#dc2626' }}>{d.num}日</td>
                      <td className="jp-col" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '1.05rem' }}>
                        {d.jp}
                        {d.irregular && <span style={{ fontSize: '0.7rem', color: '#92400e', marginLeft: 6 }}>irregular</span>}
                      </td>
                      <td className="rm-col">{d.rm}</td>
                      <td>{d.en}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Date expressions */}
          <div className="card">
            <div className="card-header">
              <h3>Date Expressions</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: 4 }}>
              Structure: [year]年 + [month]月 + [day]日<br />
              Example: 2024年5月3日 = にせんにじゅうよねんごがつみっか
            </p>
            <div style={{ marginTop: 12 }}>
              {dateExamples.map((ex, i) => (
                <div key={i} className="particle-example">
                  <div className="jp">{ex.jp}</div>
                  <div className="rm">{ex.rm}</div>
                  <div className="en">{ex.en}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 3 : DAYS OF WEEK ────────────────────────────────────────── */}
      {activeTab === 3 && (
        <div>
          <div className="card" style={{ marginBottom: 24 }}>
            <div className="card-header">
              <h3>Days of the Week (曜日)</h3>
              <span className="badge">〜ようび</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: 16 }}>
              Each day is named after a natural element. Add 曜日 (ようび, yōbi) to the element kanji.
              The elements follow the ancient East Asian cosmological order.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
              {daysOfWeek.map((d, i) => {
                const colors = ['#dbeafe','#fee2e2','#cffafe','#dcfce7','#fef9c3','#fde8d8','#fce7f3'];
                const borders = ['#93c5fd','#fca5a5','#67e8f9','#86efac','#fde047','#fdba74','#f9a8d4'];
                return (
                  <div key={i} style={{
                    background: colors[i],
                    border: `2px solid ${borders[i]}`,
                    borderRadius: 10,
                    padding: '14px 16px',
                  }}>
                    <div style={{ fontSize: '1.5rem', fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 700 }}>{d.kanji}</div>
                    <div style={{ fontSize: '1.1rem', fontFamily: "'Noto Sans JP', sans-serif", marginTop: 4 }}>{d.jp}</div>
                    <div style={{ fontSize: '0.85rem', color: '#475569' }}>{d.rm}</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, marginTop: 6 }}>{d.en}</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: 2 }}>{d.element}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>Useful Week Expressions</h3>
            </div>
            <div style={{ marginTop: 8 }}>
              {weekExamples.map((ex, i) => (
                <div key={i} className="particle-example">
                  <div className="jp">{ex.jp}</div>
                  <div className="rm">{ex.rm}</div>
                  <div className="en">{ex.en}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, padding: '12px 16px', background: '#f0fdf4', borderRadius: 8, borderLeft: '4px solid #16a34a' }}>
              <strong>Useful vocabulary</strong>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 8, marginTop: 10 }}>
                {[
                  { jp: '今日 (きょう)', en: 'today' },
                  { jp: '明日 (あした)', en: 'tomorrow' },
                  { jp: '昨日 (きのう)', en: 'yesterday' },
                  { jp: '来週 (らいしゅう)', en: 'next week' },
                  { jp: '先週 (せんしゅう)', en: 'last week' },
                  { jp: '毎週 (まいしゅう)', en: 'every week' },
                  { jp: '週末 (しゅうまつ)', en: 'weekend' },
                  { jp: '平日 (へいじつ)', en: 'weekday' },
                ].map((w, i) => (
                  <div key={i} style={{ background: '#f8fafc', borderRadius: 6, padding: '6px 10px', fontSize: '0.9rem' }}>
                    <span style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>{w.jp}</span>
                    <span style={{ color: '#64748b', marginLeft: 6 }}>{w.en}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 4 : EXERCISES ───────────────────────────────────────────── */}
      {activeTab === 4 && (
        <div className="card">
          <div className="card-header">
            <h3>Practice Exercises</h3>
            <span className="badge">練習</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: 16 }}>
            Click <em>Show answer</em> to reveal the answer and explanation.
          </p>
          <ExerciseBlock exercises={numberExercises} />
        </div>
      )}

      {/* ── TAB 5 : QUIZ ────────────────────────────────────────────────── */}
      {activeTab === 5 && (
        <div className="card">
          <div className="card-header">
            <h3>Numbers Quiz</h3>
            <span className="badge">クイズ</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: 16 }}>
            {numberQuizQuestions.length} questions covering numbers, time, dates, and days of the week.
            Wrong answers will reappear until you get them right!
          </p>
          <Quiz questions={numberQuizQuestions} title="数字・時間・日付 Quiz" />
        </div>
      )}
    </div>
  );
}
