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
  const token =
    'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJPcjB0RnpsZk5jUEQyWWVqek5wRHNfV0V3RnlGVGhZMVMtSlljTzFVYzdRIn0.eyJleHAiOjE2ODg5NTcwMjcsImlhdCI6MTY4ODk1NTIyNywianRpIjoiZmVlYzQwNDQtOTMyMy00YTBmLTk0MDMtMDUxYzZhMDRkZDdkIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9TcHJpbmdCb290S2V5Y2xvYWsiLCJhdWQiOlsibG9naW4tYXBwIiwiYWNjb3VudCJdLCJzdWIiOiI2NjZmZmMyYi04NmFmLTRjMjItOWY3Yy05Mzg4MGRlYjBlY2YiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwb3J0YWwtYXBwIiwic2Vzc2lvbl9zdGF0ZSI6ImUxYWY5Mjk1LWFkMTctNDY5Zi1iNWQwLWNhYzE4NTYwMDg5MyIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJhcHBfdXNlciIsIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zcHJpbmdib290a2V5Y2xvYWsiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7InBvcnRhbC1hcHAiOnsicm9sZXMiOlsidXNlciJdfSwibG9naW4tYXBwIjp7InJvbGVzIjpbInVzZXIiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiJlMWFmOTI5NS1hZDE3LTQ2OWYtYjVkMC1jYWMxODU2MDA4OTMiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IkpvaG4gIERvZSIsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIxIiwiZ2l2ZW5fbmFtZSI6IkpvaG4gIiwiZmFtaWx5X25hbWUiOiJEb2UiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20ifQ.wxV7Kb_a3qYxZsw3l74DbB75nO8fc5urn8pQwNY5jgo_iOtOx19ZIfdarzr9Gc1CEPpPulXv-_eoNoMjlvxufPVyUWm5ogwmBMooD_R5LHmJpMuGkkCNLRjowdzNLS-YftyJBLgv2c9LY9OM3lGjaIIrXv95JaW09zua5z_y67ylGlv68btxV1uopaR4H2367Ko4cL6u4yUxYvw3YM0vIlIcw-X3jTkTGIowViWXQC3y9IrbMMrlFVvgtw_jLXFUx5S91YjvCGoBM9wsjTn7xQvb2CjGA7T2zJrbF3qezqN2yh65KIZWl0Woy4seb-Tp8HHdK2PEZNLTMDaoGU3xsw';

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <WebView
        source={{
          uri: 'http://172.20.30.90:8082/',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }}
        style={{marginTop: 20}}
      />
    </SafeAreaView>
  );
}

// const onNavigationStateChange = (navigationState: WebViewNavigation) => {
//   const url = navigationState.url;

//   // parseURLParams is a pseudo function.
//   // Make sure to write your own function or install a package
//   const params = parseURLParams(url);

//   if (params.token) {
//     // Save token for native requests & move to the next screen
//   }
// };

export default App;
