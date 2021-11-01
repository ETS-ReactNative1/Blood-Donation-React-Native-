import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, View} from 'react-native';
import {Badge, Icon} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import DonateRequest from '../Screens/DonateRequest';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Search from '../Screens/Search';
import colorValue from '../Shared/Color';
const Tab = createBottomTabNavigator();

const ButtomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colorValue.primary,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" size={24} color={color} />
          ),
          title: '',
          headerLeft: () => (
            <View style={{marginHorizontal: 5}}>
              <Image
                resizeMode="contain"
                style={{width: 25}}
                source={require('../../assets/image/menu.png')}
              />
            </View>
          ),

          headerRight: () => (
            <View style={{marginHorizontal: 5}}>
              <View>
                <Badge status="error" value={10} />
              </View>
              <Fontisto name="bell" size={25} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="search" size={24} color={color} />
          ),
          title: '',
        }}
      />
      <Tab.Screen
        name="DonateRequest"
        component={DonateRequest}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="doubleright" size={24} color={color} />
          ),
          title: '',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="user" size={24} color={color} />
          ),
          title: '',
        }}
      />
    </Tab.Navigator>
  );
};

export default ButtomNavigation;
