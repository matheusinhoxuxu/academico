import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import disciplinaValidator from '../../Validators/disciplinaValidator'
import { mask } from 'remask'


const DisciplinasForm = ({ navigation, route }) => {

  let disciplina = {
    nome: '',
    duracao: '',
    curso: '',
  }
  
  const [selectedLanguage, setSelectedLanguage] = useState();

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
        <Text style={{ padding: 10, alignSelf: 'center' }}>Formulário de disciplinas</Text>

        <Formik
          initialValues={disciplina}
          validationSchema={disciplinaValidator}
          onSubmit={dados => salvar(dados)}
        >
          {({ handleChange, handleSubmit, errors, touched, values, setFieldValue }) => (
            <View>
             {console.log(values)}
              <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='nome'
                value={values.nome}
                onChangeText={handleChange('nome')}
              />
             
              {(errors.nome && touched.nome) &&
                <Text style={{ color: 'red', marginTop: 5 }}>
                  {errors.nome}
                </Text>
              }
              <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='duracao'
                value={values.duracao}
                onChangeText={(value) => { setFieldValue('duracao', mask(value, '99')) }}
              />
             
              {(errors.duracao && touched.duracao) &&
                <Text style={{ color: 'red', marginTop: 5 }}>
                  {errors.duracao}
                </Text>
              }

              <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='Curso'
                value={values.curso}
                keyboardType='decimal-pad'
                onChangeText={handleChange('curso')}
              />
              {(errors.curso && touched.curso) &&
                <Text style={{ color: 'red', marginTop: 5 }}>
                  {errors.curso}
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

export default DisciplinasForm