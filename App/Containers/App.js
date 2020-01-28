import React, {Component} from 'react';
import {View, Text} from 'react-native';
import StartScreen from './StartScreen';
import QuizScreen from './QuizScreen';
import ResultScreen from './ResultScreen';

class App extends Component {
  state = {
    started: false,
    finished: false,
    score: 0,
    startTime: null,
    totalTime: null,
  };

  updateScore = val => {
    this.setState({
      score: this.state.score + val,
    });
  };

  onStart = () => {
    const startMoment = new Date();
    this.setState({
      started: true,
      startTime: startMoment,
    });
  };

  onFinish = time => {
    this.setState({
      finished: true,
      totalTime: time,
    });
  };

  onPlayAgain = () => {
    this.setState({
      started: false,
      finished: false,
    });
  };
  render() {
    const totalScore =
      parseInt((this.state.score / questions.length) * 10000) / 100;
    return (
      <View>
        {!this.state.started && <StartScreen onStart={this.onStart} />}
        {this.state.started && !this.state.finished && (
          <QuizScreen
            questions={questions}
            updateScore={this.updateScore}
            onFinish={this.onFinish}
            startTime={this.state.startTime}
          />
        )}
        {this.state.finished && (
          <ResultScreen
            totalScore={totalScore}
            totalTime={this.state.totalTime}
            onPlayAgain={this.onPlayAgain}
          />
        )}
      </View>
    );
  }
}

export default App;

const questions = [
  {
    question: 'are you a person?',
    correct: true,
    incorrect: [false],
  },
  {
    question: 'what is this?',
    correct: 'pencil',
    incorrect: ['mouse', 'laptop', 'coffee'],
  },
  {
    question: 'what is your skill?',
    correct: 'JavaScript',
    incorrect: ['Java', 'Python', 'C++'],
  },
];
