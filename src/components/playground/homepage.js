import React, { Component } from 'react'
import { View , StyleSheet , Dimensions } from 'react-native'
import { Container, Header, Title,Input, Button, Left, Content,Text,Item,Card,CardItem, Right, Body, Icon  , Footer , FooterTab} from 'native-base';
import Maps from '../Maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {Actions} from "react-native-router-flux";
var window= Dimensions.get('window');

 class HomePage extends Component {

        constructor(props){

                super(props);


        }

    navigate = (e) =>{

            e.preventDefault();
            console.log('clicked on tasks');
            Actions.pop('addTask');

    }
  render() {
      console.log('Homepage Props', this.props);
    return (
        <Container>
        <Header>
          <Left>
            <Button transparent onPress = { () => this.props.navigation.openDrawer() }>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Zenium Group</Title>
          </Body>
          <Right>
          <Button transparent onPress={ ()=>Actions.addTask() }>
              <Text> Tasks </Text>
          </Button>
          </Right>
        </Header>
        <Content>
            <Card searchBar rounded>
            <CardItem>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
            </CardItem>
         </Card>
            <Card>
                <CardItem style={styles.container}>
                        <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        region={{
                        latitude: MapData.latitude,
                        longitude: MapData.longitude,
                        latitudeDelta: MapData.latitudeDelta,
                        longitudeDelta: MapData.longitudeDelta,
                        }}
                        >
                    </MapView>
                </CardItem>
            </Card>
            </Content>
      </Container>
    )
  }
}

const MapData = {
  
    latitude : 37.78825,
    longitude : -122.4324,
    latitudeDelta : 0.015,
    longitudeDelta : 0.0121


 }

 const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: window.height,
        //  marginTop: -500,
        width: window.width,
       // flex:1,
    //     justifyContent: 'flex-start',
    //     alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },



 })

export default HomePage;