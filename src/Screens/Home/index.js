import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Slider from '../../Shared/Components/Slider';
import Body from './Body';
import {donationRequest} from './Data';
import DonationRequest from './DonationRequest';
const Home = () => {
  return (
    <View style={styles.main}>
      <FlatList
        data={donationRequest}
        ListHeaderComponent={() => (
          <View>
            <Slider />
            <Body />
          </View>
        )}
        renderItem={({item}) => <DonationRequest item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
  },
});

export default Home;
