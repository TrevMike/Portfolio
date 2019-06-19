import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import glowingBG3 from '../assets/glowingBG3.jpg'
import '../styles/header.css';


function Header () {
    return(
    <ScrollableAnchor id={"section1"}>
        <div className="Canvas">
            <img 
            className="homeImage"
            src={glowingBG3}
            alt="glowing"
            />
            <div className="typeWriter">
                <h1 className="testing">
                    Hello my name is <span className="highlight">
                        Michael Trevino
                    </span>
                    ...
                </h1>
            </div>
        </div>
    </ScrollableAnchor>
    )
}

export default Header