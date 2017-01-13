import React from 'react';
import {Component, StyleSheet, ScrollView} from 'react-native';

export default class Article extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Title</Text>
        <Text>Author</Text>
        <Text>Date</Text>
        <Text>Content</Text>
      </ScrollView>
    );
  }
}

StyleSheet.create({
  container: {
    
  },
});