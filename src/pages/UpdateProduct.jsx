import React, { useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiHandler from "../api/apiHandler";

const UpdateProduct = () => {
	const [productName, setProductName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [image, setImage] = useState("");
	const [category, setCategory] = useState("");
	const [type, setType] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [stock, setStock] = useState("");
    const [ref, setRef] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const {id} = useParams();
	const navigate = useNavigate();

useEffect(() => {
    console.log('component mount')
    setLoading(true);
            const init = async () => {
              /// get all categories from backend with apiHandler
              /// change the state with the newly retrieved categories
              try {
                const response = await apiHandler.get("/api/products/"+id);
                setProductName(oldState => response.data.productName)
                setDescription(oldState => response.data.description)
                setPrice(oldState => response.data.price)
                setImage(oldState => response.data.image)
                setCategory(oldState => response.data.category)
                setType(oldState => response.data.type)
                setIngredients(oldState => response.data.ingredients)
                setStock(oldState => response.data.stock)
                setRef(oldState => response.data.ref)
                console.log('UPDATE', id)
                console.log(response.data)
                setLoading(false);
              } catch (err) {
                  console.error(err)
                setError(err.message);
                setLoading(false);
              }
            };
            init();
          }, []);


    const handleSubmit = async (evt) => {
        evt.preventDefault();

        const newData = new FormData ();
        newData.append ("productName", products.productName);
        newData.append ( "description",products.description);
        
        try {
            const response = await apiHandler.patch(`/api/products/update/${id}`, newData);
            setProductName(newState => response.data.productName)

            console.log(response.data);


        } catch (err) {
            console.error(err);
        } 


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
						type="uploader"
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
					<label htmlFor="stock">stocks</label>
					<input
						type="number"
						id="stock"
						name="stock"
						value={stock}
						onChange={(evt) => setStock(evt.target.value)}
					/>
				</div>


                <div>
					<label htmlFor="ref">Reference:</label>
					<input
						type="text"
						id="ref"
						name="ref"
						value={ref}
						onChange={(evt) => setRef(evt.target.value)}
					/>
				</div>

                <div>
					<label htmlFor="price">Price:</label>
					<input
						type="number"
						id="price"
						name="price"
						value={price}
						onChange={(evt) => setPrice(evt.target.value)}
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
				
				<button>Update a shampoo</button>
			</form>
<div>



	
</div>




		</div>

		
	);}

export default UpdateProduct
