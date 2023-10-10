
import { Button, Text } from 'react-native-paper'


const Disciplinas = ({navigation}) => {
  return (
    <>
      <Text style={{padding:10,alignSelf:'center'}}>encaminhando para o formulário </Text>
      <Button style={{marginHorizontal:100}}
      icon='plus' 
      mode='contained'
      onPress={() => navigation.push('disciplinas-form')}
      >
        Novo
        </Button>    
    </>
  )
}

export default Disciplinas