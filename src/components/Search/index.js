import React from "react";
import SearchLogo from "../../assets/glass.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <Container>
      <Link className="search-link" to="/buscar">
        <img className="search-link-icon" src={SearchLogo} alt="search" />
      </Link>
    </Container>
  );
};

const Container = styled.div`
  margin-right: 24px;
  margin-left: 42px;
`;

export default Search;
