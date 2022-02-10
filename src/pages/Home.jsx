import React from "react";
import Announcement from "../components/Announcement.jsx";
import CategoryList from "../components/categoryList.jsx";
// import NavMain from "../components/Nav/NavMain.jsx";
import Slider from "../components/Slider.jsx";


const Home = () => {
  return (
    <div>
    <Announcement />
    {/* <NavMain /> */}
    <Slider />
    <CategoryList />
    
  {/* <h1>Welcome 🏡</h1>

 */}

    
    </div>
  );
};

export default Home;
