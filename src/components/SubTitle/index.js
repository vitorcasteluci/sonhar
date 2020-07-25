import React from 'react';
import styled from 'styled-components'

export const SubTitle = (props) => {
  const { text } = props
  return (
    <Container>
      {text}
    </Container>
  )
}

const Container = styled.h3`
text-align: left;
font: Bold 16px/24px Lato;
letter-spacing: 0px;
color: #7B77FC;
opacity: 1;
`