import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'
import { app } from '../../services/firebaseConfig'
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

export function Registro(){
    const auth = getAuth(app);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigation = useNavigation();


    function handleSingOut(){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            navigation.navigate('Inicio');

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(email, password)
            setError(error.message)
            console.log(error)
        });
    }

    const trocaPaginaLogin = () => {
        navigation.navigate('Login');
      };

    return (
        <Animatable.View animation={'fadeInUp'} style = {estilo.container}>
            <Image
            style={estilo.shape}
            source={require("../../assets/ShapeLogin.png")}
            />
            <Image
            style={estilo.calculadoraIcon}
            source={require("../../assets/IconCalculadora2.png")}
            />
            <Text style={estilo.titulo}>REGISTRO</Text>

            <View>
                <Text style={estilo.inputText} >Email</Text>
                <TextInput
                style= {estilo.input}
                placeholder='Digite seu email...'
                value={email}
                onChangeText={text => setEmail(text)} 
                />
                <Text style={estilo.inputText} >Senha</Text>
                <TextInput
                style= {estilo.input}
                placeholder='Digite seu senha...'
                value={password}
                onChangeText={text => setPassword(text)} 
                secureTextEntry
                />
                {/* <Text style={estilo.inputText}>Senha</Text>
                <TextInput
                style= {estilo.input}
                placeholder='Digite novamente sua senha...'
                /> */}

            </View>

            <Text>{error}</Text>

            <TouchableOpacity onPress={trocaPaginaLogin}>
                <Text style= {estilo.cadastrese} >Já cadastrado? Faça Login!</Text>
            </TouchableOpacity>

      

            <TouchableOpacity onPress={handleSingOut} style={estilo.botaoLogin}>
                <Text style={estilo.textBotao}>CADASTRO</Text>
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