import React from "react";
import BarTopHomeScreen from "../components/BarTopHomeScreen"
import {CarouselHome} from "../components/CarouselHome";
import {Button, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ButtonsStudioContainer from "../components/ButtonsStudioContainer";
import LabelRecommended from "../components/LabelRecommended";
import {CarouselMovies} from "../components/CarouselMovies";
import {LinearGradient} from "expo-linear-gradient";


export default function HomeScreen({navigation}){

    return(
        <View  >
            <LinearGradient colors={[  "#000428", "#004e92"]} style={{height:Dimensions.get("window").height,}}>
                <BarTopHomeScreen>
                </BarTopHomeScreen>
                <CarouselHome />
                <ButtonsStudioContainer>
                    <TouchableOpacity title={"Disney"} onPress={()=>navigation.navigate("Disney")} style={styles.Home_btnStudios}>
                        <LinearGradient colors={["#30323e", "#1e1f2a"]} style={{borderRadius: 10}}>
                            <Image style={styles.Home_btnImgStudios} source={{uri:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=600&aspectRatio=1.78&format=png"}} />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity title={"Disney"} onPress={()=>navigation.navigate("Pixar")} style={styles.Home_btnStudios}>
                        <LinearGradient colors={["#30323e", "#1e1f2a"]} style={{borderRadius: 10}}>
                            <Image style={styles.Home_btnImgStudios} source={{uri:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=600&aspectRatio=1.78&format=png"}} />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity title={"Disney"} onPress={()=>navigation.navigate("Marvel")} style={styles.Home_btnStudios}>
                        <LinearGradient colors={["#30323e", "#1e1f2a"]} style={{borderRadius: 10}}>
                            <Image style={styles.Home_btnImgStudios} source={{uri:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=600&aspectRatio=1.78&format=png"}} />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity title={"Disney"} onPress={()=>navigation.navigate("StarWars")} style={styles.Home_btnStudios}>
                        <LinearGradient colors={["#30323e", "#1e1f2a"]} style={{borderRadius: 10}}>
                            <Image style={styles.Home_btnImgStudios} source={{uri:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=600&aspectRatio=1.78&format=png"}} />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity title={"Disney"} onPress={()=>navigation.navigate("NatGeo")} style={styles.Home_btnStudios}>
                        <LinearGradient colors={["#30323e", "#1e1f2a"]} style={{borderRadius: 10}}>
                            <Image style={styles.Home_btnImgStudios} source={{uri:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2EF24AA0A1E648E6D1A3B26491F516632137ED87AB22969D153316F8BD670FB5/scale?width=600&aspectRatio=1.78&format=png"}} />
                        </LinearGradient>
                    </TouchableOpacity>
                </ButtonsStudioContainer>
                <LabelRecommended text={"Recommended for you"} />
                <CarouselMovies />
            </LinearGradient>
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