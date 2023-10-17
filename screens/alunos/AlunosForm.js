
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const AlunosForm = ({navigation}) => {
    const [dados, setDados] = useState({})

    function handleChange(valor,campo){
      setDados({...dados,[campo]:valor})
    }
  
    function salvar(){
      AsyncStorage.getItem('alunos').then(resultado => {

        const alunos = JSON.parse(resultado) || []
  
        alunos.push(dados)
        console.log(dados)
  
  
        AsyncStorage.setItem('alunos', JSON.stringify(alunos)) //
  
        navigation.goBack()
  
      })
      
      console.log(dados)
    }
    
    
  
    return (
    <>
      <ScrollView style={{ margin: 15 }}>
        <Text style={{padding: 10, alignSelf: 'center'}}>Formulário de Alunos</Text>

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
          label='CPF'
          value={dados.cpf}
          keyboardType='decimal-pad'
          onChangeText={(valor) => handleChange(valor,'cpf')} 
          />

        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='Email'
          value={dados.email}
          onChangeText={(valor) =>handleChange(valor,'Email')} 
          />
        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='Telefone'
          value={dados.telefone}
          onChangeText={(valor) =>handleChange(valor,'telefone')} 
          />
        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='CEP'
          value={dados.cep}
          onChangeText={(valor) =>handleChange(valor,'CEP')} 
          />
        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='Logradouro'
          value={dados.logradouro}
          onChangeText={(valor) =>handleChange(valor,'logradouro')} 
          />
        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='complemento'
          value={dados.complemento}
          onChangeText={(valor) =>handleChange(valor,'complemento')} 
          />
        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='numero'
          value={dados.numero}
          onChangeText={(valor) =>handleChange(valor,'numero')} 
          />
        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='bairro'
          value={dados.bairro}
          onChangeText={(valor) =>handleChange(valor,'bairro')} 
          />
        

          <Button onPress={salvar}>Salvar </Button>

      </ScrollView>
    </>
  )
}

export default AlunosForm