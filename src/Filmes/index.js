import React, {useState} from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import Detalhes from "../Modal";

export default function Filmes({ data }) {
const [abrirModal, setAbrirModal] = useState(false);

    //data:  do meu flatlist
    return (
        <View>

            <View style={styles.card}>
                <Text style={styles.titulo}>{data.nome}</Text>

                <Image
                    source={{ uri: data.foto }}
                    style={styles.capa} />

                    <View style={styles.areaBtn}>
                        <TouchableOpacity  style={styles.btn} onPress={ () => setAbrirModal(true)}>
                            <Text style={styles.btnTexto}>LEIA MAIS</Text>
                        </TouchableOpacity>
                    </View>
            </View>

            <Modal animationType="slide" visible={abrirModal} transparent={true}>
               <Detalhes filmes={data} voltar={ () => setAbrirModal(false)}/>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({

    card: {
        backgroundColor: '#fff',
        margin: 15,
        elevation: 2 //efeito de sombra
    },
    capa: {
    height: 250,
    zIndex: 2

    },
    titulo: {
        padding: 15,
        fontSize: 18,
    },

    areaBtn:{
    alignItems: 'flex-end',
    marginTop: -40,
    zIndex: 9
    },

    btn:{
        width: 100,
        backgroundColor: '#09a6ff',
        opacity: 1,
        padding: 8,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
    },
    
    btnTexto:{
       color: '#ffff',
       textAlign: 'center'  
    }
});