import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image } from 'expo-image';
import React from 'react';
import { View, Text, Dimensions, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('window');
const data= [
  {
    id: 1,
    title: "Vegan",
    description: "Excludes all animal products including meat, dairy, and eggs. Focuses on plant-based foods.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Vegetarian",
    description: "Excludes meat and fish but includes dairy and eggs. Focuses on fruits, vegetables, grains, and legumes.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Keto",
    description: "Low-carb, high-fat diet that promotes fat burning through ketosis. Limits sugar and carbs significantly.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Paleo",
    description: "Focuses on whole foods like lean meats, fruits, vegetables, nuts, and seeds. Avoids processed foods and grains.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    title: "Mediterranean",
    description: "Rich in fruits, vegetables, whole grains, fish, and olive oil. Inspired by traditional eating habits of Mediterranean countries.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    title: "Low-Carb",
    description: "Limits carbohydrate intake and emphasizes protein and healthy fats for weight control and energy.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    title: "Gluten-Free",
    description: "Excludes gluten-containing grains such as wheat, barley, and rye. Designed for those with gluten sensitivity or celiac disease.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 8,
    title: "Whole30",
    description: "30-day diet that eliminates sugar, alcohol, grains, legumes, soy, and dairy. Focuses on whole foods.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 9,
    title: "Intermittent Fasting",
    description: "Cycles between periods of eating and fasting. Common patterns include 16:8 or 5:2 schedules.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&auto=format&fit=crop&q=60",
  },
  {
    id: 10,
    title: "Flexitarian",
    description: "Primarily plant-based but allows occasional meat or animal product consumption.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&auto=format&fit=crop&q=60",
  },
];

const Plans = () => {
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
            <Text className="text-4xl font-bold text-white ">Plans</Text>
          </View>
        </View>
      </View>
         <View>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => (
                <View className="flex-row mt-6 px-1">
                   <Image
                    style={{ height: height * 0.1, width: width * 0.25, margin: 6, borderRadius: 10 }}
                    source={{ uri: item.image }}
                    contentFit="cover"
                    transition={1000}
                  />
                  <View >
                  <Text className=" font-bold text-black text-xl ">
                   {item.title}
                  </Text> 
                  <Text className="  text-black text-sm  w-3/6">
                   {item.description}
                  </Text>
                  </View>
              
                  </View>
              )}
            />
          </View>
    </View>
  );
};

export default Plans;
