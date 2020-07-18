import React from 'react';
import SearchLogo from '../../assets/glass.svg';

const Search = () => {
  return (
    <a className="search-link" target="_blank">
      <img className="search-link-icon" src={SearchLogo} alt="search" />
    </a>
  )
}

export default Search;