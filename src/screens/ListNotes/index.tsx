import {View, FlatList, Text} from 'react-native';
import React from 'react';
import {NoteType} from '@types';
import {NoteItem} from '@components/molecules';
import useListNotes from './hooks/useListNotes';
import styles from './styles';
import {Button} from '@components/atoms';

const ListNotes = () => {
  const {notes, handleAddNote} = useListNotes();

  const renderItem = ({item}: {item: NoteType}) => {
    return <NoteItem {...item} />;
  };

  const keyExtractor = (item: NoteType) => item?.id;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Notes</Text>
      <FlatList
        data={notes}
        numColumns={2}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.columnWrapper}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />
      <Button
        style={styles.addNoteButton}
        title="Add Note"
        onPress={handleAddNote}
      />
    </View>
  );
};

export default ListNotes;
