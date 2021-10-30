import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Search from '../Screens/Search';
const Tab = createBottomTabNavigator();

const ButtomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

export default ButtomNavigation;
