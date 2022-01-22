/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable eqeqeq */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {stylesWelcome} from '../../styles/WelcomeStyles';

interface Props {
  title: string;
  clickAction: () => void;
  iconName: string;
}

export const ButtonLogin = ({title, clickAction, iconName}: Props) => {

  return (
    <View>
      {
        iconName.length == 0 ?
          <View style={stylesWelcome.buttonLoginContainer}>
            <TouchableOpacity
              style={stylesWelcome.buttonLogin}
              onPress={() => clickAction()}
              activeOpacity={0.5}>
              <Text style={[
                stylesWelcome.titleButton,
                {
                  flex: 1,
                  textAlign: 'center',
                  marginLeft: 0,
                },
              ]}>{title}</Text>
            </TouchableOpacity>
          </View>
        :
          <View style={stylesWelcome.buttonLoginContainer}>
            <TouchableOpacity
              style={stylesWelcome.buttonLogin}
              onPress={() => clickAction()}
              activeOpacity={0.5}>
              <View
                style={{
                  width: '30%',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <Icon name={iconName} size={25} color={'black'} />
              </View>
              <Text style={stylesWelcome.titleButton}>{title}</Text>
            </TouchableOpacity>
          </View>
      }
    </View>
  );
};
