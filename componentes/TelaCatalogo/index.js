import React from "react";
import { View, Text, ScrollView, Image } from "react-native-web";
import estilos from "./estilos";

export default function TelaCatalogo () {
    return (
        <ScrollView>
            <View style={estilos.view}>
                <Text style={estilos.Ttitulo}>Nossos vinhos</Text>
                <Text style={estilos.Ttexto}>Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.</Text>
            </View>

            <View style={estilos.card}>
                <Image source={require('../../assets/vinho-branco.png')} style={estilos.img}/>
                <Text style={estilos.texto}>Chatigny Chardonna</Text>
                <Text style={estilos.texto2}>"Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto."</Text>
            </View>

            <View style={estilos.card}>
                <Image source={require('../../assets/vinho-rose.png')} style={estilos.img}/>
                <Text style={estilos.texto}>Concha y Toro Exportacion</Text>
                <Text style={estilos.texto2}>"Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos."</Text>
            </View>

            <View style={estilos.card}>
                <Image source={require('../../assets/vinho-seco.png')} style={estilos.img}/>
                <Text style={estilos.texto}>Portada Winemaker's</Text>
                <Text style={estilos.texto2}>"Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi.Perfeito com queijo parmesão e carnes assadas ou grelhadas.</Text>
            </View>

            <View style={estilos.card}>
                <Image source={require('../../assets/vinho-especial.png')} style={estilos.img}/>
                <Text style={estilos.texto}>Elvio Cogno Ravera Barolo</Text>
                <Text style={estilos.texto2}>"Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é vermelho granada e é perfeito com carnes vermelhas e molhos encorpados.</Text>
            </View>

        </ScrollView>
    );
}