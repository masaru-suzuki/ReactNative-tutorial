import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BodyText from './src/elements/BodyText';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTitle}>MEMORIZE</Text>
        </View>
      </View>
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>title</Text>
          <Text style={styles.memoDate}>2020/2/22</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>title</Text>
          <Text style={styles.memoDate}>2020/2/22</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>title</Text>
          <Text style={styles.memoDate}>2020/2/22</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>title</Text>
          <Text style={styles.memoDate}>2020/2/22</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>title</Text>
          <Text style={styles.memoDate}>2020/2/22</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>title</Text>
          <Text style={styles.memoDate}>2020/2/22</Text>
        </View>
      </View>

      <View style={styles.memoAddBtn}>
        <Text style={styles.addBtn}>＋</Text>
      </View>
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
    paddingTop: 78
  },
  appbar: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    paddingTop: 30,
    backgroundColor: '#b3afaf',
    height: 78,
    lineHeight: 78,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    zIndex: 2
  },
  appbarTitle: {
    fontSize: 22,
    color: '#444'
  },
  memoList: {
    flex: 1,
    width: '100%'
  },
  memoListItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dddbdb',
    backgroundColor: 'rgb(228, 227, 223)'
  },
  memoTitle: {
    fontSize: 20,
    marginBottom: 8,
    color: '#2f2f2f'
  },
  memoDate: {
    fontSize: 12,
    color: '#484747'
  },
  memoAddBtn: {
    height: 50,
    width: 50,
    backgroundColor: '#b3afaf',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    position: 'absolute',
    bottom: 30,
    right: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3
  },
  addBtn: {
    fontSize: 25,
    lineHeight: 25,
    opacity: 0.5
  }
});
