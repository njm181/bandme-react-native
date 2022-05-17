/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react'
import { KeyboardTypeOptions, StyleSheet, TextInput, View } from 'react-native';

interface Props {
  placeholder: string;
  maxLength?: number;
  keyboardType: KeyboardTypeOptions;
  isMultiline: boolean;
  width: string | null;
  //textState: {text: string, validated: boolean};
  validateTextInput: (text: string, name: string) => void;
  value: string;
  isRequired: boolean;
  validateButtonState: (fieldValue: boolean, name: string) => void;
  isPublicationEdit?: boolean;
  publicationDetail?: string;
}

export const TextInputStringNumber = ({ placeholder, maxLength = 200, keyboardType, 
                                        isMultiline, width, validateTextInput, isRequired = false,
                                        validateButtonState, isPublicationEdit = false, publicationDetail }: Props) => {

    const [text, onChangeText] = useState('');

    const [textEditPublication, onChangeTextEditPublication] = useState(publicationDetail?.toString());

    /* const [number, onChangeNumber] = React.useState(null); */
    const [focus, setFocus] = useState(false);

  return (
    <View>
        <TextInput
          style={[
            isMultiline ? stylesMultiLine.input : styles.input,
            {
              width: width == null ? '100%' : width,
            },
            focus ? stylesOnBlurFocus.inputOnFocus : null,
          ]}
          onChangeText={ (inputText) =>
             {
              console.log('placeholder: ' + placeholder + '// texto ingresado: ' + inputText)
              isPublicationEdit ? onChangeTextEditPublication(inputText) : onChangeText(inputText);
              validateTextInput(inputText, placeholder)
              console.log('TEXTO INGRESADO: ' + inputText);
              isRequired ?
                inputText != '' ?
                  validateButtonState(true, placeholder)
                  :
                  validateButtonState(false, placeholder)
                :
              null
            }
          }
          value={ isPublicationEdit ? textEditPublication : text }
          placeholder = {
            isRequired ? placeholder + ' (Requerido)' : placeholder
          }
          keyboardType={ keyboardType }
          placeholderTextColor={'#9e9e9e'}
          autoFocus={true}
          onFocus={() => setFocus(true)}
          onBlur={() => {setFocus(false)}}
          multiline={isMultiline}
          maxLength={maxLength}
          numberOfLines={4}
      />
    </View>
  );
};


const stylesOnBlurFocus = StyleSheet.create({
  inputOnFocus: { borderColor: '#ff8f00' },
  inputOnBlur: { borderColor: 'green' },
});

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
