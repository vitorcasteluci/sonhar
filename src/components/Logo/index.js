import React from 'react';
import imgLogo from '../../assets/Logo3.svg';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <img src={imgLogo} alt="search" />
      </Link>
    </Container>
  )
}

const Container = styled.div`
height: 75px;
width: 100px;
`

export default Logo;