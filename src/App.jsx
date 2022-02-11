import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavMain from "./components/Nav/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute";
import Products from "./components/Products";
// import OneProduct from "./components/OneProduct";
import AddProduct from "./pages/AddProduct";
import CategoryGras from "./components/CategoryGras";
import NotFound from "./components/NotFound";
import CategoryList from "../src/components/categoryList";
import UpdateProduct from "./pages/UpdateProduct";
import CategorySecs from "./components/category-secs";
import CategoryNormaux from "./components/category-normaux";
import CategoryMixtes from "./components/category-mixtes";
import Review from "./components/reviews";
import OneProdCatGras from "./components/OneProdCatGras";
import OneProdCatSecs from "./components/OneProdCatSecs";
import OneProdCatnormaux from "./components/OneProdCatNormaux";
import OneProdCatmixtes from "./components/OneProdCatMixtes";
import FormCart from "./components/Forms/FormCart";
import { useState } from "react";
import AdminDashboard from "./pages/AdminDashboard"
import BrandPage from "./pages/BrandPage"
// import BrandPage from "./pages/BrandPage"
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [cart, setCart] = useState([]);

  console.log("APP", cart);
  const handleAddProduct = (product) => {
    console.log("product", product);

    /*     product = {
      id,
      productName,
      ...
    }
 */
    setCart((oldState) => [...oldState, product]);
    console.log("cart", cart);
  };

  
  const handleAddedProduct = (product) => {
    console.log(cart);
    const ProductExist = cart.find((item) => item._id === product._id);
    if (ProductExist) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cart.find((item) => item._id === product._id);
    if (ProductExist.quantity === 1) {
      setCart(cart.filter((item) => item._id !== product._id));
    } else {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
    console.log();
  };

  useEffect(() => {
    localStorage.setItem("panier", JSON.stringify(cart));
  }, [cart]);

  //cart = { quantity: '',
  //          name: '',
  //           id: '',
  //           prix: ''}

  //creer la fonction handleaddproduct qui
  //met a jour le state (en rajoutant un produit)
  //enregistrer ce nouveau state dans localStorage
  //renvoyer ver la page souhaitée

  //passer la fonction en tant que prop au composant enfant qui execute la fonction
  //passer le state cart au composant qui affiche les éléments du panier

  return (
    <div className="App">
      {/* <Home/> */}
      <NavMain />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/create" element={<AddProduct />} />
        <Route path="/products/update/:id" element={<UpdateProduct />} />

        <Route path="/categories" element={<CategoryList />} />
        <Route path="/categories/cheveux-gras" element={<CategoryGras />} />

        <Route
          path="/categories/cheveux-gras/:id"
          element={<OneProdCatGras handleAddedProduct={handleAddedProduct} />}
        />

        <Route path="/categories/cheveux-secs" element={<CategorySecs />} />
        <Route
          path="/categories/cheveux-secs/:id"
          element={<OneProdCatSecs handleAddedProduct={handleAddedProduct}  />}
        />

        <Route
          path="/categories/cheveux-normaux"
          element={<CategoryNormaux />}
        />
        <Route
          path="/categories/cheveux-normaux/:id"
          element={<OneProdCatnormaux handleAddedProduct={handleAddedProduct} />}
        />

        <Route path="/categories/cheveux-mixtes" element={<CategoryMixtes />} />
        <Route
          path="/categories/cheveux-mixtes/:id"
          element={<OneProdCatmixtes handleAddedProduct={handleAddedProduct} />}
        />

        <Route
          path="/add-to-cart"
          element={
            <FormCart
              cart={cart}
              added= {handleAddedProduct}
              remove= {handleRemoveProduct}
            />
          }
        />

        {/* <Route path="/about-us" element={<BrandPage />} /> */}
        {/* <Route path="/adminDashboard" element={<AdminDashboard />} /> */}
        <Route path="/product/:id" element={<Review />} />

        <Route path="/about-us" element={<BrandPage />} />

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/admindashboard" element={<AdminDashboard/>} />

        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
