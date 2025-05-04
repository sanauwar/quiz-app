import React from "react";
import { useNavigate } from "react-router-dom";

const QuizInstructions = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/start-quiz"); // Redirect to quiz page
  };

  return (
    <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center px-3">
      <div
        className="bg-white p-4 p-md-5 rounded-4 shadow-lg w-100"
        style={{ maxWidth: "600px" }}
      >
        <h1 className="text-primary mb-3 text-center fw-bold fs-3">
          Quiz Instructions
        </h1>

        <p className="text-secondary mb-3 text-center">
          Welcome to the quiz! Please read the instructions below carefully:
        </p>

        <ul className="text-start text-secondary mb-4 ps-3">
          <li>The quiz contains 10 multiple-choice questions.</li>
          <li>You will have 15 seconds to answer each question.</li>
          <li>You can’t go back to previous questions once answered.</li>
          <li>Each correct answer awards you 10 points.</li>
        </ul>

        <div className="text-center">
          <button onClick={handleStart} className="btn btn-primary px-4 py-2">
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizInstructions;
