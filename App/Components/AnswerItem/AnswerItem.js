import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './AnswerItemStyle';

class AnswerItem extends Component {
  convertRegularString = text => {
    const text1 = text.replace(/&quot;/g, `"`);
    const text2 = text1.replace(/&#039;s/g, `'s`);
    const text3 = text2.replace(/&eacute;/g, `É`);
    const text4 = text3.replace(/&#039;/g, `'`);
    const text5 = text4.replace(/(&ldquo;)/g, '"');
    return text5;
  };
  render() {
    const {selected, label, onSelect} = this.props;
    return (
      <TouchableOpacity
        onPress={() => onSelect(label)}
        style={[
          styles.container,
          {backgroundColor: selected ? '#000' : '#fff'},
        ]}>
        <Text style={[styles.text, {color: selected ? '#fff' : '#000'}]}>
          {this.convertRegularString(label)}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default AnswerItem;
