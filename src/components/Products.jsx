import React from "react";
import { Link } from "react-router-dom";
import APIHandler from "../api/apiHandler";
import { useState, useEffect, useParams } from "react";
import axios from "axios";
import { LoadingMess } from "./LoadingMess";
import { ErrorMess } from "./ErrorMess";

const Products = () => {
  // make a state variable for categories
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const {id} = useParams()

  useEffect(() => {
    const x = async () => {
      setLoading(true); 
      /// get all categories from backend with apiHandler
      /// change the state with the newly retrieved categories
       try {
        const response = await APIHandler.get("/api/products");
        setLoading(false);
        setProducts(response.data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    x();
  }, []); 

  const handleDelete = async (id) => {
    try {
      await APIHandler.delete(`/api/products/delete/${id}`);
      const copy = products.filter((product)=>product.id !==id)
      console.log(copy)
      setProducts(copy)
      x()

      //modifier le states produtcs en ayant retiré le produit supprimé
    } catch (err) {
      console.error(err);
    }
  };

  return loading ? (
    <LoadingMess />
  ) : error ? (
    <ErrorMess />
  ) : (
    <div>
      {products.map((product) => {
        return (
          <div key={product._id}>
            {/* <button onClick={() = > editProduct(product._id)}>Edit</button> */}
            <Link to={product._id}>{product.productName}</Link>
            <button onClick={() => handleDelete(product._id)}>
              Delete shampoo
            </button>
          </div>
        );
      })}
    </div>
  );
    }

export default Products
