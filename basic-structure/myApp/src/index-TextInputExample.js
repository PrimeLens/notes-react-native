

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

class IndexComponent extends Component {
  constructor() {
    super();
    this.state = { myString: 'the starting string'}
  }
  render() {
    console.log('rendering');
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <TextInput 
          style={{margin: 5, height: 50, borderWidth: 1}}
          ref={ref => this.textInputRef = ref}
          placeholder="enter something"
          onChangeText={(s) => this.setState({myString:s})}/>
        <Text>this.state = {this.state.myString}</Text>
        <Text
          style={{margin: 5, borderWidth: 1, padding:10, alignSelf: 'flex-start'}}
          onPress={
            ()=>{
              this.setState({myString: ''});
              this.textInputRef.clear();
            }
          }>Clear</Text>
      </View>
    );
  }
}

module.exports = IndexComponent;






