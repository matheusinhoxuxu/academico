import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Card, FAB, IconButton, Text } from 'react-native-paper'

const Cursos = ({ navigation }) => {

  const [cursos, setCursos] = useState([])

  //recarrega a página toda vez que dados são adicionados,removidos or modificadods
  useFocusEffect(
    React.useCallback(() => {

      AsyncStorage.getItem('cursos').then(resultado => {

        resultado = JSON.parse(resultado) || []

        console.log(resultado)
        setCursos(resultado)
      })
    }, [])
  );

// o useEffect precisa recarregar toda vez a página 

  return (
    <>

      <ScrollView style={{ padding: 15, }}>
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10, marginBottom: 10 }}>
         
        </View>
        {cursos.map((item, i) => (
          <Card key={i} style={{ margin: 10, }} mode='outlined'>
            <Card.Content>
              <Text variant="titleLarge">{item.nome}</Text>
              <Text variant="bodyMedium">{item.cpf}</Text>
              <Text variant="bodyMedium">{item.modalidade}</Text>
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
        onPress={() => navigation.push('cursos-form')}
      />
    </>

  )
}

export default Cursos