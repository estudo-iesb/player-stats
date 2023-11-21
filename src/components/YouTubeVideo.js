import React from 'react';
import { View, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const YouTubeVideo = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: embedUrl }}
        allowsFullscreenVideo={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default YouTubeVideo;
