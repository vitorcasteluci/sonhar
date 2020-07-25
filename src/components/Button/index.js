import React from "react";
import { ButtonStyled } from "./style";

function Button({ to, text }) {
  return <ButtonStyled to={to}>{text}</ButtonStyled>;
}

export default Button;
