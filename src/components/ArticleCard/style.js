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
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const CardBody = styled(Card.Body)`

 background-color:black;
`;

export const ButtonContainer = styled.div`
display:flex;
justify-content:flex-end;
`