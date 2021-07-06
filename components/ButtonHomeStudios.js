import React, {useState} from "react";
import {ImageBackground, TouchableOpacity, View, StyleSheet, Image} from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import DisneyMovies from "../screens/DisneyMovies"

export default function ButtonHomeStudios({src, id, navigation}){
    const [studio, setStudio] = useState();

    const checkStudio = ()=>{
        if(id==1){
            setStudio("disney")
        }
    }
    return(
        <View>
                <TouchableOpacity style={styles.Home_btnStudios} onPress={navigation.navigate("Disney")}>
                    <LinearGradient colors={["#30323e", "#1e1f2a"]} style={{borderRadius: 10}}>
                        <Image style={styles.Home_btnImgStudios} source={{uri:src}} />
                    </LinearGradient>
                </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    Home_btnStudios:{
        width:70,
        height:70,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        elevation:5,
        margin:5,
        marginTop:0,
    },
    Home_btnImgStudios:{
        width:75,
        height:75,
        resizeMode: 'contain',
    }
})

