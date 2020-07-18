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
        to="/"
      />
      <Link
        title="O instituto"
        to="/sobre"
      />
      <Link
        title="Atendimento"
        to="/atendimento"
      />
      <Link
        title="Como ajudar?"
        to="/como-ajudar"
      />
      <Link
        title="Fique por dentro"
        to="/fique-por-dentro"
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