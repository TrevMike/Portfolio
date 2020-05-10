import React from "react";
import "../css/index.css";
import TerminalComponent from "../terminalComponent/TerminalComponent";

function HomePage() {
  let headerFont = "Hello this is working";
  return (
    <div className="homePage">
      <TerminalComponent content={headerFont} />
    </div>
  );
}

export default HomePage;
