import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Appbar from './src/components/AppBar';
import MemoListScreen from './src/screens/MemoListScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoListScreen />
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
