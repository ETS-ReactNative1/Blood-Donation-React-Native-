import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, Button, Icon, ListItem} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import color from '../../Shared/Color';
const Profile = () => {
  return (
    <ScrollView>
      <View>
        <View style={styles.avatarsection}>
          <Avatar
            rounded
            size={100}
            icon={{name: 'user', type: 'font-awesome'}}
            containerStyle={{backgroundColor: color.primary}}
          />
        </View>

        <View style={{marginTop: 5}}>
          <Text style={{textAlign: 'center'}}>Rabiul Hasan</Text>
        </View>
        <View>
          <Text style={{textAlign: 'center'}}>
            <Icon name="map" size={15} /> Dhaka, Bangladesh
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 10,
        }}>
        <Button
          title="Call Me"
          buttonStyle={{backgroundColor: color.primary}}
        />
        <Button title="Request" buttonStyle={{backgroundColor: color.info}} />
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={{textAlign: 'center'}}>O+</Text>
          <Text>Blood Type</Text>
        </View>
        <View style={styles.card}>
          <Text style={{textAlign: 'center'}}>05</Text>
          <Text>Times Donate</Text>
        </View>
        <View style={styles.card}>
          <Text style={{textAlign: 'center'}}>02</Text>
          <Text>Request</Text>
        </View>
      </View>

      <View style={styles.listitem}>
        {list.map((item, i) => (
          <ListItem style={{marginTop: 10}} key={i} bottomDivider>
            <Icon name={item.icon} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </View>
    </ScrollView>
  );
};

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
];

const styles = StyleSheet.create({
  avatarsection: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  card: {
    backgroundColor: 'white',
    padding: 10,
  },
  listitem: {
    marginTop: 20,
  },
});

export default Profile;
