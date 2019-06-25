import React from 'react';
// import ScrollableAnchor from 'react-scrollable-anchor';
import '../styles/index.css'
import Header from '../header/Header'
import AboutMe from '../aboutMe/AboutMe'
// import Button from '@material-ui/core';

function MainPage() {
    return (
      <div className="mainPage">
     
            <Header/>

            <AboutMe/>
      </div>
    );
  }
  
  export default MainPage