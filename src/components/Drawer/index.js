import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import HomeContainer from '../../containers/HomeContainer';

const HomeDrawer = DrawerNavigator({
        First : {

              path: '/',
              screen : HomeContainer,
        },



    },
    {
          initialRouteName : 'First',
          drawerPosition : 'left'

    }

);
export default HomeDrawer;