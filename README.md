# Intro Notes

- I will use RN as shorthand for React Native
- As of 2/5/2017 a new version 2.3 of Android Studio is being released. RN is currently set up for 2.2 and has not had time to adjust. Android Studio 2.2 was released 9/2016
- RN components contain a bridge which connects to Objective C (iOS) and Java (android). RN talks to them asynchronously because the native components are not single threaded so.

# iOS

### iOS Dependencies

- xcode
- apple developer account
- homebrew
- node js
- watchman, RN uses this to watch source files for changes, `brew install watchman`
- react native cli, install using `sudo npm install -g react-native-cli`
- check installations by using 
  - `node --version`
  - `watchman --version`
  - `react-native --version`

### iOS Setting up a new app

    $ react-native init myApp

- inside myApp's folder doing `react-native --version` will provide extra info
- project folder structure has `\ios` and `\android` but most of your work will be outside of these at the root level
- at the root level will each entry point `index.android.js` and `index.ios.js` and _these will contain identical code_

### iOS Two ways to run app

_Important:  Xcode freaks out and errors if any parent folder to the project has a name with a space in it!!_

1. right click on `/ios/myApp.xcodeproj` and open it with xcode

2. run following command in terminal from the root of myApp project folder

    $ react-native run-ios

- note the react packager terminal window which manages your react bundle
- `command-shift-h` in the simulator takes you back to the home screen
- `command-r` in the simulator to reload js
- `ctrl-c` to break out of react packager terminal so you can quit
- `command-d` in the simulator to get **Debug Menu**
  - **Enable Live Reload** uses watchman to watch source js for changes and reload
  - **Debug JS remotely** opens up browser where console.logs can be monitored


# Android

### Android Dependencies

- Java JDK 8
  - click JDK link on [https://facebook.github.io/react-native/docs/getting-started.html](https://facebook.github.io/react-native/docs/getting-started.html)<br/>
  select license agreement and click the osx for download
- Android Studio
  - click And.Studio link on same page as above (this gives access to SDK manager and AVD manager)
- node js
- watchman
- react native cli
- check installations by using 
  - `javac -version`
  - `node --version`
  - `watchman --version`
  - `react-native --version`

### Installing the Android Studio

- on 2nd page after the icons select Custom for Install Type, check all in SDK components setup, then click through to Finish
- when you have the "Welcome to Android Studio" click Configure bottom right corner as we need to select the SDK manager to install a previous SDK
- from the list select 6.0 Marshmallow and check the Show Package Details box, under 6.0 select
  - Google API's
  - Intel x86 Atom System Image
  - Intel x86 Atom_64 System Image
  - Google API's Intel x86 Atom_64 System Image
- before hitting Apply/Ok go the the 2nd tab titled "SDK Tools", then check Show Package Details box
  - check the Build Tool 23.0.1
- Hit the Apply button and accept the agreement, let it install before hitting finish
- go back to the facebook page on [https://facebook.github.io/react-native/docs/getting-started.html](https://facebook.github.io/react-native/docs/getting-started.html)<br/>
and make sure Android and mac osx is clicked, scroll to "ANDROID_HOME environment variable".
- from the command line do `open ~/.bash_profile` to open it in editor 

Append these lines to bash_profile, save the file and *restart your terminal window*

    # Android Home
    export ANDROID_HOME=${HOME}/Library/Android/sdk
    export PATH=${PATH}:${ANDROID_HOME}/tools
    export PATH=${PATH}:${ANDROID_HOME}/platform-tools

- check the environment variable is set by doing `echo $ANDROID_HOME`

### (AVD) Android Virtual Device Manager

- To launch, supposed to be `android avd` from the command line but this way is deprecated. Instead, _open a temporary new project_ in Android Studio and go top menu Tools > Android > AVD Manager
- To create Virtual Device, hit create button, you can download imges. Wait a bit when hitting "Finish" it looks like it crashes but its just lag with not alert spinner.

### Running the default Hello World app in Android Studio

- launch Android Studio and select 'open existing project' and open the android folder within the project, NOT the project itself.

- to the right of the green 'play' triangle is a smaller green triangle with a bug symbol (which means play with debug)  click that, select which emulator you want (set up previously)

- sometimes the app might need to be reloaded, use Command M to get the reload screen

- to get console logs its the same as xcode where you load the debugger through the browser, launch this process through Command M

- sometimes the Node package manager will fail to launch, if this happens launch a terminal window, navigate to the top level of the project which is above the android folder and inside it run `react-native start`

# Basic RN Elements

    import {AppRegistry, Text, View, StatusBar} from 'react-native';
    <View></View>               // equates roughly to a <div>
    <Text></Text>               // equates roughly to a <p>
    <StatusBar hidden={true}/>  // to hide the status bar

# Basic styling

    import {StyleSheet} from 'react-native';
    <Text style={styles.myText}>John Wick</Text>
    // note the square brackets
    <Text style={[styles.myText, styles.selectedText]}>Han Solo</Text>
then

    const styles = StyleSheet.create({
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
      }
    });

# Basic flex box positioning

    <View style={styles.container}>
      <Text style={styles.myText}>John Wick</Text>
      <Text style={styles.myText}>Han Solo</Text>
      <Text style={styles.myText}>Mad Max</Text>
    </View>

There is a flex container and flex children, even though this is one rule on the container it creates effects on the flex children

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
      }
    }

