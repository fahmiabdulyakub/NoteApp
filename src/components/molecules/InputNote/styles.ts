import {Colors, Fonts} from '@themes';
import {fontScale, horizontalScale, verticalScale} from '@utils/StyleUtils';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: verticalScale(16),
  },
  title: {
    fontFamily: Fonts.Inter,
    fontWeight: 'bold',
    fontSize: fontScale(25),
    color: Colors.black,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
    paddingHorizontal: horizontalScale(16),
  },
  description: {
    flex: 1,
    fontFamily: Fonts.PoppinsMedium,
    fontSize: fontScale(14),
    color: Colors.black,
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(16),
    height: verticalScale(550),
    textAlign: 'justify',
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: Colors.blue,
    borderRadius: 10,
    marginHorizontal: horizontalScale(16),
    marginVertical: verticalScale(16),
  },
});

export default styles;
