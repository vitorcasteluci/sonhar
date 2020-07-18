import React from 'react';
import styled from 'styled-components';
import { Quotes } from './Quotes';

import quoteOpen from '../../assets/quote-open.svg';
import quoteClose from '../../assets/quote-close.svg';

export const Testimonials = () => {
  return (
    <MainContainer>
      <QuotesContainerOpen>
        <Quotes src={ quoteOpen } />
      </QuotesContainerOpen>
      <Container>

      </Container>
      <QuotesContainerClose>
          <Quotes src={ quoteClose } />
      </QuotesContainerClose>
    </MainContainer>
  )
}

const MainContainer = styled.div`
width: 465px;
height: 296px;
display: flex;
flex-direction: row;
`

const Container = styled.div`
width: 465px;
height: 296px;
`

const QuotesContainerOpen = styled.div`
align-self: flex-start;
`

const QuotesContainerClose = styled.div`
align-self: flex-end;
`