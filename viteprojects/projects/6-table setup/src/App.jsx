/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setloading] = useState(true);
  const [jobs, setjobs] = useState([]);
  const [value, setvalue] = useState(0);

  const fetchdata = async () => {
    const response = await fetch(url);
    const newjobs = await response.json();
    setjobs(newjobs);
    setloading(false);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];


  return (
    <section className="section">
      <div className="title">
        <h2>experence</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* button container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button key={item.id} onClick={() => setvalue(index)} className={`job-btn ${index===value && "active-btn"}`}>
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duties}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
