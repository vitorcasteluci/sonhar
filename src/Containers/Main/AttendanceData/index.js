import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../../components/Wrapper';
import { MainTitle } from '../../../components/MainTitle';
import { Paragraph } from '../../../components/Paragraph';
import Button from '../../../components/Button';
import attendanceImg from '../../../assets/main-attendance.svg';

const AttendanceData = () => {
  return (
    <MainContainer>
      <Wrapper>
        <Container>
          <MainTitle text="DADOS SOBRE O ATENDIMENTO" />
          <Paragraph text="Estamos atuando há 2 (dois) anos, mas só em novembro de 2019 conseguimos legalizar o instituto. Atendemos cerca de 203 (duzentos e três) crianças e mulheres em curso, todas de baixa renda, sendo 168 pessoas em fila de espera." />
          <Button title="Saiba mais" />
        </Container>
        <ImageContainer src={attendanceImg} />
      </Wrapper>
    </MainContainer>
  )
}

export default AttendanceData;

const ImageContainer = styled.img`
  width: 650px;
  height: 314px;
`

const MainContainer = styled.div`
  height: 430px;
  display: flex;
  align-itens: center;
  justify-content: center;
  padding: 20px 82px;
  background: #F0EFFC 0% 0% no-repeat padding-box;
`

const Container = styled.div`
height: 100%;
width: 436px;
margin: 10px 20px
`
