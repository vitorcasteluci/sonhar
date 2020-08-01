import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { MainTitle } from '../../components/MainTitle';
import { Paragraph } from '../../components/Paragraph';
import { SubTitle } from '../../components/SubTitle';

class Publications extends React.Component {

  state = {
    imageUrl: "",
    title: "",
    body: "",
    publishedAt: "",
    authorName: ""
  }

  apiRequest = () => {

    const publishId = this.props.match.params.id

    const url = `https://instituto-sonhar-backend.herokuapp.com/public_contents/${1}`;

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
            authorName: data.content.author_name 
          })
        )
  }

  componentDidMount() {
    this.apiRequest();
  }

  render() {
    console.log(this.props.match)
    return (
      <MainContainer>
        <ContainerTitle>
          <MainTitle text={this.state.title} />
        </ContainerTitle>
        <CointainerImg>
          <img src={this.state.imageUrl} alt={this.state.title} />
        </CointainerImg>
        <CointainerParagraph>
          <Paragraph text={this.state.body} />
        </CointainerParagraph>
        <CointainerSubTitle>
          <SubTitle text={this.state.publishedAt} />
        </CointainerSubTitle>
        <CointainerText>
          <Text>{this.state.authorName}kkk</Text>
        </CointainerText>
      </MainContainer>
    )
  }
}

export default withRouter(Publications);

const MainContainer = styled.div`

`

const Text = styled.p`

`

const ContainerTitle = styled.div`

`

const CointainerImg = styled.div`

`

const CointainerParagraph = styled.div`

`

const CointainerSubTitle = styled.div`

`

const CointainerText = styled.div`

`