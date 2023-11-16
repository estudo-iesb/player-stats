import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ItemHonras = ({ data }) => {
  // Desestruture o objeto 'data' para acessar os campos desejados
  const { strHonour, strSeason, strSport, strTeam } = data;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{strHonour}</Text>
      <Text style={styles.subtitle}>Temporada: {strSeason}</Text>
      <Text style={styles.subtitle}>Esporte: {strSport}</Text>
      <Text style={styles.subtitle}>Time: {strTeam}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
  },
});

export default ItemHonras;
