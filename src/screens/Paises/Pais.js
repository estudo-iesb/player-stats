import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import apiTheSports from '../../services/apiTheSports';
import ItemPais from '../../components/ItemPais';

const Pais = ({ navigation }) => {
    const [paises, setPaises] = useState([]);
    const [searchText, setSearchText] = useState('');

    const fetchPaises = async () => {
        try {
            const response = await apiTheSports.get('/3/all_countries.php');
            const allCountries = response.data.countries;

            
            const filteredCountries = allCountries.filter((country) => {
                
                const countryName = country.name_en.toLowerCase();
                const searchTerm = searchText.toLowerCase();
                return countryName.includes(searchTerm);
            });

            setPaises(filteredCountries);
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    };

    useEffect(() => {
        fetchPaises();
    }, [searchText]);

    return (
        <>
            <Searchbar
                style={{margin: 10, borderWidth: 1}}
                placeholder="Pesquisar Países"
                onChangeText={(text) => setSearchText(text)}
                value={searchText}
            />
            <FlatList
                data={paises}
                renderItem={({ item }) => <ItemPais item={item} navigation={navigation} />}
                keyExtractor={(item) => item.name_en}
            />
        </>
    );
};

export default Pais;
