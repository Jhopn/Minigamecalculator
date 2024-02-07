import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export function ModalDificuldade({handleClose, modalOff}){
    return(
        <View style={styles.container}>

            <View style={styles.content}>
                <Text>Escolha a dificuldade da partida:</Text>

                <View style={styles.botoesDif}>
                    <TouchableOpacity style={styles.botaoIndiv} onPress={() => handleClose(180)}>
                    <Text style={styles.textBotao} >FÁCIL</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botaoIndiv} onPress={() => handleClose(60)}>
                    <Text style={styles.textBotao} >MÉDIO</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botaoIndiv} onPress={() => handleClose(30)}>
                    <Text style={styles.textBotao} >DIFÍCIL</Text>
                    </TouchableOpacity>  

                </View>

                <View style={styles.botoesFecha} >
                        <TouchableOpacity  onPress={modalOff}>
                        <Text style={styles.texto} >Fechar</Text>
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
    botoesDif:{
        flexDirection: 'row',
        margin: 10,
    },
    botaoIndiv:{
        marginHorizontal: 10,
        padding: 5,
    },
    textBotao:{
        fontWeight: 'bold',
        padding: 3,
    },
    botoesFecha: {
        marginRight: 6,
        marginTop: 10,
        backgroundColor: '#BD2A13',
        padding: 10,
        borderRadius: 20,
    },
    texto: {
        color: 'white',
    },
})