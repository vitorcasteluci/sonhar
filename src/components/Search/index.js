import React from 'react';
import { ReactComponent as Logo } from '../assets/glass.svg';

const Search = () => {
  return (
  <a className="search-link" target="_blank">
    <img className="search-link-icon" src={Logo} alt="search" />
  </a>
  )
}

export default Search;