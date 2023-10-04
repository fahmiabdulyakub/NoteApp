import {Colors, Fonts} from '@themes';
import {fontScale, horizontalScale, verticalScale} from '@utils/StyleUtils';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: fontScale(16),
    fontWeight: 'bold',
    marginTop: verticalScale(5),
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.black,
    textAlign: 'center',
  },
  description: {
    fontSize: fontScale(14),
    color: Colors.gray,
    fontFamily: Fonts.Inter,
  },
  contenContainer: {
    borderRadius: 10,
    backgroundColor: Colors.white,
    width: '100%',
    height: verticalScale(230),
    paddingHorizontal: horizontalScale(8),
    paddingVertical: verticalScale(8),
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

export default styles;
