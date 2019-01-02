import React, { Component } from 'react'
import { Dimensions } from 'react-native';
import  { dataSource }  from '../../constants/Sales/people';
import { Container, Header, Title,Input, Form , Subtitle ,Button, Left, Content,Text,Item,Card,CardItem, Right, Body, Icon  , Footer , FooterTab} from 'native-base';
import {
    Platform,
    StyleSheet,
    View,
  } from 'react-native'
  import Table from 'react-native-simple-table'
  const columns = [
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      width: 200
    },
    {
      title: 'Name',
      dataIndex: 'name',
      width: 200
    },
    {
      title: 'Age',
      dataIndex: 'age'
    },
    {
      title: 'Sex',
      dataIndex: 'sex'
    },
  ];

  var window = Dimensions.get('window');
  
 class DataTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['ClientName', 'Contact', 'Email', 'Company'],
      tableData: [
        ['Ramesh Singh', '9769067349', 'ram@gmail.com', 'Google'],
        ['Ramanath Verma', '9769067349', 'vk@gmail.com', 'Microsoft'],
        ['Ravish Singh', '9769067349', 'dk@gmail.com', 'Yahoo'],
        ['Sunil Shah', '9769067349', 'sunil@gmail.com', 'Zoho']
      ]
    }
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
        <View style={styles.container}>
        <Table height={400} width={400} columnWidth={100} columns={columns} dataSource={dataSource} />
      </View>
            
         </Card>
            </Content>
      </Container>

     
       
      )
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});
export default DataTable