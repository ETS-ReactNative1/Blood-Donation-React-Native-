import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import colorValue from '../../Shared/Color';
import {commonJustify, commonStyle} from '../../Shared/CommonStyle';
import fontValue from '../../Shared/FontFamily';

const DonationRequest = ({item}) => {
  return (
    <View style={[styles.main, commonJustify.rowSpaceBetween]}>
      <View>
        <View style={[styles.margin]}>
          <Text
            style={
              commonStyle({fontSize: 13, fontFamily: fontValue.PoppinsRegular})
                .text
            }>
            Name
          </Text>
          <Text
            style={
              commonStyle({
                fontSize: 14,
                fontFamily: fontValue.PoninsBold,
                color: colorValue.liteDark2,
              }).text
            }>
            {item.name}
          </Text>
        </View>

        <View style={[styles.margin]}>
          <Text
            style={
              commonStyle({fontSize: 13, fontFamily: fontValue.PoppinsRegular})
                .text
            }>
            Location
          </Text>
          <Text
            style={
              commonStyle({
                fontSize: 14,
                fontFamily: fontValue.PoninsBold,
                color: colorValue.liteDark2,
              }).text
            }>
            {item.location}
          </Text>
        </View>

        <View style={[styles.margin]}>
          <Text
            style={
              commonStyle({fontSize: 13, fontFamily: fontValue.PoppinsRegular})
                .text
            }>
            {item.time}
          </Text>
        </View>
      </View>

      <View style={styles.bloodIcon}>
        <Image
          source={require('../../../assets/image/BloodGroup.png')}
          style={{width: 100, resizeMode: 'contain'}}
        />
        <Button
          title="Donate"
          type="clear"
          style={{color: colorValue.primary}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    marginTop: 10,
  },
  margin: {
    marginLeft: 10,
    padding: 5,
  },
  bloodIcon: {
    justifyContent: 'center',
  },
});

export default DonationRequest;
