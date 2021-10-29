import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import OnBoarding from './src/Screens/OnBoarding';
import SplashScreen from './SplashScreen/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/Navigation/StackNavigation';

const App = () => {
  return (
    <View>
        <StatusBar backgroundColor="white" barStyle="dark-content" />   
        <View style={styles.main}>
          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
  main:{
    width:'100%',
    height:'100%',
  }
});

export default App;
