import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  background-color: coral;
  position: relative;

  // const Arrow = styled.div
`;
// width: 50px;
// height: 50px;
// background-color: #fff7f7;
// border-radius: 50%;
// position: absolute;
// top:0;
// bottom: 0;
// margin: auto;
// cursor: pointer;
// opacity: 0.5;

const Wrapper = styled.div`
  height: 55vh;
  display: flex;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img``;

const InfosContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  return (
    <Container>
      <Wrapper>
        <Slide bg="fcf1ed">
          <ImgContainer>
            <Image
              src="https://lessavonsdejoya.com/901-large_default/shampooing-solide-stimulant.jpg"
              alt="shpoo"
            />
          </ImgContainer>
          <InfosContainer>
            <Title>WINTER SALE</Title>
            <Description>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              rem!
            </Description>
            <Button>SHOP NOW</Button>
          </InfosContainer>
        </Slide>
        <Slide bg="fbf0f4">
          <ImgContainer>
            <Image
              src="https://lessavonsdejoya.com/900-large_default/shampooing-solide-bleu.jpg"
              alt="shpoo"
            />
          </ImgContainer>
          <InfosContainer>
            <Title>BRAND NEW</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              debitis!
            </Description>
            <Button>SHOP NOW</Button>
          </InfosContainer>
        </Slide>
      </Wrapper>
    </Container>
  );
};

export default Slider;
