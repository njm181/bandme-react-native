/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, TouchableOpacity } from 'react-native';

//recibo un true/false
interface Props {
    isLike: boolean;
}

export const ButtonLikeDislike = ({ isLike }: Props ) => {

    const like = require('../../assets/like_32.png');
    const dislike = require('../../assets/dislike_32.png');

  return (
    <TouchableOpacity>
        <Image
            source={ isLike ? like : dislike } //ver si dentro del corazon se le puede poner el contador de likes 1,2,3...n
        />
    </TouchableOpacity>
  );
};
