import {View, ScrollView, FlatList} from 'react-native';
import TelaCatalago from './index';
import estilos from './estilos';

export default function vinho(vinho){
    const vinho = [
        {
            id:"1",
            titulo:"Chatigny Chardonnay",
            texto:"Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.",
            imagem:require("../../assets/vinho-branco.png")
        },

        {
            id:"2",
            titulo:"Concha y Toro Exportacion",
            texto:"Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.",
            imagem:require("../../assets/vinho-especial.png"),
        },

        {
            id:"3",
            titulo:"Portada Winemaker's",
            texto:"Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi.Perfeito com queijo parmesão e carnes assadas ou grelhadas.",
            imagem:require("../../assets/vinho-rose.png"),
        },

        {
            id:"4",
            titulo:"Elvio Cogno Ravera Barolo",
            texto:"Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é vermelho granada e é perfeito com carnes vermelhas e molhos encorpados.",
            imagem:require("../../assets/vinho-seco.png"),
        },


    ];
    return(
        <ScrollView>
        <View style={estilos.container}>
            <FlatList
                data={vinho}
                renderItem={({item})=>
                <TelaCatalago 
                    titulo={item.titulo}
                    texto={item.texto}
                    imagem={item.imagem}
                />
                }
                keyExtractor={item => item.id}
            />
        </View>
        </ScrollView>
    )
};