import { Text, View, StyleSheet, FlatList, StatusBar, Image, Modal  } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState, useEffect} from 'react';
import { useIsFocused } from "@react-navigation/native";
import {Acertos} from '../../components/acertos'
import * as Animatable from 'react-native-animatable'
import { db } from "../../services/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Loading } from "../../modal/carregando";

export function Rank(){
    const [szAcertos,setAcertos] = useState();
    const focused = useIsFocused();
    const acertosString = []
    const [selectedValue, setSelectedValue] = useState('');
    const [modalCarrega,setmodalCarrega] = useState(null);


    useEffect(
        () =>{
            async function carregaRank(){

                try {
                    setmodalCarrega(true)
    
                    const querySnapshot = await getDocs(collection(db, "rank"));
                    querySnapshot.forEach((doc) => {
                        const data = doc.data();

                        const array = Object.values(data)
                        let concatena = ''
                        let concatenaConta = 0
                        let Num 
                        let Nome 
                        let Dificuldade 
                      
                        array.forEach(objeto => {
       
                            if( typeof objeto === 'number'){
                                Num = objeto
                                concatenaConta++
                            } else if(objeto === "FÁCIL" || objeto === "MÉDIO" || objeto === "DIFÍCIL" ){
                                Dificuldade = objeto
                                concatenaConta++

                            } else {
                                Nome = objeto
                                concatenaConta++
                            }

                            if(concatenaConta >= 3){
                                concatena = Nome + "  -  "  + Num + "  -  "  + Dificuldade
                                concatena = concatena.toUpperCase();
                                acertosString.push(concatena);
                                concatenaConta = 0
                            } else if(acertosString.length >= 20){
                                return;
                            }
                        });

                        acertosString.sort((a, b) => {
                            const intensA = a.match(/\d+/g);
                            const intensB = b.match(/\d+/g);
            
                            if (intensA && intensB) {
                                return parseInt(intensB[0]) - parseInt(intensA[0]); 
                            } else {
                                return 0; 
                            }
                        });

        
                        setAcertos(acertosString)
                        setmodalCarrega(false)
                    });
                } catch (error) {
                    console.error('Erro ao carregar o ranking:', error);
                } 
            }
            carregaRank();

        }, [focused]
    )

    async function rank(itemValue){
        setmodalCarrega(true)
        setSelectedValue(itemValue)
        const select = itemValue
        
        const querySnapshot = await getDocs(collection(db, "rank"));
        querySnapshot.forEach((doc) => {
            const data = doc.data();

            const array = Object.values(data)
            let concatena = ''
            let concatenaConta = 0
            let Num 
            let Nome 
            let Dificuldade 
          
            array.forEach(objeto => {

                if( typeof objeto === 'number'){
                    Num = objeto
                    concatenaConta++
                } else if(objeto === "FÁCIL" || objeto === "MÉDIO" || objeto === "DIFÍCIL" ){
                    Dificuldade = objeto
                    concatenaConta++

                } else {
                    Nome = objeto
                    concatenaConta++
                }

                if(concatenaConta >= 3){
                    if(Dificuldade === select){
                        concatena = Nome + "  -  " + Num + "  -  "  + Dificuldade 
                        concatena = concatena.toUpperCase();
                        acertosString.push(concatena);
                    }
                    concatenaConta = 0
                } else if(acertosString.length >= 20){
                    return;
                }
            });

            acertosString.sort((a, b) => {
                const intensA = a.match(/\d+/g);
                const intensB = b.match(/\d+/g);

                if (intensA && intensB) {
                    return parseInt(intensB[0]) - parseInt(intensA[0]); 
                } else {
                    return 0; 
                }
            });

            setAcertos(acertosString)
            setmodalCarrega(false)
        })
    }


    return(
        <Animatable.View animation={'fadeInUp'} delay={300} style={estilos.total} >
            <StatusBar backgroundColor="#BFCCF5" barStyle="light-content" />

            <View style={estilos.container}>
                <Text style={estilos.main}>Nome 🎮</Text>
                <Text style={estilos.main}>Acertos 🎈</Text>
                <Text style={estilos.main}>Dificuldade 🕗</Text>
            </View>

            <View style={estilos.meio} >
                <Text>Filtre os melhores por dificuldade: </Text>

                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => rank(itemValue)}>
                    
                    <Picker.Item label="FÁCIL" value="FÁCIL" />
                    <Picker.Item label="MÉDIO" value="MÉDIO" />
                    <Picker.Item label="DIFÍCIL" value="DIFÍCIL" />
                </Picker>
            </View>

            <Image
                    style={estilos.imgBackgroun}
                    source={require('../../assets/ShapeRank.png')}
                    />

            <Animatable.View delay={300} animation={'fadeInUp'} style={estilos.imgRank}>
                    <Image
                    style={estilos.img}
                    source={require('../../assets/ShapeRank1.png')}
                    />
                    <Image
                    style={estilos.img}
                    source={require('../../assets/ShapeRank2.png')}
                    />
                    <Image
                    style={estilos.img}
                    source={require('../../assets/ShapeRank3.png')}
                    />
            </Animatable.View>


            <View style={estilos.content} >
                <FlatList
                style={estilos.flat}
                data={szAcertos}
                keyExtractor={(item) => String(item)}
                renderItem={({ item }) => (
                    <Acertos data={{nome: item}} />
                )}
                />
            </View>

            <Modal  visible={modalCarrega} transparent={true} animationType='fade'>
                <Loading/>
            </Modal>
        

        </Animatable.View>

    );
}

const estilos = StyleSheet.create({
    total:{
        flex: 1,
        backgroundColor: '#D4DBFA',
    },
    container:{
        margin: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8791FA',
        height: 40,
        borderRadius: 10,
        borderColor: '#D4DBFA',
        borderWidth: 3,
        padding: 3,
    },
    main:{
        marginHorizontal: 10,
        color: 'white',
        fontSize: 18,
    },
    flat: {
        flexDirection: 'column',
        textAlign: 'center',
        backgroundColor: '#8791FA',
        borderRadius: 10,
        marginHorizontal: 20, 
        borderColor: '#D4DBFA',
        borderWidth: 3,
        marginBottom: 220,
    },
    meio:{
        backgroundColor: '#D4DBFA',
        borderColor: '#8791FA',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 20,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#D4DBFA',
    },
    imgRank:{
        position: 'absolute',
        backgroundColor: '#D4DBFA',
        borderRadius: 10,
        flexDirection: 'column',
        marginLeft: 50,
        zIndex: 999,
        top: 210,
        borderColor: '#8791FA',
        borderWidth: 3,
    },
    img:{
        flexDirection: 'column',
        width: 40,
        height: 40,
    },
    imgBackgroun:{
        position: 'absolute',
        top: -80,
        right: 40,
        width: 900,
        height: 900,
        zIndex: -1,
    }
    

});