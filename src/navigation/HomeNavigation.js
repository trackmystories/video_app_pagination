import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import {enableScreens} from 'react-native-screens';
enableScreens();

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          title: 'Traffic App',
          headerHideShadow: true,
          gestureEnabled: false,
        }}
        component={Home}
      />
    </Stack.Navigator>
  );
}
