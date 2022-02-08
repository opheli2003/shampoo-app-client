import React from "react";
import { Link } from "react-router-dom";
import APIHandler from "../api/apiHandler";
import { useState, useEffect } from "react";
import { LoadingMess } from "./LoadingMess";
import { ErrorMess } from "./ErrorMess";

const CategoryList = () => {
  // make a state variable for categories
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const x = async () => {
      setLoading(true);
      /// get all categories from backend with apiHandler
      /// change the state with the newly retrieved categories
      try {
        const response = await APIHandler.get("/api/categories");
        setLoading(false);
        setCategory(response.data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    x();
  }, []);
  
  return (
    <>
      {loading ? (
        <LoadingMess />
      ) : error ? (
        
        <ErrorMess />
      ) : (
        <div>
          {category.map((cat) => {
            return (
              <div key={cat._id}>
               {cat.image}
                <Link to={`/categories/cheveux-${cat.category}`}>{cat.category}</Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default CategoryList;
