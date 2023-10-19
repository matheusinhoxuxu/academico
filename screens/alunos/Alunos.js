import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native';
import { Button, Card, FAB, IconButton, Text } from 'react-native-paper'

const Alunos = ({ navigation }) => {

  const [alunos, setAlunos] = useState([])

  useFocusEffect(
    React.useCallback(() => {

      AsyncStorage.getItem('alunos').then(resultado => {

        resultado = JSON.parse(resultado) || []

        console.log(resultado)
        setAlunos(resultado)
      })
    }, [])
  );
  return (
    <>

      <ScrollView style={{ padding: 15, }}>
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10, marginBottom: 10 }}>
         
        </View>
        {alunos.map((item, i) => (
          <Card key={i} style={{ margin: 10, }} mode='outlined'>
            <Card.Content>
              <Text variant="titleLarge">{item.nome}</Text>
              <Text variant="titleMedium">cpf:{item.cpf}</Text>
              <Text variant="titleMedium">email:{item.email}</Text>
              <Text variant="titleMedium">telefone:{item.telefone}</Text>
              <Text variant="titleMedium">cep:{item.cep}</Text>
              <Text variant="titleMedium">logradouro:{item.logradouro}</Text>
              <Text variant="titleMedium">complemento:{item.complemento}</Text>
              <Text variant="titleMedium">numero:{item.numero}</Text>
              <Text variant="titleMedium">bairro:{item.bairro}</Text>
            </Card.Content>
            <Card.Actions>
              <IconButton icon='pencil-outline'  />
              <IconButton icon='trash-can-outline' />
            </Card.Actions>
          </Card>
        ))}

      </ScrollView>
      <FAB
        icon="plus"
        style={{ position: 'absolute', margin: 16, right: 0, bottom: 0, }}
        size='small'
        onPress={() => navigation.push('alunos-form')}
      />
    </>
  )
}

export default Alunos