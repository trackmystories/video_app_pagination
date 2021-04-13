import React, {useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {WebView} from 'react-native-webview';
import {RNVideoProps} from '../types/types';

export default function RNVideo(props: RNVideoProps) {
  return (
    <View style={styles.container}>
      <Image source={{uri: props.image}} style={{width: '50%'}} />
      <WebView
        useWebKit={true}
        source={{uri: props.videoSrc}}
        style={{width: '100%'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    height: 100,
  },
});
