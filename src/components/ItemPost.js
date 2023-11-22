import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';

const ItemPost = ({ post, onPressLike, onPressLink }) => {

    const getSentimentColor = () => {
        switch (post.sentiment) {
            case 'positive':
                return 'green';
            case 'neutral':
                return 'yellow';
            case 'negative':
                return 'red';
            default:
                return 'gray';
        }
    };

    return (
        <Card style={{ ...styles.card, borderColor: getSentimentColor() }}>
            {post.image ? (
                <Card.Cover source={{ uri: post.image }} />
            ) : (
                <Image
                    source={{ uri: 'https://via.placeholder.com/720?text=A+Imagem+está+indisponível' }} // Substitua o tamanho conforme necessário
                    style={{ width: '100%', height: 200 }} // Ajuste as dimensões conforme necessário
                />

            )}

            <Card.Content>
                <Text style={styles.previewText}>{post.text}</Text>
            </Card.Content>

            <Card.Actions style={styles.cardActions}>
                <Button icon="thumb-up" onPress={onPressLike}>
                    Like
                </Button>
                <Button icon="link" onPress={onPressLink}>
                    Link
                </Button>
            </Card.Actions>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        borderWidth: 3,
    },
    previewText: {
        fontSize: 16,
        marginBottom: 10,
    },
    cardActions: {
        justifyContent: 'space-between',
    },
});

export default ItemPost;
