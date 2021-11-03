import React from 'react';
import {Button, ListItem} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import color from '../../Shared/Color';

const NotificationScreen = () => {
  return (
    <ListItem.Swipeable
      leftContent={
        <Button
          title="Info"
          icon={{name: 'info', color: 'white'}}
          buttonStyle={{minHeight: '100%'}}
        />
      }
      rightContent={
        <Button
          title="Delete"
          icon={{name: 'delete', color: 'white'}}
          buttonStyle={{minHeight: '100%', backgroundColor: 'red'}}
        />
      }>
      <AntDesign name="notification" size={24} color={color.primary} />
      <ListItem.Content>
        <ListItem.Title>Rabiul need O+ blood</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem.Swipeable>
  );
};

export default NotificationScreen;
