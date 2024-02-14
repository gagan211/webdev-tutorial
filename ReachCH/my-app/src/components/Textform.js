import React, { useState } from "react";

export default function Textform(props) {
  function clickedupperbutton() {
    console.log("button was clicked");
    let newtxt = text.toUpperCase();
    updatedtex(newtxt);
    props.showalert("converted to uppercase","success")
  }
  function clickedlowerbutton() {
    console.log("button was clicked");
    let newtxt = text.toLowerCase();
    updatedtex(newtxt);
    props.showalert("converted to lowercase","success")
  }
  function onchanged(event) {
    console.log("text was changed");
    updatedtex(event.target.value);
  }
  const [text, updatedtex] = useState("");
  return (
    <React.Fragment>
      <div className="container" style={{backgroundColor:props.mode=="light"?"dark":"light" , color:props.mode=="dark"?"white":"dark"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={onchanged}
            value={text}
            placeholder="Leave a comment here"
            id="mybox"
            rows={"8"}
          ></textarea>
        </div>
        <button className="btn btnprimary mx-1" onClick={clickedupperbutton}>
          Convert to upper case
        </button>
        <button className="btn btnprimary mx-1" onClick={clickedlowerbutton}>
          Convert to lower case
        </button>
      </div>
      <div className="container mb-2" style={{backgroundColor:props.mode=="light"?"dark":"light" , color:props.mode=="dark"?"white":"black"}}>
        <h1>your text summary </h1>
        <p>
          {text.split(" ").length} words and {text.length} char
        </p>
        <p>{0.008 * text.split(" ").length} time needed to read these words</p>
        <p>Preview the text that you have written:</p>
        <div>{text}</div>
      </div>
    </React.Fragment>
  );
}
