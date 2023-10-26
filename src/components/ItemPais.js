import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ScrollView, Text } from 'react-native'
import { Card, IconButton, Searchbar } from 'react-native-paper'
import apiTheSports from '../services/apiTheSports'

const ItemPais = ({item, navigation}) => {

  return (

      <Card key={item.name_en}>
        <Card.Title
          title={item.name_en}
          right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => navigation.push('JogadorProfile', { id: item.idPlayer })} />}
        />
      </Card>
  )
}

export default ItemPais