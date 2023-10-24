import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Avatar, Text } from 'react-native-paper'
import apiTheSports from '../../services/apiTheSports'

const JogadorProfile = ({ route }) => {

    const [jogador, setJogador] = useState({})

    useEffect(() => {
        const id = route.params.id

        apiTheSports.get(`/3/lookupplayer.php?id=${id}`).then(resultado => {
            setJogador(resultado.data.players[0])
        })
    }, [])

    return (
        <ScrollView>
            <View style={styles.header}>
                
            </View>
            <Avatar.Image
                style={styles.avatar}
                size={190}
                source={{ uri: jogador.strThumb }}
            />
            <Text style={styles.title}>{jogador.strPlayer}</Text>
            <View style={styles.infoContainer}></View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#5DB075',
        height: 200,
        marginBottom: 30,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: 'white',
        marginBottom: 20,
        alignSelf: 'center',
        position: 'absolute',
        top: 100,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 70,
        marginBottom: 10,
    },
    infoContainer: {
        padding: 25,
    }
});

export default JogadorProfile
