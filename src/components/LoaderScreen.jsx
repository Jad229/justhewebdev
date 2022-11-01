import React from 'react';
import justinWalkin from "../src_images/JWalking.gif";
import justinStance from "../src_images/JustinSpriteUPSCALED.png";
import Typed from "react-typed";

function LoaderScreen(){
    return (
        <div className="loader-wrapper">
            <div className="loader-content">
                <span ><img src={justinWalkin} alt="loader sprite"/></span>
                <Typed
                    strings={["<h2>Hello Stranger! ready for an adventure?</h2>"]}
                    typeSpeed={50}
                    backSpeed={100}
                />
                <img className="loader-sprite" src={justinStance} alt="pixel justin"/>
            </div>
        </div>
    );
}
export default LoaderScreen;