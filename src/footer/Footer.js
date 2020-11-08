import React, { useState } from "react";
import "../css/index.css";
import { Link } from "react-scroll";
import FormModel from "../form/FormModel";
function Footer() {
  const [toggle, setToggle] = useState(true);
  const clickReveal = () => {
    setToggle(!toggle);
  };

  return (
    <div className="contactFooter">
      <FormModel display={toggle} />
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="blue-text">Contacts</h5>
              <div className="blue-text">
                <ul>
                  <li>
                    <a
                      className="blue-text fhChange"
                      href="#!"
                      onClick={clickReveal}
                    >
                      Contact me via email
                    </a>
                  </li>
                  <li>
                    <a
                      className="blue-text fhChange"
                      href="https://www.linkedin.com/in/michael-trevino-b878a018a/"
                    >
                      Linkedin.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col l4 offset-l2 s12">
              <ul>
                <li>
                  <Link to="header" smooth={true} duration={1000}>
                    <span className="blue-text fhChange">Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="aboutMe" smooth={true} duration={1000}>
                    <span className="blue-text fhChange">About Me</span>
                  </Link>
                </li>
                <li>
                  <Link to="portfolio" smooth={true} duration={1000}>
                    <span className="blue-text fhChange">Portfolio</span>
                  </Link>
                </li>
                <li>
                  <Link to="fAskedQuestions" smooth={true} duration={1000}>
                    <span className="blue-text fhChange">FAQ</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container blue-text">
            © 2020 Copyright
            <span className="blue-text right">
              I do not own the background image.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
