import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image } from 'expo-image';
import React from 'react';
import { View, Text, Dimensions, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('window');
const data = [
  {
    id: 1,
    title: "Chest",
    description: "Exercises that focus on strengthening and toning the chest muscles, such as push-ups, bench presses, and chest flies.",
    image: "https://images.unsplash.com/photo-1578725682288-d52412b28259?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Back",
    description: "Workouts aimed at strengthening the upper, mid, and lower back muscles, such as deadlifts, pull-ups, and rows.",
    image: "https://images.unsplash.com/photo-1518734121977-8a8ac0c65c9a?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Legs",
    description: "Exercises focusing on building strength and endurance in the lower body, including squats, lunges, and leg presses.",
    image: "https://images.unsplash.com/photo-1574855372581-b92dbb5c3b79?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Arms",
    description: "Workouts that focus on the biceps, triceps, and forearms, including exercises like bicep curls, tricep dips, and hammer curls.",
    image: "https://images.unsplash.com/photo-1518300713131-cd4383e35d12?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    title: "Shoulders",
    description: "Exercises that target the deltoids and traps, such as overhead presses, lateral raises, and front raises.",
    image: "https://images.unsplash.com/photo-1564518092-3b929d5168e9?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    title: "Abs",
    description: "Core workouts that strengthen and tone the abdominal muscles, including planks, crunches, and leg raises.",
    image: "https://images.unsplash.com/photo-1576559839335-bf2ea0754213?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    title: "Glutes",
    description: "Exercises focused on strengthening and shaping the gluteal muscles, such as hip thrusts, glute bridges, and squats.",
    image: "https://images.unsplash.com/photo-1575934281377-c9f915dcfd22?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 8,
    title: "Calves",
    description: "Workouts targeting the calf muscles, including calf raises, jump rope, and stair climbing.",
    image: "https://images.unsplash.com/photo-1578852227807-bd94ed3d4556?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 9,
    title: "Full Body",
    description: "Comprehensive workouts that target all major muscle groups in one session, such as circuit training or CrossFit.",
    image: "https://images.unsplash.com/photo-1590543050517-7e8859b9a568?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 10,
    title: "Cardio Full Body",
    description: "High-intensity cardio workouts that engage the entire body, such as running, rowing, and cycling.",
    image: "https://images.unsplash.com/photo-1603134561912-c473b689a975?w=1200&auto=format&fit=crop&q=60",
  },
];


const Workout = () => {
  return (
    <View>
      <View>
        <View className=" relative">
          <Image
            className="absolute  "
            style={{ width, height: height * 0.25, borderRadius: 5, padding: 7 }}
            source="https://images.unsplash.com/photo-1497888329096-51c27beff665?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lYWx8ZW58MHx8MHx8fDA%3D"
            contentFit="cover"
            transition={1000}
          />

          <View className="absolute top-10  w-2/3  flex-row items-center justify-between p-8">
            <MaterialIcons name="arrow-back" size={30} color="white" />
            <Text className="text-4xl font-bold text-white ">Workout</Text>
          </View>
        </View>
      </View>
         <View>
            <FlatList
                      data={data}
                      keyExtractor={(item) => item.id.toString()}
                      renderItem={({item}) => (
                        <View className="relative mt-3 px-1">
                           <Image
                         style={{ height: height * 0.25, width: width * 0.4, margin: 5, borderRadius: 10 }}
                         source={{ uri: item.image }} // ✅ fixed
                         contentFit="cover"
                         transition={1000}
                       />       
                          <Text className="absolute bottom-24 font-bold text-white text-3xl px-4">
                           {item.title}
                          </Text>
                          <Text className="absolute bottom-8 font-bold text-white text-sm px-4">
                           {item.description}
                          </Text>  </View>
                      )}
                    />
          </View>
    </View>
  );
};

export default Workout;
