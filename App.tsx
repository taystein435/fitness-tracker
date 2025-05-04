/* eslint-disable import/order */
import './global.css';
import StackNav from 'navigation/StackNav';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
    <NavigationContainer>
    <StackNav/>
  </NavigationContainer>
    </PaperProvider>


  );
}
