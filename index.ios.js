/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Niche from './src/Niche';

export default class main extends Component {
  render() {
    return (
        <Niche/>
    );
  }
}

AppRegistry.registerComponent('niche', () => main);
