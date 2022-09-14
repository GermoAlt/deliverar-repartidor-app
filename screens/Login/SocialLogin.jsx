import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function SocialLogin() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
        const { authentication } = response;
        /* persistCredentials(authentication).then(creds => {
            console.log("Credentials saved successfully!");
        }).cacth(err){
            console.log("Error when persisting Google credentials");
        }
        */
    }
  }, [response]);

  return (
    <Button
        disabled={!request}
        title="Login"
        onPress={() => {
            promptAsync();
        }}
    />
  );
}

// https://docs.expo.dev/guides/authentication/#development-in-the-expo-go-app
// https://console.cloud.google.com/apis/credentials/consent?authuser=1&project=deliverar&supportedpurview=project