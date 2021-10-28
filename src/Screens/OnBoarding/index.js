import React from 'react';
import {Image, View, StatusBar, StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnBoarding = () => {
  const onboardingImages = [
    {
      backgroundColor: '#FFF',
      image: (
        <Image source={require('../../../assets/image/onborading1.png')} />
      ),
      title: 'Find Blood Doner',
      subtitle: 'Done with React Native Onboarding Swiper'
    },
    {
      backgroundColor: '#FFF',
      image: <Image source={ require('../../../assets/image/onboarding2.png') } />,
      title: 'Post For Blood Request',
      subtitle: 'Done with React Native Onboarding Swiper'
    }
  ];
  return (
   <View style={styles.main}>
     <StatusBar backgroundColor="white" barStyle="dark-content" />
     <Onboarding 
      pages={onboardingImages}
      onDone={ ()=>console.warn("done") }
      onSkip={ ()=>console.warn("Skip") }
     />
   </View>
  );
  
  
};

const styles = StyleSheet.create({
  main:{
    height: '100%',
    width: '100%'
  }
});

export default OnBoarding;
