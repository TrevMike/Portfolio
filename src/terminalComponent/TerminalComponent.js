import React from "react";
import "../styles/index.css";

function TerminalComponent() {
  let date = new Date();
  let day = date.toLocaleString();

  return (
    <div className="silverTrim">
      <div className="toolBar">
        <div className="navButtons ">
          <div className="circles redB z-depth-5" />
          <div className="circles yellowB z-depth-5" />
          <div className="circles greenB z-depth-5" />
          <div className="centerTool">
            michael_trevino -- -zsh -- h3110 x w0r1D
          </div>
        </div>
      </div>
      <div className="terminal">
        <div className="terminalFont">
          {`Last Login: ${day}`}
          <br />
          michael_trevino -- FullStackDev
        </div>
        <div className="scrollBar">
          <div className="squareBar">
            <div className="smallBar">
              <div className="greySmallBar" />
              <div className="greySmallBar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TerminalComponent;
