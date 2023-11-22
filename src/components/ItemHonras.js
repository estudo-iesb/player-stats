import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const ItemHonras = ({ item }) => {
  return (
    <View style={styles.timelineItem}>
      <View style={styles.timelineMarker} />
      <Card style={styles.container}>
        <Card.Content>
          <Title style={styles.title}>{item.strHonour}</Title>
          <Paragraph>Temporada: {item.strSeason}</Paragraph>
          <Paragraph>Time: {item.strTeam}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  timelineMarker: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#10de4f',
    marginRight: 10,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 20,
    padding: 5,
    fontWeight: 'bold',
    color: '#10de4f',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
  },
});

export default ItemHonras;
