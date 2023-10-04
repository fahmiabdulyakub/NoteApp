import {NoteType} from '@types';
import {navigate} from '@utils/NavigationUtils';

const useNoteItem = (note: NoteType) => {
  const onPress = () => {
    navigate('EditNote', note);
  };

  return {
    onPress,
  };
};

export default useNoteItem;
