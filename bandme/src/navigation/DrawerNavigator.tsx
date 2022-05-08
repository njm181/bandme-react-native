/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NotificationCenterScreen } from '../screens/notification/NotificationCenterScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { CreateEditPublicationScreen } from '../screens/publication/CreateEditPublicationScreen';
import { Navigator } from './Navigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Navigator" component={Navigator} />
      <Drawer.Screen name="ProfileScreen" options={{title: 'Profile'}} component={ProfileScreen} />
      <Drawer.Screen name="CreateEditPublicationScreen" options={{title: 'Create'}} component={CreateEditPublicationScreen} />
      <Drawer.Screen name="NotificationCenterScreen" options={{title: 'Notifications'}} component={NotificationCenterScreen} />
    </Drawer.Navigator>
  );
};
