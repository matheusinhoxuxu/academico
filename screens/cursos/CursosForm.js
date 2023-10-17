import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const CursosForm = ({ navigation }) => {

  const [dados, setDados] = useState({})

  function handleChange(valor, campo) {
    setDados({ ...dados, [campo]: valor })
  }

  
  function salvar() {

    AsyncStorage.getItem('cursos').then(resultado => {

      const cursos = JSON.parse(resultado) || []

      cursos.push(dados)
      console.log(dados)


      AsyncStorage.setItem('cursos', JSON.stringify(cursos)) //

      navigation.goBack()

    })


    

  }



  return (
    <>
      <ScrollView style={{ margin: 15 }}>
        <Text style={{ padding: 10, alignSelf: 'center' }}>Formulário de cursos</Text>

        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='nome'
          value={dados.nome}
          onChangeText={(valor) => handleChange(valor, 'nome')}
        />

        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='duração'
          value={dados.duracao}
          keyboardType='decimal-pad'
          onChangeText={(valor) => handleChange(valor, 'duracao')}
        />

        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='modalidade'
          value={dados.modalidade}
          onChangeText={(valor) => handleChange(valor, 'modalidade')}
        />

        <Button onPress={salvar}>Salvar </Button>

      </ScrollView>
    </>
  )
}

export default CursosForm