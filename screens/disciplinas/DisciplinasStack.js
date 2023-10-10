import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Disciplinas from './Disciplinas';
import DisciplinasForms from './DisciplinasForm';


const Stack = createNativeStackNavigator();
const DisciplinasStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="disciplinas" component={Disciplinas} options={{ title: 'disciplinas' }} />
                <Stack.Screen name="disciplinas-form" component={DisciplinasForms} options={{ title: 'disciplinas' }} />
            </Stack.Navigator>
        </>
    )
}

export default DisciplinasStack