import React, { useState, useEffect } from "react";
import Collapse from "react-bootstrap/Collapse";
import ArticleCard from "../ArticleCard";
import { Container, Col } from "react-bootstrap";
import SimpleContainer from "../SimpleContainer";
import axios from "axios";
import {
  PublicationsContainer,
  ArticleContainerDiv,
  Title,
  StyledRow,
} from "./style";
import ButtonStyled from "../Button";

const url = "https://instituto-sonhar-backend.herokuapp.com/public_contents/";
const fetchContent = () => axios.get(url);

const ArticleContainer = ({ limit }) => {
  const [open, setOpen] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchContent().then((res) => {
      const data = limit ? res.data.splice(0, limit) : res.data;

      setArticles(data);
      setOpen(true);
    });
  }, [limit]);

  return (
    <PublicationsContainer>
      <Title>ÚLTIMAS PUBLICAÇÕES</Title>
      <Collapse in={open}>
        <ArticleContainerDiv>
          <Container>
            <StyledRow>
              {articles.map((article, key) => {
                return (
                  <Col sm={3}>
                    <ArticleCard
                      image={article.image_url}
                      title={article.title}
                      content={article.body}
                      id={article.id}
                      key={key}
                    ></ArticleCard>
                  </Col>
                );
              })}
            </StyledRow>
          </Container>
        </ArticleContainerDiv>
      </Collapse>
      {limit && (
        <SimpleContainer position="center">
          <ButtonStyled to="/fique-por-dentro" text="Veja mais">
            Veja mais
          </ButtonStyled>
        </SimpleContainer>
      )}
    </PublicationsContainer>
  );
};

export default ArticleContainer;
