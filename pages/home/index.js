import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Alert } from 'react-native';
import {ModalDificuldade} from '../../modal/modal';
import {FinalModal} from '../../modal/final/finalModal';


let number = '';
let resultadoOperacao = 0
let acertosQuant = 0

export function Home() {
  const [size, setSize] = useState('')
  const [acertos, setAcertos] = useState(acertosQuant)
  const [sizeSorteado, setSortea] = useState(0)
  const [sizeModal,setModal] = useState(true)
  const [sizeTempo,setTempo] = useState('')
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
    operacaoComValores = valor1 + operacaoSorteada + valor2
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
      setAcertos(++acertosQuant)
      sorteaOperacao()
      setSize('')
      number = ''
    } else{
      console.log('ERRADO')
    }

  }

  function decorreTempo(tempoPartida) {
    const intervaloID = setInterval(() => {
      tempoPartida--;
  
      if (tempoPartida < 0) {
        setModalFinal(true);
        clearInterval(intervaloID);
      } else {
        setTempo(tempoPartida);
      }
    }, 1000);
  }



  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Acerte o máximo de operações no tempo exibido:</Text>
      <Text style={styles.tempo}>🕗{sizeTempo} segundos</Text>
      <View style={styles.juncao}>
        <Text style={styles.sorteado}>{sizeSorteado}</Text>
        <Text style={styles.acertado}>Acertos: {acertos} 🎈</Text>
      </View>
      
      <TouchableOpacity onPress={ () => setModal(true) }>
        <Image
              source={require("../../assets/play.png")}
              style={styles.botoes}
              />
      </TouchableOpacity>
      <Text style={styles.digitado}>{size}</Text>
      


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

      <Modal visible={sizeModal} transparent={true} animationType='fade'>
        <ModalDificuldade handleClose={ (value) => {
          setTempo(value)
          tempoPartida = value
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
          decorreTempo(tempoPartida)
        } 
          } modalOff={ () => setModal(false)
          } />
      </Modal>

      <Modal visible={sizeModalFinal} transparent={true} animationType='fade' >
        <FinalModal modalFinalOff={ () => setModalFinal(false)} acertosRank={acertos} nivelDificuldade={sizeDificuldade} />
      </Modal>

    </View>
  );
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 40,
    backgroundColor: '#8791FA',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', 
    flexWrap:'wrap'
  },
  botoes:{
    width: 55,
    height: 55,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 50,
  },
  titulo:{
    textAlign: 'center',
    marginTop: 25,
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
    fontSize: 20,
    marginHorizontal: 2,
    marginBottom: 30,
    backgroundColor: 'gray',
    borderRadius: 5,
    padding: 10,
    height: 40,
    width: 145,
    textAlign: 'center',
  },
  juncao: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 3,
  },
  tempo:{
    fontSize: 20,
    marginHorizontal: 30,
    marginBottom: 25,
  }
});
