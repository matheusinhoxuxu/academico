import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const ProfessoresForm = ({navigation}) => {
  
  const [dados, setDados] = useState({})

  function handleChange(valor, campo) {
      setDados({ ...dados, [campo]: valor })
  }

  function salvar() {
    AsyncStorage.getItem('alunos').then(resultado => {

      const professores = JSON.parse(resultado) || []

      professores.push(dados)
      console.log(dados)


      AsyncStorage.setItem('professores', JSON.stringify(professores)) //

      navigation.goBack()

    })
    

      console.log(dados)
  }

  
  return (
    <>
    <ScrollView style={{ margin: 15 }}>
        <Text style={{alignSelf:'center',padding:10}}>Formulário de Professores</Text>

        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='nome'
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
          label='matricula'
          value={dados.matricula}
          onChangeText={(valor) =>handleChange(valor,'matricula')} 
          />
        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='salario'
          value={dados.salario}
          onChangeText={(valor) =>handleChange(valor,'salario')} 
          />
        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='email'
          value={dados.email}
          onChangeText={(valor) =>handleChange(valor,'email')} 
          />
        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='telefone'
          value={dados.telefone}
          onChangeText={(valor) =>handleChange(valor,'telefone')} 
          />
        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='cep'
          value={dados.cep}
          onChangeText={(valor) =>handleChange(valor,'cep')} 
          />
        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='logradouro'
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

export default ProfessoresForm