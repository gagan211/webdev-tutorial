import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setindex] = useState(0);
  const { name, job, image, text } = people[index];

  function previmge() {
    setindex(index===0?people.length-1:index-1)
  }
  function nextimge() {
    setindex(index===people.length-1?0:index+1)
  }

  const random=()=>{
    let rando=Math.floor(Math.random()*people.length)
    if(rando==index){
        rando=(index+1) %people.length
    }
    setindex(rando)
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt="image" className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
        <button className="prev-btn" onClick={previmge}><FaChevronLeft/></button>
        <button className="next-btn" onClick={nextimge}><FaChevronRight/></button>
        </div>
        <button className="random-btn" onClick={random}>surprise me</button>
    </article>
  );
};

export default Review;
