import React from "react";
import twitter from "../images/twitterIcon.png";
import facebook from "../images/facebookIcon.png";
import instagram from "../images/instagramIcon.png";
import github from "../images/gitHubIcon.png";

export default function Footer() {
    return (
        <div className="footer--container">
            <img src={twitter} alt="twitter not found" className="footer-twitter"/>
            <img src={facebook} alt="facebook not found" className="footer-facebook"/>
            <img src={instagram} alt="instagram not found" className="footer-instagram"/>
            <img src={github} alt="github not found" className="footer-github"/>
        </div>
    )
}