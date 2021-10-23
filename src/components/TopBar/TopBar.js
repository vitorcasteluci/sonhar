/* eslint-disable no-undef */
import React from "react";
import styled from "styled-components";
import TopButton from "../TopButton";
import Logo from "../Logo";
import Search from "../Search";
import { Link, useLocation } from "react-router-dom";
import ButtonPDF from'../ButtonPdf/ButtonPDF';
import { useEffect } from "react";

const TopBar = () => {
  const { pathname } = useLocation();
  const currentPath = pathname.substring(1);
  

  return (
    <Container>
      <Logo />
      <LinkStyled
        children="Principal"
        to="/"
        className={currentPath === "" && "active"}
      />
      <LinkStyled
        children="O instituto"
        to="/sobre"
        className={currentPath === "sobre" && "active"}
      />
      <LinkStyled
        children="Atendimento"
        to="/atendimento"
        className={currentPath === "atendimento" && "active"}
      />
      <LinkStyled
        children="Como ajudar?"
        to="/como-ajudar"
        className={currentPath === "como-ajudar" && "active"}
      />
      <LinkStyled
        children="Fique por dentro"
        to="/fique-por-dentro"
        className={currentPath === "fique-por-dentro" && "active"}
      />
      <LinkStyled
        children="Rádio Sonhar"
        to="/radio"
        className={currentPath === "fique-por-dentro" && "active"}
      />

      <TopButton title="Doe" to="/como-ajudar"></TopButton>
   
      <ButtonPDF title="Doações" href="Transparência-ÉPossívelSonhar.pdf" > </ButtonPDF>
       
       
      
      
    </Container>
   
  );
};

const Container = styled.div`
  max-width: 100%;
  height: 158px;
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: center;
  overflow-x: overlay;
`;

const LinkStyled = styled(Link)`
  text-decoration: none !important;
  color: #000000;
  margin-right: 12px;
  margin-left: 12px;
  font-size: 16px;
  font-family: Lato, Regular;
  vertical-align: middle;
  &:hover {
    color: #ff0040;
  }
  &.active {
    color: #ff0040;
  }
`;

export default TopBar;
