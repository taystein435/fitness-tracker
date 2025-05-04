import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image } from 'expo-image';
const Profile = () => {
  return (
    <SafeAreaView>
      <View className='flex-row  p-8 items-center justify-between w-2/3'>
        <MaterialIcons name="arrow-back" size={24} color="black" />
        <Text className='text-2xl font-bold'>Profile</Text>
      </View>
      <View className=''>
      <Image 
        style={{ height: 100, width: 100, borderRadius: 50 ,display:'flex',alignSelf:"center"}}
        source="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&auto=format&fit=crop&q=60"
        contentFit="cover"
      />
          <Text className='text-xl mx-auto mt-3'>Taiwo Babatunde</Text>
      </View>

    </SafeAreaView>
  );
};

export default Profile;
