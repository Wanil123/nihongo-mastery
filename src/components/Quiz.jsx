import { useState, useMemo, useCallback } from 'react';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Quiz({ questions, title }) {
  const shuffledQuestions = useMemo(() => shuffle(questions), [questions]);

  const [queue, setQueue] = useState(shuffledQuestions);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [wrongCount, setWrongCount] = useState(0);

  const q = queue[current];

  const handleSelect = useCallback((option) => {
    if (selected !== null) return;
    setSelected(option);
    setTotalAnswered(t => t + 1);
    if (option === q.answer) {
      setScore(s => s + 1);
    } else {
      setWrongCount(w => w + 1);
      // Re-insert the question at a random position later in the queue
      setQueue(prev => {
        const newQueue = [...prev];
        const insertPos = current + 2 + Math.floor(Math.random() * Math.min(3, newQueue.length - current));
        newQueue.splice(insertPos, 0, q);
        return newQueue;
      });
    }
    setShowNext(true);
  }, [selected, q, current]);

  const handleNext = useCallback(() => {
    if (current + 1 >= queue.length) {
      setFinished(true);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setShowNext(false);
    }
  }, [current, queue.length]);

  const handleRestart = useCallback(() => {
    const newShuffled = shuffle(questions);
    setQueue(newShuffled);
    setCurrent(0);
    setScore(0);
    setTotalAnswered(0);
    setSelected(null);
    setFinished(false);
    setShowNext(false);
    setWrongCount(0);
  }, [questions]);

  if (finished) {
    const pct = Math.round((score / totalAnswered) * 100);
    let message = '';
    if (pct === 100) message = 'Perfect! すばらしい！ (Subarashii!) You are amazing!';
    else if (pct >= 80) message = 'Great job! よくできました！ (Yoku dekimashita!) Keep going!';
    else if (pct >= 60) message = 'Not bad! もうすこし がんばって！ (Mou sukoshi ganbatte!) Almost there!';
    else message = 'Keep practicing! れんしゅうしてください！ (Renshuu shite kudasai!)';

    return (
      <div className="quiz-container">
        <div className="quiz-result">
          <div className="score">{score}/{totalAnswered}</div>
          <div style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: 4 }}>{pct}%</div>
          {wrongCount > 0 && (
            <div style={{ fontSize: '0.85rem', color: '#ef4444', marginBottom: 8 }}>
              {wrongCount} mistake{wrongCount !== 1 ? 's' : ''} retried
            </div>
          )}
          <p>{message}</p>
          <button className="btn btn-primary" onClick={handleRestart}>
            Restart quiz
          </button>
        </div>
      </div>
    );
  }

  if (!q) return null;

  // Shuffle options for display
  const displayOptions = useMemo(() => {
    if (!q) return [];
    return shuffle(q.options);
  }, [q]);

  const progress = questions.length > 0 ? Math.min(((current + 1) / queue.length) * 100, 100) : 0;

  return (
    <div className="quiz-container">
      {title && <h4 style={{ marginBottom: 16, color: '#0c4a6e' }}>{title}</h4>}
      <div className="quiz-progress">
        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="quiz-progress-text">{current + 1}/{queue.length}</span>
        <span className="quiz-progress-text" style={{ color: '#16a34a' }}>{score} correct</span>
      </div>
      <div className="quiz-question">
        <div className="question-char">{q.char || q.word || q.kanji}</div>
        <p>{q.instruction || 'Choose the correct answer'}</p>
      </div>
      <div className="quiz-options">
        {displayOptions.map((opt, idx) => {
          let cls = 'quiz-option';
          if (selected !== null) {
            if (opt === q.answer) cls += ' correct';
            else if (opt === selected) cls += ' wrong';
          }
          return (
            <button
              key={`${opt}-${idx}`}
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
          {selected !== q.answer && (
            <div style={{ color: '#ef4444', fontSize: '0.9rem', marginBottom: 8 }}>
              Correct answer: <strong>{q.answer}</strong> — This question will appear again!
            </div>
          )}
          <button className="btn btn-next" onClick={handleNext}>
            {current + 1 >= queue.length ? 'See results' : 'Next question →'}
          </button>
        </div>
      )}
    </div>
  );
}
