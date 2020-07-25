import React from "react";
import {
  ButtonStyled,
} from "./style";

function Button(props) {
  return (
    <ButtonStyled variant="outline-primary">{props.text}</ButtonStyled>
  );
}

export default Button;