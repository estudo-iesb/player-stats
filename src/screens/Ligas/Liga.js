import React, { useEffect, useState } from 'react';
import apiTheSports from '../../services/apiTheSports';
import { FlatList } from 'react-native';
import ItemLigas from '../../components/ItemLigas';

const Liga = ({ route, navigation }) => {
  const { countryName } = route.params;
  const [liga, setLiga] = useState([]);

  useEffect(() => {
    apiTheSports.get(`/3/search_all_leagues.php?c=${countryName}&s=Soccer`).then((resultado) => {
      // Filtra as ligas para incluir apenas aquelas com strSport igual a "Soccer" (Futebol)
      const ligasDeFutebol = resultado.data.countries
      setLiga(ligasDeFutebol);
    });
  }, [countryName]);

  return (
    <FlatList
      data={liga}
      renderItem={({ item }) => <ItemLigas item={item} navigation={navigation} />}
      keyExtractor={(item) => item.idLeague}
    />
  );
};

export default Liga;
