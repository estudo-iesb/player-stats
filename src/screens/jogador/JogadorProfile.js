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

        return (
            <ScrollView>
                <View style={styles.header}></View>
                <Avatar.Image
                    style={styles.avatar}
                    size={140}
                    source={{ uri: data.icon }}
                />
                <Text style={styles.title}>{data.nome}</Text>
                <View style={styles.infoContainer}></View>
            </ScrollView>
        )
    }

export default JogadorProfile

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        header: {
            backgroundColor: '#00BFFF',
            height: 200,
            marginBottom: 30,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
        },
        avatar: {
            width: 150,
            height: 150,
            borderRadius: 75,
            borderWidth: 5,
            borderColor: 'white',
            marginBottom: 20,
            alignSelf: 'center',
            position: 'absolute',
            top: 100,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 20,
            marginBottom: 10,
        },
        infoContainer: {
            padding: 25,
        },
        infoRow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
        },
        infoLabel: {
            fontSize: 18,
            fontWeight: 'bold',
        },
        infoText: {
            fontSize: 16,
            color: "Colors.grey700",
        },
    });