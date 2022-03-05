import React from "react";
import mail from "../images/mail.jpg";
import linkedin from "../images/linkedin.png";

export default function Main() {
    return (
        <div className="main--container">
            <p className="main--name">Laura Smith</p>
            <p className="main--title">Front Developer</p>
            <p className="main--web">laurasmith.website</p>
            <button className="main--button1"> 
                <p className="main-mail">Email</p>
                <img src={mail} alt="mail not found" className="main-pic"/>
            </button>
            <button className="main--button2"> 
                <p className="main-linkedin">LinkedIn</p>
                <img src={linkedin} alt="mail not found" className="main-link-pic"/>
            </button>
            <div className="main-group">
                <h1 className="main-about">About</h1>
                <p className="main-parag">I am a frontend developer with a particular interest
                     in making things simple and automating daily
                      tasks. I try to keep up with security and best
                       practices, and am always looking for new things to
                        learn.</p>
                
                <h1 className="main-interests">Interests</h1>
                <p className="main-parag-interests">Food expert. Music scholar. Reader. Internet
                 fanatic. Bacon buff. Entrepreneur. Travel geek. Pop
                  culture ninja. Coffee fanatic.</p>

            </div>

        </div>
    )
}