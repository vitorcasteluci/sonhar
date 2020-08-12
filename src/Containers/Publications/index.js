import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";

class Publications extends React.Component {
  state = {
    imageUrl: "",
    title: "",
    body: "",
    publishedAt: "",
    authorName: "",
    nextId: "",
    previewsId: "",
  };

  apiRequest = () => {
    const { id } = this.props.match.params;
    const url = `https://instituto-sonhar-backend.herokuapp.com/public_contents/${id}`;

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) =>
        // console.log(data)
        this.setState({
          title: data.content.title,
          body: data.content.body,
          imageUrl: data.content.image_url,
          publishedAt: data.content.published_at,
          authorName: data.content.author_name,
          nextId: data.next_id,
          previewsId: data.previews_id,
        })
      );
  };

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.apiRequest();
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.apiRequest();
  }

  render() {
    return (
      <MainContainer>
        <Center>
          <Title>{this.state.title}</Title>
        </Center>
        <Center>
          <img
            style={{ maxWidth: "100%" }}
            src={this.state.imageUrl}
            alt={this.state.title}
          />
        </Center>
        <Center>
          <Text>{this.state.body}</Text>
        </Center>
        <Center>
          <TextPurple>Publicado dia {this.state.publishedAt}</TextPurple>
        </Center>
        <Center>
          <Text>Escrito por: {this.state.authorName}</Text>
        </Center>
        <Center>
          {this.state.previewsId && (
            <Button
              text="< Anterior"
              to={`/publicacoes/${this.state.previewsId}`}
            />
          )}
          {this.state.nextId && (
            <Button text="Próximo >" to={`/publicacoes/${this.state.nextId}`} />
          )}
        </Center>
      </MainContainer>
    );
  }
}

export default withRouter(Publications);

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: Lato;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 1.8px;
  color: #7b77fc;
  opacity: 1;
  margin-bottom: 40px;
  text-transform: uppercase;
`;

const Text = styled.p`
  font-family: Lato;
  font-size: 16px;
  font-weight: regular;
  letter-spacing: 0px;
  color: #332e2e;
  opacity: 1;
  white-space: pre-line;
  max-width: 1000px;
  padding: 40px;
`;

const TextPurple = styled.h3`
  font-family: Lato;
  font-size: 16px;
  font-weight: regular;
  letter-spacing: 0px;
  color: #7b77fc;
  opacity: 1;
`;
