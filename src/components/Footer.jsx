import React from "react";
import linkedinLogo from "../src_images/linkedin-icon.svg";
import githubLogo from "../src_images/github-icon.svg";
import idPhoto2 from "../src_images/Justin-pose.png";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="socials">
                <a href="https://www.linkedin.com/in/justinamarydiaz/"><img src={linkedinLogo} alt="linkedin logo"/></a>
                <a href="https://github.com/Jad229"><img src={githubLogo} alt="github logo"/></a>
                <img src={idPhoto2} alt="id photo"/>
            </div>
            <p>&copy; {currentYear} Justin Diaz</p>
        </div>
    );
}
export default Footer;