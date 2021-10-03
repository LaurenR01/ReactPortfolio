import React from 'react'
import Photo from '../images/Lauren.jpg'

export default function AboutMe() {
    return (
        <div className="App-section">
        <ul>
            <li><img src={Photo} alt="Lauren" height="200px"></img></li> 
            <li>I started out coding HTML webpages for fun back in high school (&lt;frames&gt;, anyone?).  When CSS started to beome more popular, it certainly overshadowed anything I could pull off.  Over the years, I've come back to coding to learn new skills here and there but never really spent the time outside of my other jobs to learn the ins and outs as technnology changed and improved.  Currently, I am enrolled in a coding boot camp at Ohio State University to bring those old skills up to the present and expand on them further.  Let the adventure begin!</li>
        </ul>
        </div>
    )
}
