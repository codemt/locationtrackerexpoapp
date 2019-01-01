import React, { Component } from 'react'
import SearchBox from '../components/SearchBox';
import NavBar from '../components/NavBar';
import Maps from '../components/Maps';
 class SearchContainer extends Component {
  render() {
    return (
      <React.Fragment>
      <SearchBox />
      <Maps />
      </React.Fragment>
    )
  }
}

export default SearchContainer