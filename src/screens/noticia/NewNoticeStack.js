import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import NewNotices from './NewNotices';

const Stack = createNativeStackNavigator();

const NewNoticeStack = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="NewNotices"
          component={NewNotices}
          options={{
            title: 'Notícias',
            headerStyle: {
              backgroundColor: '#3498db', // Defina a cor de fundo desejada
            },
            headerTintColor: '#fff', // Defina a cor do texto do cabeçalho
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default NewNoticeStack;
