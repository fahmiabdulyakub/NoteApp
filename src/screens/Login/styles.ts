import {Colors} from '@themes';
import {horizontalScale, verticalScale} from '@utils/StyleUtils';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: verticalScale(10),
    paddingHorizontal: horizontalScale(16),
    justifyContent: 'center',
  },
  authenticateButton: {
    backgroundColor: Colors.blue,
    marginVertical: verticalScale(10),
  },
  loginButton: {
    backgroundColor: Colors.white,
    borderColor: Colors.black,
  },
  titleLoginButton: {
    color: Colors.black,
  },
});

export default styles;
