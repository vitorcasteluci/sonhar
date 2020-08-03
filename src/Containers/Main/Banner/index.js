import React from 'react';
import ImageMainBanner from '../../../assets/main-banner.png';
import styled from 'styled-components';

const MainBanner = () => {
  return (
    <Container>
      <ImageContainer>
        <Text>Nosso maior objetivo está em
                <TextRed> acolher e resgatar </TextRed>
                a dignidade, a autoestima e sonhos.</Text>
      </ImageContainer>
    </Container>
  )
}

export default MainBanner;

const Container = styled.div`
  width: 100%;
`

const ImageContainer = styled.div`
    max-width: 1356px;
    height: 619px;
    background-image: url(${ImageMainBanner});
    background-size: auto;
    background-repeat: no-repeat;
    position: relative;
    margin: auto;
  `

const Text = styled.div`
    @media(min-width: 800px){
      left: 139px;    
      width: 30%;
    }

    position: absolute;
    font-family: Lato;
    font-weight: bold;
    top: 121px;
    color: #FFFFFF;
    padding: 12px;
    
    font-size: 27px;
    
`
const TextRed = styled.span`
    color: #D33B3F;
`