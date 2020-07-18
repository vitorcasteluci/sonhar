import React from 'react';
import SearchLogo from '../../assets/glass.svg';
import styled from 'styled-components'

const Search = () => {
  return (
    <Container>
      <a className="search-link">
        <img className="search-link-icon" src={SearchLogo} alt="search" />
      </a>
    </Container>
  )
}

const Container = styled.div`
margin-right: 24px;
margin-left: 42px;
`

export default Search;