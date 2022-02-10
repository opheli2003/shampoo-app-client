import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import "../../styles/NavMain.css";
import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  padding: 10px 20px;
  text-align: center;
`;

const RightRight = styled.span`
  padding: 10px 20px;
  width: 20%;
  text-align: center;
  justify-content: space-evenly;
`;


const Language = styled.span`
 font-size: 14px;
 cursor: pointer;
`;

const Center = styled.div`
  padding: 10px 20px;
  width: 20%;

`;

const Logo = styled.h1`
font-weight: bold;
flex: 1;

`;

const Right = styled.div`
  padding: 10px 20px;
flex: 1;
`;
const Menu = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  justify-content: space-evenly

`;

// const LogOutButton = styled.div`

//   font-size: 14px;
//   cursor: pointer;
//   margin-right: 25px;

// `;


const NavMain = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  return (
    <Container>
      <Wrapper>
      
      
      
      <Left>
          <Link to="/"><Logo>E-shampoo.</Logo></Link></Left>
          {/* <Left>  <Language>FR</Language></Left> */}
            
          <Center> <Link to="/about-us">About us</Link></Center>
          
          {isLoggedIn && (
            <><RightRight>
           
              <Link to="/profile">
                {currentUser && currentUser.email}
              </Link></RightRight>
              <RightRight><p onClick={removeUser}>Sign out</p></RightRight>
            </>
          )}
          {!isLoggedIn && (
            <><Right><Menu>
              <Link to="/signin">Log in</Link></Menu></Right>
              <Right><Menu><Link to="/signup">Sign Up</Link></Menu>
              {/* caddy */}
              </Right>
            </>
          )}
          <RightRight>  <Link to="/add-to-cart"> Panier</Link> </RightRight>
        
      </Wrapper>
    </Container>
  );
};

export default NavMain;
