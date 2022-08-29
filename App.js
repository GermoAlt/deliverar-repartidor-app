
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserContext } from './contexts/UserContext';
import Home from './screens/Home/Home';
import User from './screens/User/User';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState({"usuario": "Scrum 3","password":null});

  return (
    <UserContext.Provider value={{user,setUser}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="User" component={User} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}
