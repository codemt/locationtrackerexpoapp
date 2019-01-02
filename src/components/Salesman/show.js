import React, { Component } from 'react'
import { View , TextInput } from 'react-native'
import { Container, Header, Title,Input, Form , Subtitle ,Button, Left, Content,Text,Item,Card,CardItem, Right, Body, Icon  , Footer , FooterTab} from 'native-base';
 class ShowSalesman extends Component {
  render() {
    return (
      <Container>
      <Header>
        <Left>
          <Button transparent onPress = { () => this.props.navigation.openDrawer() }>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
        <Title> Zenium Group </Title>
        <Subtitle>All Sales Person</Subtitle>
      </Body>
      <Right />
      </Header>
      <Content>
      <Card>
           
       </Card>
          </Content>
    </Container>
    )
  }
}
export default ShowSalesman