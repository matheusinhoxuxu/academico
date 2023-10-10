import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CursosStack from './screens/cursos/CursosStack';
import Professores from './screens/professores/Professores';
import Disciplinas from './screens/disciplinas/Disciplinas';
import AlunosStack from './screens/alunos/AlunosStack';
import DisciplinasStack from './screens/disciplinas/DisciplinasStack';
import ProfessoresStack from './screens/professores/ProfessoresStack';


const Tab = createMaterialBottomTabNavigator();

export default function App() {

  return (
    <>
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Cursos"
            component={CursosStack}
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons name="notebook" size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="disciplinas"
            component={DisciplinasStack}
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons name="google-classroom" size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="professores"
            component={ProfessoresStack}
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons name="account-box" size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="alunos"
            component={AlunosStack}
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons name="emoticon-wink-outline" size={26} />
              ),
            }}
          />
          
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  </>
  );
}

