import React, { useState, useEffect, useContext} from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button } from 'react-native';

import constants from '../../services/credentials/constants'

import { UserContext } from '../../contexts/UserContext';
import { CredentialsContext } from '../../contexts/CredentialsContext';

WebBrowser.maybeCompleteAuthSession();

export default function SocialLogin() {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    expoClientId: constants.EXPO_CLIENT_ID,
    iosClientId: constants.IOS_CLIENT_ID,
    androidClientId: constants.ANDROID_CLIENT_ID || "",
    webClientId: constants.EXPO_CLIENT_ID,
  });

  const [accessToken, setAccessToken] = useState("");

  let { user, setUser } = useContext(UserContext);
  let { credentials, setCredentials } = useContext(CredentialsContext);

  useEffect(() => {
    if (response?.type === 'success') {
        const { authentication } = response;
        console.log(authentication);
        setAccessToken(authentication.accessToken);
        accessToken && getUserInfo();
        /* 
        persistCredentials(authentication).then(creds => {
            console.log("Credentials saved successfully!");
        }).cacth(err){
            console.log("Error when persisting Google credentials");
        }
        */
    }
  }, [response, accessToken]);

  const getUserInfo = async () => {
    try{
        let response = await fetch("www.googleapis.com/userinfo/v2/me", {
            headers: {
                Authoriztion: `Bearer ${accessToken} `
            }
        });
        const userInfo = await response.json(); // if axios is used, this is not needed
        setUser(userInfo);
    }
    catch(err){
        console.log(err);
    }
  }

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