import React, { Component } from 'react';
import { StyleSheet,Image, Text, View } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Popular'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Popular'}
            title="Popular"
            selectedTitleStyle={{color: 'red'}}
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]} source={require('./res/images/ic_polular.png')} />}
            // badgeText="1"
            onPress={() => this.setState({ selectedTab: 'Popular' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Trend'}
            title="Trend"
            selectedTitleStyle={{color: 'red'}}
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]} source={require('./res/images/ic_trending.png')} />}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'Trend' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'Favorite'}
            title="Favorite"
            selectedTitleStyle={{color: 'red'}}
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]} source={require('./res/images/ic_trending.png')} />}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'Favorite' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'My'}
            title="My"
            selectedTitleStyle={{color: 'red'}}
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]} source={require('./res/images/ic_trending.png')} />}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'My' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  page1: {
    flex: 1,
    backgroundColor: 'blue'
  },
  page2: {
    flex:1,
    backgroundColor: 'yellow'
  },
  image: {
    height:22,
    width: 22
  }
});
