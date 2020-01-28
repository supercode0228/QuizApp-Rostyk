import React, {Component} from 'react';
import {View, Text} from 'react-native';
import StartScreen from './StartScreen';
import QuizScreen from './QuizScreen';
import ResultScreen from './ResultScreen';

class App extends Component {
  state = {
    started: false,
    finished: false,
  };

  onStart = () => {
    this.setState({
      started: true,
    });
  };

  onFinish = () => {
    this.setState({
      finished: true,
    });
  };

  onPlayAgain = () => {
    this.setState({
      started: false,
    });
  };
  render() {
    return (
      <View>
        {!this.state.started && <StartScreen onStart={this.onStart} />}
        {this.state.started && !this.state.finished && (
          <QuizScreen questions={questions} />
        )}
        {this.state.finished && <ResultScreen />}
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
