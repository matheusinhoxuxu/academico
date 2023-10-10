import React from 'react'
import { Button, Text } from 'react-native-paper'

const Cursos = ({navigation}) => {
  return (
    <>
      <Text style={{padding:10,alignSelf:'center'}}>encaminhando para o formulário </Text>
      <Button style={{marginHorizontal:100}}
      icon='plus' 
      mode='contained'
      onPress={() => navigation.push('cursos-form')}
      >
        Novo
        </Button>    
    </>
  )
}

export default Cursos