import React from 'react';
import ImageMainBanner from '../../assets/main-banner.png';
import styled from 'styled-components';

const MainBanner = () => {
    return (
        <Container>
            <img className="main-banner" src={ImageMainBanner} alt="" />
        </Container>
    )
}

const Container = styled.div`
    width: 1366px;
    height: 619px;
  `

export default MainBanner;