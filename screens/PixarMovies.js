import React from "react";
import {Dimensions, Image, ImageBackground, View} from "react-native";



export default function PixarMovies(){
return(
    <View style={{backgroundColor:"#88a6d3", height:Dimensions.get("window").height}}>
            <View style={{justifyContent:"center", alignItems:"center",flex:0}}>
                <Image style={{width:300, height:150,}}  source={{uri:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=600&aspectRatio=1.78&format=png"}}/>
            </View>
    </View>
)
}