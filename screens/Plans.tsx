import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image } from 'expo-image';
import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('window');
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
    </View>
  );
};

export default Plans;
