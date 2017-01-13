import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, Navigator } from 'react-native';
import HomePage from './pages/HomePage';

export default class App extends Component {
  render() {
    // return (
    // <View style={styles.cotainer}>
    //   <View style={styles.header}>
    //     <Text style={{color: 'white'}}>首页</Text>
    //   </View>
    //   <ScrollView style={styles.center}>
    //     <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fck"/>
    //     <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
    //     <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
    //     <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
    //     <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
    //     <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
    //     <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
    //     <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
    //     <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
    //     <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
    //     <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
    //     <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
    //     <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
    //     <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
    //     <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
    //     <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
    //     <ArticleListItem style={styles.listItem} title="haha" author="xixi" date="2016-12-12" abstract="fuck"/>
    //   </ScrollView>
    // </View>
    // );
    let defaultName = 'HomePage';
    let defaultComponent = HomePage;
    return (
      <Navigator
        initialRoute={{ name: defaultName, component: defaultComponent }}
        configureScene={(route) => {
          return Navigator.SceneConfigs.HorizontalSwipeJump;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }}
      />
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
  center: {},
  listItem: {
    height: 160,
    borderWidth: 0.5,
  },
});
