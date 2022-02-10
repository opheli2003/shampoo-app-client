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
  
  `

  const Title = styled.h1`
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
              <img src={cat.image} alt={cat.name} />
              <Title> 
                <Link to={`/categories/cheveux-${cat.category}`}>{cat.category}</Link>
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
