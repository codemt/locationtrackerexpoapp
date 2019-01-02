import React, { Component } from "react";
import {View,StyleSheet,TouchableOpacity,ScrollView,Dimensions,AppRegistry} from "react-native";
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
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
                <View style={[styles.view,{paddingBottom:20,paddingTop:20}]}>
                  <Text style={styles.fontB}> Client Name  </Text>
                  <Text style={styles.fontA}> Contact No. </Text>
                  <Text style={styles.fontA}> Email </Text>
                  <Text style={styles.fontB}> Company </Text>
                </View>
                {dataSource.map(data =>
                    <View style={styles.view}>
                  <Text style={styles.fontB}> {data.name}  </Text>
                  <Text style={styles.fontA}> {data.mobile} </Text>
                  <Text style={styles.fontB}>{data.age}</Text>
                  <Text style={styles.fontB}>{data.sex}</Text>
                </View>

                )}
                
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