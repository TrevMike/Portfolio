import React from 'react';
// import ScrollableAnchor from 'react-scrollable-anchor';
import Room from '../assets/Room.gif'
import '../styles/index.css'


function Header () {
    return(
        <div className="Canvas">
             <img 
            className="homeImage"
            src={Room}
            alt="glowing"
            /> 
            <span className="typeWriter">
                <div className="homePageText">
                    Hello my name is <span className="highlight">
                        Michael-Trevino
                    </span> and I'm
                     a <span className="highlight">Full-Stack</span> web developer.
                </div>
            </span>
            <button href="#aboutMe" className="homeButton">Portfolio</button>
        </div>
    )
}

export default Header

// #FF0066 = Neon Pink
// #FF00 = Neon Green
// #FFFF00 = Neon Yellow
// #FF3300 = Neon Orange
// #FF0009 = Neon Red
// #56600FF = Neon Purple
// #FF99 = Neon Mint Green
// #BF = Neon Dark Blue
// #FF = Neon Blue
// #FFFF = Light Blue

// #50BFE6 = Blizzard Blue

// #FF6EFF = Shocking Pink

// #EE34D2 = Razzle Dazzle Rose