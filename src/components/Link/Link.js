import React from 'react';
import styled from 'styled-components';


const Link = (props) => {
  return (
    <Container>
      {props.title}
    </Container>

  );
}

const Container = styled.div`
margin-right: 12px;
margin-left: 12px;
`

export default Link;
