

import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image
} from 'react-native';

import furyRoadPic from './furyroad.jpg';
import openingScene from './openscene.jpg';



class IndexComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {}; 
  }

  render() {
    console.log('rendering');
    return (
      <View style={{flex: 1, backgroundColor: '#F5FCFF'}}>
        <StatusBar hidden={true}/>
        <Text>Hello</Text>
        <View style={styles.container}>
          <Text style={styles.myText}>John Wick</Text>
          <Text style={[styles.myText, styles.selectedText]}>Han Solo</Text>
          <Text style={styles.myText}>Mad Max</Text>
        </View>
        <Image source={furyRoadPic}/>
        <Image source={openingScene} style={styles.lowerRight}>
          <Text style={styles.caption}>Opening Scene</Text>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDD',
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-around'
    // justifyContent: 'flex-start' // is left ,this is the default
    // justifyContent: 'flex-end' // is right
    // justifyContent: 'space-between' // will distribute
    // justifyContent: 'space-around' // will distribute
  },
  myText: {
    fontSize: 22,
    padding: 10,
    margin: 5,
    borderWidth: StyleSheet.hairlineWidth,
    color: 'black'
  },
  selectedText: {
    backgroundColor: 'yellow',
    color: 'blue',
    fontWeight: 'bold'
  },
  lowerRight: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  caption: {
    backgroundColor: 'rgba(256,256,256,.35)',
    fontSize: 12
  }
})

module.exports = IndexComponent;






