import React from 'react';
import {FlatList, View} from 'react-native';
import RequestCard from './RequestCard';
import {donationRequest} from './RequestData';

const DonateRequest = () => {
  return (
    <View>
      <FlatList
        data={donationRequest}
        renderItem={({item}) => <RequestCard item={item} />}
      />
    </View>
  );
};

export default DonateRequest;
