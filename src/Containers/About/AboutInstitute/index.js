import React from "react";
import styled from "styled-components";

const AboutInstitute = () => {
  return (
    <MainContainer>
      <Wrapper>
        <Title>COMO NASCEU O INSTITUTO</Title>
        <Container>
          <Text>
            <p>
              A fundadora do Instituto é Possível sonhar <b>Daniela Generoso</b>{" "}
              teve o sonho de ter esse instituto porque foi com a sobrevivente
              em um lar disfuncional, onde foi vítima de abuso sexual, tortura
              psicológica e maus tratos físicos. Viu sua mãe ser vítima do mesmo
              abusador também por 15 anos, onde fugiu de casa e foi moradora de
              rua por nove meses e teve que catar latinha para sobreviver, foi
              amparada por pessoas que acolheram e deram uma segunda
              oportunidade de sonhar e hoje como Mestranda de Psicologia ela
              quer também poder dizer a outras crianças, adolescentes e mulheres
              vítimas: -
              <i>
                <b> É Possível Sonhar.</b>
              </i>{" "}
            </p>
            <p>
              Hoje segue lutando contra o câncer de mama com metástase no
              sistema linfático, acreditando que é possível sonhar . Quando
              observamos os dados oficiais da violência contra as crianças no
              estado do Rio de Janeiro, fica clara a emergência da existência de
              institutos e projetos que protejam os direitos e interesses
              daqueles que não respondem por si.
            </p>{" "}
            <p>
              Dentro da categoria de lesão corporal, violência psicológica,
              moral, e sexual, o dossiê criança e adolescente do estado do Rio
              de Janeiro (2018) mostra que as violações ocorrem em grandes
              quantidades: 3.367 crianças do estado foram estupradas em 2017,
              2.218 foram ameaçadas, e 740 foram maltratadas. E estes são apenas
              Dados oficiais, registrados na base de dados. Assim como as
              violências cometidas contra crianças e adolescentes, a violência
              contra a mulher é grande no estado.
            </p>{" "}
            <p>
              <b>
                Mais da metade de todas as violências psicológicas, sexuais, e
                morais cometidas são contra mulheres, e muitas vezes seus
                violentadores são familiares como o marido e os pais.
              </b>
            </p>{" "}
            <p>
              No estado do Rio de Janeiro, as mulheres são vítimas em 70% dos
              atendimentos notificados como agressões físicas nas redes de
              saúde, em dados extraídos entre janeiro de 2013 e junho de 2016
              pelo Observatório Judicial da Violência contra a Mulher. Os
              efeitos da agressão psicológica, física, e sexual prejudicam o
              desenvolvimento (no caso das crianças), as relações interpessoais,
              levam a doenças como a depressão, ansiedade, síndrome do pânico,
              comportamento agressivo, pensamentos suicidas, entre diversas
              outras complicações.
            </p>
            <p>
              <b>
                A violação dos direitos das crianças e das mulheres é a violação
                dos direitos humanos. A nenhum indivíduo pode ser negada a
                dignidade e o direito a segurança.{" "}
              </b>{" "}
            </p>
            <p>
              É neste contexto que surgiu o Instituto é Possível Sonhar. As
              violações cometidas contra mulheres e crianças, principalmente as
              que se encontram em estado de vulnerabilidade econômica, devem ser
              vistas por outras pessoas, para que haja uma mobilização social em
              torno da garantia dos direitos essenciais previstos na
              Constituição brasileira e no estatuto da criança e do adolescente.
              A existência do Instituto é parte de um sonho para que
              efetivamente se concretizem ações que mudem esta realidade.
            </p>
          </Text>
        </Container>
      </Wrapper>
    </MainContainer>
  );
};

export default AboutInstitute;

const MainContainer = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
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
`;
