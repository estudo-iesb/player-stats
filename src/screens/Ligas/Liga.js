import React, { useEffect, useState } from 'react'
import { Card, IconButton, Text } from 'react-native-paper'
import apiTheSports from '../../services/apiTheSports'
import { ScrollView } from 'react-native'

const Liga = ({ navigation }) => {
    const [liga, setLiga] = useState([])

    useEffect(() => {
        apiTheSports.get(`/3/all_leagues.php`).then(resultado => {
            setLiga(resultado.data.leagues)
        })
    }, [])

    return (
        <ScrollView>
            {liga.map((item, index) => (
                <Card style={{ margin: 10, borderWidth: 1 }} key={item.id + '-' + index}>
                    <Card.Content>
                        <Text variant="titleLarge">{item.strLeagueAlternate}</Text>
                        <Text variant="bodyMedium">{item.strLeague}</Text>
                    </Card.Content>
                    <Card style={{margin: 10}}onPress={() => navigation.push('liga-temporadas', { id: item.id })}>
                        <Card.Title
                            title={'Temporadas'}
                            right={(props) => 
                            <IconButton {...props} icon="chevron-right" onPress={() => navigation.push('liga-temporadas', { id: item.id })} />}
                        />
                    </Card>
                    <Card style={{margin: 10}} onPress={() => navigation.push('liga-equipes', { id: item.id })}>
                        <Card.Title
                            title={'Equipes'}
                            right={(props) => 
                            <IconButton {...props} icon="chevron-right" onPress={() => navigation.push('liga-equipes', { id: item.id })} />}
                        />
                    </Card>
                </Card>
            ))}
        </ScrollView>
    )
}

export default Liga
