import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Video from 'react-native-video';
import {WebView} from 'react-native-webview';

const VideoPlayer = ({route}) => {
  const {urlVideo} = route.params;
  console.log(urlVideo);
  // return <Video style={{flex: 1}} source={{uri: `${urlVideo}`}} />;
  return (
    <WebView
      allowsFullscreenVideo
      useWebKit
      allowsInlineMediaPlayback
      mediaPlaybackRequiresUserAction
      javaScriptEnabled
      scrollEnabled={false}
      source={{uri: urlVideo}}
      style={{flex: 1}}
    />
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({});
