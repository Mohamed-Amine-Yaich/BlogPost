import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {selectAllUsers} from '../users/usersSlice';

interface UserNameProps {
  userId?: number;
}

const UserName = ({userId}: UserNameProps) => {
  const users = useSelector(selectAllUsers);
  const user = users.find(user => user.id === userId);

  return <Text style={styles.name}>{user ? user.name : 'unkown'} </Text>;
};

export default UserName;

const styles = StyleSheet.create({
  name: {
    fontWeight: '500',
  },
});
