import React from 'react'
import { Link, useParams } from 'react-router-dom'
import apiHandler from '../api/apiHandler'
import { useState, useEffect } from 'react'
import { LoadingMess } from './LoadingMess'
import { ErrorMess } from './ErrorMess'
import CategoryList from './categoryList';
const OneProduct = () => {
  // make a state variable for categories
  const [oneProduct, setOneProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const x = async () => {
      setLoading(true);
      /// get all categories from backend with apiHandler
      /// change the state with the newly retrieved categories
      try {
        const response = await apiHandler.get('/api/products/:id');
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
  }, []);
  console.log(products);
  return (
    <div>
      {products.map((product) => {
        return (
          <div>
            <p>{product.productName} </p>
            <Link to={product._id} product={product}>
              {' '}
              {product.image}{''}
            </Link>
            <p>{product.price} </p>
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
export default OneProduct;
















