import React from "react";

export default function Alert(props) {
  // it is used to make the first letter of the word into caps 
  function capitalize(word) {
    const s=word.toLowerCase();
    return s.charAt(0).toUpperCase()+s.slice(1)
  }
  return (
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <b>{capitalize(props.alert.type)}</b> : {props.alert.message}
</div>
  );
}


