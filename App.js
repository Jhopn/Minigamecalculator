// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
let number = '';
let resultadoOperacao = 0
let acertosQuant = 0

export default function App() {
  const [size, setSize] = useState('')
  const [acertos, setAcertos] = useState(acertosQuant)
  const [sizeSorteado, setSortea] = useState(0)
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
      setAcertos(acertosQuant++)
      sorteaOperacao()
      setSize('')
      number = ''
    } else{
      console.log('ERRADO')
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Utilize a calculadora:</Text>
      <Text style={styles.sorteado}>{sizeSorteado}</Text>
      <Text style={styles.acertado}>Acertos: {acertos}</Text>
      <Text style={styles.digitado}>{size}</Text>


      <TouchableOpacity onPress={() => numerosDigita('0')}>
        <Image
        source={require("./assets/numeroZero.png")}
        style={styles.botoes}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => numerosDigita('1')}>
        <Image
        source={require("./assets/numeroUm.png")}
        style={styles.botoes}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => numerosDigita('2')}>
        <Image
        source={require("./assets/numeroDois.png")}
        style={styles.botoes}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => numerosDigita('3')}>
        <Image
        source={require("./assets/numeroTres.png")}
        style={styles.botoes}
        />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => numerosDigita('4')}>
        <Image
        source={require("./assets/numeroQuatro.png")}
        style={styles.botoes}
        />
      </TouchableOpacity>

      
      <TouchableOpacity onPress={() => numerosDigita('5')}>
        <Image
        source={require("./assets/numeroCinco.png")}
        style={styles.botoes}
        />
      </TouchableOpacity>

      
      <TouchableOpacity onPress={() => numerosDigita('6')}>
        <Image
        source={require("./assets/numeroSeis.png")}
        style={styles.botoes}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => numerosDigita('7')}>
        <Image
        source={require("./assets/numeroSete.png")}
        style={styles.botoes}
        />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => numerosDigita('8')}>
        <Image
              source={require("./assets/numeroOito.png")}
              style={styles.botoes}
              />
      </TouchableOpacity>
            
      <TouchableOpacity onPress={() => numerosDigita('9')}>
        <Image
              source={require("./assets/numeroNove.png")}
              style={styles.botoes}
              />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => numerosDigita('.')}>
        <Image
              source={require("./assets/pontoBotao.png")}
              style={styles.botoes}
              />
      </TouchableOpacity>

      <TouchableOpacity onPress={numeroRemove}>
        <Image
              source={require("./assets/botaoDelete.png")}
              style={styles.botoes}
              />
      </TouchableOpacity>

      <TouchableOpacity onPress={resultado}>
        <Image
              source={require("./assets/resultadoBotao.png")}
              style={styles.botoes}
              />
      </TouchableOpacity>

    </View>
  );
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 60,
    backgroundColor: '#8791FA',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', 
    flexWrap:'wrap'
  },
  botoes:{
    width: 60,
    height: 60,
    marginTop: 10,
    marginHorizontal: 15,
    borderRadius: 50,
  },
  titulo:{
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 30,
  },
  acertado:{
    marginTop: 15,
    fontSize: 20,
    marginHorizontal: 70,
  },
  sorteado:{
    fontSize: 40,
    color: 'white',
  },
  digitado: {
    fontSize: 20,
    marginHorizontal: 30,
    backgroundColor: 'gray',
    borderRadius: 5,
    padding: 10,
    height: 40,
    width: 145,
  }
});
