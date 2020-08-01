import React from "react";
import Gallery from "./Gallery";
import styled from "styled-components";

const Info = () => {
  return (
    <>
      <Text>EM CONSTRUÇÃO</Text>
      <Gallery></Gallery>
    </>
  );
};

const Text = styled.h1`
  text-align: center;
  font: Bold 36px/54px Lato;
  letter-spacing: 1.8px;
  color: #7b77fc;
  opacity: 1;
`;

export default Info;
