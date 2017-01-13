import React, { Component } from 'react';
import { View, Navigator, TouchableOpacity, Text } from 'react-native';

import HomePage from './HomePage';

export default class SecondPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _pressButton() {
    const { navigator } = this.props;
    if (navigator) {
      navigator.pop();
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this._pressButton.bind(this)}>
          <Text>Press to jump back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}