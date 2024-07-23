import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import AssessmentForm from "./components/AssessmentForm";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/assessments" element={<AssessmentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
