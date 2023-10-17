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
              <Text variant="bodyMedium">{item.cpf}</Text>
              <Text variant="bodyMedium">{item.email}</Text>
              <Text variant="bodyMedium">{item.telefone}</Text>
              <Text variant="bodyMedium">{item.cep}</Text>
              <Text variant="bodyMedium">{item.logradouro}</Text>
              <Text variant="bodyMedium">{item.complemento}</Text>
              <Text variant="bodyMedium">{item.numero}</Text>
              <Text variant="bodyMedium">{item.bairro}</Text>
            </Card.Content>
            <Card.Actions>
              <IconButton icon='pencil-outline' iconColor='blue' />
              <IconButton icon='trash-can-outline' iconColor='yellow' />
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