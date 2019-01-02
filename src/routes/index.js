import React, { Component } from 'react'
import { Actions , Router , Scene } from 'react-native-router-flux';
import HomePage from '../components/playground/homepage';
import AddSalesman from '../components/Salesman/add';
import Tasks from '../components/Tasks';
 class MyRoutes extends Component {
  render() {
    return (
        <Router navigationBarStyle={{ backgroundColor: 'red'}} navBarButtonColor="white">
        <Scene key="root">
          <Scene key="homepage" component={HomePage} title="Home Page" hideNavBar={true} initial navigation={this.props.navigation} />
          <Scene key="addTask" component={Tasks} hideNavBar={true} title="Add Task" navigation={this.props.navigation}  />
        </Scene>  
        </Router>
    )
  }
}
export default MyRoutes;