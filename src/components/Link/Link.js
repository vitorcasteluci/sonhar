import React from 'react';
import './Link.css'
import styled from 'styled-components';


const Link = (props) => {
  return (
    <Container>
      {props.title}
    </Container>

  );
}

const Container = styled.div`
margin-right: 24px;
margin-left: 24px;
`

export default Link;
