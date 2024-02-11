import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
function App() {
  return (
    <React.Fragment>
      <Navbar title={"textutils"} About="wasup" />
      <div className="container my-3">
        <Textform heading="enter your text"/>
      </div>
    </React.Fragment>
  );
}

export default App;
