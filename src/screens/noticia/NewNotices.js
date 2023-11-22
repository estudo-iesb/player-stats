import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import YouTube from 'react-native-youtube-iframe';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

const NewNotices = () => {
  const footballVideoIds = [
    'gSuzx1mAOms',
    'thJ0sUR_sWg',
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

  const renderNewsItem = ({ item, index }) => (
    <View style={[styles.newsContainer, { backgroundColor: index % 2 === 0 ? '#DCDCDC' : '#A9A9A9' }]}>
      <Text style={styles.newsTitle}>{item.title}</Text>
      <Text style={styles.newsContent}>{item.description}</Text>
    </View>
  );

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
          <Icon name="chevron-left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.navigationText}>{currentIndex + 1} de {footballVideoIds.length}</Text>
        <TouchableOpacity onPress={handleNext} style={styles.navigationButton}>
          <Icon name="chevron-right" size={30} color="white" />
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
    backgroundColor: '#708090', // Cor de fundo suave
  },
  videoContainer: {
    width: Dimensions.get('window').width,
    height: 500,
  },
  newsContainer: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
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
    color: '#333', // Cor do texto mais escura
  },
  newsContent: {
    fontSize: 16,
    color: '#666', // Cor do texto mais clara
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  navigationButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Cor de fundo com transparência
    padding: 10,
    borderRadius: 5,
  },
  navigationText: {
    color: '#333',
    fontSize: 18,
  },
  newsHeading: {
    alignSelf: 'center',
    margin: 10,
    backgroundColor: '#363636',
    padding: 10,
    borderRadius: 7,
    color: 'white', // Cor do texto
  },
  newsList: {
    margin: 10,
    marginTop: 0,
    
    borderColor: '#ddd',
    borderRadius: 10,
  },
});

export default NewNotices;
