import {NoteType} from '@types';
import {
  encryptAndSaveNotes,
  retrieveAndDecryptNotes,
} from '@utils/EncryptionUtils';
import {pop} from '@utils/NavigationUtils';
import {useState} from 'react';

const useEditNote = (props: NoteType) => {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);

  const handleEditNote = async () => {
    const existingNotes = await retrieveAndDecryptNotes();
    if (existingNotes) {
      const updateData = existingNotes.map(item => {
        if (item.id === props.id) {
          return {...item, title, description};
        }
        return item;
      });
      await encryptAndSaveNotes(updateData);
    }
    pop();
  };

  return {title, description, setTitle, setDescription, handleEditNote};
};

export default useEditNote;
