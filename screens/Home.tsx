import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Activity from 'components/Activity';
import Categories from 'components/Categories';
import { Image } from 'expo-image';
import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('window');
const Home = () => {
  function setShowPercentage(arg0: boolean): void {
    throw new Error('Function not implemented.');
  }

  return (
    <SafeAreaView>
      <View className="flex-row items-center justify-between p-3">
        <View className="flex-row  gap-2">
          <Image
            style={{ height: 50, width: 50, borderRadius: 50 }}
            source="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"
            contentFit="cover"
          />
          <View className="">
            <Text className="">Good morning!</Text>
            <Text className="text-xl font-bold">Taiwo Babatunde</Text>
          </View>
        </View>

        <MaterialCommunityIcons name="bell-outline" size={24} color="black" />
      </View>
      <View className="m-2 mt-5 flex-row justify-between rounded-md bg-black p-4">
        <View className="">
          <Text className="text-xl font-bold text-white">Workout Progress</Text>
          <Text className="text-white"> 6 workouts done</Text>
        </View>

        <AnimatedCircularProgress
          size={60}
          width={8}
          fill={90}
          prefill={90}
          tintColor="#fff"
          backgroundColor="#fff"></AnimatedCircularProgress>
      </View>
      <Text className="text-xl font-bold p-2">Explore</Text>
      <Activity />
      <Text className="text-xl font-bold p-2">Categories</Text>
      <Categories />
    </SafeAreaView>
  );
};

export default Home;