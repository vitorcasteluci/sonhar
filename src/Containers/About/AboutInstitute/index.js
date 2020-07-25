import React from 'react';
import styled from 'styled-components';
import { MainTitle } from '../../../components/MainTitle';
import { Paragraph } from '../../../components/Paragraph';

const AboutInstitute = () => {
  return (
    <MainContainer>
      <TitleContainer>
        <MainTitle text="COMO NASCEU O INSTITUTO" />

      </TitleContainer>
        <TextContainer>
          <Paragraph text="A fundadora do Instituto é Possível sonhar Daniela Generoso teve o sonho de ter esse instituto porque foi com a sobrevivente em um lar disfuncional, onde foi vítima de abuso sexual, tortura psicológica e maus tratos físicos. Viu sua mãe ser vítima do mesmo abusador também por 15 anos, onde fugiu de casa e foi moradora de rua por nove meses e teve que catar latinha para sobreviver, foi amparada por pessoas que acolheram e deram uma segunda oportunidade de sonhar e hoje como Mestranda de Psicologia ela quer também poder dizer a outras crianças, adolescentes e mulheres vítimas: - É Possível Sonhar. Hoje segue lutando contra o câncer de mama com metástase no sistema linfático, acreditando que é possível sonhar. Quando observamos os dados oficiais da violência contra as crianças no estado do Rio de Janeiro, fica clara a emergência da existência de institutos e projetos que protejam os direitos e interesses daqueles que não respondem por si. Dentro da categoria de lesão corporal, violência psicológica, moral, e sexual, o dossiê criança e adolescente do estado do Rio de Janeiro (2018) mostra que as violações ocorrem em grandes quantidades: 3.367 crianças do estado foram estupradas em 2017, 2.218 foram ameaçadas, e 740 foram maltratadas. E estes são apenas Dados oficiais, registrados na base de dados. Assim como as violências cometidas contra crianças e adolescentes, a violência contra a mulher é grande no estado. Mais da metade de todas as violências psicológicas, sexuais, e morais cometidas são contra mulheres, e muitas vezes seus violentadores são familiares como o marido e os pais. No estado do Rio de Janeiro, as mulheres são vítimas em 70% dos atendimentos notificados como agressões físicas nas redes de saúde, em dados extraídos entre janeiro de 2013 e junho de 2016 pelo Observatório Judicial da Violência contra a Mulher. Os efeitos da agressão psicológica, física, e sexual prejudicam o desenvolvimento (no caso das crianças), as relações interpessoais, levam a doenças como a depressão, ansiedade, síndrome do pânico, comportamento agressivo, pensamentos suicidas, entre diversas outras complicações. A violação dos direitos das crianças e das mulheres é a violação dos direitos humanos. A nenhum indivíduo pode ser negada a dignidade e o direito a segurança. É neste contexto que surgiu o Instituto é Possível Sonhar. As violações cometidas contra mulheres e crianças, principalmente as que se encontram em estado de vulnerabilidade econômica, devem ser vistas por outras pessoas, para que haja uma mobilização social em torno da garantia dos direitos essenciais previstos na Constituição brasileira e no estatuto da criança e do adolescente. A existência do Instituto é parte de um sonho para que efetivamente se concretizem ações que mudem esta realidade." />
        </TextContainer>
    </MainContainer>
  )
}

export default AboutInstitute;

const MainContainer = styled.div`
  height: 940px;
  //display: flex;
  //flex-direction: column;
  //align-itens: center;
  //justify-content: space-between;
  //padding: 20px 82px;
`
const TextContainer =  styled.div`
width: 744px;
height: 706px;
`

const TitleContainer =  styled.div`
  text-align: center;
`


// const Container = styled.div`
// height: 100%;
// width: 436px;
// margin: 10px 20px
// `
