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
    const { navigator } = this.props;
    return function () {
      if (navigator) {
        navigator.push({
          name: 'ArticlePage',
          component: ArticlePage,
          params: {
            articleId: articleId
          }
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
        <View style={{backgroundColor: '#dfdfdf', padding: 2, flex: 1}}>
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
    height: 50,
    backgroundColor: '#4BA9ED',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: 'white',
    fontSize: 20
  },
  center: {},
  listItem: {
    maxHeight: 160,
    margin: 2,
    backgroundColor: 'white'
  },
});