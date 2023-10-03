import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from '@themes';
import {AddNote, EditNote, ListNotes, Login} from '@screens';
import {StackParams} from '@types';

const Stack = createNativeStackNavigator<StackParams>();

export const Routes = () => {
  return (
    <NavigationContainer>
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
