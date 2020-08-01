import React from "react";
import Card from "react-bootstrap/Card";
import {
  CardSize,
  CardImg,
  CardTitle,
  CardText,
  ButtonContainer,
} from "./style";
import Button from "../Button";

function ArticleCard({ image, title, content, id }) {
  return (
    <CardSize>
      <CardImg variant="top" src={image} />
      <Card.Body>
        <CardTitle>{title}</CardTitle>
        <CardText>{content}</CardText>
        <ButtonContainer>
          <Button
            text={"Saiba mais"}
            position="flex-end"
            to={`/publicacoes/${id}`}
          />
        </ButtonContainer>
      </Card.Body>
    </CardSize>
  );
}

export default ArticleCard;
