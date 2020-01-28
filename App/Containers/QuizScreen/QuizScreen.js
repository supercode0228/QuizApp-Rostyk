import React, {Component} from 'react';
import {View, Text} from 'react-native';

class QuizScreen extends Component {
  state = {
    currentIndex: 2,
    confirmed: false,
  };

  shuffle(array) {
    let j, x, i;
    for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = array[i];
      array[i] = array[j];
      array[j] = x;
    }
    return array;
  }
  render() {
    const {questions} = this.props;
    const shuffledQuestions = this.shuffle([
      questions[this.state.currentIndex].correct,
      ...questions[this.state.currentIndex].incorrect,
    ]);
    return (
      <View style={{paddingVertical: 40, paddingHorizontal: 10}}>
        <Text style={{fontSize: 40}}>QuizScreen</Text>
        <Text style={{fontSize: 20}}>
          {`Question ${this.state.currentIndex + 1}`}
        </Text>
        <Text style={{fontSize: 20}}>
          {questions[this.state.currentIndex].question}
        </Text>
        <View>
          {shuffledQuestions.map((item, index) => {
            if (typeof item === 'boolean') {
              if (item) {
                return (
                  <Text style={{fontSize: 20}} key={index}>
                    True
                  </Text>
                );
              } else {
                return (
                  <Text style={{fontSize: 20}} key={index}>
                    False
                  </Text>
                );
              }
            } else {
              return (
                <Text style={{fontSize: 20}} key={index}>
                  {item}
                </Text>
              );
            }
          })}
        </View>
      </View>
    );
  }
}

export default QuizScreen;
