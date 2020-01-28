import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './AnswerItemStyle';

class AnswerItem extends Component {
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
          {label}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default AnswerItem;
