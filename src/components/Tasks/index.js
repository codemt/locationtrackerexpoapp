import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Label , Picker } from Tasks;
 class Tasks extends Component {
  render() {
    return (
        <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Enter Task Name </Label>
              <Input />
            </Item>
            <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              placeholder="Select your SIM"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Item>

          </Form>
        </Content>
      </Container>
    )
  }
}
export default Tasks