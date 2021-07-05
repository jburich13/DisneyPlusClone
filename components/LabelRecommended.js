import React from "react";
import {Text, View,StyleSheet} from "react-native";


export default function LabelRecommended({text}){
    return(
        <View>
            <Text style={styles.Global_labelRecommendedText}>
                {text}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    Global_labelRecommendedText:{
        justifyContent:"flex-start",
        alignItems:"flex-start",
        fontSize:15,
        color: "white",
        marginLeft:10,
    }
})
