import React from "react";
import Card from "./Card";
import Banner from "./Banner";
import idealCarThumbnail from "../src_images/ideal-car-corp-thumbnail.png";
import mySiteThumbnail from "../src_images/my-site-thumbnail.png";
import keeperAppThumbnail from "../src_images/keeper-app-thumbnail.png";

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
      <div id="projects" className="projects-section">
        <Banner heading="Projects"/>
        <div className="card-wrapper">
          <Card
            pageURL="https://jad229.github.io/Car-Page/"
            imgURL={idealCarThumbnail}
            title="Ideal Car Corp"
            description="E-commerce car website I developed for Ideal Car Corp using reactjs, html, and css."
          />
          <Card
            imgURL={keeperAppThumbnail}
            title="Keeper App"
            description="Google keep clone, that taught me the basics of reactjs components, mapping, hooks, and other basics."
          />
          <Card
            pageURL="https://jad229.github.io/My-Site/"
            imgURL={mySiteThumbnail}
            title="Old Personal Website"
            description="First website I made and deployed on github. Learned the basics of html and css."
          />
        </div>
        <div id="aboutme" className="aboutme-section">
          <Banner heading="About Me"/>
          <div className="aboutme-card">
            <p>
              Hello! Welcome to my little space on the internet! I’m Justin Diaz, a Front-End Developer.
              I love technology and all kinds of games. I’m a Computer Technology undergraduate at NJIT.
              I’ve made several web apps and I don’t plan to stop anytime soon. As the industry grows I plan
              to grow with it and learn the latest frameworks and libraries.
            </p>
          </div>
        </div>
        <div id="player-stats">
          <Banner heading="Player Card"/>
        </div>
      </div>
    </div>
  );
}

export default App;
