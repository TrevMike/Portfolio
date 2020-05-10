import React from "react";
import HomePage from "./homePage/HomePage";
import NavBar from "./navBar/NavBar";
import "../src/css/index.css";

function App() {
  return (
    <div className="pageContainer">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
