import React from 'react';
import imgLogo from '../../assets/Logo3.svg';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Logo = () => {
  return (
    <Container>
      <Link  to="/">
        <img  src={imgLogo} alt="search" />
      </Link>
    </Container>
  )
}

const Container = styled.div`
margin-right: 24px;
margin-left: 42px;
height: 150px;
width: 150px;
`

export default Logo;