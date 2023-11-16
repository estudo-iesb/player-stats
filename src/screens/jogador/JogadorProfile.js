import React, { useEffect, useState } from 'react'
<<<<<<< HEAD
import { FlatList, Linking, ScrollView, StyleSheet, View } from 'react-native'
import { Avatar, Divider, IconButton, List, Text } from 'react-native-paper'
=======
import { Button, Linking, ScrollView, StyleSheet, View } from 'react-native'
import { Avatar, IconButton, Text } from 'react-native-paper'
>>>>>>> origin/feature-pdf
import apiTheSports from '../../services/apiTheSports'
import ItemCarousel from '../../components/ItemCarousel';
import Carousel from 'react-native-snap-carousel-v4';
import formatURL from '../../utils/FormatURL';
<<<<<<< HEAD
import ItemHonras from '../../components/ItemHonras';
=======
import jsPDF from 'jspdf';
import formatData from '../../utils/FormatData';
>>>>>>> origin/feature-pdf

//importar biblioteca npm install jspdf

const JogadorProfile = ({ route }) => {

    const [jogador, setJogador] = useState({})
    const [marco, setMarco] = useState([])
    const [honra, setHonras] = useState([])

    const exportToPDF = () => {
        const doc = new jsPDF();
        const img = new Image();

        // URL da imagem do jogador
        const avatarURL = jogador.strThumb;

        img.onload = function () {
            // Adiciona a imagem do jogador ao PDF
            doc.addImage(this, 'JPEG', 20, 10, 50, 50);
            doc.setFontSize(16);

            // Ajusta a coordenada Y e X para o nome do jogador
            const nomeX = 20;
            const nomeY = 70;
            doc.text(`Nome: ${jogador.strPlayer}`, nomeX, nomeY);

            doc.text(`Redes Sociais:`, 20, 80);
            doc.text(`- Twitter: ${formatURL(jogador.strTwitter)}`, 30, 95);
            doc.text(`- Instagram: ${formatURL(jogador.strInstagram)}`, 30, 110);
            doc.text(`- Facebook: ${formatURL(jogador.strFacebook)}`, 30, 125);
            doc.text(`Marcos de Carreira:`, 20, 145);
            doc.addPage();

            marco.forEach((item, index) => {
                // Adiciona uma nova página para cada item no array marco (exceto para o primeiro item)
                if (index > 0) {
                    doc.addPage();
                }

                // Adiciona a imagem do marco
                const marcoImageY = 20; // Ajuste vertical na nova página
                doc.addImage(item.strMilestoneLogo, 'JPEG', 20, marcoImageY, 50, 50);

                // Adiciona o texto do marco
                doc.text(`Título: ${item.strMilestone}`, 80, marcoImageY + 20);
                doc.text(`Equipe: ${item.strTeam}`, 80, marcoImageY + 35);
                doc.text(`Data: ${formatData(item.dateMilestone)}`, 80, marcoImageY + 50);

                // Adiciona um espaço entre os itens
                doc.text('', 20, marcoImageY + 80);

                // Adiciona o texto do marco de forma textual
                doc.text(`- ${item.strMilestone} - ${formatData(item.dateMilestone)}`, 30, marcoImageY + 160);
            });

            doc.save('jogador_profile.pdf');
        };

        // Define a origem da imagem do jogador
        img.crossOrigin = 'Anonymous';
        img.src = jogador.strThumb;
    };

    useEffect(() => {
        const id = route.params.id

        apiTheSports.get(`/3/lookupplayer.php?id=${id}`).then(resultado => {
            setJogador(resultado.data.players[0])
        })
<<<<<<< HEAD
=======
    }, [])



    useEffect(() => {
        const id = route.params.id
>>>>>>> origin/feature-pdf

        apiTheSports.get(`/3/lookupmilestones.php?id=${id}`).then(resultado => {
            setMarco(resultado.data.milestones)
        })

        apiTheSports.get(`/3/lookuphonours.php?id=${id}`).then(resultado => {
            setHonras(resultado.data.honours)
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
                <IconButton
                    icon="export-variant"
                    iconColor="#1877F2"
                    size={44}
                    title="Exportar para PDF" onPress={exportToPDF}
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

            <View>
                <FlatList
                    data={honra} 
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ItemHonras data={item} />}
                />
            </View>


            <ItemHonras data={honra} />

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
