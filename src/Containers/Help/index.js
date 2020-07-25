import React from "react";
import styled from "styled-components";
import helpBanner from "../../assets/helpbanner.svg"

const Help = () => {
    console.log(helpBanner)
    return(
        <div>
            <Header>
                <Title>
                    COMO <br /> NOS AJUDAR!
                </Title>
                <Picture>
                    <img src={helpBanner} alt="helpBanner"></img>
                </Picture>
            </Header>
            Help
        </div>
    );
}

const Header = styled.div`
width: 1366px;
height : 459.25px;
background-color: #F0EFFC;
margin: 0 auto;
display: flex;
justify-content: space-between;
padding: 22px 83px;
align-items: center;
`

const Picture = styled.div`
`

const Title = styled.h1`
display: block;
font-family: Lato;
font-style: medium;
margin-bottom: 126px;
margin-left: 50px;
`

export default Help

