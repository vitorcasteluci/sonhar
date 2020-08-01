import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { MainTitle } from '../../components/MainTitle';
import { Paragraph } from '../../components/Paragraph';
import { SubTitle } from '../../components/SubTitle';
import Button from '../../components/Button';

class Publications extends React.Component {

  state = {
    imageUrl: "",
    title: "",
    body: "",
    publishedAt: "",
    authorName: "",
    nextId: "",
    previewsId: ""
  }

  apiRequest = () => {

    const { id } = this.props.match.params
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
            previewsId: data.previews_id
          })
        )
  }

  componentDidMount() {
    this.apiRequest();
  }

  render() {
    console.log(this.props.match.params)
    return (
      <MainContainer>
        <Center>
          <MainTitle text={this.state.title} />
        </Center>
        <Center>
          <img src={this.state.imageUrl} alt={this.state.title} />
        </Center>
        <Center>
          <Text>{this.state.body}</Text>
        </Center>
        <Center>
          Publicado dia <SubTitle text={this.state.publishedAt} />
        </Center>
        <Center>
          <Text>{this.state.authorName}</Text>
        </Center>
        <Center>
          {
          this.state.previewsId &&
          <StyledButton text="< Anterior" to={`/publicacoes/${this.state.previewsId}`} />
          }
          {
          this.state.nextId &&
          <StyledButton text="Próximo >" to={`/publicacoes/${this.state.nextId}`} />
          }
        </Center>
      </MainContainer>
    )
  }
}

export default withRouter(Publications);

const MainContainer = styled.div`
display: flex;
align-itens: center;
justify-content: center;
flex-direction: column;
`

const Center = styled.div`
display: flex;
justify-content: center;
`

const Text = styled.p`
font-family: Lato;
font-size: 16px;
font-weight: regular;
letter-spacing: 0px;
color: #332E2E;
opacity: 1;
white-space: pre-line;
`

const StyledButton = styled(Button)`
padding: 20px 60px;
border: red !important;
`