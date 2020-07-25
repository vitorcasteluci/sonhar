import React from 'react';
import styled from 'styled-components';
import { Quotes } from './Quotes';
import { Testimony } from './Testimony';

import quoteOpen from '../../assets/quote-open.svg';
import quoteClose from '../../assets/quote-close.svg';

export const Testimonials = () => {
  return (
    <MainContainer>
      <QuotesContainerOpen>
        <Quotes src={ quoteOpen } />
      </QuotesContainerOpen>
      <Container>
        <Testimony 
          title="Meu nome é X, tenho 8 anos e fui abusada sexualmente pelo filho da tia que cuida de mim." 
          text="Quando eu tinha 5 anos, ficava na casa da tia M, ela cuidava de mim enquanto meu papai e minha mamãe iam trabalhar. O filho dela de 23 anos, me chamou para assistirmos um filme enquanto ela estava ausente (não me lembro o que ela foi fazer nesse dia), esse filme tinham pessoas peladas e fazendo coisas que eu não entendia muito bem, e ele, passando a mão em minhas pernas e pedindo para que eu ficasse de calcinha e blusa, pediu que eu repetisse a moça do filme. Eu só consegui contar para a minha mamãe quando fiz 7 anos, pois fiquei com muito medo de não acreditarem em mim." 
        />
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
padding: 24px;
margin-left: 24px;
`

const QuotesContainerOpen = styled.div`
align-self: flex-start;
`

const QuotesContainerClose = styled.div`
align-self: flex-end;
`