import styled from "styled-components";

import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";

export const PublicationsContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  @media (max-width: 1203px) {
    overflow-x: scroll;
  }
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
  @media (max-width: 760px) {
    margin-left: 60px;
  }
`;

export const StyledRow = styled(Row)`
  @media (min-width: 1203px) {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
