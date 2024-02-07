import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'
import { app } from '../../services/firebaseConfig';
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";

export function Login(){
    const auth = getAuth(app);
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    function handleSingIn(){
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            navigation.navigate('Inicio');

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(error.message)
            console.log(error)
        });
    }

    const trocaPaginaCad = () => {
        navigation.navigate('Registro');
    }


    return (
        
        <Animatable.View animation={'fadeInUp'} style = {estilo.container}>
            <Image
            style={estilo.shape}
            source={require("../../assets/ShapeLogin.png")}
            />
            <Image
            style={estilo.calculadoraIcon}
            source={require("../../assets/IconCalculadora.png")}
            />
            <Text style={estilo.titulo}>LOGIN</Text>

            <View>
                <Text style={estilo.inputText} >Email</Text>
                <TextInput
                style= {estilo.input}
                placeholder='Digite seu email...'
                onChangeText={text => setEmail(text)} 
                />
                <Text style={estilo.inputText}>Senha</Text>
                <TextInput
                style= {estilo.input}
                placeholder='Digite sua senha...'
                onChangeText={text => setPassword(text)} 
                secureTextEntry
                />

            </View>

            <Text>{error}</Text>

            <TouchableOpacity 
            onPress={trocaPaginaCad}>
                <Text style= {estilo.cadastrese} >Ainda não cadastrado? Cadastre-se</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={handleSingIn} style={estilo.botaoLogin}>
                <Text style={estilo.textBotao}>LOGIN</Text>
            </TouchableOpacity>


        </Animatable.View>
    )
}

const estilo = StyleSheet.create({
    container: {
        marginTop: 50,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
    },
    inputText:{
        color: '#8791FA',
        fontWeight: 'bold',
        marginTop: 25,
    },
    input: {
        padding: 5,
        paddingHorizontal: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    calculadoraIcon:{
        width: 140,
        height: 140,
    },
    shape:{
        width: 800,
        height: 800,
        zIndex: 0,
        position: 'absolute',
        top: -500,
    },
    botaoLogin:{
        marginTop: 25,
        backgroundColor: '#8791FA',
        alignItems: 'center',
        justifyContent: 'center',
        width: 180,
        height: 50,
        borderRadius: 15,
    },
    textBotao:{
        color: 'white'
    },
    cadastrese:{
        marginTop: 25,
    }


});