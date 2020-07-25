import React from 'react';
import styled from 'styled-components';

const Objective = () => {
  return (
    <MainContainer>
      <Wrapper>
        <Title>OBJETIVO</Title>
        <Container>
          <Text>
            De forma geral, o objetivo do instituto é impactar a comunidade e a vida de crianças e mulheres de baixa renda, vítimas de violência física, psíquica, emocional e sexual, por meio do acompanhamento multidisciplinar. Especificamente, nos utilizamos de atendimentos individuais e coletivos, sempre buscando novas formas de atuação clínica de acordo com a demanda. Além disso, queremos proporcionar aos atendidos um espaço para a expressão, e posterior ressignificação, dos sentimentos e subjetividades suscitados pelas vivências cotidianas, através da estimulação da criatividade bem como da expressão artística e socialização individual e grupal.
          </Text>
        </Container>
      </Wrapper>
    </MainContainer>
  )
}

export default Objective;

const MainContainer = styled.div`
height: 400px;
display: flex;
align-itens: center;
justify-content: center;
padding: 20px 82px;
`

const Title = styled.h1`
height: 44px;
font-family: Lato;
font-weight: bold;
font-size: 36px;
letter-spacing: 1.8px;
color: #7B77FC;
opacity: 1;
`

const Container = styled.div`
max-width: 744px;
padding: 40px;
`

const Text = styled.p`
font-family: Lato;
font-size: 16px;
font-weight: regular;
letter-spacing: 0px;
color: #332E2E;
opacity: 1;
`

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
max-width: 1156px;
align-items: center;
padding: 60px;
`