import React from "react";
import {Dimensions, Image, ImageBackground, View} from "react-native";


export default function MarvelMovies(){

    return(
        <View>
            <ImageBackground style={{width:Dimensions.get("window").width, height:Dimensions.get("window").height,position:"absolute",resizeMode:"cover"}} source={{uri:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/95A7C4D6CB024A2089A55477B6B874DC97EB725C319988900908BEA970C95635/scale?aspectRatio=1.78&format=jpeg"}} />
            <View style={{justifyContent:"center", alignItems:"center",flex:0}}>
                <Image style={{width:400, height:150,justifyContent:"center", alignItems:"center"}} source={{uri:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=600&aspectRatio=1.78&format=png"}} />
            </View>
        </View>
    )
}