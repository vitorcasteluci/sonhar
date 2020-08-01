import React, { useState,useEffect } from "react";
import Collapse from "react-bootstrap/Collapse";
import ArticleCard from "../ArticleCard";
import { Container, Row, Col } from "react-bootstrap";
import SimpleContainer from "../SimpleContainer";
import axios from "axios";
import { ButtonStyled, ArticleContainerDiv, Title } from './style'
import styled from "styled-components"

function ArticleContainer() {
  const [open, setOpen] = useState(false);
  const [articles, setArticles] = useState([]);

  const requestArticle = () => {
    const url = "https://instituto-sonhar-backend.herokuapp.com/public_contents/";
    axios.get(url).then(res => {
      setArticles(res.data);
    })

  }
//  useEffect()
 

  const handleClick = () => {
    requestArticle()
    console.log(articles)
    setOpen(!open)
  }


  return (
    <>
      <Title>ÚLTIMAS PUBLICAÇÕES</Title>
      {/* <Collapse in={true}> */}
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
      {/* </Collapse> */}
      <SimpleContainer position="center">
        <ButtonStyled
          onClick={handleClick}
          aria-controls="example-collapse-text"
          aria-expanded={true}
          text="Veja mais"
        >Veja mais</ButtonStyled>
      </SimpleContainer>
    </>
  );
}


export default ArticleContainer;
