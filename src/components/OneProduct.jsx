import React from "react";
import { Link, useParams } from "react-router-dom";
import APIHandler from "../api/apiHandler";
import { useState, useEffect } from "react";
import { LoadingMess } from "./LoadingMess";
import { ErrorMess } from "./ErrorMess";

const OneProduct = () => {
  // make a state variable for categories
  const [oneProduct, setOneProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams()

  useEffect(() => {
    const x = async () => {
      setLoading(true);
      /// get all categories from backend with apiHandler
      /// change the state with the newly retrieved categories
      try {
        const response = await APIHandler.get(`/api/products/${id}`); 
        console.log(response)
        setLoading(false);
        setOneProduct(response.data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    x();
  }, []);
  return (
      <p>{oneProduct.productName}</p>
    
    // <div>

    //   {loading ? (
    //     <LoadingMess />
    //   ) : error ? (
        
    //     <ErrorMess />
    //   ) : {oneProduct}
             
            
          
        
    //   </div>
  

      

  );
};

export default OneProduct
