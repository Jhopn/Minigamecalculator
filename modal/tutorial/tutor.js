import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native'

let imagemTela = 0
let source = 0

export function Tutorial(){
    function imageTour(){
        const ImagensTutor = ['../../assets/Tutorial/Component 1.png','../../assets/Tutorial/Component 2.png',
        '../../assets/Tutorial/Component 3.png',
        '../../assets/Tutorial/Component 4.png',
        '../../assets/Tutorial/Component 5.png',
        '../../assets/Tutorial/Component 6.png',
        '../../assets/Tutorial/Component 7.png',
        '../../assets/Tutorial/Component 8.png',
        '../../assets/Tutorial/Component 9.png',
        '../../assets/Tutorial/Component 10.png',
        '../../assets/Tutorial/Component 11.png']

        source = ImagensTutor[imagemTela]
        imagemTela++
    }


    return(
        <View style={styles.container}>
                <Image
                style={styles.image}
                source={require('../../assets/Tutorial/Component 1.png')}
                />
                <TouchableOpacity onPress={() => imageTour()} style={styles.proxBot}>
                    <Text>Next</Text>
                </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    image:{
        width: '100%',
        height: '97%',
    },
    proxBot:{
        backgroundColor: 'white',
        width: '70',
        height: '70',
        // zIndex: 9999,
    }
})