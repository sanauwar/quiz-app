import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";

import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
