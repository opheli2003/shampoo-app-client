import { Routes, Route } from "react-router-dom";
import NavMain from "./components/Nav/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute";
import Products from "./components/Products";
import OneProduct from "./components/OneProduct";
import AddProduct from "./pages/AddProduct";
import CategoryGras from "./components/CategoryGras";
import NotFound from "./components/NotFound"
import CategoryList from "../src/components/categoryList";

// import BrandPage from "./pages/BrandPage"


function App() {
  return (
    <div className="App">
      <NavMain />
	  {/* <CategoryList /> */}
      <Routes>
        <Route path="/" element={<Home />} />
		<Route path="/products" element={<Products />} />
		<Route path="/products/create" element={<AddProduct />} />

		<Route path="/products/:id" element={<OneProduct/>} />

        <Route path="/categories" element={<CategoryList />} />
		<Route path="/categories/:id" element={<CategoryGras />} />

        {/* <Route path="/about-us" element={<BrandPage />} /> */}
        {/* <Route path="/adminDashboard" element={<AdminDashboard />} /> */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
		  
        </Route>
		<Route path="*" element={<NotFound />} />

		
      </Routes>
    </div>
  );
}

export default App;
