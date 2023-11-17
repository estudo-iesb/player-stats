import React from 'react';
import {StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const ItemHonras = ({item}) => {
  // Desestruture o objeto 'data' para acessar os campos desejados

  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title>{item.strHonour}</Title>
        <Paragraph>Temporada: {item.strSeason}</Paragraph>
        <Paragraph>Time: {item.strTeam}</Paragraph>
      </Card.Content>
    </Card>



  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 15,
    marginHorizontal: 10,
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
