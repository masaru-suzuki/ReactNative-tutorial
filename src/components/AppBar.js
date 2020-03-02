import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Font from 'expo-font';

class Appbar extends React.Component {
  render() {
    return(
      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTitle}>MEMORIZE</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    color: '#444',

  },
});

export default Appbar;