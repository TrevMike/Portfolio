import React from "react";
// import ScrollableAnchor from 'react-scrollable-anchor';
import "../css/index.css";
// import Header from "../header/Header";
// import AboutMe from "../aboutMe/AboutMe";
// import Portfolio from "../portfolio/Portfolio";
import TerminalComponent from "../terminalComponent/TerminalComponent";
// import Button from '@material-ui/core';

function MainPage() {
  let headerFont = "Hello this is working";
  return (
    <div className="mainPage">
      {/* <Header /> */}
      {/* <AboutMe />
      <Portfolio /> */}
      <TerminalComponent content={headerFont} />
    </div>
  );
}

export default MainPage;

//   <nav>
//   <div className="nav-wrapper">
//       <ul id="nav-mobile" className="left hide-on-med-and-down">
//           <li><a href="#fake">Home</a></li>
//           <li><a href="#fake1">About</a></li>
//           <li><a href="#fake2">Portfolio</a></li>
//           <li><a href="#fake3">Blog</a></li>
//           <li><a href="#fake4">Contact</a></li>
//       </ul>
//   </div>
// </nav>
