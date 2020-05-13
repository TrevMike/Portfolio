import React from "react";
import "../css/index.css";
import TerminalComponent from "../terminalComponent/TerminalComponent";

function FAskedQuestions() {
  const tab = "_blank";
  const questions = (
    <div>
      <h6 className="typingText ">
        Ask_Me-Anything... yarn add <span className="blue-text">Questions</span>
      </h6>
      <div className="typingText pContent">
        <h6 className="red-text">
          Would you ever consider moving to another city or state perhaps
          country?
        </h6>
        Yes, I would. Though I would have to know the quality of living in the
        area and how much I would make and compare to see if its even worth it.
        My dream state would be Colorado since my wife loves gems and that is
        apparently the gem state
      </div>
      <div className="typingText pContent">
        <h6 className="red-text">Which do you prefer, Front-end or Backend?</h6>
        I prefer where ever you need help. My job as a developer is to fix
        problems and make everything easier for others and that would include my
        team.
      </div>

      <div className="typingText pContent">
        <h6 className="red-text">
          Do or would you consider doing freelance work?
        </h6>
        I have considered it, and while I do work on small projects on my own
        from time to time as of current, I am looking to work in a team for a
        company to gain more experience and a steady income.
      </div>
      <div className="typingText pContent">
        <h6 className="red-text">
          How confident are you in your coding skills?
        </h6>
        I have found that the moment I am confident in something, it knocks me
        back and reminds me that I know nothing. It isn't bad but I have learned
        in the mass world of coding that there is always something new to learn
        and things you knew yesterday probably won't apply tomorrow, so no
        matter how confident I think I am in my coding skills the the one thing
        I am and want to be confident in is my abilty to learn.
      </div>
      <div className="typingText pContent">
        <h6 className="red-text">Do you have a resume?</h6>
        Yes I do, and here is a link to my resume.
        <a href="https://www.google.com/" target={tab}>
          {" "}
          Resume!
        </a>
      </div>
    </div>
  );
  const cssSize = "faqSize1";
  return (
    <div className="faqHolder">
      <TerminalComponent content={questions} size={cssSize} />
    </div>
  );
}

export default FAskedQuestions;
