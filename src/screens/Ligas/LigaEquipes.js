import React, { useEffect, useState } from 'react';
import { Avatar, Card, Text } from 'react-native-paper';
import apiTheSports from '../../services/apiTheSports';
import { ScrollView } from 'react-native';

const LigaEquipes = ({ navigation, route }) => {
  const [equipe, setEquipe] = useState([]);

  useEffect(() => {
    const id = route.params.id;
    apiTheSports.get(`/60130162/lookup_all_teams.php?id=${id}`)
      .then((resultado) => {
        if (resultado.data && Array.isArray(resultado.data.teams)) {
          setEquipe(resultado.data.teams);
        } else {
          // Caso a resposta da API não seja uma matriz de equipes
          setEquipe([]);
        }
      })
      .catch((error) => {
        console.error('Erro na solicitação à API:', error);
        // Você pode lidar com o erro de outra forma, como exibindo uma mensagem de erro.
      });
  }, [route.params.id]);

  return (
    <ScrollView>
      {equipe.map((item) => (
        <Card key={item.idTeam} style={{ borderWidth: 1, marginTop: 5, marginBottom: 5, marginLeft: 10, marginRight: 10 }}>
          <Card.Title
            title={item.strTeam}
            subtitle={item.dateTeamFounded}
            left={(props) => <Avatar.Image {...props} source={{ uri: item.strTeamBadge }} />}
            // Você pode adicionar a lógica para o ícone aqui
          />
        </Card>
      ))}
    </ScrollView>
  );
}

export default LigaEquipes;
