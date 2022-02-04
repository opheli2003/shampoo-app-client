import React from "react";
import categoryModel from "../../../../server/shampoo-app-server/models/category-model";
import category from '../components/categoryList'
import axios from 'axios'

const Home = () => {
	return (
		<div>

		<NavMain/>

<categoryList/>
		
			<h1>Welcome 🏡</h1>
		</div>
	);
};

export default Home;
