import  React from 'react';
import { View, Text, ImageBackground} from 'react-native';

import imgcapa from '../../assets/capa.jpg'
import estilos from './estilos';

export default function TelaInicio () {
    return(
        <ImageBackground
            blurRadius={ 10 }
            style={ estilos.container }
            source= { imgcapa }
            >
        <View>
            <Text style={ estilos.titulo}> Adega Preferida </Text>
            <Text style={ estilos.subtitulo}> Aqui você encontra os melhores e mais saborosos vinhos. </Text>
        </View>
        </ImageBackground>
    )
}