import React from "react";
import { Link } from "react-router-dom";
import NavMain from "./Nav/NavMain";
import APIHandler from "../api/apiHandler";
import { useState, useEffect } from "react";
import axios from 'axios'


const Category = ({ categories }) => {
  // make a state variable for categories

  const [category, setCategory] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost3000/api/categories")
      .then(({ data }) => {
        setCategory(data);
        // console.log(res.data)
        console.log(data);
      })
      .catch((e) => console.log(e));
  }, []); // esli

  return (
    <div>
      <NavMain />

      <div>
        <img src="" alt="" />
      </div>
      <p>{category.Category}</p>

      <Link to="/">
        <i className="fas fa-home"></i>
      </Link>
    </div>
  );
};

export default Category;
