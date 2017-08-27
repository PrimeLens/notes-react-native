

import React, { Component } from 'react';
import {
  View,
  Text,
  AsyncStorage
} from 'react-native';


var myData = {
  hello : 'hello fred',
  goodbye : 'goodbye johnny',
  numbers : [1,5,7,33,2],
  more : {
    options : { alpha: true, beta: 66, addres: 'not here'},
    list : [
      {pos:0, designation: 45},
      {pos:1, designation: 846},
      {pos:2, designation: 923423},
      {pos:3, designation: 101}
    ]
  }
}



class IndexComponent extends Component {
  componentDidMount(){
    // console.log('=> saving');
    // this.saveData();
    console.log('=> loading');
    this.loadData();
  }
  saveData(){
    // this works globally so we want to have very specific key names
    AsyncStorage.setItem(
      '@ColorListStore:Colors',   // key
      JSON.stringify(myData)      // takes a string
    );
  }
  loadData(){
    // this works globally so we want to have very specific key names
    AsyncStorage.getItem(
      '@ColorListStore:Colors',   // key
      (err, data)=>{                       // takesa callback
        if (err){
          console.log('error ', err);
        } else {
          var newData = JSON.parse(data);
          console.log(newData);
        }
      }
    );
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Hello World Hello World Hello World</Text>
      </View>
    );
  }
}

module.exports = IndexComponent;






