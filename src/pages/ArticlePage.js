import React, { Component } from 'react';
import { View, Navigator, TouchableOpacity, Text } from 'react-native';


export default class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  jumpBack() {
    const { navigator } = this.props;
    if (navigator) {
      navigator.pop();
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.jumpBack.bind(this)}>
          <Text style={{fontSize: 20, fontFamily: 'FontAwesome'}}>&#xf053;</Text>
        </TouchableOpacity>
      </View>
    );
  }
}