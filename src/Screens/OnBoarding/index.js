import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StatusBar, StyleSheet, View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {getMyStringValue, setStringValue} from '../../Global/AsyncStorage';
import color from '../../Shared/Color';
import {commonStyle} from '../../Shared/CommonStyle';
import fontFamily from '../../Shared/FontFamily';

const OnBoarding = () => {
  const navigation = useNavigation();

  const onboardingImages = [
    {
      backgroundColor: '#FFF',
      image: (
        <Image source={require('../../../assets/image/onborading1.png')} />
      ),
      title: 'Find Blood Doner',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
      backgroundColor: '#FFF',
      image: (
        <Image source={require('../../../assets/image/onboarding2.png')} />
      ),
      title: 'Post For Blood Request',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
  ];

  const onBoardingDone = async () => {
    try {
      await setStringValue('onboarding', 'true');
      await navigation.navigate('Login');
    } catch (error) {
      console.warn(error);
    }
  };

  React.useEffect(async () => {
    const onboarding = await getMyStringValue('onboarding');

    if (onboarding === 'true') {
      navigation.navigate('Login');
    }
  }, []);

  return (
    <View style={styles.main2}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Onboarding
        pages={onboardingImages}
        onDone={() => onBoardingDone()}
        onSkip={() => onBoardingDone()}
        titleStyles={
          commonStyle({
            fontSize: 18,
            fontFamily: fontFamily.PoppinsBold,
            color: color.primary,
          }).text
        }
        subTitleStyles={
          commonStyle({
            fontSize: 14,
            fontFamily: fontFamily.PoppinsLight,
            color: color.black,
          }).text
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main2: {
    height: '100%',
    width: '100%',
  },
});

export default OnBoarding;
