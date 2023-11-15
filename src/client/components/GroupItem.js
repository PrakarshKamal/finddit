import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from '../styles/GroupItemStyles';

const GroupItem = ({group}) => {
    const { groupIcon, groupName, groupAdminEmail, votingDeadline, timeStamp } = group.groupMetadata
    const [remainingTime, setRemainingTime] = useState(null);

    useEffect(()=> {
    const SessionCreationtime = new Date(timeStamp.seconds * 1000 + timeStamp.nanoseconds / 1000000);
    const expirationTime = new Date(SessionCreationtime.getTime() + votingDeadline *  3600000);
    const currentTime = new Date();
    const timeDifference = expirationTime - currentTime;

    if (timeDifference > 0) {
      const hours = Math.floor(timeDifference / 3600000);
      const minutes = Math.floor((timeDifference / 60000) % 60);
      setRemainingTime(`${hours}h ${minutes}m`);
    } else {
      // Session has expired
      setRemainingTime('Expired');
    }
},[])
    console.log(group)
  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
        <Text style={styles.groupName}>{groupName}</Text>
        <Text style={styles.createdBy}>Created by: {groupAdminEmail}</Text>
        <Text style={styles.expiresIn}>Expires in: {remainingTime}</Text>
      </View>
    </View>
  );
};

export default GroupItem