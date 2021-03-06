import React from "react";
import styled from "styled-components";
import { MainTitle } from "../../../components/MainTitle";
import { Paragraph } from "../../../components/Paragraph";
import Button from "../../../components/Button";
import attendanceImg from "../../../assets/main-attendance.svg";

const AttendanceData = () => {
  return (
    <MainContainer>
      <Wrapper>
      <Container>
        <MainTitle text="DADOS SOBRE O ATENDIMENTO" />
        <Paragraph text="Estamos atuando há 2 (dois) anos, mas só em novembro de 2019 conseguimos legalizar o instituto. Atendemos cerca de 203 (duzentos e três) crianças e mulheres em curso, todas de baixa renda, sendo 168 pessoas em fila de espera." />
        <ButtonBox>
        <Button to="/atendimento" title="Saiba mais" text={"Saiba mais"} />
        </ButtonBox>
      </Container>
      <ImageContainer>
        <img style={{ maxWidth: "100%" }} alt="atendimento" src={attendanceImg} />
      </ImageContainer>
      </Wrapper>
    </MainContainer>
  );
};

export default AttendanceData;

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 24px;
  background: #f0effc 0% 0% no-repeat padding-box;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width:1365px;
  align-items: center;
  justify-content: center;
`

const ImageContainer = styled.div`
  flex: 1 1 435px;
  min-height: 314px;
`;

const Container = styled.div`
  flex: 1 1 435px;
  min-height: 314px;
`;

const ButtonBox = styled.div`
width:100%;
margin-top:30px;
`;