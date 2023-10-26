import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const DisciplinasForms = ({navigation,route}) => {


    const id = route.params?.id
    const disciplinas = route.params?.disciplinas || {}
  
      const [dados, setDados] = useState(disciplinas)
  
      function handleChange(valor,campo){
        setDados({...dados,[campo]:valor})
      }
    
      function salvar(){
        AsyncStorage.getItem('disciplinas').then(resultado => {
  
          const disciplinas = JSON.parse(resultado) || []
          if(id){
            disciplinas.splice(id, 1, dados)
          } else {
            disciplinas.push(dados)
          }
        
          console.log(disciplinas)
    
          AsyncStorage.setItem('disciplinas', JSON.stringify(disciplinas)) //
    
          navigation.goBack()
    
        })
        
        
      }

   
    return (
        <>
            <ScrollView style={{ margin: 15 }}>
                <Text style={{alignSelf:'center'}}>Formulário de Disciplinas</Text>

                <TextInput
                    style={{ margin: 10 }}
                    mode='outlined'
                    label='Nome'
                    value={dados.nome}
                    onChangeText={(valor) => handleChange(valor, 'nome')}
                />

                <TextInput
                    style={{ margin: 10 }}
                    mode='outlined'
                    label='curso'
                    value={dados.curso}
                    keyboardType='decimal-pad'
                    onChangeText={(valor) => handleChange(valor, 'curso')}
                />

                
                <Button onPress={salvar}>Salvar</Button>

            </ScrollView>
        </>
    )

}

export default DisciplinasForms