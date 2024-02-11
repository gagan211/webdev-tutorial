import React,{useState} from "react";

export default function Textform(props) {
    const   clickedbutton=()=> {
        console.log("button was clicked")
        let newtxt=text.toUpperCase()
        setText(newtxt)
    }
    const   onchanged=(event)=> {
        console.log("text was changed")
        setText(event.target.value);
    }
    const [text,setText]=useState("enter the text here right now");
    // setText("hello")
  return (
    <div>now
    <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea
          className="form-control"
          onChange={onchanged}
          value={text}
          placeholder="Leave a comment here"
          id="mybox"
          rows={"8"}
        ></textarea></div>
        <button className="btn btnprimary" onClick={clickedbutton}>Convert to upper case</button>
    </div>
  );
}
