import React from 'react';
import { Card, IconButton } from 'react-native-paper';

const ItemPais = ({ item, navigation }) => {
  return (
    <Card
      style={{ margin: 10, backgroundColor: 'white' }}
      key={item.name_en}
      onPress={() => navigation.navigate('liga', { countryName: item.name_en })}
    >
      <Card.Title
        title={item.name_en}
        left={(props) => (
          <IconButton {...props} icon="flag-variant" onPress={() => navigation.navigate('liga', { countryName: item.name_en })} />
        )}
        right={(props) => (
          <IconButton {...props} icon="chevron-right" onPress={() => navigation.navigate('liga', { countryName: item.name_en })} />
        )}
      />
    </Card>
  );
};

export default ItemPais;
