import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default class ArticleListItem extends Component {
  render() {
    return (
      <View style={[this.props.style, {padding: 5}]}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.author}>{this.props.author}</Text>
        <Text style={styles.abstract}>{this.props.abstract}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },

  author: {
    fontSize: 12,
    color: '#4d4d4d',
  },

  date: {
    fontSize: 12,
    color: '#4d4d4d',
  },

  abstract: {
    fontSize: 14,
  }
});
