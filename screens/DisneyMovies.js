import React from "react";
import {Dimensions, Image, ImageBackground, Text, View} from "react-native";
import { LinearGradient } from 'expo-linear-gradient'

export default function DisneyMovies(){
    return(
        <View >
            <LinearGradient colors={["#000428", "#004e92"]}>
                <ImageBackground style={{width:Dimensions.get("window").width, height:Dimensions.get("window").height,position:"absolute"}} source={{uri:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D25D3AD359815E66D69484199DBEE7E957E9C18955665C4E055E5BF5FA950467/scale?aspectRatio=1.78&format=jpeg"}} />
                <View style={{justifyContent:"center", alignItems:"center",flex:0}}>
                    <Image style={{width:300, height:150,}} source={{uri:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A596DE839393E0F3DB258AC5B4F45CDB4C03257DAA4FF87F9952ADBCB28E2905/scale?width=600"}} />
                </View>
            </LinearGradient>
        </View>
    )
}