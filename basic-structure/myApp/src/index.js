

import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';



class IndexComponent extends Component {
  render() {
    console.log('rendering');
    return (
      <View style={{flex: 1}}>
        <Text>Hello World Hello World Hello World</Text>
      </View>
    );
  }
}

module.exports = IndexComponent;






