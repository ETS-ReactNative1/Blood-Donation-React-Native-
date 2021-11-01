import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {commonStyle} from '../../Shared/CommonStyle/index';
import fontFamily from '../../Shared/FontFamily';

const Card = ({item}) => {
  return (
    <View style={styles.card}>
      <View style={styles.subcard}>
        <View style={styles.body}>
          <Image
            style={{width: '60%', heigth: '60%', resizeMode: 'contain'}}
            source={item.image}
          />
          <Text
            style={
              commonStyle({fontSize: 13, fontFamily: fontFamily.PoppinsRegular})
                .text
            }>
            {item.title}
          </Text>
        </View>
      </View>
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    width: width * 0.33,
    height: 100,
    marginBottom: 10,
  },
  subcard: {
    margin: 10,
    backgroundColor: 'white',
    height: '100%',
  },
  body: {
    alignItems: 'center',
    marginTop: '20%',
  },
});

export default Card;
