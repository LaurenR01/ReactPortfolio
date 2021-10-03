
import React, {useState} from 'react';
import '../App.css'

export default function NavBar(){
 
    return (
        <div className="App">
            <nav className="App-header">
            <h1 className="name">Lauren Rowe</h1>
                <ul>
                <li><a href= "AboutMe" className="App-link" onClick={() => ('AboutMe')}>About Me</a></li>
                <li><a href= "Portfolio" className="App-link" onClick={() => ('Portfolio')}>Portfolio</a></li>
                <li><a href= "Contact"className="App-link" onClick={() => ('Contact')}>Contact</a></li>
                <li><a href= "Resume" className="App-link" onClick={() => ('Resume')}>Resume</a></li>
                </ul>
            </nav>
        </div>
    )
}