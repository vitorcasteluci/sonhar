import React from "react";
import {
  ButtonStyled,
} from "./style";

function Button(props) {
  return (
    <ButtonStyled>{props.text}</ButtonStyled>
  );
}

export default Button;