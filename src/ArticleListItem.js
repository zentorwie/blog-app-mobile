import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default class ArticleListItem extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <Text>{this.props.title}</Text>
        <Text>{this.props.author}</Text>
        <Text>{this.props.date}</Text>
        <Text>{this.props.abstract}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
