import React, { useEffect, useState } from 'react';
import apiTheSports from '../../services/apiTheSports';
import { FlatList, View, Text } from 'react-native';
import ItemLigas from '../../components/ItemLigas';
import { ActivityIndicator } from 'react-native-paper';

const Liga = ({ route, navigation }) => {
  const { countryName } = route.params;
  const [ligas, setLigas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiTheSports.get(`/3/search_all_leagues.php?c=${countryName}&s=Soccer`).then((resultado) => {
      // Filtra as ligas para incluir apenas aquelas com strSport igual a "Soccer" (Futebol)
      const ligasDeFutebol = resultado.data.countries || []; // Inicializa com um array vazio se não houver ligas
      setLigas(ligasDeFutebol);
      setIsLoading(false);
    });
  }, [countryName]);

  return (
    <View >
      {isLoading ? (
        <ActivityIndicator size="large" color="#00FA9A" />
      ) : ligas.length > 0 ? (
        <FlatList
          data={ligas}
          renderItem={({ item }) => <ItemLigas data={item} navigation={navigation} />}
          keyExtractor={(item) => item.idLeague}
          numColumns={2} // Renderiza 2 ligas por linha
        />
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Este país não tem ligas.</Text>
        </View>
      )}
    </View>
  );
};

export default Liga;
