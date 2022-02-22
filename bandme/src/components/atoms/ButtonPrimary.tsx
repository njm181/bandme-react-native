/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react'
import { Text, TouchableOpacity } from 'react-native';

//hacer mas generico con el height, width, text and colour

export const ButtonPrimary = () => {
  return (
    <TouchableOpacity
        style={{
            width: 120,
            height: 50,
            flexDirection: 'row',
            backgroundColor: '#ff8f00',
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
        onPress={() => console.log('Click button primary')}//clickAction()
        activeOpacity={0.5}>
            <Text
                style={{
                    fontSize: 20,
                    color: 'white',
                    fontWeight: 'bold',
                }}
            >Book</Text>
    </TouchableOpacity>
  );
};
