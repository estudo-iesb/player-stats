import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Importe pages for menu
import NewNoticeStack from './src/screens/noticia/NewNoticeStack';
import JogadorStack from './src/screens/jogador/JogadorStack';
import LigaStack from './src/screens/Ligas/LigaStack';
import PaisStack from './src/screens/Paises/PaisStack';




const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Notices"
              component={NewNoticeStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="book-open-page-variant" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Jogador"
              component={JogadorStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="account-search" size={26} />
                ),
              }}
            />

            <Tab.Screen
              name="Ligas"
              component={LigaStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="trophy" size={26} />
                ),
              }}
            />
             <Tab.Screen
              name="Países"
              component={PaisStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="trophy" size={26} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}