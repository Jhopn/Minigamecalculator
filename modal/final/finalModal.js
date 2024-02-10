import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
// import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { db } from '../../services/firebaseConfig';
import { addDoc, collection } from "firebase/firestore"; 

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

                    <View style={styles.botaoView} >
                        <TouchableOpacity style={styles.botaoSalvar} onPress={ async () => {
                                    try {
                                        const docRef = await addDoc(collection(db, "rank"), {
                                          nome: texto,
                                          acertos: acertosRank,
                                          dificuldade: nivelDificuldade
                                        });

                                        console.log("Document written with ID: ", docRef.id);
                                        modalFinalOff(false)
                                        alert("Salvo com sucesso!")

                                      } catch (e) {
                                        console.error("Error adding document: ", e);
                                      }
                                }}>
                                    <Text style={styles.textBotao}>Salvar</Text>
                        </TouchableOpacity>

                    </View>
                    
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
        backgroundColor: '#CFE0D4',
        textAlign: 'center',
        borderRadius: 10,
    },
    botaoView:{
        marginTop: 10,
        marginHorizontal: 70, 
    },
    botaoSalvar: {
        width: 60,
        backgroundColor: '#0DE000',
        borderRadius: 10,
    },
    textBotao:{
        textAlign: 'center',
        padding: 10,
        borderRadius: 10,
    },

})