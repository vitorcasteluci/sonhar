import React from 'react';
import styled from 'styled-components';
import { MainTitle } from '../../../components/MainTitle';
import { Paragraph } from '../../../components/Paragraph';

const AboutInstitute = () => {
  return (
    <MainContainer>
      <Wrapper>
        <Test></Test>
      </Wrapper>
    </MainContainer>
  )
}

export default AboutInstitute;


const MainContainer = styled.div`
height: 940px;
display: flex;
align-itens: center;
justify-content: center;
padding: 20px 82px;
`

const Test = styled.div`
height: 50px;
width: 50px;
background-color: black;
`

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
max-width: 1156px;
align-items: center;

`

const Container = styled.div`
font: Bold 36px/54px Lato;
letter-spacing: 1.8px;
color: #7B77FC;
opacity: 1;
`
