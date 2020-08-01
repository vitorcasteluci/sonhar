import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonStyled = styled(Link)`
  color: #7b77fc;
  background: #ffffff;
  padding: 10px;
  border: 1px solid #7b77fc;
  width: 107px;
  height: 38px;
  border-radius: 10px;
  outline: none;
  text-align:center;
  &:hover {
    background: #7b77fc;
    color: #ffffff;
  }
`;
