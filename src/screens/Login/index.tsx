import {Button, Input} from '@components/atoms';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import useLogin from './hooks/useLogin';

const Login = () => {
  const {
    password,
    handleTextPasswordLogin,
    checkBiometricSupport,
    setPassword,
  } = useLogin();

  return (
    <View style={styles.container}>
      <View>
        <Input
          value={password}
          onChangeText={setPassword}
          placeholder="Input Password"
          secureTextEntry
        />
        <Button
          style={styles.loginButton}
          textStyle={styles.titleLoginButton}
          title="Password Login"
          onPress={handleTextPasswordLogin}
        />
        <Button
          title="Authenticate Login"
          style={styles.authenticateButton}
          onPress={checkBiometricSupport}
        />
      </View>
    </View>
  );
};

export default Login;
