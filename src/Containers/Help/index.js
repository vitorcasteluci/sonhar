import React from "react";
import styled from "styled-components";
import helpBanner from "../../assets/helpbanner.svg"

const Help = () => {
    console.log(helpBanner)
    return(
        <div>
            <Header>
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
`

const Picture = styled.div`
`

const Title = styled.div`

`

export default Help

