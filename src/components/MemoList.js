import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


class MemoList extends React.Component {
  render() {
    return(
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
    );
  }
}

const styles = StyleSheet.create({
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
});

export default MemoList;