import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import ArticleListItem from './ArticleListItem';

export default class App extends Component {
  render() {
    return (
      <View style={styles.cotainer}>
        <View style={styles.header}>
          <Text style={{color: 'white'}}>首页</Text>
        </View>
        <ScrollView style={styles.center}>
          <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
          <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
          <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
          <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
          <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
          <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
          <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
          <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
          <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
          <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
          <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
          <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
          <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
          <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
          <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
          <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
          <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    height: 40,
    backgroundColor: '#4BA9ED',
    padding: 10,
    justifyContent: 'center'
  },
  center: {
  },
  listItem: {
    height: 160,
    borderWidth: 0.5,
  },
});
