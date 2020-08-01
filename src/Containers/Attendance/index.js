import React from 'react'
import styled from "styled-components";
import PageHeader from "../../components/PageHeader"
import attendanceBanner from "../../assets/attendanceBanner.png"
import numGraph from "../../assets/numGraph.svg"
import pizzaGraph from "../../assets/pizzaGraph.svg"
const Attendance = () => {

  return (
    <div style={{ width: "100%" }}>
      <PageHeader src={attendanceBanner}>
        DADOS <br />
        SOBRE O ATENDIMENTO
      </PageHeader>
      <Main>
        <TextWrapper>
          <MainTitle>
            <TextBold>
              NOSSO ATENDIMENTO
            </TextBold>
          </MainTitle>
          <MainText>
            Estamos atuando há 2 (dois) anos, mas só em novembro de 2019 conseguimos legalizar o
            instituto. Atendemos cerca de 203 (duzentos e três) crianças e mulheres em curso, todas de baixa renda,
            sendo 168 pessoas em fila de espera.
            A expectativa é o atendimento de 6000 pessoas ao ano, a maioria meninas e mulheres em
            situação de abandono emocional por parte da família, que tenham sofrido violência por parte de familiar
            ou vizinho (perfil traçado de acordo com os casos já existentes na história do instituto).
            Em média já passaram mil pessoas pelo instituto. As crianças chegam até nós por meio de
            indicação dos conselhos tutelares, ministério público, CRAS, redes sociais, e-mails ou indicação de um
            outro psicólogo.
            Atendemos meninos na faixa etária de 6 (seis) a 13 (treze) anos; meninas de 2 (dois) a 16
            (dezesseis) anos e mulheres de 22 a 58 anos (Não possuímos restrição de idade, dados fornecidos apenas
            >para fins estatísticos)
          </MainText>
        </TextWrapper>
      </Main>
      <NumberDiv>
        <NumberTitle>NÚMEROS DO INSTITUTO</NumberTitle>
        <NumberText>
          Segundo dados retirados a partir dos atendimentos no instituto
          observamos que a criança ou adolescente que sofre violência tende a desenvolver problemas
          emocionais e comorbidades sérias como depressão, ansiedade, agitação, agressividade, pensamentos
          suicidas, humor instável, automutilação, perda de cabelo, perda de peso ou ganho de peso, insônia,
          irritabilidade, crises de raiva, fuga da realidade, retraimento ou impulsividade e baixo rendimento escolar.
        </NumberText>
        <NumberGraph><img style={{ maxWidth: "100%" }} src={numGraph} alt="graph"></img></NumberGraph>
        <NumberText>
          Tivemos sucesso com os atendimentos oferecidos, graças a nossa rede multiprofissional.<br />
          Ainda assim, existe a evasão de cerca de 15% (quinze por cento) dos pacientes que abandonam os
          tratamentos por diversos motivos, sendo os mais comuns: mãe voltar para o agressor, os responsáveis
          acharem desnecessário a continuação do atendimento, mudança ou contratação para um novo emprego, ou
          por falta de dinheiro para pagar a passagem para o deslocamento até instituto.
        </NumberText>
        <NumberText>
          Não definimos um tempo limite para a alta, criança ou adolescente deve conseguir equilíbrio emocional para tal.
          Nos dados existe 5% (cinco por cento) dos pacientes que não obtiveram resultado.<br />
          Isto está ligado principalmente
          aos responsáveis da criança, que normalmente ainda convive com o agressor ou ainda porque os responsáveis não ministram
          a medicação para a criança de forma correta.
        </NumberText>
        <NumberText>
          Outro dado importante é o de que 68% (sessenta e oito por cento) dos atendimentos que se seguiram normalmente são indicados
          pelo conselho tutelar ou por outro órgão público.<br /> Assim, onde os responsáveis são obrigados a trazer a criança ou adolescente para o Instituto.
        </NumberText>
        <NumberGraph><img style={{ maxWidth: "100%" }} src={pizzaGraph} alt="pizza"></img></NumberGraph>
      </NumberDiv>

    </div>
  )
}

const Main = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const TextWrapper = styled.div`
max-width: 1156px;
width: 100%;
margin-top: 10px;
`

const MainTitle = styled.h1`
color:#7B77FC;
font-weight:bold;
padding: 20px;
`

const MainText = styled.h2`
font-size: 16px;
text-align: left;
@media(min-width: 700px){
  line-height: 3.5;
}

padding: 24px;

`

const NumberDiv = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const NumberTitle = styled.h1`
color:#7B77FC;
font-weight:bold;
display: block;
padding: 20px;
`

const NumberText = styled.h2`
font-size: 16px;
display: block;
@media(min-width: 700px){
  max-width: 42%;
}
margin-bottom: 15px;
line-height: 1.5;
padding: 20px;
`

const NumberGraph = styled.div`
margin-bottom: 60px;
`

const Text = styled.p`
margin-bottom:40px
`

const TextBold = styled.p`
margin-bottom:40px;
font-weight:bold;
`

export default Attendance
