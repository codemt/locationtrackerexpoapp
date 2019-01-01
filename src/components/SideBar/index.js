import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base'
import { DrawerItems } from 'react-navigation'
export const SideBar = (props) => {


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
  <Content>
      <DrawerItems {...props} />

  </Content>
</Container>





}