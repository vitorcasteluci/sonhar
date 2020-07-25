import React from 'react'
import styled from "styled-components";
import { Paragraph } from '../../../components/Paragraph';


const Team = () => {
    return (
      <MainContainer>
            <MainTitle>NOSSO TIME</MainTitle>
          
            <TextContainer>
                <ContainerDirection>
                    <Title>Diretoria</Title>
                    <ParagraphContainer>
                        <Paragraph text="Daniela Carla Araújo Alves Generoso" />
                        <Paragraph text="Presidente, Fundadora e Psicóloga Técnica responsável" />
                    </ParagraphContainer>
                    <ParagraphContainer>
                        <Paragraph text="Carla Damasceno" />
                        <Paragraph text="Vice-presidente e Psicóloga" />
                    </ParagraphContainer>
                    <ParagraphContainer>
                        <ParagraphLighterName>Airam Silva de Oliveira Chaves</ParagraphLighterName>
                        <ParagraphLighter>Secretária e diretora de projetos</ParagraphLighter>
                    </ParagraphContainer>
                    <ParagraphContainer>
                        <Paragraph text="Monica da Conceição Nunes Rocha" />
                        <Paragraph text="Diretora Executiva e Psicóloga" />
                    </ParagraphContainer>
                    <ParagraphContainer>
                        <Paragraph text="Ana Caroline da Silva Alves" />
                        <Paragraph text="Conselho Fiscal e Secretária" />
                    </ParagraphContainer>
                    <ParagraphContainer>
                        <Paragraph text="Eunice Miranda Araújo" />
                        <Paragraph text="Conselho Fiscal" />
                    </ParagraphContainer>
                    <ParagraphContainer>
                        <Paragraph text="Lucia Helena Andrade Vieira de Santana" />
                        <Paragraph text="Auxiliar administrativo" />
                    </ParagraphContainer>
                    <ParagraphContainer>
                        <Paragraph text="Eliel Souza da Silva" />
                        <Paragraph text="Contador" />
                    </ParagraphContainer>
                </ContainerDirection>
                <ContainerExperts>
                    <Title>Especialistas</Title>
                    <ParagraphContainer>
                    <Paragraph text="Solange" />
                    <Paragraph text="Assistente social" />
                    </ParagraphContainer>
                    <ParagraphContainer>
                    <Paragraph text="Marcela" />
                    <Paragraph text="Assistente social" />
                    </ParagraphContainer>
                    <ParagraphContainer>
                    <Paragraph text="Andréia Gonçalves de Assis" />
                    <Paragraph text="Assistente social" />
                    </ParagraphContainer>
                    <ParagraphContainer>
                    <Paragraph text="Barbarella de Oliveira Cavalcante D'Ambrosio" />
                    <Paragraph text="Assistência Jurídica" />
                    </ParagraphContainer>
                    <ParagraphContainer>
                    <Paragraph text="Catiane Gonçalves Cabral" />
                    <Paragraph text="Assistência Jurídica" />
                    </ParagraphContainer>
                    <ParagraphContainer>
                    <Paragraph text="Juliana Andreia Paes Rodrigues Viana" />
                    <Paragraph text="Nutricionista" />
                    </ParagraphContainer>
                    <ParagraphContainer>
                    <Paragraph text="Priscila de Oliveira Souza" />
                    <Paragraph text="Fonoaudióloga" />
                    </ParagraphContainer>
                    <ParagraphContainer>
                    <Paragraph text="Bruno Vettore" />
                    <Paragraph text="Psiquiatra" />
                    </ParagraphContainer>
                    <ParagraphContainer>
                    <Paragraph text="Juliana Sanches" />
                    <Paragraph text="Supervisora de psicologia dos estagiários" />
                    </ParagraphContainer>
                    <ParagraphContainer>
                    <Paragraph text="Gessiane" />
                    <Paragraph text="Professora de reforço escolar" />
                    </ParagraphContainer>
                </ContainerExperts>
            </TextContainer>
            
      </MainContainer>
    )
}

export default Team;

const MainContainer = styled.div`
width: 100%;

`
const MainTitle = styled.h1`
text-align: center;
font: Bold 36px/54px Lato;
letter-spacing: 1.8px;
color: #7B77FC;
opacity: 1;
margin-bottom: 75px;
`
const TextContainer = styled.div`
width: 930px;
margin: 0 auto;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
`


const ParagraphContainer = styled.div`
margin-bottom: 26px;
`
const ParagraphLighterName = styled.p`
text-align: left;
font: Regular 16px/24px Lato;
font-weight: bold;
letter-spacing: 0px;
color: #707070;
opacity: 1;
`
const ParagraphLighter = styled.p`
text-align: left;
font: Regular 16px/24px Lato;
letter-spacing: 0px;
color: #707070;
opacity: 1;
`

const ContainerDirection = styled.div`
width: 540px;
`

const ContainerExperts = styled.div`
width: 390px;
`
const Title = styled.p`
margin-bottom:32px;
font-size: 24px;
letter-spacing: 1.2px;
color: #1A0708;
font-weight: 500;
`

