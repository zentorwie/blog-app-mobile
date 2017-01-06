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
import Playground from './Playground';

export default class Zblog extends Component {
  render() {
    return (
      <Playground />
    )
  }
}

AppRegistry.registerComponent('Zblog', () => Zblog);
