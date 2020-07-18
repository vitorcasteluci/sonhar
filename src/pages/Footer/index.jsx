import React from "react";
import {
  Container,
  FollowUs,
  RowStyled,
  Icon,
  Divider,
  StyledLinks,
  Adress,
  RowAdress,
  LogoSonhar,
  Copyright,
  Social,
} from "./style";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { Row, Col } from "react-bootstrap";
import SonharLogo from "../../images/2Logo-Sonhar.svg";

export default function Footer() {
  return (
    <Container>
      <RowStyled padding={19}>
        <FollowUs>Siga nossas redes</FollowUs>
        <Icon>
          <Social href="https://www.facebook.com/institutoepossivelsonhar/">
            <FaFacebookSquare
              icon-4x
              onClick={() =>
                window.open(
                  "https://www.facebook.com/institutoepossivelsonhar/"
                )
              }
            />
          </Social>
        </Icon>
        <Icon>
          <Social href="https://www.instagram.com/institutoepossivelsonhar/">
            <FiInstagram
              onClick={() =>
                window.open(
                  "https://www.instagram.com/institutoepossivelsonhar/"
                )
              }
            />
          </Social>
        </Icon>
      </RowStyled>
      <Row>
        <Col>
          <Divider />
        </Col>
      </Row>
      <RowStyled padding={32}>
        <StyledLinks to="/sobre">O Instituto</StyledLinks>
        <StyledLinks to="atendimento">Atendimento</StyledLinks>
        <StyledLinks to="estatuto">Estatuto</StyledLinks>
        <StyledLinks to="como-ajudar">Como ajudar?</StyledLinks>
        <StyledLinks style={{ paddingRight: "30.6%" }} to="denuncie">
          Denuncie
        </StyledLinks>
      </RowStyled>
      <RowAdress padding={24.5}>
        <Adress>
          Endereço: Rua dos Rubis, 144 sala 315 Rocha Miranda – Rio de Janeiro –
          RJ – Cep: 21.510-013 Telefone: 55 (21) 9 8773-1916/ 9 8621-5069 – CNPJ
          35.807.142/0001-40
        </Adress>
      </RowAdress>
      <LogoSonhar src={SonharLogo} alt="" />
      <Copyright>Todos os direitos reservados</Copyright>
    </Container>
  );
}
