/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  isLike: boolean;
  isShare: boolean;
}

export const ButtonCircleLikeShare = ({ isLike, isShare }: Props) => {

  const like = require('../../assets/like_32.png');
  const dislike = require('../../assets/dislike_32.png');
  const share = require('../../assets/share_24.png');


  return (
    <TouchableOpacity
      style={ styles.roundedButton }>

        {

          !isShare ?
            <Image
              source={ isLike ? like : dislike } //ver si dentro del corazon se le puede poner el contador de likes 1,2,3...n
            /> :
            <Image
            source={ share } //ver si dentro del corazon se le puede poner el contador de likes 1,2,3...n
            />

        }

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  roundedButton: {
    width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#fafafa',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginEnd: 8,
  },
});
