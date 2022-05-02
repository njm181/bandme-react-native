/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  isLike: boolean;
  isShare: boolean;
  onPressAction: () => void;
}

export const ButtonCircleLikeShare = ({ isLike, isShare, onPressAction }: Props) => {

  const like = require('../../assets/like_32.png');
  const dislike = require('../../assets/dislike_32.png');
  const share = require('../../assets/share_24.png');


  return (
    <TouchableOpacity
      onPress={ onPressAction }
      style={ styles.roundedButton }>
        {

          !isShare ?
            <Image
              style={{
                width: 25,
                height: 25,
              }}
              source={ isLike ? like : dislike } //ver si dentro del corazon se le puede poner el contador de likes 1,2,3...n
            /> :
            <Image
              style={{
                width: 20,
                height: 20,
              }}
              source={ share } //ver si dentro del corazon se le puede poner el contador de likes 1,2,3...n
            />

        }

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  roundedButton: {
    width: 40,
    height: 40,
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
