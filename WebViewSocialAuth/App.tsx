/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import WebView from 'react-native-webview';
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
      <WebView source={{uri: 'https://reactnative.dev/'}} style={{ marginTop: 20 }} />
    </SafeAreaView>
  );
}

export default App;
