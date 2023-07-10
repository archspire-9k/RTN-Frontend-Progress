/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {WebView, WebViewNavigation} from 'react-native-webview';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

// eslint-disable-next-line prettier/prettier
import { Colors } from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const backgroundStyle = {
    flex: 1,
    backgroundColor: Colors.lighter,
  };
  // const token =
  //   'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJPcjB0RnpsZk5jUEQyWWVqek5wRHNfV0V3RnlGVGhZMVMtSlljTzFVYzdRIn0.eyJleHAiOjE2ODg5NTc5MjEsImlhdCI6MTY4ODk1NjEyMSwianRpIjoiOTNkY2NmYTItM2Y4MS00NWMyLWIwZTItMmM1YTYzODRkYmZlIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9TcHJpbmdCb290S2V5Y2xvYWsiLCJhdWQiOlsibG9naW4tYXBwIiwiYWNjb3VudCJdLCJzdWIiOiI2NjZmZmMyYi04NmFmLTRjMjItOWY3Yy05Mzg4MGRlYjBlY2YiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwb3J0YWwtYXBwIiwic2Vzc2lvbl9zdGF0ZSI6ImFmMTM4MTg3LTkyOTgtNGI2Yy05YTdiLTcyN2U4NmQyMmE0MiIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJhcHBfdXNlciIsIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zcHJpbmdib290a2V5Y2xvYWsiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7InBvcnRhbC1hcHAiOnsicm9sZXMiOlsidXNlciJdfSwibG9naW4tYXBwIjp7InJvbGVzIjpbInVzZXIiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiJhZjEzODE4Ny05Mjk4LTRiNmMtOWE3Yi03MjdlODZkMjJhNDIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IkpvaG4gIERvZSIsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIxIiwiZ2l2ZW5fbmFtZSI6IkpvaG4gIiwiZmFtaWx5X25hbWUiOiJEb2UiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20ifQ.dj5YdeUqlxxuntqKip4T4zWD4doujObLR1pcWeXPdErvVj5IsNHxTu155aWrLlNfPWbceH5co_f8_PemIgoFUAfNUdnpgZKQYfa4WZW0QBlcr4bHsRzbyTOe6wdszdtx1zeoBowV5na0hg-uhlzSst1VoNmrlHL9fRHNkiUUWCF1MkX4Luw8nybZd3uV6DBtcT8Hw3KZBWr10JJ-iyis5soP3Dq0BmGS1laXbwbc4AL5nCPoxy9R_ulPVyPjw3Horcga-Zg7TfaoMpEridS4PcnJaEIBcPtgCnV-BUb14_KrfbFpYwWuCwhNo8TegAniF3W70TLkMfZ3nCtf_JY3BQ';

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <WebView
        source={{
          uri: 'http://172.20.30.90:8080/realms/SpringBootKeycloak/protocol/openid-connect/auth?response_type=code&client_id=portal-app&scope=openid&redirect_uri=http://localhost:8082/login/oauth2/code/keycloak',
        }}
        style={{marginTop: 20}}
        onNavigationStateChange={onNavigationStateChange}
      />
    </SafeAreaView>
  );
}

const onNavigationStateChange = (navigationState: WebViewNavigation) => {
  const url = navigationState.url;

  // parseURLParams is a pseudo function.
  // Make sure to write your own function or install a package
  console.log(`check the domains:  ${url}`);
  //TODO: fix authorization not found
};

export default App;
