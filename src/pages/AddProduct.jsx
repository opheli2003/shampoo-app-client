import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
	const [productName, setProductName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [image, setImage] = useState("");
	const [category, setCategory] = useState("");
	const [type, setType] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [error, setError] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (evt) => {
		evt.preventDefault();

		const data = {
			productName,
            description,
            price,
            image,
            category,
            type,
            ingredients,
		};

		axios
			.post('http://localhost:4000/api/products/create', data)
			.then((response) => {
				console.log(response);
				navigate("/products");
			})
			.catch((error) => {
				console.log(error);
				setError("There was an error, please try again");
			});
	};

	return (
		<div>
			<form className="form" onSubmit={handleSubmit}>
				{/* {error !== "" && <p>{error}</p>} */}
				<div>
					<label htmlFor="productName">productName</label>
					<input
						type="text"
						id="productName"
						name="productName"
						value={productName}
						onChange={(evt) => setProductName(evt.target.value)}
					/>
				</div>
                <div>
					<label htmlFor="description">description</label>
					<input
						type="text"
						id="description"
						name="description"
						value={description}
						onChange={(evt) => setDescription(evt.target.value)}
					/>
				</div>
                <div>
					<label htmlFor="image">image</label>
					<input
						type="text"
						id="image"
						name="image"
						value={image}
						onChange={(evt) => setImage(evt.target.value)}
					/>
				</div>

                <div>
					<label htmlFor="ingredients">ingredients</label>
					<input
						type="text"
						id="ingredients"
						name="ingredients"
						value={ingredients}
						onChange={(evt) => setIngredients(evt.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="category">category</label>
					<select
						name="category"
						id="category"
						value={category}
						onChange={(evt) => setCategory(evt.target.value)}>
						<option value="secs">cheveux secs</option>
						<option value="normaux">cheveux normaux</option>
						<option value="gras">cheveux gras</option>
						<option value="mixtes">cheveux mixtes</option>

					</select>
				</div>
				
                <div>
					<label htmlFor="type">type</label>
					<select
						name="type"
						id="type"
						value={type}
						onChange={(evt) => setType(evt.target.value)}>
						<option value="amande-douce">Amande-douce</option>
						<option value="bambou">bambou</option>
						<option value="mangue-coriandre">mangue-coriandre</option>
                        <option value="coco">coco</option>

					</select>
				</div>
				
				<button>Add a shampoo</button>
			</form>
<div>



	
</div>




		</div>

		
	);
};

export default AddProduct
