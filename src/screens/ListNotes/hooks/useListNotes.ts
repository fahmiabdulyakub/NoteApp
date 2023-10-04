import {useFocusEffect} from '@react-navigation/native';
import {NoteType} from '@types';
import {retrieveAndDecryptNotes} from '@utils/EncryptionUtils';
import {navigate} from '@utils/NavigationUtils';
import {useState} from 'react';
import {Alert} from 'react-native';

const useListNotes = () => {
  const [notes, setNotes] = useState<NoteType[]>([]);

  useFocusEffect(() => {
    getNotes();
  });

  const getNotes = async () => {
    await retrieveAndDecryptNotes()
      .then(decryptedNotes => {
        if (decryptedNotes) {
          setNotes(decryptedNotes);
        }
      })
      .catch(error => {
        console.error('Failed to retrieve and decrypt notes:', error);
        Alert.alert(
          'Error',
          'Failed to retrieve notes. Please try again later.',
        );
      });
  };

  const handleAddNote = () => {
    navigate('AddNote');
  };
  return {notes, handleAddNote};
};

export default useListNotes;
