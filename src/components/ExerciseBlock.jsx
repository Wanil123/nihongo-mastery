import { useState } from 'react';

export default function ExerciseBlock({ exercises }) {
  return (
    <div className="exercise-section">
      <h4>Practice exercises</h4>
      {exercises.map((ex, i) => (
        <ExerciseItem key={i} exercise={ex} index={i} />
      ))}
    </div>
  );
}

function ExerciseItem({ exercise, index }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="exercise-item">
      <div className="question">
        {index + 1}. {exercise.question}
      </div>
      {exercise.hint && <div className="hint">Hint: {exercise.hint}</div>}
      {!revealed ? (
        <button className="answer-reveal" onClick={() => setRevealed(true)}>
          Show answer
        </button>
      ) : (
        <div className="answer-content">
          <div className="answer-text">{exercise.answer}</div>
          {exercise.explanation && (
            <div className="explanation">{exercise.explanation}</div>
          )}
        </div>
      )}
    </div>
  );
}
