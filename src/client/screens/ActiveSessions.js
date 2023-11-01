// ActiveSessions.js
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {getActiveGroupsForUser} from '../utils/api_function_calls/group_functions'

const ActiveSessions = ({route}) => {
  const {email} = route.params
  const [activeGroups , setActiveUsers] = useState(null);
  const navigation = useNavigation();
  const fetchActiveGroups = async () => {
    try {
     
      const response = await getActiveGroupsForUser(email)
      const data = await response.data;
      console.log('Active groups:', data);
      setActiveUsers(data)
    } catch (error) {
      console.error('Error fetching active groups:', error);
    }
  };

  useEffect(() => {
    fetchActiveGroups();
  }, []);

  return (
    <View>
      <Text>Active Sessions</Text>
      <Text>
      {activeGroups}
      </Text>
    </View>
  );
};



export default ActiveSessions;
