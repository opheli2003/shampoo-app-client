import { Routes, Route } from "react-router-dom";
import NavMain from "./components/Nav/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute";
import BrandPage from "./pages/BrandPage"
import AdminDashboard from "./pages/AdminDashboard"
import CategoryList from '../src/components/categoryList'


function App() {
	return (
		<div className="App">
			<NavMain />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/categories" element={<CategoryList />} />
				<Route path="/about-us" element={<BrandPage />} />
				<Route path="/adminDashboard" element={<AdminDashboard />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
				<Route element={<PrivateRoute />}>
				<Route path="/profile" element={<Profile />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
