import React from "react";

const Categories = ({ categories, filteritems }) => {
  return(
    <div className="btn-container">
        {categories.map((value,index)=>{
            return <button  type="button" className="filter-btn" key={index} onClick={()=>filteritems(value)}>{value}</button>
        })}
    </div>
  );
};

export default Categories;


