import React from "react";
import {
  Container,
  FollowUs,
  RowStyled,
  Icon,
  Divider,
  StyledLinks,
  Adress,
  RowAdress
} from "./style";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { Row, Col } from "react-bootstrap";
export default function Footer() {
  return (
    <Container>
      <RowStyled padding={19}>
        <FollowUs>Siga nossas redes</FollowUs>
        <Icon>
          <FaFacebookSquare icon-4x />
        </Icon>
        <Icon>
          <FiInstagram />
        </Icon>
      </RowStyled>
      <Row>
        <Col>
          <Divider />
        </Col>
      </Row>
      <RowStyled padding={32}>
        <StyledLinks >O Instituto</StyledLinks>
        <StyledLinks>Atendimento</StyledLinks>
        <StyledLinks>Estatuto</StyledLinks>
        <StyledLinks>Como ajudar?</StyledLinks>
        <StyledLinks style={{ paddingRight: '30.6%' }}>Denuncie</StyledLinks>
      </RowStyled>
      <RowAdress padding={24.5}>
        <Adress>Endereço: Rua dos Rubis, 144 sala 315 Rocha Miranda – Rio de Janeiro – RJ – Cep: 21.510-013
        Telefone: 55 (21) 9 8773-1916/ 9 8621-5069 – CNPJ 35.807.142/0001-40</Adress>
      </RowAdress>
    </Container>
  );
}
