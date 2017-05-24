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
import Niche from './Niche';

export default class niche extends Component {
  render() {
    return (
      <Niche/>
    );
  }
}

AppRegistry.registerComponent('niche', () => niche);
