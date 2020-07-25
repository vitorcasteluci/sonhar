import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import ArticleCard from "../ArticleCard";
import anxiety from "../../assets/anxiety.png";
import { Container, Row, Col } from "react-bootstrap";
import { ButtonStyled, ButtonContainer } from "./style";

function ArticleContainer() {
  const [open, setOpen] = useState(false);
  const [articles, setArticles] = useState([
    {
      title: "ANSIEDADE",
      content:
        "A ansiedade é uma emoção muito importante na vida do ser humano. É através dessa emoção que podemos imaginar algo que irá...",
    },
    {
      title: "ANSIEDADE",
      content:
        "A ansiedade é uma emoção muito importante na vida do ser humano. É através dessa emoção que podemos imaginar algo que irá...",
    },
    {
      title: "ANSIEDADE",
      content:
        "A ansiedade é uma emoção muito importante na vida do ser humano. É através dessa emoção que podemos imaginar algo que irá...",
    },
    {
      title: "ANSIEDADE",
      content:
        "A ansiedade é uma emoção muito importante na vida do ser humano. É através dessa emoção que podemos imaginar algo que irá...",
    },
  ]);

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
      <ButtonContainer>
        <ButtonStyled
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          variant="outline-primary"
        >
          Veja mais
        </ButtonStyled>
      </ButtonContainer>
    </>
  );
}

export default ArticleContainer;
