import React, { Component } from 'react'
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
 export default class NavBar extends Component {
  render() {
    return (
      <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Zenith Group</Title>
        </Body>
        <Right />
      </Header>
    </Container>
    )
  }
}
