import React from "react";
import { Link } from "react-router-dom";
import NavMain from "./Nav/NavMain";
import APIHandler from "../api/apiHandler"; 
import { useState, useEffect } from "react";

const Category = ({categories}) => {
  // make a state variable for categories

const [category, setCategory] = useState(null)

  useEffect(async() => {
/// get all categories from backend with apiHandler
/// change the state with the newly retrieved categories
try{  
const {data} =await APIHandler.get("/categories")
setCategory(data)}
  
catch(err){console.log(err)}
}
)

  
  
  return (
    
      <div>
      <NavMain/>

      <div> 
      <img src="" alt="" />
      </div>



        <Link to="/">
          <i class="fas fa-home"></i>
        </Link>
      </div>
    
  );
};

export default Category;
