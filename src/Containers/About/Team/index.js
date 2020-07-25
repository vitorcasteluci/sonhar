import React from 'react'
import styled from "styled-components";
import { MainTitle } from '../../../components/MainTitle';
import { Paragraph } from '../../../components/Paragraph';


const Team = () => {
    return (
      <MainContainer>
          <ImageContainer src={knowInstitute} />
          <Container>
            <MainTitle text="NOSSO TIME" />
            <ContainerDirection>
                <Paragraph text="Daniela Carla Araújo Alves Generoso" />
                <Paragraph text="Presidente, Fundadora e Psicóloga Técnica responsável" />
                <Paragraph text="Carla Damasceno" />
                <Paragraph text="Vice-presidente e Psicóloga" />
                <Paragraph text="Airam Silva de Oliveira Chaves" />
                <Paragraph text="Secretária e diretora de projetos" />
                <Paragraph text="Monica da Conceição Nunes Rocha" />
                <Paragraph text="Diretora Executiva e Psicóloga" />
                <Paragraph text="Ana Caroline da Silva Alves" />
                <Paragraph text="Conselho Fiscal e Secretária" />
                <Paragraph text="Eunice Miranda Araújo" />
                <Paragraph text="Conselho Fiscal" />
                <Paragraph text="Lucia Helena Andrade Vieira de Santana" />
                <Paragraph text="Auxiliar administrativo" />
                <Paragraph text="Eliel Souza da Silva" />
                <Paragraph text="Contador" />
            </ContainerDirection>
            <ContainerExperts>
                <Paragraph text="Solange" />
                <Paragraph text="Assistente social" />
                <Paragraph text="Marcela" />
                <Paragraph text="Assistente social" />
                <Paragraph text="Andréia Gonçalves de Assis" />
                <Paragraph text="Assistente social" />
                <Paragraph text="Barbarella de Oliveira Cavalcante D'Ambrosio" />
                <Paragraph text="Assistência Jurídica" />
                <Paragraph text="Catiane Gonçalves Cabral" />
                <Paragraph text="Assistência Jurídica" />
                <Paragraph text="Juliana Andreia Paes Rodrigues Viana" />
                <Paragraph text="Nutricionista" />
                <Paragraph text="Priscila de Oliveira Souza" />
                <Paragraph text="Fonoaudióloga" />
                <Paragraph text="Bruno Vettore" />
                <Paragraph text="Psiquiatra" />
                <Paragraph text="Juliana Sanches" />
                <Paragraph text="Supervisora de psicologia dos estagiários" />
                <Paragraph text="Gessiane" />
                <Paragraph text="Professora de reforço escolar" />
            </ContainerExperts>
            
            
          </Container>
      </MainContainer>
    )
}

export default Team;

const MainContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-items: center;
justify-content: space-between;
`

const ContainerDirection = styled.div`
width: 574px;
margin-top: 81px;
`

const ContainerExperts = styled.div`
width: 407px;
margin-top: 81px;
`