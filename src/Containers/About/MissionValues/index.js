import React from 'react';
import styled from 'styled-components';

const MissionValues = () => {
  return (
    <MainContainer>
      <ContainerMission color="#F0EFFC">
        <Title>Missão</Title>
        <Text>Acolher e resgatar a dignidade, autoestima e sonhos para crianças e mulheres vítimas da violência física, psíquica, emocional e sexual</Text>
      </ContainerMission>
      <ContainerMission  color="#FFFFFF">
        <Title>Valores</Title>
        <Text>Ser reconhecida como uma organização pluralista, com forte credibilidade e que promove a transformação do ser. Sempre respeitando a diversidade, posicionamento e individualidade em cada atendimento.</Text>
      </ContainerMission>
    </MainContainer>
  )
}

export default MissionValues;

const MainContainer = styled.div`
height: fit-content;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;

`
const Title = styled.h1`
text-align: left;
font-family: Lato;
font-size: 24px;
font-weight: Medium;
letter-spacing: 1.2px;
color: #7B77FC;
opacity: 1;
`

const Text = styled.p`
text-align: left;
font-family: Lato;
font-size: 16px;
font-weight: Regular;
letter-spacing: 0px;
color: #1A0708;
opacity: 1;

`

const ContainerMission = styled.div`
flex: 1 1 400px;
background-color: ${props=>props.color};
opacity: 1;
min-height: 310px;
padding: 20px;
`