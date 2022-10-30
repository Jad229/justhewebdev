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
            title="Personal Website"
            description="First website I made and deployed on github. Learned the basics of html and css."
          />
        </div>
      </div>
    </div>
  );
}

export default App;
