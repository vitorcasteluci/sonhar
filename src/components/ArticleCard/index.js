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
import Button from "../Button"

function ArticleCard(props) {
  return (
    <CardSize>
      <CardImg variant="top" src={props.image} />
      <Card.Body>
        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.content}</CardText>
        <ButtonContainer>
        <Button text={'Saiba mais'} position="flex-end" />
        </ButtonContainer>
      </Card.Body>
    </CardSize>
  );
}

export default ArticleCard;

