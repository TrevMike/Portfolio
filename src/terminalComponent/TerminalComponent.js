import React, { useState } from "react";
import "../css/index.css";

function TerminalComponent(props) {
  const date = new Date();
  const day = date.toLocaleString();

  const [toggle, setToggle] = useState(true);

  const clickExitHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div className={toggle ? "silverTrim" : "off"}>
      <div className="toolBar">
        <div className="navButtons ">
          <div className="circles redB z-depth-5" onClick={clickExitHandler} />
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
          <div className="propsContent">{props.content}</div>
        </div>
        {/* <div>Hello just testing this out</div> */}
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
