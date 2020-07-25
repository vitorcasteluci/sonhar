import React from 'react';
import styled from 'styled-components';

const MissionValues = () => {
  return (
    <MainContainer>
      <ContainerMission>
        <Title>Missão</Title>
        <Text>Acolher e resgatar a dignidade, autoestima e sonhos para crianças e mulheres vítimas da violência física, psíquica, emocional e sexual</Text>
      </ContainerMission>
      <ContainerValues>
        <Title>Valores</Title>
        <Text>Ser reconhecida como uma organização pluralista, com forte credibilidade e que promove a transformação do ser. Sempre respeitando a diversidade, posicionamento e individualidade em cada atendimento.</Text>
      </ContainerValues>
    </MainContainer>
  )
}

export default MissionValues;

const MainContainer = styled.div`
height: 309px;
display: flex;
flex-wrap: wrap;
align-itens: center;
justify-content: center;
padding: 20px 80px;
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
height: 55px;
`

const ContainerMission = styled.div`
flex: 1 1 400px;
background: #F0EFFC 0% 0% no-repeat padding-box;
opacity: 1;
min-height: 310px;
padding: 48px;
`

const ContainerValues = styled.div`
flex: 1 1 400px;
padding: 48px;
background: #FFFFFF 0% 0% no-repeat padding-box;
opacity: 1;
min-height: 310px;
`