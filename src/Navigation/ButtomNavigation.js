import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {Badge, Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import DonateRequest from '../Screens/DonateRequest';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Search from '../Screens/Search';
import colorValue from '../Shared/Color';
import {commonStyle} from '../Shared/CommonStyle';
import fontFamily from '../Shared/FontFamily';
const Tab = createBottomTabNavigator();

const ButtomNavigation = () => {
  const navigation = useNavigation();
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
            <TouchableOpacity
              onPress={() => navigation.navigate('NotificationScreen')}
              style={{marginHorizontal: 5}}>
              <View>
                <Badge status="error" value={10} />
              </View>
              <Fontisto name="bell" size={25} />
            </TouchableOpacity>
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
          headerLeft: () => (
            <View
              style={{
                marginHorizontal: 5,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <Image
                resizeMode="contain"
                style={{width: 25, height: 25}}
                source={require('../../assets/image/menu.png')}
              />
              <Text
                style={[
                  commonStyle({
                    fontSize: 14,
                    fontFamily: fontFamily.PoppinsBold,
                    color: colorValue.primary,
                  }).text,
                  ,
                  {marginLeft: 10},
                ]}>
                Find Doner
              </Text>
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
        name="DonateRequest"
        component={DonateRequest}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="doubleright" size={24} color={color} />
          ),
          title: '',
          headerLeft: () => (
            <View
              style={{
                marginHorizontal: 5,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <Image
                resizeMode="contain"
                style={{width: 25, height: 25}}
                source={require('../../assets/image/menu.png')}
              />
              <Text
                style={[
                  commonStyle({
                    fontSize: 14,
                    fontFamily: fontFamily.PoppinsBold,
                    color: colorValue.primary,
                  }).text,
                  ,
                  {marginLeft: 10},
                ]}>
                Donate Request
              </Text>
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
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="user" size={24} color={color} />
          ),
          title: '',
          headerLeft: () => (
            <View
              style={{
                marginHorizontal: 5,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <Image
                resizeMode="contain"
                style={{width: 25, height: 25}}
                source={require('../../assets/image/menu.png')}
              />
              <Text
                style={[
                  commonStyle({
                    fontSize: 14,
                    fontFamily: fontFamily.PoppinsBold,
                    color: colorValue.primary,
                  }).text,
                  ,
                  {marginLeft: 10},
                ]}>
                Profile
              </Text>
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
    </Tab.Navigator>
  );
};

export default ButtomNavigation;
