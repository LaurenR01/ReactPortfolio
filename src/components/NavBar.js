import React from 'react';
import '../App.css'

export default function NavBar(selectedPage, handlePageChange){
    return (
        <div className="App">
            <nav className="App-header">
            <h1 className="name">Lauren Rowe </h1>
                <ul>
                <li><a href= "AboutMe" className="App-link" onClick={() => handlePageChange('AboutMe')}>About Me</a></li>
                <li><a href= "Portfolio" className="App-link" onClick={() => handlePageChange('Portfolio')}>Portfolio</a></li>
                <li><a href= "Contact"className="App-link" onClick={() => handlePageChange('Contact')}>Contact</a></li>
                <li><a href= "Resume" className="App-link" onClick={() => handlePageChange('Resume')}>Resume</a></li>
                </ul>
            </nav>
        </div>
    )
}