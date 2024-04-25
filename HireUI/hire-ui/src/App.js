import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navigation from "./Navigation";
import "./css/styles.css";

function App() {
  return (
    <Router>
      <div>
        <header>
          <div className="container">
            <h1>My Website</h1>
            <Navigation />
          </div>
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <footer>
          <div className="container">&copy; 2024 My Website</div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
