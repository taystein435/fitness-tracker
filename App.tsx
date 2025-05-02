import { SafeAreaView, Text, View } from 'react-native';
import './global.css';

export default function App() {
  return (
    <SafeAreaView>
      <View className='flex items-center justify-center'>
      <Text className="text-red-600">Hey Tee</Text>
      </View>
    </SafeAreaView>
  );
}
