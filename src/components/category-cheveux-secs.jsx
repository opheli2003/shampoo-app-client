import React from "react";
import { Link } from "react-router-dom";
import NavMain from "./Nav/NavMain";

const CategorySecs= () => {
  return (
    
      <div>
      <NavMain/>

        <Link to="/">
          <i class="fas fa-home"></i>
        </Link>
      </div>
    
  );
};

export default CategorySecs;