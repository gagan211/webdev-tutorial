
import React, { useState } from 'react';

export default function Form() {

  function changeColor(newColor) {
    document.body.style.backgroundColor = newColor;
  }

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={()=>changeColor("red")}>
        Red
      </button>
      <button type="button" className="btn btn-secondary" onClick={() => changeColor("blue")}>
        Blue
      </button>
      <button type="button" className="btn btn-success" onClick={() => changeColor("green")}>
        Green
      </button>
      <button type="button" className="btn btn-danger" onClick={() => changeColor("yellow")}>
        Yellow
      </button>
    </div>
  );
}
