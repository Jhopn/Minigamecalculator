import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';

export function FinalModal({modalFinalOff, acertosRank, nivelDificuldade}){
        const [texto, setTexto] = useState('');

      
        const handleChangeText = (novoTexto) => {
          setTexto(novoTexto);
        };

    return(
        <View style={styles.container}>

            <View style={styles.content}>
                <Text>O tempo acabouuuu!!!</Text>
                <Text>Sua quantidade de acertos foi: {acertosRank}🎈</Text>

                <View>
                   <TextInput 
                   style={styles.input}
                   placeholder='Digite o seu Nome...'
                   value={texto}
                   onChangeText={handleChangeText}
                   />

                    <TouchableOpacity onPress={ async () => {
                        if( texto !== ''){
                            alert("Digite um nome!!");
                        }
                        let salva = texto + ' - ' + acertosRank + ' - ' + nivelDificuldade
                        salva = salva.toString()
                        console.log(salva)

                        const keys = await AsyncStorage.getAllKeys(); // Obtem as chaves
                        const quantidadeItens = keys.length; // Pega a quantidade
                        let KEY = quantidadeItens + 1 // A chave soma com a quantidade existente para não repetir
                        KEY = KEY.toString()

                        await AsyncStorage.setItem(KEY, salva);
                        modalFinalOff(false)
                        alert("Salvo com sucesso!")
                    }}>
                        <Text>Salvar</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(24,24,24, 0.6)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content:{
        backgroundColor: 'white',
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        borderRadius: 15,
    },
    input:{
        margin: 5,
        width: 200,
        height: 40,
        backgroundColor: '#0DE000',
        textAlign: 'center',
        borderRadius: 10,
    },

})