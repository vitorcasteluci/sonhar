import React from "react";
import styled from "styled-components";
import Wrapper from "../../../components/Wrapper";
import { MainTitle } from "../../../components/MainTitle";
import { Paragraph } from "../../../components/Paragraph";
import Button from "../../../components/Button";
import knowInstitute from "../../../assets/knowInstitute.svg";

const KnowInstitute = () => {
  return (
    <MainContainer>
      <Wrapper>
        <ImageContainer src={knowInstitute} />
        <Container>
          <MainTitle text="CONHEÇA O INSTUTUTO É POSSIVEL SONHAR" />
          <Paragraph text="O INSTITUTO É POSSIVÉL SONHAR é fundamentado nas diretrizes do Estatuto da Criança e do Adolescente e nos Direitos da Mulher. Nele são desenvolvidas atividades terapêuticas, psicoeducativas, de lazer e cultura para vítimas de violência (sexual, física e psíquica) em período complementar ao horário escolar." />
          <Button to="/sobre" title="Saiba mais" text={"Saiba mais"} />
        </Container>
      </Wrapper>
    </MainContainer>
  );
};

export default KnowInstitute;

const MainContainer = styled.div`
height: 445px;
display: flex;
align-items: center;
justify-content: center;
padding: 20px 82px;
`

const Container = styled.div`
height: 100%;
width: 436px;
margin: 10px 20px;
`;

const ImageContainer = styled.img`
width: 425px;
height: 395px;
`;
