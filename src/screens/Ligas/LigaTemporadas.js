import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { ScrollView } from 'react-native'
import apiTheSports from '../../services/apiTheSports';

const LigaTemporadas = ({navigation, route}) => {
  const [temporada, setTemporada] = useState([]);
  
  useEffect(() => {
    const id = route.params.id

    apiTheSports.get(`/3/search_all_seasons.php?id=${id}`).then(resultado => {
        setTemporada(resultado.data.seasons)
    })
}, [])
    
  return (
    <ScrollView>
      <ScrollView>
      {temporada.map((item) => (
        <Card key={item.strSeason} style={{ borderWidth: 1, marginTop: 5, marginBottom: 5, marginLeft: 10, marginRight: 10 }}>
          <Card.Title
            title={item.strSeason}
          />
        </Card>
      ))}
    </ScrollView>

    </ScrollView>
  )
}

export default LigaTemporadas