import React, { useEffect, useState } from 'react'
import { Linking, ScrollView, StyleSheet, View } from 'react-native'
import { Avatar, IconButton, Text } from 'react-native-paper'
import apiTheSports from '../../services/apiTheSports'
import ItemCarousel from '../../components/ItemCarousel';
import Carousel from 'react-native-snap-carousel-v4';
import formatURL from '../../utils/FormatURL';
import ItemHonras from '../../components/ItemHonras';
import ordenaHonra from '../../utils/OrdenaHonra';


const JogadorProfile = ({ route }) => {

    const [jogador, setJogador] = useState({})
    const [marco, setMarco] = useState([])
    const [honra, setHonra] = useState([])

    useEffect(() => {
        const id = route.params.id

        apiTheSports.get(`/3/lookupplayer.php?id=${id}`).then(resultado => {
            setJogador(resultado.data.players[0])
        })

        apiTheSports.get(`/3/lookupmilestones.php?id=${id}`).then(resultado => {
            setMarco(resultado.data.milestones)
        })

        apiTheSports.get(`/3/lookuphonours.php?id=${id}`).then(resultado => {
            let ordenar = ordenaHonra(resultado.data.honours);
            setHonra(ordenar)  
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

            <View style={styles.iconRede}>
                <IconButton
                    icon="twitter"
                    iconColor="#1DA1F2"
                    size={44}
                    onPress={() => Linking.openURL(formatURL(jogador.strTwitter))} // Abre o perfil do jogador no Twitter
                />
                <IconButton
                    icon="instagram"
                    iconColor="#E4405F"
                    size={44}
                    onPress={() => Linking.openURL(formatURL(jogador.strInstagram))} // Abre o perfil do jogador no Instagram
                />
                <IconButton
                    icon="facebook"
                    iconColor="#1877F2"
                    size={44}
                    onPress={() => Linking.openURL(formatURL(jogador.strFacebook))} // Abre o perfil do jogador no Facebook
                />
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.titleText} variant="headlineMedium">Marcos de carreira</Text>
                <Carousel
                    layout={'default'}
                    data={marco}
                    renderItem={ItemCarousel}
                    sliderWidth={380}
                    itemWidth={310}
                />
            </View>

            <View style={styles.infoContainer}>
            <Text style={styles.titleText} variant="headlineMedium">Honras da Carreira</Text>
                <Carousel
                    data={honra}
                    renderItem={ItemHonras}
                    sliderWidth={380}
                    itemWidth={310}
                    layout={'default'}
                    layoutCardOffset={18}
                />   
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#5DB075',
        height: 150,
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
        top: 50
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 70,
        marginBottom: 10,
    },
    infoContainer: {
        padding: 5,
        marginEnd: 10
    },
    titleText: {
        color: "#8b8c8b",
        fontWeight: 'bold',
        textAlign: "center",
        margin: 10

    },
    iconRede: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 50

    }
});

export default JogadorProfile
