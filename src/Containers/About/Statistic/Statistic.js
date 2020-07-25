import React from 'react';
import styled from 'styled-components';

import TeamPsyc from '../../../assets/teamPsyc.svg'
import TeamStag from '../../../assets/teamStag.svg'
import International from '../../../assets/international.svg'

const Statistic = () => {
    return (
        <Container>
            <StatisticBox>
                <Statistics color="#7B77FC">
                    <StImage src={International} />
                    <TextBox>
                        <Text fontSize="2rem" textColor="white">22</Text>
                        <Text fontSize="1.5rem" textColor="white">Estagiários de psicologia Estácio unidade do Norte Shopping</Text>
                    </TextBox>
                </Statistics>
                <Statistics>
                    <StImage src={TeamStag} />
                    <TextBox>
                        <Text fontSize="2rem" textColor="red">58</Text>
                        <Text fontSize="1.5rem" textColor="#7B77FC">Mobilizadores sociais</Text>
                    </TextBox>
                </Statistics>
                <Statistics>
                    <StImage src={TeamPsyc} />
                    <TextBox>
                        <Text fontSize="2rem"  textColor="red">7</Text>
                        <Text fontSize="1.5rem" textColor="#7B77FC">Psicólogos voluntários</Text>
                    </TextBox>
                </Statistics>
            </StatisticBox>
        </Container>
    )
}

const Container = styled.div`
display:flex;
justify-content:center;
width:100%;
height:480px;
`


const StatisticBox = styled.div`
display:flex;
justify-content:center;
width:100%;
max-width: 1200px;
height:480px;
flex-flow:wrap;
`
const Statistics = styled.div`
background-color:${(props) => props.color};
display:flex;
justify-content:space-between;
align-items:center;
width:50%;
`
const TextBox = styled.div`
display:flex;
flex:1;
flex-flow:column;
align-items:center;
justify-content:center;
`
const Text = styled.p`
text-align:center;
font-size:${(props) => props.fontSize};
color:${(props) => props.textColor};
font-weight:bold;
`

const StImage = styled.img`
flex:1;
width:127px;
height:145px;
padding:10px
`

export default Statistic;