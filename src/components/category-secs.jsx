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
    <div>
      {products.map((product) => {
        return (
          <div>
            <Link to={product._id} product={product}>
              {product.productName}
              <img src={product.image} alt={product} />       
                 
            </Link>
            <p>{product.price} </p>
          </div>
        );
      })}

      <div>
      

      </div>
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