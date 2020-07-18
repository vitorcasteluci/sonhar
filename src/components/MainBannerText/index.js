import React from 'react';
import styled from 'styled-components';


const TopBar = () => {
    return (
        <Container>
            <div>Nosso maior objetivo está em acolher e resgar a dignidade, a autoestima e sonhos.</div>
        </Container>
    )

}

const Container = styled.div`
width: 488px;
height: 44px;
font: Medium var(--unnamed-font-size-36)/var(--unnamed-line-spacing-54) var(--unnamed-font-family-lato);
text-align: left;
font: Medium 36px/54px Lato;
letter-spacing: 0.72px;
color: #FFFFFF;
`

export default TopBar;