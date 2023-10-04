import {View, TextInput} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import {Colors} from '@themes';

import {Button} from '@components/atoms';
import {InputNotePropsType} from './types';

const InputNote = (props: InputNotePropsType) => {
  const {title, description, onChangeTitle, onChangeDescription, onSave} =
    props;
  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        style={styles.title}
        placeholder="Title"
        onChangeText={onChangeTitle}
        placeholderTextColor={Colors.dark_grey}
      />
      <TextInput
        value={description}
        style={styles.description}
        onChangeText={onChangeDescription}
        placeholder="Note"
        placeholderTextColor={Colors.dark_grey}
        multiline
      />
      <Button title="Save" style={styles.saveButton} onPress={onSave} />
    </View>
  );
};

export default memo(InputNote);
