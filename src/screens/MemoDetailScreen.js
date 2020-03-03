import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  render() {
    return(
      <View style={styles.container}>
          <View style={styles.memoHeader}>
            <Text style={styles.memoHeaderTitle}>
            ReactNative Tutorial
            </Text>
            <Text style={styles.memoHeaderDate}>
            2020/3/3
            </Text>
          </View>
          <View style={styles.memoContents}>
            <Text style={styles.memoContentsText}>
            講座のアイデアです。
            </Text>
          </View>
          <CircleButton
            style={styles.editButton}
            color='white'
            //circlebuttonに渡したい設定を追加していく
          >＋</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%'
  },
  memoHeader: {
    height:100,
    justifyContent: 'center',
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
  },
  memoHeaderTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2f2f2f',
    marginBottom: 8,
  },
  memoHeaderDate: {
    color: '#484747',
    fontSize :18,
  },
  memoContents: {
    padding: 20,
    paddingTop: 30,
    flex: 1,
  },
  memoContentsText: {

  },
  editButton: {
    top: 75,
  }
});

export default MemoListScreen;