/* eslint-disable no-label-var */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NotificationCenterScreen } from '../screens/notification/NotificationCenterScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { CreateEditPublicationScreen } from '../screens/publication/CreateEditPublicationScreen';
import { DashboardScreen } from '../screens/dashboard/DashboardScreen';
import { Platform, Text } from 'react-native';
import { PremiumScreen } from '../screens/dashboard/PremiumScreen';
import Icon from 'react-native-vector-icons/Ionicons';


export const Tabs = () => {
  return Platform.OS === 'ios' 
            ? <BottomIosNavigator/> 
            : <BottomAndroidNavigator/>
};



const TabAndroid = createMaterialBottomTabNavigator();

const BottomAndroidNavigator = () =>  {
  return (
    <TabAndroid.Navigator
      barStyle={{
        backgroundColor: '#ff8f00',
      }}
      activeColor={'white'}
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          color = 'white';
          let iconName: string = '';
          switch (route.name) {
            case 'DashboardScreen':
              iconName = 'home';
            break;
            case 'ProfileScreen':
              iconName = 'person';
            break;
            case 'CreateEditPublicationScreen':
              iconName = 'create';
            break;
            case 'NotificationCenterScreen':
              iconName = 'notifications';
            break;
            case 'PremiumScreen':
              iconName = 'trophy';
            break;
          }
          return <Icon
                      name= { iconName }
                      size={20}
                      color= "#ffffff"
                  />
        }
      }) }
    >
      <TabAndroid.Screen name="DashboardScreen" options={{title: 'Home'}}  component={DashboardScreen} />
      <TabAndroid.Screen name="ProfileScreen" options={{title: 'Profile'}} component={ProfileScreen} />
      <TabAndroid.Screen name="CreateEditPublicationScreen" options={{title: 'Create'}} component={CreateEditPublicationScreen} />
      <TabAndroid.Screen name="NotificationCenterScreen" options={{title: 'Notification'}} component={NotificationCenterScreen} />
      <TabAndroid.Screen name="PremiumScreen" options={{title: 'Premium'}} component={PremiumScreen} />
    </TabAndroid.Navigator>
  );
}



const TabIos = createBottomTabNavigator();

const BottomIosNavigator = () => {
  return (
    <TabIos.Navigator
      /* tabBarOptions={{
        
      }} */
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({ color, focused }) => {

          let iconName: string = '';
          switch (route.name) {
            case 'DashboardScreen':
              iconName: 'T1'
            break;
            case 'ProfileScreen':
              iconName: 'T2';
            break;
            case 'CreateEditPublicationScreen':
              iconName: 'T3'
            break;
            case 'NotificationCenterScreen':
              iconName: 'T4'
            break;
          }
          return <Text style={{color: 'red'}}> iconName </Text>
        }
      }) }
    >
      <TabIos.Screen name="DashboardScreen" component={DashboardScreen} />
      <TabIos.Screen name="ProfileScreen" component={ProfileScreen} />
      <TabIos.Screen name="CreateEditPublicationScreen" component={CreateEditPublicationScreen} />
      <TabIos.Screen name="NotificationCenterScreen" component={NotificationCenterScreen} />
      <TabAndroid.Screen name="PremiumScreen" options={{title: 'Premium'}} component={PremiumScreen} />
    </TabIos.Navigator>
  );
}