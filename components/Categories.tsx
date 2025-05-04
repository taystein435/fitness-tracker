import { View, Text, FlatList,Dimensions } from 'react-native'
import React from 'react'
import { Image } from "expo-image";
const { width, height } = Dimensions.get("window");
const data = [
    {
      id: 1,
      title: 'Cardio',
      image: 'https://images.unsplash.com/photo-1554288242-2a6c2b9e7687?auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 2,
      title: 'Strength Training',
      image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07d?auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 3,
      title: 'Yoga',
      image: 'https://images.unsplash.com/photo-1584980640143-3c4b2c4cf65a?auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 4,
      title: 'HIIT',
      image: 'https://images.unsplash.com/photo-1612437302981-d1147a7f8f31?auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 5,
      title: 'Pilates',
      image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 6,
      title: 'CrossFit',
      image: 'https://images.unsplash.com/photo-1605296867304-8e3d92b5dbf3?auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 7,
      title: 'Mobility',
      image: 'https://images.unsplash.com/photo-1627483269076-b5864f0588bb?auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 8,
      title: 'Dance Fitness',
      image: 'https://images.unsplash.com/photo-1622473590832-e3c74ce1d782?auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 9,
      title: 'Stretching',
      image: 'https://images.unsplash.com/photo-1615392481744-019b9c7a2a3c?auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 10,
      title: 'Core Workouts',
      image: 'https://images.unsplash.com/photo-1626341682047-b40ec57b29ee?auto=format&fit=crop&w=600&q=60',
    },
  ];
const Categories = () => {
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        numColumns={2}
        renderItem={({item}) => (
          <View className="relative mt-3 px-1">
            <Image
              style={{ height: height*0.25, width: width*0.45,margin:5,borderRadius:10 }}
              source={item.image}
              contentFit="cover"
              transition={1000}
            />
            <Text className="absolute bottom-16  font-bold text-white text-3xl px-4">
             {item.title}
            </Text> </View>
        )}
      />
    </View>
  );
}

export default Categories