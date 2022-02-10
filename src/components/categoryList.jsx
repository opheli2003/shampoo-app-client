import React from "react";
import { Link } from "react-router-dom";
import APIHandler from "../api/apiHandler";
import { useState, useEffect } from "react";
import { LoadingMess } from "./LoadingMess";
import { ErrorMess } from "./ErrorMess";
import styled from "styled-components";

const CategoryList = () => {
  // make a state variable for categories
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const x = async () => {
      setLoading(true);
      /// get all categories from backend with apiHandler
      /// change the state with the newly retrieved categories
      try {
        const response = await APIHandler.get("/api/categories");
        setLoading(false);
        setCategory(response.data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    x();
  }, []);

  const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  margin: 3px;
  height: 70vh;
  position: relative
  `

const Img = styled.img`
width: 90%;
height: 80%;
object-fit: cover;

`

  const Title = styled.h1`
  position: absolute;
  width: 80%;
  color: black;
  /* margin: 20px; */
  display: flex;
  justify-content: center;
 
 ;
  `
  
  return (
    <>
      {loading ? (
        <LoadingMess />
      ) : error ? (
        
        <ErrorMess />
      ) : (
        <>
          {category.map((cat) => {
            return (
              <Container key={cat._id}>
              <Img src="https://images.squarespace-cdn.com/content/v1/5e80aecdb4495743110f0bbb/1588858364833-SCXTGN04ULCU7NJSUJRX/Un-homme-qui-se-lave-les-cheveux-au-shampooing.jpg" alt="catgry image" />
              <Title>
               
               
                <Link to={`/categories/cheveux-${cat.category}`}><button>Show me more</button></Link>
                </Title>
              </Container>
            );
          })}
        </>
      )}
    </>
  );
};

export default CategoryList;
