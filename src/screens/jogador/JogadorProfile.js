import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Avatar, Text } from 'react-native-paper'
import apiTheSports from '../../services/apiTheSports'

const JogadorProfile = ({ route }) => {

    const [jogador, setJogador] = useState([])

    useEffect(() => {
        const id = route.params.id
        
        apiTheSports.get(`/3/lookupplayer.php?id=${id}`).then(resultado => {
            setJogador(resultado.data.players)
        })
    },[])
    
    return (
        <ScrollView>
            <View style={styles.header}></View>
            <Avatar.Image
                style={styles.avatar}
                size={140}
                source={{ uri: jogador.strCutout }}
            />
            <Text style={styles.title}>{jogador.strPlayer}</Text>
            <View style={styles.infoContainer}></View>
        </ScrollView>
    );
};

export default JogadorProfile
