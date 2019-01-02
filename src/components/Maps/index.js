import React, { Component } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet , View } from 'react-native';
export default () => (
    <View style={styles.container}>
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
    </View>
 );


 const MapData = {
  
    latitude : 37.78825,
    longitude : -122.4324,
    latitudeDelta : 0.015,
    longitudeDelta : 0.0121


 }

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      paddingTop: -400,
      width: 400,
     // justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });
