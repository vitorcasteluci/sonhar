import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TopButton = (props) => {
  return (
    <ContainerButton>
      { props.href ?
        <A href={props.href} target="_blank" rel="noopener noreferrer">{props.title}</A> :
        <StyledLink to={props.to}>{props.title}</StyledLink>
      }
    </ContainerButton>
  )
}

export default TopButton;

const A = styled.a`
color: #FFFFFF !important;
text-decoration: none !important;
`

const StyledLink = styled(Link)`
color: #FFFFFF !important;
text-decoration: none !important;
`

const ContainerButton = styled.button`
padding: 0.5em 1em;
text-decoration: none;
background: #d33b3f;
color: #FFFFFF;
border: 0;
border-radius: 40px;
width: 112px;
height: 36px;
&:hover {
  background: #ff0040;
}
`