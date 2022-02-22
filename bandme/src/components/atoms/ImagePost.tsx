/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, StyleSheet } from 'react-native'

interface Props {
  imageSource: string;
  heightSource: number;
  borderRadius: number
}

export const ImagePost = ({imageSource, heightSource = 200, borderRadius = 15}: Props) => {
//  var {width} = Dimensions.get('window');

  return (
    <Image
        style={ [styles.image, {height: heightSource, borderRadius: borderRadius}] }
        source={ {uri: imageSource}}
    />
  );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        alignSelf: 'center',
        marginVertical: 12,
    },
});
