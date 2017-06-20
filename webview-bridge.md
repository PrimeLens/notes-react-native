# WebView Bridge

- Originally there was an open source project here [LINK](https://github.com/alinz/react-native-webview-bridge/issues/109) but it has been added to the core since RN 0.39

- Below is example code that makes use of the core WebView Bridge, the message that is sent back and forth is a string so we must be careful to stringify and parse

- I'm using `lodash` in here as well as the `dispatcher` that I talked about in the parent README.md

- I have an assumption that we want JSON back and forth so error checks are built in there for JSON

### RN code

    componentDidMount(){
      // listen to other parts of the app who might want to communicate to the WebView
      // because commonent dismounts/remounts we must unbind before bind
      // unlike in my boilerplates, unbinding requires the pointer to the callback
      dispatcher
      .removeListener('sendWVmessage', this.sendWVmessage) 
      .on('sendWVmessage', this.sendWVmessage);
    }

    // send WebView message
    sendWVmessage(messageStr){
      if (typeof messageStr !== 'string') {
        messageStr = JSON.stringify(messageStr);
      }
      // access the ref
      this.webView.postMessage(messageStr);
    }

    // receive WebView message
    receiveWVmessage(e){
      let message = e.nativeEvent.data;
      try { message = JSON.parse(message); } 
      catch(err){ message = undefined; }
      // console.log('=====> ', message);    
      if (message) {
        // whatever the eventName is, broadcast it out
        if (_.has(message,'eventName')){
          if (_.has(message,'payload')){
            dispatcher.emit(message.eventName, message.payload);
          } else {
            dispatcher.emit(message.eventName);
          }
        }
      }
    }

    render() {
      return (
        <View style={{flex: 1}}>
          <WebView
            bounces={false}
            onMessage={ this.receiveWVmessage.bind(this)}
            ref={(webView)=>this.webView=webView}
            source={{uri: 'https://app.whateverits called.com?env=ios'}}/>
        </View>
      );
    }

### Web App code

    // debugging is tricky because you cannot see the console
    function debug(e){
      document.getElementsByClassName('whatever')[0].innerHTML 
      = typeof e.data + ' ' + e.data;
      //= e.data.eventName
      //+ JSON.stringify(e.data.payload);    
    }



    // for receiving messages
    document.addEventListener('message', (e)=>{
      // debug
      if (false) debug(e);
      
      try {
        let message = JSON.parse(e.data);
        // whatever the eventName is, broadcast it out
        if (_.has(message,'eventName')){
          if (_.has(message,'payload')){
            window.dispatcher.trigger(message.eventName, message.payload);
          } else {
            window.dispatcher.trigger(message.eventName);
          }
        }      
      } catch(err){
        alert('Message sent from React Native is not JSON.');
      }
    });



    // for sending messages
    window.dispatcher.off('forWebView').on('forWebView', (message)=>{
      if (typeof message !== 'object'){
        alert('Attempting to send message to React Native that is not JSON');
      } else {
        if (!_.has(message,'eventName')){
          alert('Attempting to send message to React Native that missing eventName');
        } else {
          // send it in a try catch becuz
          // sometimes we are going to be in debug mode where &env=ios
          // and it will continually kick errors otherwise
          try {
            window.postMessage(JSON.stringify(message)); 
          } catch(err){
            console.warn('The following warning might be because you are in debug mode and WebView doesn\'t exist.\n', err);
          }
        }
      }
    });

    // Test it
    // setTimeout(()=>{
    //   window.dispatcher.trigger('forWebView',{eventName:'openIntercom', payload: {userid:12345}});
    // }, 5000);








