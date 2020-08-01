import React from 'react';
import './Link.css'
import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom'

const Link = ({ title, to }) => {
  return (
      <Container to={to}>
        {title}
      </Container>
  );
}

const Container = styled(LinkRouter)`
text-decoration: none !important;
color: #000000;
margin-right: 12px;
margin-left: 12px;
font-size: 16px;
font-family: Lato, Regular;
vertical-align: middle;
&:hover {
  color: #ff0040;
}
`

export default Link;
