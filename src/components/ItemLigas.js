import React from 'react'
import { Card, IconButton, Text } from 'react-native-paper'

const ItemLigas = ({ item, navigation }) => {
    return (
         <Card style={{ margin: 10, borderWidth: 1 }} key={item.idLeague}>
            <Card.Cover source={{ uri: `${item.strBadge}/preview` }} style={{ width: 300, height: 300, alignSelf: 'center', borderWidth: 1, marginTop: 5}} />
            <Card.Content>
                <Text variant="titleLarge">{item.strLeague}</Text>
                <Text variant="bodyMedium">{item.strLeagueAlternate}</Text>
                
            </Card.Content>
            <Card style={{ margin: 10 }} onPress={() => navigation.push('liga-temporadas', { id: item.id })}>
                <Card.Title
                    title={'Temporadas'}
                    right={(props) =>
                        <IconButton {...props} icon="chevron-right" onPress={() => navigation.push('liga-temporadas', { id: item.idLeague })} />}
                />
            </Card>
            <Card style={{ margin: 10 }} onPress={() => navigation.push('liga-equipes', { id: item.idLeague })}>
                <Card.Title
                    title={'Equipes'}
                    right={(props) =>
                        <IconButton {...props} icon="chevron-right" onPress={() => navigation.push('liga-equipes', { id: item.idLeague })} />}
                />
            </Card>
        </Card>

    )
}

export default ItemLigas