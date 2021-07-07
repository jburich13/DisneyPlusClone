import React from "react";
import {Dimensions, Image, ImageBackground, View} from "react-native";


export default function NatGeoMovies(){
    return(
        <View>
            <ImageBackground style={{width:Dimensions.get("window").width, height:Dimensions.get("window").height,position:"absolute",resizeMode:"contain"}} source={{uri:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CA876AA050B35F391EEE1A00D21147708DC1D34B2546D866769403CBFFDAFF43/scale?aspectRatio=1.78&format=jpeg"}} />
            <View style={{justifyContent:"center", alignItems:"center",flex:0}}>
                <Image style={{width:300, height:150,justifyContent:"center", alignItems:"center"}} source={{uri:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B794A4647CDE36B4D8742BB6B3FDAEC940351C90F2D7D15E803B2376021C3826/scale?width=600"}} />
            </View>
        </View>
    )
}