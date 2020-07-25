import React from 'react';
import styled from 'styled-components';

const Wrapper = ({children}) => {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
width: 100%;
display: flex;
max-width: 1156px;
justify-content: space-between;
`

export default Wrapper;