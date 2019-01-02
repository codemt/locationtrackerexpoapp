// import React, { Component } from 'react'
// import { View , TextInput , StyleSheet } from 'react-native'
// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
// import { Container, Header, Title,Input, Form , Subtitle ,Button, Left, Content,Text,Item,Card,CardItem, Right, Body, Icon  , Footer , FooterTab} from 'native-base';
//  class ShowSalesman extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       tableHead: ['ClientName', 'Contact', 'Email', 'Company'],
//       tableData: [
//         ['Ramesh Singh', '9769067349', 'ram@gmail.com', 'Google'],
//         ['Ramanath Verma', '9769067349', 'vk@gmail.com', 'Microsoft'],
//         ['Ravish Singh', '9769067349', 'dk@gmail.com', 'Yahoo'],
//         ['Sunil Shah', '9769067349', 'sunil@gmail.com', 'Zoho']
//       ]
//     }
//   }

//   render() {
  
//       const state = this.state;
//       return (
//         <Container>
//         <Header>
//           <Left>
//             <Button transparent onPress = { () => this.props.navigation.openDrawer() }>
//               <Icon name='menu' />
//             </Button>
//           </Left>
//           <Body>
//           <Title> Zenium Group </Title>
//           <Subtitle>Add Sales Person</Subtitle>
//         </Body>
//         <Right />
//         </Header>
//         <Content>
//         <Card>
//         <View style={styles.container}>
//         <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
//           <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
//           <Rows data={state.tableData} textStyle={styles.text}/>
//         </Table>
//        </View>
            
//          </Card>
//             </Content>
//       </Container>
       
//       )
//   }
// }
// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
//   head: { height: 40, backgroundColor: '#f1f8ff' },
//   text: { margin: 6 }
// });
// export default ShowSalesman