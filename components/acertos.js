import React from "react";
import { Text, Pressable, StyleSheet } from 'react-native';

export function Acertos({data}){
    return <Pressable style={estilos.pontuacao}><Text style={estilos.txt} >{data.nome}</Text></Pressable>;
}

const estilos = StyleSheet.create({
    pontuacao: {
        margin: 10,
        paddingHorizontal: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt:{
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
        paddingVertical: 3,
    }
})
