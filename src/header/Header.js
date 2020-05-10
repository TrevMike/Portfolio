import React from "react";
import "../css/index.css";
import TerminalComponent from "../terminalComponent/TerminalComponent";

function Header() {
  let headerFont = "Hello this is from the header?";
  return (
    <div className="headerHolder">
      <TerminalComponent content={headerFont} />
    </div>
  );
}

export default Header;
