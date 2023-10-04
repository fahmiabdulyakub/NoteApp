import {View} from 'react-native';
import React from 'react';
import useEditNote from './hooks/useEditNote';
import {InputNote} from '@components/molecules';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParams} from '@types';

export type Props = NativeStackScreenProps<StackParams, 'EditNote'>;

const EditNote = (props: Props) => {
  const {title, description, setTitle, setDescription, handleEditNote} =
    useEditNote(props.route.params);
  return (
    <View style={styles.container}>
      <InputNote
        title={title}
        description={description}
        onChangeTitle={setTitle}
        onChangeDescription={setDescription}
        onSave={handleEditNote}
      />
    </View>
  );
};

export default EditNote;
