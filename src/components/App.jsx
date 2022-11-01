import React from "react";
import Card from "./Card";
import Banner from "./Banner";
import Footer from "./Footer";
import idealCarThumbnail from "../src_images/ideal-car-corp-thumbnail.png";
import mySiteThumbnail from "../src_images/my-site-thumbnail.png";
import keeperAppThumbnail from "../src_images/keeper-app-thumbnail.png";
import idPhoto2 from "../src_images/Justin-pose.png"
import PlayerCard from "./PlayerCard";
import Navigation from "./Navigation";
import LoaderScreen from "./LoaderScreen";

function App() {
  return (
    <div>
      <LoaderScreen />
      <div className="hero-wrapper">
        <Navigation />
        <div className="hero-section">
          <div className="hero-title-container">
            <h1>Hey! I'm Justin</h1>
            <p>Front-End Developer</p>
          </div>
          <img src={idPhoto2} alt="id photo"/>
        </div>
      </div>
      <Banner heading="Projects"/>
      <div id="projects" className="projects-section">

        <div className="card-wrapper">
          <Card
            pageURL="https://jad229.github.io/Car-Page/"
            imgURL={idealCarThumbnail}
            title="Ideal Car Corp"
            description="Ideal Car Corp E-commerce website developed using Reactjs, Html, and CSS. "
          />
          <Card
            imgURL={keeperAppThumbnail}
            title="Keeper App"
            description="A Google keep clone for learning the principles of Reactjs components, mapping, hooks, and additional basics."
          />
          <Card
            pageURL="https://jad229.github.io/My-Site/"
            imgURL={mySiteThumbnail}
            title="Old Personal Website"
            description="Ex-personal website created and deployed for the use of practicing fundamental Html and CSS basics."
          />

        </div>
        <Banner heading="About Me"/>
        <div id="aboutme" className="aboutme-section">

          <div className="aboutme-card">
            <p>
              Hello! Welcome to my little space on the internet! I’m Justin Diaz, a Front-End Developer.
              I love technology and all kinds of games. I’m a Computer Technology undergraduate at NJIT.
              I’ve made several web apps and I don’t plan to stop anytime soon. As the industry grows I plan
              to grow with it and learn the latest frameworks and libraries. My passion for technology fuels
              me to inspire others through my creations!
            </p>
          </div>
        </div>
        <Banner heading="Player Card"/>
        <div id="player-stats" className="skills-section">
          <PlayerCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
