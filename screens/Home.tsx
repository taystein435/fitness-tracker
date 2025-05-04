import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Activity from 'components/Activity';
import Categories from 'components/Categories';
import { Image } from 'expo-image';
import React from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { SafeAreaView } from 'react-native-safe-area-context';


const { width, height } = Dimensions.get('window');

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-row items-center justify-between p-3">
        <View className="flex-row gap-2">
          <Image
            style={{ height: 50, width: 50, borderRadius: 50 }}
            source="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&auto=format&fit=crop&q=60"
            contentFit="cover"
          />
          <View>
            <Text>Good morning!</Text>
            <Text className="text-xl font-bold">Taiwo Babatunde</Text>
          </View>
        </View>

        <MaterialCommunityIcons name="bell-outline" size={24} color="black" />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 60 }} showsVerticalScrollIndicator={false}>
        <View className="m-2 mt-5 flex-row justify-between rounded-md bg-black p-4">
          <View>
            <Text className="text-xl font-bold text-white">Workout Progress</Text>
            <Text className="text-white">6 workouts done</Text>
          </View>

          <AnimatedCircularProgress
            size={60}
            width={8}
            fill={90}
            prefill={90}
            tintColor="#fff"
            backgroundColor="#fff"
          />
        </View>

        <Text className="text-xl font-bold p-2">Explore</Text>
        {/* These components likely use FlatList, so they should not be inside a ScrollView */}
        <View style={{ flex: 1 }}>
          <Activity />
          <Text className="text-xl font-bold p-2">Categories</Text>
          <Categories />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
