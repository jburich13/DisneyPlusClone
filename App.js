
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import HomeScreen from "./screens/HomeScreen"
import "react-native-gesture-handler"



export default function App() {
  return (
      <View style={styles.container}>
          <LinearGradient colors={[  "#000428", "#004e92"]}>
              <HomeScreen></HomeScreen>
          </LinearGradient>
          <StatusBar style={"auto"} barStyle='dark-content' />
      </View>
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
