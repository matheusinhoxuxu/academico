import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'

const Cursos = ({navigation}) => {

  const [cursos, setCursos] = useState([])

  useEffect(() =>{
    AsyncStorage.getItem('cursos').then(resultado =>{
      
      resultado = JSON.parse(resultado) || []

      console.log(resultado)
      setCursos(resultado)
    })
  },[])

  return (
    <ScrollView>
      {cursos.map(item=>(
       <Card style={{margin:10, padding:15}}> 
        <Text>{item.nome}</Text>
        <Text>{item.duracao} </Text>
        <Text>{item.modalidade}</Text>
       </Card>
      ))}

      <Text style={{padding:10,alignSelf:'center'}}>encaminhando para o formulário </Text>
      <Button style={{marginHorizontal:100}}
      icon='plus' 
      mode='contained'
      onPress={() => navigation.push('cursos-form')}
      >
        Novo
        </Button>    
    </ScrollView>
  )
}

export default Cursos