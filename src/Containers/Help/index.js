import React from "react";
import styled from "styled-components";
import helpBanner from "../../assets/helpbanner.svg";
import PageHeader from "../../components/PageHeader";

const Help = () => {
  return (
    <MainParent>
      <PageHeader src={helpBanner}>
        COMO <br /> NOS AJUDAR!
      </PageHeader>
      <Main>
        <MainTitle>QUER NOS AJUDAR?</MainTitle>
        <MainText>
          <TextBold>Nossas necessidades são:</TextBold>
          <Text>
            Reforma e mobiliário das salas para ampliarmos o número de
            atendimentos ou um outro imóvel.{" "}
          </Text>
          <Text>Cestas básicas mensais.</Text>
          <Text>
            Apoio financeiro para o pagamento das contas mensais de aluguel,
            luz, telefone, internet e salário dos funcionários.
          </Text>
          <Text>
            Lanche diário para as crianças que vem para o reforço escolar.
          </Text>
          <Text>
            Você pode também pode nos ajudar adotando uma criança pelo valor de
            30 (Trinta) reais mensais e nos seguindo em nossas redes sociais.{" "}
          </Text>
          <TextBold>CNPJ: 35.807.142/0001-40 </TextBold>
          <TextBold>Banco Stone – 197 </TextBold>
          <TextBold>C/c 490953-7 Agência: 0001</TextBold>
        </MainText>
      </Main>
    </MainParent>
  );
};

const MainParent = styled.div`
  width: 100%;
`;

const Main = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 940px;
`;

const MainTitle = styled.h1`
  color: #7b77fc;
  font-weight: bold;
  text-align: center;
`;

const MainText = styled.h2`
  font-size: 16px;
  text-align: left;
  max-width: 90%;
`;

const Text = styled.p`
  margin-bottom: 40px;
`;

const TextBold = styled.p`
  margin-bottom: 40px;
  font-weight: bold;
`;
export default Help;
