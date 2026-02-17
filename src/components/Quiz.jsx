import { useState } from 'react';

export default function Quiz({ questions, title }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);
  const [showNext, setShowNext] = useState(false);

  const q = questions[current];

  const handleSelect = (option) => {
    if (selected !== null) return;
    setSelected(option);
    if (option === q.answer) {
      setScore(s => s + 1);
    }
    setShowNext(true);
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setShowNext(false);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
    setShowNext(false);
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    let message = '';
    if (pct === 100) message = 'Perfect! すばらしい！ (Subarashii!) You are amazing!';
    else if (pct >= 80) message = 'Great job! よくできました！ (Yoku dekimashita!) Keep going!';
    else if (pct >= 60) message = 'Not bad! もうすこし がんばって！ (Mou sukoshi ganbatte!) Almost there!';
    else message = 'Keep practicing! れんしゅうしてください！ (Renshuu shite kudasai!)';

    return (
      <div className="quiz-container">
        <div className="quiz-result">
          <div className="score">{score}/{questions.length}</div>
          <p>{message}</p>
          <button className="btn btn-primary" onClick={handleRestart}>
            Restart quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      {title && <h4 style={{ marginBottom: 16, color: '#0c4a6e' }}>{title}</h4>}
      <div className="quiz-progress">
        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${((current + 1) / questions.length) * 100}%` }} />
        </div>
        <span className="quiz-progress-text">{current + 1}/{questions.length}</span>
      </div>
      <div className="quiz-question">
        <div className="question-char">{q.char || q.word || q.kanji}</div>
        <p>{q.instruction || 'Choose the correct answer'}</p>
      </div>
      <div className="quiz-options">
        {q.options.map((opt) => {
          let cls = 'quiz-option';
          if (selected !== null) {
            if (opt === q.answer) cls += ' correct';
            else if (opt === selected) cls += ' wrong';
          }
          return (
            <button
              key={opt}
              className={cls}
              onClick={() => handleSelect(opt)}
              disabled={selected !== null}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {showNext && (
        <div style={{ textAlign: 'center' }}>
          <button className="btn btn-next" onClick={handleNext}>
            {current + 1 >= questions.length ? 'See results' : 'Next question →'}
          </button>
        </div>
      )}
    </div>
  );
}
