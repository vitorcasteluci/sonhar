import React from "react";
import styled from "styled-components";

const Partners = () => {
  return (
    <MainContainer>
      <Wrapper>
        <Title>OBJETIVO</Title>
        <Container></Container>
      </Wrapper>
    </MainContainer>
  );
};

export default Partners;

const MainContainer = styled.div`
  height: 940px;
  display: flex;
  align-itens: center;
  justify-content: center;
  padding: 20px 82px;
`;

const Title = styled.h1`
  height: 44px;
  font-family: Lato;
  font-weight: bold;
  font-size: 36px;
  letter-spacing: 1.8px;
  color: #7b77fc;
  opacity: 1;
`;

const Container = styled.div`
  max-width: 744px;
  padding: 40px;
`;

const Text = styled.p`
  font-family: Lato;
  font-size: 16px;
  font-weight: regular;
  letter-spacing: 0px;
  color: #332e2e;
  opacity: 1;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1156px;
  align-items: center;
  padding: 60px;
`;
