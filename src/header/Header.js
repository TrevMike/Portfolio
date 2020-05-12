import React from "react";
import "../css/index.css";
import TerminalComponent from "../terminalComponent/TerminalComponent";
import Typical from "react-typical";

function Header() {
  let headerFont = (
    <Typical
      steps={[
        500,
        "Hello!",
        500,
        "Hello! My name is Michael Trevino.",
        600,
        "Hello! My name is Michael Trevino..",
        600,
        "Hello! My name is Michael Trevino...",
        600,
        "Hello! My name is Michael Trevino... Yarn add FullStack-Dev",
        600,
        "Hello! My name is Michael Trevino... Yarn Start",
      ]}
      loop={1}
      wrapper="div"
      className="typingText"
    />
  );
  const cssSize1 = "headerSize1";
  return (
    <div className="headerHolder">
      <div>
        <TerminalComponent content={headerFont} size={cssSize1} />
      </div>
    </div>
  );
}

export default Header;
