import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import disciplinasValidator from '../../Validators/disciplinaValidator'

const DisciplinasForms = ({ navigation, route }) => {

  let disciplina = {
    nome: '',
    curso: ''
  }

  const id = route.params?.id

  if (id >= 0) {
    disciplina = route.params?.disciplina
  }



  function salvar(dados) {
    AsyncStorage.getItem('disciplinas').then(resultado => {

      const disciplinas = JSON.parse(resultado) || []

      if (id >= 0) {
        disciplinas.splice(id, 1, dados)
      } else {
        disciplinas.push(dados)
      }

      console.log(disciplinas)


      AsyncStorage.setItem('disciplinas', JSON.stringify(disciplinas)) //

      navigation.goBack()

    })


  }


  return (
    <>
      <ScrollView style={{ margin: 15 }}>
        <Text style={{ alignSelf: 'center' }}>Formulário de Disciplinas</Text>
        <Formik
          initialValues={disciplina}
          validationSchema={disciplinasValidator}
          onSubmit={values => salvar(values)}
        >


          {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
            <View>

              <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='nome'
                value={values.nome}
                onChangeText={(valor) => handleChange(valor, 'nome')}
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
                label='curso'
                value={values.curso}
                onChangeText={handleChange('curso')}
              />
              {(errors.curso && touched.curso) &&
                <Text style={{ color: 'red', marginTop: 5 }}>
                  {errors.curso}
                </Text>
              }


              <Button onPress={handleSubmit}>Salvar</Button>
            </View>
          )}
        </Formik>

      </ScrollView>
    </>
  )

}

export default DisciplinasForms