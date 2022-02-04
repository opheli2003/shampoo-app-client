import React from "react";
import CategoryList from "../components/categoryList";
import axios from "axios";
import NavMain from "../components/Nav/NavMain";


const Home = () => {
  return (
    <div>
      <NavMain />

      <CategoryList />

      <h1>Welcome 🏡</h1>
    </div>
  );
};

export default Home;
