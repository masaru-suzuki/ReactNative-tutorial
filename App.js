import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BodyText from './src/elements/BodyText';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>hello!</Text>
      <BodyText>hello!</BodyText>
      <BodyText>hello!</BodyText>
      <BodyText>hello!</BodyText>
      <BodyText>hello!</BodyText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
