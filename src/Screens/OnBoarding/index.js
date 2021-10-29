import React from 'react';
import {Image, View, StatusBar, StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import color from '../../Shared/Color';
import { commonStyle } from '../../Shared/CommonStyle';
import fontFamily from '../../Shared/FontFamily';

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
      titleStyles={
        commonStyle(
          {
            fontSize:18, 
            fontFamily:fontFamily.PoppinsBold,
            color:color.primary
          }).text
      }
      subTitleStyles ={
        commonStyle({
          fontSize:14,
          fontFamily:fontFamily.PoppinsLight,
          color:color.black
        }).text
      }
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
