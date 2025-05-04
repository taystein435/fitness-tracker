import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import HomeNav from './HomeNav';
import Profile from 'screens/Profile';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Plans from 'screens/Plans';
import Workout from 'screens/Workout';
const Tab = createBottomTabNavigator();
type BottomProps = {
  color: string;
  size: number;
};
const BottomNav = ({ navigation }: any) => {
  return (
    <Tab.Navigator
      initialRouteName="HomeNav"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Tab.Screen
        name="HomeNav"
        component={HomeNav}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }: BottomProps) => (
            <FontAwesome name="home" size={24} color="black"/>
          ),
        }}
      />
           <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }: BottomProps) => (
            <MaterialCommunityIcons name="account" size={24} color="black" />
          ),
        }}
      />
           <Tab.Screen
        name="Plans"
        component={Plans}
        options={{
          headerShown: false,
          tabBarLabel: 'Plans',
          tabBarIcon: ({ color, size }: BottomProps) => (
            <MaterialCommunityIcons name="food" size={24} color="black" />
          ),
        }}
      />
           <Tab.Screen
        name="Workout"
        component={Workout}
        options={{
          headerShown: false,
          tabBarLabel: 'Workout',
          tabBarIcon: ({ color, size }: BottomProps) => (
            <MaterialCommunityIcons name="weight-lifter" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
