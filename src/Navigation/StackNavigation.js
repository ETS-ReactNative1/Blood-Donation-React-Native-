import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../Screens/Login';
import NotificationScreen from '../Screens/NotificationScreen';
import OnBoarding from '../Screens/OnBoarding';
import Singup from '../Screens/Singup';
import ButtomNavigation from './ButtomNavigation';
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
      <Stack.Screen
        name="ButtomNavigation"
        component={ButtomNavigation}
        options={{headerMode: false}}
      />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
