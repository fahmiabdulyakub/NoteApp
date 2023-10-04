import {View, TextInput, TextInputProps} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import {Colors} from '@themes';

const Input = (props: TextInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor={Colors.dark_grey}
        numberOfLines={5}
        {...props}
      />
    </View>
  );
};

export default memo(Input);
