

import React, { Component } from 'react';
import {
  ListView,
  Text,
  StatusBar
} from 'react-native';

class IndexComponent extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['Harry', 'Hermione'])
    };
    setTimeout(()=>{
      this.setState({dataSource: ds.cloneWithRows(['Lando', 'Han'])});
    },3000);
  }
  render() {
    console.log('rendering');
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(item)=> <Text>{item}</Text>}
        renderHeader={ ()=> <Text>My Header</Text>}/>
    );
  }
}

module.exports = IndexComponent;






