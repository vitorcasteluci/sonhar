import React from 'react';
import styled from 'styled-components';
import { Quotes } from './Quotes';
import { Testimony } from './Testimony';

import quoteOpen from '../../assets/quote-open.svg';
import quoteClose from '../../assets/quote-close.svg';

export const Testimonials = (props) => {
  return (
    <MainContainer>
      <QuotesContainerOpen>
        <Quotes src={quoteOpen} />
      </QuotesContainerOpen>
      <Container>
        <Testimony
          title={props.title}
          text={props.text}
        />
      </Container>
      <QuotesContainerClose>
        <Quotes src={quoteClose} />
      </QuotesContainerClose>
    </MainContainer>
  )
}

const MainContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center
`

const Container = styled.div`
padding: 24px;
`

const QuotesContainerOpen = styled.div`
align-self: flex-start;
`

const QuotesContainerClose = styled.div`
align-self: flex-end;
`