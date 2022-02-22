/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface Props {
    title: string;
    size: number;
    colour: string;
}

export const TextTitle = ({ title, size, colour}: Props ) => {
  return (
      <Text
        style={ [styles.title, { fontSize: size, color: colour}] }
      >
          { title }
      </Text>
  );
};

const styles = StyleSheet.create({
    title: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
});
