import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import colorValue from '../../Shared/Color';
import {commonStyle} from '../../Shared/CommonStyle';
import fontValue from '../../Shared/FontFamily';

const RequestCard = ({item}) => {
  return (
    <ScrollView>
      <View style={[styles.main]}>
        <View>
          <View>
            <Text
              style={
                commonStyle({
                  fontSize: 13,
                  fontFamily: fontValue.PoppinsRegular,
                }).text
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

            <View style={[styles.margin]}>
              <Text
                style={
                  commonStyle({
                    fontSize: 13,
                    fontFamily: fontValue.PoppinsRegular,
                  }).text
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
                  commonStyle({
                    fontSize: 13,
                    fontFamily: fontValue.PoppinsRegular,
                  }).text
                }>
                {item.time}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.imagecontent}>
          <Image
            source={require('../../../assets/image/BloodGroup.png')}
            style={{width: 100, resizeMode: 'contain'}}
          />
          <Button
            title="Donate"
            type="clear"
            titleStyle={{color: colorValue.primary}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    marginTop: 10,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imagecontent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RequestCard;
