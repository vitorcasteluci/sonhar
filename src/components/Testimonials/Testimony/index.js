import React from "react";
import styled from "styled-components";

export const Testimony = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
    </Container>
  )
}

const Container = styled.div`
width: 465px;
height: 296px;
display: flex;
flex-direction: column;
margin: 0;
text-align: center;
`

const Title = styled.p`
font-style: regular;
font-family: Lato;
font-size: 16px;
letter-spacing: 0px;
color: #7B77FC; 
`

const Text = styled.p`
font-style: italic;
font-family: Lato;
font-size: 16px;
font-weight: light;
letter-spacing: 0px;
color: #332E2E; 
`