import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import YouTube from 'react-native-youtube-iframe';

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
  const playerRef = useRef();

  const handleReady = () => {
    // Inicia o próximo vídeo assim que o anterior estiver pronto
    if (currentIndex < footballVideoIds.length - 1) {
      playerRef.current?.seekTo(0); // Reinicia o vídeo atual
      setCurrentIndex(currentIndex + 1);
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.videoContainer}>
      <YouTube
        videoId={item}
        width={Dimensions.get('window').width}
        height={300} // Altura máxima desejada
        onReady={handleReady}
        ref={playerRef}
      />
    </View>
  );

  return (
    <View style={{}}>
      <FlatList
        data={footballVideoIds}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={currentIndex}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(event.nativeEvent.contentOffset.x / Dimensions.get('window').width);
          setCurrentIndex(newIndex);
        }}
      />

      <View style={styles.videoCounterContainer}>
        <Text style={styles.videoCounter}>{`Vídeo ${currentIndex + 1} de ${footballVideoIds.length}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    width: Dimensions.get('window').width,
    height: 300, // Altura máxima desejada
  },
  videoCounterContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 10,
  },
  videoCounter: {
    textAlign: 'center',
  },
});

export default NewNotices;
