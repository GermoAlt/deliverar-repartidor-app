
import React, { useState, useEffect } from 'react';
import { StatusBar, LogBox, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login/Login';
import Main from './screens/Main/Main';
import User from './screens/User/User';
import OrderDetails from './screens/OrderDetails/OrderDetails';

import { UserContext } from './contexts/UserContext';
import { CredentialsContext } from './contexts/CredentialsContext';

import { checkLoginCredentials } from './services/credentials/credentialService'
import Payments from './screens/Payments/Payments';

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
            <Stack.Navigator >
                { !!credentials || (user && user.name) ?
                  <>
                    <Stack.Screen name="Main" component={Main} options={{headerShown: false}}/>
                    <Stack.Screen name="OrderDetails" component={OrderDetails} options={{headerShown: false}} />
                    <Stack.Screen name="User" component={User} options={{headerShown: false}}/>
                    <Stack.Screen name="Payments" component={Payments} options={{headerShown: false}}/>
                  </>
                  : 
                  <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                }
            </Stack.Navigator>
          </NavigationContainer>
          <StatusBar />
      </UserContext.Provider>
    </CredentialsContext.Provider>
  );
}