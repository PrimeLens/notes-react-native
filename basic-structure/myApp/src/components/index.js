

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StatusBar,
  StyleSheet,
  Image
} from 'react-native';

import furyRoadPic from './furyroad.jpg';
import openingScene from './openscene.jpg';


console.log('FIRED');
class IndexComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { phrase : '' }; 
    console.log('FIRED');
  }
  handlePress(arg){
    console.log('Tapped on ',arg);
    this.setState({phrase: arg});
  }
  render() {
    console.log('rendering');
    return (
      <View style={{flex: 1, backgroundColor: '#F5FCFF'}}>
        <StatusBar hidden={true}/>
        <Text style={styles.myText} onPress={()=>this.handlePress('Hello')}>Hello</Text>
        <Text style={styles.myText}>{this.state.phrase}</Text>
        <View style={styles.container}>
          <Text style={styles.myText} onPress={()=>this.handlePress('John Wick')}>John Wick</Text>
          <Text style={[styles.myText, styles.selectedText]}
                onPress={()=>this.handlePress('Han Solo')}>Han Solo</Text>
          <Text style={styles.myText} onPress={()=>this.handlePress('Mad Max')}>Mad Max</Text>
        </View>
        <TouchableHighlight
          onPress={()=>this.handlePress('Eren Yeager')}
          underlayColor="orange">
           <Text style={styles.myText}>Eren Yeager</Text>
        </TouchableHighlight>
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
    fontSize: 14
  }
})

module.exports = IndexComponent;






