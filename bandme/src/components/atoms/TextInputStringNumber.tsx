/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react'
import { KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native';

interface Props {
  placeholder: string;
  maxLength: number;
  keyboardType: KeyboardTypeOptions;
  isMultiline: boolean;
  width: string | null;
}

export const TextInputStringNumber = ({ placeholder, maxLength, keyboardType, isMultiline, width }: Props) => {

    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState(null);

  return (
      <TextInput
        style={[
          isMultiline ? stylesMultiLine.input : styles.input,
          {
            width: width == null ? '100%' : width,
          },
        ]}
        onChangeText={onChangeText}
        value={text}
        placeholder= {placeholder}
        keyboardType={ keyboardType }
        placeholderTextColor={'#9e9e9e'}
        autoFocus={true}
        multiline={isMultiline}
        maxLength={maxLength}
        numberOfLines={4}
    />
  );
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      marginTop: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
    },
  });

  const stylesMultiLine = StyleSheet.create({
    input: {
      height:80,
      marginTop: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
    },
  });

  const stylesAddress = StyleSheet.create({
    input: {
      height:40,
      marginTop: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
    },
  });