import React from "react";
import styled from 'styled-components';

const TopButton = (props) => {
  return (
    <Button>{props.title}</Button>
  )
}

export default TopButton;

const Button = styled.button`
padding: 0.5em 1em;
text-decoration: none;
background: #d33b3f;
color: #FFFFFF;
border: 0;
border-radius: 40px;
width: 112px;
height: 36px;
`