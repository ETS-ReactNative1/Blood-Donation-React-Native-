import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Card from './Card';
import {ItemArray} from './Data';

const Body = () => {
  return (
    <View>
      <FlatList
        data={ItemArray}
        numColumns="3"
        renderItem={({item}) => <Card item={item} />}
      />
    </View>
  );
};

export default Body;
