import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';




const ButtonPDF = (props) => {
 
  return (

      <ContainerButton>
      { props.href ?
        <A href={props.href} target="_blank" src="/src/images/Transparência-ÉPossívelSonhar.pdf">{props.title}</A> :
        <StyledLink to={props.to}>{props.title}</StyledLink>
      }
    </ContainerButton>
    

  )
}

export default ButtonPDF;

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
margin-left:1em;
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
