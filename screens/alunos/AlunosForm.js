
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { mask } from 'remask'
import alunoValidator from '../../Validators/alunoValidator'

const AlunosForm = ({ navigation, route }) => {
  let aluno = {
    nome: '',
    cpf: '',
    matricula: '',
    email: '',
    telefone: '',
    cep: '',
    logradouro: '',
    complemento: '',
    numero: '',
    bairro: '',

  }



  const id = route.params?.id

  if (id >= 0) {
    aluno = route.params?.aluno
  }


  function salvar(dados) {

    AsyncStorage.getItem('alunos').then(resultado => {

      const alunos = JSON.parse(resultado) || []

      if (id >= 0) {
        alunos.splice(id, 1, dados)
      } else {
        alunos.push(dados)
      }

      console.log(alunos)


      AsyncStorage.setItem('alunos', JSON.stringify(alunos)) //

      navigation.goBack()

    })
  }



  return (
    <>
      <ScrollView style={{ margin: 15 }}>
        <Text style={{ padding: 10, alignSelf: 'center' }}>Formulário de Alunos</Text>


        <Formik
          initialValues={aluno}
          validationSchema={alunoValidator}
          onSubmit={values => salvar(values)}
        >

          {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
            <View>

              <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='nome'
                value={values.nome}
                onChangeText={handleChange('nome')}
              />

              {console.log(errors)}
              {(errors.nome && touched.nome) &&
                <Text style={{ color: 'red', marginTop: 5 }}>
                  {errors.nome}
                </Text>
              }

              <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='CPF'
                value={values.cpf}
                onChangeText={(value) => { setFieldValue('cpf', mask(value, '999.999.999-99')) }}
              />
              <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='Matricula'
                value={values.matricula}
                onChangeText={(value) => { setFieldValue('matricula', mask(value, '99999999999')) }}
              />


              <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='Email'
                value={values.email}
                onChangeText={handleChange('email')}
              />

              {console.log(errors)}
              {(errors.email && touched.email) &&
                <Text style={{ color: 'red', marginTop: 5 }}>
                  {errors.email}
                </Text>
              }
              <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='Telefone'
                value={values.telefone}
                onChangeText={ handleChange('telefone')}
              />
              <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='CEP'
                value={values.cep}
                onChangeText={ handleChange('cep')}
              />
              <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='Logradouro'
                value={values.logradouro}
                onChangeText={ handleChange('logradouro')}
              />
              {console.log(errors)}
              {(errors.logradouro && touched.logradouro) &&
                <Text style={{ color: 'red', marginTop: 5 }}>
                  {errors.logradouro}
                </Text>
              }
              <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='complemento'
                value={values.complemento}
                onChangeText={ handleChange('complemento')}
              />
              <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='numero'
                value={values.numero}
                onChangeText={ handleChange( 'numero')}
              />

              <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='bairro'
                value={values.bairro}
                onChangeText={ handleChange( 'bairro')}
              />
              {console.log(errors)}
              {(errors.bairro && touched.bairro) &&
                <Text style={{ color: 'red', marginTop: 5 }}>
                  {errors.bairro}
                </Text>
              }


              <Button onPress={handleSubmit}>Salvar </Button>

            </View>
          )}
        </Formik>
      </ScrollView>
    </>
  )
}

export default AlunosForm