import React from 'react';
import "../App.css";

export default function Links() {
    return (
        <div className="App-footer">
            <ul>
                <li>
                <a href="https://github.com/LaurenR01" className="App-link"><img src="../images/github.png" className="icon" alt="GitHub"></img></a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/laurenrowe01/" className="App-link"><img src="../images/linkedin.png" className="icon" alt="LinkedIn"></img></a>
                </li>
                <li>
                <a href="mailto:laurenrowe01@gmail.com" className="App-link"><img src="../mailicon.png" className="icon" alt="Email"></img></a>
                </li>
            </ul>
        </div>
    )
}
