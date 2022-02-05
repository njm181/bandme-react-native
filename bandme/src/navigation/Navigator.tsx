/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen } from '../screens/login/WelcomeScreen';
import { UserTypeScreen } from '../screens/login/UserTypeScreen';
//import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DashboardScreen } from '../screens/dashboard/DashboardScreen';
import { RegistrationFormPasswordScreen } from '../screens/login/RegistrationFormPasswordScreen';
import { RegistrationFormEmailScreen } from '../screens/login/RegistrationFormEmailScreen';
import { UserAuth } from '../interfaces/UserAuth';


export type RootStackParams = {
  WelcomeScreen: undefined;
  UserTypeScreen: UserAuth;
  RegistrationFormEmailScreen: undefined;
  RegistrationFormPasswordScreen: {existUser: Boolean, email: string};
  DashboardScreen: String;
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {

  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
              backgroundColor: '#f5f5f5',
          },
        }}
    >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="UserTypeScreen" component={UserTypeScreen} />
        <Stack.Screen name="RegistrationFormEmailScreen" component={RegistrationFormEmailScreen} />
        <Stack.Screen name="RegistrationFormPasswordScreen" component={RegistrationFormPasswordScreen} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
    </Stack.Navigator>
  );
};
