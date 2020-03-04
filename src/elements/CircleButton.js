import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';


class CircleButton extends React.Component {
  // stateはconstructorいらないんだっけ・・・？
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      FontAwsome: fontAwsome,
    });

    this.setState({ fontLoaded: true });
  }

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

    // https://docs.expo.io/versions/v36.0.0/guides/icons/#expovector-icons
    // これと比較すると勉強になる
    const { name, style } = this.props;
    const glyphMap = {
      pencil: '\uf303',
      pulus: '\uf067',
    };
    const CustomIcon = createIconSet(glyphMap, 'FontAwsome');

    return (
      // ここのstyleの付け方慣れていない
      // <View style={[styles.circleBtn, style, {backgroundColor: bgColor}]}>
      //   <Text style={[styles.addBtn, {color: txtColor}]}>{this.props.children}</Text>
      <View style={[styles.circleBtn, style]}>
        {this.state.fontLoaded ? (
          <Text style={styles.addBtn}>
            <CustomIcon name={name} size={25} />
          </Text>
        ) : null}
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
    shadowRadius: 3,
  },
  addBtn: {
    fontSize: 25,
    lineHeight: 25,
    opacity: 0.4,
  },
});

export default CircleButton;
