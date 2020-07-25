import React from 'react';
import ImageMainBanner from '../../../assets/main-banner.png';
import styled from 'styled-components';

const MainBanner = () => {
    return (
        <Container>
            <Text>Nosso maior objetivo está em
                <TextRed> acolher e resgatar </TextRed>
                a dignidade, a autoestima e sonhos.</Text>
        </Container>
    )
}

export default MainBanner;

const Container = styled.div`
    width: 1366px;
    height: 619px;
    background-image: url(${ImageMainBanner});
    position: relative;
  `
const Text = styled.div`
    font-family: Lato;
    width: 30%;
    font-weight: bold;
    top: 121px;
    color: #FFFFFF;
    left: 139px;    
    font-size: 27px;
    position: absolute;
`
const TextRed = styled.span`
    color: #D33B3F;
`