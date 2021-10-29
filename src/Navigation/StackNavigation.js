import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from '../Screens/OnBoarding';
import Login from '../Screens/Login';
import Singup from '../Screens/Singup';
const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="OnBoarding" 
                component={OnBoarding}  
                options={
                    {
                        headerMode: false
                    }
                }
            />
            <Stack.Screen 
                name="Login" 
                component={Login} 
            />
            <Stack.Screen 
                name="Singup" 
                component={Singup} 
            />
      </Stack.Navigator>
    );
};

export default StackNavigation;