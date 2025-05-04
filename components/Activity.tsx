import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import { Image } from "expo-image";
const { width, height } = Dimensions.get("window");

  const data = [
    {
      id: 1,
      title: 'Morning Run',
      image: 'https://images.unsplash.com/photo-1599058917212-6a46b88f1032?auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 2,
      title: 'Upper Body Strength',
      image: 'https://images.unsplash.com/photo-1600180758890-6dc87f4a316b?auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 3,
      title: 'Sunrise Yoga',
      image: 'https://images.unsplash.com/photo-1583454110551-21d7f7aaf9b2?auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 4,
      title: 'HIIT Blast',
      image: 'https://images.unsplash.com/photo-1613382286624-06ed3b8de25c?auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 5,
      title: 'Core Crusher',
      image: 'https://images.unsplash.com/photo-1618571541575-85faed90c017?auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 6,
      title: 'Evening Stretch',
      image: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 7,
      title: 'Full Body Burn',
      image: 'https://images.unsplash.com/photo-1623776053492-d7c9c6d55c46?auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 8,
      title: 'Mobility Flow',
      image: 'https://images.unsplash.com/photo-1632990388166-9c234f4dc8d3?auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 9,
      title: 'Dance Cardio',
      image: 'https://images.unsplash.com/photo-1630541138574-3e30fbc2b54c?auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 10,
      title: 'Leg Day',
      image: 'https://images.unsplash.com/photo-1583454110551-2d51a9f37e42?auto=format&fit=crop&w=600&q=60',
    },
  ];
  
const Activity = () => {
  return (
    <View>
      <FlatList
        horizontal
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <View className=" ">
            <View
              style={{
                height: height * 0.25,
                width: width * 0.94,
                margin: 5,
                borderRadius: 10,
              }}
            >
              <Image
                style={{
                  height: 50,
                  width: 50,
                  display: "flex",
                  alignSelf: "flex-end",
                }}
                source={item.image}
                contentFit="contain"
                transition={1000}
              />
              <View
                style={{

                  alignItems: "center",
                  justifyContent: "center",
                  
                }}
              >
                <Text className=" font-bold text-white text-5xl px-4">
                  {item.title}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Activity;