import React from "react";
import { Link, useParams } from "react-router-dom";
import APIHandler from "../api/apiHandler";
import { useState, useEffect } from "react";
import { LoadingMess } from "./LoadingMess";
import { ErrorMess } from "./ErrorMess";
import CategoryList from "./categoryList";


const CategoryNormaux = () => {
  // make a state variable for categories
  const [categoryNormaux, setCategoryNormaux] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const [productName, setProductName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const x = async () => {
      setLoading(true);
      /// get all categories from backend with apiHandler
      /// change the state with the newly retrieved categories
      try {
        const response = await APIHandler.get("/api/categories/cheveux-normaux");
        setProducts(response.data);
        setProductName(() => response.data.productName);
        setImage(() => response.data.image);
        setPrice(() => response.data.price);

        setLoading(false);
        setCategoryNormaux(response.data);
        console.log(response.data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    x();
  }, []);
  console.log(products);

  return (
    <div>
         <div> Categorie Cheveux normaux </div>

      {products.map((product) => {
        return (
          <div key= {product._id}>
          <div> Cheveux : {product.category}</div>
            <Link to={product._id} product={product}>
              {" "}{product.productName} 
              <img src={product.image} alt={product.productName} />                  

              </Link>
            <p> ${product.price} </p>
          </div>
        );
      })}
      <p> <CategoryList /></p>
    </div>
  );

  // <div>

  //   {loading ? (
  //     <LoadingMess />
  //   ) : error ? (

  //     <ErrorMess />
  //   ) : {oneProduct}

  //   </div>
};
export default CategoryNormaux;
