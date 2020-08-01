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
  StyledLink,
  Adress,
  RowAdress,
  LogoSonhar,
  Copyright,
  CopyrightContainer,
  Social,
} from "./style";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { Row, Col } from "react-bootstrap";
import SonharLogo from '../../images/2Logo-Sonhar.svg';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const { pathname } = useLocation();
  const currentPath = pathname.substring(1);

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
              <StyledLink
                children="O Instituto"
                to="/sobre"
                className={(currentPath === "sobre" && "active")}
              />
            </ColLinks>
            <ColLinks xs={12} sm={3}>
              <StyledLink
                children="Atendimento"
                to="/atendimento"
                className={(currentPath === "atendimento" && "active")}
              />
            </ColLinks>
            <ColLinks xs={12} sm={2}>
              <StyledLink
                children="Estatuto"
              />
            </ColLinks>
            <ColLinks xs={12} sm={3}>
              <StyledLink
                children="Como ajudar?"
                to="/como-ajudar"
                className={(currentPath === "como-ajudar" && "active")}
              />
            </ColLinks>
            <ColLinks xs={12} sm={2}>
              <StyledLink>Denuncie</StyledLink>
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
          <img src={SonharLogo} alt="Intituto Sonhar" />
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
