import React from 'react';
import {Dimensions, FlatList, ScrollView, View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Color from '../../Shared/Color';
import {SearchData} from './SearchResult';
import SearchResultComponent from './SearchResultComponent';

const Search = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <ScrollView>
      <View style={{marginTop: 10, flexDirection: 'row', marginHorizontal: 10}}>
        <SearchBar
          containerStyle={{
            backgroundColor: Color.white,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            width: windowWidth * 0.8,
          }}
          inputContainerStyle={{
            backgroundColor: Color.white,
          }}
        />
        <View
          style={{
            backgroundColor: Color.primary,
            width: 45,
            padding: 8,
            marginLeft: 8,
          }}>
          <AntDesign style={{marginTop: 15}} name="filter" size={24} />
        </View>
      </View>
      <View>
        <FlatList
          data={SearchData}
          renderItem={({item}) => <SearchResultComponent item={item} />}
        />
      </View>
    </ScrollView>
  );
};

export default Search;
