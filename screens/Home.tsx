import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Activity from 'components/Activity';
import Categories from 'components/Categories';
import { Image } from 'expo-image';
import React from 'react';
import { View, Text, Dimensions, FlatList, ListRenderItem } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

// Define the data type for FlatList items
interface DataItem {
  id: string;
  title: string;
}

const Home = () => {
  
  const data: DataItem[] = [
    { id: '1', title: 'Workout Progress' },
    { id: '2', title: 'Explore' },
    { id: '3', title: 'Categories' },
  ];

  
  const renderItem: ListRenderItem<DataItem> = ({ item }) => {
    switch (item.id) {
      case '1':
        return (
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
        );
      case '2':
        return (
          <View>
            <Text className="p-2 text-xl font-bold">Explore</Text>
            <Activity />
          </View>
        );
      case '3':
        return (
          <View>
            <Text className="p-2 text-xl font-bold">Categories</Text>
            <Categories />
          </View>
        );
      default:
        return null;
    }
  };

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

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;
