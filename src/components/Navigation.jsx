import React from "react";
import Button from "./Button";

function Navigation(){
    return(
    <div className="navbar">
        <Button href="#aboutme" text="About me"/>
        <Button href="#projects" text="Projects"/>
        <Button href="#player-stats" text="Stats"/>
    </div>
);
}
export default Navigation;