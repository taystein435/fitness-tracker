import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import HomeNav from './HomeNav';
const Tab = createBottomTabNavigator();
type BottomProps = {
  color: string;
  size: number;
};
const BottomNav = ({ navigation }:any) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'grey',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: 'black',
        },
      }}>
      <Tab.Screen
        name="HomeNav"
        component={HomeNav}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }: BottomProps) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
