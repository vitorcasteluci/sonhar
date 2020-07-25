import React from "react";
import Card from "react-bootstrap/Card";
import {
  CardSize,
  CardImg,
  CardTitle,
  CardText,
  ButtonContainer,
  ButtonStyled,
} from "./style";
function ArticleCard(props) {
  return (
    <CardSize>
      <CardImg variant="top" src={props.image} />
      <Card.Body>
        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.content}</CardText>
        <ButtonContainer>
          <ButtonStyled variant="outline-primary">Veja Mais</ButtonStyled>
        </ButtonContainer>
      </Card.Body>
    </CardSize>
  );
}

export default ArticleCard;
