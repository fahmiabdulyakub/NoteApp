import {
  encryptAndSaveNotes,
  retrieveAndDecryptNotes,
} from '@utils/EncryptionUtils';
import {pop} from '@utils/NavigationUtils';
import {useState} from 'react';

const useAddNote = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddNote = async () => {
    try {
      const note = {
        id: Date.now().toString(),
        title,
        description,
        date: new Date(),
      };
      const existingNotes = await retrieveAndDecryptNotes();
      const updatedNotes = [...(existingNotes || []), note];
      await encryptAndSaveNotes(updatedNotes);
      pop();
    } catch (error) {
      console.error('Failed to add note:', error);
    }
  };

  return {title, description, setTitle, setDescription, handleAddNote};
};

export default useAddNote;
