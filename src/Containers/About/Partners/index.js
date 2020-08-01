import React from "react";
import styled from "styled-components";
import TrevoLogo from "../../../assets/partners-trevo.png";

const Partners = () => {
  return (
    <MainContainer>
      <Title>PARCEIROS</Title>
      <Container>
        <PartnerLogo src={TrevoLogo} />
      </Container>
    </MainContainer>
  );
};

export default Partners;

const MainContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Title = styled.h1`
  padding: 40px;
  font-family: Lato;
  font-weight: bold;
  font-size: 36px;
  letter-spacing: 1.8px;
  color: #7b77fc;
  opacity: 1;
`;

const Container = styled.div`
  max-width: 744px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const PartnerLogo = styled.img`
  width: 196px;
  height: 147px;
`;
