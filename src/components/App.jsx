import React from "react";
import Card from "./Card";
import Banner from "./Banner";

function App() {
  return (
    <div>
      <div className="hero-wrapper">
        <div className="navbar">
          <div className="nav-btn"><a href="#aboutme">About Me</a></div>
          <div className="nav-btn"><a href="#projects">Projects</a></div>
        </div>
        <div className="hero-section">
          <div className="hero-title-container">
            <h1>Hey! I'm Justin</h1>
            <p>Front-End Developer</p>
          </div>
        </div>
      </div>
      <div className="projects-section">
        <Banner heading="Projects"/>
        <Card />
      </div>
    </div>
  );
}

export default App;
