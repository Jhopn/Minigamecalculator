import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, StatusBar } from 'react-native';
import {ModalDificuldade} from '../../modal/modal';
import {FinalModal} from '../../modal/final/finalModal';
import * as Animatable from 'react-native-animatable'
import { Audio } from 'expo-av';

let number = '';
let resultadoOperacao = 0
let acertosQuant = 0
let intervaloID

export function Home() {
  const [size, setSize] = useState('')
  const [acertos, setAcertos] = useState(acertosQuant)
  const [sizeSorteado, setSortea] = useState(0)
  const [sizeModal,setModal] = useState(true)
  const [sizeTempo,setTempo] = useState(null)
  const [sizeModalFinal,setModalFinal] = useState(false)
  const [sizeDificuldade,setDificuldade] = useState(null)

  let tempoPartida = {sizeTempo}
  const isFloat = (numero) => Number(numero) === numero && numero % 1 !== 0;

  function sorteaOperacao(){
    let operacoes = ['+', '*', '-', '/']
    let operacaoComValores = ''
    let numOperacao = Math.floor(Math.random() * 4);
    let valor1 = Math.floor(Math.random() * (1, 10) + 1);
    let valor2 = Math.floor(Math.random() * (1, 10) + 1);

    let operacaoSorteada = operacoes[numOperacao]
  
    if(operacaoSorteada === '+'){
      resultadoOperacao = valor1 + valor2
    } else if (operacaoSorteada === '-' ){ 
      if(valor1 > valor2){
      resultadoOperacao = valor1 - valor2
    } else if(valor1 === valor2){
      resultadoOperacao = 0
    }
    else {  
      resultadoOperacao = valor2 - valor1
      operacaoComValores = valor2 + operacaoSorteada + valor1
    }
    } 
    else if (operacaoSorteada === '*'){
      resultadoOperacao = valor1 * valor2
      if(valor1 == 0 || valor2 == 0){
        resultadoOperacao = 0
      }
    }
    else if(operacaoSorteada === '/'){
        resultadoOperacao = valor1 / valor2
    }

    if (isFloat(resultadoOperacao)){
        resultadoOperacao = resultadoOperacao.toFixed(1)
    } else if(resultadoOperacao === NaN){ resultadoOperacao = 0}

    if(valor2 === 0  && operacaoSorteada === '/'){
      sorteaOperacao()
    }
    operacaoComValores = valor1 + ' ' + operacaoSorteada + ' '  + valor2
    setSortea(operacaoComValores)
    console.log(typeof resultadoOperacao)
    console.log(resultadoOperacao)
  }

  if(resultadoOperacao === 0){
    sorteaOperacao()
  }

  function numerosDigita(value){
    if(value !== Infinity){
      number = number + value
      setSize(number)
    }
  }

  function numeroRemove(){
    number = number.slice(0, -1)
    setSize(number)
  }

  function resultado(){
    if(number == resultadoOperacao){
      playSoundCerto();
      setAcertos(++acertosQuant)
      sorteaOperacao()
      setSize('')
      number = ''
    } else{
      playSoundErrado();
      console.log('ERRADO')
    }

  }

  function decorreTempo(tempoPartida) {
      intervaloID = setInterval(() => {
      tempoPartida--;
      if (tempoPartida < 0 ) {
        setModalFinal(true);
        clearInterval(intervaloID);
      }
      else {
        setTempo(tempoPartida);
      }
    }, 1000);
  }

  
      // Carregar e reproduzir o arquivo de áudio
      const playSoundCerto = async () => {
        await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

        const { sound: playbackObject } = await Audio.Sound.createAsync(
          { uri: require('../../assets/souds/certo.mp3') },
          { shouldPlay: true }
        );
      };

      // const playSoundErrado = async () => {
      //   const { sound } = await Audio.Sound.createAsync(
      //     require('../../assets/souds/errado.mp3')
      //   );
      //   await sound.playAsync();
      // };
  
      // return () => {
      //   // Limpar recursos ao desmontar o componente
      //   Audio.Sound.unloadAsync();
      // };
  

  return (
    <Animatable.View animation={'fadeInUp'}  style={styles.container}>

      <Image
      style={styles.shapeback}
      source={require('../../assets/ShapeHome.png')}
      />

      <Text style={styles.titulo}>Acerte o máximo de operações no tempo exibido:</Text>
      <Text style={styles.tempo}>🕗{sizeTempo} segundos</Text>
      <View style={styles.juncao}>
        <Text style={styles.sorteado}>{sizeSorteado}</Text>
        <Text style={styles.acertado}>Acertos: {acertos} 🎈</Text>
      </View>
      
      <View style={styles.viewPlayandINput}>
        <TouchableOpacity onPress={ () => setModal(true) }>
          <Image
                source={require("../../assets/play.png")}
                style={styles.botoes}
                />
        </TouchableOpacity>
        <Text style={styles.digitado}>{size}</Text>
      </View>
      

      <View style={styles.viewBotoes}>
        <TouchableOpacity onPress={() => numerosDigita('0')}>
          <Image
          source={require("../../assets/numeroZero.png")}
          style={styles.botoes}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => numerosDigita('1')}>
          <Image
          source={require("../../assets/numeroUm.png")}
          style={styles.botoes}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => numerosDigita('2')}>
          <Image
          source={require("../../assets/numeroDois.png")}
          style={styles.botoes}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => numerosDigita('3')}>
          <Image
          source={require("../../assets/numeroTres.png")}
          style={styles.botoes}
          />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => numerosDigita('4')}>
          <Image
          source={require("../../assets/numeroQuatro.png")}
          style={styles.botoes}
          />
        </TouchableOpacity>

        
        <TouchableOpacity onPress={() => numerosDigita('5')}>
          <Image
          source={require("../../assets/numeroCinco.png")}
          style={styles.botoes}
          />
        </TouchableOpacity>

        
        <TouchableOpacity onPress={() => numerosDigita('6')}>
          <Image
          source={require("../../assets/numeroSeis.png")}
          style={styles.botoes}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => numerosDigita('7')}>
          <Image
          source={require("../../assets/numeroSete.png")}
          style={styles.botoes}
          />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => numerosDigita('8')}>
          <Image
                source={require("../../assets/numeroOito.png")}
                style={styles.botoes}
                />
        </TouchableOpacity>
              
        <TouchableOpacity onPress={() => numerosDigita('9')}>
          <Image
                source={require("../../assets/numeroNove.png")}
                style={styles.botoes}
                />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => numerosDigita('.')}>
          <Image
                source={require("../../assets/pontoBotao.png")}
                style={styles.botoes}
                />
        </TouchableOpacity>

        <TouchableOpacity onPress={numeroRemove}>
          <Image
                source={require("../../assets/botaoDelete.png")}
                style={styles.botoes}
                />
        </TouchableOpacity>

        <TouchableOpacity onPress={resultado}>
          <Image
                source={require("../../assets/resultadoBotao.png")}
                style={styles.botoes}
                />
        </TouchableOpacity>
      </View>
     

      <Modal visible={sizeModal} transparent={true} animationType='fade'>
        <ModalDificuldade handleClose={ (value) => {
          clearInterval(intervaloID);
          tempoPartida = value
          setTempo(value);
          setModal(false)
          if( tempoPartida === 180){
              setDificuldade("FÁCIL")
          } else if( tempoPartida === 60 ) {
              setDificuldade("MÉDIO")
          } else{
            setDificuldade("DIFÍCIL")
          }
          acertosQuant = 0
          setAcertos(acertosQuant)
          sorteaOperacao()
          decorreTempo(tempoPartida);
        } 
          } modalOff={ () => setModal(false)
          } />
      </Modal>

      <Modal visible={sizeModalFinal} transparent={true} animationType='fade' >
        <FinalModal modalFinalOff={ () => setModalFinal(false)} acertosRank={acertos} nivelDificuldade={sizeDificuldade} />
      </Modal>

    </Animatable.View>
  );
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: '#D4DBFA',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', 
    flexWrap:'wrap',
  },
  botoes:{
    width: 55,
    height: 55,
    marginTop: 10,
    marginHorizontal: 16,
    borderRadius: 50,
  },
  play: {
    marginRight: 10,
  },
  titulo:{
    textAlign: 'center',
    marginTop: 40,
    fontSize: 15,
    fontWeight: 'bold',
    marginHorizontal: 25,
  },
  acertado:{
    marginTop: 10,
    fontSize: 18,
    marginHorizontal: 55,
    color: '#0DE000',
    textShadowColor: 100,
    backgroundColor: 'white',
  },
  sorteado:{
    fontSize: 35,
    color: 'black',
    textAlign: 'center',
  },
  digitado: {
    borderColor: '#D4DBFA',
    borderWidth: 3,
    color: 'white',
    fontSize: 20,
    marginHorizontal: 10,
    marginBottom: 30,
    backgroundColor: '#0D1413',
    borderRadius: 5,
    padding: 10,
    height: 45,
    width: 120,
    textAlign: 'center',
  },
  juncao: {
    borderColor: '#D4DBFA',
    borderWidth: 3,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 3,
  },
  tempo:{
    fontSize: 20,
    marginHorizontal: 30,
    marginBottom: 5,
  },
  viewBotoes:{
    alignItems: 'center',
    flexDirection: 'row', 
    flexWrap:'wrap',
    justifyContent: 'center',
  },
  viewPlayandINput: {
    flexDirection: 'row', 
    flexWrap:'wrap',
    justifyContent:  'space-between',
    alignItems: 'center',
  },
  shapeback:{
    width: 800,
    height: 800,
    zIndex: 0,
    position: 'absolute',
    top: -100,
  },
});
