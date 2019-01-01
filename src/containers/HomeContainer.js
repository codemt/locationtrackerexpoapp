import React, { Component } from 'react'
import NavBar from '../components/NavBar';
import Maps from '../components/Maps';

export default class HomeContainer extends Component {

  constructor(props){

      super(props);

  }
  render() {
    console.log('Home Container Props' , this.props);
    return (
      <React.Fragment>
            <NavBar navigation={this.props.navigation} />
            <Maps />
      </React.Fragment>
    )
  }
}
