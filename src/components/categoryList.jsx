// import React from "react";
// import { Link } from "react-router-dom";
// import NavMain from "./Nav/NavMain";
// import APIHandler from "../api/apiHandler";
// import { useState, useEffect } from "react";

// const Category = () => {
//   // make a state variable for categories

//   const [cat, setCat] = useState(null);

//   useEffect(async () => {
//     /// get all categories from backend with apiHandler
//     /// change the state with the newly retrieved categories
//     try {
//       const { data } = await APIHandler.get("/api/categories");
//       setCat(data);
//     } catch (err) {
//       console.log(err);
//     }
//   }, []);

//   return (
//     <div>
//       <NavMain />

//       <div>
//         <img src="" alt="" />
//       </div>
//       <p>{cat.category}</p>

//       <Link to="/">
//         <i className="fas fa-home"></i>
//       </Link>
//     </div>
//   );
// };

// export default Category;
