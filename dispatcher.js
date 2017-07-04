
// Create an dispatcher instance
// import Events from 'events';
// var dispatcher = new Events.EventEmitter();

import EventEmitter from 'EventEmitter';
var dispatcher = new EventEmitter();

// example use
/*

  import dispatcher from './dispatcher';

  // send a payload if needed
  dispatcher.emit('myButtonClicked', payload);

  // its good practice to unbind before binding as components sometimes mount/dismount
  // with node Events the pointer to the callback must also be included to unbind
  dispatcher.removeListener('myButtonClicked', handleButtonClick);
  dispatcher.addListener('myButtonClicked', handleButtonClick);

  // calback does something and receives a payload
  function handleButtonClick(payload){
    // do something
  }

*/

module.exports = dispatcher;


