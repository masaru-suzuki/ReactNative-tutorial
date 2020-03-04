import React from 'react';
import {
  StyleSheet, View, TextInput,
} from 'react-native';
import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.memoEditInput} multiline value="aaaa" />
        <CircleButton name="check" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    backgroundColor: '#ddd',
    flex: 1,
    padding: 24,
    paddingTop: 36,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 16,
  },
});

export default MemoEditScreen;
