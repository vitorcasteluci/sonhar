import React from "react";
import {
  Container,
  FollowUs,
  RowStyled,
  Icon,
  Divider,
  StyledLinks,
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
        <StyledLinks>O Instituto</StyledLinks>
        <StyledLinks>Atendimento</StyledLinks>
        <StyledLinks>Estatuto</StyledLinks>
        <StyledLinks>Como ajudar?</StyledLinks>
        <StyledLinks>Denuncie</StyledLinks>
      </RowStyled>
    </Container>
  );
}
