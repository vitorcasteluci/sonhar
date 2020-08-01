import styled from "styled-components";
import { Link } from "react-router-dom";
import {Row} from "react-bootstrap" 

export const PublicationsContainer = styled.div`
width: 100%;
margin-top:40px;
display:flex;
flex-flow:column;
justify-content:center;
`;


export const ArticleContainerDiv = styled.div`
  margin-top: 30px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #7b77fc;
  display: flex;
  align-self: center;
`;


export const StyledRow = styled(Row)`

display:flex;
justify-content:center;
`