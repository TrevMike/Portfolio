import React from "react";
import "../css/index.css";
import Header from "../header/Header";
import AboutMe from "../aboutMe/AboutMe";
import Portfolio from "../portfolio/Portfolio";
import FAQ from "../faq/FAQ";
import Footer from "../footer/Footer";

function HomePage() {
  return (
    <div className="homePage">
      <section id="header">
        <Header />
      </section>
      <section id="aboutMe">
        <AboutMe />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="fAskedQuestions">
        <FAQ />
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;
