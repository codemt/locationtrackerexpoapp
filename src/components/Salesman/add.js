import React, { Component } from 'react'
import { View , TextInput } from 'react-native'
import { Container, Header, Title,Input, Form , Subtitle ,Button, Left, Content,Text,Item,Card,CardItem, Right, Body, Icon  , Footer , FooterTab} from 'native-base';
 class AddSalesman extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
      
          name: ''
    
    
    };
  }


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
          <Subtitle>Add Sales Person</Subtitle>
        </Body>
        <Right />
        </Header>
        <Content>
        <Card>
            <CardItem header>
              <Text>Add Sales Person</Text>
            </CardItem>
            <CardItem>
              <Body>
              <TextInput
              style={{width:100,height: 100}}
              placeholder="Enter Name"
              onChangeText={(name) => this.setState({name})}
            />
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
         </Card>
            </Content>
      </Container>
    )
  }
}
export default AddSalesman