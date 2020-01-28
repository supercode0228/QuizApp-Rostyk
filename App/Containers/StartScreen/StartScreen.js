import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './StartScreenStyle';

class StartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.onStart()}>
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default StartScreen;
