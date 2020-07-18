import React from 'react';
import styled from 'styled-components'

export const MainTitle = (props) => {
  const { text } = props
  return (
    <Container>
      {text}
    </Container>
  )
}

const Container = styled.h1`
text-align: left;
font: Bold 36px/54px Lato;
letter-spacing: 1.8px;
color: #7B77FC;
opacity: 1;
`