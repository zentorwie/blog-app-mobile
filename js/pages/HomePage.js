import React, { Component } from 'react';
import { View, Navigator, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';

import ArticlePage from './ArticlePage';
import ArticleListItem from '../components/ArticleListItem';

import { articleRepo as articles } from '../store/db';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
    console.log(this.state.articles);
    this.jumpToArticle.bind(this);
  }

  componentDidMount() {
    this.setState({
      articles: articles
    });
  }

  jumpToArticle(articleId) {
    return function () {
      const { navigator } = this.props;
      if (navigator) {
        navigator.push({
          name: 'ArticlePage',
          articleId: articleId,
          component: ArticlePage,
        });
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>首页</Text>
        </View>
        <ScrollView>
          {this.state.articles.map(
            x => (
              <TouchableOpacity onPress={this.jumpToArticle(x.id)} key={x.id} style={styles.listItem}>
                <ArticleListItem
                  title={x.title}
                  author={x.author}
                  abstract={x.abstract}
                />
              </TouchableOpacity>
            )
          )}
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
  headerText: {},
  center: {},
  listItem: {
    maxHeight: 160,
    borderWidth: 0.5,
  },
});