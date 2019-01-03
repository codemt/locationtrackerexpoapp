import React from 'react';
import { StyleSheet , ScrollView } from 'react-native';
import  { createDrawerNavigator ,  createAppContainer , DrawerItems, SafeAreaView  } from 'react-navigation';
import myRoutes from './src/routes/index';
import AddSalesForm from './src/components/Forms/addSales';
import DisplayTasks from './src/components/Tasks/displayTasks';
import ShowSalesman from './src/components/Salesman/show';
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

        screen : AddSalesForm

    },
    Display : {


        screen : ShowSalesman

    },
    Tasks:{

        screen : DisplayTasks

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
