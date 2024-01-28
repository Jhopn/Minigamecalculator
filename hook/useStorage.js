import AsyncStorage from '@react-native-async-storage/async-storage';

const useStorage = () => {
    const getItem = async (key) => {
        try{
            const acertos = await AsyncStorage.getItem(key)
            return JSON.parse(acertos) || [];
        }
        catch(error){
            console.log("Erro ao Coletar", error)
            return []
        }
    }

    const saveItem = async (key, value) => {
        try{
            let acertos = await getItem(key);
            acertos.push(value)

            await AsyncStorage.saveItem(key, JSON.stringify(acertos))
        }
        catch(error){
            console.log("Erro ao Coletar", error)
        }
        
    }

    const removeItem = async (key, item) => {
        try{
            let acertos = await getItem(key);

            let myacertos = acertos.filter( (acertos) => {
                return (acertos !== item)
            })

            await AsyncStorage.saveItem(key, JSON.stringify(myacertos))
            return myacertos

        }
        catch(error){
            console.log("Erro ao Coletar", error)
        }

        
    }

    return{
        getItem,
        saveItem,
        removeItem,
    }

}

export default useStorage;