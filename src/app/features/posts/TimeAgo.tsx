import { formatDistanceToNow, parseISO } from 'date-fns';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface TimeAgoProps {
  date:string
}

const TimeAgo = ({date}: TimeAgoProps) => {
const timeAgo = `${formatDistanceToNow(parseISO(date))} ago`
  return (

     <Text style={styles.subtitle}>{timeAgo}</Text>

  );
};

export default TimeAgo;

const styles = StyleSheet.create({
  subtitle: {
    color: "gray",
},
});
