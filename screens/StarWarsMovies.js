import React from "react";
import {Dimensions, Image, ImageBackground, View} from "react-native";


export default function StarWarsMovies(){
    return(
        <View>
            <ImageBackground style={{width:Dimensions.get("window").width, height:Dimensions.get("window").height,position:"absolute",resizeMode:"contain"}} source={{uri:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A460D129719ADC85F6188F1E52255035ACF7EFF8C500DA87D702B20179633F70/scale?aspectRatio=1.78&format=jpeg"}} />
            <View style={{justifyContent:"center", alignItems:"center",flex:0}}>
                <Image style={{width:250, height:150,justifyContent:"center", alignItems:"center"}} source={{uri:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/04BB6D7A8E43E18DB3C30E6D9916DE7F44F38C12A7B3ED6B99EDD96DF8FF7D68/scale?width=600"}} />
            </View>
        </View>
    )


}