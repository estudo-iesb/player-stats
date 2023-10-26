import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { FlatList, ScrollView } from 'react-native'
import { Searchbar, Text } from 'react-native-paper'
import apiTheSports from '../../services/apiTheSports'
import ItemPais from '../../components/ItemPais'

const Pais = ({ navigation }) => {

    // const [paises, setPaises] = useState([])
    // const [filtro, setFiltro] = useState('')

    // const fetchPaises = async () => {
    //     try {
            // const response = await apiTheSports.get(`/3/all_countries.php?p=${filtro}`);
    //         // // Filtra os jogadores para incluir apenas aqueles com strSport igual a "Soccer" (Futebol)
    //         const paisesFutebol = response.data.countries
    //         setPaises(paisesFutebol);
    //     } catch (error) {
    //         console.error('Erro ao buscar os dados:', error);
    //     }
    // }

    // useEffect(() => {
    //     fetchPaises()
    // }, [filtro])

    const [jogadores, setJogadores] = useState([])
    const [searchText, setSearchText] = useState('')

    const fetchJogadores = async () => {
        try {
            const response = await apiTheSports.get(`/3/all_countries.php?p=${searchText}`);
            // Filtra os jogadores para incluir apenas aqueles com strSport igual a "Soccer" (Futebol)
            const jogadoresDeFutebol = response.data.countries;
            setJogadores(jogadoresDeFutebol);
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    }

    useEffect(() => {
        fetchJogadores()
    }, [searchText])

    return (
        <>
            <Searchbar
                placeholder="Pesquisar Jogadores"
                onChangeText={(text) => setSearchText(text)}
                value={searchText}
            />
            <FlatList
                data={jogadores}
                renderItem={({ item }) => <ItemPais item={item} navigation={navigation} />}
                keyExtractor={item => item.name_en}
            />



        </>
    )
}

export default Pais