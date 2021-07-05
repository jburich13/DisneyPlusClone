import React from "react";
import BarTopHomeScreen from "../components/BarTopHomeScreen"
import {CarouselHome} from "../components/CarouselHome";
import ButtonHomeStudios from "../components/ButtonHomeStudios";
import {View} from "react-native";
import ButtonsStudioContainer from "../components/ButtonsStudioContainer";
import LabelRecommended from "../components/LabelRecommended";
import Recomendations from "../components/Recomendations";
import {CarouselMovies} from "../components/CarouselMovies";


export default function HomeScreen(){

    return(
        <View>
            <BarTopHomeScreen>
            </BarTopHomeScreen>
            <CarouselHome>
            </CarouselHome>
            <ButtonsStudioContainer>
                <ButtonHomeStudios  src={"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=600&aspectRatio=1.78&format=png"} id={1} />
                <ButtonHomeStudios src={"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=600&aspectRatio=1.78&format=png"}>
                </ButtonHomeStudios>
                <ButtonHomeStudios src={"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=600&aspectRatio=1.78&format=png"}>
                </ButtonHomeStudios>
                <ButtonHomeStudios src={"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=600&aspectRatio=1.78&format=png"}>
                </ButtonHomeStudios>
                <ButtonHomeStudios src={"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2EF24AA0A1E648E6D1A3B26491F516632137ED87AB22969D153316F8BD670FB5/scale?width=600&aspectRatio=1.78&format=png"}>
                </ButtonHomeStudios>
            </ButtonsStudioContainer>
            <LabelRecommended text={"Recommended for you"}></LabelRecommended>
            <CarouselMovies></CarouselMovies>
        </View>
    )

}
