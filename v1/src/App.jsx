import { useState, useCallback, useEffect, useRef } from "react";


//useCALLBACK is used to make the function get memorid into the cache as it will be used most number of times {TO OPTIMIZE}
function App() {
  //declaring variables
  const [length, setlength] = useState(8);
  const [numberallow, setnumberallow] = useState(false);
  const [charallow, setcharallow] = useState(false);
  const [password, setpassword] = useState("");

  //ref hook
  const passwordref = useRef(null);

  // callback funtion to COPY password into the CLIPBOARD
  const copypasonclickb = useCallback(
    () => {
      passwordref.current?.select();
      // passwordref.current?.setSelectionRange(1,length); this is use to select the length of the password to be copied
      window.navigator.clipboard.writeText(password); //used to WRITE the password that is generated into the clipboard
    },
    [password] //we use password and not SETPASSWORD  as SETPASSWORD is a FUNCTION that is used to update the Password
  );

  // callback function to generate the PASSWORD
  const passwordgenerator = useCallback(() => {
    let pass = " ";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberallow) str += "0123456789";
    if (charallow) str += "!@#$%^&*()";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberallow, charallow]);

  // special method to run passwordgenerator whenever we change the parameter of the ui
  useEffect(() => {
    passwordgenerator();
  }, [length, numberallow, charallow, passwordgenerator]);

  return (
    <>
      <div className="items-center justify-center  w-full max-w-md mx-auto shadow-sm rounded-lg px-4 my-8 text-orange-500 bg-gray-300">
        <h1 className="text-white text-center ">Password</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}//calling the variable PASSWORD
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordref}//REFERENCE used to COPY
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-3 shrink-0"
            onClick={copypasonclickb}//calling the main function
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={7}
              max={100}
              value={length}//min length initialization
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberallow}
              onChange={() => {
                setnumberallow((prev) => !prev);
              }}
            />
            <label htmlFor="">numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charallow}
              onChange={() => {
                setcharallow((prev) => !prev);
              }}
            />
            <label htmlFor="">specialchar</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
