/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

interface Props {
  onPressAction?: () => void;
}


export const ButtonSharePost = ({ onPressAction }: Props ) => {
  return (
    <TouchableOpacity
      onPress={ onPressAction }
    >
        <Image
          style={{
            width: 20,
            height: 20,
          }}
          source={ require('../../assets/share_24.png') }
        />
    </TouchableOpacity>
  )
}
