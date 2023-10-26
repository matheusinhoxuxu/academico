import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native';
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from 'react-native-paper'

const Professores = ({ navigation }) => {
  const [professores, setProfessores] = useState([])
  const [idExcluir, setIdExcluir] = useState(0)

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  useFocusEffect(
    React.useCallback(() => {
      carregarDados()
      
    }, [])
  );
  function carregarDados() {
    AsyncStorage.getItem('professores').then(resultado => {
      resultado = JSON.parse(resultado) || []
      setProfessores(resultado)
    })
  }

  // o useEffect precisa recarregar toda vez a página 
  function confirmarExclusao(id){
    setIdExcluir(id)
    setVisible(true)
  }


  function excluir () {
    professores.splice(idExcluir, 1)
    AsyncStorage.setItem('professores', JSON.stringify(professores))
    carregarDados()
    setVisible(false)
  }
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
              <IconButton
                icon='pencil-outline'
                onPress={() => navigation.push('professores-form', { id: i, professores: item })}
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
        onPress={() => navigation.push('professores-form')}
      />
    </>
  )
}

export default Professores