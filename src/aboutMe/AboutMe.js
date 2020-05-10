import React from "react";
import "../css/index.css";
import TerminalComponent from "../terminalComponent/TerminalComponent";
function AboutMe() {
  const aboutMeh = "this is about me!!!!";
  return (
    <div className="aboutMeHolder">
      <TerminalComponent content={aboutMeh} />
    </div>
  );
}

export default AboutMe;
