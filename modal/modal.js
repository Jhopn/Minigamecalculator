import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export function ModalDificuldade({handleClose, modalOff}){
    return(
        <View style={styles.container}>

            <View style={styles.content}>
                <Text>Escolha a dificuldade da partida:</Text>

                <View style={styles.botoesDif}>
                    <TouchableOpacity style={styles.botaoIndiv} onPress={() => handleClose(180)}>
                    <Text>FÁCIL</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botaoIndiv} onPress={() => handleClose(60)}>
                    <Text>MEDIO</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botaoIndiv} onPress={() => handleClose(10)}>
                    <Text>DIFICIL</Text>
                    </TouchableOpacity>  

                </View>

                <View style={styles.botoesDif} >
                        <TouchableOpacity onPress={modalOff}>
                        <Text>Fechar</Text>
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
        marginHorizontal: 5,
    },
})