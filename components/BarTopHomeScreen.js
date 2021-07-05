import React, {useState} from "react";
import {View, Text, Image, StyleSheet, Dimensions} from "react-native";




export default function BarTopHomeScreen(){


    return(
        <View style={styles.containerImgLogo}>
            <Image
                source={{uri:"https://logodownload.org/wp-content/uploads/2020/11/disney-plus-logo-5.png"}}
                style={styles.Home_imgLogo}
            />
            <Image
                source={{uri:"https://www.materialui.co/materialIcons/hardware/cast_white_576x576.png"}}
                style={styles.Home_imgCast}
            />
        </View>
    )
}
const styles = StyleSheet.create(
    {
    containerImgLogo:{
      width: Dimensions.get("window").width,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-start"
    },
    Home_imgLogo:{
        width: 90,
        height: 100,
        resizeMode: 'contain',
        marginTop:5,
        marginLeft:164,
    },
    Home_imgCast:{
        width: 25,
        height: 30,
        resizeMode: 'contain',
        marginTop:40,
        marginRight:15
    }
});


