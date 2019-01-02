import React, { Component } from 'react'
import NavBar from '../components/NavBar';
import { View , StyleSheet } from 'react-native';
import Maps from '../components/Maps';
import SearchButton from '../components/Search';
import Footer from '../components/Footer';
export default class HomeContainer extends Component {

  constructor(props){

      super(props);

  }
  render() {
    console.log('Home Container Props' , this.props);
    return (
      <React.Fragment>
            <NavBar navigation={this.props.navigation} />

            <View style={styles.homecontainer}>

             <SearchButton />
              <Maps />
            
            </View>
          
           {/* <Footer />*/}
      </React.Fragment>
    )
  }
}
const styles = StyleSheet.create({


      homecontainer :{

            flex:1,
            flexDirection:'column',
            justifyContent : 'space-between'



      }

})