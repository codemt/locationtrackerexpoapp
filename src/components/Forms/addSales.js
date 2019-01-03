import React, { Component } from 'react'
import { TextField } from 'react-native-material-textfield';
import { Container, Header, Title,Input, Form , Subtitle ,Button, Left, Content,Text,Item,Card,CardItem, Right, Body, Icon  , Footer , FooterTab} from 'native-base';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
class AddSalesForm extends Component {

    state = {

        name :'',
        phone: '',
        email : '',
        password:'',
        address:'',
        branch:''

      };
  render() {
    let { phone } = this.state.phone;
    let { name } = this.state.name;
    let { email} = this.state.email;
    let { password } = this.state.password;
    let { address } = this.state.address;
    let { branch } = this.state.branch
    return (
        <Container>
        <Header>
          <Left>
            <Button transparent onPress = { () => this.props.navigation.openDrawer() }>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
          <Title> Add Sales </Title>
        </Body>
        <Right />
        </Header>
        <Content>
        <Card>
        <TextField  keyboardType="default" label='Enter Name' value={name} onChangeText={ (name) => this.setState({ name }) }/>
        <TextField keyboardType="number-pad" label='Enter Phone Number' value={phone} onChangeText={ (phone) => this.setState({ phone }) }/>
        <TextField   keyboardType="email-address" label='Enter Email Address' value={email} onChangeText={ (email) => this.setState({ email }) }/>
        <TextField   keyboardType="default" label='Enter Password' secureTextEntry={true} value={password} onChangeText={ (password) => this.setState({ password }) }/>
        <TextField   keyboardType="default" label='Enter Address' value={address} onChangeText={ (address) => this.setState({ address }) }/>
        <TextField   keyboardType="default" label='Enter Branch' value={branch} onChangeText={ (branch) => this.setState({ branch }) }/>
        <RaisedTextButton title='Submit' />
         </Card>
            </Content>
      </Container>
    )
  }
}
export default  AddSalesForm