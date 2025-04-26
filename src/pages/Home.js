import React from "react";

function Home() {
  function startQuiz() {
    console.log("Quiz Is Working");
  }

  return (
    <div className="container py-5">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="card p-5 shadow-lg text-center">
          <h1 className="mb-3">Welcome to the Quiz!</h1>
          <p className="mb-4">Test your knowledge by starting the quiz.</p>
          <button className="btn btn-success btn-lg" onClick={startQuiz}>
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
