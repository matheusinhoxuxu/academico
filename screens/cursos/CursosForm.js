import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const CursosForm = () => {
  
  const [dados, setDados] = useState({})

  function handleChange(valor,campo){
    setDados({...dados,[campo]:valor})
  }

  function salvar(){
    
    
    console.log(dados)
  }
  
  function handleChange(valor){
    console.warn(valor)
  }

  return (
    <>
      <ScrollView style={{ margin: 15 }}>
        <Text>Formulário de cursos</Text>

        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='Nome'
          value={dados.nome}
          onChangeText={(valor) =>handleChange(valor,'nome')} 
          />

        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='Duração'
          value={dados.duracao}
          keyboardType='decimal-pad'
          onChangeText={(valor) => handleChange(valor,'duracao')} 
          />

        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='Modalidade'
          value={dados.modalidade}
          onChangeText={(valor) =>handleChange(valor,'modalidade')} 
          />

          <Button onPress={salvar}>Salvar </Button>

      </ScrollView>
    </>
  )
}

export default CursosForm