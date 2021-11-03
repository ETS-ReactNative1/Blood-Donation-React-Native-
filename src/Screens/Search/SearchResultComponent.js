import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import color from '../../Shared/Color';
import {commonJustify, commonStyle} from '../../Shared/CommonStyle';
import fontFamily from '../../Shared/FontFamily';

const SearchResultComponent = ({item}) => {
  return (
    <View style={[styles.main, commonJustify.rowSpaceBetween]}>
      <Avatar
        containerStyle={{backgroundColor: 'gray', borderRadius: 5}}
        size="large"
        title="BP"
        onPress={() => console.log('Works!')}
        activeOpacity={0.7}
      />

      <View>
        <Text
          style={
            commonStyle({
              fontSize: 16,
              fontFamily: fontFamily.PoppinsBold,
              color: color.primary,
            }).text
          }>
          {item.name}
        </Text>
        <Text
          style={
            commonStyle({
              fontSize: 14,
              fontFamily: fontFamily.PoppinsRegular,
              color: color.lightDark2,
            }).text
          }>
          {item.location}
        </Text>
      </View>

      <View style={commonJustify.center}>
        <Image source={require('../../../assets/image/BloodGroup.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: '5%',
    padding: 5,
  },
});

export default SearchResultComponent;
