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
    image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlc3QlMjB3b3Jrb3V0fGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "Back",
    description: "Workouts aimed at strengthening the upper, mid, and lower back muscles, such as deadlifts, pull-ups, and rows.",
    image: "https://plus.unsplash.com/premium_photo-1664474667047-a20f4e60339a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFjayUyMHdvcmtvdXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Legs",
    description: "Exercises focusing on building strength and endurance in the lower body, including squats, lunges, and leg presses.",
    image: "https://images.unsplash.com/photo-1646495001290-39103b31873a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVnJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    title: "Arms",
    description: "Workouts that focus on the biceps, triceps, and forearms, including exercises like bicep curls, tricep dips, and hammer curls.",
    image: "https://plus.unsplash.com/premium_photo-1664298084551-277444c16b1f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hlc3QlMjB3b3Jrb3V0fGVufDB8fDB8fHww",
  },
  {
    id: 5,
    title: "Shoulders",
    description: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlc3QlMjB3b3Jrb3V0fGVufDB8fDB8fHww",
    image: "https://images.unsplash.com/photo-1646495001290-39103b31873a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVnJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    title: "Abs",
    description: "Core workouts that strengthen and tone the abdominal muscles, including planks, crunches, and leg raises.",
    image: "https://images.unsplash.com/photo-1614396648745-d5de9c9e037e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hlc3QlMjB3b3Jrb3V0fGVufDB8fDB8fHww",
  },
  {
    id: 7,
    title: "Glutes",
    description: "Exercises focused on strengthening and shaping the gluteal muscles, such as hip thrusts, glute bridges, and squats.",
    image: "https://images.unsplash.com/photo-1571388072750-31a921b3d900?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoZXN0JTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D"
  },{
    id: 8,
    title: "Calves",
    description: "Workouts targeting the calf muscles, including calf raises, jump rope, and stair climbing.",
    image: "https://images.unsplash.com/photo-1646495001290-39103b31873a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVnJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 9,
    title: "Full Body",
    description: "Comprehensive workouts that target all major muscle groups in one session, such as circuit training or CrossFit.",
    image: "https://plus.unsplash.com/premium_photo-1661383825798-03db9a0151f2?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVnJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D",
  },{
    id: 10,
    title: "Cardio Full Body",
    description: "High-intensity cardio workouts that engage the entire body, such as running, rowing, and cycling.",
    image: "https://plus.unsplash.com/premium_photo-1682093056640-db1f4d498bd2?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoZXN0JTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D",
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
            source="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltfGVufDB8fDB8fHww"
            contentFit="cover"
            transition={1000}
          />

          <View className="absolute top-20  w-2/3  flex-row items-center justify-between ">
            <MaterialIcons name="arrow-back" size={30} color="white" />
            <Text className="text-4xl font-bold text-white ">Training</Text>
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
                         style={{ height: height * 0.25, width: width * 0.95, margin: 5, borderRadius: 10 }}
                         source={{ uri: item.image }} 
                         contentFit="cover"
                         transition={1000}
                       />       
                          <Text className="absolute bottom-24 font-bold text-white text-3xl px-4">
                           {item.title}
                          </Text>
                          <Text className="absolute bottom-8 font-bold text-white text-sm px-4">
                           {item.description}
                          </Text>
                            </View>
                      )}
                    />
          </View>
    </View>
  );
};

export default Workout;
