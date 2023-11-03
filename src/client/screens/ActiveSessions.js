// ActiveSessions.js
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import {getActiveGroupsForUser} from '../utils/api_function_calls/group_functions'
import GroupItem from '../components/GroupItem';

const ActiveSessions = ({route}) => {
  const {email} = route.params
  const [activeGroups , setActiveGroups] = useState([]);
  const navigation = useNavigation();
  const fetchActiveGroups = async () => {
    try {
      const response = await getActiveGroupsForUser(email)
      const data = await response.data;
      console.log('Active groups:', data);
      setActiveGroups(data)
    } catch (error) {
      console.error('Error fetching active groups:', error);
    }
  };

  const renderActiveGroups = (item) => {
    return <GroupItem group = {item.item}></GroupItem>
  }
  useEffect(() => {
    fetchActiveGroups();
  }, []);

  return (
    <View>
      <Text style={{textAlign:'center'}}>Active Sessions</Text>
      <FlatList
      data={activeGroups}
      renderItem={renderActiveGroups}>

      </FlatList>
    </View>
  );
};



export default ActiveSessions;
