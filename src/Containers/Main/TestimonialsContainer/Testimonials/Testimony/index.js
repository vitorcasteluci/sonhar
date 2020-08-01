import React from "react";
import styled from "styled-components";

export const Testimony = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Text><span>{props.text}</span></Text>
    </Container>
  )
}

const Container = styled.div`
overflow-x: overlay;
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

const Text = styled.div`
width: 100%;
font-style: italic;
font-family: Lato;
font-size: 16px;
font-weight: light;
letter-spacing: 0px;
color: #332E2E; 
`