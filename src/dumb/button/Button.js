import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const style = {
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'black',
    borderRadius: 20,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
};

const convertSize = size => {
  let dynamicStyle = {};
  switch (size) {
    case 'xxs':
      dynamicStyle = {
        paddingHorizontal: 2,
        paddingVertical: 5,
      };
      break;
    case 'xs':
      dynamicStyle = {
        paddingHorizontal: 4,
        paddingVertical: 8,
      };
      break;
    case 's':
      dynamicStyle = {
        paddingHorizontal: 7,
        paddingVertical: 10,
      };

      break;
    case 'md':
      dynamicStyle = {
        paddingHorizontal: 12,
        paddingVertical: 15,
      };

      break;
    case 'lg':
      dynamicStyle = {
        paddingHorizontal: 30,
        paddingVertical: 25,
      };

      break;
    case 'lg':
      dynamicStyle = {
        paddingHorizontal: 40,
        paddingVertical: 30,
      };
      break;
    default:
      dynamicStyle = {
        paddingHorizontal: 25,
        paddingVertical: 20,
      };
      break;
  }
  return dynamicStyle;
  console.log(style.container);
};

export const Button = ({title, color, size, ...reset}) => {
  const constainerStyle = convertSize(size);

  return (
    <TouchableOpacity style={[style.container, constainerStyle]} {...reset}>
      <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  );
};
