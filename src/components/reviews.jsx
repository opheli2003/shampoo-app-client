import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiHandler from "../api/apiHandler";
import reviews from "../styles/reviews.css"

const Review = () => {

const[reviewTitle, setReviewTitle] = useState("");
const[review, setReview] = useState("");
const[rating, setRating] = useState("");
const[image, setImage] = useState("");
const { id } = useParams();
const [previewImage, setPreviewImage] = useState("");




const handleSubmit = async (evt) => {
    evt.preventDefault();

    const newData = new FormData();
    newData.append("reviewTitle", reviewTitle);
    newData.append("review", review);
    newData.append("rating", rating);
    newData.append("image", image);
    
    try {
      const response = await apiHandler.post(
        `api/product/${id}/reviews`,
        newData
      );
      setReviewTitle(response.data.reviewTitle);
      setReview(response.data.review);
      setRating(response.data.rating);
      setImage(response.data.image);
    
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


return(
    <div className="testimonials"> 
    <form className="body" onSubmit={handleSubmit}>
    <h1>Je donne mon avis</h1>
        <div  >
          <label htmlFor="">Titre</label>
          <input
          className="card"
            type="text"
            id="reviewTitle"
            name="reviewTitle"
            value={reviewTitle}
            onChange={(evt) => setReviewTitle(evt.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Commentaire:</label>
          <input
            type="text"
            id="review"
            name="review"
            value={review}
            onChange={(evt) => setReview(evt.target.value)}
          />
        </div>

        <div>
          <label htmlFor="image"> Image</label>
          <input type="file" id="image" name="image" onChange={handleImage} />
        </div>

        {previewImage && (
          <div>
            <img src={previewImage} alt="" />
          </div>
        )}

        <div>
          <label htmlFor="rating">Note</label>
          <input
            type="Number"
            id="rating"
            name="rating"
            value={rating}
            onChange={(evt) => setRating(evt.target.value)}
          />
        </div>
          
        <button>Soumettre mon avis</button>

    </form>
    
    
    
     </div>
)
}

export default  Review; 
