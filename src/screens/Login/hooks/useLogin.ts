import {navigate, replace} from '@utils/NavigationUtils';
import {useState} from 'react';
import {Alert} from 'react-native';
import BiometricAuth from 'react-native-biometrics';
const useLogin = () => {
  const [password, setPassword] = useState('');

  const checkBiometricSupport = async () => {
    try {
      const rnBiometrics = new BiometricAuth();
      const supported = await rnBiometrics.isSensorAvailable();

      if (supported) {
        const result = await rnBiometrics.simplePrompt({
          promptMessage: 'Authenticate to access your notes',
        });

        if (result.success) {
          replace('ListNotes');
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleTextPasswordLogin = async () => {
    if (password === '123456') {
      navigate('ListNotes');
    } else {
      Alert.alert('Login Failed', 'Incorrect password');
    }
  };
  return {
    password,
    handleTextPasswordLogin,
    checkBiometricSupport,
    setPassword,
  };
};

export default useLogin;
