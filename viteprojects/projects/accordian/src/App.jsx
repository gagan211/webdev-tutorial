/* eslint-disable no-unused-vars */
import "./App.css";
import Question from "./Question";
import data from "./data";
import React, { useState } from "react";

function App() {
  const [question, setquestion] = useState(data);

  return (
    <>
      <main>
        <div className="container">
          <h3>question and answer about login</h3>
          <section className="info">
            {question.map((item) => {
              return <Question key={item.id} {...item} />;
            })}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
