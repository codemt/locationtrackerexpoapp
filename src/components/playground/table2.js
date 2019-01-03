import React, { Component } from "react";
import {View,StyleSheet,TouchableOpacity,ScrollView,Dimensions,AppRegistry} from "react-native";
import { Container, Header, Content, Card, Left, Right,Title, Subtitle, Icon,CardItem,Button, Text, Body } from 'native-base';
import { dataSource } from '../../constants/Sales/people';
var window= Dimensions.get('window');


var obj;
 class TableView extends Component {
    constructor(props) {
        super(props);
        obj = this;
    
      }
    

      render() {

        console.log(dataSource);


        return (
          <ScrollView style={styles.container}>
          <Container>
          <Header>
            <Left>
              <Button transparent onPress = { () => this.props.navigation.openDrawer() }>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
            <Title> Sales </Title>
          </Body>
          <Right />
          </Header>
          <Content>
          <Card>
          <View style={[styles.view,{paddingBottom:20,paddingTop:20}]}>
          <Text style={styles.fontB}> Client Name  </Text>
          <Text style={styles.fontA}> Contact No. </Text>
          <Text style={styles.fontA}> Email </Text>
          <Text style={styles.fontB}> Company </Text>
        </View>
        {dataSource.map(data =>
            <View style={styles.view}>
          <Text style={styles.fontB}> {data.client_name}  </Text>
          <Text style={styles.fontA}> {data.contact_person} </Text>
          <Text style={styles.fontB}>{data.contact_no}</Text>
          <Text style={styles.fontB}>{data.email}</Text>
        </View>

        )}
              
           </Card>
              </Content>
        </Container>
  
    
             
           
                
            </ScrollView>
    
    
    
        );
      }
    }
    
    
    const styles = StyleSheet.create({
    
      container : {
        width:window.width-20,
        backgroundColor:'#fff',
        alignSelf:'center',
        marginTop:10,
        marginBottom:60
        },
        fontA:{
          fontSize:18,
          flex:25
        },
        fontB:{
          fontSize:18,
          flex:25,
          textAlign: 'center'
        },
        view:{
          flex:1,
          flexDirection:'row',
          justifyContent: 'space-around'
        }
    });
    
export default TableView