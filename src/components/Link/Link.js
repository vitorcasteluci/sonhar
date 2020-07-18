import React from 'react';
import './Link.css'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'

const Link = ({ title, to }) => {

  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault()
    history.push(to);
  }

  return (
    <Container onClick={handleClick}>
      {title}
    </Container>
  );
}

const Container = styled.div`
margin-right: 12px;
margin-left: 12px;
cursor: pointer; 
`

export default Link;
