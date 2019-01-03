import React, { Component } from "react";
import {View,StyleSheet,TouchableOpacity,ScrollView,Dimensions,AppRegistry} from "react-native";
import { Container, Header, Content, Card, Left, Right,Title, Subtitle, Icon,CardItem,Button, Text, Body } from 'native-base';
import { dataSource } from '../../constants/Tasks/tasks';
var window= Dimensions.get('window');


var obj;
 class DisplayTasks extends Component {
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
            <Title> Tasks </Title>
          </Body>
          <Right />
          </Header>
          <Content>
          <Card>
          <View style={[styles.view,{paddingBottom:20,paddingTop:20}]}>
          <Text style={styles.fontB}> Salesperson Name  </Text>
          <Text style={styles.fontA}> Client Name </Text>
          <Text style={styles.fontA}> Assignment Date </Text>
          <Text style={styles.fontB}> Note </Text>
        </View>
        {dataSource.map(data => 
            <View style={styles.view}>
          <Text style={styles.fontB}> {data.sales_person_name}  </Text>
          <Text style={styles.fontA}> {data.client_name} </Text>
          <Text style={styles.fontB}>{data.assignment_date}</Text>
          <Text style={styles.fontB}>{data.Note}</Text>
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
    
export default DisplayTasks