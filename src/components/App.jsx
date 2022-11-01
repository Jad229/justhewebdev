import React from "react";
import Card from "./Card";
import Banner from "./Banner";
import idealCarThumbnail from "../src_images/ideal-car-corp-thumbnail.png";
import mySiteThumbnail from "../src_images/my-site-thumbnail.png";
import keeperAppThumbnail from "../src_images/keeper-app-thumbnail.png";
import idPhoto from "../src_images/JD.png";
import idPhoto2 from "../src_images/Justin-pose.png"
import htmlLogo from "../src_images/HTML.png"
import cssLogo from "../src_images/css.png"
import javascriptLogo from "../src_images/javascript.png"
import googleLogo from "../src_images/google-plain.svg"
import figmaLogo from "../src_images/figma.svg"
import bootstrapLogo from "../src_images/bootstrap-plain.svg"
import gitLogo from "../src_images/git.png"
import jqueryLogo from "../src_images/jquery-plain.svg"
import nodejsLogo from "../src_images/nodejs.png"
import reactLogo from "../src_images/react-original.svg"
import phpLogo from "../src_images/php-plain.svg"

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

          <div className="player-card">
            <div className="bio">
              <h2>Name: Justin Diaz</h2>
              <div className="id-photo-background">
                <img src={idPhoto} alt="id photo"/>
              </div>
              <h2>Lv. 21</h2>
            </div>

            <div className="skills">
              <h2>Skills</h2>
              <div className="skill-board">
                <img className="skill-logo" src={htmlLogo} alt="html logo"/>
                <img className="skill-logo" src={cssLogo} alt="css logo"/>
                <img className="skill-logo" src={javascriptLogo} alt="javascript logo"/>
                <img className="skill-logo" src={bootstrapLogo} alt="react logo"/>
                <img className="skill-logo" src={jqueryLogo} alt="react logo"/>
                <img className="skill-logo" src={nodejsLogo} alt="react logo"/>
                <img className="skill-logo" src={reactLogo} alt="react logo"/>
                <img className="skill-logo" src={gitLogo} alt="react logo"/>
                <img className="skill-logo" src={phpLogo} alt="react logo"/>
                <img className="skill-logo" src={googleLogo} alt="react logo"/>
                <img className="skill-logo" src={figmaLogo} alt="react logo"/>
              </div>
              <p>Passive: Gets bonus focus when listening to great music.</p>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
