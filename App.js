import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './src/components/NavBar';

export default class App extends React.Component {
  render() {
    return (
      <NavBar style={styles} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
