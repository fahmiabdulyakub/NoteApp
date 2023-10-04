import {Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';

import {NoteType} from '@types';
import useNoteItem from './hooks/useNoteItem';
import dayjs from 'dayjs';

const NoteItem = (props: NoteType) => {
  const {onPress} = useNoteItem(props);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.contenContainer}>
        <Text style={styles.description}>{props.description}</Text>
      </View>
      <Text style={styles.title}>
        {!props.title
          ? 'Note ' + dayjs(props.date).format('DD/MM/YYYY')
          : props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(NoteItem);
