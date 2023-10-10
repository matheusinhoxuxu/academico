import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const DisciplinasForms = () => {



    const [dados, setDados] = useState({})

    function handleChange(valor, campo) {
        setDados({ ...dados, [campo]: valor })
    }

    function salvar() {


        console.log(dados)
    }

    function handleChange(valor) {
        console.warn(valor)
    }
    return (
        <>
            <ScrollView style={{ margin: 15 }}>
                <Text style={{alignSelf:'center'}}>Formulário de cursos</Text>

                <TextInput
                    style={{ margin: 10 }}
                    mode='outlined'
                    label='Nome'
                    value={dados.nome}
                    onChangeText={(valor) => handleChange(valor, 'Nome')}
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