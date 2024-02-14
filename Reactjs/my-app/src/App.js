import React, { useState } from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";

function App() {
  const [alert, newalert] = useState(null);
  const [mode, updatedmode] = useState("light");
 
  function showalert(message, type) {
    newalert({ message: message, type: type });
    setTimeout(() => {
      
      newalert(null)
    }, 3000);
  }

 
  function togglemode() {
    if (mode == "light") {
      updatedmode("dark");
      document.body.style.backgroundColor = "grey";
      showalert("dark mode has been set", "success");
    } else {
      updatedmode("light");
      document.body.style.backgroundColor = "white";
      showalert("dark mode has been switched off", "success");
    }
  }

  return (
    <React.Fragment>
      <Navbar title={"textutils"} mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3 bg-orange-500">
        <About/>
        <Textform heading="enter your text" mode={mode}  showalert={showalert}/>
      </div>
    </React.Fragment>
  );
}

export default App;

