import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import styled from "styled-components";

const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction:column`

const Title = styled.h1`
font-size:70px;
margin-bottom: 20px;


`
const Description = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;


`
const InputContainer = styled.div`
/* width: 50%; */
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgrey;
`
const input = styled.div`

border: none`
const Button = styled.div`


`

const Newsletter = () => {

    return(
        <Container>
<Title>Newsletter</Title>
<Description>Recevez en exclu toutes nos nouveautés</Description>
        <InputContainer>
<input style={{border: "none", paddingLeft: "20px"}} type="text" placeHolder="Votre email"  />

        <Button   ><i className="bi bi-send"></i>
</Button>
        </InputContainer>
        
        
        </Container>
        
    )
}

export default Newsletter