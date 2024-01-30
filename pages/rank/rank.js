import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useState, useEffect} from 'react';
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Acertos} from '../../components/acertos'

export function Rank(){
    const [szAcertos,setAcertos] = useState();
    const focused = useIsFocused();
    const acertosString = []

    // const { getItem } = useStorage();


    useEffect(
        () =>{
            async function carregaRank(){
                const keys = await AsyncStorage.getAllKeys(); // Obtem as chaves
                const quantidadeItens = keys.length; // Pega a quantidade
                
                for(let i = 0; i< quantidadeItens; i++){
                    acertosString.push(await AsyncStorage.getItem(keys[i]));
                }
                setAcertos(acertosString)
            }
            carregaRank();

        }, [focused]
    )

    async function deletaRank(item){
        const keys = await AsyncStorage.getAllKeys(); // Obtem as chaves

        for (const chave of keys) {
            const valor = await AsyncStorage.getItem(chave);
            if (valor === item ) {
              await AsyncStorage.removeItem(chave)

              alert('O save selecionado foi apagado!');
              const keys = await AsyncStorage.getAllKeys(); // Obtem as chaves
              const quantidadeItens = keys.length; // Pega a quantidade
              
              for(let i = 0; i< quantidadeItens; i++){
                  acertosString.push(await AsyncStorage.getItem(keys[i]));
              }
              setAcertos(acertosString)
            }
        }
    }

    return(

        <View>
            <View style={estilos.container}>
                <Text style={estilos.main}>Nome 🎮</Text>
                <Text style={estilos.main}>Acertos 🎈</Text>
                <Text style={estilos.main}>Dificuldade 🕗</Text>
            </View>

            <FlatList
            style={estilos.flat}
            data={szAcertos}
            keyExtractor={ (item) => String(item)}
            renderItem={({ item }) => (
                <Acertos  data={{nome: item}} remove={() => deletaRank(item)} />
              )}
            /> 
        </View>

    );
}

const estilos = StyleSheet.create({
    container:{
        margin: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8791FA',
        height: 40,
        borderRadius: 10,
    },
    main:{
        marginHorizontal: 10,
        color: 'white',
        fontSize: 18,
    },
    flat: {
        flexDirection: 'column',
        textAlign: 'center',
        backgroundColor: '#8791FA',
        borderRadius: 10,
        marginHorizontal: 20, 
        padding: 15,
    }
    

});