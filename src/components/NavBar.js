import React from 'react';
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
import './NavBar.css'

export default function NavBar(){
    return (
        <div>
            <nav>
                <h1>Lauren Rowe </h1>
                <a href= {AboutMe}>About Me</a>
                <a href= {Portfolio}>Portfolio</a>
                <a href= {Contact}>Contact</a>
                <a href= {Resume}>Resume</a>
            </nav>
        </div>
    )
}