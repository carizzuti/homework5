import {View, Text} from 'react-native';
import React from 'react';
import {QuizView} from './Quiz.view';

export function Quiz() {
  // mock
  const mockData = {
    question: 'What const is doing?',
    answers: [
      'Create variable',
      'define function',
      'Shot down computer',
      'And one more stupid idea',
    ],
    correctAnswer: 0,
  };

  const checkAnswer = (index) => {
    console.log("I'm checking the answer", index);
    if (index === mockData.correctAnswer) {
      alert("Correct");
    } else {
      alert("Incorrect");
    }
  };

  return <QuizView data={mockData} press={checkAnswer} />;
}