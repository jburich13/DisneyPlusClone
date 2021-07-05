import Carousel from 'react-native-snap-carousel';
import {Dimensions, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Component} from "react";
import React from "react";
const screenSize = Dimensions.get("window").width;
export class CarouselHome extends Component {

    constructor(props){

        super(props);
        this.state = {
            activeIndex:0,
            carouselItems: [
                {
                    img:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BB9176F5C8CAF15D28E2592293F35C9532F59D9AA4218D4A631A09A77AD950FD/scale?width=1200&aspectRatio=1.78&format=jpeg",
                    text: "New Episode Every Wednesday",
                },
                {
                    img:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3F7BEDF784F6632A36EA4E8002BB11B8249F2FFC131572CF9AF735A052A3E128/scale?width=1200&aspectRatio=1.78&format=jpeg",
                    text: "",
                },
                {
                    img:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4BCEE1DF985D3A0E911B75AAA0245AE48AD5EFBA28D468C7F8146FB89F4DD1CC/scale?width=1200&aspectRatio=1.78&format=jpeg",
                    text: "",
                },
                {
                    img:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3EBA0D112F0E3724241E3FEF97E714BE821823CE01CFFF2F54884D98A2EE2436/scale?width=1200&aspectRatio=1.78&format=jpeg",
                    text: "",
                },
                {
                    img:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8CB87D9EC43361F6FD2F3513F9DEF0733CB72E383CE0D89E6174C96851F9D575/scale?width=1200&aspectRatio=1.78&format=jpeg",
                    text: "",
                },
            ]
        }
        this._renderItem = this._renderItem.bind(this);
        this.onPress = this.onPress.bind(this);
    }
    onPress() {
       console.log("Apretado")
    }

    _renderItem({item,index}){
        return (
            <View style={{
                borderRadius: 10,
                padding:0,
                marginLeft: 5,
                marginRight: 5, }}>
                <ImageBackground source={{uri:item.img}} style={styles.Home_imgCarousel}  imageStyle={{ borderRadius: 5}}>
                    <Text style={styles.Home_textCarousel}>{item.text}</Text>
                </ImageBackground>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={{flex:0.55}}>
                <View style={{flexDirection:'row', justifyContent: 'center', alignItems:"flex-start" }}>
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={screenSize}
                        itemWidth={screenSize-70}
                        renderItem={this._renderItem}
                        onSnapToItem = { index => this.setState({activeIndex:index}) } />
                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    Home_imgCarousel: {
        width:screenSize-80,
        height:200,
        resizeMode: 'cover',
        borderRadius:5,
        justifyContent:"flex-end",
    }, Home_textCarousel: {
        color:"white",
        textAlign:"left",
        marginBottom:40,
        marginLeft:15,
        fontSize:10
    },
});