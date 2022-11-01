import React from "react";
import linkedinLogo from "../src_images/linkedin-icon.svg";
import githubLogo from "../src_images/github-icon.svg";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="socials">
                <a href="https://www.linkedin.com/in/justinamarydiaz/"><img src={linkedinLogo} alt="linkedin logo"/></a>
                <a href="https://github.com/Jad229"><img src={githubLogo} alt="github logo"/></a>
            </div>
            <p>&copy; {currentYear} Justin Diaz</p>
        </div>
    );
}
export default Footer;