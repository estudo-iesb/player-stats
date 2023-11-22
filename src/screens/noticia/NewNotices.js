import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import YouTube from 'react-native-youtube-iframe';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-paper';
import CardStyles from '../../styles/Cardstyles';

const NewNotices = () => {
  const footballVideoIds = [
    'thJ0sUR_sWg',
    'gSuzx1mAOms',
    'jIMY1giCsDU',
    'GU5jderTllw',
    '74nC3oo6ngk',
    'z7PyXQuKM5U',
    // Adicione mais IDs de vídeo conforme necessário
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newsData, setNewsData] = useState([]);
  const playerRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            apiKey: '2bb8a6ed177747cd81ed9d38a58e1a8b',
            country: 'br', // Altere conforme necessário
            category: 'sports', // Altere conforme necessário
          },
        });

        setNewsData(response.data.articles);
      } catch (error) {
        console.error('Erro ao buscar notícias:', error);
      }
    };

    fetchData();
  }, []);

  const handleReady = () => {
    if (currentIndex < footballVideoIds.length - 1) {
      playerRef.current?.seekTo(0);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      playerRef.current?.seekTo(0);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < footballVideoIds.length - 1) {
      playerRef.current?.seekTo(0);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const renderItem = ({ index }) => (
    <View style={styles.videoContainer}>
      <YouTube
        videoId={footballVideoIds[index]}
        width={Dimensions.get('window').width}
        height={300}
        onReady={handleReady}
        ref={playerRef}
      />
    </View>
  );

  const renderNewsItem = ({ item, index }) => {
    return (
      <Card style={[CardStyles.card, styles.newsContainer]}>
        <Card.Title
          title={item.author}
          titleStyle={[styles.authorText, styles.authorTitle]} // Adicione este estilo para ajustar o alinhamento
        />
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text style={styles.newsContent}>{item.description}</Text>
      </Card>
    );
  };


  return (
    <View style={styles.container}>
      <FlatList
        data={footballVideoIds}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={currentIndex}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(event.nativeEvent.contentOffset.x / Dimensions.get('window').width);
          setCurrentIndex(newIndex);
        }}
      />

      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={handlePrev} style={styles.navigationButton}>
          <Icon name="chevron-left" size={24} style={styles.navigationIcon} />
        </TouchableOpacity>
        <Text style={styles.navigationText}>{currentIndex + 1} de {footballVideoIds.length}</Text>
        <TouchableOpacity onPress={handleNext} style={styles.navigationButton}>
          <Icon name="chevron-right" size={24} style={styles.navigationIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.newsHeading}>Últimas Notícias</Text>

      <FlatList
        style={styles.newsList}
        data={newsData}
        renderItem={renderNewsItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  authorText: {

    color: '#004080',
    fontWeight: 'bold',
  },

  authorTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -10,
  },
  videoContainer: {
    width: Dimensions.get('window').width,
    height: 500,
  },
  newsContainer: {
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  newsContent: {
    fontSize: 16,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  navigationButton: {
    padding: 10,
    borderRadius: 5,
  },
  navigationIcon: {
    color: 'blue', // cor desejada
  },
  navigationText: {
    fontSize: 18,
  },
  newsHeading: {
    backgroundColor: '#C8DCFA',
    alignSelf: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 7,
  },
  newsList: {
    margin: 10,
    marginTop: 0,
    borderColor: '#ddd',
    borderRadius: 10,
  },
});

export default NewNotices;
