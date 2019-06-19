import React from 'react';
// import ScrollableAnchor from 'react-scrollable-anchor';
import Matrix from '../assets/Matrix.gif'
import '../styles/header.css';


function Header () {
    return(
        <div className="Canvas">
            <img 
            className="homeImage"
            src={Matrix}
            alt="glowing"
            />
            <span className="typeWriter">
                <div className="homePageText">
                    Hello my name is <span className="highlight">
                        Michael-Trevino
                    </span> and I'm
                     a <span className="highlight">Full-Stack</span> developer.
                </div>
                {/* <button className="homeButton">test</button> */}
            </span>
            <button className="homeButton">Portfolio</button>
        </div>
    )
}

export default Header