
import React, { useState, useEffect } from 'react';
import { StatusBar, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
import User from './screens/User/User';

import { UserContext } from './contexts/UserContext';
import { CredentialsContext } from './contexts/CredentialsContext';

import initialUser from './services/user/initialUser';
import initialCredentials from './services/credentials/initialCredentials';

import { checkLoginCredentials } from './services/credentials/credentialService'

LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [credentials, setCredentials] = useState(null)

  /*useEffect(() => {
    try{
      checkLoginCredentials().then(credentials => {
        setCredentials(credentials)
      }).catch(err => {
        console.log("Error when checking foir credentials: ", err);
      })
    }
    catch(err){
      console.log("Fatal: ", err);
    }
    
  },[])*/

  return (
    <CredentialsContext.Provider value={{credentials,setCredentials}}>
      <UserContext.Provider value={{user,setUser}}>
        <NavigationContainer>
          <Stack.Navigator>
            { !!credentials || (user && user.usuario) ? 
              <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
              : 
              <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            }
            <Stack.Screen name="User" component={User} options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar />
      </UserContext.Provider>
    </CredentialsContext.Provider>
  );
}