import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Button from "../Button";
import ArticleCard from "../ArticleCard";
import anxiety from "../../assets/anxiety.png";
import { Container, Row, Col } from "react-bootstrap";
import SimpleContainer from "../SimpleContainer";
import axios from "axios";

function ArticleContainer() {
  const [open, setOpen] = useState(false);
  const [articles, setArticles] = useState([]);

  const requestArticle = () => {
    const url = "https://instituto-sonhar-backend.herokuapp.com/public_contents/";
    axios.get(url).then(res => {
      setArticles(res);
    })
  }

  requestArticle();

  return (
    <>
      <Collapse in={open}>
        <div>
          <Container>
            <Row>
              {articles.map((article, key) => {
                return (
                  <Col sm={3}>
                    <ArticleCard
                      image={anxiety}
                      title={article.title}
                      content={article.content}
                      key={key}
                    ></ArticleCard>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </Collapse>
      <SimpleContainer position="center">
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          variant="outline-primary"
          text="Veja mais"
        />
      </SimpleContainer>
    </>
  );
}

export default ArticleContainer;
