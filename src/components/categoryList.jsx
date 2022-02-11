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
  vertical-align: middle;
flex-direction: column;
  margin: 3px;
  height: 70vh;
  position: relative;
  background-color: coral;
  `

const Img = styled.img`
/* width: 2%; */
height: 60%;
size: 150px;
position: absolute;

object-fit: cover;
margin: auto;

`

  const Title = styled.h1`
  position: absolute;
 
  /* width: 100%;
  height: 100%;
  top: 0;
  left: 0; */
  /* size: 10px; */
  color: gray;
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
              <Img src={cat.image} alt={'cat.name'} />

              { <Title>
               
               
                <Link to={`/categories/cheveux-${cat.category}`}><button className = "shopButton">SEE MORE</button></Link>
              </Title>  }
              </Container>
            );
          })}
        </>
      )}
    </>
  );
};

export default CategoryList;
