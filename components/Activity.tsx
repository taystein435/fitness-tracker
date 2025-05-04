import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import { Image } from "expo-image";
const { width, height } = Dimensions.get("window");

  const data = [
    {
      id: 1,
      title: 'Meals',
      image: 'https://images.unsplash.com/photo-1564671165093-20688ff1fffa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lYWx8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 2,
      title: 'Find a Gym',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fHww',
    },
    {
      id: 3,
      title: 'Trainer',
      image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGd5bXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 4,
      title: 'Activity',
      image: 'https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3ltfGVufDB8fDB8fHww',
    },
    {
      id: 5,
      title: 'Goals',
      image: 'https://plus.unsplash.com/premium_photo-1726761933972-04234e1303cd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VpZ2h0JTIwc2NsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    
  ];
  
const Activity = () => {
  return (
       <View>
         <FlatList
           data={data}
         horizontal
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
};

export default Activity;