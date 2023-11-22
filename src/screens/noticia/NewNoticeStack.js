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
            title: 'Notícias'
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default NewNoticeStack;
