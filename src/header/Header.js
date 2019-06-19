import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import '../styles/header.css'


function Header () {
    return(
    <ScrollableAnchor id={"section1"}>
        <div className="Canvas">
            <div className="typeWriter">
                Hello My Name is Michael Trevino. <br/>
                I'm a full stack devolper this is just random..
            </div>
        </div>
    </ScrollableAnchor>
    )
}

export default Header