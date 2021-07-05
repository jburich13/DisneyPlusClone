import React from "react";
import {View, StyleSheet, Dimensions} from "react-native";

import {CarouselMovies} from "./CarouselMovies";


export default function Recomendations(){
    return(
        <View style={styles.Recomendations_movies}>

        </View>
    )
}

const styles = StyleSheet.create({
    Recomendations_movies:{
        backgroundColor:"red",
        width:Dimensions.get("window").width,
        flexDirection:"row",
        flex:1,
        justifyContent:"flex-start",
        alignItems:"flex-start",
        marginTop:10,
    }
})