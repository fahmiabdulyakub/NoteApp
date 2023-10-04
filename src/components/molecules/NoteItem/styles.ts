import {Colors, Fonts} from '@themes';
import {fontScale, horizontalScale, verticalScale} from '@utils/StyleUtils';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: fontScale(16),
    fontWeight: 'bold',
    marginBottom: verticalScale(5),
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.black,
  },
  description: {
    fontSize: fontScale(14),
    color: Colors.gray,
    fontFamily: Fonts.Inter,
  },
  contenContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.black,
    width: '100%',
    height: verticalScale(230),
    paddingHorizontal: horizontalScale(8),
    paddingVertical: verticalScale(8),
  },
});

export default styles;
