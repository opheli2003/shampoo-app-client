import React from "react";
import NavMain from "./Nav/NavMain";
import APIHandler from "../api/apiHandler";
import { useState, useEffect } from "react";

const product = () => {
  const [product, setProduct] = useState(null);

  useEffect(async () => {
    /// get all categories from backend with apiHandler
    /// change the state with the newly retrieved categories
    try {
      const { data } = await APIHandler.get("/api/products");
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div>
      <NavMain />

      <div>
      <p>{product.price}</p>
        
      </div>
    </div>
  );
};

export default product;
