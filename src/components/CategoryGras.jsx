import React from "react";
import { Link, useParams } from "react-router-dom";
import APIHandler from "../api/apiHandler";
import { useState, useEffect } from "react";
import { LoadingMess } from "./LoadingMess";
import { ErrorMess } from "./ErrorMess";

const CategoryGras = () => {
  // make a state variable for categories
  const [categoryGras, setCategoryGras] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams()


  useEffect(() => {
    const x = async () => {
      setLoading(true);
      /// get all categories from backend with apiHandler
      /// change the state with the newly retrieved categories
      try {
        const response = await APIHandler.get(`/api/categories/${id}`); 

        setLoading(false);
        setCategoryGras(response.data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    x();
  }, []);
  return (
    <p>{categoryGras.category}</p>
  
    
  // <div>

  //   {loading ? (
  //     <LoadingMess />
  //   ) : error ? (
      
  //     <ErrorMess />
  //   ) : {oneProduct}
           
          
        
      
  //   </div>


    

);
};
export default CategoryGras
