/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  goToBack: () => void;
}

export const ButtonBack = ({ goToBack }: Props) => {
  return (
    <TouchableOpacity
    style={{ paddingStart: 16, paddingTop: 16 }}
    onPress={ () => {goToBack();}}
    >
    <Icon
        name= { 'arrow-back-outline' }
        size={25}
        color= "#000000"
    />
    </TouchableOpacity>
  );
};
