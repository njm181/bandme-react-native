/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

export const ButtonViewDetails = () => {
  return (
    <TouchableOpacity>
        <Image
            style={{marginHorizontal: 12}}
            source={ require('../../assets/details_24.png') }
        />
    </TouchableOpacity>
  );
};
