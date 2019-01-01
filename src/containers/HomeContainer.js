import React, { Component } from 'react'
import NavBar from '../components/NavBar';
import Maps from '../components/Maps';

export default class HomeContainer extends Component {
  render() {
    return (
      <React.Fragment>
            <NavBar />
            <Maps />
      </React.Fragment>
    )
  }
}
