import React from 'react';
import Link from '../Link/Link'
import styled from 'styled-components';
import TopButton from '../TopButton';
import Logo from "../Logo"
import Search from '../Search'


const TopBar = () => {
  return (
    <Container>
      <Logo/>
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
      <Search></Search>
      <TopButton title="Denuncie"></TopButton>
    </Container>
  )

}

const Container = styled.div`
width: 100%;
height: 158px;
display: flex;
margin: 0;
align-items: center;
justify-content: center;
`

export default TopBar;