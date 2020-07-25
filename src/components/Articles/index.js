import React from 'react';
import styled from 'styled-components';
import Button from '../Button'
import { SubTitle } from '../SubTitle';
import { Paragraph } from '../Paragraph'


const Article = (props) => {
  return (
    <MainContainer>

      <ImageContainer src={props.image} />

      <TextContainer>
        <TitleContainer>
          <SubTitle text={props.title} />
        </TitleContainer>

        <ContentContainer>
          <Paragraph text={props.content} />
        </ContentContainer>

      </TextContainer>

      <ButtonContainer>
        <Button marginTop="40px" title="Veja mais"></Button>
      </ButtonContainer>

    </MainContainer>

  );
}

const MainContainer = styled.div`
width: 259px;
height: 451px;
`
const ImageContainer = styled.img`
width: 249px;
height: 194px;
`
const TitleContainer = styled.div`
padding-top: 25px;
padding-bottom: 17px;
`
const ContentContainer = styled.div`
width: 217px;
`
const TextContainer = styled.div`
height: 157px;
padding-right: 16px;
padding-left: 16px;
margin-bottom: 40px;
`
const ButtonContainer = styled.div`
margin-top: 40px;
padding-right: 16px;
padding-left: 126px;
`

export default Article;