# Using images

    import {Images} from 'react-native';
    import furyRoadPic from './furyroad.jpg'; // like webpack
    import openingScene from './openscene.jpg';
Images can contain elements

    <Image source={furyRoadPic}/>
    <Image source={openingScene} style={styles.lowerRight}>
      <Text style={styles.caption}>Opening Scene</Text>
    </Image>
    const styles = StyleSheet.create({
      lowerRight: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
      },
      caption: {
        backgroundColor: 'rgba(256,256,256,.35)',
        fontSize: 12
      }
    }   

# Combining the code source into one file 
`index.ios.js` and `index.andoid.js` can both look like this

    import {AppRegistry} from 'react-native';
    import myFirstRNApp from './src/index.js';
    AppRegistry.registerComponent('myFirstRNApp', () => myFirstRNApp);

with `./src/index.js` looking like this

    import React, {Component} from 'react';
    import {StatusBar,Text,View} from 'react-native';
    class myFirstRNApp extends Component {
      render() {
        return (
          <View>
            <StatusBar hidden={true}/>
            <Text>hello</Text>
          </View>
        );
      }
    }
    module.exports = myFirstRNApp;

# Using relative paths instead of absolute 

Put `"name": "root_dir",` at the top level of `package.json` then 

    import myFirstRNApp from './src/index.js';

becomes

    import myFirstRNApp from 'root_dir/src/index.js';

# Dispatcher

    import EventEmitter from 'EventEmitter';
    // Create an dispatcher instance
    var dispatcher = new EventEmitter();
    module.exports = dispatcher;

Example use (similar to my react boilerplates)

    import dispatcher from './dispatcher';
    dispatcher.emit('doSomething', payload);
    dispatcher.addListener('doSomething', (payload)=>{
      // do something
    });

# React Native WebView

    import { WebView } from 'react-native';
    <WebView
      bounces={false}
      source={{uri: 'http://etc'}}
      style={{marginTop: 20}} />

- There maybe an error loading pages in the WebView due to non-secure connections (http as opposed to https). Some info here [LINK](http://blog.bigbinary.com/2016/07/27/open-non-https-sites-in-webview-in-react-native.html). I edited the plist.info as shown in jpg in the article but under `App Transport Security Settings` I added a row (using the dropdown) and selected `Allow Arbitrary Loads in Web Content` which I set to `YES`
- bounces prop removes the "pull down to refresh" on Android and removes annoying bounce behavior like we see in browsers when we pull the page down 

See here [For my notes on WebView Bridge communication between RN and the JS in the web page](./webview-bridge.md)

# Tricks on Troubleshooting iOS

- <strong>Delete the derived data.</strong>  Xcode > preferences.  Then the top row of icons choose locations. The top part is where you set the Derived Data folder but it alos displays the current path. Use the operating system to go to this path and delete the contents. Tip: clicking the tiny arrow next to the path should open the window.

- <strong>Run a clean.</strong> Top menu > Product > Clean

# Tricks on Troubleshooting Android





