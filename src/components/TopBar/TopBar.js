import React from 'react';
import Link from '../Link/Link'
import styled from 'styled-components';
import TopButton from '../TopButton';
import Seach from '../Search'


const TopBar = () => {
  return (
    <Container>
      <Link
        title="Principal"
      />
      <Link
        title="O instituto"
      />
      <Link
        title="Atendimento"
      />
      <Link
        title="Como ajudar?"
      />
      <Link
        title="Fique por dentro"
      />
      <Seach></Seach>
      <TopButton title="Denuncie"></TopButton>
    </Container>
  )

}

const Container = styled.div`
width: 756px;
heigth: 37px;
display: flex;
align-items: center;
justify-content: center;
`

export default TopBar;