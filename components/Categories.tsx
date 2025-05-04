import { View, Text, FlatList,Dimensions } from 'react-native'
import React from 'react'
import { Image } from "expo-image";
const { width, height } = Dimensions.get("window");
const data = [
    {
      id: 1,
      title: 'Cardio',
      image: 'https://plus.unsplash.com/premium_photo-1663040230077-80d4b18e16e8?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyZGlvfGVufDB8fDB8fHww',
    },
    {
      id: 2,
      title: 'Strength Training',
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9keWJ1aWxkaW5nfGVufDB8fDB8fHww',
    },
    {
      id: 3,
      title: 'Yoga',
      image: 'https://plus.unsplash.com/premium_photo-1661777196224-bfda51e61cfd?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 4,
      title: 'HIIT',
      image: 'https://plus.unsplash.com/premium_photo-1664910325180-777402dfed5b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SElJVHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 5,
      title: 'Pilates',
      image: 'https://images.unsplash.com/photo-1536922246289-88c42f957773?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEhJSVR8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 6,
      title: 'CrossFit',
      image: 'https://images.unsplash.com/photo-1518644961665-ed172691aaa1?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEhJSVR8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 7,
      title: 'Mobility',
      image: 'https://images.unsplash.com/photo-1517438984742-1262db08379e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEhJSVR8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 8,
      title: 'Dance Fitness',
      image: 'https://images.unsplash.com/photo-1517931524326-bdd55a541177?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEhJSVR8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 9,
      title: 'Stretching',
      image: 'https://images.unsplash.com/photo-1636007596622-90bf5679f5dc?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9keWJ1aWxkaW5nfGVufDB8fDB8fHww',
    },
    {
      id: 10,
      title: 'Core Workouts',
      image:'https://images.unsplash.com/photo-1610312856669-2cee66b2949c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9keWJ1aWxkaW5nfGVufDB8fDB8fHww',
    },
  ];
const Categories = () => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({item}) => (
          <View className="relative mt-3 px-1">
             <Image
              style={{ height: height * 0.25, width: width * 0.46, margin: 5, borderRadius: 10 }}
              source={{ uri: item.image }} // ✅ fixed
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