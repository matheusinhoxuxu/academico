import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native';
import { Button, Card, FAB, IconButton, Text } from 'react-native-paper'

const Professores = ({navigation}) => {
  const [professores, setProfessores] = useState([])

  useFocusEffect(
    React.useCallback(() => {

      AsyncStorage.getItem('alunos').then(resultado => {

        resultado = JSON.parse(resultado) || []

        console.log(resultado)
        setProfessores(resultado)
      })
    }, [])
  );
  return (
    <>

    <ScrollView style={{ padding: 15, }}>
      <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10, marginBottom: 10 }}>
       
      </View>
      {professores.map((item, i) => (
        <Card key={i} style={{ margin: 10, }} mode='outlined'>
          <Card.Content>
            <Text variant="titleLarge">{item.nome}</Text>
            <Text variant="bodyMedium">CPF:{item.cpf}</Text>
            <Text variant="bodyMedium">matricula:{item.matricula}</Text>
            <Text variant="bodyMedium">salario:{item.salario}</Text>
            <Text variant="bodyMedium">email:{item.email}</Text>
            <Text variant="bodyMedium">telefone:{item.telefone}</Text>
            <Text variant="bodyMedium">cep:{item.cep}</Text>
            <Text variant="bodyMedium">logradouro:{item.logradouro}</Text>
            <Text variant="bodyMedium">complemento:{item.complemento}</Text>
            <Text variant="bodyMedium">numero:{item.numero}</Text>
            <Text variant="bodyMedium">bairro:{item.bairro}</Text>
          </Card.Content>
          <Card.Actions>
            <IconButton icon='pencil-outline'  />
            <IconButton icon='trash-can-outline'  />
          </Card.Actions>
        </Card>
      ))}

    </ScrollView>
    <FAB
      icon="plus"
      style={{ position: 'absolute', margin: 16, right: 0, bottom: 0, }}
      size='small'
      onPress={() => navigation.push('professores-form')}
    />
  </>
  )
}

export default Professores