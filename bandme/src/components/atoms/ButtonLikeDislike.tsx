/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { Image, TouchableOpacity } from 'react-native';
import { Publication } from '../../interfaces/Publication';

//recibo un true/false
interface Props {
    isLike?: boolean;
    onPressAction?: () => void;
    publication: Publication;
}

export const ButtonLikeDislike = ({ isLike, onPressAction, publication }: Props ) => {

    const like = require('../../assets/like_32.png');
    const dislike = require('../../assets/dislike_32.png');

    const [getLike, setLike] = useState(false);

    const setLikeState = () => {
      if (publication.like) {
        setLike(false)
      } else {
        setLike(true)
      }
    }

  return (
    <TouchableOpacity
      onPress={ 
        () => {
          setLikeState();
          console.log('pulication like: ' + publication.like);

       }
      }
    >
        <Image
          style={{
            width: 24,
            height: 24,
          }}
          source={ getLike ? like : dislike } //ver si dentro del corazon se le puede poner el contador de likes 1,2,3...n
        />
    </TouchableOpacity>
  );
};

