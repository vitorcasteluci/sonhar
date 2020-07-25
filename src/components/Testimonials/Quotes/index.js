import React from 'react';
import styled from 'styled-components';


export const Quotes = (props) => {
  const { src } = props
  return (
    <Container>
      <img src={src} alt="quote"/>
    </Container>
  )
}

const Container = styled.div`
width: 29px;
height: 314px;
position: absolute;
`