/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

//hacer mas generico con el height, width, text and colour
interface Props{
    title: string;
    height?: number;
    width?: number | string;
    color?: string;
    clickAction?: () => void;
    isDisabled?: boolean;
    fontSize?: number;
}

export const ButtonPrimary = ({ title, height = 50, width = 120, color = '#ff8f00', clickAction, isDisabled, fontSize = 20 }: Props) => {
  return (
    <TouchableOpacity
        style={[
            {
                width,
                height: height,
                backgroundColor: color,
            },
            styleButton.button,
            isDisabled ? { backgroundColor: 'gray' } : { backgroundColor: color }
        ]}
        onPress={ clickAction }
        disabled={isDisabled}
        activeOpacity={0.5}>
            <Text
                style={{
                    fontSize: fontSize,
                    color: 'white',
                    fontWeight: 'bold',
                }}
            >
                {title}
            </Text>
    </TouchableOpacity>
  );
};

const styleButton = StyleSheet.create({
    button: {
        flexDirection: 'row',
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
    }
});