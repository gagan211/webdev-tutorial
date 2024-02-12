import React, {useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import About from "./components/About";

function App() {
  const[,]=useState()
  const [mode,updatedmode] =useState("light")
  
  function togglemode() {
    if (mode=="light") {
      updatedmode("dark")
      document.body.style.backgroundColor="grey"
    }
    else{
      updatedmode("light")
      document.body.style.backgroundColor="white"

    }
    
  }

  return (
    <React.Fragment>
      <Navbar title={"textutils"} mode={mode} togglemode={togglemode}/>
      <Alert alert="this is alert"/>
      <div className="container my-3">
      {/* <About/> */}
        <Textform heading="enter your text" mode={mode} />
      </div>
    </React.Fragment>
  );
}

export default App;
