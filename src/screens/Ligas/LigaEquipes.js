import React, { useEffect, useState } from 'react';
import { Avatar, Card, Text, Portal, Modal, Button } from 'react-native-paper';
import apiTheSports from '../../services/apiTheSports';
import { View, ScrollView, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

const LigaEquipes = ({ navigation, route }) => {
  const [equipe, setEquipe] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    const id = route.params.id;
    apiTheSports.get(`/60130162/lookup_all_teams.php?id=${id}`)
      .then((resultado) => {
        if (resultado.data && Array.isArray(resultado.data.teams)) {
          setEquipe(resultado.data.teams);
        } else {
          setEquipe([]);
        }
      })
      .catch((error) => {
        console.error('Erro na solicitação à API:', error);
      });
  }, [route.params.id]);

  const openTeamDetails = (team) => {
    setSelectedTeam(team);
  };

  const closeTeamDetails = () => {
    setSelectedTeam(null);
  };

  // Divide os times em pares
  const teamsInPairs = [];
  for (let i = 0; i < equipe.length; i += 2) {
    teamsInPairs.push(equipe.slice(i, i + 2));
  }

  return (
    <ScrollView>
      {teamsInPairs.map((pair, index) => (
        <View key={index} style={styles.teamRow}>
          {pair.map((item) => (
            <View key={item.idTeam} style={styles.teamContainer}>
              <TouchableOpacity onPress={() => openTeamDetails(item)}>
                <View style={styles.circle}>
                  <Avatar.Image
                    source={{ uri: item.strTeamBadge }}
                    size={100}
                  />
                </View>
              </TouchableOpacity>
              <Text>{item.strTeam}</Text>
            </View>
          ))}
        </View>
      ))}

      <Portal>
        <Modal visible={selectedTeam !== null} onDismiss={closeTeamDetails}>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <Card>
              <Card.Title title={selectedTeam?.strTeam} />
              <Card.Content>
                <Text>ID: {selectedTeam?.idTeam}</Text>
                <Text>Data de Fundação: {selectedTeam?.intFormedYear}</Text>
                <Text>Estádio: {selectedTeam?.strStadium}</Text>
                <Image
                  source={{ uri: selectedTeam?.strStadiumThumb }}
                  style={styles.stadiumImage}
                />
                <Text>Uniforme</Text>
                <Image
                  source={{ uri: selectedTeam?.strTeamJersey }}
                  style={styles.uniformImage}
                />
                <Text>{selectedTeam?.strDescriptionPT}</Text>
              </Card.Content>
              <Card.Actions>
                <Button onPress={closeTeamDetails}>Fechar</Button>
              </Card.Actions>
            </Card>
          </ScrollView>
        </Modal>
      </Portal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  teamRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teamContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    padding: 16,
  },
  stadiumImage: {
    width: '100%',
    height: 200, // Ajuste conforme necessário
    resizeMode: 'cover',
    marginTop: 10,
    marginBottom: 10,
  },
  uniformImage: {
    width: '100%',
    height: 300, // Ajuste conforme necessário
    resizeMode: 'cover',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default LigaEquipes;
