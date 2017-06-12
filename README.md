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

1. use xcode to open `myApp.xcodeproj` from within `.ios`

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

# Intercom Integration

    // there is not functionality for a visitor aka non-logged in user aka lead generation
    // like you do on the website version if intercom
    // therefore .displayMessageComposer should happen after we have user context
    import Intercom from 'react-native-intercom';
    Intercom.registerIdentifiedUser({userId: 87});
    Intercom.displayMessageComposer();
    // dont make the following calls
    // Intercom.registerIdentifiedUser({userId: undefined});
    // Intercom.registerIdentifiedUser({});

# React Native WebView

    // bounces prop remove the pull down to refresh on Android and the annoying bounce in browsers 
    // when pull page down
    import { WebView } from 'react-native';
    <WebView
      bounces={false}
      source={{uri: 'http://etc'}}
      style={{marginTop: 20}} />



