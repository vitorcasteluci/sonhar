import React from "react";
import {
  RodapeContainer,
  CentralContainer,
  FollowUs,
  RowStyled,
  ContainerStyled,
  ColLinks,
  Icon,
  Divider,
  StyledLinks,
  Adress,
  RowAdress,
  LogoSonhar,
  Copyright,
  CopyrightContainer,
  Social,
} from "./style";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { Row, Col, Container } from "react-bootstrap";
import SonharLogo from '../../images/2Logo-Sonhar.svg'

export default function Footer() {
  return (
    <RodapeContainer>
      <CentralContainer>
        <RowStyled>
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
        <ContainerStyled fluid>
          <Row>
            <ColLinks xs={12} sm={2}>
              <StyledLinks to="/sobre">O Instituto</StyledLinks>
            </ColLinks>
            <ColLinks xs={12} sm={3}>
              <StyledLinks to="/atendimento">Atendimento</StyledLinks>
            </ColLinks>
            <ColLinks xs={12} sm={2}>
              <StyledLinks>Estatuto</StyledLinks>
            </ColLinks>
            <ColLinks xs={12} sm={3}>
              <StyledLinks to="/como-ajudar">Como ajudar?</StyledLinks>
            </ColLinks>
            <ColLinks xs={12} sm={2}>
              <StyledLinks>Denuncie</StyledLinks>
            </ColLinks>
          </Row>
        </ContainerStyled>
        <RowAdress>
          <Col>
            <Adress>Endereço: Rua dos Rubis, 144 sala 315 Rocha Miranda – Rio de Janeiro – RJ – Cep: 21.510-013
                Telefone: 55 (21) 9 8773-1916/ 9 8621-5069 – CNPJ 35.807.142/0001-40</Adress>
          </Col>
        </RowAdress>
        <LogoSonhar>
          <img src={SonharLogo} />
        </LogoSonhar>
        <CopyrightContainer>
          <Copyright>
            Todos os direitos reservados
          </Copyright>
        </CopyrightContainer>
      </CentralContainer>
    </RodapeContainer>
  );
}
