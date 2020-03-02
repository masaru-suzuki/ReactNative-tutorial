import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class CircleButton extends React.Component {
  render() {
    return(
      <View style={styles.circleBtn}>
        <Text style={styles.addBtn}>{this.props.children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleBtn: {
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

export default CircleButton;