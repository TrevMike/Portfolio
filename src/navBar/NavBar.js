import React from "react";
import "../css/index.css";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <div className="navbar-fixed z-depth-5">
      <nav className="transparent z-depth-0">
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <Link to="header" smooth={true} duration={1000}>
                <span className="teal-text">Home</span>
              </Link>
            </li>
            <li>
              <Link to="aboutMe" smooth={true} duration={1000}>
                <span className="teal-text ">About Me</span>
              </Link>
            </li>
            <li>
              <Link to="portfolio" smooth={true} duration={1000}>
                <span className="teal-text">Portfolio</span>
              </Link>
            </li>
            <li>
              <Link to="fAskedQuestions" smooth={true} duration={1000}>
                <span className="teal-text">FAQ</span>
              </Link>
            </li>
            <li>
              <Link to="contacts" smooth={true} duration={1000}>
                <span className="teal-text">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
