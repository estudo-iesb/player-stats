
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import formatData from '../utils/FormatData';

const ItemCarousel = ({item}) => {

    

    return (

        <Card style={styles.carouselItem} key={item.idMilestone}>
            <Card.Cover
                source={{ uri: item.strMilestoneLogo }}
                resizeMode="contain"
            />
            <Card.Content>
                <Text style={styles.title}>{item.strMilestone}</Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{item.strTeam}</Text>
                    <Text style={styles.infoText}>{formatData(item.dateMilestone)}</Text>
                </View>
            </Card.Content>
        </Card>


    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        padding: 5,
        fontWeight: 'bold',
        color: '#10de4f',
        textAlign: 'center',
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginVertical:5
    },
    infoText: {
        fontSize: 16,
        padding: 7,
    },
});

export default ItemCarousel;
