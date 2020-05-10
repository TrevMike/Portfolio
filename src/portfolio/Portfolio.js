import React from "react";
import "../css/index.css";
import TerminalComponent from "../terminalComponent/TerminalComponent";
function Portfolio() {
  const portfolioFont = "Hello from the portfolio";
  return (
    <div className="portfolioHolder">
      <TerminalComponent content={portfolioFont} />
    </div>
  );
}

export default Portfolio;
