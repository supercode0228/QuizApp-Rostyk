import React, {Component} from 'react';
import axios from 'axios';
import {View} from 'react-native';
import StartScreen from './StartScreen';
import QuizScreen from './QuizScreen';
import ResultScreen from './ResultScreen';

const SERVER_URL = 'https://opentdb.com/api.php?amount=10';

class App extends Component {
  state = {
    started: false,
    finished: false,
    score: 0,
    startTime: null,
    totalTime: null,
    questions: [],
    isLoading: false,
  };

  componentDidMount() {
    this.onLoadNewQuestions();
  }

  convertRegularString = text => {
    const text1 = text.replace(/&quot;/g, `"`);
    const text2 = text1.replace(/&#039;s/g, `'s`);
    const text3 = text2.replace(/&eacute;/g, `É`);
    const text4 = text3.replace(/&#039;/g, `'`);
    const text5 = text4.replace(/(&ldquo;)/g, '"');
    return text5;
  };

  onLoadNewQuestions = () => {
    this.setState({
      isLoading: true,
    });
    axios.get(SERVER_URL).then(res => {
      const ques = res.data.results.map(item => {
        return {
          question: this.convertRegularString(item.question),
          correct: item.correct_answer,
          incorrect: item.incorrect_answers,
        };
      });
      this.setState({
        isLoading: false,
        questions: ques,
        score: 0,
      });
    });
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
    this.onLoadNewQuestions();
  };
  render() {
    const totalScore =
      parseInt((this.state.score / this.state.questions.length) * 10000) / 100;
    return (
      <View>
        {!this.state.started && (
          <StartScreen
            onStart={this.onStart}
            isLoading={this.state.isLoading}
          />
        )}
        {this.state.started && !this.state.finished && (
          <QuizScreen
            questions={this.state.questions}
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

// const questions = [
//   {
//     question: 'are you a person?',
//     correct: true,
//     incorrect: [false],
//   },
//   {
//     question: 'what is this?',
//     correct: 'pencil',
//     incorrect: ['mouse', 'laptop', 'coffee'],
//   },
//   {
//     question: 'what is your skill?',
//     correct: 'JavaScript',
//     incorrect: ['Java', 'Python', 'C++'],
//   },
// ];
