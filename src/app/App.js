import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import QuizInstructions from "../pages/QuizInstructions";
import StartQuiz from "../pages/StartQuiz";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/instructions" element={<QuizInstructions />} />
        <Route path="/start-quiz" element={<StartQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
