import React from "react";
import "../css/index.css";
import TerminalComponent from "../terminalComponent/TerminalComponent";
function AboutMe() {
  // const growingUp = (
  //   <div>
  //     <h6 className="typingText ">
  //       About-me... yarn add <span className="blue-text">Growing-up</span>
  //     </h6>
  //     <p className="typingText ">
  //       I grew up in the bottom tip of Texas in a town called La Joya, Graduated
  //       from Edingburg North High in 2012 then went to South Texas College, but
  //       eventually dropped out, a few years later I then went to Lambda School
  //       to learn to code.
  //     </p>
  //   </div>
  // );
  // const myPassion = (
  //   <div>
  //     <h6 className="typingText flow-tex">
  //       About-me... yarn add <span className="blue-text">My-Passion</span>
  //     </h6>
  //     <p className="typingText">
  //       I have a long list of passions, I love my wife, I love music, I've been
  //       playing guitar since I was in elementary School. For a while I was a
  //       session guitarist at a local studio. I love painting when there is down
  //       time, and stay up late nights coding mini projects to limit test what is
  //       possible.
  //     </p>
  //   </div>
  // );
  const myStrengths = (
    <div>
      <h6 className="typingText flow-tex">
        About-me... yarn add <span className="blue-text">My-Strengths</span>
      </h6>
      <div className="skillsContent">
        <div className="skill">
          <div className="skillName">HTML:</div>
          <div className="progressBar">
            <div className="htmlBar" />
          </div>
          <span>75%</span>
        </div>

        <div className="skill">
          <div className="skillName">CSS:</div>
          <div className="progressBar">
            <div className="cssBar" />
          </div>
          <span>75%</span>
        </div>

        <div className="skill">
          <div className="skillName">Javascript:</div>
          <div className="progressBar">
            <div className="jsBar" />
          </div>
          <span>70%</span>
        </div>

        <div className="skill">
          <div className="skillName">React:</div>
          <div className="progressBar">
            <div className="reactBar" />
          </div>
          <span>65%</span>
        </div>

        <div className="skill">
          <div className="skillName">Node:</div>
          <div className="progressBar">
            <div className="nodeBar" />
          </div>
          <span>65%</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="aboutMeHolder">
      {/* <TerminalComponent content={growingUp} />
      <TerminalComponent content={myPassion} /> */}
      <TerminalComponent content={myStrengths} />
    </div>
  );
}

export default AboutMe;
