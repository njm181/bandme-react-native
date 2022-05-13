/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useSharePublication } from '../../hooks/useSharePublication';

interface Props {
  url: string
}


export const ButtonSharePost = ({ url }: Props ) => {

  const { sharePublication } = useSharePublication();

  return (
    <TouchableOpacity
      onPress={ () => sharePublication(url)}
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
