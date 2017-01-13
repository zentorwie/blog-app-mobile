import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import { get as getArticle } from '../store/db';

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      content: '',
    };
  }

  componentDidMount() {
    let article = getArticle(this.props.id);
    this.setState({
      title: article.title,
      author: article.author,
      content: article.content
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{this.state.title}</Text>
        <Text style={styles.author}>{this.state.author}</Text>
        <Text style={styles.content}>{this.state.content}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { padding: 10, backgroundColor: 'white' },
  title: { fontSize: 24, fontWeight: 'bold' },
  author: { color: 'gray' },
  content: { fontSize: 16 },
});