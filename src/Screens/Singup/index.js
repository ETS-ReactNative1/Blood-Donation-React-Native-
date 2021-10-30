import React from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import colorValue from '../../Shared/Color';
import {commonJustify, commonStyle} from '../../Shared/CommonStyle';
import fontFamily from '../../Shared/FontFamily';

const Singup = ({navigation}) => {
  return (
    <ScrollView>
      <StatusBar backgroundColor="white" />
      <View style={styles.main}>
        {/* Singup image section */}
        <View style={commonJustify.rowCenter}>
          <Image
            style={styles.image}
            source={require('../../../assets/image/login-logo.png')}
          />
        </View>

        {/* Input Form Desing */}
        <View>
          <Input
            placeholder="Enter your username"
            leftIcon={{type: 'ant-design', name: 'user'}}
          />
          <Input
            placeholder="Enter your email"
            leftIcon={{type: 'ant-design', name: 'mail'}}
          />
          <Input
            placeholder="Enter your password"
            leftIcon={{type: 'ant-design', name: 'lock'}}
          />
          <Input
            placeholder="Enter your phone"
            leftIcon={{type: 'ant-design', name: 'phone'}}
          />
          <Input
            placeholder="Enter your blood group"
            leftIcon={{type: 'fontisto', name: 'blood-drop'}}
          />
          <Input
            placeholder="Enter your address"
            leftIcon={{type: 'evil-icons', name: 'map'}}
          />
          <Button
            buttonStyle={{backgroundColor: colorValue.primary}}
            title="SING UP"
          />
        </View>
        <View style={commonJustify.rowCenter}>
          <TouchableOpacity>
            <Text
              style={[
                commonStyle({
                  fontSize: 14,
                  fontFamily: fontFamily.PoppinsRegular,
                  color: colorValue.primary,
                }).text,
                {marginTop: 5},
              ]}>
              Alreay have an account ?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
});

export default Singup;
