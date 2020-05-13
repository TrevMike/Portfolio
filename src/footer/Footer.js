import React from "react";
import "../css/index.css";
import { Link } from "react-scroll";
function Footer() {
  return (
    <div className="contactFooter">
      <footer className="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="blue-text">Contacts</h5>
              <p class="blue-text">
                <ul>
                  <li>
                    <a
                      class="blue-text fhChange"
                      href="mailto: preince560m@gmail.com"
                    >
                      Preince560m@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      class="blue-text fhChange"
                      href="https://www.linkedin.com/in/michael-trevino-b878a018a/"
                    >
                      Linkedin.com
                    </a>
                  </li>
                </ul>
              </p>
            </div>
            <div class="col l4 offset-l2 s12">
              <ul>
                <li>
                  <Link to="header" smooth={true} duration={1000}>
                    <span class="blue-text fhChange">Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="aboutMe" smooth={true} duration={1000}>
                    <span class="blue-text fhChange">About Me</span>
                  </Link>
                </li>
                <li>
                  <Link to="portfolio" smooth={true} duration={1000}>
                    <span class="blue-text fhChange">Portfolio</span>
                  </Link>
                </li>
                <li>
                  <Link to="fAskedQuestions" smooth={true} duration={1000}>
                    <span class="blue-text fhChange">FAQ</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container blue-text">
            © 2020 Copyright
            <span class="blue-text right" href="#!">
              I do not own the background image.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
