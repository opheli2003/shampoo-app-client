import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3``;

const ContactItem = styled.div`
margin-bottom: 20px;
margin-top: 20px;
display: flex;
align-items: center;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>E-SHAMPOO.</Logo>
        <Description>Made with bubbles</Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <i class="bi bi-facebook"></i>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <i class="bi bi-instagram"></i>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <i class="bi bi-twitter"></i>{" "}
          </SocialIcon>
          <SocialIcon color="E60023">
            <i class="bi bi-pinterest"></i>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
       
      </Center>
      <Right>

        <Title>Contact</Title>
        <ContactItem>
        <i class="bi bi-geo-alt-fill"></i>

6 rue de la lavande - 75013 Paris
          
        </ContactItem>
        <ContactItem>
        <i class="bi bi-telephone"></i>
+33 1 43 44 46 28
          
        </ContactItem>
        <ContactItem> <i class="bi bi-envelope"></i>
      

contact@eshampoo.fr         
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
