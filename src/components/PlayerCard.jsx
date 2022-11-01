import React from 'react';
import idPhoto from "../src_images/JD.png";
import htmlLogo from "../src_images/HTML.png";
import cssLogo from "../src_images/css.png";
import javascriptLogo from "../src_images/javascript.png";
import bootstrapLogo from "../src_images/bootstrap-plain.svg";
import jqueryLogo from "../src_images/jquery-plain.svg";
import nodejsLogo from "../src_images/nodejs.png";
import reactLogo from "../src_images/react-original.svg";
import gitLogo from "../src_images/git.png";
import phpLogo from "../src_images/php-plain.svg";
import googleLogo from "../src_images/google-plain.svg";
import figmaLogo from "../src_images/figma.svg";

function PlayerCard(){
    return (
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
    );
}
export default PlayerCard;