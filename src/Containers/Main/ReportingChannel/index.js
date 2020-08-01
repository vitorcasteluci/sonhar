import React from 'react';
import styled from 'styled-components';
import { MainTitle } from '../../../components/MainTitle';
import { SubTitle } from '../../../components/SubTitle';
import TopButton from '../../../components/TopButton';
import reportIt from '../../../assets/report-it.png';

const ReportingChannel = () => {
  return (
    <>
      <MainContainer>

        <LeftContainer>
          <MainTitle text="CANAL DE DENUNCIA" />
          <ContainerText>
            <Text>O Disque Direitos Humanos, ou Disque 100, é um serviço de proteção de crianças e adolescentes com foco em violência sexual, vinculado ao Programa Nacional de Enfrentamento da Violência Sexual contra Crianças e Adolescentes, da SPDCA/SDH.</Text>
            <Text>O Disque 100 funciona diariamente das 8h às 22h, inclusive nos fins de semana e feriados. As denúncias recebidas são analisadas e encaminhadas aos órgãos de proteção, defesa e responsabilização, de acordo com a competência e as atribuições específicas, priorizando o Conselho Tutelar como porta de entrada (nas situações de crianças e adolescentes), no prazo de 24 horas, mantendo em sigilo a identidade da pessoa denunciante.</Text>
            <Text>Pode ser acessado por meio dos seguintes canais:</Text>
            <TextOption>• discagem direta e gratuita do número 100 -<TextPurple> Disque 100</TextPurple></TextOption>
            <TextOption>• envio de mensagem para o e-mail:<TextPurple> disquedireitoshumanos@sdh.gov.br</TextPurple></TextOption>
            <TextOption>• crimes na internet através do portal:<TextPurple> www.disque100.gov.br</TextPurple></TextOption>
            <TextOption>• Ouvidoria Online Clique 100:<TextPurple> http://www.humanizaredes.gov.br/ouvidoria-online/</TextPurple></TextOption>
            <SubTitle text="NÃO SE CALE, DENUNCIE!" />
          </ContainerText>

        </LeftContainer>
        <div>
          <RightContainer>

            <img alt="denuncie" style={{ maxWidth: "100%" }} src={reportIt} >
            </img>
          </RightContainer>
        </div>

      </MainContainer>

      <TopButton title="Denuncie" />
    </>
  )
}

export default ReportingChannel;

const MainContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-content: center;
justify-content: center;
width: 100%;
max-width: 1356px;
padding: 24px;
`

const LeftContainer = styled.div`
width: 100%;
flex: 1 1 435px; 
align-content: center;
`

const RightContainer = styled.div`
flex: 1 1 435px; 
display: flex;
align-items: center;
flex-direction: column;
margin: 40px;
`

const ContainerText = styled.div`
display: flex;
flex-direction: column;
`

const Text = styled.p`
text-align: left;
font: Bold 16px/24px Lato;
letter-spacing: 0px;
color: #1A0708;
`

const TextOption = styled.span`
text-align: left;
font: Bold 16px/24px Lato;
letter-spacing: 0px;
color: #1A0708;
`

const TextPurple = styled.span`
text-align: left;
font: Bold 16px/24px Lato;
letter-spacing: 0px;
color: #7B77FC;
`

