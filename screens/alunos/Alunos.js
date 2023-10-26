import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native';
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from 'react-native-paper'

const Alunos = ({ navigation }) => {

  const [alunos, setAlunos] = useState([])
  const [idExcluir, setIdExcluir] = useState(0)

  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);


  //recarrega a página toda vez que dados são adicionados,removidos or modificadods
  useFocusEffect(
    React.useCallback(() => {
      carregarDados()
    }, [])
  );


  function carregarDados() {
    AsyncStorage.getItem('alunos').then(resultado => {
      resultado = JSON.parse(resultado) || []
      setAlunos(resultado)
    })
  }

  // o useEffect precisa recarregar toda vez a página 
  function confirmarExclusao(id) {
    setIdExcluir(id)
    setVisible(true)
  }


  function excluir() {
    alunos.splice(idExcluir, 1)
    AsyncStorage.setItem('alunos', JSON.stringify(alunos))
    carregarDados()
    setVisible(false)
  }

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
              <IconButton
                icon='pencil-outline'
                onPress={() => navigation.push('alunos-form', { id: i, alunos: item })}
              />
              <IconButton
                icon='trash-can-outline'
                onPress={() => confirmarExclusao(i)}
              />
            </Card.Actions>
          </Card>
        ))}

      </ScrollView>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Atenção!</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">Deseja realmente excluir o registro ?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={excluir}>SIM</Button>
            <Button onPress={hideDialog}>NÃO</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
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