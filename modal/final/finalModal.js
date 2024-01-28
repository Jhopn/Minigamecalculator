import {View, Text, StyleSheet, TouchableOpacity, TextInput, Alert} from 'react-native'
// import useStorage from '../../hook/useStorage'
import AsyncStorage from '@react-native-async-storage/async-storage';

export function FinalModal({modalFinalOff, acertosRank}){
    let texto

    // const {saveItem} = useStorage();

    const handleChange = (event) => {
        texto = event.target.value
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
                   onChange={handleChange}
                   />

                    <TouchableOpacity onPress={ async  () => {
                        let salva = texto + ' - ' + acertosRank
                        salva = salva.toString()
                        console.log(salva)
                        await AsyncStorage.setItem('@ACERTS', salva);
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
    }

})