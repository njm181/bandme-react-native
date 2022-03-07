/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//hacer mas generico con el height, width, text and colour
interface Props{
    title: string;
    height?: number;
    width?: number | string;
    color?: string;
    clickAction: () => void;
}

export const ButtonPrimary = ({ title, height = 50, width = 120, color = '#ff8f00', clickAction }: Props) => {
  return (
    <TouchableOpacity
        style={{
            width: width,
            height: height,
            flexDirection: 'row',
            backgroundColor: color,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        }}
        onPress={ clickAction }
        activeOpacity={0.5}>
            <Text
                style={{
                    fontSize: 20,
                    color: 'white',
                    fontWeight: 'bold',
                }}
            >
                {title}
            </Text>
    </TouchableOpacity>
  );
};
