import React from "react";
import styled from "styled-components";


const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 15px;
font-weight: bold;
`

const Announcement = () => {
    return (
        <div>
        <Container>
Dernier jour des soldes ! Frais de port gratuits à partir de 30€  !

        </Container>


        </div>

    )
}

export default Announcement