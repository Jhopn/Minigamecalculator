import {View, Text, StyleSheet} from 'react-native'

export function Loading(){

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text>Carregando...</Text>
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
    texto: {
        color: 'white',
    },
})