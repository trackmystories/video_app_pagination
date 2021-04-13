import React, {useState} from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {RNVideoProps} from '../types/types';

export default function RNVideo(props: RNVideoProps) {
  return (
    <View style={styles.container}>
      <WebView useWebKit={true} source={{uri: props.videoSrc}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
  },
});
