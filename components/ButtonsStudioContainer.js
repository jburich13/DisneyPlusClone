import React from "react";
import {View, StyleSheet} from "react-native";



export default function ButtonsStudioContainer (buttons){
    return(
        <View style={styles.Home_btnStudioContainer}>
            {buttons.children}
        </View>
    )
}

const styles = StyleSheet.create({
    Home_btnStudioContainer:{
        flex:0,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"flex-start",
    }
})