/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useState} from 'react';
import {
  AppState,
  AppStateStatus,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from '@themes';
import {AddNote, EditNote, ListNotes, Login} from '@screens';
import {StackParams} from '@types';
import {navigationRef, replace} from '@utils/NavigationUtils';

const Stack = createNativeStackNavigator<StackParams>();

export const Routes = () => {
  const [appState, setAppState] = useState(AppState.currentState);
  const [lastActiveTime, setLastActiveTime] = useState<number | null>(null);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );
    return () => {
      subscription.remove();
    };
  }, []);
  console.log('APPSTATE : ', appState);
  const handleAppStateChange = useCallback(
    (nextAppState: AppStateStatus) => {
      if (appState === 'active' && nextAppState === 'background') {
        setLastActiveTime(Date.now());
      }
      console.log(appState, nextAppState);
      if (appState === 'background' && nextAppState === 'active') {
        const currentTime = Date.now();
        if (lastActiveTime && currentTime - lastActiveTime >= 60000) {
          // User has been in the background for more than 1 minute, require re-login
          replace('Login');
        }
      }

      setAppState(nextAppState);
    },
    [appState, lastActiveTime],
  );

  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView style={styles.SafeAreaView}>
        <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ListNotes"
            component={ListNotes}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditNote"
            component={EditNote}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddNote"
            component={AddNote}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});
