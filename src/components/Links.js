import React from 'react';
import "../App.css";
import GitHubIcon from '../images/github.png'
import LinkedInIcon from '../images/linkedin.png'
import MailIcon from '../images/mailicon.png'

export default function Links() {
    return (
        <div className="App-footer">
            <ul>
                <li>
                <a href="https://github.com/LaurenR01" className="App-link"><img src={GitHubIcon} className="icon" alt="GitHub"></img></a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/laurenrowe01/" className="App-link"><img src={LinkedInIcon} className="icon" alt="LinkedIn"></img></a>
                </li>
                <li>
                <a href="mailto:laurenrowe01@gmail.com" className="App-link"><img src={MailIcon} className="icon" alt="Email"></img></a>
                </li>
            </ul>
        </div>
    )
}
