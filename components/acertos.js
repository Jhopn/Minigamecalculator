import React from "react";
import {Text, Pressable, StyleSheet} from 'react-native'

export function Acertos({data, remove}){
        return <Pressable style={estilos.pontuacao} onLongPress={remove}><Text style={estilos.txt} >{data.nome}</Text></Pressable>;

}
const estilos = StyleSheet.create({
    pontuacao: {
        margin: 10,
        paddingHorizontal: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt:{
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    }
})
