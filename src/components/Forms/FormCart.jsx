import React, { useState, useEffect } from "react";
// import useForm from "../../hooks/useForm"
import apiHandler from "../../api/apiHandler.js";

const FormCart = ({ cart, remove, added }) => {
  console.log("FORMCART", cart);

  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  

  const totalPrice = cart.reduce(
    (price, product) => price + product.quantity * product.price,
    0
  );

  return (
    <div className="cart-product">
      <div className="cart-product-header"> Cart Items </div>

      {cart.length === 0 && <div> No items added yet </div>}

      <div>
        {cart.map((product) => (
          <div key={product.id} className="cart-product-list">
            <img
              className="cart-product-image"
              src={product.image}
              alt={product.productName}
            />
            <div className="cart-product-name">{product.productName} </div>

            <div className="cart-product-price">${product.price}</div>

            <div className="cart-product-btn">
              <div className="cart-product-price-quantity">
                {product.quantity} - ${product.price}
              </div>
              <button
                className="cart-product-add"
                onClick={() => {
                  added(product);
                }}
              >
                {" "}
                +{" "}
              </button>
              <button
                className="cart-product-remove"
                onClick={() => {
                  remove(product);
                }}
              >
                {" "}
                -{" "}
              </button>
              <div className="cart-product-total">Total : ${totalPrice}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormCart;
