import React from "react";
import "../css/index.css";
import TerminalComponent from "../terminalComponent/TerminalComponent";
function Portfolio() {
  const portfolioFont = (
    <div>
      <h6 className="typingText ">
        My-Portfolio... yarn <span className="red-text">error </span>
        <span className="blue-text">Coming-Soon! </span>
      </h6>
      <p className="typingText ">
        I am currently working on projects to put unto here, sorry I do not have
        anything to show yet, but I do promise I will have things to show off
        soon enough.
      </p>
    </div>
  );
  const cssSize = "portfolioSize1";
  return (
    <div className="portfolioHolder">
      <TerminalComponent content={portfolioFont} size={cssSize} />
    </div>
  );
}

export default Portfolio;
