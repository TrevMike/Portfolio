import React from 'react';
import '../styles/index.css'
import GameRoom from '../assets/GameRoom.gif'
// import ScrollableAnchor from 'react-scrollable-anchor';

function AboutMe(){
    return(

        <div className="aboutMeContainer">
            <img 
            className="aboutMeImage"
            src={GameRoom}
            alt="glowing"
            /> 
                <div className="myLife">
                    <h1>About Me</h1>
                    I grew in the bottom peak of Texas in a town called Mcallen.
                </div>
        </div>
    )
}

export default AboutMe