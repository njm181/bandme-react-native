/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { NotificationCenterScreen } from '../screens/notification/NotificationCenterScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { CreateEditPublicationScreen } from '../screens/publication/CreateEditPublicationScreen';
import { Navigator } from './Navigator';
import { View } from 'react-native';
import { Image, Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={ (props) => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="Navigator" component={Navigator} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <Drawer.Screen name="CreateEditPublicationScreen" component={CreateEditPublicationScreen} />
      <Drawer.Screen name="NotificationCenterScreen" component={NotificationCenterScreen} />
    </Drawer.Navigator>
  );
};


const MenuInterno = ( { navigation }: DrawerContentComponentProps<DrawerContentOptions> ) => {

  return (
    <DrawerContentScrollView>
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={ () => navigation.navigate('ProfileScreen') }
        >
          <Image
            style={{
              height: 150,
              width: 150,
              borderRadius: 100,
            }}
            source={{uri:'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1440924046/wi1mlnkbn2jluko8pzkj.png'}}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginHorizontal: 30,
          marginVertical: 30,
        }}
      >

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={ () => navigation.navigate('CreateEditPublicationScreen') }
          style={{
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
            }}
          >Create</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={ () => navigation.navigate('NotificationCenterScreen') }
          style={{
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
            }}
          >Notifications</Text>
        </TouchableOpacity>

      </View>


    </DrawerContentScrollView>
  )
}

