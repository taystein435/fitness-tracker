import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { Image } from "expo-image";


const { width, height } = Dimensions.get("window");

const Onboarding= ({ navigation }:any) => {
  return (
    <View className="flex-1 relative">
      <Image
        className="absolute"
        style={{ width, height }}
        source="https://plus.unsplash.com/premium_photo-1661596481527-83400e477159?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIxfHxneW18ZW58MHx8MHx8fDA%3D"
        contentFit="cover"
        transition={1000}
      />

      <Text className="absolute top-96 font-bold text-white text-8xl px-4 ">
    Run. Thrive. Energize.
      </Text>

      <View className="absolute bottom-16 w-full px-4 ">
        <TouchableOpacity onPress={() => navigation.navigate("HomeNav")}>
          <View className="w-full h-14 bg-white rounded justify-center items-center">
            <Text className="text-black font-bold text-lg">Log in</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View className="w-full h-14 bg-black rounded justify-center items-center mt-3">
            <Text className="text-white font-bold text-lg">Join now</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
