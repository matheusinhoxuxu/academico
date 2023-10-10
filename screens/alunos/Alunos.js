import React from 'react'
import { Button, Text } from 'react-native-paper'

const Alunos = ({ navigation }) => {
  return (
    <>
      <Text style={{ padding: 10, alignSelf: 'center' }}>encaminhando para o formulário </Text>
      <Button style={{ marginHorizontal: 100 }}
        icon='plus'
        mode='contained'
        onPress={() => navigation.push('alunos-form')}
      >
        Novo
      </Button>
    </>
  )
}

export default Alunos