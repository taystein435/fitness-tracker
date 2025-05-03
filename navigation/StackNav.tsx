import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNav from "./HomeNav";
const Stack = createNativeStackNavigator();
export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeNav"
        component={HomeNav}
        options={{
          headerShown: false,
          
        }}
      />
    </Stack.Navigator>
  );
}
