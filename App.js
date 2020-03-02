import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemoList from './src/components/MemoList';
import Appbar from './src/components/AppBar';
import CircleButton from './src/elements/CircleButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoList />
      <CircleButton>＋</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(241, 240, 234)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingTop: 78,
  }
});
