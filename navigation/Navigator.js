import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import DisneyMovies from "../screens/DisneyMovies";
import PixarMovies from "../screens/PixarMovies"
import MarvelMovies from "../screens/MarvelMovies";
import StarWarsMovies from "../screens/StarWarsMovies";
import NatGeoMovies from "../screens/NatGeoMovies";

const Stack = createStackNavigator();
export default function Navigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Disney" component={DisneyMovies} />
                <Stack.Screen name="Pixar" component={PixarMovies} />
                <Stack.Screen name="Marvel" component={MarvelMovies} />
                <Stack.Screen name="StarWars" component={StarWarsMovies} />
                <Stack.Screen name="NatGeo" component={NatGeoMovies} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}