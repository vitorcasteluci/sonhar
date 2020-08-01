import React from "react";
import styled from "styled-components";
import { MainTitle } from "../../../components/MainTitle";
import { Paragraph } from "../../../components/Paragraph";
import Button from "../../../components/Button";
import knowInstitute from "../../../assets/knowInstitute.svg";

const KnowInstitute = () => {
  return (
    <MainContainer>
      <ImageContainer src={knowInstitute} />
      <Container>
        <MainTitle text="CONHEÇA O INSTUTUTO É POSSIVEL SONHAR" />
        <Paragraph text="O INSTITUTO É POSSIVÉL SONHAR é fundamentado nas diretrizes do Estatuto da Criança e do Adolescente e nos Direitos da Mulher. Nele são desenvolvidas atividades terapêuticas, psicoeducativas, de lazer e cultura para vítimas de violência (sexual, física e psíquica) em período complementar ao horário escolar." />
        <Button to="/sobre" title="Saiba mais" text={"Saiba mais"} />
      </Container>
    </MainContainer>
  );
};

export default KnowInstitute;


const MainContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
align-items: center;
justify-content: center;
padding: 20px 82px;
`

const Container = styled.div`
flex: 1 1 435px;
height: 100%;
margin: 10px 20px;
`;

const ImageContainer = styled.img`
flex: 1 1 425px;
width: 435px;
height: 395px;
`;
