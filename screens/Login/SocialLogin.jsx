import React, { useState, useEffect, useContext} from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
//import CustomButton from '../../components/CustomButton/CustomButton';
import { Text,Button } from 'react-native-paper'; 

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

  //const [accessToken, setAccessToken] = useState("");

  let { user, setUser } = useContext(UserContext);
  let { credentials, setCredentials } = useContext(CredentialsContext);

  useEffect(() => {
    if (response?.type === 'success') {
      try{
        const { authentication } = response;
        if(authentication){
          console.log("Authentication!")
          //setAccessToken(authentication.accessToken);
          getUserInfo(authentication.accessToken);
        }
        else{
          console.log("Error: unexpected response")
        }
      }
      catch(err){
        console.log("Error: ", err);
      }

      return () => {
        console.log("Unmounting...");
      }
        
        /* 
        persistCredentials(authentication).then(creds => {
            console.log("Credentials saved successfully!");
        }).cacth(err){
            console.log("Error when persisting Google credentials");
        }
        */
    }
  }, [response]);

  const getUserInfo = async (token) => {
    try{
        let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const userInfo = await userInfoResponse.json(); // if axios is used, this is not needed
        setUser(userInfo);
    }
    catch(err){
      console.log("Error when retrieving user's data: ")
      console.log(err);
    }
  }

  return (
    <Button 
    disabled={!request}
    onPress={() => promptAsync()} 
    mode="contained"
    style={{ marginTop: 20, alignSelf: 'stretch' }}
    color='rgba(208, 9, 9,0.3)'>
      Iniciar con Google
    </Button>
  );
}

// https://docs.expo.dev/guides/authentication/#development-in-the-expo-go-app
// https://console.cloud.google.com/apis/credentials/consent?authuser=1&project=deliverar&supportedpurview=project