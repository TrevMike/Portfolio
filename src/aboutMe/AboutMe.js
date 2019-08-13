import React from 'react';
import '../styles/index.css'
import GameRoom from '../assets/GameRoom.gif'
import 'materialize-css'
// import Michael from '../assets/selfie/Michael.jpg'
// import ScrollableAnchor from 'react-scrollable-anchor';


function AboutMe(){

    return(

        <div className="aboutMeContainer">
            <img 
            className="aboutMeImage"
            src={GameRoom}
            alt="glowing"
            /> 

            {/* <img
            className="selfie"
            src={Michael}
            alt="myself"
            /> */}
        
                <div className="myLife">
                    <h1>Michael-Trevino</h1>
                    I have found a passion on working with UI animations, effects, and creating<br/>
                    great dynamic user experiences and always willing to learn to get better.<br/>
                    <h1>Who am I?</h1>
                    I grew up in the bottom point of Texas in a town called La Joya. I'm a huge nerd/geek<br/>
                    I play Magic the gathering and League of Legends on my spare time. I would love to work<br/>
                    at a StartUp since I have dreams myself and making someone's dream come true would be great!
                </div>


        </div>
    )
}

export default AboutMe

//  1. What are you currently doing (in regard to your career)
//  and how did you get there? How does your background make you unique?
// 
// 2. In terms of the work you do, what aspects are you most passionate about and why?