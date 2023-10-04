import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@themes';
import {fontScale, horizontalScale, verticalScale} from '@utils/StyleUtils';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(40),
    borderRadius: 10,
    paddingHorizontal: horizontalScale(16),
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.gray,
    marginVertical: verticalScale(16),
  },
  input: {
    fontSize: fontScale(12),
    fontFamily: Fonts.Inter,
    color: Colors.gray,
    flex: 1,
    top: 1,
  },
});
