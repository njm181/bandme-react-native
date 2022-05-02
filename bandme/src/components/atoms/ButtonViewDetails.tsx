/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

interface Props {
  onPressAction: () => void;
}

export const ButtonViewDetails = ({ onPressAction }: Props ) => {
  return (
    <TouchableOpacity
      onPress={ () => onPressAction() }
    >
        <Image
            style={{
              width: 20,
              height: 20,
              marginHorizontal: 12,
            }}
            source={ require('../../assets/details_24.png') }
        />
    </TouchableOpacity>
  );
};
