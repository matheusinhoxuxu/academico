import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import cursoValidator from '../../Validators/cursoValidator'
import { mask } from 'remask'
import { Picker } from '@react-native-picker/picker'


const CursosForm = ({ navigation, route }) => {

  let curso = {
    nome: '',
    duracao: '',
    modalidade: ''
  }
  
  const [selectedLanguage, setSelectedLanguage] = useState();

  const id = route.params?.id

  if (id >= 0) {
    curso = route.params?.curso
  }


  function salvar(dados) {

    AsyncStorage.getItem('cursos').then(resultado => {

      const cursos = JSON.parse(resultado) || []

      if (id >= 0) {
        cursos.splice(id, 1, dados)
      } else {
        cursos.push(dados)
      }

      console.log(cursos)


      AsyncStorage.setItem('cursos', JSON.stringify(cursos)) //

      navigation.goBack()

    })
  }



  return (
    <>
      <ScrollView style={{ margin: 15 }}>
        <Text style={{ padding: 10, alignSelf: 'center' }}>Formulário de cursos</Text>

        <Formik
          initialValues={curso}
          validationSchema={cursoValidator}
          onSubmit={values => salvar(values)}
        >
          {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
            <View>
              {/* <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='CPF'
                value={values.cpf}
                onChangeText={(value) => { setFieldValue('cpf', mask(value, '999.999-99')) }}
              />

              <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='CEP'
                value={values.cep}
                onChangeText={(value) => { setFieldValue('cep', mask(value,)) }}
              />
              <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='Data'
                value={values.data}
                onChangeText={(value) => { setFieldValue('data', mask(value)) }}
              />
              <TextInput
                style={{ margin: 10 }}
                mode='outlined'
                label='Telefone'
                value={values.telefone}
                onChangeText={(value) => { setFieldValue('telefone', mask(value)) }}
              /> */}



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
                label='duração'
                value={values.duracao}
                keyboardType='decimal-pad'
                onChangeText={handleChange('duracao')}
              />
              {(errors.duracao && touched.duracao) &&
                <Text style={{ color: 'red', marginTop: 5 }}>
                  {errors.duracao}
                </Text>
              }

              
              <Picker style={{padding:10}}
                selectedValue={values.modalidade}
                onValueChange={handleChange('modalidade')}>
                <Picker.Item label="Modalidade" value="" />
                <Picker.Item label="Presencial" value="Presencial" />
                <Picker.Item label="EAD" value="EAD" />
                <Picker.Item label="Híbrido" value="Híbrido" />
              </Picker>
              {(errors.modalidade && touched.modalidade) &&
                <Text style={{ color: 'red', marginTop: 5 }}>
                  {errors.modalidade}
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

export default CursosForm