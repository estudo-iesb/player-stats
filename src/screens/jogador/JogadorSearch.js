import React, { useEffect, useState } from 'react'
import { Avatar, Card, IconButton, Searchbar} from 'react-native-paper'
import apiTheSports from '../../services/apiTheSports'
import { ScrollView } from 'react-native'


const JogadorSearch = ({ navigation }) => {
  const [jogadores, setJogadores] = useState([])
  const [searchText, setSearchText] = useState('')

  const fetchJogadores = async () => {
    try {
        const response = await apiTheSports.get(`/3/searchplayers.php?p=${searchText}`);
        // Filtra os jogadores para incluir apenas aqueles com strSport igual a "Soccer" (Futebol)
        const jogadoresDeFutebol = response.data.player.filter((jogador) => jogador.strSport === "Soccer");
        setJogadores(jogadoresDeFutebol);
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
    }
}

  useEffect(() => {
    fetchJogadores()
  }, [searchText])

  return (
    <ScrollView>

      <Searchbar
        placeholder="Pesquisar Jogadores"
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />

      {jogadores.map(item => (
        <Card key={item.idPlayer}>
          <Card.Title
            title={item.strPlayer}
            subtitle={item.strTeam}
            left={(props) => (
              <Avatar.Image
                size={44}
                source={{ uri: item.strThumb }}
              />
            )}
            right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => navigation.push('JogadorProfile', { id: item.idPlayer })} />}
          />
        </Card>
      ))}
    </ScrollView>
  )
}

export default JogadorSearch
