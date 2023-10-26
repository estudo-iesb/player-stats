import React, { useEffect, useState } from 'react'
import apiTheSports from '../../services/apiTheSports'
import { FlatList} from 'react-native'
import ItemLigas from '../../components/ItemLigas'

const Liga = ({navigation}) => {
    const [liga, setLiga] = useState([])


    useEffect(() => {
        apiTheSports.get(`/3/all_leagues.php`).then((resultado) => {
            // Filtra as ligas para incluir apenas aquelas com strSport igual a "Soccer" (Futebol)
            const ligasDeFutebol = resultado.data.leagues.filter((liga) => liga.strSport === "Soccer");
            setLiga(ligasDeFutebol);
        });
    }, []);

    return (            
            <FlatList
                data={liga}
                renderItem={({item}) => <ItemLigas item={item} navigation={navigation} />}
                keyExtractor={item => item.idLeague}
            />
    )
}

export default Liga
