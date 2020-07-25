import React from "react";
import styled from "styled-components";

const ArticleButton = (props) => {
  return (
    <Button marginTop={props.marginTop}>{props.title}</Button>
  )
}

const Button = styled.button`
margin-top: ${props => props.marginTop};
text-decoration: none;
width: 107px;
height: 38px;
background: transparent;
color: #7B77FC;
border: 1px solid #7B77FC;
border-radius: 10px;
opacity: 1;
`

export default ArticleButton;