import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const CardSize = styled(Card)`
  width: 249px;
  height: 451px;
`;

export const CardImg = styled(Card.Img)`
  width: 249px;
  height: 194px;
`;

export const CardTitle = styled(Card.Title)`
  margin-top: 25px;
  margin-bottom: 17px;
  color: #7b77fc;
  font-weight: 600;
  font-size: 16px;
`;

export const CardText = styled(Card.Text)`
  margin-bottom: 40px;
  line-height: 24px;
  opacity: 1;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ButtonStyled = styled.button`
  color: #7b77fc;
  background: #ffffff;
  border: 1px solid #7b77fc;
  width: 107px;
  height: 38px;
  border-radius: 10px;
  outline: none;
  &:hover {
    background: #7b77fc;
    color: #ffffff;
  }
`;
