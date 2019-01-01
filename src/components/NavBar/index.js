import React, { Component } from 'react'
import { Container, Header, Title, Button, Left, Text, Right, Body, Icon } from 'native-base';
 export default class NavBar extends Component {


  constructor(props){

      super(props)

  }
  render() {
    console.log(this.props);
    return (
      <Container>
      <Header>
        <Left>
          <Button transparent onPress = { () => this.props.navigation.openDrawer() }>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Zenith Group</Title>
        </Body>
        <Right>
        <Button transparent>
            <Text> Tasks </Text>
        </Button>
        </Right>
      </Header>
    </Container>
    )
  }
}
