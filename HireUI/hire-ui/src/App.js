import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/Views/home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Views/candidate/Login";
import Navigation from "./Navigation";
import "./css/styles.css";
import EmployerLogin from "./Views/employer/EmpLogin";

function App() {

  return (
    <Router>
      <div>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/candidatelogin" element={<Login />} />
            <Route path="/employerlogin" element={<EmployerLogin />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
