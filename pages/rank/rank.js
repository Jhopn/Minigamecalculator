import { Text, View, StyleSheet, FlatList } from "react-native";
import { useState, useEffect} from 'react';
import { useIsFocused } from "@react-navigation/native";
// import useStorage from '../../hook/useStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function Rank(){
    const [szAcertos,setAcertos] = useState([]);
    const focused = useIsFocused();
    // const { getItem } = useStorage();


    useEffect(
        () =>{
            async function carregaRank(){
                const acertosString = await AsyncStorage.getItem("@ACERTS");
                // const acertosArray = JSON.parse(acertosString);
                console.log(acertosString)
                setAcertos(acertosString)
            }
            carregaRank();

        }, [focused]
    )

    return(

        <View>
            {/* <Text>Rank</Text> */}

            <FlatList
            data={szAcertos}
            keyExtractor={ (item) => String(item)}
            renderItem={({item}) => <Text>{item}</Text>}

            
            />
        </View>

    );
}

const estilos = StyleSheet.create({

});