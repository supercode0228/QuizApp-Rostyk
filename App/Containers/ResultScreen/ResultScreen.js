import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ResultScreenStyle';

class ResultScreen extends Component {
  render() {
    let totalTimeString;
    if (this.props.totalTime > 60) {
      totalTimeString = `${parseInt(this.props.totalTime / 60)}m ${this.props
        .totalTime % 60}s`;
    } else {
      totalTimeString = `${this.props.totalTime}s`;
    }
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.scoreboardContainer}>
            <Text style={styles.scoreLabel}>Total Score</Text>
            <Text style={styles.scoreNumber}>{this.props.totalScore}</Text>
          </View>
          <View style={[styles.scoreboardContainer, {marginVertical: 20}]}>
            <Text style={styles.scoreLabel}>Total Time</Text>
            <Text style={styles.scoreNumber}>{totalTimeString}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.onPlayAgain()}>
          <Text style={styles.buttonText}>Play Again</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ResultScreen;
