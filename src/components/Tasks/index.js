import React, { Component } from 'react'
import { Container, Header, Content, Form, Left ,Right, Title,Body ,Item, Button ,Input, Label , Picker, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Dropdown } from 'react-native-material-dropdown';
import { TextField } from 'react-native-material-textfield';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
 class Tasks extends Component {

  state = {

      notes : ''

  }
 
  render() {

    console.log(this.props.navigation);
    let { notes } = this.state;

   let salesperson = [{
    value: 'Ramesh Singh',
  }, {
    value: 'Ravish Kazi',
  }, {
    value: 'James Bond',
  }];

  let client = [{

      value :'Fortis Hospitals',
  },{

      value : 'KPMG'
  },{

      value : 'Google'

  },{

      value : 'Microsoft'

  }
]

    return (
        <Container> 
        <Header>
          <Left>
            <Button transparent onPress = { () => Actions.pop() }>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
          <Title> Add Task </Title>
        </Body>
        <Right />
        </Header>
        <Content>
          <Form>
         
            <Dropdown label='Select Sales Person' data={salesperson} />
            <Dropdown label='Select Client ' data={client} />
            <TextField  keyboardType="default" label='Notes' multiline={true}  value={notes} onChangeText={ (notes) => this.setState({ notes }) }/>
            <RaisedTextButton title='Submit' />
          </Form>
        </Content>
      </Container>
    )
  }
}
export default Tasks