import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../Screens/Login';
import OnBoarding from '../Screens/OnBoarding';
import Singup from '../Screens/Singup';
const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{
          headerMode: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerMode: false,
        }}
      />
      <Stack.Screen
        name="Singup"
        component={Singup}
        options={{
          headerMode: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
