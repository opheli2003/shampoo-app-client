import React from "react";
import { Link, useParams } from "react-router-dom";
import apiHandler from "../api/apiHandler";
import { useState, useEffect } from "react";
import { LoadingMess } from "./LoadingMess";
import { ErrorMess } from "./ErrorMess";
import Review from "./reviews";
import CategoryList from "./categoryList";


// import CategoryList from "./categoryList";

const OneProdCatnormaux = ({handleAddedProduct}) => {
  // make a state variable for categories
  const [oneProduct, setOneProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const x = async () => {
      setLoading(true);
      /// get all categories from backend with apiHandler
      /// change the state with the newly retrieved categories
      try {
        const response = await apiHandler.get(
          `/api/categories/cheveux-normaux/${id}`
        );
        setProducts(response.data);
        setProductName(() => response.data.productName);
        setDescription(() => response.data.description);
        setPrice(() => response.data.price);

        setLoading(false);
        setOneProduct(response.data);
        console.log(response.data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    x();
  }, [id]);
  console.log(products);

  return(
      <div>
{products.image}  
{products.price} 
{products.productName} 
{products.description}

<div>   
<button className="prodcut-add-button" onClick={() => handleAddedProduct(products)}> Add to Cart </button>

</div>

<div>   
<Review/>
</div>

<div> 
            
<CategoryList />
</div>

  </div>
            
         
  
  )}

export default OneProdCatnormaux;
