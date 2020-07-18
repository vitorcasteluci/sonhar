import React from 'react';
import styled from 'styled-components'

export const Paragraph = (props) => {
  const { text } = props
  return (
    <Container>
      {text}
    </Container>
  )
}

const Container = styled.p`
text-align: left;
font: Regular 16px/24px Lato;
letter-spacing: 0px;
color: #332E2E;
opacity: 1;
`