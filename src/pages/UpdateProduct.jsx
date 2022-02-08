import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiHandler from "../api/apiHandler";

const UpdateProduct = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [stock, setStock] = useState("");
  const [ref, setRef] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("component mount");
    setLoading(true);
    const init = async () => {
      /// get all categories from backend with apiHandler
      /// change the state with the newly retrieved categories
      try {
        const response = await apiHandler.get("/api/products/" + id);
        setProductName(response.data.productName);
        setDescription(response.data.description);
        setPrice(response.data.price);
        setImage(response.data.image);
        setCategory(response.data.category);
        setType(response.data.type);
        setIngredients(response.data.ingredients);
        setStock(response.data.stock);
        setRef(response.data.ref);
        console.log("UPDATE", id);
        console.log(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err.message);
        setLoading(false);
      }
    };
    init();
  }, []);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const newData = new FormData();
    newData.append("productName", productName);
    newData.append("description", description);
    newData.append("price", price);
    newData.append("image", image);
    newData.append("category", category);
    newData.append("type", type);
    newData.append("ingredients", ingredients);
    newData.append("stock", stock);
    newData.append("ref", ref);

    try {
      const response = await apiHandler.patch(
        `/api/products/update/${id}`,
        newData
      );
      setProductName(response.data.productName);
      setDescription(response.data.description);
      setPrice(response.data.price);
      setImage(response.data.image);
      setCategory(response.data.category);
      setType(response.data.type);
      setIngredients(response.data.ingredients);
      setStock(response.data.stock);
      setRef(response.data.ref);

      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handlePreviewImage = () => {
    const reader = new FileReader();

    reader.onloadend = () => {
      // when the fileREader ends  ...
      const baseString = reader.result; // get the image as a base64 encoded string
      setPreviewImage(baseString); // set the tmp avatar as an image source before upload
    };

    reader.readAsDataURL(image); // read the file from the local disk
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    if (image && typeof image === "object") handlePreviewImage();
  }, [image]);

  console.log("previewImage >>>", previewImage);

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
          <label htmlFor="image"> Actual Image</label>
          <input type="image" id="image" name="image" value={image} onChange={handleImage} />
        </div>

        <div>
          <label htmlFor="image"> new image</label>
          <input type="file" id="image" name="image" onChange={handleImage} />
        </div>

        {previewImage && (
          <div>
            <img src={previewImage} alt="" />
          </div>
        )}




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
            onChange={(evt) => setCategory(evt.target.value)}
          >
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
            onChange={(evt) => setType(evt.target.value)}
          >
            <option value="amande-douce">Amande-douce</option>
            <option value="bambou">bambou</option>
            <option value="mangue-coriandre">mangue-coriandre</option>
            <option value="coco">coco</option>
          </select>
        </div>

        <button>Update a shampoo</button>
      </form>
      <div></div>
    </div>
  );
};

export default UpdateProduct;
