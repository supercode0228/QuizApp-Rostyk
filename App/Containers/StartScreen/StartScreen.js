import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class StartScreen extends Component {
  render() {
    return (
      <View style={{padding: 80}}>
        <Text style={{fontSize: 20}}>Start Screen</Text>
        <TouchableOpacity
          style={{backgroundColor: '#000'}}
          onPress={() => this.props.onStart()}>
          <Text style={{fontSize: 40, color: '#fff'}}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default StartScreen;
