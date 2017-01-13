import React, { Component } from 'react';
import { View, Navigator, TouchableOpacity, Text, StyleSheet } from 'react-native';

import Article from '../components/Article';

export default class ArticlePage extends Component {
  constructor(props) {
    super(props);
    const { navigator } = this.props;
    this.state = {
      articleId: this.props.articleId
    };
  }

  jumpBack() {
    const { navigator } = this.props;
    if (navigator) {
      navigator.pop();
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.jumpBack.bind(this)} style={styles.backButton}>
            <Text style={{color: 'white', fontSize: 20, fontFamily: 'FontAwesome'}}>&#xf053;</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>文章</Text>
          <View></View>
        </View>
        <Article id={this.state.articleId} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  header: {
    height: 50,
    backgroundColor: '#4BA9ED',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    left: -20,
    fontSize: 20,
    color: 'white',
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});