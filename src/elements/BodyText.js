import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class BodyText extends React.Component {
  render() {
    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  Text: {
    color: '#3e3e3e',
    backgroundColor: '#e4e4e4'
  }
});
export default BodyText;
