import React, { useState } from "react";
import questions from "../services/questions.json";

export default function StartQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionClick = (option) => {
    setSelected(option);
    setShowAnswer(true);

    if (option === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setShowAnswer(false);
    setCurrentQuestion((prev) => prev + 1);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelected(null);
    setShowAnswer(false);
    setScore(0);
  };

  if (currentQuestion >= questions.length) {
    return (
      <div className="container text-center mt-5">
        <h2>🎉 Quiz Complete!</h2>
        <p className="fs-4 mt-3">
          Your Score: <strong>{score}</strong> / {questions.length}
        </p>
        <button className="btn btn-secondary mt-4" onClick={resetQuiz}>
          Start Again
        </button>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span>
          Question {currentQuestion + 1} of {questions.length}
        </span>
        <span>Score: {score}</span>
      </div>
      <div className="card shadow p-4">
        <h4 className="mb-4">{q.question}</h4>
        <div className="list-group">
          {q.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`list-group-item list-group-item-action ${
                showAnswer
                  ? option === q.answer
                    ? "list-group-item-success"
                    : option === selected
                    ? "list-group-item-danger"
                    : ""
                  : ""
              }`}
              disabled={showAnswer}
            >
              {option}
            </button>
          ))}
        </div>

        {showAnswer && (
          <button className="btn btn-primary mt-4" onClick={handleNext}>
            Next Question
          </button>
        )}
      </div>
    </div>
  );
}
