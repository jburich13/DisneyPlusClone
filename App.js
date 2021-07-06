
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';

import HomeScreen from "./screens/HomeScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DisneyMovies from "./screens/DisneyMovies";


const Stack = createStackNavigator();

export default function App() {
  return (
          <NavigationContainer>
              <Stack.Navigator screenOptions={{
                  headerShown: false
              }}>
                  <Stack.Screen name="Home" component={HomeScreen} />
                  <Stack.Screen name="Disney" component={DisneyMovies} />
              </Stack.Navigator>
          </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
