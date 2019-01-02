import React, { Component } from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
 class FooterContent extends Component {
  render() {
    return (
      <React.Fragment>
        <Footer>
        <FooterTab>
            <Button full>
            <Text>Footer</Text>
            </Button>
        </FooterTab>
        </Footer>
      </React.Fragment>
    )
  }
}
export default FooterContent;