import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ItemLigas = ({ data, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.square}
      onPress={() => navigation.push('liga-equipes', { id: data.idLeague })}
    >
      <Image source={{ uri: data.strBadge }} style={styles.image} />
      <Text style={styles.text}>{data.strLeague}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    margin: 2,
    backgroundColor: '',
    width: '49%', 
    height: 150,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    fontSize: 16,
  },
});

export default ItemLigas;
