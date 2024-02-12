import {View, Text, StyleSheet, TouchableOpacity, TextInput, Alert} from 'react-native'
import React, { useState } from 'react';
import { db } from '../../services/firebaseConfig';
import { addDoc, collection } from "firebase/firestore"; 

export function FinalModal({modalFinalOff, acertosRank, nivelDificuldade}){
        const [texto, setTexto] = useState('');
        const [textoAlert, setTextoAlert] = useState("");

        const handleChangeText = (novoTexto) => {
          setTexto(novoTexto);
        };

    return(
        <View style={styles.container}>

            <View style={styles.content}>
                <Text>O tempo acabouuuu!!!</Text>
                <Text>Sua quantidade de acertos foi: {acertosRank}🎈</Text>

                <Text style={styles.txt}>Digite um nome para salvar sua pontuação!</Text>
                <View>
                   <TextInput 
                   style={styles.input}
                   placeholder='Digite o seu Nome...'
                   value={texto}
                   onChangeText={handleChangeText}
                   />
                
                <Text style={styles.txtAlert}>{textoAlert}</Text>

                    <View style={styles.botaoView} >
                        <TouchableOpacity style={styles.botoesFecha} onPress={ ()=> {modalFinalOff(false)}}>
                                    <Text style={styles.textBotaoFecha}>Não Salvar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botaoSalvar} onPress={ async () => {
                            if( texto !== '' && texto !== " " && texto !== null){
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

                            } else{
                                setTextoAlert('ESCREVA UM NOME!!')
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
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        
    },
    botaoSalvar: {
        width: 60,
        backgroundColor: '#0DE000',
        borderRadius: 10,
    },
    textBotao:{
        textAlign: 'center',
        padding: 10,
    },
    botoesFecha: {
        backgroundColor: '#BD2A13',
        borderRadius: 10,
        marginRight: 10,
    },
    textBotaoFecha:{
        textAlign: 'center',
        padding: 10,
        color: 'white',
    },
    txt:{
        fontWeight: 'bold',
        margin: 10,
    },
    txtAlert:{
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'red',
    }

})