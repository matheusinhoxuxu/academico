
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Card, FAB, IconButton, Text } from 'react-native-paper'


const Disciplinas = ({ navigation }) => {

  const [disciplinas, setDisciplinas] = useState([])

  //recarrega a página toda vez que dados são adicionados,removidos or modificadods
  useFocusEffect(
    React.useCallback(() => {

      AsyncStorage.getItem('disciplinas').then(resultado => {

        resultado = JSON.parse(resultado) || []

        console.log(resultado)
        setDisciplinas(resultado)
      })
    }, [])
  );

  return (
    <>

      <ScrollView style={{ padding: 15, }}>
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10, marginBottom: 10 }}>

        </View>
        {disciplinas.map((item, i) => (
          <Card key={i} style={{ margin: 10, }} mode='outlined'>
            <Card.Content>
              <Text variant="titleLarge">{item.nome}</Text>
              <Text variant="bodyMedium">curso:{item.curso}</Text>

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
        onPress={() => navigation.push('disciplinas-form')}
      />
    </>
  )
}

export default Disciplinas