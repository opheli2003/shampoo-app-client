import React from "react";
import { Link, useParams } from "react-router-dom";
import APIHandler from "../api/apiHandler";
import { useState, useEffect } from "react";
import { LoadingMess } from "./LoadingMess";
import { ErrorMess } from "./ErrorMess";
import CategoryList from "./categoryList";
import CategoryGras from "./CategoryGras";
import CategoryMixtes from "./category-mixtes";
import CategoryNormaux from "./category-normaux";
import OneCategory from "../styles/OneCategory.css";
import styled from "styled-components";
import{mobile} from "../../responsive";


const Container = styled.div`
  display:grid;
 flex-direction column;
`;


const Button = styled.button`
    border:-color:#000000;
    border-radius:5px;
    border-style:solid;
    border-width:1px;
    padding: 5px 0px;
    background-color: #88cabb;
    color:yellow;
    cursor: pointer;
    font-weight: 600;
    text-align center;
`;

const CategorySecs = () => {
  // make a state variable for categories
  const [categorySecs, setCategorySecs] = useState([]);
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
        const response = await APIHandler.get("/api/categories/cheveux-secs");
        setProducts(response.data);
        setProductName(() => response.data.productName);
        setImage(() => response.data.image);
        setPrice(() => response.data.price);

        setLoading(false);
        setCategorySecs(response.data);
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
      <div className="">
        <h1> Categorie Cheveux Secs </h1>

        {products.map((product) => {
          return (
            
            <div key={product._id} className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">   
            <div className ="card">
                  <img
                    className="card-img" width="200" height="200"
                    src={product.image}
                    alt={product.productName}
                  /> 
                  <div className="card-body">  
              <div className="card-title"> {product.productName} </div>


              <p>€{product.price} </p>

              <div>
              <Link to={product._id} product={product}>

              <button type="button" className="btn btn-outline" data-bs-toggle="button" > Je le veux !</button>
              </Link>
              </div>
               </div>
               </div>

               </div>
            </div>
            
          );
          
         
        })}
        
        <div> <CategoryList /> </div>
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
export default CategorySecs;
