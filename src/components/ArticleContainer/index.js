import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import ArticleCard from "../ArticleCard";
import { Container, Row, Col } from "react-bootstrap";
import SimpleContainer from "../SimpleContainer";
import axios from "axios";
import { ButtonStyled, ArticleContainerDiv } from './style'

function ArticleContainer() {
  const [open, setOpen] = useState(false);
  const [articles, setArticles] = useState([]);

  const requestArticle = () => {
    const url = "https://instituto-sonhar-backend.herokuapp.com/public_contents/";
    axios.get(url).then(res => {
      setArticles(res.data);
    })

  }

  const handleClick = () => {
    requestArticle()
    console.log(articles)
    setOpen(!open)
  }


  return (
    <>
      <Collapse in={open}>
        <ArticleContainerDiv>
          <Container>
            <Row>
              {articles.map((article, key) => {
                return (
                  <Col sm={3}>
                    <ArticleCard
                      image={article.image_url}
                      title={article.title}
                      content={article.body}
                      key={key}
                    ></ArticleCard>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </ArticleContainerDiv>
      </Collapse>
      <SimpleContainer position="center">
        <ButtonStyled
          onClick={handleClick}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          text="Veja mais"
        > Veja mais</ButtonStyled>
      </SimpleContainer>
    </>
  );
}


export default ArticleContainer;
