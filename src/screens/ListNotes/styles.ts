import {Colors, Fonts} from '@themes';
import {fontScale, horizontalScale, verticalScale} from '@utils/StyleUtils';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: verticalScale(16),
    paddingHorizontal: horizontalScale(16),
  },
  title: {
    fontFamily: Fonts.Inter,
    fontWeight: 'bold',
    fontSize: fontScale(32),
    color: Colors.black,
  },
  listContainer: {
    paddingVertical: verticalScale(16),
  },
  addNoteButton: {
    position: 'absolute',
    bottom: verticalScale(16),
    right: horizontalScale(16),
    backgroundColor: Colors.blue,
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(16),
    borderRadius: 100,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default styles;
