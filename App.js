import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './src/navigation/HomeNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}
