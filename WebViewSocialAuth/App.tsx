/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { WebView, WebViewNavigation } from 'react-native-webview';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

// eslint-disable-next-line prettier/prettier
import { Colors } from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const backgroundStyle = {
    flex: 1,
    backgroundColor: Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <WebView
        source={{uri: 'http://192.168.163.59:8082/'}}
        onNavigationStateChange={onNavigationStateChange}
        style={{marginTop: 20}}
      />
    </SafeAreaView>
  );
}

const onNavigationStateChange = (navigationState: WebViewNavigation) => {
  const url = navigationState.url;

  // parseURLParams is a pseudo function.
  // Make sure to write your own function or install a package
  const params = parseURLParams(url);

  if (params.token) {
    // Save token for native requests & move to the next screen
  }
};

export default App;
