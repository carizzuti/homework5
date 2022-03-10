import {View, Text} from 'react-native';
import React from 'react';
import {Button} from '../../dumb/button/Button';
import {styles} from './Quiz.style';

export function QuizView({data, press}) {
  return (
    <View>
      <Text>{data.question}</Text>
      {data.answers.map((currentAnswer, index) => (
        <View key={'answer-' + index} style={styles.answerContainer}>
          <Button onPress={() => press(index)} title={currentAnswer} />
        </View>
      ))}
    </View>
  );
}
