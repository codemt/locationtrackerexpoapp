import React, { Component } from 'react'
//import StyleSheet from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
 class SearchBox extends Component {
  render() {
    return (
        <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    )
  }
}

// const styles = StyleSheet.create({

//     container: {
//         marginTop:100,
//         flex: 1,
//         flexDirection: 'row',
//         alignContent: 'center',
//     },
  
  
//   });
export default SearchBox;