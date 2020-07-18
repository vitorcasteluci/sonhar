import React from "react";
import styled from "styled-components";

const ArticleButton = (props) => {
  return (
    <Button>{props.title}</Button>
  )
}

const Button = styled.button`
text-decoration: none;
width: 107px;
height: 38px;
background: #FFFFFF;
color: #7B77FC;
border: 1px solid #7B77FC;
border-radius: 10px;
opacity: 1;
`

export default ArticleButton;