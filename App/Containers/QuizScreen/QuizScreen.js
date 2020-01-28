import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {AnswerItem} from '../../Components';
import styles from './QuizScreenStyle';

class QuizScreen extends Component {
  state = {
    currentIndex: 0,
    confirmedItem: null,
    answers: [],
  };

  componentDidMount() {
    this.arrangeAnswers();
  }

  componentDidUpdate({}, prevStates) {
    if (prevStates.currentIndex !== this.state.currentIndex) {
      this.arrangeAnswers();
    }
  }

  arrangeAnswers = () => {
    const {questions} = this.props;
    const {currentIndex} = this.state;
    const shuffledQuestions = this.shuffle([
      questions[currentIndex].correct,
      ...questions[currentIndex].incorrect,
    ]);
    this.setState({
      answers: shuffledQuestions,
    });
  };

  shuffle = array => {
    let j, x, i;
    for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = array[i];
      array[i] = array[j];
      array[j] = x;
    }
    return array;
  };

  onSelectAnswer = answer => {
    this.setState({
      confirmedItem: answer,
    });
  };

  checkResult = () => {
    const {questions} = this.props;
    const {currentIndex, confirmedItem} = this.state;
    const correctAnswer = questions[currentIndex].correct;
    if (typeof correctAnswer === 'boolean') {
      return (
        (correctAnswer && confirmedItem === 'True') ||
        (!correctAnswer && confirmedItem === 'False')
      );
    } else {
      return correctAnswer === confirmedItem;
    }
  };

  onConfirm = () => {
    const {confirmedItem} = this.state;
    const {questions, updateScore, onFinish, startTime} = this.props;
    if (confirmedItem) {
      if (questions.length - 1 > this.state.currentIndex) {
        if (this.checkResult()) {
          updateScore(1);
        }
        this.setState({
          currentIndex: this.state.currentIndex + 1,
          confirmedItem: null,
        });
      } else {
        const finishTime = new Date();
        if (this.checkResult()) {
          updateScore(1);
        }
        const timeInterval = parseInt((finishTime - startTime) / 1000);
        onFinish(timeInterval);
      }
    } else {
      Alert.alert('Please choose your answer');
    }
  };
  render() {
    const {questions} = this.props;
    const {confirmedItem, currentIndex} = this.state;

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.ques_number}>
            {`Question ${currentIndex + 1}`}
          </Text>
          <Text style={styles.ques_text}>
            {questions[currentIndex].question}
          </Text>
          <View>
            {this.state.answers.map((item, index) => {
              let labelText;
              if (typeof item === 'boolean') {
                if (item) {
                  labelText = 'True';
                } else {
                  labelText = 'False';
                }
              } else {
                labelText = item;
              }
              return (
                <AnswerItem
                  key={index}
                  selected={
                    typeof item !== 'boolean'
                      ? item === confirmedItem
                      : labelText === confirmedItem
                  }
                  label={labelText}
                  onSelect={this.onSelectAnswer}
                />
              );
            })}
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onConfirm()}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default QuizScreen;
