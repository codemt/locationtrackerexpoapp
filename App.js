import React from 'react';
import { StyleSheet , ScrollView } from 'react-native';
import NavBar from './src/components/NavBar';
import  { createDrawerNavigator ,  createAppContainer , DrawerItems, SafeAreaView  } from 'react-navigation';
import { Container, Header, Item, Content, Input, Icon, Button, Text } from 'native-base'
import HomeScreen from './src/components/playground/homescreen';
import AboutScreen from './src/components/playground/aboutscreen';
import HomeContainer from './src/containers/HomeContainer';
import HomePage from './src/components/playground/homepage'
import SearchBox from './src/components/SearchBox';
import SearchContainer from './src/containers/SearchContainer';
import AddSalesman from './src/components/Salesman/add';
import myRoutes from './src/routes/index';
import { Actions , Router , Scene } from 'react-native-router-flux';
import FormikFormExample from './src/components/playground/formikform';
import FormikReactNative from './src/components/playground/formikreactnative';
import ShowSalesman from './src/components/Salesman/show';
import DataTable from './src/components/playground/datatable';
import TableView from './src/components/playground/table2';
export default class App extends React.Component {
  render() {
    return (
      <MyApp />
    );
  }
}


const drawer = createDrawerNavigator({

    Home : {

        screen : myRoutes,

    },
    Add : {

        screen : FormikReactNative

    },
    Display : {


        screen : TableView

    }
    
   



},{

  initialRouteName:'Home',
  drawerPosition:'left',
  drawerWidth: 250,
  //contentComponent : props => <ScrollView style={{backgroundColor:'#fffff'}}><DrawerItems {...props} /><Text>Search</Text></ScrollView> ,
  //contentComponent :SideBar,
  drawerOpenRoute : 'DrawerOpen',
  drawerCloseRoute : 'DrawerClose',
  drawerToggleRoute:'DrawerToggle',
  backBehavior: 'initialRoute',
  //drawerBackgroundColor: 'black',


})

const MyApp = createAppContainer(drawer);


 const SideBar = (props) => {

  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>





}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerHeader : {


    height:10,
    backgroundColor:'black'

  },
  drawerItems : {


  backgroundColor:'black',
  color : 'white'

  },


});
