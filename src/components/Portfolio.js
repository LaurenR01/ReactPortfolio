import React from 'react'
import GetLost from '../images/GetLostLogo.png'
import ADAH from '../images/ADrinkAroundHere.png'
import GetBilingual from '../images/GetBilingual.png'
import PasswordGenerator from '../images/PasswordGenerator.PNG'
import WorkdayScheduler from '../images/WorkdayScheduler.png'
import FranksFriend from'../images/FranksFriend.png'

export default function Portfolio() {

    return (
        <><div class="row" id="webapps">
            <div class="col s12 m4 card-border">
                <div class="icon-block">
                    <h2 class="center purple-text text-darken-2"><i class="material-icons">landscape</i></h2>
                    <h5 class="center purple-text text-darken-2">Get Lost with Lauren</h5>

                    <p class="card-image"><a href="http://www.getlostwithlauren.com"><img class="screenshot" src={GetLost} alt="Logo for the Get Lost with Lauren blog"></img></a></p>
                </div>
            </div>

            <div class="col s12 m4 card-border">
                <div class="icon-block">
                    <h2 class="center purple-text text-darken-2"><i class="material-icons">local_dining</i></h2>
                    <h5 class="center purple-text text-darken-2">A Drink Around Here</h5>

                    <p class="card-image"><a href="https://laurenr01.github.io/A_Drink_Around_Here/"><img class="screenshot" src={ADAH} width="400" height="250" alt="screenshot of the A Drink Around Here app"></img></a></p>
                </div>
            </div>

            <div class="col s12 m4 card-border">
                <div class="icon-block">
                    <h2 class="center purple-text text-darken-2"><i class="material-icons">language</i></h2>
                    <h5 class="center purple-text text-darken-2">Get Bilingual</h5>

                    <p class="card-image"><a href="https://get-bilingual.herokuapp.com/login"><img class="screenshot" src={GetBilingual} width="400" height="250" alt="Screenshot of the Get Bilingual App"></img></a></p>
                </div>
            </div>
        </div><br></br><div class="row">
                <div class="col s12 m4 card-border">
                    <div class="icon-block">
                        <h2 class="center purple-text text-darken-2"><i class="material-icons">lock</i></h2>
                        <h5 class="center purple-text text-darken-2">Password Generator</h5>

                        <p class="card-image"><a href="https://laurenr01.github.io/HW3PasswordGenerator"><img class="screenshot" src={PasswordGenerator} width="400px" height="250" alt="Screenshot for my Password Generator"></img></a></p>
                    </div>
                </div>

                <div class="col s12 m4 card-border">
                    <div class="icon-block">
                        <h2 class="center purple-text text-darken-2"><i class="material-icons">schedule</i></h2>
                        <h5 class="center purple-text text-darken-2">Workday Scheduler</h5>
                        <p class="card-image"><a href="https://laurenr01.github.io/HW5WorkdayScheduler"><img class="screenshot" src={WorkdayScheduler} width="400" height="250" alt="screenshot of my Workday scheduler app"></img></a></p>
                    </div>
                </div>

                <div class="col s12 m4 card-border">
                    <div class="icon-block">
                        <h2 class="center purple-text text-darken-2"><i class="material-icons">games</i></h2>
                        <h5 class="center purple-text text-darken-2">Frank's Friend</h5>

                        <p class="card-image"><a href="https://scratch.mit.edu/projects/517468440/"><img class="screenshot" src={FranksFriend} width="400" height="250" alt="Screenshot of the Frank's Friend game"></img></a></p>
                    </div>
                </div>
            </div></>
   
    )
}
