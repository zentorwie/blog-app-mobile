import React, { Component } from 'react';
import { View, Navigator, TouchableOpacity, Text } from 'react-native';

import ArticlePage from './ArticlePage';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _pressButton() {
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name: 'Second',
        component: ArticlePage,
      });
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this._pressButton.bind(this)}>
          <Text>Press to jump</Text>
        </TouchableOpacity>
      </View>
    );
  }
}