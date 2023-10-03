import {Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import {PropsType} from './types';

const Button = (props: PropsType) => {
  const {title, style, textStyle, ...baseProps} = props;
  return (
    <TouchableOpacity style={[styles.container, style]} {...baseProps}>
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(Button);
