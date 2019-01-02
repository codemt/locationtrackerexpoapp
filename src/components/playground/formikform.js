import React, { Component } from 'react'
import { View , TextInput } from 'react-native'
import { Formik } from 'formik';
import { Container, Header, Title,Input, Form , Subtitle ,Button, Left, Content,Text,Item,Card,CardItem, Right, Body, Icon  , Footer , FooterTab} from 'native-base';
 class FormikFormExample extends Component {

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
              <Formik 
                        initialValues={{ firstName: '' }} 
                        onSubmit={values => console.log(values)}>
                {({ handleChange, handleSubmit, values }) => (
                <View>
                        <TextInput
                        style={{
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 1,
                            width: 300,
                            padding: 8,
                            fontSize: 18
                        }}
                        placeholder="Enter Name"
                        onChangeText={handleChange('firstName')}
                        value={values.firstName}
                        />
                        <TextInput
                        style={{
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 1,
                            width: 300,
                            padding: 8,
                            fontSize: 18
                        }}
                        placeholder="Enter Name"
                        onChangeText={handleChange('firstName')}
                        value={values.firstName}
                        />
                        <Button onPress={handleSubmit} title="submit" color="#841584" />
                </View>
                 )}
            </Formik>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text> Copyright @FBSS </Text>
            </CardItem>
         </Card>
            </Content>
      </Container>
    )
  }
}
export default FormikFormExample