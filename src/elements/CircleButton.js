import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class CircleButton extends React.Component {
  render() {
    // const style = this.props.style;

  // ボタンの色の使い分け方法
    // const {style, color} = this.props;
    // let bgColor = '#b3afaf';
    // let txtColor = '#111';
    
    // if(color === 'white') {
      //   bgColor = '#B3AFAF';
      //   txtColor = '#111';
      // }
      const {style} = this.props;

    return(
      //ここのstyleの付け方慣れていない
      // <View style={[styles.circleBtn, style, {backgroundColor: bgColor}]}>
      //   <Text style={[styles.addBtn, {color: txtColor}]}>{this.props.children}</Text>
      <View style={[styles.circleBtn, style]}>
        <Text style={styles.addBtn}>{this.props.children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleBtn: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#b3afaf',
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