import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import professoresValidator from '../../Validators/professoresValidator'
import { mask } from 'remask'

const ProfessoresForm = ({ navigation, route }) => {

  // const id = route.params?.id
  // const professores = route.params?.professores || {}


  let professores = {
    nome: '',
    cpf: '',
    matricula: '',
    salario: '',
    email: '',
    telefone: '',
    cep: '',
    logradouro: '',
    complemento: '',
    numero: '',
    bairroro: '',

  }
  const id = route.params?.id

  if (id >= 0) {
    professores = route.params?.professores
  }


  function salvar(dados) {

    AsyncStorage.getItem('professores').then(resultado => {

      const professores = JSON.parse(resultado) || []

      if (id >= 0) {
        professores.splice(id, 1, dados)
      } else {
        professores.push(dados)
      }

      console.log(professores)


      AsyncStorage.setItem('professores', JSON.stringify(professores)) //

      navigation.goBack()

    })
  }


  return (
    <>
      <ScrollView style={{ margin: 15 }}>
        <Text style={{ alignSelf: 'center', padding: 10 }}>Formulário de Professores</Text>


        <Formik
          initialValues={professores}
          validationSchema={professoresValidator}
          onSubmit={values => salvar(values)}
        >
          {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
            <View>

              <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='nome'
                value={values.nome}
                onChangeText={ handleChange('nome')}
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
                keyboardType='decimal-pad'
                onChangeText={(value) => { setFieldValue('cpf', mask(value, '999.999.999-99')) }}
              />

              <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='matricula'
                value={values.matricula}
                onChangeText={(value) => { setFieldValue('matricula', mask(value, '99999999999')) }}
              />
              <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='salario'
                value={values.salario}
                onChangeText={ handleChange( 'salario')}
              />
              <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='email'
                value={values.email}
                onChangeText={ handleChange( 'email')}
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
                label='telefone'
                value={values.telefone}
                onChangeText={(value) => { setFieldValue('telefone', mask(value, '(61)99999-9999')) }}
              />
              <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='cep'
                value={values.cep}
                onChangeText={(value) => { setFieldValue('cep', mask(value, '999999999')) }}
              />
              <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='logradouro'
                value={values.logradouro}
                onChangeText={ handleChange( 'logradouro')}
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
                onChangeText={ handleChange( 'complemento')}
              />
              <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='numero'
                value={values.numero}
                onChangeText={(value) => { setFieldValue('numero', mask(value, '99')) }}
              />
              <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='bairro'
                value={values.bairro}
                onChangeText={handleChange( 'bairro')}
              />
              {console.log(errors)}
              {(errors.bairro && touched.bairro) &&
                <Text style={{ color: 'red', marginTop: 5 }}>
                  {errors.bairro}
                </Text>
              }
              {/* {console.log(errors)}
              {(errors.bairro && touched.bairro) &&
                <Text style={{ color: 'red', marginTop: 5 }}>
                  {errors.bairro}
                </Text>
              } isso aqui não é nada, só arrumando as coisas*/}

              <Button onPress={handleSubmit}>Salvar </Button>
            </View>
          )}

        </Formik>
      </ScrollView>
    </>
  )
}

export default ProfessoresForm