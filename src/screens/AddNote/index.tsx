import {View} from 'react-native';
import React from 'react';
import useAddNote from './hooks/useAddNote';
import {InputNote} from '@components/molecules';
import styles from './styles';

const AddNote = () => {
  const {title, description, setTitle, setDescription, handleAddNote} =
    useAddNote();
  return (
    <View style={styles.container}>
      <InputNote
        title={title}
        description={description}
        onChangeTitle={setTitle}
        onChangeDescription={setDescription}
        onSave={handleAddNote}
      />
    </View>
  );
};

export default AddNote;
