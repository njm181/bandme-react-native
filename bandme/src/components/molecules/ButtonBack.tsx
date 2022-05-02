/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  goToBack: () => void;
  paddingStart?: number;
  color?: string;
}

export const ButtonBack = ({ goToBack, paddingStart = 16, color = '#000000' }: Props) => {
  return (
    <TouchableOpacity
    style={{ paddingStart: paddingStart, paddingTop: 16 }}
    onPress={ () => {goToBack();}}
    >
    <Icon
        name= { 'arrow-back-outline' }
        size={25}
        color= {color}
    />
    </TouchableOpacity>
  );
};
