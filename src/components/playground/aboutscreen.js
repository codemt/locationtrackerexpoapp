import React, { Component } from 'react'
import { View , Text } from 'react-native';
import HomeContainer from '../../containers/HomeContainer';
export default class AboutScreen extends Component {

  constructor(props){

    super(props);

  }

  render() {
    return (
        <View>
        <HomeContainer navigation={this.props.navigation} />
        </View>
    )
  }
}
