/* eslint-disable import/order */
import './global.css';
import StackNav from 'navigation/StackNav';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
    <StackNav/>
  </NavigationContainer>

  );
}
