import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@themes';
import {fontScale, horizontalScale, verticalScale} from '@utils/StyleUtils';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: verticalScale(5),
    width: horizontalScale(20),
    borderWidth: 1,
    borderColor: Colors.light_grey,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    fontSize: fontScale(12),
    color: Colors.white,
    fontFamily: Fonts.PoppinsMedium,
    top: verticalScale(1),
  },
});
