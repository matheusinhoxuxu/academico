import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const ProfessoresForm = () => {
  
  const [dados, setDados] = useState({})

  function handleChange(valor, campo) {
      setDados({ ...dados, [campo]: valor })
  }

  function salvar() {


      console.log(dados)
  }

  function handleChange(valor) {
      console.warn(valor)
  }
  return (
    <>
    <ScrollView style={{ margin: 15 }}>
        <Text style={{alignSelf:'center',padding:10}}>Formulário de Professores</Text>

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
          label='Matricula'
          value={dados.email}
          onChangeText={(valor) =>handleChange(valor,'matricula')} 
          />
        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='Salario'
          value={dados.telefone}
          onChangeText={(valor) =>handleChange(valor,'salario')} 
          />
        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='Email'
          value={dados.cep}
          onChangeText={(valor) =>handleChange(valor,'email')} 
          />
        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='Telefone'
          value={dados.logradouro}
          onChangeText={(valor) =>handleChange(valor,'telefone')} 
          />
        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='CEP'
          value={dados.complemento}
          onChangeText={(valor) =>handleChange(valor,'complemento')} 
          />
        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='Logradouro'
          value={dados.numero}
          onChangeText={(valor) =>handleChange(valor,'Logradouro')} 
          />
        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='Complemento'
          value={dados.bairro}
          onChangeText={(valor) =>handleChange(valor,'Complemento')} 
          />
        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='Numero'
          value={dados.bairro}
          onChangeText={(valor) =>handleChange(valor,'Numero')} 
          />
        <TextInput
          style={{ margin: 10 }}
          mode='outlined'
          label='Bairro'
          value={dados.bairro}
          onChangeText={(valor) =>handleChange(valor,'Bairro')} 
          />

          <Button onPress={salvar}>Salvar </Button>

      </ScrollView>
    </>
  )
}

export default ProfessoresForm